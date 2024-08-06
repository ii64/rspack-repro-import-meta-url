"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_freestyler_FreestylerPanel_test_js"], {
"./panels/freestyler/FreestylerPanel.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _freestyler_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./freestyler.js */ "./panels/freestyler/freestyler.js");
// Copyright 2024 The Chromium Authors. All rights reserved.
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




function getTestAidaClient() {
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
                                    metadata: {}
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
}
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.describeWithEnvironment)('FreestylerPanel', function() {
    var mockView = sinon.stub();
    beforeEach(function() {
        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.registerNoopActions)([
            'elements.toggle-element-search'
        ]);
        mockView.reset();
    });
    describe('consent view', function() {
        it('should render consent view when the consent is not given before', /*#__PURE__*/ _async_to_generator(function() {
            return _ts_generator(this, function(_state) {
                _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.settingForTest('freestyler-dogfood-consent-onboarding-finished').set(false);
                new _freestyler_js__WEBPACK_IMPORTED_MODULE_3__.FreestylerPanel(mockView, {
                    aidaClient: getTestAidaClient(),
                    aidaAvailability: _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaAvailability.AVAILABLE
                });
                sinon.assert.calledWith(mockView, sinon.match({
                    state: "consent-view" /* Freestyler.State.CONSENT_VIEW */ 
                }));
                return [
                    2
                ];
            });
        }));
        it('should set the setting to true and render chat view on accept click', /*#__PURE__*/ _async_to_generator(function() {
            var setting, callArgs;
            return _ts_generator(this, function(_state) {
                setting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.settingForTest('freestyler-dogfood-consent-onboarding-finished');
                setting.set(false);
                new _freestyler_js__WEBPACK_IMPORTED_MODULE_3__.FreestylerPanel(mockView, {
                    aidaClient: getTestAidaClient(),
                    aidaAvailability: _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaAvailability.AVAILABLE
                });
                callArgs = mockView.getCall(0).args[0];
                mockView.reset();
                callArgs.onAcceptConsentClick();
                assert.isTrue(setting.get());
                sinon.assert.calledWith(mockView, sinon.match({
                    state: "chat-view" /* Freestyler.State.CHAT_VIEW */ 
                }));
                return [
                    2
                ];
            });
        }));
        it('should render chat view when the consent is given before', /*#__PURE__*/ _async_to_generator(function() {
            return _ts_generator(this, function(_state) {
                _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.settingForTest('freestyler-dogfood-consent-onboarding-finished').set(true);
                new _freestyler_js__WEBPACK_IMPORTED_MODULE_3__.FreestylerPanel(mockView, {
                    aidaClient: getTestAidaClient(),
                    aidaAvailability: _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaAvailability.AVAILABLE
                });
                sinon.assert.calledWith(mockView, sinon.match({
                    state: "chat-view" /* Freestyler.State.CHAT_VIEW */ 
                }));
                return [
                    2
                ];
            });
        }));
    });
    describe('showConfirmSideEffectUi', function() {
        beforeEach(function() {
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.settingForTest('freestyler-dogfood-consent-onboarding-finished').set(true);
        });
        it('should render the view with confirmSideEffectDialog prop', /*#__PURE__*/ _async_to_generator(function() {
            var panel, lastArg;
            return _ts_generator(this, function(_state) {
                panel = new _freestyler_js__WEBPACK_IMPORTED_MODULE_3__.FreestylerPanel(mockView, {
                    aidaClient: getTestAidaClient(),
                    aidaAvailability: _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaAvailability.AVAILABLE
                });
                void panel.showConfirmSideEffectUi('code');
                lastArg = mockView.lastCall.args[0];
                assert.exists(lastArg.confirmSideEffectDialog);
                assert.strictEqual(lastArg.confirmSideEffectDialog.code, 'code');
                return [
                    2
                ];
            });
        }));
        it('should resolve with the result of the onAnswer call', function(done) {
            var panel = new _freestyler_js__WEBPACK_IMPORTED_MODULE_3__.FreestylerPanel(mockView, {
                aidaClient: getTestAidaClient(),
                aidaAvailability: _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaAvailability.AVAILABLE
            });
            void panel.showConfirmSideEffectUi('code').then(function(result) {
                assert.isTrue(result);
                done();
            });
            var lastArg = mockView.lastCall.args[0];
            assert.exists(lastArg.confirmSideEffectDialog);
            lastArg.confirmSideEffectDialog.onAnswer(true);
        });
    });
    describe('on rate click', function() {
        beforeEach(function() {
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.settingForTest('freestyler-dogfood-consent-onboarding-finished').set(true);
        });
        afterEach(function() {
            // @ts-expect-error global test variable
            setFreestylerServerSideLoggingEnabled(false);
        });
        it('should allow logging if configured', function() {
            // @ts-expect-error global test variable
            setFreestylerServerSideLoggingEnabled(true);
            var aidaClient = getTestAidaClient();
            new _freestyler_js__WEBPACK_IMPORTED_MODULE_3__.FreestylerPanel(mockView, {
                aidaClient: aidaClient,
                aidaAvailability: _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaAvailability.AVAILABLE
            });
            var callArgs = mockView.getCall(0).args[0];
            mockView.reset();
            callArgs.onFeedbackSubmit(0, "POSITIVE" /* Host.AidaClient.Rating.POSITIVE */ );
            sinon.assert.match(aidaClient.registerClientEvent.firstCall.firstArg, sinon.match({
                disable_user_content_logging: false
            }));
        });
        it('should send POSITIVE rating to aida client when the user clicks on positive rating', function() {
            var RPC_ID = 0;
            var aidaClient = getTestAidaClient();
            new _freestyler_js__WEBPACK_IMPORTED_MODULE_3__.FreestylerPanel(mockView, {
                aidaClient: aidaClient,
                aidaAvailability: _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaAvailability.AVAILABLE
            });
            var callArgs = mockView.getCall(0).args[0];
            mockView.reset();
            callArgs.onFeedbackSubmit(RPC_ID, "POSITIVE" /* Host.AidaClient.Rating.POSITIVE */ );
            sinon.assert.match(aidaClient.registerClientEvent.firstCall.firstArg, sinon.match({
                corresponding_aida_rpc_global_id: RPC_ID,
                do_conversation_client_event: {
                    user_feedback: {
                        sentiment: 'POSITIVE'
                    }
                },
                disable_user_content_logging: true
            }));
        });
        it('should send NEGATIVE rating to aida client when the user clicks on positive rating', function() {
            var RPC_ID = 0;
            var aidaClient = getTestAidaClient();
            new _freestyler_js__WEBPACK_IMPORTED_MODULE_3__.FreestylerPanel(mockView, {
                aidaClient: aidaClient,
                aidaAvailability: _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaAvailability.AVAILABLE
            });
            var callArgs = mockView.getCall(0).args[0];
            mockView.reset();
            callArgs.onFeedbackSubmit(RPC_ID, "NEGATIVE" /* Host.AidaClient.Rating.NEGATIVE */ );
            sinon.assert.match(aidaClient.registerClientEvent.firstCall.firstArg, sinon.match({
                corresponding_aida_rpc_global_id: RPC_ID,
                do_conversation_client_event: {
                    user_feedback: {
                        sentiment: 'NEGATIVE'
                    }
                },
                disable_user_content_logging: true
            }));
        });
        it('should send feedback text with data', function() {
            var RPC_ID = 0;
            var feedback = 'This helped me a ton.';
            var aidaClient = getTestAidaClient();
            new _freestyler_js__WEBPACK_IMPORTED_MODULE_3__.FreestylerPanel(mockView, {
                aidaClient: aidaClient,
                aidaAvailability: _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaAvailability.AVAILABLE
            });
            var callArgs = mockView.getCall(0).args[0];
            mockView.reset();
            callArgs.onFeedbackSubmit(RPC_ID, "POSITIVE" /* Host.AidaClient.Rating.POSITIVE */ , feedback);
            sinon.assert.match(aidaClient.registerClientEvent.firstCall.firstArg, sinon.match({
                corresponding_aida_rpc_global_id: RPC_ID,
                do_conversation_client_event: {
                    user_feedback: {
                        sentiment: 'POSITIVE',
                        user_input: {
                            comment: feedback
                        }
                    }
                },
                disable_user_content_logging: true
            }));
        });
    });
}); //# sourceMappingURL=FreestylerPanel.test.js.map


}),
"./panels/freestyler/freestyler.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ActionDelegate: function() { return /* reexport safe */ _FreestylerPanel_js__WEBPACK_IMPORTED_MODULE_3__.ActionDelegate; },
  DOGFOOD_INFO: function() { return /* reexport safe */ _components_FreestylerChatUi_js__WEBPACK_IMPORTED_MODULE_2__.DOGFOOD_INFO; },
  ExecutionError: function() { return /* reexport safe */ _FreestylerEvaluateAction_js__WEBPACK_IMPORTED_MODULE_0__.ExecutionError; },
  FIX_THIS_ISSUE_PROMPT: function() { return /* reexport safe */ _FreestylerAgent_js__WEBPACK_IMPORTED_MODULE_4__.FIX_THIS_ISSUE_PROMPT; },
  FOR_TEST: function() { return /* reexport safe */ _components_FreestylerChatUi_js__WEBPACK_IMPORTED_MODULE_2__.FOR_TEST; },
  FreestylerAgent: function() { return /* reexport safe */ _FreestylerAgent_js__WEBPACK_IMPORTED_MODULE_4__.FreestylerAgent; },
  FreestylerChatUi: function() { return /* reexport safe */ _components_FreestylerChatUi_js__WEBPACK_IMPORTED_MODULE_2__.FreestylerChatUi; },
  FreestylerEvaluateAction: function() { return /* reexport safe */ _FreestylerEvaluateAction_js__WEBPACK_IMPORTED_MODULE_0__.FreestylerEvaluateAction; },
  FreestylerPanel: function() { return /* reexport safe */ _FreestylerPanel_js__WEBPACK_IMPORTED_MODULE_3__.FreestylerPanel; },
  ProvideFeedback: function() { return /* reexport safe */ _components_ProvideFeedback_js__WEBPACK_IMPORTED_MODULE_1__.ProvideFeedback; },
  SideEffectError: function() { return /* reexport safe */ _FreestylerEvaluateAction_js__WEBPACK_IMPORTED_MODULE_0__.SideEffectError; },
  Step: function() { return /* reexport safe */ _FreestylerAgent_js__WEBPACK_IMPORTED_MODULE_4__.Step; }
});
/* harmony import */var _FreestylerEvaluateAction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FreestylerEvaluateAction.js */ "./panels/freestyler/FreestylerEvaluateAction.js");
/* harmony import */var _components_ProvideFeedback_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ProvideFeedback.js */ "./panels/freestyler/components/ProvideFeedback.js");
/* harmony import */var _components_FreestylerChatUi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/FreestylerChatUi.js */ "./panels/freestyler/components/FreestylerChatUi.js");
/* harmony import */var _FreestylerPanel_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FreestylerPanel.js */ "./panels/freestyler/FreestylerPanel.js");
/* harmony import */var _FreestylerAgent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FreestylerAgent.js */ "./panels/freestyler/FreestylerAgent.js");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




 //# sourceMappingURL=freestyler.js.map


}),

}]);