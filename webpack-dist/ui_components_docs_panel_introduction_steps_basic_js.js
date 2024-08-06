"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_components_docs_panel_introduction_steps_basic_js"],{

/***/ "./ui/components/docs/panel_introduction_steps/basic.js":
/*!**************************************************************!*\
  !*** ./ui/components/docs/panel_introduction_steps/basic.js ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _components_panel_introduction_steps_panel_introduction_steps_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/panel_introduction_steps/panel_introduction_steps.js */ "./ui/components/panel_introduction_steps/panel_introduction_steps.js");
/* harmony import */ var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/helpers.js */ "./ui/components/helpers/helpers.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




await _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_3__.ComponentServerSetup.setup();
await _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.initializeGlobalVars();
const container = document.getElementById('container');
if (container) {
    _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.html `
<${_components_panel_introduction_steps_panel_introduction_steps_js__WEBPACK_IMPORTED_MODULE_1__.PanelIntroductionSteps.PanelIntroductionSteps.litTagName}>
<span slot="title">Get actionable insights on your website's performance</span>
<span slot="step-1">Record or import a trace into the Performance Insights panel</span>
<span slot="step-2">Get an overview of your page’s runtime performance</span>
<span slot="step-3">Identify improvements to your performance via a list of actionable insights</span>
</${_components_panel_introduction_steps_panel_introduction_steps_js__WEBPACK_IMPORTED_MODULE_1__.PanelIntroductionSteps.PanelIntroductionSteps.litTagName}>
                 `, container, { host: undefined });
}
//# sourceMappingURL=basic.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ "./ui/components/panel_introduction_steps/PanelIntroductionSteps.js":
/*!**************************************************************************!*\
  !*** ./ui/components/panel_introduction_steps/PanelIntroductionSteps.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PanelIntroductionSteps: () => (/* binding */ PanelIntroductionSteps)
/* harmony export */ });
/* harmony import */ var _components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/helpers/helpers.js */ "./ui/components/helpers/helpers.js");
/* harmony import */ var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _panelIntroductionSteps_css_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./panelIntroductionSteps.css.js */ "./ui/components/panel_introduction_steps/panelIntroductionSteps.css.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



class PanelIntroductionSteps extends HTMLElement {
    static litTagName = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.literal `devtools-panel-introduction-steps`;
    #shadow = this.attachShadow({ mode: 'open' });
    #boundRender = this.#render.bind(this);
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_panelIntroductionSteps_css_js__WEBPACK_IMPORTED_MODULE_2__["default"]];
        void _components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ScheduledRender.scheduleRender(this, this.#boundRender);
    }
    #render() {
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
    `, this.#shadow, { host: this });
        // clang-format on
    }
}
customElements.define('devtools-panel-introduction-steps', PanelIntroductionSteps);
//# sourceMappingURL=PanelIntroductionSteps.js.map

/***/ }),

/***/ "./ui/components/panel_introduction_steps/panelIntroductionSteps.css.js":
/*!******************************************************************************!*\
  !*** ./ui/components/panel_introduction_steps/panelIntroductionSteps.css.js ***!
  \******************************************************************************/
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
 * Copyright 2022 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  display: block;
}

h1 {
  font-weight: normal;
  font-size: 18px;
  line-height: 28px;
  padding: 0;
  margin-top: 0;
  color: var(--sys-color-on-surface);
}

.intro-steps {
  counter-reset: custom-counter;
  list-style: none;
  margin: 16px 0 30px 30px;
  padding: 0;
}

.intro-steps li {
  color: var(--sys-color-on-surface);
  counter-increment: custom-counter;
  font-size: 13px;
  letter-spacing: 0.03em;
  line-height: 1.54;
  margin-bottom: 9px;
  position: relative;
}

.intro-steps li::before {
  --override-color-counter-background: var(--sys-color-tonal-container);

  box-sizing: border-box;
  background: var(--override-color-counter-background);
  border-radius: 50%;
  color: var(--sys-color-primary);
  content: counter(custom-counter);
  font-size: 12px;
  height: 18px;
  left: -30px;
  line-height: 20px;
  position: absolute;
  text-align: center;
  top: 0;
  width: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/*# sourceURL=panelIntroductionSteps.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./ui/components/panel_introduction_steps/panel_introduction_steps.js":
/*!****************************************************************************!*\
  !*** ./ui/components/panel_introduction_steps/panel_introduction_steps.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PanelIntroductionSteps: () => (/* reexport module object */ _PanelIntroductionSteps_js__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _PanelIntroductionSteps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PanelIntroductionSteps.js */ "./ui/components/panel_introduction_steps/PanelIntroductionSteps.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

//# sourceMappingURL=panel_introduction_steps.js.map

/***/ })

}]);