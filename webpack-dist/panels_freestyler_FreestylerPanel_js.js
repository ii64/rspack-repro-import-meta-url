"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_freestyler_FreestylerPanel_js"],{

/***/ "./panels/freestyler/FreestylerPanel.js":
/*!**********************************************!*\
  !*** ./panels/freestyler/FreestylerPanel.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionDelegate: () => (/* binding */ ActionDelegate),
/* harmony export */   FreestylerPanel: () => (/* binding */ FreestylerPanel)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _components_FreestylerChatUi_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/FreestylerChatUi.js */ "./panels/freestyler/components/FreestylerChatUi.js");
/* harmony import */ var _FreestylerAgent_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FreestylerAgent.js */ "./panels/freestyler/FreestylerAgent.js");
/* harmony import */ var _freestylerPanel_css_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./freestylerPanel.css.js */ "./panels/freestyler/freestylerPanel.css.js");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.










/*
  * TODO(nvitkov): b/346933425
  * Temporary string that should not be translated
  * as they may change often during development.
  */
const UIStringsTemp = {
    /**
     *@description Freestyler UI text for clearing messages.
     */
    clearMessages: 'Clear messages',
    /**
     *@description Freestyler UI text for sending feedback.
     */
    sendFeedback: 'Send feedback',
    /**
     *@description Displayed when the user stop the response
     */
    stoppedResponse: 'You stopped this response',
};
// TODO(nvitkov): b/346933425
// const str_ = i18n.i18n.registerUIStrings('panels/freestyler/FreestylerPanel.ts', UIStrings);
// const i18nString = i18n.i18n.getLocalizedString.bind(undefined, str_);
/* eslint-disable  rulesdir/l10n_i18nString_call_only_with_uistrings */
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.lockedString;
// TODO(ergunsh): Use the WidgetElement instead of separately creating the toolbar.
function createToolbar(target, { onClearClick }) {
    const toolbarContainer = target.createChild('div', 'freestyler-toolbar-container');
    const leftToolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Toolbar.Toolbar('', toolbarContainer);
    const rightToolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Toolbar.Toolbar('freestyler-right-toolbar', toolbarContainer);
    const clearButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Toolbar.ToolbarButton(i18nString(UIStringsTemp.clearMessages), 'clear', undefined, 'freestyler.clear');
    clearButton.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */, onClearClick);
    leftToolbar.appendToolbarItem(clearButton);
    rightToolbar.appendSeparator();
    const helpButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Toolbar.ToolbarButton(i18nString(UIStringsTemp.sendFeedback), 'help', undefined, 'freestyler.feedback');
    helpButton.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */, () => {
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.openInNewTab(_components_FreestylerChatUi_js__WEBPACK_IMPORTED_MODULE_7__.DOGFOOD_INFO);
    });
    rightToolbar.appendToolbarItem(helpButton);
}
function defaultView(input, output, target) {
    // clang-format off
    _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__.html `
    <${_components_FreestylerChatUi_js__WEBPACK_IMPORTED_MODULE_7__.FreestylerChatUi.litTagName} .props=${input} ${_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__.Directives.ref((el) => {
        if (!el || !(el instanceof _components_FreestylerChatUi_js__WEBPACK_IMPORTED_MODULE_7__.FreestylerChatUi)) {
            return;
        }
        output.freestylerChatUi = el;
    })}></${_components_FreestylerChatUi_js__WEBPACK_IMPORTED_MODULE_7__.FreestylerChatUi.litTagName}>
  `, target, { host: input }); // eslint-disable-line rulesdir/lit_html_host_this
    // clang-format on
}
let freestylerPanelInstance;
class FreestylerPanel extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Panel.Panel {
    view;
    static panelName = 'freestyler';
    #toggleSearchElementAction;
    #selectedNode;
    #contentContainer;
    #aidaClient;
    #agent;
    #viewProps;
    #viewOutput = {};
    #serverSideLoggingEnabled = isFreestylerServerSideLoggingEnabled();
    #consentViewAcceptedSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createLocalSetting('freestyler-dogfood-consent-onboarding-finished', false);
    constructor(view = defaultView, { aidaClient, aidaAvailability }) {
        super(FreestylerPanel.panelName);
        this.view = view;
        createToolbar(this.contentElement, { onClearClick: this.#clearMessages.bind(this) });
        this.#toggleSearchElementAction =
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ActionRegistry.ActionRegistry.instance().getAction('elements.toggle-element-search');
        this.#aidaClient = aidaClient;
        this.#contentContainer = this.contentElement.createChild('div', 'freestyler-chat-ui-container');
        this.#selectedNode = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DOMModel.DOMNode);
        this.#viewProps = {
            state: this.#consentViewAcceptedSetting.get() ? "chat-view" /* FreestylerChatUiState.CHAT_VIEW */ :
                "consent-view" /* FreestylerChatUiState.CONSENT_VIEW */,
            aidaAvailability,
            messages: [],
            inspectElementToggled: this.#toggleSearchElementAction.toggled(),
            selectedNode: this.#selectedNode,
            isLoading: false,
            onTextSubmit: this.#startConversation.bind(this),
            onInspectElementClick: this.#handleSelectElementClick.bind(this),
            onFeedbackSubmit: this.#handleFeedbackSubmit.bind(this),
            onAcceptConsentClick: this.#handleAcceptConsentClick.bind(this),
            onCancelClick: this.#cancel.bind(this),
            onFixThisIssueClick: () => {
                void this.#startConversation(_FreestylerAgent_js__WEBPACK_IMPORTED_MODULE_8__.FIX_THIS_ISSUE_PROMPT, true);
            },
            canShowFeedbackForm: this.#serverSideLoggingEnabled,
        };
        this.#toggleSearchElementAction.addEventListener("Toggled" /* UI.ActionRegistration.Events.Toggled */, ev => {
            this.#viewProps.inspectElementToggled = ev.data;
            this.doUpdate();
        });
        this.#agent = this.#createAgent();
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Context.Context.instance().addFlavorChangeListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DOMModel.DOMNode, ev => {
            if (this.#viewProps.selectedNode === ev.data) {
                return;
            }
            this.#viewProps.selectedNode = ev.data;
            this.doUpdate();
        });
        this.doUpdate();
    }
    #createAgent() {
        return new _FreestylerAgent_js__WEBPACK_IMPORTED_MODULE_8__.FreestylerAgent({
            aidaClient: this.#aidaClient,
            serverSideLoggingEnabled: this.#serverSideLoggingEnabled,
            confirmSideEffect: this.showConfirmSideEffectUi.bind(this),
        });
    }
    static async instance(opts = { forceNew: null }) {
        const { forceNew } = opts;
        if (!freestylerPanelInstance || forceNew) {
            const aidaAvailability = await _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaClient.getAidaClientAvailability();
            const aidaClient = new _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaClient();
            freestylerPanelInstance = new FreestylerPanel(defaultView, { aidaClient, aidaAvailability });
        }
        return freestylerPanelInstance;
    }
    wasShown() {
        this.registerCSSFiles([_freestylerPanel_css_js__WEBPACK_IMPORTED_MODULE_9__["default"]]);
        this.#viewOutput.freestylerChatUi?.focusTextInput();
    }
    doUpdate() {
        this.view(this.#viewProps, this.#viewOutput, this.#contentContainer);
    }
    async showConfirmSideEffectUi(action) {
        const sideEffectConfirmationPromiseWithResolvers = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.PromiseUtilities.promiseWithResolvers();
        this.#viewProps.confirmSideEffectDialog = {
            code: action,
            onAnswer: (answer) => sideEffectConfirmationPromiseWithResolvers.resolve(answer),
        };
        this.doUpdate();
        const result = await sideEffectConfirmationPromiseWithResolvers.promise;
        this.#viewProps.confirmSideEffectDialog = undefined;
        this.doUpdate();
        return result;
    }
    #handleSelectElementClick() {
        void this.#toggleSearchElementAction.execute();
    }
    #handleFeedbackSubmit(rpcId, rating, feedback) {
        void this.#aidaClient.registerClientEvent({
            corresponding_aida_rpc_global_id: rpcId,
            disable_user_content_logging: !this.#serverSideLoggingEnabled,
            do_conversation_client_event: {
                user_feedback: {
                    sentiment: rating,
                    user_input: {
                        comment: feedback,
                    },
                },
            },
        });
    }
    #handleAcceptConsentClick() {
        this.#consentViewAcceptedSetting.set(true);
        this.#viewProps.state = "chat-view" /* FreestylerChatUiState.CHAT_VIEW */;
        this.doUpdate();
    }
    handleAction(actionId) {
        switch (actionId) {
            case 'freestyler.element-panel-context': {
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.FreestylerOpenedFromElementsPanel);
                this.doUpdate();
                break;
            }
            case 'freestyler.style-tab-context': {
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.FreestylerOpenedFromStylesTab);
                this.doUpdate();
                break;
            }
        }
    }
    #clearMessages() {
        this.#viewProps.messages = [];
        this.#viewProps.isLoading = false;
        this.#viewProps.confirmSideEffectDialog = undefined;
        this.#agent = this.#createAgent();
        this.#cancel();
        this.doUpdate();
    }
    #runAbortController = new AbortController();
    #cancel() {
        this.#runAbortController.abort();
        this.#runAbortController = new AbortController();
        this.#viewProps.isLoading = false;
        this.doUpdate();
    }
    async #startConversation(text, isFixQuery = false) {
        this.#viewProps.messages.push({
            entity: "user" /* ChatMessageEntity.USER */,
            text,
        });
        this.#viewProps.isLoading = true;
        // TODO: We should only show "Fix this issue" button when the answer suggests fix or fixes.
        // We shouldn't show this when the answer is complete like a confirmation without any suggestion.
        const suggestingFix = text !== _FreestylerAgent_js__WEBPACK_IMPORTED_MODULE_8__.FIX_THIS_ISSUE_PROMPT;
        let systemMessage = {
            entity: "model" /* ChatMessageEntity.MODEL */,
            suggestingFix,
            steps: [],
        };
        this.doUpdate();
        this.#runAbortController = new AbortController();
        const signal = this.#runAbortController.signal;
        signal.addEventListener('abort', () => {
            systemMessage.rpcId = undefined;
            systemMessage.suggestingFix = false;
            systemMessage.steps.push({ step: _FreestylerAgent_js__WEBPACK_IMPORTED_MODULE_8__.Step.ERROR, text: i18nString(UIStringsTemp.stoppedResponse) });
        });
        for await (const data of this.#agent.run(text, { signal, isFixQuery })) {
            if (data.step === _FreestylerAgent_js__WEBPACK_IMPORTED_MODULE_8__.Step.QUERYING) {
                systemMessage = {
                    entity: "model" /* ChatMessageEntity.MODEL */,
                    suggestingFix,
                    steps: [],
                };
                this.#viewProps.messages.push(systemMessage);
                this.doUpdate();
                this.#viewOutput.freestylerChatUi?.scrollToLastMessage();
                continue;
            }
            if (data.step === _FreestylerAgent_js__WEBPACK_IMPORTED_MODULE_8__.Step.ANSWER || data.step === _FreestylerAgent_js__WEBPACK_IMPORTED_MODULE_8__.Step.ERROR) {
                this.#viewProps.isLoading = false;
            }
            systemMessage.rpcId = data.rpcId;
            systemMessage.steps.push(data);
            this.doUpdate();
            this.#viewOutput.freestylerChatUi?.scrollToLastMessage();
        }
    }
}
class ActionDelegate {
    handleAction(_context, actionId) {
        switch (actionId) {
            case 'freestyler.element-panel-context':
            case 'freestyler.style-tab-context': {
                void (async () => {
                    const view = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ViewManager.ViewManager.instance().view(FreestylerPanel.panelName);
                    if (view) {
                        await _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ViewManager.ViewManager.instance().showView(FreestylerPanel.panelName);
                        const widget = (await view.widget());
                        widget.handleAction(actionId);
                    }
                })();
                return true;
            }
        }
        return false;
    }
}
function setFreestylerServerSideLoggingEnabled(enabled) {
    if (enabled) {
        localStorage.setItem('freestyler_enableServerSideLogging', 'true');
    }
    else {
        localStorage.removeItem('freestyler_enableServerSideLogging');
    }
}
function isFreestylerServerSideLoggingEnabled() {
    return localStorage.getItem('freestyler_enableServerSideLogging') === 'true';
}
// @ts-ignore
globalThis.setFreestylerServerSideLoggingEnabled = setFreestylerServerSideLoggingEnabled;
//# sourceMappingURL=FreestylerPanel.js.map

/***/ }),

/***/ "./panels/freestyler/freestylerPanel.css.js":
/*!**************************************************!*\
  !*** ./panels/freestyler/freestylerPanel.css.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */
const styles = new CSSStyleSheet();
styles.replaceSync(
`/*
 * Copyright 2024 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.freestyler-toolbar-container {
  display: flex;
  background-color: var(--sys-color-cdt-base-container);
  border-bottom: 1px solid var(--sys-color-divider);
  flex: 0 0 auto;
  justify-content: space-between;
}

.freestyler-chat-ui-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  overflow: hidden;
}

/*# sourceURL=./freestylerPanel.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);