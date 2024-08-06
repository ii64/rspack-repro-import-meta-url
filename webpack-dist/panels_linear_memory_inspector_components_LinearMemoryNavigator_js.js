"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_linear_memory_inspector_components_LinearMemoryNavigator_js"],{

/***/ "./panels/linear_memory_inspector/components/LinearMemoryNavigator.js":
/*!****************************************************************************!*\
  !*** ./panels/linear_memory_inspector/components/LinearMemoryNavigator.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddressInputChangedEvent: () => (/* binding */ AddressInputChangedEvent),
/* harmony export */   HistoryNavigationEvent: () => (/* binding */ HistoryNavigationEvent),
/* harmony export */   LinearMemoryNavigator: () => (/* binding */ LinearMemoryNavigator),
/* harmony export */   PageNavigationEvent: () => (/* binding */ PageNavigationEvent),
/* harmony export */   RefreshRequestedEvent: () => (/* binding */ RefreshRequestedEvent)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _linearMemoryNavigator_css_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./linearMemoryNavigator.css.js */ "./panels/linear_memory_inspector/components/linearMemoryNavigator.css.js");
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





const UIStrings = {
    /**
     *@description Tooltip text that appears when hovering over a valid memory address (e.g. 0x0) in the address line in the Linear memory inspector.
     */
    enterAddress: 'Enter address',
    /**
     *@description Tooltip text that appears when hovering over the button to go back in history in the Linear Memory Navigator
     */
    goBackInAddressHistory: 'Go back in address history',
    /**
     *@description Tooltip text that appears when hovering over the button to go forward in history in the Linear Memory Navigator
     */
    goForwardInAddressHistory: 'Go forward in address history',
    /**
     *@description Tooltip text that appears when hovering over the page back icon in the Linear Memory Navigator
     */
    previousPage: 'Previous page',
    /**
     *@description Tooltip text that appears when hovering over the next page icon in the Linear Memory Navigator
     */
    nextPage: 'Next page',
    /**
     *@description Text to refresh the page
     */
    refresh: 'Refresh',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/linear_memory_inspector/components/LinearMemoryNavigator.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
const { render, html } = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__;
class AddressInputChangedEvent extends Event {
    static eventName = 'addressinputchanged';
    data;
    constructor(address, mode) {
        super(AddressInputChangedEvent.eventName);
        this.data = { address, mode };
    }
}
class PageNavigationEvent extends Event {
    static eventName = 'pagenavigation';
    data;
    constructor(navigation) {
        super(PageNavigationEvent.eventName, {});
        this.data = navigation;
    }
}
class HistoryNavigationEvent extends Event {
    static eventName = 'historynavigation';
    data;
    constructor(navigation) {
        super(HistoryNavigationEvent.eventName, {});
        this.data = navigation;
    }
}
class RefreshRequestedEvent extends Event {
    static eventName = 'refreshrequested';
    constructor() {
        super(RefreshRequestedEvent.eventName, {});
    }
}
class LinearMemoryNavigator extends HTMLElement {
    static litTagName = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.literal `devtools-linear-memory-inspector-navigator`;
    #shadow = this.attachShadow({ mode: 'open' });
    #address = '0';
    #error = undefined;
    #valid = true;
    #canGoBackInHistory = false;
    #canGoForwardInHistory = false;
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_linearMemoryNavigator_css_js__WEBPACK_IMPORTED_MODULE_4__["default"]];
    }
    set data(data) {
        this.#address = data.address;
        this.#error = data.error;
        this.#valid = data.valid;
        this.#canGoBackInHistory = data.canGoBackInHistory;
        this.#canGoForwardInHistory = data.canGoForwardInHistory;
        this.#render();
        const addressInput = this.#shadow.querySelector('.address-input');
        if (addressInput) {
            if (data.mode === "Submitted" /* Mode.Submitted */) {
                addressInput.blur();
            }
            else if (data.mode === "InvalidSubmit" /* Mode.InvalidSubmit */) {
                addressInput.select();
            }
        }
    }
    #render() {
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        const result = html `
      <div class="navigator">
        <div class="navigator-item">
          ${this.#createButton({ icon: 'undo', title: i18nString(UIStrings.goBackInAddressHistory),
            event: new HistoryNavigationEvent("Backward" /* Navigation.Backward */), enabled: this.#canGoBackInHistory,
            jslogContext: 'linear-memory-inspector.history-back' })}
          ${this.#createButton({ icon: 'redo', title: i18nString(UIStrings.goForwardInAddressHistory),
            event: new HistoryNavigationEvent("Forward" /* Navigation.Forward */), enabled: this.#canGoForwardInHistory,
            jslogContext: 'linear-memory-inspector.history-forward' })}
        </div>
        <div class="navigator-item">
          ${this.#createButton({ icon: 'chevron-left', title: i18nString(UIStrings.previousPage),
            event: new PageNavigationEvent("Backward" /* Navigation.Backward */), enabled: true,
            jslogContext: 'linear-memory-inspector.previous-page' })}
          ${this.#createAddressInput()}
          ${this.#createButton({ icon: 'chevron-right', title: i18nString(UIStrings.nextPage),
            event: new PageNavigationEvent("Forward" /* Navigation.Forward */), enabled: true,
            jslogContext: 'linear-memory-inspector.next-page' })}
        </div>
        ${this.#createButton({ icon: 'refresh', title: i18nString(UIStrings.refresh),
            event: new RefreshRequestedEvent(), enabled: true,
            jslogContext: 'linear-memory-inspector.refresh' })}
      </div>
      `;
        render(result, this.#shadow, { host: this });
        // clang-format on
    }
    #createAddressInput() {
        const classMap = {
            'address-input': true,
            invalid: !this.#valid,
        };
        return html `
      <input class=${_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.Directives.classMap(classMap)} data-input="true" .value=${this.#address}
        jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.textField('linear-memory-inspector.address').track({
            change: true,
        })}
        title=${this.#valid ? i18nString(UIStrings.enterAddress) : this.#error} @change=${this.#onAddressChange.bind(this, "Submitted" /* Mode.Submitted */)} @input=${this.#onAddressChange.bind(this, "Edit" /* Mode.Edit */)}/>`;
    }
    #onAddressChange(mode, event) {
        const addressInput = event.target;
        this.dispatchEvent(new AddressInputChangedEvent(addressInput.value, mode));
    }
    #createButton(data) {
        return html `
      <button class="navigator-button" ?disabled=${!data.enabled}
        jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.action().track({ click: true, keydown: 'Enter' }).context(data.jslogContext)}
        data-button=${data.event.type} title=${data.title}
        @click=${this.dispatchEvent.bind(this, data.event)}>
        <${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__.Icon.Icon.litTagName} name=${data.icon}></${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__.Icon.Icon.litTagName}>
      </button>`;
    }
}
customElements.define('devtools-linear-memory-inspector-navigator', LinearMemoryNavigator);
//# sourceMappingURL=LinearMemoryNavigator.js.map

/***/ }),

/***/ "./panels/linear_memory_inspector/components/linearMemoryNavigator.css.js":
/*!********************************************************************************!*\
  !*** ./panels/linear_memory_inspector/components/linearMemoryNavigator.css.js ***!
  \********************************************************************************/
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
 * Copyright 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.navigator {
  min-height: 24px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  overflow: hidden;
  align-items: center;
  background-color: var(--sys-color-cdt-base-container);
  color: var(--sys-color-on-surface);
}

.navigator-item {
  display: flex;
  white-space: nowrap;
  overflow: hidden;
}

.address-input {
  text-align: center;
  outline: none;
  color: var(--sys-color-on-surface);
  border: 1px solid var(--sys-color-neutral-outline);
  background: transparent;
}

.address-input.invalid {
  color: var(--sys-color-error);
}

.navigator-button {
  display: flex;
  width: 20px;
  height: 20px;
  background: transparent;
  overflow: hidden;
  border: none;
  padding: 0;
  outline: none;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.navigator-button:disabled devtools-icon {
  opacity: 50%;
}

.navigator-button:enabled:hover devtools-icon {
  color: var(--icon-default-hover);
}

.navigator-button:enabled:focus devtools-icon {
  color: var(--icon-default-hover);
}

/*# sourceURL=linearMemoryNavigator.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);