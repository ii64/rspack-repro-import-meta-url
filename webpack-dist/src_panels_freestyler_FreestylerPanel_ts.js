"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_freestyler_FreestylerPanel_ts"],{

/***/ "./src/panels/freestyler/FreestylerPanel.ts":
/*!**************************************************!*\
  !*** ./src/panels/freestyler/FreestylerPanel.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionDelegate: () => (/* binding */ ActionDelegate),
/* harmony export */   FreestylerPanel: () => (/* binding */ FreestylerPanel)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _components_FreestylerChatUi_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/FreestylerChatUi.js */ "./src/panels/freestyler/components/FreestylerChatUi.ts");
/* harmony import */ var _FreestylerAgent_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FreestylerAgent.js */ "./src/panels/freestyler/FreestylerAgent.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './freestylerPanel.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _FreestylerPanel_instances, _FreestylerPanel_toggleSearchElementAction, _FreestylerPanel_selectedNode, _FreestylerPanel_contentContainer, _FreestylerPanel_aidaClient, _FreestylerPanel_agent, _FreestylerPanel_viewProps, _FreestylerPanel_viewOutput, _FreestylerPanel_serverSideLoggingEnabled, _FreestylerPanel_consentViewAcceptedSetting, _FreestylerPanel_createAgent, _FreestylerPanel_handleSelectElementClick, _FreestylerPanel_handleFeedbackSubmit, _FreestylerPanel_handleAcceptConsentClick, _FreestylerPanel_clearMessages, _FreestylerPanel_runAbortController, _FreestylerPanel_cancel, _FreestylerPanel_startConversation;
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
    clearButton.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Toolbar.ToolbarButton.Events.Click, onClearClick);
    leftToolbar.appendToolbarItem(clearButton);
    rightToolbar.appendSeparator();
    const helpButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Toolbar.ToolbarButton(i18nString(UIStringsTemp.sendFeedback), 'help', undefined, 'freestyler.feedback');
    helpButton.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Toolbar.ToolbarButton.Events.Click, () => {
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
    constructor(view = defaultView, { aidaClient, aidaAvailability }) {
        super(FreestylerPanel.panelName);
        _FreestylerPanel_instances.add(this);
        Object.defineProperty(this, "view", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: view
        });
        _FreestylerPanel_toggleSearchElementAction.set(this, void 0);
        _FreestylerPanel_selectedNode.set(this, void 0);
        _FreestylerPanel_contentContainer.set(this, void 0);
        _FreestylerPanel_aidaClient.set(this, void 0);
        _FreestylerPanel_agent.set(this, void 0);
        _FreestylerPanel_viewProps.set(this, void 0);
        _FreestylerPanel_viewOutput.set(this, {});
        _FreestylerPanel_serverSideLoggingEnabled.set(this, isFreestylerServerSideLoggingEnabled());
        _FreestylerPanel_consentViewAcceptedSetting.set(this, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createLocalSetting('freestyler-dogfood-consent-onboarding-finished', false));
        _FreestylerPanel_runAbortController.set(this, new AbortController());
        createToolbar(this.contentElement, { onClearClick: __classPrivateFieldGet(this, _FreestylerPanel_instances, "m", _FreestylerPanel_clearMessages).bind(this) });
        __classPrivateFieldSet(this, _FreestylerPanel_toggleSearchElementAction, _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ActionRegistry.ActionRegistry.instance().getAction('elements.toggle-element-search'), "f");
        __classPrivateFieldSet(this, _FreestylerPanel_aidaClient, aidaClient, "f");
        __classPrivateFieldSet(this, _FreestylerPanel_contentContainer, this.contentElement.createChild('div', 'freestyler-chat-ui-container'), "f");
        __classPrivateFieldSet(this, _FreestylerPanel_selectedNode, _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DOMModel.DOMNode), "f");
        __classPrivateFieldSet(this, _FreestylerPanel_viewProps, {
            state: __classPrivateFieldGet(this, _FreestylerPanel_consentViewAcceptedSetting, "f").get() ? _components_FreestylerChatUi_js__WEBPACK_IMPORTED_MODULE_7__.State.CHAT_VIEW :
                _components_FreestylerChatUi_js__WEBPACK_IMPORTED_MODULE_7__.State.CONSENT_VIEW,
            aidaAvailability,
            messages: [],
            inspectElementToggled: __classPrivateFieldGet(this, _FreestylerPanel_toggleSearchElementAction, "f").toggled(),
            selectedNode: __classPrivateFieldGet(this, _FreestylerPanel_selectedNode, "f"),
            isLoading: false,
            onTextSubmit: __classPrivateFieldGet(this, _FreestylerPanel_instances, "m", _FreestylerPanel_startConversation).bind(this),
            onInspectElementClick: __classPrivateFieldGet(this, _FreestylerPanel_instances, "m", _FreestylerPanel_handleSelectElementClick).bind(this),
            onFeedbackSubmit: __classPrivateFieldGet(this, _FreestylerPanel_instances, "m", _FreestylerPanel_handleFeedbackSubmit).bind(this),
            onAcceptConsentClick: __classPrivateFieldGet(this, _FreestylerPanel_instances, "m", _FreestylerPanel_handleAcceptConsentClick).bind(this),
            onCancelClick: __classPrivateFieldGet(this, _FreestylerPanel_instances, "m", _FreestylerPanel_cancel).bind(this),
            onFixThisIssueClick: () => {
                void __classPrivateFieldGet(this, _FreestylerPanel_instances, "m", _FreestylerPanel_startConversation).call(this, _FreestylerAgent_js__WEBPACK_IMPORTED_MODULE_8__.FIX_THIS_ISSUE_PROMPT, true);
            },
            canShowFeedbackForm: __classPrivateFieldGet(this, _FreestylerPanel_serverSideLoggingEnabled, "f"),
        }, "f");
        __classPrivateFieldGet(this, _FreestylerPanel_toggleSearchElementAction, "f").addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ActionRegistration.Events.Toggled, ev => {
            __classPrivateFieldGet(this, _FreestylerPanel_viewProps, "f").inspectElementToggled = ev.data;
            this.doUpdate();
        });
        __classPrivateFieldSet(this, _FreestylerPanel_agent, __classPrivateFieldGet(this, _FreestylerPanel_instances, "m", _FreestylerPanel_createAgent).call(this), "f");
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Context.Context.instance().addFlavorChangeListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DOMModel.DOMNode, ev => {
            if (__classPrivateFieldGet(this, _FreestylerPanel_viewProps, "f").selectedNode === ev.data) {
                return;
            }
            __classPrivateFieldGet(this, _FreestylerPanel_viewProps, "f").selectedNode = ev.data;
            this.doUpdate();
        });
        this.doUpdate();
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
        this.registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './freestylerPanel.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
        __classPrivateFieldGet(this, _FreestylerPanel_viewOutput, "f").freestylerChatUi?.focusTextInput();
    }
    doUpdate() {
        this.view(__classPrivateFieldGet(this, _FreestylerPanel_viewProps, "f"), __classPrivateFieldGet(this, _FreestylerPanel_viewOutput, "f"), __classPrivateFieldGet(this, _FreestylerPanel_contentContainer, "f"));
    }
    async showConfirmSideEffectUi(action) {
        const sideEffectConfirmationPromiseWithResolvers = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.PromiseUtilities.promiseWithResolvers();
        __classPrivateFieldGet(this, _FreestylerPanel_viewProps, "f").confirmSideEffectDialog = {
            code: action,
            onAnswer: (answer) => sideEffectConfirmationPromiseWithResolvers.resolve(answer),
        };
        this.doUpdate();
        const result = await sideEffectConfirmationPromiseWithResolvers.promise;
        __classPrivateFieldGet(this, _FreestylerPanel_viewProps, "f").confirmSideEffectDialog = undefined;
        this.doUpdate();
        return result;
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
}
_FreestylerPanel_toggleSearchElementAction = new WeakMap(), _FreestylerPanel_selectedNode = new WeakMap(), _FreestylerPanel_contentContainer = new WeakMap(), _FreestylerPanel_aidaClient = new WeakMap(), _FreestylerPanel_agent = new WeakMap(), _FreestylerPanel_viewProps = new WeakMap(), _FreestylerPanel_viewOutput = new WeakMap(), _FreestylerPanel_serverSideLoggingEnabled = new WeakMap(), _FreestylerPanel_consentViewAcceptedSetting = new WeakMap(), _FreestylerPanel_runAbortController = new WeakMap(), _FreestylerPanel_instances = new WeakSet(), _FreestylerPanel_createAgent = function _FreestylerPanel_createAgent() {
    return new _FreestylerAgent_js__WEBPACK_IMPORTED_MODULE_8__.FreestylerAgent({
        aidaClient: __classPrivateFieldGet(this, _FreestylerPanel_aidaClient, "f"),
        serverSideLoggingEnabled: __classPrivateFieldGet(this, _FreestylerPanel_serverSideLoggingEnabled, "f"),
        confirmSideEffect: this.showConfirmSideEffectUi.bind(this),
    });
}, _FreestylerPanel_handleSelectElementClick = function _FreestylerPanel_handleSelectElementClick() {
    void __classPrivateFieldGet(this, _FreestylerPanel_toggleSearchElementAction, "f").execute();
}, _FreestylerPanel_handleFeedbackSubmit = function _FreestylerPanel_handleFeedbackSubmit(rpcId, rating, feedback) {
    void __classPrivateFieldGet(this, _FreestylerPanel_aidaClient, "f").registerClientEvent({
        corresponding_aida_rpc_global_id: rpcId,
        disable_user_content_logging: !__classPrivateFieldGet(this, _FreestylerPanel_serverSideLoggingEnabled, "f"),
        do_conversation_client_event: {
            user_feedback: {
                sentiment: rating,
                user_input: {
                    comment: feedback,
                },
            },
        },
    });
}, _FreestylerPanel_handleAcceptConsentClick = function _FreestylerPanel_handleAcceptConsentClick() {
    __classPrivateFieldGet(this, _FreestylerPanel_consentViewAcceptedSetting, "f").set(true);
    __classPrivateFieldGet(this, _FreestylerPanel_viewProps, "f").state = _components_FreestylerChatUi_js__WEBPACK_IMPORTED_MODULE_7__.State.CHAT_VIEW;
    this.doUpdate();
}, _FreestylerPanel_clearMessages = function _FreestylerPanel_clearMessages() {
    __classPrivateFieldGet(this, _FreestylerPanel_viewProps, "f").messages = [];
    __classPrivateFieldGet(this, _FreestylerPanel_viewProps, "f").isLoading = false;
    __classPrivateFieldGet(this, _FreestylerPanel_viewProps, "f").confirmSideEffectDialog = undefined;
    __classPrivateFieldSet(this, _FreestylerPanel_agent, __classPrivateFieldGet(this, _FreestylerPanel_instances, "m", _FreestylerPanel_createAgent).call(this), "f");
    __classPrivateFieldGet(this, _FreestylerPanel_instances, "m", _FreestylerPanel_cancel).call(this);
    this.doUpdate();
}, _FreestylerPanel_cancel = function _FreestylerPanel_cancel() {
    __classPrivateFieldGet(this, _FreestylerPanel_runAbortController, "f").abort();
    __classPrivateFieldSet(this, _FreestylerPanel_runAbortController, new AbortController(), "f");
    __classPrivateFieldGet(this, _FreestylerPanel_viewProps, "f").isLoading = false;
    this.doUpdate();
}, _FreestylerPanel_startConversation = async function _FreestylerPanel_startConversation(text, isFixQuery = false) {
    __classPrivateFieldGet(this, _FreestylerPanel_viewProps, "f").messages.push({
        entity: _components_FreestylerChatUi_js__WEBPACK_IMPORTED_MODULE_7__.ChatMessageEntity.USER,
        text,
    });
    __classPrivateFieldGet(this, _FreestylerPanel_viewProps, "f").isLoading = true;
    // TODO: We should only show "Fix this issue" button when the answer suggests fix or fixes.
    // We shouldn't show this when the answer is complete like a confirmation without any suggestion.
    const suggestingFix = text !== _FreestylerAgent_js__WEBPACK_IMPORTED_MODULE_8__.FIX_THIS_ISSUE_PROMPT;
    let systemMessage = {
        entity: _components_FreestylerChatUi_js__WEBPACK_IMPORTED_MODULE_7__.ChatMessageEntity.MODEL,
        suggestingFix,
        steps: [],
    };
    this.doUpdate();
    __classPrivateFieldSet(this, _FreestylerPanel_runAbortController, new AbortController(), "f");
    const signal = __classPrivateFieldGet(this, _FreestylerPanel_runAbortController, "f").signal;
    signal.addEventListener('abort', () => {
        systemMessage.rpcId = undefined;
        systemMessage.suggestingFix = false;
        systemMessage.steps.push({ step: _FreestylerAgent_js__WEBPACK_IMPORTED_MODULE_8__.Step.ERROR, text: i18nString(UIStringsTemp.stoppedResponse) });
    });
    for await (const data of __classPrivateFieldGet(this, _FreestylerPanel_agent, "f").run(text, { signal, isFixQuery })) {
        if (data.step === _FreestylerAgent_js__WEBPACK_IMPORTED_MODULE_8__.Step.QUERYING) {
            systemMessage = {
                entity: _components_FreestylerChatUi_js__WEBPACK_IMPORTED_MODULE_7__.ChatMessageEntity.MODEL,
                suggestingFix,
                steps: [],
            };
            __classPrivateFieldGet(this, _FreestylerPanel_viewProps, "f").messages.push(systemMessage);
            this.doUpdate();
            __classPrivateFieldGet(this, _FreestylerPanel_viewOutput, "f").freestylerChatUi?.scrollToLastMessage();
            continue;
        }
        if (data.step === _FreestylerAgent_js__WEBPACK_IMPORTED_MODULE_8__.Step.ANSWER || data.step === _FreestylerAgent_js__WEBPACK_IMPORTED_MODULE_8__.Step.ERROR) {
            __classPrivateFieldGet(this, _FreestylerPanel_viewProps, "f").isLoading = false;
        }
        systemMessage.rpcId = data.rpcId;
        systemMessage.steps.push(data);
        this.doUpdate();
        __classPrivateFieldGet(this, _FreestylerPanel_viewOutput, "f").freestylerChatUi?.scrollToLastMessage();
    }
};
Object.defineProperty(FreestylerPanel, "panelName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'freestyler'
});
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


/***/ })

}]);