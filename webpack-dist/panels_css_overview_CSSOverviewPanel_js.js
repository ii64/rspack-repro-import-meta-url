"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_css_overview_CSSOverviewPanel_js"],{

/***/ "./panels/css_overview/CSSOverviewPanel.js":
/*!*************************************************!*\
  !*** ./panels/css_overview/CSSOverviewPanel.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSOverviewPanel: () => (/* binding */ CSSOverviewPanel)
/* harmony export */ });
/* harmony import */ var _components_components_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/components.js */ "./panels/css_overview/components/components.js");
/* harmony import */ var _cssOverview_css_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cssOverview.css.js */ "./panels/css_overview/cssOverview.css.js");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _CSSOverviewCompletedView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CSSOverviewCompletedView.js */ "./panels/css_overview/CSSOverviewCompletedView.js");
/* harmony import */ var _CSSOverviewModel_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CSSOverviewModel.js */ "./panels/css_overview/CSSOverviewModel.js");
/* harmony import */ var _CSSOverviewProcessingView_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CSSOverviewProcessingView.js */ "./panels/css_overview/CSSOverviewProcessingView.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.








class CSSOverviewPanel extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Panel.Panel {
    #controller;
    #startView;
    #processingView;
    #completedView;
    #model;
    #backgroundColors;
    #textColors;
    #fillColors;
    #borderColors;
    #fontInfo;
    #mediaQueries;
    #unusedDeclarations;
    #elementCount;
    #globalStyleStats;
    #textColorContrastIssues;
    constructor(controller) {
        super('css-overview');
        this.element.classList.add('css-overview-panel');
        this.#controller = controller;
        this.#startView = new _components_components_js__WEBPACK_IMPORTED_MODULE_0__.CSSOverviewStartView.CSSOverviewStartView();
        this.#startView.addEventListener('overviewstartrequested', () => this.#controller.dispatchEventToListeners("RequestOverviewStart" /* Events.RequestOverviewStart */));
        this.#processingView = new _CSSOverviewProcessingView_js__WEBPACK_IMPORTED_MODULE_7__.CSSOverviewProcessingView(this.#controller);
        this.#completedView = new _CSSOverviewCompletedView_js__WEBPACK_IMPORTED_MODULE_5__.CSSOverviewCompletedView(this.#controller);
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().observeTargets(this);
        this.#controller.addEventListener("RequestOverviewStart" /* Events.RequestOverviewStart */, _event => {
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_2__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_2__.UserMetrics.Action.CaptureCssOverviewClicked);
            void this.#startOverview();
        }, this);
        this.#controller.addEventListener("OverviewCompleted" /* Events.OverviewCompleted */, this.#overviewCompleted, this);
        this.#controller.addEventListener("Reset" /* Events.Reset */, this.#reset, this);
        this.#controller.addEventListener("RequestNodeHighlight" /* Events.RequestNodeHighlight */, this.#requestNodeHighlight, this);
        this.#reset();
    }
    targetAdded(target) {
        if (target !== _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().primaryPageTarget()) {
            return;
        }
        this.#completedView.initializeModels(target);
        const model = target.model(_CSSOverviewModel_js__WEBPACK_IMPORTED_MODULE_6__.CSSOverviewModel);
        this.#model = model;
    }
    targetRemoved() {
    }
    #getModel() {
        if (!this.#model) {
            throw new Error('Did not retrieve model information yet.');
        }
        return this.#model;
    }
    #reset() {
        this.#backgroundColors = new Map();
        this.#textColors = new Map();
        this.#fillColors = new Map();
        this.#borderColors = new Map();
        this.#fontInfo = new Map();
        this.#mediaQueries = new Map();
        this.#unusedDeclarations = new Map();
        this.#elementCount = 0;
        this.#globalStyleStats = {
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
        };
        this.#textColorContrastIssues = new Map();
        this.#renderInitialView();
    }
    #requestNodeHighlight(evt) {
        this.#getModel().highlightNode(evt.data);
    }
    #renderInitialView() {
        this.#processingView.hideWidget();
        this.#completedView.hideWidget();
        this.contentElement.append(this.#startView);
        this.#startView.show();
    }
    #renderOverviewStartedView() {
        this.#startView.hide();
        this.#completedView.hideWidget();
        this.#processingView.show(this.contentElement);
    }
    #renderOverviewCompletedView() {
        this.#startView.hide();
        this.#processingView.hideWidget();
        this.#completedView.show(this.contentElement);
        this.#completedView.setOverviewData({
            backgroundColors: this.#backgroundColors,
            textColors: this.#textColors,
            textColorContrastIssues: this.#textColorContrastIssues,
            fillColors: this.#fillColors,
            borderColors: this.#borderColors,
            globalStyleStats: this.#globalStyleStats,
            fontInfo: this.#fontInfo,
            elementCount: this.#elementCount,
            mediaQueries: this.#mediaQueries,
            unusedDeclarations: this.#unusedDeclarations,
        });
    }
    async #startOverview() {
        this.#renderOverviewStartedView();
        const model = this.#getModel();
        const [globalStyleStats, { elementCount, backgroundColors, textColors, textColorContrastIssues, fillColors, borderColors, fontInfo, unusedDeclarations }, mediaQueries] = await Promise.all([
            model.getGlobalStylesheetStats(),
            model.getNodeStyleStats(),
            model.getMediaQueries(),
        ]);
        if (elementCount) {
            this.#elementCount = elementCount;
        }
        if (globalStyleStats) {
            this.#globalStyleStats = globalStyleStats;
        }
        if (mediaQueries) {
            this.#mediaQueries = mediaQueries;
        }
        if (backgroundColors) {
            this.#backgroundColors = backgroundColors;
        }
        if (textColors) {
            this.#textColors = textColors;
        }
        if (textColorContrastIssues) {
            this.#textColorContrastIssues = textColorContrastIssues;
        }
        if (fillColors) {
            this.#fillColors = fillColors;
        }
        if (borderColors) {
            this.#borderColors = borderColors;
        }
        if (fontInfo) {
            this.#fontInfo = fontInfo;
        }
        if (unusedDeclarations) {
            this.#unusedDeclarations = unusedDeclarations;
        }
        this.#controller.dispatchEventToListeners("OverviewCompleted" /* Events.OverviewCompleted */);
    }
    #overviewCompleted() {
        this.#renderOverviewCompletedView();
    }
    wasShown() {
        super.wasShown();
        this.registerCSSFiles([_cssOverview_css_js__WEBPACK_IMPORTED_MODULE_1__["default"]]);
    }
}
//# sourceMappingURL=CSSOverviewPanel.js.map

/***/ }),

/***/ "./panels/css_overview/CSSOverviewProcessingView.js":
/*!**********************************************************!*\
  !*** ./panels/css_overview/CSSOverviewProcessingView.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSOverviewProcessingView: () => (/* binding */ CSSOverviewProcessingView)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/components/buttons/buttons.js */ "./ui/components/buttons/buttons.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _cssOverviewProcessingView_css_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cssOverviewProcessingView.css.js */ "./panels/css_overview/cssOverviewProcessingView.css.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




const UIStrings = {
    /**
     *@description Text to cancel something
     */
    cancel: 'Cancel',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/css_overview/CSSOverviewProcessingView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
class CSSOverviewProcessingView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Widget.Widget {
    #controller;
    fragment;
    constructor(controller) {
        super();
        this.#controller = controller;
        this.#render();
    }
    #render() {
        const cancelButton = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.UIUtils.createTextButton(i18nString(UIStrings.cancel), () => this.#controller.dispatchEventToListeners("RequestOverviewCancel" /* Events.RequestOverviewCancel */), { jslogContext: 'css-overview.cancel-processing', variant: "outlined" /* Buttons.Button.Variant.OUTLINED */ });
        this.setDefaultFocusedElement(cancelButton);
        this.fragment = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Fragment.Fragment.build `
      <div class="vbox overview-processing-view">
        <h1>Processing page</h1>
        <div>${cancelButton}</div>
      </div>
    `;
        this.contentElement.appendChild(this.fragment.element());
        this.contentElement.style.overflow = 'auto';
    }
    wasShown() {
        super.wasShown();
        this.registerCSSFiles([_cssOverviewProcessingView_css_js__WEBPACK_IMPORTED_MODULE_3__["default"]]);
    }
}
//# sourceMappingURL=CSSOverviewProcessingView.js.map

/***/ }),

/***/ "./panels/css_overview/components/components.js":
/*!******************************************************!*\
  !*** ./panels/css_overview/components/components.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSOverviewStartView: () => (/* reexport module object */ _CSSOverviewStartView_js__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _CSSOverviewStartView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CSSOverviewStartView.js */ "./panels/css_overview/components/CSSOverviewStartView.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


//# sourceMappingURL=components.js.map

/***/ }),

/***/ "./panels/css_overview/cssOverview.css.js":
/*!************************************************!*\
  !*** ./panels/css_overview/cssOverview.css.js ***!
  \************************************************/
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
`/**
 * Copyright 2019 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.css-overview-panel {
  overflow: hidden;
}

devtools-css-overview-start-view {
  overflow: auto;
}

/*# sourceURL=cssOverview.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./panels/css_overview/cssOverviewProcessingView.css.js":
/*!**************************************************************!*\
  !*** ./panels/css_overview/cssOverviewProcessingView.css.js ***!
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
`/**
 * Copyright 2019 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.overview-processing-view {
  overflow: hidden;
  padding: 16px;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.overview-processing-view h1 {
  font-size: 16px;
  text-align: center;
  font-weight: normal;
  margin: 0;
  padding: 8px;
}

.overview-processing-view h2 {
  font-size: 12px;
  text-align: center;
  font-weight: normal;
  margin: 0;
  padding-top: 32px;
}

/*# sourceURL=cssOverviewProcessingView.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);