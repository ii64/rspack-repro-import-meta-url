"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_lighthouse_LighthouseTimespanView_js"],{

/***/ "./panels/lighthouse/LighthouseTimespanView.js":
/*!*****************************************************!*\
  !*** ./panels/lighthouse/LighthouseTimespanView.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimespanView: () => (/* binding */ TimespanView)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/components/buttons/buttons.js */ "./ui/components/buttons/buttons.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _lighthouseDialog_css_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lighthouseDialog.css.js */ "./panels/lighthouse/lighthouseDialog.css.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




const UIStrings = {
    /**
     * @description Header indicating that a Lighthouse timespan is starting. "Timespan" is a Lighthouse mode that analyzes user interactions over a period of time.
     */
    timespanStarting: 'Timespan starting…',
    /**
     * @description Header indicating that a Lighthouse timespan has started. "Timespan" is a Lighthouse mode that analyzes user interactions over a period of time. "interact with the page" is a call to action for the user to interact with the web page.
     */
    timespanStarted: 'Timespan started, interact with the page',
    /**
     * @description Label for a button that ends a Lighthouse timespan. "timespan" is a Lighthouse mode that analyzes user interactions over a period of time.
     */
    endTimespan: 'End timespan',
    /**
     * @description Label for a button that cancels a Lighthouse timespan.
     */
    cancel: 'Cancel',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/lighthouse/LighthouseTimespanView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
class TimespanView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Dialog.Dialog {
    panel;
    statusHeader;
    endButton;
    constructor(panel) {
        super();
        this.panel = panel;
        this.statusHeader = null;
        this.endButton = null;
        this.setDimmed(true);
        this.setCloseOnEscape(false);
        this.setOutsideClickCallback(event => event.consume(true));
        this.render();
    }
    show(dialogRenderElement) {
        this.reset();
        super.show(dialogRenderElement);
    }
    reset() {
        if (this.statusHeader && this.endButton) {
            this.statusHeader.textContent = i18nString(UIStrings.timespanStarting);
            this.endButton.disabled = true;
        }
    }
    ready() {
        if (this.statusHeader && this.endButton) {
            this.statusHeader.textContent = i18nString(UIStrings.timespanStarted);
            this.endButton.disabled = false;
            this.endButton.focus();
        }
    }
    render() {
        const dialogRoot = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.UIUtils.createShadowRootWithCoreStyles(this.contentElement, { cssFile: [_lighthouseDialog_css_js__WEBPACK_IMPORTED_MODULE_3__["default"]], delegatesFocus: undefined });
        this.endButton = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.UIUtils.createTextButton(i18nString(UIStrings.endTimespan), this.endTimespan.bind(this), { variant: "primary" /* Buttons.Button.Variant.PRIMARY */, jslogContext: 'lighthouse.end-time-span' });
        const cancelButton = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.UIUtils.createTextButton(i18nString(UIStrings.cancel), this.cancel.bind(this), {
            jslogContext: 'lighthouse.cancel',
        });
        const fragment = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Fragment.Fragment.build `
  <div class="lighthouse-view vbox">
  <h2 $="status-header"></h2>
  <div class="lighthouse-action-buttons hbox">
  ${cancelButton}
  ${this.endButton}
  </div>
  </div>
  `;
        this.statusHeader = fragment.$('status-header');
        dialogRoot.appendChild(fragment.element());
        this.setSizeBehavior("SetExactWidthMaxHeight" /* UI.GlassPane.SizeBehavior.SetExactWidthMaxHeight */);
        this.setMaxContentSize(new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Geometry.Size(500, 400));
        this.reset();
    }
    async endTimespan() {
        await this.panel.handleTimespanEnd();
    }
    async cancel() {
        await this.panel.handleRunCancel();
    }
}
//# sourceMappingURL=LighthouseTimespanView.js.map

/***/ }),

/***/ "./panels/lighthouse/lighthouseDialog.css.js":
/*!***************************************************!*\
  !*** ./panels/lighthouse/lighthouseDialog.css.js ***!
  \***************************************************/
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
 * Copyright 2017 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.lighthouse-view {
  --view-horizontal-margin: 20px;

  margin: 7px var(--view-horizontal-margin);
  flex: auto;
  align-items: center;
  width: 100%;
  max-width: 500px;
}

.lighthouse-view h2 {
  color: var(--sys-color-on-surface);
  font-weight: bold;
  font-size: 14px;
  flex: none;
  width: 100%;
  text-align: left;
}

.lighthouse-view button {
  z-index: 10;
  margin-left: auto;
  margin-right: 0;
}

.lighthouse-status {
  width: 100%;
  flex: auto;
  align-items: center;
  color: var(--sys-color-on-surface);
}

.lighthouse-status-text {
  text-align: center;
  min-height: 50px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 100%;
}

.lighthouse-status-text code {
  user-select: text;
  text-align: left;
  white-space: pre-wrap;
  overflow: auto;
}

.lighthouse-progress-wrapper {
  width: calc(100% + 2 * var(--view-horizontal-margin));
  height: 2px;
  background-color: var(--sys-color-neutral-outline);
  position: relative;
  margin: 10px;
}

.lighthouse-progress-bar {
  width: 0%;
  height: 100%;
  background: var(--sys-color-primary-bright);
  position: absolute;
  transform-origin: left;
  animation-fill-mode: forwards;
  animation-timing-function: ease-out;

  --progress-bar-loading-duration: 45s;
  --progress-bar-gathering-duration: 12s;
  --progress-bar-gathering-percent: 70%;
  --progress-bar-auditing-duration: 5s;
  --progress-bar-auditing-percent: 95%;
}

.lighthouse-progress-bar.errored {
  width: 100%;
  background: #e50303; /* stylelint-disable-line plugin/use_theme_colors */
  /* See: crbug.com/1152736 for color variable migration. */
}

.lighthouse-progress-bar.loading {
  animation-duration: var(--progress-bar-loading-duration);
  animation-name: progressBarLoading;
}

@keyframes progressBarLoading {
  0% { width: 0%; }
  100% { width: var(--progress-bar-gathering-percent); }
}

.lighthouse-progress-bar.gathering {
  animation-duration: var(--progress-bar-gathering-duration);
  animation-name: progressBarGathering;
}

@keyframes progressBarGathering {
  0% { width: var(--progress-bar-gathering-percent); }
  100% { width: var(--progress-bar-auditing-percent); }
}

.lighthouse-progress-bar.auditing {
  animation-duration: var(--progress-bar-auditing-duration);
  animation-name: progressBarAuditing;
}

@keyframes progressBarAuditing {
  0% { width: var(--progress-bar-auditing-percent); }
  100% { width: 99%; }
}

.lighthouse-report-error {
  display: block;
  margin-top: 5px;
}

.lighthouse-action-buttons {
  align-self: end;
  column-gap: var(--sys-size-6);
}

/*# sourceURL=lighthouseDialog.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);