"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_explain_components_ConsoleInsight_ts"],{

/***/ "./src/panels/explain/components/ConsoleInsight.ts":
/*!*********************************************************!*\
  !*** ./src/panels/explain/components/ConsoleInsight.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CloseEvent: () => (/* binding */ CloseEvent),
/* harmony export */   ConsoleInsight: () => (/* binding */ ConsoleInsight)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _third_party_marked_marked_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../third_party/marked/marked.js */ "./src/third_party/marked/marked.ts");
/* harmony import */ var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/components/buttons/buttons.js */ "./src/ui/components/buttons/buttons.ts");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _ui_components_input_input_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../ui/components/input/input.js */ "./src/ui/components/input/input.ts");
/* harmony import */ var _ui_components_markdown_view_markdown_view_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../ui/components/markdown_view/markdown_view.js */ "./src/ui/components/markdown_view/markdown_view.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _PromptBuilder_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../PromptBuilder.js */ "./src/panels/explain/PromptBuilder.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './consoleInsight.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './consoleInsightSourcesList.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2023 The Chromium Authors. All rights reserved.
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
var _ConsoleInsight_instances, _ConsoleInsight_shadow, _ConsoleInsight_promptBuilder, _ConsoleInsight_aidaClient, _ConsoleInsight_renderer, _ConsoleInsight_state, _ConsoleInsight_selectedRating, _ConsoleInsight_getOnboardingCompletedSetting, _ConsoleInsight_transitionTo, _ConsoleInsight_generateInsightIfNeeded, _ConsoleInsight_onClose, _ConsoleInsight_onRating, _ConsoleInsight_onReport, _ConsoleInsight_onSearch, _ConsoleInsight_onConsentReminderConfirmed, _ConsoleInsight_validateMarkdown, _ConsoleInsight_getInsight, _ConsoleInsight_onGoToSettings, _ConsoleInsight_onDisableFeature, _ConsoleInsight_goToNextPage, _ConsoleInsight_focusHeader, _ConsoleInsight_termsChecked, _ConsoleInsight_onConsentOnboardingConfirmed, _ConsoleInsight_goToPrevPage, _ConsoleInsight_renderCancelButton, _ConsoleInsight_renderDisableFeatureButton, _ConsoleInsight_renderNextButton, _ConsoleInsight_renderBackButton, _ConsoleInsight_renderContinueButton, _ConsoleInsight_renderSearchButton, _ConsoleInsight_renderLearnMoreAboutInsights, _ConsoleInsight_onTermsChange, _ConsoleInsight_renderMain, _ConsoleInsight_renderFooter, _ConsoleInsight_getHeader, _ConsoleInsight_render, _ConsoleInsightSourcesList_instances, _ConsoleInsightSourcesList_shadow, _ConsoleInsightSourcesList_sources, _ConsoleInsightSourcesList_isPageReloadRecommended, _ConsoleInsightSourcesList_render;















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
    constructor() {
        super(CloseEvent.eventName, { composed: true, bubbles: true });
    }
}
Object.defineProperty(CloseEvent, "eventName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'close'
});
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
var State;
(function (State) {
    State["INSIGHT"] = "insight";
    State["LOADING"] = "loading";
    State["ERROR"] = "error";
    State["CONSENT_ONBOARDING"] = "consent-onboarding";
    State["CONSENT_REMINDER"] = "consent-reminder";
    State["NOT_LOGGED_IN"] = "not-logged-in";
    State["SYNC_IS_OFF"] = "sync-is-off";
    State["OFFLINE"] = "offline";
})(State || (State = {}));
var ConsentOnboardingPage;
(function (ConsentOnboardingPage) {
    ConsentOnboardingPage["PAGE1"] = "private";
    ConsentOnboardingPage["PAGE2"] = "legal";
})(ConsentOnboardingPage || (ConsentOnboardingPage = {}));
class ConsoleInsight extends HTMLElement {
    static async create(promptBuilder, aidaClient) {
        const aidaAvailability = await _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaClient.getAidaClientAvailability();
        return new ConsoleInsight(promptBuilder, aidaClient, aidaAvailability);
    }
    constructor(promptBuilder, aidaClient, aidaAvailability) {
        super();
        _ConsoleInsight_instances.add(this);
        _ConsoleInsight_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _ConsoleInsight_promptBuilder.set(this, void 0);
        _ConsoleInsight_aidaClient.set(this, void 0);
        _ConsoleInsight_renderer.set(this, new _ui_components_markdown_view_markdown_view_js__WEBPACK_IMPORTED_MODULE_8__.MarkdownView.MarkdownInsightRenderer());
        // Main state.
        _ConsoleInsight_state.set(this, void 0);
        // Rating sub-form state.
        _ConsoleInsight_selectedRating.set(this, void 0);
        __classPrivateFieldSet(this, _ConsoleInsight_promptBuilder, promptBuilder, "f");
        __classPrivateFieldSet(this, _ConsoleInsight_aidaClient, aidaClient, "f");
        switch (aidaAvailability) {
            case _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaAvailability.AVAILABLE:
                __classPrivateFieldSet(this, _ConsoleInsight_state, {
                    type: State.LOADING,
                    consentReminderConfirmed: false,
                    consentOnboardingFinished: __classPrivateFieldGet(this, _ConsoleInsight_instances, "m", _ConsoleInsight_getOnboardingCompletedSetting).call(this).get(),
                }, "f");
                break;
            case _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaAvailability.NO_ACCOUNT_EMAIL:
                __classPrivateFieldSet(this, _ConsoleInsight_state, {
                    type: State.NOT_LOGGED_IN,
                }, "f");
                break;
            case _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaAvailability.NO_ACTIVE_SYNC:
                __classPrivateFieldSet(this, _ConsoleInsight_state, {
                    type: State.SYNC_IS_OFF,
                }, "f");
                break;
            case _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaAvailability.NO_INTERNET:
                __classPrivateFieldSet(this, _ConsoleInsight_state, {
                    type: State.OFFLINE,
                }, "f");
                break;
        }
        __classPrivateFieldGet(this, _ConsoleInsight_instances, "m", _ConsoleInsight_render).call(this);
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
    connectedCallback() {
        __classPrivateFieldGet(this, _ConsoleInsight_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './consoleInsight.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _ui_components_input_input_js__WEBPACK_IMPORTED_MODULE_7__.checkboxStyles];
        this.classList.add('opening');
        void __classPrivateFieldGet(this, _ConsoleInsight_instances, "m", _ConsoleInsight_generateInsightIfNeeded).call(this);
    }
}
_ConsoleInsight_shadow = new WeakMap(), _ConsoleInsight_promptBuilder = new WeakMap(), _ConsoleInsight_aidaClient = new WeakMap(), _ConsoleInsight_renderer = new WeakMap(), _ConsoleInsight_state = new WeakMap(), _ConsoleInsight_selectedRating = new WeakMap(), _ConsoleInsight_instances = new WeakSet(), _ConsoleInsight_getOnboardingCompletedSetting = function _ConsoleInsight_getOnboardingCompletedSetting() {
    return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createLocalSetting('console-insights-onboarding-finished', false);
}, _ConsoleInsight_transitionTo = function _ConsoleInsight_transitionTo(newState) {
    const previousState = __classPrivateFieldGet(this, _ConsoleInsight_state, "f");
    __classPrivateFieldSet(this, _ConsoleInsight_state, newState, "f");
    if (newState.type !== previousState.type && previousState.type === State.LOADING) {
        this.classList.add('loaded');
    }
    __classPrivateFieldGet(this, _ConsoleInsight_instances, "m", _ConsoleInsight_render).call(this);
    if (newState.type !== previousState.type) {
        __classPrivateFieldGet(this, _ConsoleInsight_instances, "m", _ConsoleInsight_focusHeader).call(this);
    }
}, _ConsoleInsight_generateInsightIfNeeded = async function _ConsoleInsight_generateInsightIfNeeded() {
    if (__classPrivateFieldGet(this, _ConsoleInsight_state, "f").type !== State.LOADING) {
        return;
    }
    if (!__classPrivateFieldGet(this, _ConsoleInsight_state, "f").consentOnboardingFinished) {
        __classPrivateFieldGet(this, _ConsoleInsight_instances, "m", _ConsoleInsight_transitionTo).call(this, {
            type: State.CONSENT_ONBOARDING,
            page: ConsentOnboardingPage.PAGE1,
        });
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.InsightsOnboardingShown);
        return;
    }
    if (!__classPrivateFieldGet(this, _ConsoleInsight_state, "f").consentReminderConfirmed) {
        const { sources, isPageReloadRecommended } = await __classPrivateFieldGet(this, _ConsoleInsight_promptBuilder, "f").buildPrompt();
        __classPrivateFieldGet(this, _ConsoleInsight_instances, "m", _ConsoleInsight_transitionTo).call(this, {
            type: State.CONSENT_REMINDER,
            sources,
            isPageReloadRecommended,
        });
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.InsightConsentReminderShown);
        return;
    }
}, _ConsoleInsight_onClose = function _ConsoleInsight_onClose() {
    if (__classPrivateFieldGet(this, _ConsoleInsight_state, "f").type === State.CONSENT_REMINDER) {
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.InsightConsentReminderCanceled);
    }
    else if (__classPrivateFieldGet(this, _ConsoleInsight_state, "f").type === State.CONSENT_ONBOARDING) {
        if (__classPrivateFieldGet(this, _ConsoleInsight_state, "f").page === ConsentOnboardingPage.PAGE1) {
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.InsightsOnboardingCanceledOnPage1);
        }
        else {
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.InsightsOnboardingCanceledOnPage2);
        }
    }
    this.dispatchEvent(new CloseEvent());
    this.classList.add('closing');
}, _ConsoleInsight_onRating = function _ConsoleInsight_onRating(event) {
    if (__classPrivateFieldGet(this, _ConsoleInsight_state, "f").type !== State.INSIGHT) {
        throw new Error('Unexpected state');
    }
    if (__classPrivateFieldGet(this, _ConsoleInsight_state, "f").metadata?.rpcGlobalId === undefined) {
        throw new Error('RPC Id not in metadata');
    }
    // If it was rated, do not record again.
    if (__classPrivateFieldGet(this, _ConsoleInsight_selectedRating, "f") !== undefined) {
        return;
    }
    __classPrivateFieldSet(this, _ConsoleInsight_selectedRating, event.target.dataset.rating === 'true', "f");
    __classPrivateFieldGet(this, _ConsoleInsight_instances, "m", _ConsoleInsight_render).call(this);
    if (__classPrivateFieldGet(this, _ConsoleInsight_selectedRating, "f")) {
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.InsightRatedPositive);
    }
    else {
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.InsightRatedNegative);
    }
    const disallowLogging = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().getHostConfig()?.devToolsConsoleInsights.disallowLogging === true;
    void __classPrivateFieldGet(this, _ConsoleInsight_aidaClient, "f").registerClientEvent({
        corresponding_aida_rpc_global_id: __classPrivateFieldGet(this, _ConsoleInsight_state, "f").metadata.rpcGlobalId,
        disable_user_content_logging: disallowLogging,
        do_conversation_client_event: {
            user_feedback: {
                sentiment: __classPrivateFieldGet(this, _ConsoleInsight_selectedRating, "f") ? _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.Rating.POSITIVE : _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.Rating.NEGATIVE,
            },
        },
    });
}, _ConsoleInsight_onReport = function _ConsoleInsight_onReport() {
    _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.openInNewTab(REPORT_URL);
}, _ConsoleInsight_onSearch = function _ConsoleInsight_onSearch() {
    const query = __classPrivateFieldGet(this, _ConsoleInsight_promptBuilder, "f").getSearchQuery();
    _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.openSearchResultsInNewTab(query);
}, _ConsoleInsight_onConsentReminderConfirmed = async function _ConsoleInsight_onConsentReminderConfirmed() {
    __classPrivateFieldGet(this, _ConsoleInsight_instances, "m", _ConsoleInsight_transitionTo).call(this, {
        type: State.LOADING,
        consentReminderConfirmed: true,
        consentOnboardingFinished: __classPrivateFieldGet(this, _ConsoleInsight_instances, "m", _ConsoleInsight_getOnboardingCompletedSetting).call(this).get(),
    });
    _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.InsightConsentReminderConfirmed);
    try {
        for await (const { sources, isPageReloadRecommended, explanation, metadata } of __classPrivateFieldGet(this, _ConsoleInsight_instances, "m", _ConsoleInsight_getInsight).call(this)) {
            const tokens = __classPrivateFieldGet(this, _ConsoleInsight_instances, "m", _ConsoleInsight_validateMarkdown).call(this, explanation);
            const valid = tokens !== false;
            __classPrivateFieldGet(this, _ConsoleInsight_instances, "m", _ConsoleInsight_transitionTo).call(this, {
                type: State.INSIGHT,
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
        __classPrivateFieldGet(this, _ConsoleInsight_instances, "m", _ConsoleInsight_transitionTo).call(this, {
            type: State.ERROR,
            error: err.message,
        });
    }
}, _ConsoleInsight_validateMarkdown = function _ConsoleInsight_validateMarkdown(text) {
    try {
        const tokens = _third_party_marked_marked_js__WEBPACK_IMPORTED_MODULE_4__.Marked.lexer(text);
        for (const token of tokens) {
            __classPrivateFieldGet(this, _ConsoleInsight_renderer, "f").renderToken(token);
        }
        return tokens;
    }
    catch {
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.InsightErroredMarkdown);
        return false;
    }
}, _ConsoleInsight_getInsight = async function* _ConsoleInsight_getInsight() {
    const { prompt, sources, isPageReloadRecommended } = await __classPrivateFieldGet(this, _ConsoleInsight_promptBuilder, "f").buildPrompt();
    try {
        for await (const response of __classPrivateFieldGet(this, _ConsoleInsight_aidaClient, "f").fetch(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaClient.buildConsoleInsightsRequest(prompt))) {
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
}, _ConsoleInsight_onGoToSettings = function _ConsoleInsight_onGoToSettings() {
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
}, _ConsoleInsight_onDisableFeature = function _ConsoleInsight_onDisableFeature() {
    try {
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.moduleSetting('console-insights-enabled').set(false);
    }
    finally {
        __classPrivateFieldGet(this, _ConsoleInsight_instances, "m", _ConsoleInsight_onClose).call(this);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.InspectorView.InspectorView.instance().displayReloadRequiredWarning('Reload for the change to apply.');
    }
    _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.InsightsOnboardingFeatureDisabled);
}, _ConsoleInsight_goToNextPage = function _ConsoleInsight_goToNextPage() {
    __classPrivateFieldGet(this, _ConsoleInsight_instances, "m", _ConsoleInsight_transitionTo).call(this, {
        type: State.CONSENT_ONBOARDING,
        page: ConsentOnboardingPage.PAGE2,
    });
    _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.InsightsOnboardingNextPage);
}, _ConsoleInsight_focusHeader = function _ConsoleInsight_focusHeader() {
    __classPrivateFieldGet(this, _ConsoleInsight_shadow, "f").querySelector('header h2')?.focus();
}, _ConsoleInsight_termsChecked = function _ConsoleInsight_termsChecked() {
    const checkbox = __classPrivateFieldGet(this, _ConsoleInsight_shadow, "f").querySelector('.terms');
    if (!checkbox?.checked) {
        return false;
    }
    return true;
}, _ConsoleInsight_onConsentOnboardingConfirmed = function _ConsoleInsight_onConsentOnboardingConfirmed() {
    if (!__classPrivateFieldGet(this, _ConsoleInsight_instances, "m", _ConsoleInsight_termsChecked).call(this)) {
        return;
    }
    __classPrivateFieldGet(this, _ConsoleInsight_instances, "m", _ConsoleInsight_getOnboardingCompletedSetting).call(this).set(true);
    __classPrivateFieldGet(this, _ConsoleInsight_instances, "m", _ConsoleInsight_transitionTo).call(this, {
        type: State.LOADING,
        consentReminderConfirmed: false,
        consentOnboardingFinished: __classPrivateFieldGet(this, _ConsoleInsight_instances, "m", _ConsoleInsight_getOnboardingCompletedSetting).call(this).get(),
    });
    _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.InsightsOnboardingConfirmed);
    void __classPrivateFieldGet(this, _ConsoleInsight_instances, "m", _ConsoleInsight_generateInsightIfNeeded).call(this);
}, _ConsoleInsight_goToPrevPage = function _ConsoleInsight_goToPrevPage() {
    __classPrivateFieldGet(this, _ConsoleInsight_instances, "m", _ConsoleInsight_transitionTo).call(this, {
        type: State.CONSENT_ONBOARDING,
        page: ConsentOnboardingPage.PAGE1,
    });
    _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.InsightsOnboardingPrevPage);
}, _ConsoleInsight_renderCancelButton = function _ConsoleInsight_renderCancelButton() {
    // clang-format off
    return html `<${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName}
      class="cancel-button"
      @click=${__classPrivateFieldGet(this, _ConsoleInsight_instances, "m", _ConsoleInsight_onClose)}
      .data=${{
        variant: _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Variant.OUTLINED,
        jslogContext: 'cancel',
    }}
    >
      ${i18nString(UIStrings.cancel)}
    </${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName}>`;
    // clang-format on
}, _ConsoleInsight_renderDisableFeatureButton = function _ConsoleInsight_renderDisableFeatureButton() {
    // clang-format off
    return html `<${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName}
      @click=${__classPrivateFieldGet(this, _ConsoleInsight_instances, "m", _ConsoleInsight_onDisableFeature)}
      class="disable-button"
      .data=${{
        variant: _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Variant.OUTLINED,
        jslogContext: 'disable',
    }}
    >
      ${i18nString(UIStrings.disableFeature)}
    </${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName}>`;
    // clang-format on
}, _ConsoleInsight_renderNextButton = function _ConsoleInsight_renderNextButton() {
    // clang-format off
    return html `<${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName}
      class="next-button"
      @click=${__classPrivateFieldGet(this, _ConsoleInsight_instances, "m", _ConsoleInsight_goToNextPage)}
      .data=${{
        variant: _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Variant.PRIMARY,
        jslogContext: 'next',
    }}
    >
      ${i18nString(UIStrings.next)}
    </${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName}>`;
    // clang-format on
}, _ConsoleInsight_renderBackButton = function _ConsoleInsight_renderBackButton() {
    // clang-format off
    return html `<${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName}
      @click=${__classPrivateFieldGet(this, _ConsoleInsight_instances, "m", _ConsoleInsight_goToPrevPage)}
      .data=${{
        variant: _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Variant.OUTLINED,
        jslogContext: 'back',
    }}
    >
      ${i18nString(UIStrings.back)}
    </${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName}>`;
    // clang-format on
}, _ConsoleInsight_renderContinueButton = function _ConsoleInsight_renderContinueButton(handler, disabled = false) {
    // clang-format off
    return html `<${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName}
      @click=${handler}
      class="continue-button"
      .data=${{
        variant: _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Variant.PRIMARY,
        disabled,
        jslogContext: 'continue',
    }}
    >
      ${i18nString(UIStrings.continue)}
    </${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName}>`;
    // clang-format on
}, _ConsoleInsight_renderSearchButton = function _ConsoleInsight_renderSearchButton() {
    // clang-format off
    return html `<${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName}
      @click=${__classPrivateFieldGet(this, _ConsoleInsight_instances, "m", _ConsoleInsight_onSearch)}
      class="search-button"
      .data=${{
        variant: _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Variant.OUTLINED,
        jslogContext: 'search',
    }}
    >
      ${i18nString(UIStrings.search)}
    </${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName}>`;
    // clang-format on
}, _ConsoleInsight_renderLearnMoreAboutInsights = function _ConsoleInsight_renderLearnMoreAboutInsights() {
    // clang-format off
    return html `<x-link href=${LEARNMORE_URL} class="link" jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__.link('learn-more').track({ click: true })}>
      ${i18nString(UIStrings.learnMore)}
    </x-link>`;
    // clang-format on
}, _ConsoleInsight_onTermsChange = function _ConsoleInsight_onTermsChange() {
    __classPrivateFieldGet(this, _ConsoleInsight_instances, "m", _ConsoleInsight_render).call(this);
}, _ConsoleInsight_renderMain = function _ConsoleInsight_renderMain() {
    const jslog = `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__.section(__classPrivateFieldGet(this, _ConsoleInsight_state, "f").type).track({ resize: true })}`;
    const disallowLogging = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().getHostConfig()?.devToolsConsoleInsights.disallowLogging === true;
    // clang-format off
    switch (__classPrivateFieldGet(this, _ConsoleInsight_state, "f").type) {
        case State.LOADING:
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
        case State.INSIGHT:
            return html `
        <main jslog=${jslog}>
          ${__classPrivateFieldGet(this, _ConsoleInsight_state, "f").validMarkdown ? html `<${_ui_components_markdown_view_markdown_view_js__WEBPACK_IMPORTED_MODULE_8__.MarkdownView.MarkdownView.litTagName}
              .data=${{ tokens: __classPrivateFieldGet(this, _ConsoleInsight_state, "f").tokens, renderer: __classPrivateFieldGet(this, _ConsoleInsight_renderer, "f") }}>
            </${_ui_components_markdown_view_markdown_view_js__WEBPACK_IMPORTED_MODULE_8__.MarkdownView.MarkdownView.litTagName}>` : __classPrivateFieldGet(this, _ConsoleInsight_state, "f").explanation}
          <details style="--list-height: ${(__classPrivateFieldGet(this, _ConsoleInsight_state, "f").sources.length + (__classPrivateFieldGet(this, _ConsoleInsight_state, "f").isPageReloadRecommended ? 1 : 0)) * 20}px;" jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__.expand('sources').track({ click: true })}>
            <summary>${i18nString(UIStrings.inputData)}</summary>
            <${ConsoleInsightSourcesList.litTagName} .sources=${__classPrivateFieldGet(this, _ConsoleInsight_state, "f").sources} .isPageReloadRecommended=${__classPrivateFieldGet(this, _ConsoleInsight_state, "f").isPageReloadRecommended}>
            </${ConsoleInsightSourcesList.litTagName}>
          </details>
          <div class="buttons">
            ${__classPrivateFieldGet(this, _ConsoleInsight_instances, "m", _ConsoleInsight_renderSearchButton).call(this)}
          </div>
        </main>`;
        case State.ERROR:
            return html `
        <main jslog=${jslog}>
          <div class="error">${i18nString(UIStrings.errorBody)}</div>
        </main>`;
        case State.CONSENT_REMINDER:
            return html `
          <main jslog=${jslog}>
            <p>The following data will be sent to Google to understand the context for the console message.
            ${disallowLogging ? '' : 'Human reviewers may process this information for quality purposes. Don’t submit sensitive information.'}
            Read Google’s <x-link href=${TERMS_OF_SERVICE_URL} class="link" jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__.link('terms-of-service').track({ click: true })}>Terms of Service</x-link>.</p>
            <${ConsoleInsightSourcesList.litTagName} .sources=${__classPrivateFieldGet(this, _ConsoleInsight_state, "f").sources} .isPageReloadRecommended=${__classPrivateFieldGet(this, _ConsoleInsight_state, "f").isPageReloadRecommended}>
            </${ConsoleInsightSourcesList.litTagName}>
          </main>
        `;
        case State.CONSENT_ONBOARDING:
            switch (__classPrivateFieldGet(this, _ConsoleInsight_state, "f").page) {
                case ConsentOnboardingPage.PAGE1:
                    return html `<main jslog=${jslog}>
              <p>This notice and our <x-link href=${PRIVACY_POLICY_URL} class="link" jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__.link('privacy-notice').track({ click: true })}>privacy notice</x-link> describe how Chrome DevTools handles your data. Please read them carefully.</p>

              <p>Chrome DevTools uses the console message, associated stack trace, related source code, and the associated network headers as input data. When you use "Understand this message", Google collects this input data, generated output, related feature usage information, and your feedback. Google uses this data to provide, improve, and develop Google products and services and machine learning technologies, including Google's enterprise products such as Google Cloud.</p>

              <p>To help with quality and improve our products, human reviewers may read, annotate, and process the above-mentioned input data, generated output, related feature usage information, and your feedback. <strong>Please do not include sensitive (e.g., confidential) or personal information that can be used to identify you or others in your prompts or feedback.</strong> Your data will be stored in a way where Google cannot tell who provided it and can no longer fulfill any deletion requests and will be retained for up to 18 months. We may refrain from collecting data to improve our product if your Google account is managed by an organization and depending on your region.</p>
            </main>`;
                case ConsentOnboardingPage.PAGE2:
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
              <input class="terms" @change=${__classPrivateFieldGet(this, _ConsoleInsight_instances, "m", _ConsoleInsight_onTermsChange)} type="checkbox" jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__.toggle('terms-of-service-accepted')}>
              <span>I accept my use of "Understand this message" is subject to the <x-link href=${TERMS_OF_SERVICE_URL} class="link" jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__.link('terms-of-service').track({ click: true })}>Google Terms of Service</x-link>.</span>
            </label>
            </p>
            </main>`;
            }
        case State.NOT_LOGGED_IN:
            return html `
          <main jslog=${jslog}>
            <div class="error">${i18nString(UIStrings.notLoggedIn)}</div>
          </main>`;
        case State.SYNC_IS_OFF:
            return html `
          <main jslog=${jslog}>
            <div class="error">${i18nString(UIStrings.syncIsOff)}</div>
          </main>`;
        case State.OFFLINE:
            return html `
          <main jslog=${jslog}>
            <div class="error">${i18nString(UIStrings.offline)}</div>
          </main>`;
    }
    // clang-format on
}, _ConsoleInsight_renderFooter = function _ConsoleInsight_renderFooter() {
    const showThumbsUpDownButtons = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().getHostConfig()?.devToolsConsoleInsights.disallowLogging !== true;
    // clang-format off
    const disclaimer = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_10__.html `<span>
              This feature may display inaccurate or offensive information that doesn't represent Google's views.
              <x-link href=${LEARNMORE_URL} class="link" jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__.link('learn-more').track({ click: true })}>${i18nString(UIStrings.learnMore)}</x-link>
            </span>`;
    switch (__classPrivateFieldGet(this, _ConsoleInsight_state, "f").type) {
        case State.LOADING:
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_10__.nothing;
        case State.ERROR:
        case State.OFFLINE:
            return html `<footer jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__.section('footer')}>
          <div class="disclaimer">
            ${disclaimer}
          </div>
        </footer>`;
        case State.NOT_LOGGED_IN:
        case State.SYNC_IS_OFF:
            return html `<footer jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__.section('footer')}>
        <div class="filler"></div>
        <div>
          <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName}
            @click=${__classPrivateFieldGet(this, _ConsoleInsight_instances, "m", _ConsoleInsight_onGoToSettings)}
            .data=${{
                variant: _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Variant.PRIMARY,
                jslogContext: 'update-settings',
            }}
          >
            ${UIStrings.updateSettings}
          </${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName}>
        </div>
      </footer>`;
        case State.CONSENT_REMINDER:
            return html `<footer jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__.section('footer')}>
          <div class="disclaimer">
            ${disclaimer}
          </div>
          <div class="filler"></div>
          <div class="buttons">
            ${__classPrivateFieldGet(this, _ConsoleInsight_instances, "m", _ConsoleInsight_renderCancelButton).call(this)}
            ${__classPrivateFieldGet(this, _ConsoleInsight_instances, "m", _ConsoleInsight_renderContinueButton).call(this, __classPrivateFieldGet(this, _ConsoleInsight_instances, "m", _ConsoleInsight_onConsentReminderConfirmed))}
          </div>
        </footer>`;
        case State.CONSENT_ONBOARDING:
            switch (__classPrivateFieldGet(this, _ConsoleInsight_state, "f").page) {
                case ConsentOnboardingPage.PAGE1:
                    return html `<footer jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__.section('footer')}>
                <div class="disclaimer">
                  ${__classPrivateFieldGet(this, _ConsoleInsight_instances, "m", _ConsoleInsight_renderLearnMoreAboutInsights).call(this)}
                </div>
                <div class="filler"></div>
                <div class="buttons">
                    ${__classPrivateFieldGet(this, _ConsoleInsight_instances, "m", _ConsoleInsight_renderCancelButton).call(this)}
                    ${__classPrivateFieldGet(this, _ConsoleInsight_instances, "m", _ConsoleInsight_renderDisableFeatureButton).call(this)}
                    ${__classPrivateFieldGet(this, _ConsoleInsight_instances, "m", _ConsoleInsight_renderNextButton).call(this)}
                  </div>
              </footer>`;
                case ConsentOnboardingPage.PAGE2:
                    return html `<footer jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__.section('footer')}>
            <div class="disclaimer">
              ${__classPrivateFieldGet(this, _ConsoleInsight_instances, "m", _ConsoleInsight_renderLearnMoreAboutInsights).call(this)}
            </div>
            <div class="filler"></div>
            <div class="buttons">
                ${__classPrivateFieldGet(this, _ConsoleInsight_instances, "m", _ConsoleInsight_renderBackButton).call(this)}
                ${__classPrivateFieldGet(this, _ConsoleInsight_instances, "m", _ConsoleInsight_renderDisableFeatureButton).call(this)}
                ${__classPrivateFieldGet(this, _ConsoleInsight_instances, "m", _ConsoleInsight_renderContinueButton).call(this, __classPrivateFieldGet(this, _ConsoleInsight_instances, "m", _ConsoleInsight_onConsentOnboardingConfirmed), !__classPrivateFieldGet(this, _ConsoleInsight_instances, "m", _ConsoleInsight_termsChecked).call(this))}
              </div>
          </footer>`;
            }
        case State.INSIGHT:
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
                variant: _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Variant.ICON,
                size: _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Size.SMALL,
                iconName: 'thumb-up',
                active: __classPrivateFieldGet(this, _ConsoleInsight_selectedRating, "f") !== undefined && __classPrivateFieldGet(this, _ConsoleInsight_selectedRating, "f"),
                title: i18nString(UIStrings.thumbsUp),
                jslogContext: 'thumbs-up',
            }}
              @click=${__classPrivateFieldGet(this, _ConsoleInsight_instances, "m", _ConsoleInsight_onRating)}
            ></${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName}>
            <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName}
              data-rating=${'false'}
              .data=${{
                variant: _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Variant.ICON,
                size: _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Size.SMALL,
                iconName: 'thumb-down',
                active: __classPrivateFieldGet(this, _ConsoleInsight_selectedRating, "f") !== undefined && !__classPrivateFieldGet(this, _ConsoleInsight_selectedRating, "f"),
                title: i18nString(UIStrings.thumbsDown),
                jslogContext: 'thumbs-down',
            }}
              @click=${__classPrivateFieldGet(this, _ConsoleInsight_instances, "m", _ConsoleInsight_onRating)}
            ></${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName}>
          ` : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_10__.nothing}
          <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName}
            .data=${{
                variant: _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Variant.ICON,
                size: _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Size.SMALL,
                iconName: 'report',
                title: i18nString(UIStrings.report),
                jslogContext: 'report',
            }}
            @click=${__classPrivateFieldGet(this, _ConsoleInsight_instances, "m", _ConsoleInsight_onReport)}
          ></${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName}>
        </div>

      </footer>`;
    }
    // clang-format on
}, _ConsoleInsight_getHeader = function _ConsoleInsight_getHeader() {
    switch (__classPrivateFieldGet(this, _ConsoleInsight_state, "f").type) {
        case State.NOT_LOGGED_IN:
            return i18nString(UIStrings.signInToUse);
        case State.SYNC_IS_OFF:
            return i18nString(UIStrings.notAvailable);
        case State.OFFLINE:
            return i18nString(UIStrings.offlineHeader);
        case State.LOADING:
            return i18nString(UIStrings.generating);
        case State.INSIGHT:
            return i18nString(UIStrings.insight);
        case State.ERROR:
            return i18nString(UIStrings.error);
        case State.CONSENT_REMINDER:
            return i18nString(UIStrings.inputData);
        case State.CONSENT_ONBOARDING:
            switch (__classPrivateFieldGet(this, _ConsoleInsight_state, "f").page) {
                case ConsentOnboardingPage.PAGE1:
                    return 'Privacy notice';
                case ConsentOnboardingPage.PAGE2:
                    return 'Legal notice';
            }
    }
}, _ConsoleInsight_render = function _ConsoleInsight_render() {
    // clang-format off
    render(html `
      <div class="wrapper" jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__.pane('console-insights').track({ resize: true })}>
        <header>
          <div class="filler">
            <h2 tabindex="-1">
              ${__classPrivateFieldGet(this, _ConsoleInsight_instances, "m", _ConsoleInsight_getHeader).call(this)}
            </h2>
          </div>
          <div>
            <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName}
              .data=${{
        variant: _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Variant.ICON,
        size: _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Size.SMALL,
        iconName: 'cross',
        title: i18nString(UIStrings.closeInsight),
    }}
              jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__.close().track({ click: true })}
              @click=${__classPrivateFieldGet(this, _ConsoleInsight_instances, "m", _ConsoleInsight_onClose)}
            ></${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName}>
          </div>
        </header>
        ${__classPrivateFieldGet(this, _ConsoleInsight_instances, "m", _ConsoleInsight_renderMain).call(this)}
        ${__classPrivateFieldGet(this, _ConsoleInsight_instances, "m", _ConsoleInsight_renderFooter).call(this)}
      </div>
    `, __classPrivateFieldGet(this, _ConsoleInsight_shadow, "f"), {
        host: this,
    });
    // clang-format on
};
Object.defineProperty(ConsoleInsight, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_10__.literal `devtools-console-insight`
});
class ConsoleInsightSourcesList extends HTMLElement {
    constructor() {
        super();
        _ConsoleInsightSourcesList_instances.add(this);
        _ConsoleInsightSourcesList_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _ConsoleInsightSourcesList_sources.set(this, []);
        _ConsoleInsightSourcesList_isPageReloadRecommended.set(this, false);
        __classPrivateFieldGet(this, _ConsoleInsightSourcesList_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './consoleInsightSourcesList.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _ui_components_input_input_js__WEBPACK_IMPORTED_MODULE_7__.checkboxStyles];
    }
    set sources(values) {
        __classPrivateFieldSet(this, _ConsoleInsightSourcesList_sources, values, "f");
        __classPrivateFieldGet(this, _ConsoleInsightSourcesList_instances, "m", _ConsoleInsightSourcesList_render).call(this);
    }
    set isPageReloadRecommended(isPageReloadRecommended) {
        __classPrivateFieldSet(this, _ConsoleInsightSourcesList_isPageReloadRecommended, isPageReloadRecommended, "f");
        __classPrivateFieldGet(this, _ConsoleInsightSourcesList_instances, "m", _ConsoleInsightSourcesList_render).call(this);
    }
}
_ConsoleInsightSourcesList_shadow = new WeakMap(), _ConsoleInsightSourcesList_sources = new WeakMap(), _ConsoleInsightSourcesList_isPageReloadRecommended = new WeakMap(), _ConsoleInsightSourcesList_instances = new WeakSet(), _ConsoleInsightSourcesList_render = function _ConsoleInsightSourcesList_render() {
    // clang-format off
    render(html `
      <ul>
        ${Directives.repeat(__classPrivateFieldGet(this, _ConsoleInsightSourcesList_sources, "f"), item => item.value, item => {
        return html `<li><x-link class="link" title="${localizeType(item.type)} ${i18nString(UIStrings.opensInNewTab)}" href="data:text/plain,${encodeURIComponent(item.value)}" jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__.link('source-' + item.type).track({ click: true })}>
            <${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_6__.Icon.Icon.litTagName} name="open-externally"></${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_6__.Icon.Icon.litTagName}>
            ${localizeType(item.type)}
          </x-link></li>`;
    })}
        ${__classPrivateFieldGet(this, _ConsoleInsightSourcesList_isPageReloadRecommended, "f") ? _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_10__.html `<li class="source-disclaimer">
          <${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_6__.Icon.Icon.litTagName} name="warning"></${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_6__.Icon.Icon.litTagName}>
          ${i18nString(UIStrings.reloadRecommendation)}</li>` : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_10__.nothing}
      </ul>
    `, __classPrivateFieldGet(this, _ConsoleInsightSourcesList_shadow, "f"), {
        host: this,
    });
    // clang-format on
};
Object.defineProperty(ConsoleInsightSourcesList, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_10__.literal `devtools-console-insight-sources-list`
});
customElements.define('devtools-console-insight', ConsoleInsight);
customElements.define('devtools-console-insight-sources-list', ConsoleInsightSourcesList);


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