"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_freestyler_components_FreestylerChatUi_js"],{

/***/ "./panels/freestyler/components/FreestylerChatUi.js":
/*!**********************************************************!*\
  !*** ./panels/freestyler/components/FreestylerChatUi.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DOGFOOD_INFO: () => (/* binding */ DOGFOOD_INFO),
/* harmony export */   FOR_TEST: () => (/* binding */ FOR_TEST),
/* harmony export */   FreestylerChatUi: () => (/* binding */ FreestylerChatUi)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/host/host.js */ "./core/host/host.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _third_party_marked_marked_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../third_party/marked/marked.js */ "./third_party/marked/marked.js");
/* harmony import */ var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/components/buttons/buttons.js */ "./ui/components/buttons/buttons.js");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */ var _ui_components_markdown_view_markdown_view_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ui/components/markdown_view/markdown_view.js */ "./ui/components/markdown_view/markdown_view.js");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _FreestylerAgent_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../FreestylerAgent.js */ "./panels/freestyler/FreestylerAgent.js");
/* harmony import */ var _freestylerChatUi_css_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./freestylerChatUi.css.js */ "./panels/freestyler/components/freestylerChatUi.css.js");
/* harmony import */ var _ProvideFeedback_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ProvideFeedback.js */ "./panels/freestyler/components/ProvideFeedback.js");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.












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
    static litTagName = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.literal `devtools-freestyler-chat-ui`;
    #shadow = this.attachShadow({ mode: 'open' });
    #markdownRenderer = new MarkdownRendererWithCodeBlock();
    #props;
    constructor(props) {
        super();
        this.#props = props;
    }
    set props(props) {
        this.#props = props;
        this.#render();
    }
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_freestylerChatUi_css_js__WEBPACK_IMPORTED_MODULE_10__["default"]];
        this.#render();
    }
    focusTextInput() {
        const input = this.#shadow.querySelector('.chat-input');
        if (!input) {
            return;
        }
        input.focus();
    }
    scrollToLastMessage() {
        const message = this.#shadow.querySelector('.chat-message:last-child');
        if (!message) {
            return;
        }
        message.scrollIntoViewIfNeeded();
    }
    #handleSubmit = (ev) => {
        ev.preventDefault();
        const input = this.#shadow.querySelector('.chat-input');
        if (!input || !input.value) {
            return;
        }
        this.#props.onTextSubmit(input.value);
        input.value = '';
    };
    #handleCancel = (ev) => {
        ev.preventDefault();
        if (!this.#props.isLoading) {
            return;
        }
        this.#props.onCancelClick();
    };
    #renderRateButtons(rpcId) {
        // clang-format off
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html `<${_ProvideFeedback_js__WEBPACK_IMPORTED_MODULE_11__.ProvideFeedback.litTagName}
      .props=${{
            onFeedbackSubmit: (rating, feedback) => {
                this.#props.onFeedbackSubmit(rpcId, rating, feedback);
            },
            canShowFeedbackForm: this.#props.canShowFeedbackForm,
        }}
      ></${_ProvideFeedback_js__WEBPACK_IMPORTED_MODULE_11__.ProvideFeedback.litTagName}>`;
        // clang-format on
    }
    #renderTextAsMarkdown(text) {
        let tokens = [];
        try {
            tokens = _third_party_marked_marked_js__WEBPACK_IMPORTED_MODULE_3__.Marked.lexer(text);
            for (const token of tokens) {
                // Try to render all the tokens to make sure that
                // they all have a template defined for them. If there
                // isn't any template defined for a token, we'll fallback
                // to rendering the text as plain text instead of markdown.
                this.#markdownRenderer.renderToken(token);
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
      .data=${{ tokens, renderer: this.#markdownRenderer }}>
    </${_ui_components_markdown_view_markdown_view_js__WEBPACK_IMPORTED_MODULE_6__.MarkdownView.MarkdownView.litTagName}>`;
        // clang-format on
    }
    #renderStep(step) {
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
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html `<p class="error-step">${this.#renderTextAsMarkdown(step.text)}</p>`;
        }
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html `<p>${this.#renderTextAsMarkdown(step.text)}</p>`;
    }
    #renderSideEffectConfirmationUi(confirmSideEffectDialog) {
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
            variant: "primary" /* Buttons.Button.Variant.PRIMARY */,
            jslogContext: 'accept-execute-code',
        }}
          @click=${() => confirmSideEffectDialog.onAnswer(true)}
          >${i18nString(UIStringsTemp.positiveSideEffectConfirmation)}</${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Button.litTagName}>
        <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Button.litTagName}
          .data=${{
            variant: "outlined" /* Buttons.Button.Variant.OUTLINED */,
            jslogContext: 'decline-execute-code',
        }}
          @click=${() => confirmSideEffectDialog.onAnswer(false)}
        >${i18nString(UIStringsTemp.negativeSideEffectConfirmation)}</${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Button.litTagName}>
      </div>
    </div>`;
        // clang-format on
    }
    #renderChatMessage = (message, { isLast }) => {
        if (message.entity === "user" /* ChatMessageEntity.USER */) {
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html `<div class="chat-message query" jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.section('question')}>${message.text}</div>`;
        }
        const shouldShowFixThisIssueButton = !this.#props.isLoading && isLast && message.suggestingFix;
        const shouldShowRating = !isLast || (!this.#props.confirmSideEffectDialog && isLast);
        const shouldShowLoading = this.#props.isLoading && isLast && !this.#props.confirmSideEffectDialog;
        // clang-format off
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html `
      <div class="chat-message answer" jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.section('answer')}>
        ${message.steps.map(step => this.#renderStep(step))}
        ${this.#props.confirmSideEffectDialog && isLast
            ? this.#renderSideEffectConfirmationUi(this.#props.confirmSideEffectDialog)
            : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.nothing}
        <div class="actions">
          ${shouldShowRating && message.rpcId !== undefined
            ? this.#renderRateButtons(message.rpcId)
            : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.nothing}
          ${shouldShowFixThisIssueButton
            ? _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html `<${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Button.litTagName}
                  .data=${{
                variant: "outlined" /* Buttons.Button.Variant.OUTLINED */,
                jslogContext: 'fix-this-issue',
            }}
                  @click=${this.#props.onFixThisIssueClick}
                >${i18nString(UIStringsTemp.fixThisIssue)}</${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Button.litTagName}>`
            : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.nothing}
        </div>
        ${shouldShowLoading
            ? _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html `<div class="chat-loading">Loading...</div>`
            : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.nothing}
      </div>
    `;
        // clang-format on
    };
    #renderSelectAnElement = () => {
        const data = {
            size: "SMALL" /* Buttons.Button.Size.SMALL */,
            iconName: 'select-element',
            toggledIconName: 'select-element',
            toggleType: "primary-toggle" /* Buttons.Button.ToggleType.PRIMARY */,
            toggled: this.#props.inspectElementToggled,
            title: i18nString(UIStringsTemp.selectAnElement),
            jslogContext: 'select-element',
        };
        // clang-format off
        return this.#props.selectedNode
            ? _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html `
        <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Button.litTagName}
          .data=${{
                variant: "icon_toggle" /* Buttons.Button.Variant.ICON_TOGGLE */,
                ...data,
            }}
          @click=${this.#props.onInspectElementClick}
        ></${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Button.litTagName}>
        ${_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.Directives.until(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Linkifier.Linkifier.linkify(this.#props.selectedNode))}`
            : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html `
        <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Button.litTagName}
          .data=${{
                variant: "text" /* Buttons.Button.Variant.TEXT */,
                ...data,
            }}
          @click=${this.#props.onInspectElementClick}
        ><span class="select-an-element-text">${i18nString(UIStringsTemp.selectAnElement)}</span></${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Button.litTagName}>`;
        // clang-format on
    };
    #renderFeedbackLink = () => {
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
    };
    #renderMessages = () => {
        // clang-format off
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html `
      <div class="messages-scroll-container">
        <div class="messages-container">
          ${this.#props.messages.map((message, _, array) => this.#renderChatMessage(message, { isLast: array.at(-1) === message }))}
        </div>
      </div>
    `;
        // clang-format on
    };
    #renderEmptyState = () => {
        // clang-format off
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html `<div class="empty-state-container">
      <${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.Icon.litTagName} name="spark" style="width: 36px; height: 36px;"></${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.Icon.litTagName}>
      ${i18nString(UIStringsTemp.emptyStateText)}
    </div>`;
        // clang-format on
    };
    #renderChatUi = () => {
        // TODO(ergunsh): Show a better UI for the states where Aida client is not available.
        const isAidaAvailable = this.#props.aidaAvailability === _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaAvailability.AVAILABLE;
        const isInputDisabled = !Boolean(this.#props.selectedNode) || !isAidaAvailable || Boolean(this.#props.confirmSideEffectDialog);
        // clang-format off
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html `
      <div class="chat-ui">
        ${this.#props.messages.length > 0
            ? this.#renderMessages()
            : this.#renderEmptyState()}
        <form class="input-form" @submit=${this.#handleSubmit}>
          <div class="input-header">
            <div class="header-link-container">
              ${this.#renderSelectAnElement()}
            </div>
            <div class="header-link-container">
              ${this.#renderFeedbackLink()}
            </div>
          </div>
          <div class="chat-input-container">
            <input type="text" class="chat-input" .disabled=${isInputDisabled}
              placeholder=${getInputPlaceholderString(this.#props.aidaAvailability)}
              jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.textField('query').track({ change: true })}
            >${this.#props.isLoading
            ? _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html `
                    <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Button.litTagName}
                      class="step-actions"
                      aria-label=${i18nString(UIStringsTemp.cancelButtonTitle)}
                      @click=${this.#handleCancel}
                      .data=${{
                variant: "primary" /* Buttons.Button.Variant.PRIMARY */,
                size: "SMALL" /* Buttons.Button.Size.SMALL */,
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
                variant: "icon" /* Buttons.Button.Variant.ICON */,
                size: "SMALL" /* Buttons.Button.Size.SMALL */,
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
    };
    #renderConsentView = () => {
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
            @click=${this.#props.onAcceptConsentClick}
            .data=${{
            variant: "primary" /* Buttons.Button.Variant.PRIMARY */,
            jslogContext: 'accept',
        }}
          >${i18nString(UIStringsTemp.acceptButtonTitle)}</${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Button.litTagName}>
        </main>
      </div>
    `;
        // clang-format on
    };
    #render() {
        switch (this.#props.state) {
            case "chat-view" /* State.CHAT_VIEW */:
                _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.render(this.#renderChatUi(), this.#shadow, { host: this });
                break;
            case "consent-view" /* State.CONSENT_VIEW */:
                _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.render(this.#renderConsentView(), this.#shadow, { host: this });
                break;
        }
    }
}
const FOR_TEST = {
    MarkdownRendererWithCodeBlock,
};
customElements.define('devtools-freestyler-chat-ui', FreestylerChatUi);
//# sourceMappingURL=FreestylerChatUi.js.map

/***/ }),

/***/ "./panels/freestyler/components/ProvideFeedback.js":
/*!*********************************************************!*\
  !*** ./panels/freestyler/components/ProvideFeedback.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProvideFeedback: () => (/* binding */ ProvideFeedback)
/* harmony export */ });
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/host/host.js */ "./core/host/host.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/buttons/buttons.js */ "./ui/components/buttons/buttons.js");
/* harmony import */ var _ui_components_input_input_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/components/input/input.js */ "./ui/components/input/input.js");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _provideFeedback_css_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./provideFeedback.css.js */ "./panels/freestyler/components/provideFeedback.css.js");
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
     * @description The placeholder text for the feedback input.
     */
    provideFeedbackPlaceholder: 'Provide additional feedback',
    /**
     * @description The disclaimer text that tells the user what will be shared
     * and what will be stored.
     */
    disclaimer: 'Feedback submitted will also include your conversation.',
    /**
     * @description The button text for the action of submitting feedback.
     */
    submit: 'Submit',
    /**
     * @description The header of the feedback form asking.
     */
    whyThisRating: 'Why did you choose this rating? (optional)',
    /**
     * @description The button text for the action that hides the feedback form.
     */
    close: 'Close',
    /**
     * @description The title of the button that opens a page to report a legal
     * issue with the Freestyler message.
     */
    report: 'Report legal issue',
};
// const str_ = i18n.i18n.registerUIStrings('panels/freestyler/components/AiRatings.ts', UIStrings);
// const i18nString = i18n.i18n.getLocalizedString.bind(undefined, str_);
/* eslint-disable  rulesdir/l10n_i18nString_call_only_with_uistrings */
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.lockedString;
const REPORT_URL = 'https://support.google.com/legal/troubleshooter/1114905?hl=en#ts=1115658%2C13380504';
class ProvideFeedback extends HTMLElement {
    static litTagName = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.literal `devtools-provide-feedback`;
    #shadow = this.attachShadow({ mode: 'open' });
    #props;
    #isShowingFeedbackForm = false;
    #currentRating;
    constructor(props) {
        super();
        this.#props = props;
    }
    set props(props) {
        this.#props = props;
        this.#render();
    }
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_provideFeedback_css_js__WEBPACK_IMPORTED_MODULE_5__["default"], _ui_components_input_input_js__WEBPACK_IMPORTED_MODULE_3__.textInputStyles];
        this.#render();
    }
    #handleRateClick(rating) {
        if (this.#currentRating === rating) {
            return;
        }
        this.#currentRating = rating;
        this.#isShowingFeedbackForm = this.#props.canShowFeedbackForm;
        this.#props.onFeedbackSubmit(this.#currentRating);
        this.#render();
    }
    #handleClose = () => {
        this.#isShowingFeedbackForm = false;
        this.#render();
    };
    #handleSubmit = (ev) => {
        ev.preventDefault();
        const input = this.#shadow.querySelector('.feedback-input');
        if (!this.#currentRating || !input || !input.value) {
            return;
        }
        this.#props.onFeedbackSubmit(this.#currentRating, input.value);
        this.#isShowingFeedbackForm = false;
        this.#render();
    };
    #handleReportClick = () => {
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.InspectorFrontendHost.InspectorFrontendHostInstance.openInNewTab(REPORT_URL);
    };
    #renderButtons() {
        // clang-format off
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.html `
      <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName}
        .data=${{
            variant: "icon" /* Buttons.Button.Variant.ICON */,
            size: "SMALL" /* Buttons.Button.Size.SMALL */,
            iconName: 'thumb-up',
            active: this.#currentRating === "POSITIVE" /* Host.AidaClient.Rating.POSITIVE */,
            title: i18nString(UIStringsTemp.thumbsUp),
            jslogContext: 'thumbs-up',
        }}
        @click=${() => this.#handleRateClick("POSITIVE" /* Host.AidaClient.Rating.POSITIVE */)}
      ></${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName}>
      <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName}
        .data=${{
            variant: "icon" /* Buttons.Button.Variant.ICON */,
            size: "SMALL" /* Buttons.Button.Size.SMALL */,
            iconName: 'thumb-down',
            active: this.#currentRating === "NEGATIVE" /* Host.AidaClient.Rating.NEGATIVE */,
            title: i18nString(UIStringsTemp.thumbsDown),
            jslogContext: 'thumbs-down',
        }}
        @click=${() => this.#handleRateClick("NEGATIVE" /* Host.AidaClient.Rating.NEGATIVE */)}
      ></${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName}>
      <div class="vertical-separator"></div>
      <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName}
        .data=${{
            variant: "icon" /* Buttons.Button.Variant.ICON */,
            size: "SMALL" /* Buttons.Button.Size.SMALL */,
            title: i18nString(UIStringsTemp.report),
            iconName: 'report',
            jslogContext: 'report',
        }}
        @click=${this.#handleReportClick}
      ></${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName}>
    `;
        // clang-format on
    }
    #renderFeedbackForm() {
        // clang-format off
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.html `
      <form class="feedback" @submit=${this.#handleSubmit}>
        <div class="feedback-header">
          <h4 class="feedback-title">${i18nString(UIStringsTemp.whyThisRating)}</h4>
          <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName}
            aria-label=${i18nString(UIStringsTemp.close)}
            @click=${this.#handleClose}
            .data=${{
            variant: "icon" /* Buttons.Button.Variant.ICON */,
            iconName: 'cross',
            size: "SMALL" /* Buttons.Button.Size.SMALL */,
            title: i18nString(UIStringsTemp.close),
            jslogContext: 'close',
        }}
          ></${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName}>
        </div>
        <input
          type="text"
          class="devtools-text-input feedback-input"
          placeholder=${i18nString(UIStringsTemp.provideFeedbackPlaceholder)}
        >
        <span class="feedback-disclaimer">${i18nString(UIStringsTemp.disclaimer)}</span>
        <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName}
        aria-label=${i18nString(UIStringsTemp.submit)}
        .data=${{
            type: 'submit',
            variant: "outlined" /* Buttons.Button.Variant.OUTLINED */,
            size: "SMALL" /* Buttons.Button.Size.SMALL */,
            title: i18nString(UIStringsTemp.submit),
            jslogContext: 'send',
        }}
        >${i18nString(UIStringsTemp.submit)}</${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName}>
      </div>
    `;
        // clang-format on
    }
    #render() {
        // clang-format off
        _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.html `
        <div class="rate-buttons">
          ${this.#renderButtons()}
          ${this.#isShowingFeedbackForm
            ? this.#renderFeedbackForm()
            : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.nothing}
        </div>`, this.#shadow, { host: this });
        // clang-format on
    }
}
customElements.define('devtools-provide-feedback', ProvideFeedback);
//# sourceMappingURL=ProvideFeedback.js.map

/***/ }),

/***/ "./panels/freestyler/components/freestylerChatUi.css.js":
/*!**************************************************************!*\
  !*** ./panels/freestyler/components/freestylerChatUi.css.js ***!
  \**************************************************************/
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

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:host {
  width: 100%;
  height: 100%;
  user-select: text;
  display: flex;
  flex-direction: column;
  background-color: var(--sys-color-cdt-base-container);
}

.chat-ui {
  width: 100%;
  height: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
}

.input-form {
  display: flex;
  flex-direction: column;
  padding: var(--sys-size-8) var(--sys-size-4) 0 var(--sys-size-4);
  max-width: 720px;
  width: 100%;
  margin: 0 auto;
}

.chat-input-container {
  margin: var(--sys-size-3) 0;
  padding: 0 2px;
  border-radius: 4px;
  border: 1px solid var(--sys-color-neutral-outline);
  width: 100%;
  display: flex;
  background-color: var(--sys-color-cdt-base-container);
}

.chat-input {
  border: 0;
  height: var(--sys-size-11);
  padding: 0 6px;
  flex-grow: 1;
  color: var(--sys-color-on-surface);
  background-color: var(--sys-color-cdt-base-container);
}

.chat-input:focus-visible {
  outline: none;
}

.chat-input-container:has(.chat-input:focus-visible) {
  outline: 1px solid var(--sys-color-primary);
}

.chat-input::placeholder {
  color: var(--sys-color-state-disabled);
}

.chat-input-disclaimer {
  text-align: center;
  color: var(--sys-color-on-surface-subtle);
  margin-bottom: var(--sys-size-4);
}

.messages-container {
  margin: var(--sys-size-6) auto 0 auto;
  max-width: 720px;
  padding: 0 var(--sys-size-4);
}

.messages-scroll-container {
  overflow: overlay;
  flex-grow: 1;
}

.chat-message {
  user-select: text;
  cursor: initial;
  width: fit-content;
  padding: 8px var(--sys-size-8);
  font-size: 12px;
  border-radius: var(--sys-size-6);
  word-break: break-word;

  &:not(:first-of-type) {
    margin-top: var(--sys-size-6);
  }

  &.query {
    max-width: 320px;
    color: var(--sys-color-on-surface);
    background: var(--sys-color-surface2);
    margin-left: auto;
  }

  &.answer {
    max-width: 440px;
    color: var(--sys-color-on-surface);
    background: var(--sys-color-surface2);
  }

  & .chat-loading {
    margin: 4px 0;
    padding: 4px 0;
  }

  & .actions {
    display: flex;
    gap: var(--sys-size-8);
    justify-content: space-between;
    align-items: flex-end;
  }
}

.input-header {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2px;
  line-height: 20px;

  & .feedback-icon {
    width: var(--sys-size-8);
    height: var(--sys-size-8);
  }

  & .header-link-container {
    display: inline-flex;
    align-items: center;
    gap: var(--sys-size-2);
  }
}

.link {
  color: var(--text-link);
  text-decoration: underline;
}

.select-an-element-text {
  margin-left: 2px;
}

.empty-state-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  gap: 4px;
  font-size: 16px;
  opacity: 70%;
}

.action-result {
  margin: 8px 0;
}

.js-code-output {
  margin-top: -8px;
  white-space: pre;
  max-width: 100%;
  overflow: auto;
  scrollbar-width: none;
  padding: 4px 6px;
  background-color: var(--sys-color-surface3);
  color: var(--sys-color-on-surface);
  font-size: 10px;
  font-family: var(--source-code-font-family);
}

.error-step {
  color: var(--sys-color-error);
}

.side-effect-confirmation {
  background: var(--color-background);
  padding: 24px;
  border-radius: var(--sys-size-6);
  margin-bottom: 8px;

  p {
    margin: 0;
    margin-bottom: 12px;
    padding: 0;
  }
}

.side-effect-buttons-container {
  margin-top: 8px;

  devtools-button {
    margin-top: 4px;
  }
}

.consent-view {
  padding: 24px;
  text-wrap: pretty;

  .accept-button {
    margin-top: 8px;
  }

  ul {
    padding: 0 13px;
  }

  h2 {
    font-weight: 500;
  }
}

/*# sourceURL=./components/freestylerChatUi.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./panels/freestyler/components/provideFeedback.css.js":
/*!*************************************************************!*\
  !*** ./panels/freestyler/components/provideFeedback.css.js ***!
  \*************************************************************/
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

* {
  box-sizing: border-box;
}

.feedback {
  display: flex;
  flex-direction: column;
  gap: var(--sys-size-4);
  margin-top: var(--sys-size-4);
}

.feedback-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.feedback-title {
  margin: 0;
}

.feedback-disclaimer {
  padding: 0 var(--sys-size-4);
}

.vertical-separator {
  height: 20px;
  width: 1px;
  vertical-align: top;
  margin: 0 var(--sys-size-2);
  background: var(--color-background-inverted);
  opacity: 10%;
  display: inline-block;
}

/*# sourceURL=./components/provideFeedback.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./ui/components/markdown_view/markdown_view.js":
/*!******************************************************!*\
  !*** ./ui/components/markdown_view/markdown_view.js ***!
  \******************************************************/
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
/* harmony import */ var _CodeBlock_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CodeBlock.js */ "./ui/components/markdown_view/CodeBlock.js");
/* harmony import */ var _MarkdownImage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MarkdownImage.js */ "./ui/components/markdown_view/MarkdownImage.js");
/* harmony import */ var _MarkdownImagesMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MarkdownImagesMap.js */ "./ui/components/markdown_view/MarkdownImagesMap.js");
/* harmony import */ var _MarkdownLink_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MarkdownLink.js */ "./ui/components/markdown_view/MarkdownLink.js");
/* harmony import */ var _MarkdownLinksMap_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MarkdownLinksMap.js */ "./ui/components/markdown_view/MarkdownLinksMap.js");
/* harmony import */ var _MarkdownView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MarkdownView.js */ "./ui/components/markdown_view/MarkdownView.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







//# sourceMappingURL=markdown_view.js.map

/***/ })

}]);