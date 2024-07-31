"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_css_overview_CSSOverviewPanel_ts"],{

/***/ "./src/panels/css_overview/CSSOverviewPanel.ts":
/*!*****************************************************!*\
  !*** ./src/panels/css_overview/CSSOverviewPanel.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSOverviewPanel: () => (/* binding */ CSSOverviewPanel)
/* harmony export */ });
/* harmony import */ var _components_components_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/components.js */ "./src/panels/css_overview/components/components.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './cssOverview.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _CSSOverviewCompletedView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CSSOverviewCompletedView.js */ "./src/panels/css_overview/CSSOverviewCompletedView.ts");
/* harmony import */ var _CSSOverviewController_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CSSOverviewController.js */ "./src/panels/css_overview/CSSOverviewController.ts");
/* harmony import */ var _CSSOverviewModel_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CSSOverviewModel.js */ "./src/panels/css_overview/CSSOverviewModel.ts");
/* harmony import */ var _CSSOverviewProcessingView_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CSSOverviewProcessingView.js */ "./src/panels/css_overview/CSSOverviewProcessingView.ts");
// Copyright 2019 The Chromium Authors. All rights reserved.
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
var _CSSOverviewPanel_instances, _CSSOverviewPanel_controller, _CSSOverviewPanel_startView, _CSSOverviewPanel_processingView, _CSSOverviewPanel_completedView, _CSSOverviewPanel_model, _CSSOverviewPanel_backgroundColors, _CSSOverviewPanel_textColors, _CSSOverviewPanel_fillColors, _CSSOverviewPanel_borderColors, _CSSOverviewPanel_fontInfo, _CSSOverviewPanel_mediaQueries, _CSSOverviewPanel_unusedDeclarations, _CSSOverviewPanel_elementCount, _CSSOverviewPanel_globalStyleStats, _CSSOverviewPanel_textColorContrastIssues, _CSSOverviewPanel_getModel, _CSSOverviewPanel_reset, _CSSOverviewPanel_requestNodeHighlight, _CSSOverviewPanel_renderInitialView, _CSSOverviewPanel_renderOverviewStartedView, _CSSOverviewPanel_renderOverviewCompletedView, _CSSOverviewPanel_startOverview, _CSSOverviewPanel_overviewCompleted;









class CSSOverviewPanel extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Panel.Panel {
    constructor(controller) {
        super('css-overview');
        _CSSOverviewPanel_instances.add(this);
        _CSSOverviewPanel_controller.set(this, void 0);
        _CSSOverviewPanel_startView.set(this, void 0);
        _CSSOverviewPanel_processingView.set(this, void 0);
        _CSSOverviewPanel_completedView.set(this, void 0);
        _CSSOverviewPanel_model.set(this, void 0);
        _CSSOverviewPanel_backgroundColors.set(this, void 0);
        _CSSOverviewPanel_textColors.set(this, void 0);
        _CSSOverviewPanel_fillColors.set(this, void 0);
        _CSSOverviewPanel_borderColors.set(this, void 0);
        _CSSOverviewPanel_fontInfo.set(this, void 0);
        _CSSOverviewPanel_mediaQueries.set(this, void 0);
        _CSSOverviewPanel_unusedDeclarations.set(this, void 0);
        _CSSOverviewPanel_elementCount.set(this, void 0);
        _CSSOverviewPanel_globalStyleStats.set(this, void 0);
        _CSSOverviewPanel_textColorContrastIssues.set(this, void 0);
        this.element.classList.add('css-overview-panel');
        __classPrivateFieldSet(this, _CSSOverviewPanel_controller, controller, "f");
        __classPrivateFieldSet(this, _CSSOverviewPanel_startView, new _components_components_js__WEBPACK_IMPORTED_MODULE_0__.CSSOverviewStartView.CSSOverviewStartView(), "f");
        __classPrivateFieldGet(this, _CSSOverviewPanel_startView, "f").addEventListener('overviewstartrequested', () => __classPrivateFieldGet(this, _CSSOverviewPanel_controller, "f").dispatchEventToListeners(_CSSOverviewController_js__WEBPACK_IMPORTED_MODULE_6__.Events.RequestOverviewStart));
        __classPrivateFieldSet(this, _CSSOverviewPanel_processingView, new _CSSOverviewProcessingView_js__WEBPACK_IMPORTED_MODULE_8__.CSSOverviewProcessingView(__classPrivateFieldGet(this, _CSSOverviewPanel_controller, "f")), "f");
        __classPrivateFieldSet(this, _CSSOverviewPanel_completedView, new _CSSOverviewCompletedView_js__WEBPACK_IMPORTED_MODULE_5__.CSSOverviewCompletedView(__classPrivateFieldGet(this, _CSSOverviewPanel_controller, "f")), "f");
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().observeTargets(this);
        __classPrivateFieldGet(this, _CSSOverviewPanel_controller, "f").addEventListener(_CSSOverviewController_js__WEBPACK_IMPORTED_MODULE_6__.Events.RequestOverviewStart, _event => {
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_2__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_2__.UserMetrics.Action.CaptureCssOverviewClicked);
            void __classPrivateFieldGet(this, _CSSOverviewPanel_instances, "m", _CSSOverviewPanel_startOverview).call(this);
        }, this);
        __classPrivateFieldGet(this, _CSSOverviewPanel_controller, "f").addEventListener(_CSSOverviewController_js__WEBPACK_IMPORTED_MODULE_6__.Events.OverviewCompleted, __classPrivateFieldGet(this, _CSSOverviewPanel_instances, "m", _CSSOverviewPanel_overviewCompleted), this);
        __classPrivateFieldGet(this, _CSSOverviewPanel_controller, "f").addEventListener(_CSSOverviewController_js__WEBPACK_IMPORTED_MODULE_6__.Events.Reset, __classPrivateFieldGet(this, _CSSOverviewPanel_instances, "m", _CSSOverviewPanel_reset), this);
        __classPrivateFieldGet(this, _CSSOverviewPanel_controller, "f").addEventListener(_CSSOverviewController_js__WEBPACK_IMPORTED_MODULE_6__.Events.RequestNodeHighlight, __classPrivateFieldGet(this, _CSSOverviewPanel_instances, "m", _CSSOverviewPanel_requestNodeHighlight), this);
        __classPrivateFieldGet(this, _CSSOverviewPanel_instances, "m", _CSSOverviewPanel_reset).call(this);
    }
    targetAdded(target) {
        if (target !== _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().primaryPageTarget()) {
            return;
        }
        __classPrivateFieldGet(this, _CSSOverviewPanel_completedView, "f").initializeModels(target);
        const model = target.model(_CSSOverviewModel_js__WEBPACK_IMPORTED_MODULE_7__.CSSOverviewModel);
        __classPrivateFieldSet(this, _CSSOverviewPanel_model, model, "f");
    }
    targetRemoved() {
    }
    wasShown() {
        super.wasShown();
        this.registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './cssOverview.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
    }
}
_CSSOverviewPanel_controller = new WeakMap(), _CSSOverviewPanel_startView = new WeakMap(), _CSSOverviewPanel_processingView = new WeakMap(), _CSSOverviewPanel_completedView = new WeakMap(), _CSSOverviewPanel_model = new WeakMap(), _CSSOverviewPanel_backgroundColors = new WeakMap(), _CSSOverviewPanel_textColors = new WeakMap(), _CSSOverviewPanel_fillColors = new WeakMap(), _CSSOverviewPanel_borderColors = new WeakMap(), _CSSOverviewPanel_fontInfo = new WeakMap(), _CSSOverviewPanel_mediaQueries = new WeakMap(), _CSSOverviewPanel_unusedDeclarations = new WeakMap(), _CSSOverviewPanel_elementCount = new WeakMap(), _CSSOverviewPanel_globalStyleStats = new WeakMap(), _CSSOverviewPanel_textColorContrastIssues = new WeakMap(), _CSSOverviewPanel_instances = new WeakSet(), _CSSOverviewPanel_getModel = function _CSSOverviewPanel_getModel() {
    if (!__classPrivateFieldGet(this, _CSSOverviewPanel_model, "f")) {
        throw new Error('Did not retrieve model information yet.');
    }
    return __classPrivateFieldGet(this, _CSSOverviewPanel_model, "f");
}, _CSSOverviewPanel_reset = function _CSSOverviewPanel_reset() {
    __classPrivateFieldSet(this, _CSSOverviewPanel_backgroundColors, new Map(), "f");
    __classPrivateFieldSet(this, _CSSOverviewPanel_textColors, new Map(), "f");
    __classPrivateFieldSet(this, _CSSOverviewPanel_fillColors, new Map(), "f");
    __classPrivateFieldSet(this, _CSSOverviewPanel_borderColors, new Map(), "f");
    __classPrivateFieldSet(this, _CSSOverviewPanel_fontInfo, new Map(), "f");
    __classPrivateFieldSet(this, _CSSOverviewPanel_mediaQueries, new Map(), "f");
    __classPrivateFieldSet(this, _CSSOverviewPanel_unusedDeclarations, new Map(), "f");
    __classPrivateFieldSet(this, _CSSOverviewPanel_elementCount, 0, "f");
    __classPrivateFieldSet(this, _CSSOverviewPanel_globalStyleStats, {
        styleRules: 0,
        inlineStyles: 0,
        externalSheets: 0,
        stats: {
            // Simple.
            type: 0,
            class: 0,
            id: 0,
            universal: 0,
            attribute: 0,
            // Non-simple.
            nonSimple: 0,
        },
    }, "f");
    __classPrivateFieldSet(this, _CSSOverviewPanel_textColorContrastIssues, new Map(), "f");
    __classPrivateFieldGet(this, _CSSOverviewPanel_instances, "m", _CSSOverviewPanel_renderInitialView).call(this);
}, _CSSOverviewPanel_requestNodeHighlight = function _CSSOverviewPanel_requestNodeHighlight(evt) {
    __classPrivateFieldGet(this, _CSSOverviewPanel_instances, "m", _CSSOverviewPanel_getModel).call(this).highlightNode(evt.data);
}, _CSSOverviewPanel_renderInitialView = function _CSSOverviewPanel_renderInitialView() {
    __classPrivateFieldGet(this, _CSSOverviewPanel_processingView, "f").hideWidget();
    __classPrivateFieldGet(this, _CSSOverviewPanel_completedView, "f").hideWidget();
    this.contentElement.append(__classPrivateFieldGet(this, _CSSOverviewPanel_startView, "f"));
    __classPrivateFieldGet(this, _CSSOverviewPanel_startView, "f").show();
}, _CSSOverviewPanel_renderOverviewStartedView = function _CSSOverviewPanel_renderOverviewStartedView() {
    __classPrivateFieldGet(this, _CSSOverviewPanel_startView, "f").hide();
    __classPrivateFieldGet(this, _CSSOverviewPanel_completedView, "f").hideWidget();
    __classPrivateFieldGet(this, _CSSOverviewPanel_processingView, "f").show(this.contentElement);
}, _CSSOverviewPanel_renderOverviewCompletedView = function _CSSOverviewPanel_renderOverviewCompletedView() {
    __classPrivateFieldGet(this, _CSSOverviewPanel_startView, "f").hide();
    __classPrivateFieldGet(this, _CSSOverviewPanel_processingView, "f").hideWidget();
    __classPrivateFieldGet(this, _CSSOverviewPanel_completedView, "f").show(this.contentElement);
    __classPrivateFieldGet(this, _CSSOverviewPanel_completedView, "f").setOverviewData({
        backgroundColors: __classPrivateFieldGet(this, _CSSOverviewPanel_backgroundColors, "f"),
        textColors: __classPrivateFieldGet(this, _CSSOverviewPanel_textColors, "f"),
        textColorContrastIssues: __classPrivateFieldGet(this, _CSSOverviewPanel_textColorContrastIssues, "f"),
        fillColors: __classPrivateFieldGet(this, _CSSOverviewPanel_fillColors, "f"),
        borderColors: __classPrivateFieldGet(this, _CSSOverviewPanel_borderColors, "f"),
        globalStyleStats: __classPrivateFieldGet(this, _CSSOverviewPanel_globalStyleStats, "f"),
        fontInfo: __classPrivateFieldGet(this, _CSSOverviewPanel_fontInfo, "f"),
        elementCount: __classPrivateFieldGet(this, _CSSOverviewPanel_elementCount, "f"),
        mediaQueries: __classPrivateFieldGet(this, _CSSOverviewPanel_mediaQueries, "f"),
        unusedDeclarations: __classPrivateFieldGet(this, _CSSOverviewPanel_unusedDeclarations, "f"),
    });
}, _CSSOverviewPanel_startOverview = async function _CSSOverviewPanel_startOverview() {
    __classPrivateFieldGet(this, _CSSOverviewPanel_instances, "m", _CSSOverviewPanel_renderOverviewStartedView).call(this);
    const model = __classPrivateFieldGet(this, _CSSOverviewPanel_instances, "m", _CSSOverviewPanel_getModel).call(this);
    const [globalStyleStats, { elementCount, backgroundColors, textColors, textColorContrastIssues, fillColors, borderColors, fontInfo, unusedDeclarations }, mediaQueries] = await Promise.all([
        model.getGlobalStylesheetStats(),
        model.getNodeStyleStats(),
        model.getMediaQueries(),
    ]);
    if (elementCount) {
        __classPrivateFieldSet(this, _CSSOverviewPanel_elementCount, elementCount, "f");
    }
    if (globalStyleStats) {
        __classPrivateFieldSet(this, _CSSOverviewPanel_globalStyleStats, globalStyleStats, "f");
    }
    if (mediaQueries) {
        __classPrivateFieldSet(this, _CSSOverviewPanel_mediaQueries, mediaQueries, "f");
    }
    if (backgroundColors) {
        __classPrivateFieldSet(this, _CSSOverviewPanel_backgroundColors, backgroundColors, "f");
    }
    if (textColors) {
        __classPrivateFieldSet(this, _CSSOverviewPanel_textColors, textColors, "f");
    }
    if (textColorContrastIssues) {
        __classPrivateFieldSet(this, _CSSOverviewPanel_textColorContrastIssues, textColorContrastIssues, "f");
    }
    if (fillColors) {
        __classPrivateFieldSet(this, _CSSOverviewPanel_fillColors, fillColors, "f");
    }
    if (borderColors) {
        __classPrivateFieldSet(this, _CSSOverviewPanel_borderColors, borderColors, "f");
    }
    if (fontInfo) {
        __classPrivateFieldSet(this, _CSSOverviewPanel_fontInfo, fontInfo, "f");
    }
    if (unusedDeclarations) {
        __classPrivateFieldSet(this, _CSSOverviewPanel_unusedDeclarations, unusedDeclarations, "f");
    }
    __classPrivateFieldGet(this, _CSSOverviewPanel_controller, "f").dispatchEventToListeners(_CSSOverviewController_js__WEBPACK_IMPORTED_MODULE_6__.Events.OverviewCompleted);
}, _CSSOverviewPanel_overviewCompleted = function _CSSOverviewPanel_overviewCompleted() {
    __classPrivateFieldGet(this, _CSSOverviewPanel_instances, "m", _CSSOverviewPanel_renderOverviewCompletedView).call(this);
};


/***/ }),

/***/ "./src/panels/css_overview/CSSOverviewProcessingView.ts":
/*!**************************************************************!*\
  !*** ./src/panels/css_overview/CSSOverviewProcessingView.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSOverviewProcessingView: () => (/* binding */ CSSOverviewProcessingView)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/components/buttons/buttons.js */ "./src/ui/components/buttons/buttons.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _CSSOverviewController_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CSSOverviewController.js */ "./src/panels/css_overview/CSSOverviewController.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './cssOverviewProcessingView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2019 The Chromium Authors. All rights reserved.
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
var _CSSOverviewProcessingView_instances, _CSSOverviewProcessingView_controller, _CSSOverviewProcessingView_render;





const UIStrings = {
    /**
     *@description Text to cancel something
     */
    cancel: 'Cancel',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/css_overview/CSSOverviewProcessingView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
class CSSOverviewProcessingView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Widget.Widget {
    constructor(controller) {
        super();
        _CSSOverviewProcessingView_instances.add(this);
        _CSSOverviewProcessingView_controller.set(this, void 0);
        Object.defineProperty(this, "fragment", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        __classPrivateFieldSet(this, _CSSOverviewProcessingView_controller, controller, "f");
        __classPrivateFieldGet(this, _CSSOverviewProcessingView_instances, "m", _CSSOverviewProcessingView_render).call(this);
    }
    wasShown() {
        super.wasShown();
        this.registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './cssOverviewProcessingView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
    }
}
_CSSOverviewProcessingView_controller = new WeakMap(), _CSSOverviewProcessingView_instances = new WeakSet(), _CSSOverviewProcessingView_render = function _CSSOverviewProcessingView_render() {
    const cancelButton = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.UIUtils.createTextButton(i18nString(UIStrings.cancel), () => __classPrivateFieldGet(this, _CSSOverviewProcessingView_controller, "f").dispatchEventToListeners(_CSSOverviewController_js__WEBPACK_IMPORTED_MODULE_3__.Events.RequestOverviewCancel), { jslogContext: 'css-overview.cancel-processing', variant: _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Variant.OUTLINED });
    this.setDefaultFocusedElement(cancelButton);
    this.fragment = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Fragment.Fragment.build `
      <div class="vbox overview-processing-view">
        <h1>Processing page</h1>
        <div>${cancelButton}</div>
      </div>
    `;
    this.contentElement.appendChild(this.fragment.element());
    this.contentElement.style.overflow = 'auto';
};


/***/ }),

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