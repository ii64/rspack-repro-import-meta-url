"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_explain_components_ConsoleInsight_js"],{

/***/ "./panels/explain/components/ConsoleInsight.js":
/*!*****************************************************!*\
  !*** ./panels/explain/components/ConsoleInsight.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CloseEvent: () => (/* binding */ CloseEvent),
/* harmony export */   ConsoleInsight: () => (/* binding */ ConsoleInsight)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/host/host.js */ "./core/host/host.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _third_party_marked_marked_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../third_party/marked/marked.js */ "./third_party/marked/marked.js");
/* harmony import */ var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/components/buttons/buttons.js */ "./ui/components/buttons/buttons.js");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */ var _ui_components_input_input_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../ui/components/input/input.js */ "./ui/components/input/input.js");
/* harmony import */ var _ui_components_markdown_view_markdown_view_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../ui/components/markdown_view/markdown_view.js */ "./ui/components/markdown_view/markdown_view.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _PromptBuilder_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../PromptBuilder.js */ "./panels/explain/PromptBuilder.js");
/* harmony import */ var _consoleInsight_css_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./consoleInsight.css.js */ "./panels/explain/components/consoleInsight.css.js");
/* harmony import */ var _consoleInsightSourcesList_css_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./consoleInsightSourcesList.css.js */ "./panels/explain/components/consoleInsightSourcesList.css.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.















// Note: privacy and legal notices are not localized so far.
const UIStrings = {
    /**
     * @description The title of the insight source "Console message".
     */
    consoleMessage: 'Console message',
    /**
     * @description The title of the insight source "Stacktrace".
     */
    stackTrace: 'Stacktrace',
    /**
     * @description The title of the insight source "Network request".
     */
    networkRequest: 'Network request',
    /**
     * @description The title of the insight source "Related code".
     */
    relatedCode: 'Related code',
    /**
     * @description The title that is shown while the insight is being generated.
     */
    generating: 'Generating explanation…',
    /**
     * @description The header that indicates that the content shown is a console
     * insight.
     */
    insight: 'Explanation',
    /**
     * @description The title of the a button that closes the insight pane.
     */
    closeInsight: 'Close explanation',
    /**
     * @description The title of the list of source data that was used to generate the insight.
     */
    inputData: 'Data used to understand this message',
    /**
     * @description The title of the button that allows submitting positive
     * feedback about the console insight.
     */
    thumbsUp: 'Thumbs up',
    /**
     * @description The title of the button that allows submitting negative
     * feedback about the console insight.
     */
    thumbsDown: 'Thumbs down',
    /**
     * @description The title of the button that opens a page to report a legal
     * issue with the console insight.
     */
    report: 'Report legal issue',
    /**
     * @description The text of the header inside the console insight pane when there was an error generating an insight.
     */
    error: 'DevTools has encountered an error',
    /**
     * @description The message shown when an error has been encountered.
     */
    errorBody: 'Something went wrong. Try again.',
    /**
     * @description Label for screenreaders that is added to the end of the link
     * title to indicate that the link will be opened in a new tab.
     */
    opensInNewTab: '(opens in a new tab)',
    /**
     * @description The title of a link that allows the user to learn more about
     * the feature.
     */
    learnMore: 'Learn more',
    /**
     * @description The title of the message when the console insight is not available for some reason.
     */
    notAvailable: 'This feature is not available',
    /**
     * @description The error message when the user is not logged in into Chrome.
     */
    notLoggedIn: 'This feature is only available when you sign into Chrome with your Google account.',
    /**
     * @description The error message when the user is not logged in into Chrome.
     */
    syncIsOff: 'This feature requires you to turn on Chrome sync.',
    /**
     * @description The title of the button that opens Chrome settings.
     */
    updateSettings: 'Update Settings',
    /**
     * @description The header shown when the internet connection is not
     * available.
     */
    offlineHeader: 'DevTools can’t reach the internet',
    /**
     * @description Message shown when the user is offline.
     */
    offline: 'Check your internet connection and try again.',
    /**
     * @description The message shown if the user is not logged in.
     */
    signInToUse: 'Sign in to use this feature',
    /**
     * @description The title of the button that cancels a console insight flow.
     */
    cancel: 'Cancel',
    /**
     * @description The title of the button that disables the Console insight (this) feature.
     */
    disableFeature: 'Disable this feature',
    /**
     * @description The title of the button that goes to the next page.
     */
    next: 'Next',
    /**
     * @description The title of the button that goes back to the previous page.
     */
    back: 'Back',
    /**
     * @description The title of the button that lets the user to continue
     * with using the feature.
     */
    continue: 'Continue',
    /**
     * @description The title of the button that searches for the console
     * insight using a search engine instead of using console insights.
     */
    search: 'Use search instead',
    /**
     * @description Shown to the user when the network request data is not
     * available and a page reload might populate it.
     */
    reloadRecommendation: 'Reload the page to capture related network request data for this message in order to create a better insight.',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/explain/components/ConsoleInsight.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
const { render, html, Directives } = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_10__;
class CloseEvent extends Event {
    static eventName = 'close';
    constructor() {
        super(CloseEvent.eventName, { composed: true, bubbles: true });
    }
}
function localizeType(sourceType) {
    switch (sourceType) {
        case _PromptBuilder_js__WEBPACK_IMPORTED_MODULE_12__.SourceType.MESSAGE:
            return i18nString(UIStrings.consoleMessage);
        case _PromptBuilder_js__WEBPACK_IMPORTED_MODULE_12__.SourceType.STACKTRACE:
            return i18nString(UIStrings.stackTrace);
        case _PromptBuilder_js__WEBPACK_IMPORTED_MODULE_12__.SourceType.NETWORK_REQUEST:
            return i18nString(UIStrings.networkRequest);
        case _PromptBuilder_js__WEBPACK_IMPORTED_MODULE_12__.SourceType.RELATED_CODE:
            return i18nString(UIStrings.relatedCode);
    }
}
const TERMS_OF_SERVICE_URL = 'https://policies.google.com/terms';
const PRIVACY_POLICY_URL = 'https://policies.google.com/privacy';
const CODE_SNIPPET_WARNING_URL = 'https://support.google.com/legal/answer/13505487';
const LEARNMORE_URL = 'https://goo.gle/devtools-console-messages-ai';
const REPORT_URL = 'https://support.google.com/legal/troubleshooter/1114905?hl=en#ts=1115658%2C13380504';
const CHROME_SETTINGS_URL = 'chrome://settings';
class ConsoleInsight extends HTMLElement {
    static async create(promptBuilder, aidaClient) {
        const aidaAvailability = await _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaClient.getAidaClientAvailability();
        return new ConsoleInsight(promptBuilder, aidaClient, aidaAvailability);
    }
    static litTagName = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_10__.literal `devtools-console-insight`;
    #shadow = this.attachShadow({ mode: 'open' });
    #promptBuilder;
    #aidaClient;
    #renderer = new _ui_components_markdown_view_markdown_view_js__WEBPACK_IMPORTED_MODULE_8__.MarkdownView.MarkdownInsightRenderer();
    // Main state.
    #state;
    // Rating sub-form state.
    #selectedRating;
    constructor(promptBuilder, aidaClient, aidaAvailability) {
        super();
        this.#promptBuilder = promptBuilder;
        this.#aidaClient = aidaClient;
        switch (aidaAvailability) {
            case _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaAvailability.AVAILABLE:
                this.#state = {
                    type: "loading" /* State.LOADING */,
                    consentReminderConfirmed: false,
                    consentOnboardingFinished: this.#getOnboardingCompletedSetting().get(),
                };
                break;
            case _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaAvailability.NO_ACCOUNT_EMAIL:
                this.#state = {
                    type: "not-logged-in" /* State.NOT_LOGGED_IN */,
                };
                break;
            case _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaAvailability.NO_ACTIVE_SYNC:
                this.#state = {
                    type: "sync-is-off" /* State.SYNC_IS_OFF */,
                };
                break;
            case _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaAvailability.NO_INTERNET:
                this.#state = {
                    type: "offline" /* State.OFFLINE */,
                };
                break;
        }
        this.#render();
        // Stop keyboard event propagation to avoid Console acting on the events
        // inside the insight component.
        this.addEventListener('keydown', e => {
            e.stopPropagation();
        });
        this.addEventListener('keyup', e => {
            e.stopPropagation();
        });
        this.addEventListener('keypress', e => {
            e.stopPropagation();
        });
        this.addEventListener('click', e => {
            e.stopPropagation();
        });
        this.focus();
        // Measure the height of the element after an animation. `--actual-height` can
        // be used as the `from` value for the subsequent animation.
        this.addEventListener('animationend', () => {
            this.style.setProperty('--actual-height', `${this.offsetHeight}px`);
        });
    }
    #getOnboardingCompletedSetting() {
        return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createLocalSetting('console-insights-onboarding-finished', false);
    }
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_consoleInsight_css_js__WEBPACK_IMPORTED_MODULE_13__["default"], _ui_components_input_input_js__WEBPACK_IMPORTED_MODULE_7__.checkboxStyles];
        this.classList.add('opening');
        void this.#generateInsightIfNeeded();
    }
    #transitionTo(newState) {
        const previousState = this.#state;
        this.#state = newState;
        if (newState.type !== previousState.type && previousState.type === "loading" /* State.LOADING */) {
            this.classList.add('loaded');
        }
        this.#render();
        if (newState.type !== previousState.type) {
            this.#focusHeader();
        }
    }
    async #generateInsightIfNeeded() {
        if (this.#state.type !== "loading" /* State.LOADING */) {
            return;
        }
        if (!this.#state.consentOnboardingFinished) {
            this.#transitionTo({
                type: "consent-onboarding" /* State.CONSENT_ONBOARDING */,
                page: "private" /* ConsentOnboardingPage.PAGE1 */,
            });
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.InsightsOnboardingShown);
            return;
        }
        if (!this.#state.consentReminderConfirmed) {
            const { sources, isPageReloadRecommended } = await this.#promptBuilder.buildPrompt();
            this.#transitionTo({
                type: "consent-reminder" /* State.CONSENT_REMINDER */,
                sources,
                isPageReloadRecommended,
            });
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.InsightConsentReminderShown);
            return;
        }
    }
    #onClose() {
        if (this.#state.type === "consent-reminder" /* State.CONSENT_REMINDER */) {
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.InsightConsentReminderCanceled);
        }
        else if (this.#state.type === "consent-onboarding" /* State.CONSENT_ONBOARDING */) {
            if (this.#state.page === "private" /* ConsentOnboardingPage.PAGE1 */) {
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.InsightsOnboardingCanceledOnPage1);
            }
            else {
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.InsightsOnboardingCanceledOnPage2);
            }
        }
        this.dispatchEvent(new CloseEvent());
        this.classList.add('closing');
    }
    #onRating(event) {
        if (this.#state.type !== "insight" /* State.INSIGHT */) {
            throw new Error('Unexpected state');
        }
        if (this.#state.metadata?.rpcGlobalId === undefined) {
            throw new Error('RPC Id not in metadata');
        }
        // If it was rated, do not record again.
        if (this.#selectedRating !== undefined) {
            return;
        }
        this.#selectedRating = event.target.dataset.rating === 'true';
        this.#render();
        if (this.#selectedRating) {
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.InsightRatedPositive);
        }
        else {
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.InsightRatedNegative);
        }
        const disallowLogging = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().getHostConfig()?.devToolsConsoleInsights.disallowLogging === true;
        void this.#aidaClient.registerClientEvent({
            corresponding_aida_rpc_global_id: this.#state.metadata.rpcGlobalId,
            disable_user_content_logging: disallowLogging,
            do_conversation_client_event: {
                user_feedback: {
                    sentiment: this.#selectedRating ? "POSITIVE" /* Host.AidaClient.Rating.POSITIVE */ : "NEGATIVE" /* Host.AidaClient.Rating.NEGATIVE */,
                },
            },
        });
    }
    #onReport() {
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.openInNewTab(REPORT_URL);
    }
    #onSearch() {
        const query = this.#promptBuilder.getSearchQuery();
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.openSearchResultsInNewTab(query);
    }
    async #onConsentReminderConfirmed() {
        this.#transitionTo({
            type: "loading" /* State.LOADING */,
            consentReminderConfirmed: true,
            consentOnboardingFinished: this.#getOnboardingCompletedSetting().get(),
        });
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.InsightConsentReminderConfirmed);
        try {
            for await (const { sources, isPageReloadRecommended, explanation, metadata } of this.#getInsight()) {
                const tokens = this.#validateMarkdown(explanation);
                const valid = tokens !== false;
                this.#transitionTo({
                    type: "insight" /* State.INSIGHT */,
                    tokens: valid ? tokens : [],
                    validMarkdown: valid,
                    explanation,
                    sources,
                    metadata,
                    isPageReloadRecommended,
                });
            }
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.InsightGenerated);
        }
        catch (err) {
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.InsightErrored);
            this.#transitionTo({
                type: "error" /* State.ERROR */,
                error: err.message,
            });
        }
    }
    /**
     * Validates the markdown by trying to render it.
     */
    #validateMarkdown(text) {
        try {
            const tokens = _third_party_marked_marked_js__WEBPACK_IMPORTED_MODULE_4__.Marked.lexer(text);
            for (const token of tokens) {
                this.#renderer.renderToken(token);
            }
            return tokens;
        }
        catch {
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.InsightErroredMarkdown);
            return false;
        }
    }
    async *#getInsight() {
        const { prompt, sources, isPageReloadRecommended } = await this.#promptBuilder.buildPrompt();
        try {
            for await (const response of this.#aidaClient.fetch(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaClient.buildConsoleInsightsRequest(prompt))) {
                yield { sources, isPageReloadRecommended, ...response };
            }
        }
        catch (err) {
            if (err.message === 'Server responded: permission denied') {
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.InsightErroredPermissionDenied);
            }
            else if (err.message.startsWith('Cannot send request:')) {
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.InsightErroredCannotSend);
            }
            else if (err.message.startsWith('Request failed:')) {
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.InsightErroredRequestFailed);
            }
            else if (err.message.startsWith('Cannot parse chunk:')) {
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.InsightErroredCannotParseChunk);
            }
            else if (err.message === 'Unknown chunk result') {
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.InsightErroredUnknownChunk);
            }
            else if (err.message.startsWith('Server responded:')) {
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.InsightErroredApi);
            }
            else {
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.InsightErroredOther);
            }
            throw err;
        }
    }
    #onGoToSettings() {
        const rootTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().rootTarget();
        if (rootTarget === null) {
            return;
        }
        const url = CHROME_SETTINGS_URL;
        void rootTarget.targetAgent().invoke_createTarget({ url }).then(result => {
            if (result.getError()) {
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.openInNewTab(url);
            }
        });
    }
    #onDisableFeature() {
        try {
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.moduleSetting('console-insights-enabled').set(false);
        }
        finally {
            this.#onClose();
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.InspectorView.InspectorView.instance().displayReloadRequiredWarning('Reload for the change to apply.');
        }
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.InsightsOnboardingFeatureDisabled);
    }
    #goToNextPage() {
        this.#transitionTo({
            type: "consent-onboarding" /* State.CONSENT_ONBOARDING */,
            page: "legal" /* ConsentOnboardingPage.PAGE2 */,
        });
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.InsightsOnboardingNextPage);
    }
    #focusHeader() {
        this.#shadow.querySelector('header h2')?.focus();
    }
    #termsChecked() {
        const checkbox = this.#shadow.querySelector('.terms');
        if (!checkbox?.checked) {
            return false;
        }
        return true;
    }
    #onConsentOnboardingConfirmed() {
        if (!this.#termsChecked()) {
            return;
        }
        this.#getOnboardingCompletedSetting().set(true);
        this.#transitionTo({
            type: "loading" /* State.LOADING */,
            consentReminderConfirmed: false,
            consentOnboardingFinished: this.#getOnboardingCompletedSetting().get(),
        });
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.InsightsOnboardingConfirmed);
        void this.#generateInsightIfNeeded();
    }
    #goToPrevPage() {
        this.#transitionTo({
            type: "consent-onboarding" /* State.CONSENT_ONBOARDING */,
            page: "private" /* ConsentOnboardingPage.PAGE1 */,
        });
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.InsightsOnboardingPrevPage);
    }
    #renderCancelButton() {
        // clang-format off
        return html `<${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName}
      class="cancel-button"
      @click=${this.#onClose}
      .data=${{
            variant: "outlined" /* Buttons.Button.Variant.OUTLINED */,
            jslogContext: 'cancel',
        }}
    >
      ${i18nString(UIStrings.cancel)}
    </${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName}>`;
        // clang-format on
    }
    #renderDisableFeatureButton() {
        // clang-format off
        return html `<${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName}
      @click=${this.#onDisableFeature}
      class="disable-button"
      .data=${{
            variant: "outlined" /* Buttons.Button.Variant.OUTLINED */,
            jslogContext: 'disable',
        }}
    >
      ${i18nString(UIStrings.disableFeature)}
    </${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName}>`;
        // clang-format on
    }
    #renderNextButton() {
        // clang-format off
        return html `<${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName}
      class="next-button"
      @click=${this.#goToNextPage}
      .data=${{
            variant: "primary" /* Buttons.Button.Variant.PRIMARY */,
            jslogContext: 'next',
        }}
    >
      ${i18nString(UIStrings.next)}
    </${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName}>`;
        // clang-format on
    }
    #renderBackButton() {
        // clang-format off
        return html `<${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName}
      @click=${this.#goToPrevPage}
      .data=${{
            variant: "outlined" /* Buttons.Button.Variant.OUTLINED */,
            jslogContext: 'back',
        }}
    >
      ${i18nString(UIStrings.back)}
    </${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName}>`;
        // clang-format on
    }
    #renderContinueButton(handler, disabled = false) {
        // clang-format off
        return html `<${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName}
      @click=${handler}
      class="continue-button"
      .data=${{
            variant: "primary" /* Buttons.Button.Variant.PRIMARY */,
            disabled,
            jslogContext: 'continue',
        }}
    >
      ${i18nString(UIStrings.continue)}
    </${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName}>`;
        // clang-format on
    }
    #renderSearchButton() {
        // clang-format off
        return html `<${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName}
      @click=${this.#onSearch}
      class="search-button"
      .data=${{
            variant: "outlined" /* Buttons.Button.Variant.OUTLINED */,
            jslogContext: 'search',
        }}
    >
      ${i18nString(UIStrings.search)}
    </${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName}>`;
        // clang-format on
    }
    #renderLearnMoreAboutInsights() {
        // clang-format off
        return html `<x-link href=${LEARNMORE_URL} class="link" jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__.link('learn-more').track({ click: true })}>
      ${i18nString(UIStrings.learnMore)}
    </x-link>`;
        // clang-format on
    }
    #onTermsChange() {
        this.#render();
    }
    #renderMain() {
        const jslog = `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__.section(this.#state.type).track({ resize: true })}`;
        const disallowLogging = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().getHostConfig()?.devToolsConsoleInsights.disallowLogging === true;
        // clang-format off
        switch (this.#state.type) {
            case "loading" /* State.LOADING */:
                return html `<main jslog=${jslog}>
            <div role="presentation" class="loader" style="clip-path: url('#clipPath');">
              <svg width="100%" height="64">
                <clipPath id="clipPath">
                  <rect x="0" y="0" width="100%" height="16" rx="8"></rect>
                  <rect x="0" y="24" width="100%" height="16" rx="8"></rect>
                  <rect x="0" y="48" width="100%" height="16" rx="8"></rect>
                </clipPath>
              </svg>
            </div>
          </main>`;
            case "insight" /* State.INSIGHT */:
                return html `
        <main jslog=${jslog}>
          ${this.#state.validMarkdown ? html `<${_ui_components_markdown_view_markdown_view_js__WEBPACK_IMPORTED_MODULE_8__.MarkdownView.MarkdownView.litTagName}
              .data=${{ tokens: this.#state.tokens, renderer: this.#renderer }}>
            </${_ui_components_markdown_view_markdown_view_js__WEBPACK_IMPORTED_MODULE_8__.MarkdownView.MarkdownView.litTagName}>` : this.#state.explanation}
          <details style="--list-height: ${(this.#state.sources.length + (this.#state.isPageReloadRecommended ? 1 : 0)) * 20}px;" jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__.expand('sources').track({ click: true })}>
            <summary>${i18nString(UIStrings.inputData)}</summary>
            <${ConsoleInsightSourcesList.litTagName} .sources=${this.#state.sources} .isPageReloadRecommended=${this.#state.isPageReloadRecommended}>
            </${ConsoleInsightSourcesList.litTagName}>
          </details>
          <div class="buttons">
            ${this.#renderSearchButton()}
          </div>
        </main>`;
            case "error" /* State.ERROR */:
                return html `
        <main jslog=${jslog}>
          <div class="error">${i18nString(UIStrings.errorBody)}</div>
        </main>`;
            case "consent-reminder" /* State.CONSENT_REMINDER */:
                return html `
          <main jslog=${jslog}>
            <p>The following data will be sent to Google to understand the context for the console message.
            ${disallowLogging ? '' : 'Human reviewers may process this information for quality purposes. Don’t submit sensitive information.'}
            Read Google’s <x-link href=${TERMS_OF_SERVICE_URL} class="link" jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__.link('terms-of-service').track({ click: true })}>Terms of Service</x-link>.</p>
            <${ConsoleInsightSourcesList.litTagName} .sources=${this.#state.sources} .isPageReloadRecommended=${this.#state.isPageReloadRecommended}>
            </${ConsoleInsightSourcesList.litTagName}>
          </main>
        `;
            case "consent-onboarding" /* State.CONSENT_ONBOARDING */:
                switch (this.#state.page) {
                    case "private" /* ConsentOnboardingPage.PAGE1 */:
                        return html `<main jslog=${jslog}>
              <p>This notice and our <x-link href=${PRIVACY_POLICY_URL} class="link" jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__.link('privacy-notice').track({ click: true })}>privacy notice</x-link> describe how Chrome DevTools handles your data. Please read them carefully.</p>

              <p>Chrome DevTools uses the console message, associated stack trace, related source code, and the associated network headers as input data. When you use "Understand this message", Google collects this input data, generated output, related feature usage information, and your feedback. Google uses this data to provide, improve, and develop Google products and services and machine learning technologies, including Google's enterprise products such as Google Cloud.</p>

              <p>To help with quality and improve our products, human reviewers may read, annotate, and process the above-mentioned input data, generated output, related feature usage information, and your feedback. <strong>Please do not include sensitive (e.g., confidential) or personal information that can be used to identify you or others in your prompts or feedback.</strong> Your data will be stored in a way where Google cannot tell who provided it and can no longer fulfill any deletion requests and will be retained for up to 18 months. We may refrain from collecting data to improve our product if your Google account is managed by an organization and depending on your region.</p>
            </main>`;
                    case "legal" /* ConsentOnboardingPage.PAGE2 */:
                        return html `<main jslog=${jslog}>
            <p>As you try "Understand this message", here are key things to know:

            <ul>
              <li>Chrome DevTools uses console message, associated stack trace, related source code, and the associated network headers to provide answers.</li>
              <li>Chrome DevTools uses experimental technology, and may generate inaccurate or offensive information that doesn't represent Google's views. Voting on the responses will help make this feature better.</li>
              <li>This feature is an experimental feature and subject to future changes.</li>
              <li><strong><x-link class="link" href=${CODE_SNIPPET_WARNING_URL} jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__.link('use-code-with-caution').track({ click: true })}>Use generated code snippets with caution</x-link>.</strong></li>
            </ul>
            </p>

            <p>
            <label>
              <input class="terms" @change=${this.#onTermsChange} type="checkbox" jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__.toggle('terms-of-service-accepted')}>
              <span>I accept my use of "Understand this message" is subject to the <x-link href=${TERMS_OF_SERVICE_URL} class="link" jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__.link('terms-of-service').track({ click: true })}>Google Terms of Service</x-link>.</span>
            </label>
            </p>
            </main>`;
                }
            case "not-logged-in" /* State.NOT_LOGGED_IN */:
                return html `
          <main jslog=${jslog}>
            <div class="error">${i18nString(UIStrings.notLoggedIn)}</div>
          </main>`;
            case "sync-is-off" /* State.SYNC_IS_OFF */:
                return html `
          <main jslog=${jslog}>
            <div class="error">${i18nString(UIStrings.syncIsOff)}</div>
          </main>`;
            case "offline" /* State.OFFLINE */:
                return html `
          <main jslog=${jslog}>
            <div class="error">${i18nString(UIStrings.offline)}</div>
          </main>`;
        }
        // clang-format on
    }
    #renderFooter() {
        const showThumbsUpDownButtons = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().getHostConfig()?.devToolsConsoleInsights.disallowLogging !== true;
        // clang-format off
        const disclaimer = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_10__.html `<span>
              This feature may display inaccurate or offensive information that doesn't represent Google's views.
              <x-link href=${LEARNMORE_URL} class="link" jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__.link('learn-more').track({ click: true })}>${i18nString(UIStrings.learnMore)}</x-link>
            </span>`;
        switch (this.#state.type) {
            case "loading" /* State.LOADING */:
                return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_10__.nothing;
            case "error" /* State.ERROR */:
            case "offline" /* State.OFFLINE */:
                return html `<footer jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__.section('footer')}>
          <div class="disclaimer">
            ${disclaimer}
          </div>
        </footer>`;
            case "not-logged-in" /* State.NOT_LOGGED_IN */:
            case "sync-is-off" /* State.SYNC_IS_OFF */:
                return html `<footer jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__.section('footer')}>
        <div class="filler"></div>
        <div>
          <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName}
            @click=${this.#onGoToSettings}
            .data=${{
                    variant: "primary" /* Buttons.Button.Variant.PRIMARY */,
                    jslogContext: 'update-settings',
                }}
          >
            ${UIStrings.updateSettings}
          </${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName}>
        </div>
      </footer>`;
            case "consent-reminder" /* State.CONSENT_REMINDER */:
                return html `<footer jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__.section('footer')}>
          <div class="disclaimer">
            ${disclaimer}
          </div>
          <div class="filler"></div>
          <div class="buttons">
            ${this.#renderCancelButton()}
            ${this.#renderContinueButton(this.#onConsentReminderConfirmed)}
          </div>
        </footer>`;
            case "consent-onboarding" /* State.CONSENT_ONBOARDING */:
                switch (this.#state.page) {
                    case "private" /* ConsentOnboardingPage.PAGE1 */:
                        return html `<footer jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__.section('footer')}>
                <div class="disclaimer">
                  ${this.#renderLearnMoreAboutInsights()}
                </div>
                <div class="filler"></div>
                <div class="buttons">
                    ${this.#renderCancelButton()}
                    ${this.#renderDisableFeatureButton()}
                    ${this.#renderNextButton()}
                  </div>
              </footer>`;
                    case "legal" /* ConsentOnboardingPage.PAGE2 */:
                        return html `<footer jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__.section('footer')}>
            <div class="disclaimer">
              ${this.#renderLearnMoreAboutInsights()}
            </div>
            <div class="filler"></div>
            <div class="buttons">
                ${this.#renderBackButton()}
                ${this.#renderDisableFeatureButton()}
                ${this.#renderContinueButton(this.#onConsentOnboardingConfirmed, !this.#termsChecked())}
              </div>
          </footer>`;
                }
            case "insight" /* State.INSIGHT */:
                return html `<footer jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__.section('footer')}>
        <div class="disclaimer">
          ${disclaimer}
        </div>
        <div class="filler"></div>
        <div class="rating">
          ${showThumbsUpDownButtons ? html `
            <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName}
              data-rating=${'true'}
              .data=${{
                    variant: "icon" /* Buttons.Button.Variant.ICON */,
                    size: "SMALL" /* Buttons.Button.Size.SMALL */,
                    iconName: 'thumb-up',
                    active: this.#selectedRating !== undefined && this.#selectedRating,
                    title: i18nString(UIStrings.thumbsUp),
                    jslogContext: 'thumbs-up',
                }}
              @click=${this.#onRating}
            ></${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName}>
            <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName}
              data-rating=${'false'}
              .data=${{
                    variant: "icon" /* Buttons.Button.Variant.ICON */,
                    size: "SMALL" /* Buttons.Button.Size.SMALL */,
                    iconName: 'thumb-down',
                    active: this.#selectedRating !== undefined && !this.#selectedRating,
                    title: i18nString(UIStrings.thumbsDown),
                    jslogContext: 'thumbs-down',
                }}
              @click=${this.#onRating}
            ></${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName}>
          ` : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_10__.nothing}
          <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName}
            .data=${{
                    variant: "icon" /* Buttons.Button.Variant.ICON */,
                    size: "SMALL" /* Buttons.Button.Size.SMALL */,
                    iconName: 'report',
                    title: i18nString(UIStrings.report),
                    jslogContext: 'report',
                }}
            @click=${this.#onReport}
          ></${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName}>
        </div>

      </footer>`;
        }
        // clang-format on
    }
    #getHeader() {
        switch (this.#state.type) {
            case "not-logged-in" /* State.NOT_LOGGED_IN */:
                return i18nString(UIStrings.signInToUse);
            case "sync-is-off" /* State.SYNC_IS_OFF */:
                return i18nString(UIStrings.notAvailable);
            case "offline" /* State.OFFLINE */:
                return i18nString(UIStrings.offlineHeader);
            case "loading" /* State.LOADING */:
                return i18nString(UIStrings.generating);
            case "insight" /* State.INSIGHT */:
                return i18nString(UIStrings.insight);
            case "error" /* State.ERROR */:
                return i18nString(UIStrings.error);
            case "consent-reminder" /* State.CONSENT_REMINDER */:
                return i18nString(UIStrings.inputData);
            case "consent-onboarding" /* State.CONSENT_ONBOARDING */:
                switch (this.#state.page) {
                    case "private" /* ConsentOnboardingPage.PAGE1 */:
                        return 'Privacy notice';
                    case "legal" /* ConsentOnboardingPage.PAGE2 */:
                        return 'Legal notice';
                }
        }
    }
    #render() {
        // clang-format off
        render(html `
      <div class="wrapper" jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__.pane('console-insights').track({ resize: true })}>
        <header>
          <div class="filler">
            <h2 tabindex="-1">
              ${this.#getHeader()}
            </h2>
          </div>
          <div>
            <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName}
              .data=${{
            variant: "icon" /* Buttons.Button.Variant.ICON */,
            size: "SMALL" /* Buttons.Button.Size.SMALL */,
            iconName: 'cross',
            title: i18nString(UIStrings.closeInsight),
        }}
              jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__.close().track({ click: true })}
              @click=${this.#onClose}
            ></${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName}>
          </div>
        </header>
        ${this.#renderMain()}
        ${this.#renderFooter()}
      </div>
    `, this.#shadow, {
            host: this,
        });
        // clang-format on
    }
}
class ConsoleInsightSourcesList extends HTMLElement {
    static litTagName = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_10__.literal `devtools-console-insight-sources-list`;
    #shadow = this.attachShadow({ mode: 'open' });
    #sources = [];
    #isPageReloadRecommended = false;
    constructor() {
        super();
        this.#shadow.adoptedStyleSheets = [_consoleInsightSourcesList_css_js__WEBPACK_IMPORTED_MODULE_14__["default"], _ui_components_input_input_js__WEBPACK_IMPORTED_MODULE_7__.checkboxStyles];
    }
    #render() {
        // clang-format off
        render(html `
      <ul>
        ${Directives.repeat(this.#sources, item => item.value, item => {
            return html `<li><x-link class="link" title="${localizeType(item.type)} ${i18nString(UIStrings.opensInNewTab)}" href="data:text/plain,${encodeURIComponent(item.value)}" jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__.link('source-' + item.type).track({ click: true })}>
            <${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_6__.Icon.Icon.litTagName} name="open-externally"></${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_6__.Icon.Icon.litTagName}>
            ${localizeType(item.type)}
          </x-link></li>`;
        })}
        ${this.#isPageReloadRecommended ? _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_10__.html `<li class="source-disclaimer">
          <${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_6__.Icon.Icon.litTagName} name="warning"></${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_6__.Icon.Icon.litTagName}>
          ${i18nString(UIStrings.reloadRecommendation)}</li>` : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_10__.nothing}
      </ul>
    `, this.#shadow, {
            host: this,
        });
        // clang-format on
    }
    set sources(values) {
        this.#sources = values;
        this.#render();
    }
    set isPageReloadRecommended(isPageReloadRecommended) {
        this.#isPageReloadRecommended = isPageReloadRecommended;
        this.#render();
    }
}
customElements.define('devtools-console-insight', ConsoleInsight);
customElements.define('devtools-console-insight-sources-list', ConsoleInsightSourcesList);
//# sourceMappingURL=ConsoleInsight.js.map

/***/ }),

/***/ "./panels/explain/components/consoleInsight.css.js":
/*!*********************************************************!*\
  !*** ./panels/explain/components/consoleInsight.css.js ***!
  \*********************************************************/
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
 * Copyright 2023 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

:host {
  --max-height: 2000px;
  --loading-max-height: 140px;

  font-family: var(--default-font-family);
  font-size: inherit;
  display: block;
  overflow: hidden;
  max-height: 0;
}

:host-context(.opening) {
  animation: expand-to-loading var(--sys-motion-duration-medium2) var(--sys-motion-easing-emphasized);
  animation-fill-mode: forwards;
}

:host-context(.loaded) {
  animation: expand-to-full var(--sys-motion-duration-medium2) var(--sys-motion-easing-emphasized);
  animation-fill-mode: forwards;
}

:host-context(.closing) {
  animation: collapse var(--sys-motion-duration-medium2) var(--sys-motion-easing-emphasized);
  animation-fill-mode: forwards;
}

@keyframes expand-to-loading {
  from {
    max-height: 0;
  }

  to {
    max-height: var(--loading-max-height);
  }
}

@keyframes expand-to-full {
  from {
    max-height: var(--actual-height, var(--loading-max-height));
  }

  to {
    max-height: var(--max-height);
  }
}

@keyframes collapse {
  from {
    max-height: var(--actual-height, var(--max-height));
  }

  to {
    max-height: 0;
    margin-top: 0;
    margin-bottom: 0;
  }
}

.wrapper {
  padding: 16px;
  background-color: var(--sys-color-cdt-base-container);
  border-radius: 16px;
  /* stylelint-disable-next-line property-no-unknown */
  container-type: inline-size;
}

.wrapper.top {
  border-radius: 16px 16px 4px 4px;
}

.wrapper.bottom {
  margin-top: 5px;
  border-radius: 4px 4px 16px 16px;
}

header {
  display: flex;
  flex-direction: row;
  gap: 6px;
  color: var(--sys-color-on-surface);
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  height: 14px;
}

header:focus-visible {
  outline: none;
}

header > .filler {
  flex: 1;
}

main {
  --override-markdown-view-message-color: var(--sys-color-on-surface);

  margin: 12px 0 0;
  color: var(--sys-color-on-surface);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;

  p {
    margin-block-start: 1em;
    margin-block-end: 1em;
  }

  ul {
    list-style-type: none;
    list-style-position: inside;
    padding-inline-start: 0.2em;

    li {
      display: list-item;
      list-style-type: disc;
      list-style-position: outside;
      margin-inline-start: 1em;
    }

    li::marker {
      font-size: 11px;
      line-height: 1;
    }
  }

  label {
    display: inline-flex;
    flex-direction: row;
    gap: 0.5em;

    input,
    span {
      vertical-align: middle;
    }

    input[type="checkbox"] {
      margin-top: 0.3em;
    }
  }
}

devtools-markdown-view {
  margin-bottom: 12px;
}

footer {
  display: flex;
  flex-direction: row;
  align-items: center;
  color: var(--sys-color-on-surface);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 14px;
  gap: 32px;
}

/* stylelint-disable-next-line at-rule-no-unknown */
@container (max-width: 600px) {
  footer {
    gap: 8px;
  }
}

footer > .filler {
  flex: 1;
}

footer .rating {
  display: flex;
  flex-direction: row;
  gap: 8px;
}

textarea {
  height: 84px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid var(--sys-color-neutral-outline);
  width: 100%;
  font-family: var(--default-font-family);
  font-size: inherit;
}

.buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

main .buttons {
  margin-top: 12px;
}

.disclaimer {
  display: flex;
  gap: 2px;
  color: var(--sys-color-on-surface-subtle);
  font-size: 11px;
  align-items: flex-start;
  flex-direction: column;
  max-width: 360px;
}

.link {
  color: var(--sys-color-primary);
  text-decoration-line: underline;

  devtools-icon {
    color: var(--sys-color-primary);
    width: 14px;
    height: 14px;
  }
}

.loader {
  background:
    linear-gradient(
      130deg,
      transparent 0%,
      var(--sys-color-gradient-tertiary) 20%,
      var(--sys-color-gradient-primary) 40%,
      transparent 60%,
      var(--sys-color-gradient-tertiary) 80%,
      var(--sys-color-gradient-primary) 100%
    );
  background-position: 0% 0%;
  background-size: 250% 250%;
  animation: gradient 5s infinite linear;
}

@keyframes gradient {
  0% { background-position: 0 0; }
  100% { background-position: 100% 100%; }
}

summary {
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
}

details {
  --collapsed-height: 20px;

  overflow: hidden;
  height: var(--collapsed-height);
}

details[open] {
  height: calc(var(--list-height) + var(--collapsed-height) + /* margin */ 8px);
  transition: height var(--sys-motion-duration-short4) var(--sys-motion-easing-emphasized);
}

h2 {
  display: block;
  font-size: inherit;
  margin: 0;
  font-weight: inherit;
}

h2:focus-visible {
  outline: none;
}

.info {
  width: 20px;
  height: 20px;
}

devtools-icon[name="spark"] {
  color: var(--sys-color-primary-bright);
}

devtools-icon[name="dog-paw"] {
  width: 16px;
  height: 16px;
}

/*# sourceURL=./components/consoleInsight.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./panels/explain/components/consoleInsightSourcesList.css.js":
/*!********************************************************************!*\
  !*** ./panels/explain/components/consoleInsightSourcesList.css.js ***!
  \********************************************************************/
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
 * Copyright 2023 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

:host {
  display: block;
}

ul {
  color: var(--sys-color-primary);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  margin-top: 8px;
}

li {
  list-style-type: none;
}

ul .link {
  color: var(--sys-color-primary);
  display: inline-flex !important; /* stylelint-disable-line declaration-no-important */
  align-items: center;
  gap: 4px;
  text-decoration-line: underline;
}

devtools-icon {
  height: 16px;
  width: 16px;
}

devtools-icon[name="open-externally"] {
  color: var(--icon-link);
}

.source-disclaimer {
  color: var(--sys-color-on-surface-subtle);
}

/*# sourceURL=./components/consoleInsightSourcesList.css */
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