"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_freestyler_components_FreestylerChatUi_ts"],{

/***/ "./src/panels/freestyler/components/FreestylerChatUi.ts":
/*!**************************************************************!*\
  !*** ./src/panels/freestyler/components/FreestylerChatUi.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChatMessageEntity: () => (/* binding */ ChatMessageEntity),
/* harmony export */   DOGFOOD_INFO: () => (/* binding */ DOGFOOD_INFO),
/* harmony export */   FOR_TEST: () => (/* binding */ FOR_TEST),
/* harmony export */   FreestylerChatUi: () => (/* binding */ FreestylerChatUi),
/* harmony export */   State: () => (/* binding */ State)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _third_party_marked_marked_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../third_party/marked/marked.js */ "./src/third_party/marked/marked.ts");
/* harmony import */ var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/components/buttons/buttons.js */ "./src/ui/components/buttons/buttons.ts");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _ui_components_markdown_view_markdown_view_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ui/components/markdown_view/markdown_view.js */ "./src/ui/components/markdown_view/markdown_view.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _FreestylerAgent_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../FreestylerAgent.js */ "./src/panels/freestyler/FreestylerAgent.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './freestylerChatUi.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ProvideFeedback_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ProvideFeedback.js */ "./src/panels/freestyler/components/ProvideFeedback.ts");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _FreestylerChatUi_instances, _FreestylerChatUi_shadow, _FreestylerChatUi_markdownRenderer, _FreestylerChatUi_props, _FreestylerChatUi_handleSubmit, _FreestylerChatUi_handleCancel, _FreestylerChatUi_renderRateButtons, _FreestylerChatUi_renderTextAsMarkdown, _FreestylerChatUi_renderStep, _FreestylerChatUi_renderSideEffectConfirmationUi, _FreestylerChatUi_renderChatMessage, _FreestylerChatUi_renderSelectAnElement, _FreestylerChatUi_renderFeedbackLink, _FreestylerChatUi_renderMessages, _FreestylerChatUi_renderEmptyState, _FreestylerChatUi_renderChatUi, _FreestylerChatUi_renderConsentView, _FreestylerChatUi_render;












const DOGFOOD_FEEDBACK_URL = 'https://goo.gle/freestyler-feedback';
const DOGFOOD_INFO = 'https://goo.gle/freestyler-dogfood';
/*
  * TODO(nvitkov): b/346933425
  * Temporary string that should not be translated
  * as they may change often during development.
  */
const UIStringsTemp = {
    /**
     *@description Placeholder text for the chat UI input.
     */
    inputPlaceholder: 'Ask a question about the selected element',
    /**
     *@description Disclaimer text right after the chat input.
     */
    inputDisclaimer: 'Chat messages and data from this page will be sent to Google, reviewed by humans, and used to improve the feature. Do not use on pages with personal or sensitive information. Freestyler may display inaccurate information.',
    /**
     *@description Title for the send icon button.
     */
    sendButtonTitle: 'Send',
    /**
     *@description Title for the cancel icon button.
     */
    cancelButtonTitle: 'Cancel',
    /**
     *@description Label for the "select an element" button.
     */
    selectAnElement: 'Select an element',
    /**
     *@description Text for the empty state of the Freestyler panel.
     */
    emptyStateText: 'How can I help you?',
    /**
     * @description The title of the button that allows submitting positive
     * feedback about the response for freestyler.
     */
    thumbsUp: 'Thumbs up',
    /**
     * @description The title of the button that allows submitting negative
     * feedback about the response for freestyler.
     */
    thumbsDown: 'Thumbs down',
    /**
     * @description The error message when the user is not logged in into Chrome.
     */
    notLoggedIn: 'This feature is only available when you sign into Chrome with your Google account.',
    /**
     * @description The error message when the user is not logged in into Chrome.
     */
    syncIsOff: 'This feature requires you to turn on Chrome sync.',
    /**
     * @description Message shown when the user is offline.
     */
    offline: 'Check your internet connection and try again.',
    /**
     *@description Heading for the consent view.
     */
    consentScreenHeading: 'Things to consider',
    /**
     *@description Title of the button for accepting in the consent screen.
     */
    acceptButtonTitle: 'Accept',
    /**
     *@description Consent view main text
     */
    consentTextAiDisclaimer: 'This feature uses AI and might produce inaccurate information.',
    /**
     *@description Consent view data collection text
     */
    consentTextDataDisclaimer: 'Your inputs and the information from the page you are using this feature for are sent to Google.',
    /**
     *@description Consent view data collection text
     */
    consentTextDoNotUseDisclaimer: 'Do not use on pages with personal or sensitive information.',
    /**
     *@description Consent view data visibility text
     */
    consentTextVisibilityDisclaimer: 'Data may be seen by human reviewers and can be used to improve this feature.',
    /**
     * @description Side effect confirmation text
     */
    sideEffectConfirmationDescription: 'The code contains side effects. Do you wish to continue?',
    /**
     * @description Side effect confirmation text for the button that says "Execute"
     */
    positiveSideEffectConfirmation: 'Execute',
    /**
     * @description Side effect confirmation text for the button that says "Cancel"
     */
    negativeSideEffectConfirmation: 'Cancel',
    /**
     *@description Name of the dogfood program.
     */
    dogfood: 'Dogfood',
    /**
     *@description Link text for redirecting to feedback form
     */
    feedbackLink: 'Send Feedback',
    /**
     *@description Button text for "Fix this issue" button
     */
    fixThisIssue: 'Fix this issue',
};
// const str_ = i18n.i18n.registerUIStrings('panels/freestyler/components/FreestylerChatUi.ts', UIStrings);
// const i18nString = i18n.i18n.getLocalizedString.bind(undefined, str_);
/* eslint-disable  rulesdir/l10n_i18nString_call_only_with_uistrings */
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.lockedString;
function getInputPlaceholderString(aidaAvailability) {
    switch (aidaAvailability) {
        case _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaAvailability.AVAILABLE:
            return i18nString(UIStringsTemp.inputPlaceholder);
        case _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaAvailability.NO_ACCOUNT_EMAIL:
            return i18nString(UIStringsTemp.notLoggedIn);
        case _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaAvailability.NO_ACTIVE_SYNC:
            return i18nString(UIStringsTemp.syncIsOff);
        case _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaAvailability.NO_INTERNET:
            return i18nString(UIStringsTemp.offline);
    }
}
var ChatMessageEntity;
(function (ChatMessageEntity) {
    ChatMessageEntity["MODEL"] = "model";
    ChatMessageEntity["USER"] = "user";
})(ChatMessageEntity || (ChatMessageEntity = {}));
var State;
(function (State) {
    State["CONSENT_VIEW"] = "consent-view";
    State["CHAT_VIEW"] = "chat-view";
})(State || (State = {}));
// The model returns multiline code blocks in an erroneous way with the language being in new line.
// This renderer takes that into account and correctly updates the parsed multiline token with the language
// correctly identified and stripped from the content.
// Example:
// ```
// css <-- This should have been on the first line.
// * {
//   color: red;
// }
// ```
class MarkdownRendererWithCodeBlock extends _ui_components_markdown_view_markdown_view_js__WEBPACK_IMPORTED_MODULE_6__.MarkdownView.MarkdownInsightRenderer {
    templateForToken(token) {
        if (token.type === 'code') {
            const lines = token.text.split('\n');
            if (lines[0]?.trim() === 'css') {
                token.lang = 'css';
                token.text = lines.slice(1).join('\n');
            }
        }
        return super.templateForToken(token);
    }
}
class FreestylerChatUi extends HTMLElement {
    constructor(props) {
        super();
        _FreestylerChatUi_instances.add(this);
        _FreestylerChatUi_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _FreestylerChatUi_markdownRenderer.set(this, new MarkdownRendererWithCodeBlock());
        _FreestylerChatUi_props.set(this, void 0);
        _FreestylerChatUi_handleSubmit.set(this, (ev) => {
            ev.preventDefault();
            const input = __classPrivateFieldGet(this, _FreestylerChatUi_shadow, "f").querySelector('.chat-input');
            if (!input || !input.value) {
                return;
            }
            __classPrivateFieldGet(this, _FreestylerChatUi_props, "f").onTextSubmit(input.value);
            input.value = '';
        });
        _FreestylerChatUi_handleCancel.set(this, (ev) => {
            ev.preventDefault();
            if (!__classPrivateFieldGet(this, _FreestylerChatUi_props, "f").isLoading) {
                return;
            }
            __classPrivateFieldGet(this, _FreestylerChatUi_props, "f").onCancelClick();
        });
        _FreestylerChatUi_renderChatMessage.set(this, (message, { isLast }) => {
            if (message.entity === ChatMessageEntity.USER) {
                return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html `<div class="chat-message query" jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.section('question')}>${message.text}</div>`;
            }
            const shouldShowFixThisIssueButton = !__classPrivateFieldGet(this, _FreestylerChatUi_props, "f").isLoading && isLast && message.suggestingFix;
            const shouldShowRating = !isLast || (!__classPrivateFieldGet(this, _FreestylerChatUi_props, "f").confirmSideEffectDialog && isLast);
            const shouldShowLoading = __classPrivateFieldGet(this, _FreestylerChatUi_props, "f").isLoading && isLast && !__classPrivateFieldGet(this, _FreestylerChatUi_props, "f").confirmSideEffectDialog;
            // clang-format off
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html `
      <div class="chat-message answer" jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.section('answer')}>
        ${message.steps.map(step => __classPrivateFieldGet(this, _FreestylerChatUi_instances, "m", _FreestylerChatUi_renderStep).call(this, step))}
        ${__classPrivateFieldGet(this, _FreestylerChatUi_props, "f").confirmSideEffectDialog && isLast
                ? __classPrivateFieldGet(this, _FreestylerChatUi_instances, "m", _FreestylerChatUi_renderSideEffectConfirmationUi).call(this, __classPrivateFieldGet(this, _FreestylerChatUi_props, "f").confirmSideEffectDialog)
                : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.nothing}
        <div class="actions">
          ${shouldShowRating && message.rpcId !== undefined
                ? __classPrivateFieldGet(this, _FreestylerChatUi_instances, "m", _FreestylerChatUi_renderRateButtons).call(this, message.rpcId)
                : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.nothing}
          ${shouldShowFixThisIssueButton
                ? _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html `<${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Button.litTagName}
                  .data=${{
                    variant: _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Variant.OUTLINED,
                    jslogContext: 'fix-this-issue',
                }}
                  @click=${__classPrivateFieldGet(this, _FreestylerChatUi_props, "f").onFixThisIssueClick}
                >${i18nString(UIStringsTemp.fixThisIssue)}</${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Button.litTagName}>`
                : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.nothing}
        </div>
        ${shouldShowLoading
                ? _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html `<div class="chat-loading">Loading...</div>`
                : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.nothing}
      </div>
    `;
            // clang-format on
        });
        _FreestylerChatUi_renderSelectAnElement.set(this, () => {
            const data = {
                size: _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Size.SMALL,
                iconName: 'select-element',
                toggledIconName: 'select-element',
                toggleType: _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.ToggleType.PRIMARY,
                toggled: __classPrivateFieldGet(this, _FreestylerChatUi_props, "f").inspectElementToggled,
                title: i18nString(UIStringsTemp.selectAnElement),
                jslogContext: 'select-element',
            };
            // clang-format off
            return __classPrivateFieldGet(this, _FreestylerChatUi_props, "f").selectedNode
                ? _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html `
        <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Button.litTagName}
          .data=${{
                    variant: _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Variant.ICON_TOGGLE,
                    ...data,
                }}
          @click=${__classPrivateFieldGet(this, _FreestylerChatUi_props, "f").onInspectElementClick}
        ></${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Button.litTagName}>
        ${_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.Directives.until(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Linkifier.Linkifier.linkify(__classPrivateFieldGet(this, _FreestylerChatUi_props, "f").selectedNode))}`
                : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html `
        <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Button.litTagName}
          .data=${{
                    variant: _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Variant.TEXT,
                    ...data,
                }}
          @click=${__classPrivateFieldGet(this, _FreestylerChatUi_props, "f").onInspectElementClick}
        ><span class="select-an-element-text">${i18nString(UIStringsTemp.selectAnElement)}</span></${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Button.litTagName}>`;
            // clang-format on
        });
        _FreestylerChatUi_renderFeedbackLink.set(this, () => {
            // clang-format off
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html `
        <${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.Icon.litTagName}
          name="dog-paw"
          class="feedback-icon"
        ></${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.Icon.litTagName}>
        <span>${i18nString(UIStringsTemp.dogfood)}</span>
        <span>-</span>
        <x-link href=${DOGFOOD_FEEDBACK_URL}
          class="link"
          jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.action('freestyler.feedback').track({
                click: true,
            })}>
         ${i18nString(UIStringsTemp.feedbackLink)}
        </x-link>`;
            // clang-format on
        });
        _FreestylerChatUi_renderMessages.set(this, () => {
            // clang-format off
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html `
      <div class="messages-scroll-container">
        <div class="messages-container">
          ${__classPrivateFieldGet(this, _FreestylerChatUi_props, "f").messages.map((message, _, array) => __classPrivateFieldGet(this, _FreestylerChatUi_renderChatMessage, "f").call(this, message, { isLast: array.at(-1) === message }))}
        </div>
      </div>
    `;
            // clang-format on
        });
        _FreestylerChatUi_renderEmptyState.set(this, () => {
            // clang-format off
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html `<div class="empty-state-container">
      <${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.Icon.litTagName} name="spark" style="width: 36px; height: 36px;"></${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.Icon.litTagName}>
      ${i18nString(UIStringsTemp.emptyStateText)}
    </div>`;
            // clang-format on
        });
        _FreestylerChatUi_renderChatUi.set(this, () => {
            // TODO(ergunsh): Show a better UI for the states where Aida client is not available.
            const isAidaAvailable = __classPrivateFieldGet(this, _FreestylerChatUi_props, "f").aidaAvailability === _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaAvailability.AVAILABLE;
            const isInputDisabled = !Boolean(__classPrivateFieldGet(this, _FreestylerChatUi_props, "f").selectedNode) || !isAidaAvailable || Boolean(__classPrivateFieldGet(this, _FreestylerChatUi_props, "f").confirmSideEffectDialog);
            // clang-format off
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html `
      <div class="chat-ui">
        ${__classPrivateFieldGet(this, _FreestylerChatUi_props, "f").messages.length > 0
                ? __classPrivateFieldGet(this, _FreestylerChatUi_renderMessages, "f").call(this)
                : __classPrivateFieldGet(this, _FreestylerChatUi_renderEmptyState, "f").call(this)}
        <form class="input-form" @submit=${__classPrivateFieldGet(this, _FreestylerChatUi_handleSubmit, "f")}>
          <div class="input-header">
            <div class="header-link-container">
              ${__classPrivateFieldGet(this, _FreestylerChatUi_renderSelectAnElement, "f").call(this)}
            </div>
            <div class="header-link-container">
              ${__classPrivateFieldGet(this, _FreestylerChatUi_renderFeedbackLink, "f").call(this)}
            </div>
          </div>
          <div class="chat-input-container">
            <input type="text" class="chat-input" .disabled=${isInputDisabled}
              placeholder=${getInputPlaceholderString(__classPrivateFieldGet(this, _FreestylerChatUi_props, "f").aidaAvailability)}
              jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.textField('query').track({ change: true })}
            >${__classPrivateFieldGet(this, _FreestylerChatUi_props, "f").isLoading
                ? _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html `
                    <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Button.litTagName}
                      class="step-actions"
                      aria-label=${i18nString(UIStringsTemp.cancelButtonTitle)}
                      @click=${__classPrivateFieldGet(this, _FreestylerChatUi_handleCancel, "f")}
                      .data=${{
                    variant: _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Variant.PRIMARY,
                    size: _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Size.SMALL,
                    disabled: isInputDisabled,
                    iconName: 'stop',
                    title: i18nString(UIStringsTemp.cancelButtonTitle),
                    jslogContext: 'stop',
                }}
                    ></${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Button.litTagName}>`
                : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html `
                    <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Button.litTagName}
                      class="step-actions"
                      aria-label=${i18nString(UIStringsTemp.sendButtonTitle)}
                      .data=${{
                    type: 'submit',
                    variant: _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Variant.ICON,
                    size: _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Size.SMALL,
                    disabled: isInputDisabled,
                    iconName: 'send',
                    title: i18nString(UIStringsTemp.sendButtonTitle),
                    jslogContext: 'send',
                }}
                    ></${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Button.litTagName}>`}
          </div>
          <span class="chat-input-disclaimer">${i18nString(UIStringsTemp.inputDisclaimer)} See <x-link class="link" href=${DOGFOOD_INFO}>dogfood terms</x-link>.</span>
        </form>
      </div>
    `;
            // clang-format on
        });
        _FreestylerChatUi_renderConsentView.set(this, () => {
            // clang-format off
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html `
      <div class="consent-view">
        <h2 tabindex="-1">
          ${i18nString(UIStringsTemp.consentScreenHeading)}
        </h2>
        <main>
          ${i18nString(UIStringsTemp.consentTextAiDisclaimer)}
          <ul>
            <li>${i18nString(UIStringsTemp.consentTextDataDisclaimer)}</li>
            <li>${i18nString(UIStringsTemp.consentTextVisibilityDisclaimer)}</li>
            <li>${i18nString(UIStringsTemp.consentTextDoNotUseDisclaimer)}</li>
            <li>See <x-link class="link" href=${DOGFOOD_INFO}>dogfood terms</x-link>.</li>
          </ul>
          <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Button.litTagName}
            class="accept-button"
            @click=${__classPrivateFieldGet(this, _FreestylerChatUi_props, "f").onAcceptConsentClick}
            .data=${{
                variant: _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Variant.PRIMARY,
                jslogContext: 'accept',
            }}
          >${i18nString(UIStringsTemp.acceptButtonTitle)}</${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Button.litTagName}>
        </main>
      </div>
    `;
            // clang-format on
        });
        __classPrivateFieldSet(this, _FreestylerChatUi_props, props, "f");
    }
    set props(props) {
        __classPrivateFieldSet(this, _FreestylerChatUi_props, props, "f");
        __classPrivateFieldGet(this, _FreestylerChatUi_instances, "m", _FreestylerChatUi_render).call(this);
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _FreestylerChatUi_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './freestylerChatUi.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
        __classPrivateFieldGet(this, _FreestylerChatUi_instances, "m", _FreestylerChatUi_render).call(this);
    }
    focusTextInput() {
        const input = __classPrivateFieldGet(this, _FreestylerChatUi_shadow, "f").querySelector('.chat-input');
        if (!input) {
            return;
        }
        input.focus();
    }
    scrollToLastMessage() {
        const message = __classPrivateFieldGet(this, _FreestylerChatUi_shadow, "f").querySelector('.chat-message:last-child');
        if (!message) {
            return;
        }
        message.scrollIntoViewIfNeeded();
    }
}
_FreestylerChatUi_shadow = new WeakMap(), _FreestylerChatUi_markdownRenderer = new WeakMap(), _FreestylerChatUi_props = new WeakMap(), _FreestylerChatUi_handleSubmit = new WeakMap(), _FreestylerChatUi_handleCancel = new WeakMap(), _FreestylerChatUi_renderChatMessage = new WeakMap(), _FreestylerChatUi_renderSelectAnElement = new WeakMap(), _FreestylerChatUi_renderFeedbackLink = new WeakMap(), _FreestylerChatUi_renderMessages = new WeakMap(), _FreestylerChatUi_renderEmptyState = new WeakMap(), _FreestylerChatUi_renderChatUi = new WeakMap(), _FreestylerChatUi_renderConsentView = new WeakMap(), _FreestylerChatUi_instances = new WeakSet(), _FreestylerChatUi_renderRateButtons = function _FreestylerChatUi_renderRateButtons(rpcId) {
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html `<${_ProvideFeedback_js__WEBPACK_IMPORTED_MODULE_11__.ProvideFeedback.litTagName}
      .props=${{
        onFeedbackSubmit: (rating, feedback) => {
            __classPrivateFieldGet(this, _FreestylerChatUi_props, "f").onFeedbackSubmit(rpcId, rating, feedback);
        },
        canShowFeedbackForm: __classPrivateFieldGet(this, _FreestylerChatUi_props, "f").canShowFeedbackForm,
    }}
      ></${_ProvideFeedback_js__WEBPACK_IMPORTED_MODULE_11__.ProvideFeedback.litTagName}>`;
    // clang-format on
}, _FreestylerChatUi_renderTextAsMarkdown = function _FreestylerChatUi_renderTextAsMarkdown(text) {
    let tokens = [];
    try {
        tokens = _third_party_marked_marked_js__WEBPACK_IMPORTED_MODULE_3__.Marked.lexer(text);
        for (const token of tokens) {
            // Try to render all the tokens to make sure that
            // they all have a template defined for them. If there
            // isn't any template defined for a token, we'll fallback
            // to rendering the text as plain text instead of markdown.
            __classPrivateFieldGet(this, _FreestylerChatUi_markdownRenderer, "f").renderToken(token);
        }
    }
    catch (err) {
        // The tokens were not parsed correctly or
        // one of the tokens are not supported, so we
        // continue to render this as text.
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html `${text}`;
    }
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html `<${_ui_components_markdown_view_markdown_view_js__WEBPACK_IMPORTED_MODULE_6__.MarkdownView.MarkdownView.litTagName}
      .data=${{ tokens, renderer: __classPrivateFieldGet(this, _FreestylerChatUi_markdownRenderer, "f") }}>
    </${_ui_components_markdown_view_markdown_view_js__WEBPACK_IMPORTED_MODULE_6__.MarkdownView.MarkdownView.litTagName}>`;
    // clang-format on
}, _FreestylerChatUi_renderStep = function _FreestylerChatUi_renderStep(step) {
    if (step.step === _FreestylerAgent_js__WEBPACK_IMPORTED_MODULE_9__.Step.ACTION) {
        // clang-format off
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html `
        <div class="action-result">
          <${_ui_components_markdown_view_markdown_view_js__WEBPACK_IMPORTED_MODULE_6__.CodeBlock.CodeBlock.litTagName}
            .code=${step.code.trim()}
            .codeLang=${'js'}
            .displayToolbar=${false}
            .displayNotice=${true}
          ></${_ui_components_markdown_view_markdown_view_js__WEBPACK_IMPORTED_MODULE_6__.CodeBlock.CodeBlock.litTagName}>
          <div class="js-code-output">${step.output}</div>
        </div>
      `;
        // clang-format on
    }
    if (step.step === _FreestylerAgent_js__WEBPACK_IMPORTED_MODULE_9__.Step.ERROR) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html `<p class="error-step">${__classPrivateFieldGet(this, _FreestylerChatUi_instances, "m", _FreestylerChatUi_renderTextAsMarkdown).call(this, step.text)}</p>`;
    }
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html `<p>${__classPrivateFieldGet(this, _FreestylerChatUi_instances, "m", _FreestylerChatUi_renderTextAsMarkdown).call(this, step.text)}</p>`;
}, _FreestylerChatUi_renderSideEffectConfirmationUi = function _FreestylerChatUi_renderSideEffectConfirmationUi(confirmSideEffectDialog) {
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html `<div
      class="side-effect-confirmation"
      jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.section('side-effect-confirmation')}
    >
      <p>${i18nString(UIStringsTemp.sideEffectConfirmationDescription)}</p>
      <${_ui_components_markdown_view_markdown_view_js__WEBPACK_IMPORTED_MODULE_6__.CodeBlock.CodeBlock.litTagName}
        .code=${confirmSideEffectDialog.code}
        .codeLang=${'js'}
        .displayToolbar=${false}
      ></${_ui_components_markdown_view_markdown_view_js__WEBPACK_IMPORTED_MODULE_6__.CodeBlock.CodeBlock.litTagName}>
      <div class="side-effect-buttons-container">
        <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Button.litTagName}
          .data=${{
        variant: _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Variant.PRIMARY,
        jslogContext: 'accept-execute-code',
    }}
          @click=${() => confirmSideEffectDialog.onAnswer(true)}
          >${i18nString(UIStringsTemp.positiveSideEffectConfirmation)}</${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Button.litTagName}>
        <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Button.litTagName}
          .data=${{
        variant: _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Variant.OUTLINED,
        jslogContext: 'decline-execute-code',
    }}
          @click=${() => confirmSideEffectDialog.onAnswer(false)}
        >${i18nString(UIStringsTemp.negativeSideEffectConfirmation)}</${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Button.litTagName}>
      </div>
    </div>`;
    // clang-format on
}, _FreestylerChatUi_render = function _FreestylerChatUi_render() {
    switch (__classPrivateFieldGet(this, _FreestylerChatUi_props, "f").state) {
        case State.CHAT_VIEW:
            _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.render(__classPrivateFieldGet(this, _FreestylerChatUi_renderChatUi, "f").call(this), __classPrivateFieldGet(this, _FreestylerChatUi_shadow, "f"), { host: this });
            break;
        case State.CONSENT_VIEW:
            _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.render(__classPrivateFieldGet(this, _FreestylerChatUi_renderConsentView, "f").call(this), __classPrivateFieldGet(this, _FreestylerChatUi_shadow, "f"), { host: this });
            break;
    }
};
Object.defineProperty(FreestylerChatUi, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.literal `devtools-freestyler-chat-ui`
});
const FOR_TEST = {
    MarkdownRendererWithCodeBlock,
};
customElements.define('devtools-freestyler-chat-ui', FreestylerChatUi);


/***/ }),

/***/ "./src/ui/components/markdown_view/markdown_view.ts":
/*!**********************************************************!*\
  !*** ./src/ui/components/markdown_view/markdown_view.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CodeBlock: () => (/* reexport module object */ _CodeBlock_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   MarkdownImage: () => (/* reexport module object */ _MarkdownImage_js__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   MarkdownImagesMap: () => (/* reexport module object */ _MarkdownImagesMap_js__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   MarkdownLink: () => (/* reexport module object */ _MarkdownLink_js__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   MarkdownLinksMap: () => (/* reexport module object */ _MarkdownLinksMap_js__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   MarkdownView: () => (/* reexport module object */ _MarkdownView_js__WEBPACK_IMPORTED_MODULE_5__)
/* harmony export */ });
/* harmony import */ var _CodeBlock_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CodeBlock.js */ "./src/ui/components/markdown_view/CodeBlock.ts");
/* harmony import */ var _MarkdownImage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MarkdownImage.js */ "./src/ui/components/markdown_view/MarkdownImage.ts");
/* harmony import */ var _MarkdownImagesMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MarkdownImagesMap.js */ "./src/ui/components/markdown_view/MarkdownImagesMap.ts");
/* harmony import */ var _MarkdownLink_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MarkdownLink.js */ "./src/ui/components/markdown_view/MarkdownLink.ts");
/* harmony import */ var _MarkdownLinksMap_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MarkdownLinksMap.js */ "./src/ui/components/markdown_view/MarkdownLinksMap.ts");
/* harmony import */ var _MarkdownView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MarkdownView.js */ "./src/ui/components/markdown_view/MarkdownView.ts");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.









/***/ })

}]);