"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_elements_components_AdornerSettingsPane_js"],{

/***/ "./panels/elements/components/AdornerSettingsPane.js":
/*!***********************************************************!*\
  !*** ./panels/elements/components/AdornerSettingsPane.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdornerSettingUpdatedEvent: () => (/* binding */ AdornerSettingUpdatedEvent),
/* harmony export */   AdornerSettingsPane: () => (/* binding */ AdornerSettingsPane)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/components/buttons/buttons.js */ "./ui/components/buttons/buttons.js");
/* harmony import */ var _ui_components_input_input_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/input/input.js */ "./ui/components/input/input.js");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _adornerSettingsPane_css_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./adornerSettingsPane.css.js */ "./panels/elements/components/adornerSettingsPane.css.js");
// Copyright (c) 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






const UIStrings = {
    /**
     * @description Title of a list of settings to toggle badges.
     */
    settingsTitle: 'Show badges',
    /**
     * @description ARIA label of the button to close the badge settings pane
     */
    closeButton: 'Close',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/elements/components/AdornerSettingsPane.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
const { render, html } = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__;
class AdornerSettingUpdatedEvent extends Event {
    static eventName = 'adornersettingupdated';
    data;
    constructor(adornerName, isEnabledNow, newSettings) {
        super(AdornerSettingUpdatedEvent.eventName, {});
        this.data = { adornerName, isEnabledNow, newSettings };
    }
}
class AdornerSettingsPane extends HTMLElement {
    static litTagName = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.literal `devtools-adorner-settings-pane`;
    #shadow = this.attachShadow({ mode: 'open' });
    #settings = new Map();
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_ui_components_input_input_js__WEBPACK_IMPORTED_MODULE_2__.checkboxStyles, _adornerSettingsPane_css_js__WEBPACK_IMPORTED_MODULE_5__["default"]];
    }
    set data(data) {
        this.#settings = new Map(data.settings.entries());
        this.#render();
    }
    show() {
        this.classList.remove('hidden');
        const settingsPane = this.#shadow.querySelector('.adorner-settings-pane');
        if (settingsPane) {
            settingsPane.focus();
        }
    }
    hide() {
        this.classList.add('hidden');
    }
    #onChange(ev) {
        const inputEl = ev.target;
        const adorner = inputEl.dataset.adorner;
        if (adorner === undefined) {
            return;
        }
        const isEnabledNow = inputEl.checked;
        this.#settings.set(adorner, isEnabledNow);
        this.dispatchEvent(new AdornerSettingUpdatedEvent(adorner, isEnabledNow, this.#settings));
        this.#render();
    }
    #render() {
        const settingTemplates = [];
        for (const [adorner, isEnabled] of this.#settings) {
            // Disabled until https://crbug.com/1079231 is fixed.
            // clang-format off
            settingTemplates.push(html `
        <label class="setting" title=${adorner}>
          <input
            class="adorner-status"
            type="checkbox" name=${adorner}
            .checked=${isEnabled}
            jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.toggle(adorner).track({ change: true })}
            data-adorner=${adorner}>
          <span class="adorner-name">${adorner}</span>
        </label>
      `);
            // clang-format on
        }
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        render(html `
      <div class="adorner-settings-pane" tabindex="-1" jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.pane('adorner-settings')}>
        <div class="settings-title">${i18nString(UIStrings.settingsTitle)}</div>
        <div class="setting-list" @change=${this.#onChange}>
          ${settingTemplates}
        </div>
        <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button.litTagName} aria-label=${i18nString(UIStrings.closeButton)}
                                             .iconName=${'cross'}
                                             .size=${"SMALL" /* Buttons.Button.Size.SMALL */}
                                             .title=${i18nString(UIStrings.closeButton)}
                                             .variant=${"icon" /* Buttons.Button.Variant.ICON */}
                                             jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.close().track({ click: true })}
                                             @click=${this.hide}></${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button.litTagName}>
      </div>
    `, this.#shadow, {
            host: this,
        });
        // clang-format on
    }
}
customElements.define('devtools-adorner-settings-pane', AdornerSettingsPane);
//# sourceMappingURL=AdornerSettingsPane.js.map

/***/ }),

/***/ "./panels/elements/components/adornerSettingsPane.css.js":
/*!***************************************************************!*\
  !*** ./panels/elements/components/adornerSettingsPane.css.js ***!
  \***************************************************************/
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

.adorner-settings-pane {
  display: flex;
  height: auto;
  padding: 6px 12px;
  color: var(--sys-color-on-surface);
  font-size: 12px;
  align-items: center;
}

.settings-title {
  font-weight: 500;
  margin-right: 6px;
}

.setting {
  margin-left: 1em;
}

.adorner-status {
  margin: auto 0.4em auto 0;
}

.adorner-status,
.adorner-name {
  vertical-align: middle;
}

/*# sourceURL=adornerSettingsPane.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);