"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_freestyler_FreestylerPanel_test_js"],{

/***/ "./panels/freestyler/FreestylerPanel.test.js":
/*!***************************************************!*\
  !*** ./panels/freestyler/FreestylerPanel.test.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _freestyler_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./freestyler.js */ "./panels/freestyler/freestyler.js");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




function getTestAidaClient() {
    return {
        async *fetch() {
            yield { explanation: 'test', metadata: {} };
        },
        registerClientEvent: sinon.spy(),
    };
}
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.describeWithEnvironment)('FreestylerPanel', () => {
    const mockView = sinon.stub();
    beforeEach(() => {
        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.registerNoopActions)(['elements.toggle-element-search']);
        mockView.reset();
    });
    describe('consent view', () => {
        it('should render consent view when the consent is not given before', async () => {
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.settingForTest('freestyler-dogfood-consent-onboarding-finished').set(false);
            new _freestyler_js__WEBPACK_IMPORTED_MODULE_3__.FreestylerPanel(mockView, {
                aidaClient: getTestAidaClient(),
                aidaAvailability: _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaAvailability.AVAILABLE,
            });
            sinon.assert.calledWith(mockView, sinon.match({ state: "consent-view" /* Freestyler.State.CONSENT_VIEW */ }));
        });
        it('should set the setting to true and render chat view on accept click', async () => {
            const setting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.settingForTest('freestyler-dogfood-consent-onboarding-finished');
            setting.set(false);
            new _freestyler_js__WEBPACK_IMPORTED_MODULE_3__.FreestylerPanel(mockView, {
                aidaClient: getTestAidaClient(),
                aidaAvailability: _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaAvailability.AVAILABLE,
            });
            const callArgs = mockView.getCall(0).args[0];
            mockView.reset();
            callArgs.onAcceptConsentClick();
            assert.isTrue(setting.get());
            sinon.assert.calledWith(mockView, sinon.match({ state: "chat-view" /* Freestyler.State.CHAT_VIEW */ }));
        });
        it('should render chat view when the consent is given before', async () => {
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.settingForTest('freestyler-dogfood-consent-onboarding-finished').set(true);
            new _freestyler_js__WEBPACK_IMPORTED_MODULE_3__.FreestylerPanel(mockView, {
                aidaClient: getTestAidaClient(),
                aidaAvailability: _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaAvailability.AVAILABLE,
            });
            sinon.assert.calledWith(mockView, sinon.match({ state: "chat-view" /* Freestyler.State.CHAT_VIEW */ }));
        });
    });
    describe('showConfirmSideEffectUi', () => {
        beforeEach(() => {
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.settingForTest('freestyler-dogfood-consent-onboarding-finished').set(true);
        });
        it('should render the view with confirmSideEffectDialog prop', async () => {
            const panel = new _freestyler_js__WEBPACK_IMPORTED_MODULE_3__.FreestylerPanel(mockView, {
                aidaClient: getTestAidaClient(),
                aidaAvailability: _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaAvailability.AVAILABLE,
            });
            void panel.showConfirmSideEffectUi('code');
            const lastArg = mockView.lastCall.args[0];
            assert.exists(lastArg.confirmSideEffectDialog);
            assert.strictEqual(lastArg.confirmSideEffectDialog.code, 'code');
        });
        it('should resolve with the result of the onAnswer call', done => {
            const panel = new _freestyler_js__WEBPACK_IMPORTED_MODULE_3__.FreestylerPanel(mockView, {
                aidaClient: getTestAidaClient(),
                aidaAvailability: _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaAvailability.AVAILABLE,
            });
            void panel.showConfirmSideEffectUi('code').then(result => {
                assert.isTrue(result);
                done();
            });
            const lastArg = mockView.lastCall.args[0];
            assert.exists(lastArg.confirmSideEffectDialog);
            lastArg.confirmSideEffectDialog.onAnswer(true);
        });
    });
    describe('on rate click', () => {
        beforeEach(() => {
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.settingForTest('freestyler-dogfood-consent-onboarding-finished').set(true);
        });
        afterEach(() => {
            // @ts-expect-error global test variable
            setFreestylerServerSideLoggingEnabled(false);
        });
        it('should allow logging if configured', () => {
            // @ts-expect-error global test variable
            setFreestylerServerSideLoggingEnabled(true);
            const aidaClient = getTestAidaClient();
            new _freestyler_js__WEBPACK_IMPORTED_MODULE_3__.FreestylerPanel(mockView, {
                aidaClient,
                aidaAvailability: _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaAvailability.AVAILABLE,
            });
            const callArgs = mockView.getCall(0).args[0];
            mockView.reset();
            callArgs.onFeedbackSubmit(0, "POSITIVE" /* Host.AidaClient.Rating.POSITIVE */);
            sinon.assert.match(aidaClient.registerClientEvent.firstCall.firstArg, sinon.match({
                disable_user_content_logging: false,
            }));
        });
        it('should send POSITIVE rating to aida client when the user clicks on positive rating', () => {
            const RPC_ID = 0;
            const aidaClient = getTestAidaClient();
            new _freestyler_js__WEBPACK_IMPORTED_MODULE_3__.FreestylerPanel(mockView, {
                aidaClient,
                aidaAvailability: _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaAvailability.AVAILABLE,
            });
            const callArgs = mockView.getCall(0).args[0];
            mockView.reset();
            callArgs.onFeedbackSubmit(RPC_ID, "POSITIVE" /* Host.AidaClient.Rating.POSITIVE */);
            sinon.assert.match(aidaClient.registerClientEvent.firstCall.firstArg, sinon.match({
                corresponding_aida_rpc_global_id: RPC_ID,
                do_conversation_client_event: {
                    user_feedback: {
                        sentiment: 'POSITIVE',
                    },
                },
                disable_user_content_logging: true,
            }));
        });
        it('should send NEGATIVE rating to aida client when the user clicks on positive rating', () => {
            const RPC_ID = 0;
            const aidaClient = getTestAidaClient();
            new _freestyler_js__WEBPACK_IMPORTED_MODULE_3__.FreestylerPanel(mockView, {
                aidaClient,
                aidaAvailability: _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaAvailability.AVAILABLE,
            });
            const callArgs = mockView.getCall(0).args[0];
            mockView.reset();
            callArgs.onFeedbackSubmit(RPC_ID, "NEGATIVE" /* Host.AidaClient.Rating.NEGATIVE */);
            sinon.assert.match(aidaClient.registerClientEvent.firstCall.firstArg, sinon.match({
                corresponding_aida_rpc_global_id: RPC_ID,
                do_conversation_client_event: {
                    user_feedback: {
                        sentiment: 'NEGATIVE',
                    },
                },
                disable_user_content_logging: true,
            }));
        });
        it('should send feedback text with data', () => {
            const RPC_ID = 0;
            const feedback = 'This helped me a ton.';
            const aidaClient = getTestAidaClient();
            new _freestyler_js__WEBPACK_IMPORTED_MODULE_3__.FreestylerPanel(mockView, {
                aidaClient,
                aidaAvailability: _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaAvailability.AVAILABLE,
            });
            const callArgs = mockView.getCall(0).args[0];
            mockView.reset();
            callArgs.onFeedbackSubmit(RPC_ID, "POSITIVE" /* Host.AidaClient.Rating.POSITIVE */, feedback);
            sinon.assert.match(aidaClient.registerClientEvent.firstCall.firstArg, sinon.match({
                corresponding_aida_rpc_global_id: RPC_ID,
                do_conversation_client_event: {
                    user_feedback: {
                        sentiment: 'POSITIVE',
                        user_input: {
                            comment: feedback,
                        },
                    },
                },
                disable_user_content_logging: true,
            }));
        });
    });
});
//# sourceMappingURL=FreestylerPanel.test.js.map

/***/ }),

/***/ "./panels/freestyler/freestyler.js":
/*!*****************************************!*\
  !*** ./panels/freestyler/freestyler.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionDelegate: () => (/* reexport safe */ _FreestylerPanel_js__WEBPACK_IMPORTED_MODULE_3__.ActionDelegate),
/* harmony export */   DOGFOOD_INFO: () => (/* reexport safe */ _components_FreestylerChatUi_js__WEBPACK_IMPORTED_MODULE_2__.DOGFOOD_INFO),
/* harmony export */   ExecutionError: () => (/* reexport safe */ _FreestylerEvaluateAction_js__WEBPACK_IMPORTED_MODULE_0__.ExecutionError),
/* harmony export */   FIX_THIS_ISSUE_PROMPT: () => (/* reexport safe */ _FreestylerAgent_js__WEBPACK_IMPORTED_MODULE_4__.FIX_THIS_ISSUE_PROMPT),
/* harmony export */   FOR_TEST: () => (/* reexport safe */ _components_FreestylerChatUi_js__WEBPACK_IMPORTED_MODULE_2__.FOR_TEST),
/* harmony export */   FreestylerAgent: () => (/* reexport safe */ _FreestylerAgent_js__WEBPACK_IMPORTED_MODULE_4__.FreestylerAgent),
/* harmony export */   FreestylerChatUi: () => (/* reexport safe */ _components_FreestylerChatUi_js__WEBPACK_IMPORTED_MODULE_2__.FreestylerChatUi),
/* harmony export */   FreestylerEvaluateAction: () => (/* reexport safe */ _FreestylerEvaluateAction_js__WEBPACK_IMPORTED_MODULE_0__.FreestylerEvaluateAction),
/* harmony export */   FreestylerPanel: () => (/* reexport safe */ _FreestylerPanel_js__WEBPACK_IMPORTED_MODULE_3__.FreestylerPanel),
/* harmony export */   ProvideFeedback: () => (/* reexport safe */ _components_ProvideFeedback_js__WEBPACK_IMPORTED_MODULE_1__.ProvideFeedback),
/* harmony export */   SideEffectError: () => (/* reexport safe */ _FreestylerEvaluateAction_js__WEBPACK_IMPORTED_MODULE_0__.SideEffectError),
/* harmony export */   Step: () => (/* reexport safe */ _FreestylerAgent_js__WEBPACK_IMPORTED_MODULE_4__.Step)
/* harmony export */ });
/* harmony import */ var _FreestylerEvaluateAction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FreestylerEvaluateAction.js */ "./panels/freestyler/FreestylerEvaluateAction.js");
/* harmony import */ var _components_ProvideFeedback_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ProvideFeedback.js */ "./panels/freestyler/components/ProvideFeedback.js");
/* harmony import */ var _components_FreestylerChatUi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/FreestylerChatUi.js */ "./panels/freestyler/components/FreestylerChatUi.js");
/* harmony import */ var _FreestylerPanel_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FreestylerPanel.js */ "./panels/freestyler/FreestylerPanel.js");
/* harmony import */ var _FreestylerAgent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FreestylerAgent.js */ "./panels/freestyler/FreestylerAgent.js");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





//# sourceMappingURL=freestyler.js.map

/***/ })

}]);