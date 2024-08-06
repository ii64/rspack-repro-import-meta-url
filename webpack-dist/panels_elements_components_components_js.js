"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_elements_components_components_js"],{

/***/ "./panels/elements/components/AccessibilityTreeNode.js":
/*!*************************************************************!*\
  !*** ./panels/elements/components/AccessibilityTreeNode.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccessibilityTreeNode: () => (/* binding */ AccessibilityTreeNode)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _accessibilityTreeNode_css_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./accessibilityTreeNode.css.js */ "./panels/elements/components/accessibilityTreeNode.css.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





const UIStrings = {
    /**
     *@description Ignored node element text content in Accessibility Tree View of the Elements panel
     */
    ignored: 'Ignored',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/elements/components/AccessibilityTreeNode.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
// TODO(jobay) move this to Platform.StringUtilities if still needed.
// This function is a variant of setTextContentTruncatedIfNeeded found in DOMExtension.
function truncateTextIfNeeded(text) {
    const maxTextContentLength = 10000;
    if (text.length > maxTextContentLength) {
        return _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.trimMiddle(text, maxTextContentLength);
    }
    return text;
}
function isPrintable(valueType) {
    switch (valueType) {
        case "boolean" /* Protocol.Accessibility.AXValueType.Boolean */:
        case "booleanOrUndefined" /* Protocol.Accessibility.AXValueType.BooleanOrUndefined */:
        case "string" /* Protocol.Accessibility.AXValueType.String */:
        case "number" /* Protocol.Accessibility.AXValueType.Number */:
            return true;
        default:
            return false;
    }
}
class AccessibilityTreeNode extends HTMLElement {
    static litTagName = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.literal `devtools-accessibility-tree-node`;
    #shadow = this.attachShadow({ mode: 'open' });
    #ignored = true;
    #name = '';
    #role = '';
    #properties = [];
    #id = '';
    set data(data) {
        this.#ignored = data.ignored;
        this.#name = data.name;
        this.#role = data.role;
        this.#properties = data.properties;
        this.#id = data.id;
        void this.#render();
    }
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_accessibilityTreeNode_css_js__WEBPACK_IMPORTED_MODULE_4__["default"]];
    }
    async #render() {
        const role = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html `<span class='role-value'>${truncateTextIfNeeded(this.#role)}</span>`;
        const name = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html `"<span class='attribute-value'>${this.#name}</span>"`;
        const properties = this.#properties.map(({ name, value }) => isPrintable(value.type) ?
            _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html ` <span class='attribute-name'>${name}</span>:&nbsp;<span class='attribute-value'>${value.value}</span>` :
            _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.nothing);
        const content = this.#ignored ? _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html `<span>${i18nString(UIStrings.ignored)}</span>` :
            _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html `${role}&nbsp;${name}${properties}`;
        await _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_2__.RenderCoordinator.RenderCoordinator.instance().write(`Accessibility node ${this.#id} render`, () => {
            // clang-format off
            _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html `<div class='container'>${content}</div>`, this.#shadow, { host: this });
            // clang-format on
        });
    }
}
customElements.define('devtools-accessibility-tree-node', AccessibilityTreeNode);
//# sourceMappingURL=AccessibilityTreeNode.js.map

/***/ }),

/***/ "./panels/elements/components/AdornerManager.js":
/*!******************************************************!*\
  !*** ./panels/elements/components/AdornerManager.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdornerCategoryOrder: () => (/* binding */ AdornerCategoryOrder),
/* harmony export */   AdornerManager: () => (/* binding */ AdornerManager),
/* harmony export */   DefaultAdornerSettings: () => (/* binding */ DefaultAdornerSettings),
/* harmony export */   RegisteredAdorners: () => (/* binding */ RegisteredAdorners),
/* harmony export */   compareAdornerNamesByCategory: () => (/* binding */ compareAdornerNamesByCategory),
/* harmony export */   getRegisteredAdorner: () => (/* binding */ getRegisteredAdorner)
/* harmony export */ });
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var RegisteredAdorners;
(function (RegisteredAdorners) {
    RegisteredAdorners["GRID"] = "grid";
    RegisteredAdorners["SUBGRID"] = "subgrid";
    RegisteredAdorners["FLEX"] = "flex";
    RegisteredAdorners["AD"] = "ad";
    RegisteredAdorners["SCROLL_SNAP"] = "scroll-snap";
    RegisteredAdorners["CONTAINER"] = "container";
    RegisteredAdorners["SLOT"] = "slot";
    RegisteredAdorners["TOP_LAYER"] = "top-layer";
    RegisteredAdorners["REVEAL"] = "reveal";
    RegisteredAdorners["MEDIA"] = "media";
})(RegisteredAdorners || (RegisteredAdorners = {}));
// This enum-like const object serves as the authoritative registry for all the
// adorners available.
function getRegisteredAdorner(which) {
    switch (which) {
        case RegisteredAdorners.GRID:
            return {
                name: 'grid',
                category: "Layout" /* AdornerCategories.LAYOUT */,
                enabledByDefault: true,
            };
        case RegisteredAdorners.SUBGRID:
            return {
                name: 'subgrid',
                category: "Layout" /* AdornerCategories.LAYOUT */,
                enabledByDefault: true,
            };
        case RegisteredAdorners.FLEX:
            return {
                name: 'flex',
                category: "Layout" /* AdornerCategories.LAYOUT */,
                enabledByDefault: true,
            };
        case RegisteredAdorners.AD:
            return {
                name: 'ad',
                category: "Security" /* AdornerCategories.SECURITY */,
                enabledByDefault: true,
            };
        case RegisteredAdorners.SCROLL_SNAP:
            return {
                name: 'scroll-snap',
                category: "Layout" /* AdornerCategories.LAYOUT */,
                enabledByDefault: true,
            };
        case RegisteredAdorners.CONTAINER:
            return {
                name: 'container',
                category: "Layout" /* AdornerCategories.LAYOUT */,
                enabledByDefault: true,
            };
        case RegisteredAdorners.SLOT:
            return {
                name: 'slot',
                category: "Layout" /* AdornerCategories.LAYOUT */,
                enabledByDefault: true,
            };
        case RegisteredAdorners.TOP_LAYER:
            return {
                name: 'top-layer',
                category: "Layout" /* AdornerCategories.LAYOUT */,
                enabledByDefault: true,
            };
        case RegisteredAdorners.REVEAL:
            return {
                name: 'reveal',
                category: "Default" /* AdornerCategories.DEFAULT */,
                enabledByDefault: true,
            };
        case RegisteredAdorners.MEDIA:
            return {
                name: 'media',
                category: "Default" /* AdornerCategories.DEFAULT */,
                enabledByDefault: false,
            };
    }
}
let adornerNameToCategoryMap = undefined;
function getCategoryFromAdornerName(name) {
    if (!adornerNameToCategoryMap) {
        adornerNameToCategoryMap = new Map();
        for (const { name, category } of Object.values(RegisteredAdorners).map(getRegisteredAdorner)) {
            adornerNameToCategoryMap.set(name, category);
        }
    }
    return adornerNameToCategoryMap.get(name) || "Default" /* AdornerCategories.DEFAULT */;
}
const DefaultAdornerSettings = Object.values(RegisteredAdorners).map(getRegisteredAdorner).map(({ name, enabledByDefault }) => ({
    adorner: name,
    isEnabled: enabledByDefault,
}));
class AdornerManager {
    #adornerSettings = new Map();
    #settingStore;
    constructor(settingStore) {
        this.#settingStore = settingStore;
        this.#syncSettings();
    }
    updateSettings(settings) {
        this.#adornerSettings = settings;
        this.#persistCurrentSettings();
    }
    getSettings() {
        return this.#adornerSettings;
    }
    isAdornerEnabled(adornerText) {
        return this.#adornerSettings.get(adornerText) || false;
    }
    #persistCurrentSettings() {
        const settingList = [];
        for (const [adorner, isEnabled] of this.#adornerSettings) {
            settingList.push({ adorner, isEnabled });
        }
        this.#settingStore.set(settingList);
    }
    #loadSettings() {
        const settingList = this.#settingStore.get();
        for (const setting of settingList) {
            this.#adornerSettings.set(setting.adorner, setting.isEnabled);
        }
    }
    #syncSettings() {
        this.#loadSettings();
        // Prune outdated adorners and add new ones to the persistence.
        const outdatedAdorners = new Set(this.#adornerSettings.keys());
        for (const { adorner, isEnabled } of DefaultAdornerSettings) {
            outdatedAdorners.delete(adorner);
            if (!this.#adornerSettings.has(adorner)) {
                this.#adornerSettings.set(adorner, isEnabled);
            }
        }
        for (const outdatedAdorner of outdatedAdorners) {
            this.#adornerSettings.delete(outdatedAdorner);
        }
        this.#persistCurrentSettings();
    }
}
const OrderedAdornerCategories = [
    "Security" /* AdornerCategories.SECURITY */,
    "Layout" /* AdornerCategories.LAYOUT */,
    "Default" /* AdornerCategories.DEFAULT */,
];
// Use idx + 1 for the order to avoid JavaScript's 0 == false issue
const AdornerCategoryOrder = new Map(OrderedAdornerCategories.map((category, idx) => [category, idx + 1]));
function compareAdornerNamesByCategory(nameA, nameB) {
    const orderA = AdornerCategoryOrder.get(getCategoryFromAdornerName(nameA)) || Number.POSITIVE_INFINITY;
    const orderB = AdornerCategoryOrder.get(getCategoryFromAdornerName(nameB)) || Number.POSITIVE_INFINITY;
    return orderA - orderB;
}
//# sourceMappingURL=AdornerManager.js.map

/***/ }),

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

/***/ "./panels/elements/components/AnchorFunctionLinkSwatch.js":
/*!****************************************************************!*\
  !*** ./panels/elements/components/AnchorFunctionLinkSwatch.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnchorFunctionLinkSwatch: () => (/* binding */ AnchorFunctionLinkSwatch)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */ var _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/legacy/components/inline_editor/inline_editor.js */ "./ui/legacy/components/inline_editor/inline_editor.js");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _anchorFunctionLinkSwatch_css_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./anchorFunctionLinkSwatch.css.js */ "./panels/elements/components/anchorFunctionLinkSwatch.css.js");
// Copyright (c) 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






const UIStrings = {
    /**
     *@description Title in the styles tab for the icon button for jumping to the anchor node.
     */
    jumpToAnchorNode: 'Jump to anchor node',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/elements/components/AnchorFunctionLinkSwatch.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
const { render, html } = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__;
// clang-format on
class AnchorFunctionLinkSwatch extends HTMLElement {
    static litTagName = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.literal `devtools-anchor-function-link-swatch`;
    #shadow = this.attachShadow({ mode: 'open' });
    #data;
    constructor(data) {
        super();
        this.#data = data;
    }
    dataForTest() {
        return this.#data;
    }
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_anchorFunctionLinkSwatch_css_js__WEBPACK_IMPORTED_MODULE_5__["default"]];
        this.render();
    }
    set data(data) {
        this.#data = data;
        this.render();
    }
    #handleIconClick(ev) {
        ev.stopPropagation();
        this.#data.onLinkActivate();
    }
    #renderIdentifierLink() {
        // clang-format off
        return html `<${_ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_2__.LinkSwatch.LinkSwatch.litTagName}
      @mouseenter=${this.#data.onMouseEnter}
      @mouseleave=${this.#data.onMouseLeave}
      .data=${{
            text: this.#data.identifier,
            isDefined: Boolean(this.#data.anchorNode),
            jslogContext: 'anchor-link',
            onLinkActivate: this.#data.onLinkActivate,
        }}></${_ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_2__.LinkSwatch.LinkSwatch.litTagName}>`;
        // clang-format on
    }
    #renderIconLink() {
        // clang-format off
        return html `<${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__.Icon.Icon.litTagName}
      role='button'
      title=${i18nString(UIStrings.jumpToAnchorNode)}
      class='icon-link'
      name='open-externally'
      jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.action('jump-to-anchor-node').track({ click: true })}
      @mouseenter=${this.#data.onMouseEnter}
      @mouseleave=${this.#data.onMouseLeave}
      @mousedown=${(ev) => ev.stopPropagation()}
      @click=${this.#handleIconClick}
    ></${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__.Icon.Icon.litTagName}>`;
        // clang-format on
    }
    render() {
        if (!this.#data.identifier && !this.#data.anchorNode) {
            return;
        }
        if (this.#data.identifier) {
            // clang-format off
            render(html `${this.#renderIdentifierLink()}${this.#data.needsSpace ? ' ' : ''}`, this.#shadow, { host: this });
            // clang-format on
        }
        else {
            // clang-format off
            render(html `${this.#renderIconLink()}${this.#data.needsSpace ? ' ' : ''}`, this.#shadow, { host: this });
            // clang-format on
        }
    }
}
customElements.define('devtools-anchor-function-link-swatch', AnchorFunctionLinkSwatch);
//# sourceMappingURL=AnchorFunctionLinkSwatch.js.map

/***/ }),

/***/ "./panels/elements/components/CSSHintDetailsView.js":
/*!**********************************************************!*\
  !*** ./panels/elements/components/CSSHintDetailsView.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSHintDetailsView: () => (/* binding */ CSSHintDetailsView)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _cssHintDetailsView_css_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cssHintDetailsView.css.js */ "./panels/elements/components/cssHintDetailsView.css.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



const UIStrings = {
    /**
     *@description Text for button that redirects to CSS property documentation.
     */
    learnMore: 'Learn More',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/elements/components/CSSHintDetailsView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
const { render, html, Directives } = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__;
class CSSHintDetailsView extends HTMLElement {
    static litTagName = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.literal `devtools-css-hint-details-view`;
    #shadow = this.attachShadow({ mode: 'open' });
    #authoringHint;
    constructor(authoringHint) {
        super();
        this.#authoringHint = authoringHint;
        this.#shadow.adoptedStyleSheets = [_cssHintDetailsView_css_js__WEBPACK_IMPORTED_MODULE_2__["default"]];
        this.#render();
    }
    #render() {
        const link = this.#authoringHint.getLearnMoreLink();
        // clang-format off
        render(html `
        <div class="hint-popup-wrapper">
          <div class="hint-popup-reason">
            ${Directives.unsafeHTML(this.#authoringHint.getMessage())}
          </div>
          ${this.#authoringHint.getPossibleFixMessage() ? html `
              <div class="hint-popup-possible-fix">
                  ${Directives.unsafeHTML(this.#authoringHint.getPossibleFixMessage())}
                  ${link ? html `
                      <x-link id="learn-more" href=${link} class="clickable underlined unbreakable-text"}>
                          ${i18nString(UIStrings.learnMore)}
                      </x-link>
                  ` : ''}
              </div>
          ` : ''}
        </div>
      `, this.#shadow, {
            host: this,
        });
        // clang-format on
    }
}
customElements.define('devtools-css-hint-details-view', CSSHintDetailsView);
//# sourceMappingURL=CSSHintDetailsView.js.map

/***/ }),

/***/ "./panels/elements/components/CSSPropertyDocsView.js":
/*!***********************************************************!*\
  !*** ./panels/elements/components/CSSPropertyDocsView.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSPropertyDocsView: () => (/* binding */ CSSPropertyDocsView)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _ui_components_input_input_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/input/input.js */ "./ui/components/input/input.js");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _cssPropertyDocsView_css_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cssPropertyDocsView.css.js */ "./panels/elements/components/cssPropertyDocsView.css.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






const UIStrings = {
    /**
     *@description Text for button that redirects to CSS property documentation.
     */
    learnMore: 'Learn more',
    /**
     *@description Text for a checkbox to turn off the CSS property documentation.
     */
    dontShow: 'Don\'t show',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/elements/components/CSSPropertyDocsView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
const { render, html } = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__;
class CSSPropertyDocsView extends HTMLElement {
    static litTagName = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.literal `devtools-css-property-docs-view`;
    #shadow = this.attachShadow({ mode: 'open' });
    #cssProperty;
    constructor(cssProperty) {
        super();
        this.#cssProperty = cssProperty;
        this.#shadow.adoptedStyleSheets = [_ui_components_input_input_js__WEBPACK_IMPORTED_MODULE_2__.checkboxStyles, _cssPropertyDocsView_css_js__WEBPACK_IMPORTED_MODULE_5__["default"]];
        this.#render();
    }
    #dontShowChanged(e) {
        const showDocumentation = !e.target.checked;
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance()
            .moduleSetting('show-css-property-documentation-on-hover')
            .set(showDocumentation);
    }
    #render() {
        const description = this.#cssProperty.description;
        const link = this.#cssProperty.references?.[0].url;
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        render(html `
      <div class="docs-popup-wrapper">
        ${description ? html `
          <div id="description">
            ${description}
          </div>
        ` : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.nothing}
        ${link ? html `
          <div class="docs-popup-section footer">
            <x-link
              id="learn-more"
              href=${link}
              class="clickable underlined unbreakable-text"
            >
              ${i18nString(UIStrings.learnMore)}
            </x-link>
            <label class="dont-show">
              <input type="checkbox" @change=${this.#dontShowChanged} jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.toggle('css-property-doc').track({ change: true })}/>
              ${i18nString(UIStrings.dontShow)}
            </label>
          </div>
        ` : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.nothing}
      </div>
    `, this.#shadow, {
            host: this,
        });
        // clang-format on
    }
}
customElements.define('devtools-css-property-docs-view', CSSPropertyDocsView);
//# sourceMappingURL=CSSPropertyDocsView.js.map

/***/ }),

/***/ "./panels/elements/components/CSSQuery.js":
/*!************************************************!*\
  !*** ./panels/elements/components/CSSQuery.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSQuery: () => (/* binding */ CSSQuery)
/* harmony export */ });
/* harmony import */ var _ui_legacy_inspectorCommon_css_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ui/legacy/inspectorCommon.css.js */ "./ui/legacy/inspectorCommon.css.js");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _cssQuery_css_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cssQuery.css.js */ "./panels/elements/components/cssQuery.css.js");
// Copyright (c) 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// eslint-disable-next-line rulesdir/es_modules_import




const { render, html } = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__;
class CSSQuery extends HTMLElement {
    static litTagName = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.literal `devtools-css-query`;
    #shadow = this.attachShadow({ mode: 'open' });
    #queryPrefix = '';
    #queryName;
    #queryText = '';
    #onQueryTextClick;
    #jslogContext;
    set data(data) {
        this.#queryPrefix = data.queryPrefix;
        this.#queryName = data.queryName;
        this.#queryText = data.queryText;
        this.#onQueryTextClick = data.onQueryTextClick;
        this.#jslogContext = data.jslogContext;
        this.#render();
    }
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [
            _cssQuery_css_js__WEBPACK_IMPORTED_MODULE_3__["default"],
            _ui_legacy_inspectorCommon_css_js__WEBPACK_IMPORTED_MODULE_0__["default"],
        ];
    }
    #render() {
        const queryClasses = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.Directives.classMap({
            query: true,
            editable: Boolean(this.#onQueryTextClick),
        });
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        const queryText = html `
      <span class="query-text" @click=${this.#onQueryTextClick}>${this.#queryText}</span>
    `;
        render(html `
      <div class=${queryClasses} jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_2__.cssRuleHeader(this.#jslogContext).track({ click: true, change: true })}>
        <slot name="indent"></slot>${this.#queryPrefix ? html `<span>${this.#queryPrefix + ' '}</span>` : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.nothing}${this.#queryName ? html `<span>${this.#queryName + ' '}</span>` : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.nothing}${queryText} {
      </div>
    `, this.#shadow, {
            host: this,
        });
        // clang-format on
    }
}
customElements.define('devtools-css-query', CSSQuery);
//# sourceMappingURL=CSSQuery.js.map

/***/ }),

/***/ "./panels/elements/components/CSSVariableValueView.js":
/*!************************************************************!*\
  !*** ./panels/elements/components/CSSVariableValueView.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSVariableParserError: () => (/* binding */ CSSVariableParserError),
/* harmony export */   CSSVariableValueView: () => (/* binding */ CSSVariableValueView)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _cssVariableValueView_css_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cssVariableValueView.css.js */ "./panels/elements/components/cssVariableValueView.css.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



const UIStrings = {
    /**
     *@description Text for a link from custom property to its defining registration
     */
    registeredPropertyLinkTitle: 'View registered property',
    /**
     *@description Error message for a property value that failed to parse because it had an incorrect type. The message
     * is shown in a popover when hovering the property value. The `type` placeholder will be rendered as an HTML element
     * to apply some styling (color and monospace font)
     *@example {<color>} type
     */
    invalidPropertyValue: 'Invalid property value, expected type {type}',
    /**
     *@description Text displayed in a tooltip shown when hovering over a var() CSS function in the Styles pane when the custom property in this function does not exist. The parameter is the name of the property.
     *@example {--my-custom-property-name} PH1
     */
    sIsNotDefined: '{PH1} is not defined',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/elements/components/CSSVariableValueView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
const i18nTemplate = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.i18nTemplate.bind(undefined, str_);
const { render, html } = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__;
function getLinkSection(details) {
    return html `<div class="registered-property-links">
            <span role="button" @click=${details?.goToDefinition} class="clickable underlined unbreakable-text"}>
              ${i18nString(UIStrings.registeredPropertyLinkTitle)}
            </span>
          </div>`;
}
class CSSVariableParserError extends HTMLElement {
    static litTagName = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.literal `devtools-css-variable-parser-error`;
    #shadow = this.attachShadow({ mode: 'open' });
    constructor(details) {
        super();
        this.#shadow.adoptedStyleSheets = [_cssVariableValueView_css_js__WEBPACK_IMPORTED_MODULE_2__["default"]];
        this.#render(details);
    }
    #render(details) {
        const type = html `<span class="monospace css-property">${details.registration.syntax()}</span>`;
        render(html `
      <div class="variable-value-popup-wrapper">
        ${i18nTemplate(UIStrings.invalidPropertyValue, { type })}
        ${getLinkSection(details)}
      </div>`, this.#shadow, {
            host: this,
        });
    }
}
class CSSVariableValueView extends HTMLElement {
    static litTagName = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.literal `devtools-css-variable-value-view`;
    #shadow = this.attachShadow({ mode: 'open' });
    variableName;
    value;
    details;
    constructor({ variableName, value, details, }) {
        super();
        this.#shadow.adoptedStyleSheets = [_cssVariableValueView_css_js__WEBPACK_IMPORTED_MODULE_2__["default"]];
        this.variableName = variableName;
        this.value = value;
        this.details = details;
        this.#render();
    }
    #render() {
        const initialValue = this.details?.registration.initialValue();
        const registrationView = this.details ? html `
        <hr class=divider />
        <div class=registered-property-popup-wrapper>
          <div class="monospace">
            <div><span class="css-property">syntax:</span> ${this.details.registration.syntax()}</div>
            <div><span class="css-property">inherits:</span> ${this.details.registration.inherits()}</div>
            ${initialValue ? html `<div><span class="css-property">initial-value:</span> ${initialValue}</div>` : ''}
          </div>
          ${getLinkSection(this.details)}
        </div>` :
            '';
        const valueText = this.value ?? i18nString(UIStrings.sIsNotDefined, { PH1: this.variableName });
        render(html `<div class="variable-value-popup-wrapper">
               ${valueText}
             </div>
             ${registrationView}
             `, this.#shadow, {
            host: this,
        });
    }
}
customElements.define('devtools-css-variable-value-view', CSSVariableValueView);
customElements.define('devtools-css-variable-parser-error', CSSVariableParserError);
//# sourceMappingURL=CSSVariableValueView.js.map

/***/ }),

/***/ "./panels/elements/components/ComputedStyleProperty.js":
/*!*************************************************************!*\
  !*** ./panels/elements/components/ComputedStyleProperty.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComputedStyleProperty: () => (/* binding */ ComputedStyleProperty),
/* harmony export */   NavigateToSourceEvent: () => (/* binding */ NavigateToSourceEvent)
/* harmony export */ });
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _computedStyleProperty_css_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./computedStyleProperty.css.js */ "./panels/elements/components/computedStyleProperty.css.js");
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



const { render, html } = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__;
class NavigateToSourceEvent extends Event {
    static eventName = 'onnavigatetosource';
    constructor() {
        super(NavigateToSourceEvent.eventName, { bubbles: true, composed: true });
    }
}
class ComputedStyleProperty extends HTMLElement {
    static litTagName = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal `devtools-computed-style-property`;
    #shadow = this.attachShadow({ mode: 'open' });
    #inherited = false;
    #traceable = false;
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_computedStyleProperty_css_js__WEBPACK_IMPORTED_MODULE_2__["default"]];
        this.#render();
    }
    set inherited(inherited) {
        if (inherited === this.#inherited) {
            return;
        }
        this.#inherited = inherited;
        this.#render();
    }
    set traceable(traceable) {
        if (traceable === this.#traceable) {
            return;
        }
        this.#traceable = traceable;
        this.#render();
    }
    #onNavigateToSourceClick() {
        this.dispatchEvent(new NavigateToSourceEvent());
    }
    #render() {
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        render(html `
      <div class="computed-style-property ${this.#inherited ? 'inherited' : ''}">
        <div class="property-name">
          <slot name="name"></slot>
        </div>
        <span class="hidden" aria-hidden="false">: </span>
        ${this.#traceable ?
            html `<span class="goto" @click=${this.#onNavigateToSourceClick} jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_1__.action('elements.jump-to-style').track({ click: true })}></span>` :
            null}
        <div class="property-value">
          <slot name="value"></slot>
        </div>
        <span class="hidden" aria-hidden="false">;</span>
      </div>
    `, this.#shadow, {
            host: this,
        });
        // clang-format on
    }
}
customElements.define('devtools-computed-style-property', ComputedStyleProperty);
//# sourceMappingURL=ComputedStyleProperty.js.map

/***/ }),

/***/ "./panels/elements/components/ComputedStyleTrace.js":
/*!**********************************************************!*\
  !*** ./panels/elements/components/ComputedStyleTrace.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComputedStyleTrace: () => (/* binding */ ComputedStyleTrace)
/* harmony export */ });
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _computedStyleTrace_css_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./computedStyleTrace.css.js */ "./panels/elements/components/computedStyleTrace.css.js");
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



const { render, html } = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__;
class ComputedStyleTrace extends HTMLElement {
    static litTagName = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.literal `devtools-computed-style-trace`;
    #shadow = this.attachShadow({ mode: 'open' });
    #selector = '';
    #active = false;
    #onNavigateToSource = () => { };
    #ruleOriginNode;
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_computedStyleTrace_css_js__WEBPACK_IMPORTED_MODULE_2__["default"]];
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__.UIUtils.injectCoreStyles(this.#shadow);
    }
    set data(data) {
        this.#selector = data.selector;
        this.#active = data.active;
        this.#onNavigateToSource = data.onNavigateToSource;
        this.#ruleOriginNode = data.ruleOriginNode;
        this.#render();
    }
    #render() {
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        render(html `
      <div class="computed-style-trace ${this.#active ? 'active' : 'inactive'}">
        <span class="goto" @click=${this.#onNavigateToSource}></span>
        <slot name="trace-value" @click=${this.#onNavigateToSource}></slot>
        <span class="trace-selector">${this.#selector}</span>
        <span class="trace-link">${this.#ruleOriginNode}</span>
      </div>
    `, this.#shadow, {
            host: this,
        });
        // clang-format on
    }
}
customElements.define('devtools-computed-style-trace', ComputedStyleTrace);
//# sourceMappingURL=ComputedStyleTrace.js.map

/***/ }),

/***/ "./panels/elements/components/ElementsTreeExpandButton.js":
/*!****************************************************************!*\
  !*** ./panels/elements/components/ElementsTreeExpandButton.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ElementsTreeExpandButton: () => (/* binding */ ElementsTreeExpandButton)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _elementsTreeExpandButton_css_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./elementsTreeExpandButton.css.js */ "./panels/elements/components/elementsTreeExpandButton.css.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





const UIStrings = {
    /**
     *@description Aria label for a button expanding collapsed subtree
     */
    expand: 'Expand',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/elements/components/ElementsTreeExpandButton.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
class ElementsTreeExpandButton extends HTMLElement {
    static litTagName = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.literal `devtools-elements-tree-expand-button`;
    #shadow = this.attachShadow({ mode: 'open' });
    #clickHandler = () => { };
    set data(data) {
        this.#clickHandler = data.clickHandler;
        this.#update();
    }
    #update() {
        this.#render();
    }
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_elementsTreeExpandButton_css_js__WEBPACK_IMPORTED_MODULE_4__["default"]];
    }
    #render() {
        // clang-format off
        // This button's innerText will be tested by e2e test and blink layout tests.
        // It can't have any other characters like '\n' or space, otherwise it will break tests.
        _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.html `<button
        class="expand-button"
        tabindex="-1"
        aria-label=${i18nString(UIStrings.expand)}
        jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.action('expand').track({ click: true })}
        @click=${this.#clickHandler}><${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__.Icon.Icon.litTagName} name="dots-horizontal"></${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__.Icon.Icon.litTagName}></button>`, this.#shadow, { host: this });
        // clang-format on
    }
}
customElements.define('devtools-elements-tree-expand-button', ElementsTreeExpandButton);
//# sourceMappingURL=ElementsTreeExpandButton.js.map

/***/ }),

/***/ "./panels/elements/components/Helper.js":
/*!**********************************************!*\
  !*** ./panels/elements/components/Helper.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   legacyNodeToElementsComponentsNode: () => (/* binding */ legacyNodeToElementsComponentsNode)
/* harmony export */ });
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

const legacyNodeToElementsComponentsNode = (node) => {
    return {
        parentNode: node.parentNode ? legacyNodeToElementsComponentsNode(node.parentNode) : null,
        id: node.id,
        nodeType: node.nodeType(),
        pseudoType: node.pseudoType(),
        shadowRootType: node.shadowRootType(),
        nodeName: node.nodeName(),
        nodeNameNicelyCased: node.nodeNameInCorrectCase(),
        legacyDomNode: node,
        highlightNode: (mode) => node.highlight(mode),
        clearHighlight: () => _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.OverlayModel.OverlayModel.hideDOMNodeHighlight(),
        getAttribute: node.getAttribute.bind(node),
    };
};
//# sourceMappingURL=Helper.js.map

/***/ }),

/***/ "./panels/elements/components/LayoutPaneUtils.js":
/*!*******************************************************!*\
  !*** ./panels/elements/components/LayoutPaneUtils.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

//# sourceMappingURL=LayoutPaneUtils.js.map

/***/ }),

/***/ "./panels/elements/components/QueryContainer.js":
/*!******************************************************!*\
  !*** ./panels/elements/components/QueryContainer.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QueriedSizeRequestedEvent: () => (/* binding */ QueriedSizeRequestedEvent),
/* harmony export */   QueryContainer: () => (/* binding */ QueryContainer)
/* harmony export */ });
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */ var _ui_components_node_text_node_text_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/node_text/node_text.js */ "./ui/components/node_text/node_text.js");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _queryContainer_css_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./queryContainer.css.js */ "./panels/elements/components/queryContainer.css.js");
// Copyright (c) 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






const { render, html } = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__;
const { PhysicalAxis, QueryAxis } = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CSSContainerQuery;
class QueriedSizeRequestedEvent extends Event {
    static eventName = 'queriedsizerequested';
    constructor() {
        super(QueriedSizeRequestedEvent.eventName, {});
    }
}
class QueryContainer extends HTMLElement {
    static litTagName = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.literal `devtools-query-container`;
    #shadow = this.attachShadow({ mode: 'open' });
    #queryName;
    #container;
    #onContainerLinkClick;
    #isContainerLinkHovered = false;
    #queriedSizeDetails;
    set data(data) {
        this.#queryName = data.queryName;
        this.#container = data.container;
        this.#onContainerLinkClick = data.onContainerLinkClick;
        this.#render();
    }
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_queryContainer_css_js__WEBPACK_IMPORTED_MODULE_5__["default"]];
    }
    updateContainerQueriedSizeDetails(details) {
        this.#queriedSizeDetails = details;
        this.#render();
    }
    async #onContainerLinkMouseEnter() {
        this.#container?.highlightNode('container-outline');
        this.#isContainerLinkHovered = true;
        this.dispatchEvent(new QueriedSizeRequestedEvent());
    }
    #onContainerLinkMouseLeave() {
        this.#container?.clearHighlight();
        this.#isContainerLinkHovered = false;
        this.#render();
    }
    #render() {
        if (!this.#container) {
            return;
        }
        let idToDisplay, classesToDisplay;
        if (!this.#queryName) {
            idToDisplay = this.#container.getAttribute('id');
            classesToDisplay = this.#container.getAttribute('class')?.split(/\s+/).filter(Boolean);
        }
        const nodeTitle = this.#queryName || this.#container.nodeNameNicelyCased;
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        // eslint-disable-next-line rulesdir/ban_a_tags_in_lit_html
        render(html `
      →
      <a href="#"
        draggable=false
        class="container-link"
        jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.cssRuleHeader('container-query').track({ click: true })}
        @click=${this.#onContainerLinkClick}
        @mouseenter=${this.#onContainerLinkMouseEnter}
        @mouseleave=${this.#onContainerLinkMouseLeave}
      ><${_ui_components_node_text_node_text_js__WEBPACK_IMPORTED_MODULE_2__.NodeText.NodeText.litTagName}
          data-node-title=${nodeTitle}
          .data=${{
            nodeTitle,
            nodeId: idToDisplay,
            nodeClasses: classesToDisplay,
        }}></${_ui_components_node_text_node_text_js__WEBPACK_IMPORTED_MODULE_2__.NodeText.NodeText.litTagName}></a>
      ${this.#isContainerLinkHovered ? this.#renderQueriedSizeDetails() : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.nothing}
    `, this.#shadow, {
            host: this,
        });
        // clang-format on
    }
    #renderQueriedSizeDetails() {
        if (!this.#queriedSizeDetails || this.#queriedSizeDetails.queryAxis === "" /* QueryAxis.None */) {
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.nothing;
        }
        const areBothAxesQueried = this.#queriedSizeDetails.queryAxis === "size" /* QueryAxis.Both */;
        const axisIconClasses = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.Directives.classMap({
            'axis-icon': true,
            'hidden': areBothAxesQueried,
            'vertical': this.#queriedSizeDetails.physicalAxis === "Vertical" /* PhysicalAxis.Vertical */,
        });
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        return html `
      <span class="queried-size-details">
        (${this.#queriedSizeDetails.queryAxis}<${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__.Icon.Icon.litTagName}
          class=${axisIconClasses} .data=${{
            iconName: 'width',
            color: 'var(--icon-default)',
        }}></${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__.Icon.Icon.litTagName}>)
        ${areBothAxesQueried && this.#queriedSizeDetails.width ? 'width:' : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.nothing}
        ${this.#queriedSizeDetails.width || _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.nothing}
        ${areBothAxesQueried && this.#queriedSizeDetails.height ? 'height:' : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.nothing}
        ${this.#queriedSizeDetails.height || _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.nothing}
      </span>
    `;
        // clang-format on
    }
}
customElements.define('devtools-query-container', QueryContainer);
//# sourceMappingURL=QueryContainer.js.map

/***/ }),

/***/ "./panels/elements/components/StylePropertyEditor.js":
/*!***********************************************************!*\
  !*** ./panels/elements/components/StylePropertyEditor.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlexboxEditableProperties: () => (/* binding */ FlexboxEditableProperties),
/* harmony export */   FlexboxEditor: () => (/* binding */ FlexboxEditor),
/* harmony export */   GridEditableProperties: () => (/* binding */ GridEditableProperties),
/* harmony export */   GridEditor: () => (/* binding */ GridEditor),
/* harmony export */   PropertyDeselectedEvent: () => (/* binding */ PropertyDeselectedEvent),
/* harmony export */   PropertySelectedEvent: () => (/* binding */ PropertySelectedEvent),
/* harmony export */   StylePropertyEditor: () => (/* binding */ StylePropertyEditor)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _CSSPropertyIconResolver_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CSSPropertyIconResolver.js */ "./panels/elements/components/CSSPropertyIconResolver.js");
/* harmony import */ var _stylePropertyEditor_css_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stylePropertyEditor.css.js */ "./panels/elements/components/stylePropertyEditor.css.js");
// Copyright (c) 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






const UIStrings = {
    /**
     * @description Title of the button that selects a flex property.
     * @example {flex-direction} propertyName
     * @example {column} propertyValue
     */
    selectButton: 'Add {propertyName}: {propertyValue}',
    /**
     * @description Title of the button that deselects a flex property.
     * @example {flex-direction} propertyName
     * @example {row} propertyValue
     */
    deselectButton: 'Remove {propertyName}: {propertyValue}',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/elements/components/StylePropertyEditor.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
const { render, html, Directives } = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__;
class PropertySelectedEvent extends Event {
    static eventName = 'propertyselected';
    data;
    constructor(name, value) {
        super(PropertySelectedEvent.eventName, {});
        this.data = { name, value };
    }
}
class PropertyDeselectedEvent extends Event {
    static eventName = 'propertydeselected';
    data;
    constructor(name, value) {
        super(PropertyDeselectedEvent.eventName, {});
        this.data = { name, value };
    }
}
// eslint-disable-next-line rulesdir/check_component_naming
class StylePropertyEditor extends HTMLElement {
    #shadow = this.attachShadow({ mode: 'open' });
    #authoredProperties = new Map();
    #computedProperties = new Map();
    editableProperties = [];
    constructor() {
        super();
    }
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_stylePropertyEditor_css_js__WEBPACK_IMPORTED_MODULE_5__["default"]];
    }
    getEditableProperties() {
        return this.editableProperties;
    }
    set data(data) {
        this.#authoredProperties = data.authoredProperties;
        this.#computedProperties = data.computedProperties;
        this.#render();
    }
    #render() {
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        render(html `
      <div class="container">
        ${this.editableProperties.map(prop => this.#renderProperty(prop))}
      </div>
    `, this.#shadow, {
            host: this,
        });
        // clang-format on
    }
    #renderProperty(prop) {
        const authoredValue = this.#authoredProperties.get(prop.propertyName);
        const notAuthored = !authoredValue;
        const shownValue = authoredValue || this.#computedProperties.get(prop.propertyName);
        const classes = Directives.classMap({
            'property-value': true,
            'not-authored': notAuthored,
        });
        return html `<div class="row">
      <div class="property">
        <span class="property-name">${prop.propertyName}</span>: <span class=${classes}>${shownValue}</span>
      </div>
      <div class="buttons">
        ${prop.propertyValues.map(value => this.#renderButton(value, prop.propertyName, value === authoredValue))}
      </div>
    </div>`;
    }
    #renderButton(propertyValue, propertyName, selected = false) {
        const query = `${propertyName}: ${propertyValue}`;
        const iconInfo = this.findIcon(query, this.#computedProperties);
        if (!iconInfo) {
            throw new Error(`Icon for ${query} is not found`);
        }
        const transform = `transform: rotate(${iconInfo.rotate}deg) scale(${iconInfo.scaleX}, ${iconInfo.scaleY})`;
        const classes = Directives.classMap({
            'button': true,
            'selected': selected,
        });
        const values = { propertyName, propertyValue };
        const title = selected ? i18nString(UIStrings.deselectButton, values) : i18nString(UIStrings.selectButton, values);
        return html `
      <button title=${title}
              class=${classes}
              jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.item().track({ click: true }).context(`${propertyName}-${propertyValue}`)}
              @click=${() => this.#onButtonClick(propertyName, propertyValue, selected)}>
        <${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__.Icon.Icon.litTagName} style=${transform} name=${iconInfo.iconName}>
        </${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__.Icon.Icon.litTagName}>
      </button>
    `;
    }
    #onButtonClick(propertyName, propertyValue, selected) {
        if (selected) {
            this.dispatchEvent(new PropertyDeselectedEvent(propertyName, propertyValue));
        }
        else {
            this.dispatchEvent(new PropertySelectedEvent(propertyName, propertyValue));
        }
    }
    findIcon(_query, _computedProperties) {
        throw new Error('Not implemented');
    }
}
class FlexboxEditor extends StylePropertyEditor {
    jslogContext = 'cssFlexboxEditor';
    editableProperties = FlexboxEditableProperties;
    findIcon(query, computedProperties) {
        return (0,_CSSPropertyIconResolver_js__WEBPACK_IMPORTED_MODULE_4__.findFlexContainerIcon)(query, computedProperties);
    }
}
customElements.define('devtools-flexbox-editor', FlexboxEditor);
class GridEditor extends StylePropertyEditor {
    jslogContext = 'cssGridEditor';
    editableProperties = GridEditableProperties;
    findIcon(query, computedProperties) {
        return (0,_CSSPropertyIconResolver_js__WEBPACK_IMPORTED_MODULE_4__.findGridContainerIcon)(query, computedProperties);
    }
}
customElements.define('devtools-grid-editor', GridEditor);
const FlexboxEditableProperties = [
    {
        propertyName: 'flex-direction',
        propertyValues: [
            'row',
            'column',
            'row-reverse',
            'column-reverse',
        ],
    },
    {
        propertyName: 'flex-wrap',
        propertyValues: [
            'nowrap',
            'wrap',
        ],
    },
    {
        propertyName: 'align-content',
        propertyValues: [
            'center',
            'flex-start',
            'flex-end',
            'space-around',
            'space-between',
            'stretch',
        ],
    },
    {
        propertyName: 'justify-content',
        propertyValues: [
            'center',
            'flex-start',
            'flex-end',
            'space-between',
            'space-around',
            'space-evenly',
        ],
    },
    {
        propertyName: 'align-items',
        propertyValues: [
            'center',
            'flex-start',
            'flex-end',
            'stretch',
            'baseline',
        ],
    },
];
const GridEditableProperties = [
    {
        propertyName: 'align-content',
        propertyValues: [
            'center',
            'space-between',
            'space-around',
            'space-evenly',
            'stretch',
        ],
    },
    {
        propertyName: 'justify-content',
        propertyValues: [
            'center',
            'start',
            'end',
            'space-between',
            'space-around',
            'space-evenly',
        ],
    },
    {
        propertyName: 'align-items',
        propertyValues: [
            'center',
            'start',
            'end',
            'stretch',
            'baseline',
        ],
    },
    {
        propertyName: 'justify-items',
        propertyValues: [
            'center',
            'start',
            'end',
            'stretch',
        ],
    },
];
//# sourceMappingURL=StylePropertyEditor.js.map

/***/ }),

/***/ "./panels/elements/components/accessibilityTreeNode.css.js":
/*!*****************************************************************!*\
  !*** ./panels/elements/components/accessibilityTreeNode.css.js ***!
  \*****************************************************************/
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

.container {
  width: 100%;
  display: inline-block;
}

.container:hover {
  background-color: var(--sys-color-state-hover-on-subtle);
}

span {
  color: var(--sys-color-token-meta);
  font-family: var(--monospace-font-family);
  font-size: var(--monospace-font-size);
}

.role-value {
  color: var(--sys-color-token-tag);
}

.attribute-name {
  color: var(--sys-color-token-attribute);
}

.attribute-value {
  color: var(--sys-color-token-attribute-value);
}

/*# sourceURL=accessibilityTreeNode.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


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


/***/ }),

/***/ "./panels/elements/components/anchorFunctionLinkSwatch.css.js":
/*!********************************************************************!*\
  !*** ./panels/elements/components/anchorFunctionLinkSwatch.css.js ***!
  \********************************************************************/
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
 * Copyright 2024 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.icon-link {
  color: var(--text-link);
  width: 13px;
  height: 13px;

  &:hover {
    cursor: pointer;
  }
}

/*# sourceURL=anchorFunctionLinkSwatch.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./panels/elements/components/components.js":
/*!**************************************************!*\
  !*** ./panels/elements/components/components.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccessibilityTreeNode: () => (/* reexport module object */ _AccessibilityTreeNode_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   AdornerManager: () => (/* reexport module object */ _AdornerManager_js__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   AdornerSettingsPane: () => (/* reexport module object */ _AdornerSettingsPane_js__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   AnchorFunctionLinkSwatch: () => (/* reexport module object */ _AnchorFunctionLinkSwatch_js__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   CSSHintDetailsView: () => (/* reexport module object */ _CSSHintDetailsView_js__WEBPACK_IMPORTED_MODULE_6__),
/* harmony export */   CSSPropertyDocsView: () => (/* reexport module object */ _CSSPropertyDocsView_js__WEBPACK_IMPORTED_MODULE_7__),
/* harmony export */   CSSPropertyIconResolver: () => (/* reexport module object */ _CSSPropertyIconResolver_js__WEBPACK_IMPORTED_MODULE_8__),
/* harmony export */   CSSQuery: () => (/* reexport module object */ _CSSQuery_js__WEBPACK_IMPORTED_MODULE_9__),
/* harmony export */   CSSVariableValueView: () => (/* reexport module object */ _CSSVariableValueView_js__WEBPACK_IMPORTED_MODULE_10__),
/* harmony export */   ComputedStyleProperty: () => (/* reexport module object */ _ComputedStyleProperty_js__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   ComputedStyleTrace: () => (/* reexport module object */ _ComputedStyleTrace_js__WEBPACK_IMPORTED_MODULE_5__),
/* harmony export */   ElementsBreadcrumbs: () => (/* reexport module object */ _ElementsBreadcrumbs_js__WEBPACK_IMPORTED_MODULE_11__),
/* harmony export */   ElementsBreadcrumbsUtils: () => (/* reexport module object */ _ElementsBreadcrumbsUtils_js__WEBPACK_IMPORTED_MODULE_12__),
/* harmony export */   ElementsTreeExpandButton: () => (/* reexport module object */ _ElementsTreeExpandButton_js__WEBPACK_IMPORTED_MODULE_13__),
/* harmony export */   Helper: () => (/* reexport module object */ _Helper_js__WEBPACK_IMPORTED_MODULE_14__),
/* harmony export */   LayoutPane: () => (/* reexport module object */ _LayoutPane_js__WEBPACK_IMPORTED_MODULE_15__),
/* harmony export */   LayoutPaneUtils: () => (/* reexport module object */ _LayoutPaneUtils_js__WEBPACK_IMPORTED_MODULE_16__),
/* harmony export */   QueryContainer: () => (/* reexport module object */ _QueryContainer_js__WEBPACK_IMPORTED_MODULE_17__),
/* harmony export */   StylePropertyEditor: () => (/* reexport module object */ _StylePropertyEditor_js__WEBPACK_IMPORTED_MODULE_18__)
/* harmony export */ });
/* harmony import */ var _AccessibilityTreeNode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AccessibilityTreeNode.js */ "./panels/elements/components/AccessibilityTreeNode.js");
/* harmony import */ var _AdornerManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdornerManager.js */ "./panels/elements/components/AdornerManager.js");
/* harmony import */ var _AdornerSettingsPane_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AdornerSettingsPane.js */ "./panels/elements/components/AdornerSettingsPane.js");
/* harmony import */ var _AnchorFunctionLinkSwatch_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AnchorFunctionLinkSwatch.js */ "./panels/elements/components/AnchorFunctionLinkSwatch.js");
/* harmony import */ var _ComputedStyleProperty_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ComputedStyleProperty.js */ "./panels/elements/components/ComputedStyleProperty.js");
/* harmony import */ var _ComputedStyleTrace_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ComputedStyleTrace.js */ "./panels/elements/components/ComputedStyleTrace.js");
/* harmony import */ var _CSSHintDetailsView_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CSSHintDetailsView.js */ "./panels/elements/components/CSSHintDetailsView.js");
/* harmony import */ var _CSSPropertyDocsView_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CSSPropertyDocsView.js */ "./panels/elements/components/CSSPropertyDocsView.js");
/* harmony import */ var _CSSPropertyIconResolver_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CSSPropertyIconResolver.js */ "./panels/elements/components/CSSPropertyIconResolver.js");
/* harmony import */ var _CSSQuery_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CSSQuery.js */ "./panels/elements/components/CSSQuery.js");
/* harmony import */ var _CSSVariableValueView_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CSSVariableValueView.js */ "./panels/elements/components/CSSVariableValueView.js");
/* harmony import */ var _ElementsBreadcrumbs_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ElementsBreadcrumbs.js */ "./panels/elements/components/ElementsBreadcrumbs.js");
/* harmony import */ var _ElementsBreadcrumbsUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ElementsBreadcrumbsUtils.js */ "./panels/elements/components/ElementsBreadcrumbsUtils.js");
/* harmony import */ var _ElementsTreeExpandButton_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ElementsTreeExpandButton.js */ "./panels/elements/components/ElementsTreeExpandButton.js");
/* harmony import */ var _Helper_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Helper.js */ "./panels/elements/components/Helper.js");
/* harmony import */ var _LayoutPane_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./LayoutPane.js */ "./panels/elements/components/LayoutPane.js");
/* harmony import */ var _LayoutPaneUtils_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./LayoutPaneUtils.js */ "./panels/elements/components/LayoutPaneUtils.js");
/* harmony import */ var _QueryContainer_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./QueryContainer.js */ "./panels/elements/components/QueryContainer.js");
/* harmony import */ var _StylePropertyEditor_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./StylePropertyEditor.js */ "./panels/elements/components/StylePropertyEditor.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




















//# sourceMappingURL=components.js.map

/***/ }),

/***/ "./panels/elements/components/computedStyleProperty.css.js":
/*!*****************************************************************!*\
  !*** ./panels/elements/components/computedStyleProperty.css.js ***!
  \*****************************************************************/
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

:host {
  position: relative;
  overflow: hidden;
  flex: auto;
  text-overflow: ellipsis;
}

.computed-style-property {
  --goto-size: 16px;

  font-family: var(--monospace-font-family);
  font-size: var(--monospace-font-size);
  min-height: 16px;
  box-sizing: border-box;
  padding-top: 2px;
  white-space: nowrap;
  user-select: text;
}

.computed-style-property:hover {
  background-color: var(--sys-color-state-hover-on-subtle);
  cursor: text;
}

.computed-style-property.inherited {
  opacity: 50%;
}

.property-name,
.property-value {
  display: contents;
  overflow: hidden;
  text-overflow: ellipsis;
}

.property-name {
  width: 16em;
  max-width: 52%;
  margin-right: calc(var(--goto-size) / 2);
  display: inline-block;
  vertical-align: text-top;
  color: var(--webkit-css-property-color, var(--sys-color-token-property-special)); /* stylelint-disable-line plugin/use_theme_colors */ /* See: crbug.com/1152736 for color variable migration. */
}

.property-value {
  margin-left: 2em;
}

.goto {
  display: none;
  cursor: pointer;
  position: absolute;
  width: var(--goto-size);
  height: var(--goto-size);
  margin: -1px 0 0 calc(-1 * var(--goto-size));
  mask: var(--image-file-goto-filled) center / contain no-repeat;
  background-color: var(--sys-color-primary-bright);
}

.computed-style-property:hover .goto {
  display: inline-block;
}

.hidden {
  display: none;
}
/* narrowed styles */
:host-context(.computed-narrow) .computed-style-property {
  white-space: normal;

  & .goto {
    display: none;
    margin-left: 0;
  }
}

:host-context(.computed-narrow) .property-name,
:host-context(.computed-narrow) .property-value {
  display: inline-block;
  width: 100%;
  max-width: 100%;
  margin-left: 0;
  white-space: nowrap;
}

:host-context(.computed-narrow) .computed-style-property:not(.inherited):hover {
  & .property-value {
    margin-left: var(--goto-size);
  }

  & .goto {
    display: inline-block;
  }
}
/* high-contrast styles */
@media (forced-colors: active) {
  .computed-style-property.inherited {
    opacity: 100%;
  }

  .computed-style-property:hover {
    forced-color-adjust: none;
    background-color: Highlight;
  }

  .computed-style-property:hover * {
    color: HighlightText;
  }

  .goto {
    background-color: HighlightText;
  }
}

/*# sourceURL=computedStyleProperty.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./panels/elements/components/computedStyleTrace.css.js":
/*!**************************************************************!*\
  !*** ./panels/elements/components/computedStyleTrace.css.js ***!
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
`/*
 * Copyright 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  text-overflow: ellipsis;
  overflow: hidden;
  flex-grow: 1;
}

.computed-style-trace {
  margin-left: 16px;
  font-family: var(--monospace-font-family);
  font-size: var(--monospace-font-size);
}

.computed-style-trace:hover {
  background-color: var(--sys-color-state-hover-on-subtle);
  cursor: text;
}

.goto {
  /* TODO: reuse with ComputedStyleProperty */
  --size: 16px;

  display: none;
  cursor: pointer;
  position: absolute;
  width: var(--size);
  height: var(--size);
  margin: -1px 0 0 calc(-1 * var(--size));
  mask: var(--image-file-goto-filled) center / contain no-repeat;
  background-color: var(--sys-color-surface-variant);
}

.computed-style-trace:hover .goto {
  display: inline-block;
}

.devtools-link {
  color: var(--sys-color-on-surface);
  text-decoration-color: var(--sys-color-token-subtle);
  text-decoration-line: underline;
  cursor: pointer;
}

.trace-value {
  margin-left: 16px;
}

.computed-style-trace.inactive slot[name="trace-value"] {
  text-decoration: line-through;
}

.trace-selector {
  --override-trace-selector-color: var(--sys-color-neutral-bright);

  color: var(--override-trace-selector-color);
  padding-left: 2em;
}

.trace-link {
  user-select: none;
  float: right;
  padding-left: 1em;
  position: relative;
  z-index: 1;
}
/* high-contrast styles */
@media (forced-colors: active) {
  .computed-style-trace:hover {
    forced-color-adjust: none;
    background-color: Highlight;
  }

  .goto {
    background-color: Highlight;
  }

  .computed-style-trace:hover * {
    color: HighlightText;
  }

  .computed-style-trace:hover .trace-selector {
    --override-trace-selector-color: HighlightText;
  }
}

/*# sourceURL=computedStyleTrace.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./panels/elements/components/cssHintDetailsView.css.js":
/*!**************************************************************!*\
  !*** ./panels/elements/components/cssHintDetailsView.css.js ***!
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
`/*
 * Copyright 2022 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  padding: 6px;
}

.hint-popup-wrapper {
  max-width: 232px;
  font-size: 12px;
  line-height: 1.4;
}

code {
  font-weight: bold;
  font-family: inherit;
}

.hint-popup-possible-fix {
  margin-top: 8px;
}

.clickable {
  color: var(--sys-color-primary);
}

.underlined {
  text-decoration: underline;
}

.unbreakable-text {
  white-space: nowrap;
}

/*# sourceURL=cssHintDetailsView.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./panels/elements/components/cssPropertyDocsView.css.js":
/*!***************************************************************!*\
  !*** ./panels/elements/components/cssPropertyDocsView.css.js ***!
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
 * Copyright 2023 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  padding: 6px;
}

.docs-popup-wrapper {
  max-width: 350px;
  font-size: 12px;
  line-height: 1.4;
}

.docs-popup-section {
  margin-top: 8px;
}

.clickable {
  color: var(--sys-color-primary);
}

.underlined {
  text-decoration: underline;
}

.unbreakable-text {
  white-space: nowrap;
}

.footer {
  display: flex;
  justify-content: space-between;
}

.dont-show input {
  vertical-align: bottom;
}

/*# sourceURL=cssPropertyDocsView.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./panels/elements/components/cssQuery.css.js":
/*!****************************************************!*\
  !*** ./panels/elements/components/cssQuery.css.js ***!
  \****************************************************/
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

.query:not(.editing-query) {
  overflow: hidden;
}

.editable .query-text {
  color: var(--sys-color-on-surface);
}

.editable .query-text:hover {
  text-decoration: var(--override-styles-section-text-hover-text-decoration);
  cursor: var(--override-styles-section-text-hover-cursor);
}

/*# sourceURL=cssQuery.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./panels/elements/components/cssVariableValueView.css.js":
/*!****************************************************************!*\
  !*** ./panels/elements/components/cssVariableValueView.css.js ***!
  \****************************************************************/
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
 * Copyright 2023 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.registered-property-popup-wrapper {
  max-width: 232px;
  font-size: 12px;
  line-height: 1.4;
}

.monospace {
  font-family: var(--monospace-font-family);
  font-size: var(--monospace-font-size);
}

:host {
  padding: 11px 7px;
}

.divider {
  margin: 8px -7px;
  border: 1px solid var(--sys-color-divider);
}

.registered-property-links {
  margin-top: 8px;
}

.clickable {
  color: var(--sys-color-primary);
  cursor: pointer;
}

.underlined {
  text-decoration: underline;
}

.unbreakable-text {
  white-space: nowrap;
}

.css-property {
  color: var(--webkit-css-property-color, var(--sys-color-token-property-special)); /* stylelint-disable-line plugin/use_theme_colors */ /* See: crbug.com/1152736 for color variable migration. */
}

.title {
  color: var(--sys-color-state-disabled);
}

/*# sourceURL=cssVariableValueView.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./panels/elements/components/elementsTreeExpandButton.css.js":
/*!********************************************************************!*\
  !*** ./panels/elements/components/elementsTreeExpandButton.css.js ***!
  \********************************************************************/
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
  display: inline-flex;
  vertical-align: middle;
}

:host(.hidden) {
  display: none;
}

.expand-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 14px;
  height: 10px;
  margin: 0 2px;
  border: 1px solid var(--override-adorner-border-color, var(--sys-color-tonal-outline));
  border-radius: 10px;
  background: var(--override-adorner-background-color, var(--sys-color-cdt-base-container));
  padding: 0;
  position: relative;

  &:hover::after,
  &:active::before {
    content: "";
    height: 100%;
    width: 100%;
    border-radius: inherit;
    position: absolute;
    top: 0;
    left: 0;
  }

  &:hover::after {
    background-color: var(--sys-color-state-hover-on-subtle);
  }

  &:active::before {
    background-color: var(--sys-color-state-ripple-neutral-on-subtle);
  }
}

.expand-button devtools-icon {
  width: 14px;
  height: 14px;
  color: var(--sys-color-primary);
}

/*# sourceURL=elementsTreeExpandButton.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./panels/elements/components/queryContainer.css.js":
/*!**********************************************************!*\
  !*** ./panels/elements/components/queryContainer.css.js ***!
  \**********************************************************/
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

.container-link {
  display: inline-block;
  color: var(--sys-color-state-disabled);
}

.container-link:hover {
  color: var(--sys-color-primary);
}

.queried-size-details {
  color: var(--sys-color-on-surface);
}

.axis-icon {
  margin-left: 0.4em;
  width: 16px;
  height: 12px;
  vertical-align: text-top;
}

.axis-icon.hidden {
  display: none;
}

.axis-icon.vertical {
  transform: rotate(90deg);
}

/*# sourceURL=queryContainer.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./panels/elements/components/stylePropertyEditor.css.js":
/*!***************************************************************!*\
  !*** ./panels/elements/components/stylePropertyEditor.css.js ***!
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

.container {
  padding: 12px;
  min-width: 170px;
}

.row {
  padding: 0;
  color: var(--sys-color-on-surface);
  padding-bottom: 16px;
}

.row:last-child {
  padding-bottom: 0;
}

.property {
  padding-bottom: 4px;
  white-space: nowrap;
}

.property-name {
  color: var(--sys-color-token-property-special);
}

.property-value {
  color: var(--sys-color-on-surface);
}

.property-value.not-authored {
  color: var(--sys-color-state-disabled);
}

.buttons {
  display: flex;
  flex-direction: row;
}

.buttons > :first-child {
  border-radius: 3px 0 0 3px;
}

.buttons > :last-child {
  border-radius: 0 3px 3px 0;
}

.button {
  border: 1px solid var(--sys-color-neutral-outline);
  background-color: var(--sys-color-cdt-base-container);
  width: 24px;
  height: 24px;
  min-width: 24px;
  min-height: 24px;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.button:focus-visible {
  outline: auto 5px -webkit-focus-ring-color;
}

.button devtools-icon {
  color: var(--icon-default);
}

.button:hover devtools-icon {
  color: var(--icon-default-hover);
}

.button.selected devtools-icon {
  color: var(--icon-toggled);
}

/*# sourceURL=stylePropertyEditor.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);