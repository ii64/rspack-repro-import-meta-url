"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_elements_components_AdornerSettingsPane_ts"],{

/***/ "./src/panels/elements/components/AdornerSettingsPane.ts":
/*!***************************************************************!*\
  !*** ./src/panels/elements/components/AdornerSettingsPane.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdornerSettingUpdatedEvent: () => (/* binding */ AdornerSettingUpdatedEvent),
/* harmony export */   AdornerSettingsPane: () => (/* binding */ AdornerSettingsPane)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/components/buttons/buttons.js */ "./src/ui/components/buttons/buttons.ts");
/* harmony import */ var _ui_components_input_input_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/input/input.js */ "./src/ui/components/input/input.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './adornerSettingsPane.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright (c) 2021 The Chromium Authors. All rights reserved.
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
var _AdornerSettingsPane_instances, _AdornerSettingsPane_shadow, _AdornerSettingsPane_settings, _AdornerSettingsPane_onChange, _AdornerSettingsPane_render;






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
    constructor(adornerName, isEnabledNow, newSettings) {
        super(AdornerSettingUpdatedEvent.eventName, {});
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.data = { adornerName, isEnabledNow, newSettings };
    }
}
Object.defineProperty(AdornerSettingUpdatedEvent, "eventName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'adornersettingupdated'
});
class AdornerSettingsPane extends HTMLElement {
    constructor() {
        super(...arguments);
        _AdornerSettingsPane_instances.add(this);
        _AdornerSettingsPane_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _AdornerSettingsPane_settings.set(this, new Map());
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _AdornerSettingsPane_shadow, "f").adoptedStyleSheets = [_ui_components_input_input_js__WEBPACK_IMPORTED_MODULE_2__.checkboxStyles, Object(function webpackMissingModule() { var e = new Error("Cannot find module './adornerSettingsPane.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
    }
    set data(data) {
        __classPrivateFieldSet(this, _AdornerSettingsPane_settings, new Map(data.settings.entries()), "f");
        __classPrivateFieldGet(this, _AdornerSettingsPane_instances, "m", _AdornerSettingsPane_render).call(this);
    }
    show() {
        this.classList.remove('hidden');
        const settingsPane = __classPrivateFieldGet(this, _AdornerSettingsPane_shadow, "f").querySelector('.adorner-settings-pane');
        if (settingsPane) {
            settingsPane.focus();
        }
    }
    hide() {
        this.classList.add('hidden');
    }
}
_AdornerSettingsPane_shadow = new WeakMap(), _AdornerSettingsPane_settings = new WeakMap(), _AdornerSettingsPane_instances = new WeakSet(), _AdornerSettingsPane_onChange = function _AdornerSettingsPane_onChange(ev) {
    const inputEl = ev.target;
    const adorner = inputEl.dataset.adorner;
    if (adorner === undefined) {
        return;
    }
    const isEnabledNow = inputEl.checked;
    __classPrivateFieldGet(this, _AdornerSettingsPane_settings, "f").set(adorner, isEnabledNow);
    this.dispatchEvent(new AdornerSettingUpdatedEvent(adorner, isEnabledNow, __classPrivateFieldGet(this, _AdornerSettingsPane_settings, "f")));
    __classPrivateFieldGet(this, _AdornerSettingsPane_instances, "m", _AdornerSettingsPane_render).call(this);
}, _AdornerSettingsPane_render = function _AdornerSettingsPane_render() {
    const settingTemplates = [];
    for (const [adorner, isEnabled] of __classPrivateFieldGet(this, _AdornerSettingsPane_settings, "f")) {
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
        <div class="setting-list" @change=${__classPrivateFieldGet(this, _AdornerSettingsPane_instances, "m", _AdornerSettingsPane_onChange)}>
          ${settingTemplates}
        </div>
        <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button.litTagName} aria-label=${i18nString(UIStrings.closeButton)}
                                             .iconName=${'cross'}
                                             .size=${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Size.SMALL}
                                             .title=${i18nString(UIStrings.closeButton)}
                                             .variant=${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Variant.ICON}
                                             jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.close().track({ click: true })}
                                             @click=${this.hide}></${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button.litTagName}>
      </div>
    `, __classPrivateFieldGet(this, _AdornerSettingsPane_shadow, "f"), {
        host: this,
    });
    // clang-format on
};
Object.defineProperty(AdornerSettingsPane, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.literal `devtools-adorner-settings-pane`
});
customElements.define('devtools-adorner-settings-pane', AdornerSettingsPane);


/***/ })

}]);