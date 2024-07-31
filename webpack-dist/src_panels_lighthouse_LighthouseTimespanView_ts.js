"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_lighthouse_LighthouseTimespanView_ts"],{

/***/ "./src/panels/lighthouse/LighthouseTimespanView.ts":
/*!*********************************************************!*\
  !*** ./src/panels/lighthouse/LighthouseTimespanView.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimespanView: () => (/* binding */ TimespanView)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/components/buttons/buttons.js */ "./src/ui/components/buttons/buttons.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './lighthouseDialog.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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
    constructor(panel) {
        super();
        Object.defineProperty(this, "panel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "statusHeader", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "endButton", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
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
        const dialogRoot = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.UIUtils.createShadowRootWithCoreStyles(this.contentElement, { cssFile: [Object(function webpackMissingModule() { var e = new Error("Cannot find module './lighthouseDialog.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())], delegatesFocus: undefined });
        this.endButton = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.UIUtils.createTextButton(i18nString(UIStrings.endTimespan), this.endTimespan.bind(this), { variant: _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Variant.PRIMARY, jslogContext: 'lighthouse.end-time-span' });
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
        this.setSizeBehavior(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.GlassPane.SizeBehavior.SetExactWidthMaxHeight);
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


/***/ })

}]);