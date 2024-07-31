"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_css_overview_components_components_ts"],{

/***/ "./src/panels/css_overview/components/CSSOverviewStartView.ts":
/*!********************************************************************!*\
  !*** ./src/panels/css_overview/components/CSSOverviewStartView.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSOverviewStartView: () => (/* binding */ CSSOverviewStartView),
/* harmony export */   OverviewStartRequestedEvent: () => (/* binding */ OverviewStartRequestedEvent)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/components/buttons/buttons.js */ "./src/ui/components/buttons/buttons.ts");
/* harmony import */ var _ui_components_panel_feedback_panel_feedback_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/panel_feedback/panel_feedback.js */ "./src/ui/components/panel_feedback/panel_feedback.ts");
/* harmony import */ var _ui_components_panel_introduction_steps_panel_introduction_steps_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/components/panel_introduction_steps/panel_introduction_steps.js */ "./src/ui/components/panel_introduction_steps/panel_introduction_steps.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './cssOverviewStartView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _CSSOverviewStartView_instances, _CSSOverviewStartView_shadow, _CSSOverviewStartView_onStartCaptureClick, _CSSOverviewStartView_render;






const UIStrings = {
    /**
     *@description Label for the capture button in the CSS overview panel
     */
    captureOverview: 'Capture overview',
    /**
     *@description Header for the summary of CSS overview
     */
    identifyCSSImprovements: 'Identify potential CSS improvements',
    /**
     *@description First point of the summarized features of CSS overview
     */
    capturePageCSSOverview: 'Capture an overview of your page’s CSS',
    /**
     *@description Second point of the summarized features of CSS overview
     */
    identifyCSSImprovementsWithExampleIssues: 'Identify potential CSS improvements (e.g. low contrast issues, unused declarations, color or font mismatches)',
    /**
     *@description Third point of the summarized features of CSS overview
     */
    locateAffectedElements: 'Locate the affected elements in the Elements panel',
    /**
     *@description Title of the link to the quick start video and documentation to CSS overview panel
     */
    quickStartWithCSSOverview: 'Quick start: get started with the new CSS overview panel',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/css_overview/components/CSSOverviewStartView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
const { render, html } = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__;
const FEEDBACK_LINK = 'https://g.co/devtools/css-overview-feedback';
const DOC_LINK = 'https://developer.chrome.com/docs/devtools/css-overview';
class OverviewStartRequestedEvent extends Event {
    constructor() {
        super(OverviewStartRequestedEvent.eventName);
    }
}
Object.defineProperty(OverviewStartRequestedEvent, "eventName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'overviewstartrequested'
});
class CSSOverviewStartView extends HTMLElement {
    constructor() {
        super(...arguments);
        _CSSOverviewStartView_instances.add(this);
        _CSSOverviewStartView_shadow.set(this, this.attachShadow({ mode: 'open' }));
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _CSSOverviewStartView_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './cssOverviewStartView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
        __classPrivateFieldGet(this, _CSSOverviewStartView_instances, "m", _CSSOverviewStartView_render).call(this);
    }
    show() {
        this.classList.remove('hidden');
    }
    hide() {
        this.classList.add('hidden');
    }
}
_CSSOverviewStartView_shadow = new WeakMap(), _CSSOverviewStartView_instances = new WeakSet(), _CSSOverviewStartView_onStartCaptureClick = function _CSSOverviewStartView_onStartCaptureClick() {
    this.dispatchEvent(new OverviewStartRequestedEvent());
}, _CSSOverviewStartView_render = function _CSSOverviewStartView_render() {
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    render(html `
      <div class="css-overview-start-view">
        <${_ui_components_panel_introduction_steps_panel_introduction_steps_js__WEBPACK_IMPORTED_MODULE_3__.PanelIntroductionSteps.PanelIntroductionSteps.litTagName}>
          <span slot="title">${i18nString(UIStrings.identifyCSSImprovements)}</span>
          <span slot="step-1">${i18nString(UIStrings.capturePageCSSOverview)}</span>
          <span slot="step-2">${i18nString(UIStrings.identifyCSSImprovementsWithExampleIssues)}</span>
          <span slot="step-3">${i18nString(UIStrings.locateAffectedElements)}</span>
        </${_ui_components_panel_introduction_steps_panel_introduction_steps_js__WEBPACK_IMPORTED_MODULE_3__.PanelIntroductionSteps.PanelIntroductionSteps.litTagName}>
        <div class="start-capture-wrapper">
          <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button.litTagName}
            class="start-capture"
            .variant=${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Variant.PRIMARY}
            .jslogContext=${'css-overview.capture-overview'}
            @click=${__classPrivateFieldGet(this, _CSSOverviewStartView_instances, "m", _CSSOverviewStartView_onStartCaptureClick)}>
            ${i18nString(UIStrings.captureOverview)}
          </${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button.litTagName}>
        </div>
        <${_ui_components_panel_feedback_panel_feedback_js__WEBPACK_IMPORTED_MODULE_2__.PanelFeedback.PanelFeedback.litTagName} .data=${{
        feedbackUrl: FEEDBACK_LINK,
        quickStartUrl: DOC_LINK,
        quickStartLinkText: i18nString(UIStrings.quickStartWithCSSOverview),
    }}>
        </${_ui_components_panel_feedback_panel_feedback_js__WEBPACK_IMPORTED_MODULE_2__.PanelFeedback.PanelFeedback.litTagName}>
        <${_ui_components_panel_feedback_panel_feedback_js__WEBPACK_IMPORTED_MODULE_2__.FeedbackButton.FeedbackButton.litTagName} .data=${{
        feedbackUrl: FEEDBACK_LINK,
    }}>
        </${_ui_components_panel_feedback_panel_feedback_js__WEBPACK_IMPORTED_MODULE_2__.FeedbackButton.FeedbackButton.litTagName}>
      </div>
    `, __classPrivateFieldGet(this, _CSSOverviewStartView_shadow, "f"), {
        host: this,
    });
    // clang-format on
    const startButton = __classPrivateFieldGet(this, _CSSOverviewStartView_shadow, "f").querySelector('.start-capture');
    if (startButton) {
        startButton.focus();
    }
};
Object.defineProperty(CSSOverviewStartView, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.literal `devtools-css-overview-start-view`
});
customElements.define('devtools-css-overview-start-view', CSSOverviewStartView);


/***/ }),

/***/ "./src/panels/css_overview/components/components.ts":
/*!**********************************************************!*\
  !*** ./src/panels/css_overview/components/components.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSOverviewStartView: () => (/* reexport module object */ _CSSOverviewStartView_js__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _CSSOverviewStartView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CSSOverviewStartView.js */ "./src/panels/css_overview/components/CSSOverviewStartView.ts");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




/***/ }),

/***/ "./src/ui/components/panel_introduction_steps/PanelIntroductionSteps.ts":
/*!******************************************************************************!*\
  !*** ./src/ui/components/panel_introduction_steps/PanelIntroductionSteps.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PanelIntroductionSteps: () => (/* binding */ PanelIntroductionSteps)
/* harmony export */ });
/* harmony import */ var _components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/helpers/helpers.js */ "./src/ui/components/helpers/helpers.ts");
/* harmony import */ var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './panelIntroductionSteps.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _PanelIntroductionSteps_instances, _PanelIntroductionSteps_shadow, _PanelIntroductionSteps_boundRender, _PanelIntroductionSteps_render;



class PanelIntroductionSteps extends HTMLElement {
    constructor() {
        super(...arguments);
        _PanelIntroductionSteps_instances.add(this);
        _PanelIntroductionSteps_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _PanelIntroductionSteps_boundRender.set(this, __classPrivateFieldGet(this, _PanelIntroductionSteps_instances, "m", _PanelIntroductionSteps_render).bind(this));
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _PanelIntroductionSteps_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './panelIntroductionSteps.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
        void _components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ScheduledRender.scheduleRender(this, __classPrivateFieldGet(this, _PanelIntroductionSteps_boundRender, "f"));
    }
}
_PanelIntroductionSteps_shadow = new WeakMap(), _PanelIntroductionSteps_boundRender = new WeakMap(), _PanelIntroductionSteps_instances = new WeakSet(), _PanelIntroductionSteps_render = function _PanelIntroductionSteps_render() {
    if (!_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ScheduledRender.isScheduledRender(this)) {
        throw new Error('FeedbackButton render was not scheduled');
    }
    // clang-format off
    _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.html `
      <h1><slot name="title">slot: title</slot></h1>

      <ol class="intro-steps">
        <li><slot name="step-1">slot: step-1</slot></li>
        <li><slot name="step-2">slot: step-2</slot></li>
        <li><slot name="step-3">slot: step-3</slot></li>
      </ol>
    `, __classPrivateFieldGet(this, _PanelIntroductionSteps_shadow, "f"), { host: this });
    // clang-format on
};
Object.defineProperty(PanelIntroductionSteps, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.literal `devtools-panel-introduction-steps`
});
customElements.define('devtools-panel-introduction-steps', PanelIntroductionSteps);


/***/ }),

/***/ "./src/ui/components/panel_introduction_steps/panel_introduction_steps.ts":
/*!********************************************************************************!*\
  !*** ./src/ui/components/panel_introduction_steps/panel_introduction_steps.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PanelIntroductionSteps: () => (/* reexport module object */ _PanelIntroductionSteps_js__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _PanelIntroductionSteps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PanelIntroductionSteps.js */ "./src/ui/components/panel_introduction_steps/PanelIntroductionSteps.ts");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



/***/ })

}]);