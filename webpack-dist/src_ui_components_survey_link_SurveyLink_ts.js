"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_components_survey_link_SurveyLink_ts"],{

/***/ "./src/ui/components/survey_link/SurveyLink.ts":
/*!*****************************************************!*\
  !*** ./src/ui/components/survey_link/SurveyLink.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyLink: () => (/* binding */ SurveyLink)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './surveyLink.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
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
var _SurveyLink_instances, _SurveyLink_shadow, _SurveyLink_trigger, _SurveyLink_promptText, _SurveyLink_canShowSurvey, _SurveyLink_showSurvey, _SurveyLink_state, _SurveyLink_checkSurvey, _SurveyLink_sendSurvey, _SurveyLink_render;





const UIStrings = {
    /**
     *@description Text shown when the link to open a survey is clicked but the survey has not yet appeared
     */
    openingSurvey: 'Opening survey …',
    /**
     *@description Text displayed instead of the survey link after the survey link is clicked, if the survey was shown successfully
     */
    thankYouForYourFeedback: 'Thank you for your feedback',
    /**
     *@description Text displayed instead of the survey link after the survey link is clicked, if the survey was not shown successfully
     */
    anErrorOccurredWithTheSurvey: 'An error occurred with the survey',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('ui/components/survey_link/SurveyLink.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
var State;
(function (State) {
    State["Checking"] = "Checking";
    State["ShowLink"] = "ShowLink";
    State["Sending"] = "Sending";
    State["SurveyShown"] = "SurveyShown";
    State["Failed"] = "Failed";
    State["DontShowLink"] = "DontShowLink";
})(State || (State = {}));
// A link to a survey. The link is rendered aysnchronously because we need to first check if
// canShowSurvey succeeds.
class SurveyLink extends HTMLElement {
    constructor() {
        super(...arguments);
        _SurveyLink_instances.add(this);
        _SurveyLink_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _SurveyLink_trigger.set(this, '');
        _SurveyLink_promptText.set(this, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.UIString.LocalizedEmptyString);
        _SurveyLink_canShowSurvey.set(this, () => { });
        _SurveyLink_showSurvey.set(this, () => { });
        _SurveyLink_state.set(this, State.Checking);
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _SurveyLink_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './surveyLink.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
    }
    // Re-setting data will cause the state to go back to 'Checking' which hides the link.
    set data(data) {
        __classPrivateFieldSet(this, _SurveyLink_trigger, data.trigger, "f");
        __classPrivateFieldSet(this, _SurveyLink_promptText, data.promptText, "f");
        __classPrivateFieldSet(this, _SurveyLink_canShowSurvey, data.canShowSurvey, "f");
        __classPrivateFieldSet(this, _SurveyLink_showSurvey, data.showSurvey, "f");
        __classPrivateFieldGet(this, _SurveyLink_instances, "m", _SurveyLink_checkSurvey).call(this);
    }
}
_SurveyLink_shadow = new WeakMap(), _SurveyLink_trigger = new WeakMap(), _SurveyLink_promptText = new WeakMap(), _SurveyLink_canShowSurvey = new WeakMap(), _SurveyLink_showSurvey = new WeakMap(), _SurveyLink_state = new WeakMap(), _SurveyLink_instances = new WeakSet(), _SurveyLink_checkSurvey = function _SurveyLink_checkSurvey() {
    __classPrivateFieldSet(this, _SurveyLink_state, State.Checking, "f");
    __classPrivateFieldGet(this, _SurveyLink_canShowSurvey, "f").call(this, __classPrivateFieldGet(this, _SurveyLink_trigger, "f"), ({ canShowSurvey }) => {
        if (!canShowSurvey) {
            __classPrivateFieldSet(this, _SurveyLink_state, State.DontShowLink, "f");
        }
        else {
            __classPrivateFieldSet(this, _SurveyLink_state, State.ShowLink, "f");
        }
        __classPrivateFieldGet(this, _SurveyLink_instances, "m", _SurveyLink_render).call(this);
    });
}, _SurveyLink_sendSurvey = function _SurveyLink_sendSurvey() {
    __classPrivateFieldSet(this, _SurveyLink_state, State.Sending, "f");
    __classPrivateFieldGet(this, _SurveyLink_instances, "m", _SurveyLink_render).call(this);
    __classPrivateFieldGet(this, _SurveyLink_showSurvey, "f").call(this, __classPrivateFieldGet(this, _SurveyLink_trigger, "f"), ({ surveyShown }) => {
        if (!surveyShown) {
            __classPrivateFieldSet(this, _SurveyLink_state, State.Failed, "f");
        }
        else {
            __classPrivateFieldSet(this, _SurveyLink_state, State.SurveyShown, "f");
        }
        __classPrivateFieldGet(this, _SurveyLink_instances, "m", _SurveyLink_render).call(this);
    });
}, _SurveyLink_render = function _SurveyLink_render() {
    if (__classPrivateFieldGet(this, _SurveyLink_state, "f") === State.Checking || __classPrivateFieldGet(this, _SurveyLink_state, "f") === State.DontShowLink) {
        return;
    }
    let linkText = __classPrivateFieldGet(this, _SurveyLink_promptText, "f");
    if (__classPrivateFieldGet(this, _SurveyLink_state, "f") === State.Sending) {
        linkText = i18nString(UIStrings.openingSurvey);
    }
    else if (__classPrivateFieldGet(this, _SurveyLink_state, "f") === State.SurveyShown) {
        linkText = i18nString(UIStrings.thankYouForYourFeedback);
    }
    else if (__classPrivateFieldGet(this, _SurveyLink_state, "f") === State.Failed) {
        linkText = i18nString(UIStrings.anErrorOccurredWithTheSurvey);
    }
    let linkState = '';
    if (__classPrivateFieldGet(this, _SurveyLink_state, "f") === State.Sending) {
        linkState = 'pending-link';
    }
    else if (__classPrivateFieldGet(this, _SurveyLink_state, "f") === State.Failed || __classPrivateFieldGet(this, _SurveyLink_state, "f") === State.SurveyShown) {
        linkState = 'disabled-link';
    }
    const ariaDisabled = __classPrivateFieldGet(this, _SurveyLink_state, "f") !== State.ShowLink;
    // clang-format off
    // eslint-disable-next-line rulesdir/ban_style_tags_in_lit_html
    const output = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.html `
      <button class="link ${linkState}" tabindex=${ariaDisabled ? '-1' : '0'} .disabled=${ariaDisabled} aria-disabled=${ariaDisabled} @click=${__classPrivateFieldGet(this, _SurveyLink_instances, "m", _SurveyLink_sendSurvey)}>
        <${_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.Icon.litTagName} class="link-icon" .data=${{ iconName: 'review', color: 'var(--sys-color-primary)', width: 'var(--issue-link-icon-size, 16px)', height: 'var(--issue-link-icon-size, 16px)' }}></${_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.Icon.litTagName}><!--
      -->${linkText}
      </button>
    `;
    // clang-format on
    _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.render(output, __classPrivateFieldGet(this, _SurveyLink_shadow, "f"), { host: this });
};
Object.defineProperty(SurveyLink, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.literal `devtools-survey-link`
});
customElements.define('devtools-survey-link', SurveyLink);


/***/ })

}]);