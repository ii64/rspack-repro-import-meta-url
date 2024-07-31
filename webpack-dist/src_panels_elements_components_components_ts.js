"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_elements_components_components_ts"],{

/***/ "./src/panels/elements/components/AccessibilityTreeNode.ts":
/*!*****************************************************************!*\
  !*** ./src/panels/elements/components/AccessibilityTreeNode.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccessibilityTreeNode: () => (/* binding */ AccessibilityTreeNode)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../generated/protocol.js */ "./src/generated/protocol.ts");
/* harmony import */ var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/components/render_coordinator/render_coordinator.js */ "./src/ui/components/render_coordinator/render_coordinator.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './accessibilityTreeNode.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2021 The Chromium Authors. All rights reserved.
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
var _AccessibilityTreeNode_instances, _AccessibilityTreeNode_shadow, _AccessibilityTreeNode_ignored, _AccessibilityTreeNode_name, _AccessibilityTreeNode_role, _AccessibilityTreeNode_properties, _AccessibilityTreeNode_id, _AccessibilityTreeNode_render;






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
        case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Accessibility.AXValueType.Boolean:
        case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Accessibility.AXValueType.BooleanOrUndefined:
        case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Accessibility.AXValueType.String:
        case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Accessibility.AXValueType.Number:
            return true;
        default:
            return false;
    }
}
class AccessibilityTreeNode extends HTMLElement {
    constructor() {
        super(...arguments);
        _AccessibilityTreeNode_instances.add(this);
        _AccessibilityTreeNode_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _AccessibilityTreeNode_ignored.set(this, true);
        _AccessibilityTreeNode_name.set(this, '');
        _AccessibilityTreeNode_role.set(this, '');
        _AccessibilityTreeNode_properties.set(this, []);
        _AccessibilityTreeNode_id.set(this, '');
    }
    set data(data) {
        __classPrivateFieldSet(this, _AccessibilityTreeNode_ignored, data.ignored, "f");
        __classPrivateFieldSet(this, _AccessibilityTreeNode_name, data.name, "f");
        __classPrivateFieldSet(this, _AccessibilityTreeNode_role, data.role, "f");
        __classPrivateFieldSet(this, _AccessibilityTreeNode_properties, data.properties, "f");
        __classPrivateFieldSet(this, _AccessibilityTreeNode_id, data.id, "f");
        void __classPrivateFieldGet(this, _AccessibilityTreeNode_instances, "m", _AccessibilityTreeNode_render).call(this);
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _AccessibilityTreeNode_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './accessibilityTreeNode.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
    }
}
_AccessibilityTreeNode_shadow = new WeakMap(), _AccessibilityTreeNode_ignored = new WeakMap(), _AccessibilityTreeNode_name = new WeakMap(), _AccessibilityTreeNode_role = new WeakMap(), _AccessibilityTreeNode_properties = new WeakMap(), _AccessibilityTreeNode_id = new WeakMap(), _AccessibilityTreeNode_instances = new WeakSet(), _AccessibilityTreeNode_render = async function _AccessibilityTreeNode_render() {
    const role = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.html `<span class='role-value'>${truncateTextIfNeeded(__classPrivateFieldGet(this, _AccessibilityTreeNode_role, "f"))}</span>`;
    const name = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.html `"<span class='attribute-value'>${__classPrivateFieldGet(this, _AccessibilityTreeNode_name, "f")}</span>"`;
    const properties = __classPrivateFieldGet(this, _AccessibilityTreeNode_properties, "f").map(({ name, value }) => isPrintable(value.type) ?
        _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.html ` <span class='attribute-name'>${name}</span>:&nbsp;<span class='attribute-value'>${value.value}</span>` :
        _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.nothing);
    const content = __classPrivateFieldGet(this, _AccessibilityTreeNode_ignored, "f") ? _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.html `<span>${i18nString(UIStrings.ignored)}</span>` :
        _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.html `${role}&nbsp;${name}${properties}`;
    await _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_3__.RenderCoordinator.RenderCoordinator.instance().write(`Accessibility node ${__classPrivateFieldGet(this, _AccessibilityTreeNode_id, "f")} render`, () => {
        // clang-format off
        _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.html `<div class='container'>${content}</div>`, __classPrivateFieldGet(this, _AccessibilityTreeNode_shadow, "f"), { host: this });
        // clang-format on
    });
};
Object.defineProperty(AccessibilityTreeNode, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.literal `devtools-accessibility-tree-node`
});
customElements.define('devtools-accessibility-tree-node', AccessibilityTreeNode);


/***/ }),

/***/ "./src/panels/elements/components/AdornerManager.ts":
/*!**********************************************************!*\
  !*** ./src/panels/elements/components/AdornerManager.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdornerCategories: () => (/* binding */ AdornerCategories),
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
var _AdornerManager_instances, _AdornerManager_adornerSettings, _AdornerManager_settingStore, _AdornerManager_persistCurrentSettings, _AdornerManager_loadSettings, _AdornerManager_syncSettings;
var AdornerCategories;
(function (AdornerCategories) {
    AdornerCategories["SECURITY"] = "Security";
    AdornerCategories["LAYOUT"] = "Layout";
    AdornerCategories["DEFAULT"] = "Default";
})(AdornerCategories || (AdornerCategories = {}));
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
                category: AdornerCategories.LAYOUT,
                enabledByDefault: true,
            };
        case RegisteredAdorners.SUBGRID:
            return {
                name: 'subgrid',
                category: AdornerCategories.LAYOUT,
                enabledByDefault: true,
            };
        case RegisteredAdorners.FLEX:
            return {
                name: 'flex',
                category: AdornerCategories.LAYOUT,
                enabledByDefault: true,
            };
        case RegisteredAdorners.AD:
            return {
                name: 'ad',
                category: AdornerCategories.SECURITY,
                enabledByDefault: true,
            };
        case RegisteredAdorners.SCROLL_SNAP:
            return {
                name: 'scroll-snap',
                category: AdornerCategories.LAYOUT,
                enabledByDefault: true,
            };
        case RegisteredAdorners.CONTAINER:
            return {
                name: 'container',
                category: AdornerCategories.LAYOUT,
                enabledByDefault: true,
            };
        case RegisteredAdorners.SLOT:
            return {
                name: 'slot',
                category: AdornerCategories.LAYOUT,
                enabledByDefault: true,
            };
        case RegisteredAdorners.TOP_LAYER:
            return {
                name: 'top-layer',
                category: AdornerCategories.LAYOUT,
                enabledByDefault: true,
            };
        case RegisteredAdorners.REVEAL:
            return {
                name: 'reveal',
                category: AdornerCategories.DEFAULT,
                enabledByDefault: true,
            };
        case RegisteredAdorners.MEDIA:
            return {
                name: 'media',
                category: AdornerCategories.DEFAULT,
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
    return adornerNameToCategoryMap.get(name) || AdornerCategories.DEFAULT;
}
const DefaultAdornerSettings = Object.values(RegisteredAdorners).map(getRegisteredAdorner).map(({ name, enabledByDefault }) => ({
    adorner: name,
    isEnabled: enabledByDefault,
}));
class AdornerManager {
    constructor(settingStore) {
        _AdornerManager_instances.add(this);
        _AdornerManager_adornerSettings.set(this, new Map());
        _AdornerManager_settingStore.set(this, void 0);
        __classPrivateFieldSet(this, _AdornerManager_settingStore, settingStore, "f");
        __classPrivateFieldGet(this, _AdornerManager_instances, "m", _AdornerManager_syncSettings).call(this);
    }
    updateSettings(settings) {
        __classPrivateFieldSet(this, _AdornerManager_adornerSettings, settings, "f");
        __classPrivateFieldGet(this, _AdornerManager_instances, "m", _AdornerManager_persistCurrentSettings).call(this);
    }
    getSettings() {
        return __classPrivateFieldGet(this, _AdornerManager_adornerSettings, "f");
    }
    isAdornerEnabled(adornerText) {
        return __classPrivateFieldGet(this, _AdornerManager_adornerSettings, "f").get(adornerText) || false;
    }
}
_AdornerManager_adornerSettings = new WeakMap(), _AdornerManager_settingStore = new WeakMap(), _AdornerManager_instances = new WeakSet(), _AdornerManager_persistCurrentSettings = function _AdornerManager_persistCurrentSettings() {
    const settingList = [];
    for (const [adorner, isEnabled] of __classPrivateFieldGet(this, _AdornerManager_adornerSettings, "f")) {
        settingList.push({ adorner, isEnabled });
    }
    __classPrivateFieldGet(this, _AdornerManager_settingStore, "f").set(settingList);
}, _AdornerManager_loadSettings = function _AdornerManager_loadSettings() {
    const settingList = __classPrivateFieldGet(this, _AdornerManager_settingStore, "f").get();
    for (const setting of settingList) {
        __classPrivateFieldGet(this, _AdornerManager_adornerSettings, "f").set(setting.adorner, setting.isEnabled);
    }
}, _AdornerManager_syncSettings = function _AdornerManager_syncSettings() {
    __classPrivateFieldGet(this, _AdornerManager_instances, "m", _AdornerManager_loadSettings).call(this);
    // Prune outdated adorners and add new ones to the persistence.
    const outdatedAdorners = new Set(__classPrivateFieldGet(this, _AdornerManager_adornerSettings, "f").keys());
    for (const { adorner, isEnabled } of DefaultAdornerSettings) {
        outdatedAdorners.delete(adorner);
        if (!__classPrivateFieldGet(this, _AdornerManager_adornerSettings, "f").has(adorner)) {
            __classPrivateFieldGet(this, _AdornerManager_adornerSettings, "f").set(adorner, isEnabled);
        }
    }
    for (const outdatedAdorner of outdatedAdorners) {
        __classPrivateFieldGet(this, _AdornerManager_adornerSettings, "f").delete(outdatedAdorner);
    }
    __classPrivateFieldGet(this, _AdornerManager_instances, "m", _AdornerManager_persistCurrentSettings).call(this);
};
const OrderedAdornerCategories = [
    AdornerCategories.SECURITY,
    AdornerCategories.LAYOUT,
    AdornerCategories.DEFAULT,
];
// Use idx + 1 for the order to avoid JavaScript's 0 == false issue
const AdornerCategoryOrder = new Map(OrderedAdornerCategories.map((category, idx) => [category, idx + 1]));
function compareAdornerNamesByCategory(nameA, nameB) {
    const orderA = AdornerCategoryOrder.get(getCategoryFromAdornerName(nameA)) || Number.POSITIVE_INFINITY;
    const orderB = AdornerCategoryOrder.get(getCategoryFromAdornerName(nameB)) || Number.POSITIVE_INFINITY;
    return orderA - orderB;
}


/***/ }),

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


/***/ }),

/***/ "./src/panels/elements/components/AnchorFunctionLinkSwatch.ts":
/*!********************************************************************!*\
  !*** ./src/panels/elements/components/AnchorFunctionLinkSwatch.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnchorFunctionLinkSwatch: () => (/* binding */ AnchorFunctionLinkSwatch)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/legacy/components/inline_editor/inline_editor.js */ "./src/ui/legacy/components/inline_editor/inline_editor.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './anchorFunctionLinkSwatch.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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
var _AnchorFunctionLinkSwatch_instances, _AnchorFunctionLinkSwatch_shadow, _AnchorFunctionLinkSwatch_data, _AnchorFunctionLinkSwatch_handleIconClick, _AnchorFunctionLinkSwatch_renderIdentifierLink, _AnchorFunctionLinkSwatch_renderIconLink;
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
    constructor(data) {
        super();
        _AnchorFunctionLinkSwatch_instances.add(this);
        _AnchorFunctionLinkSwatch_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _AnchorFunctionLinkSwatch_data.set(this, void 0);
        __classPrivateFieldSet(this, _AnchorFunctionLinkSwatch_data, data, "f");
    }
    dataForTest() {
        return __classPrivateFieldGet(this, _AnchorFunctionLinkSwatch_data, "f");
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _AnchorFunctionLinkSwatch_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './anchorFunctionLinkSwatch.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
        this.render();
    }
    set data(data) {
        __classPrivateFieldSet(this, _AnchorFunctionLinkSwatch_data, data, "f");
        this.render();
    }
    render() {
        if (!__classPrivateFieldGet(this, _AnchorFunctionLinkSwatch_data, "f").identifier && !__classPrivateFieldGet(this, _AnchorFunctionLinkSwatch_data, "f").anchorNode) {
            return;
        }
        if (__classPrivateFieldGet(this, _AnchorFunctionLinkSwatch_data, "f").identifier) {
            // clang-format off
            render(html `${__classPrivateFieldGet(this, _AnchorFunctionLinkSwatch_instances, "m", _AnchorFunctionLinkSwatch_renderIdentifierLink).call(this)}${__classPrivateFieldGet(this, _AnchorFunctionLinkSwatch_data, "f").needsSpace ? ' ' : ''}`, __classPrivateFieldGet(this, _AnchorFunctionLinkSwatch_shadow, "f"), { host: this });
            // clang-format on
        }
        else {
            // clang-format off
            render(html `${__classPrivateFieldGet(this, _AnchorFunctionLinkSwatch_instances, "m", _AnchorFunctionLinkSwatch_renderIconLink).call(this)}${__classPrivateFieldGet(this, _AnchorFunctionLinkSwatch_data, "f").needsSpace ? ' ' : ''}`, __classPrivateFieldGet(this, _AnchorFunctionLinkSwatch_shadow, "f"), { host: this });
            // clang-format on
        }
    }
}
_AnchorFunctionLinkSwatch_shadow = new WeakMap(), _AnchorFunctionLinkSwatch_data = new WeakMap(), _AnchorFunctionLinkSwatch_instances = new WeakSet(), _AnchorFunctionLinkSwatch_handleIconClick = function _AnchorFunctionLinkSwatch_handleIconClick(ev) {
    ev.stopPropagation();
    __classPrivateFieldGet(this, _AnchorFunctionLinkSwatch_data, "f").onLinkActivate();
}, _AnchorFunctionLinkSwatch_renderIdentifierLink = function _AnchorFunctionLinkSwatch_renderIdentifierLink() {
    // clang-format off
    return html `<${_ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_2__.LinkSwatch.LinkSwatch.litTagName}
      @mouseenter=${__classPrivateFieldGet(this, _AnchorFunctionLinkSwatch_data, "f").onMouseEnter}
      @mouseleave=${__classPrivateFieldGet(this, _AnchorFunctionLinkSwatch_data, "f").onMouseLeave}
      .data=${{
        text: __classPrivateFieldGet(this, _AnchorFunctionLinkSwatch_data, "f").identifier,
        isDefined: Boolean(__classPrivateFieldGet(this, _AnchorFunctionLinkSwatch_data, "f").anchorNode),
        jslogContext: 'anchor-link',
        onLinkActivate: __classPrivateFieldGet(this, _AnchorFunctionLinkSwatch_data, "f").onLinkActivate,
    }}></${_ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_2__.LinkSwatch.LinkSwatch.litTagName}>`;
    // clang-format on
}, _AnchorFunctionLinkSwatch_renderIconLink = function _AnchorFunctionLinkSwatch_renderIconLink() {
    // clang-format off
    return html `<${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__.Icon.Icon.litTagName}
      role='button'
      title=${i18nString(UIStrings.jumpToAnchorNode)}
      class='icon-link'
      name='open-externally'
      jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.action('jump-to-anchor-node').track({ click: true })}
      @mouseenter=${__classPrivateFieldGet(this, _AnchorFunctionLinkSwatch_data, "f").onMouseEnter}
      @mouseleave=${__classPrivateFieldGet(this, _AnchorFunctionLinkSwatch_data, "f").onMouseLeave}
      @mousedown=${(ev) => ev.stopPropagation()}
      @click=${__classPrivateFieldGet(this, _AnchorFunctionLinkSwatch_instances, "m", _AnchorFunctionLinkSwatch_handleIconClick)}
    ></${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__.Icon.Icon.litTagName}>`;
    // clang-format on
};
Object.defineProperty(AnchorFunctionLinkSwatch, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.literal `devtools-anchor-function-link-swatch`
});
customElements.define('devtools-anchor-function-link-swatch', AnchorFunctionLinkSwatch);


/***/ }),

/***/ "./src/panels/elements/components/CSSHintDetailsView.ts":
/*!**************************************************************!*\
  !*** ./src/panels/elements/components/CSSHintDetailsView.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSHintDetailsView: () => (/* binding */ CSSHintDetailsView)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './cssHintDetailsView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2022 The Chromium Authors. All rights reserved.
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
var _CSSHintDetailsView_instances, _CSSHintDetailsView_shadow, _CSSHintDetailsView_authoringHint, _CSSHintDetailsView_render;



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
    constructor(authoringHint) {
        super();
        _CSSHintDetailsView_instances.add(this);
        _CSSHintDetailsView_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _CSSHintDetailsView_authoringHint.set(this, void 0);
        __classPrivateFieldSet(this, _CSSHintDetailsView_authoringHint, authoringHint, "f");
        __classPrivateFieldGet(this, _CSSHintDetailsView_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './cssHintDetailsView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
        __classPrivateFieldGet(this, _CSSHintDetailsView_instances, "m", _CSSHintDetailsView_render).call(this);
    }
}
_CSSHintDetailsView_shadow = new WeakMap(), _CSSHintDetailsView_authoringHint = new WeakMap(), _CSSHintDetailsView_instances = new WeakSet(), _CSSHintDetailsView_render = function _CSSHintDetailsView_render() {
    const link = __classPrivateFieldGet(this, _CSSHintDetailsView_authoringHint, "f").getLearnMoreLink();
    // clang-format off
    render(html `
        <div class="hint-popup-wrapper">
          <div class="hint-popup-reason">
            ${Directives.unsafeHTML(__classPrivateFieldGet(this, _CSSHintDetailsView_authoringHint, "f").getMessage())}
          </div>
          ${__classPrivateFieldGet(this, _CSSHintDetailsView_authoringHint, "f").getPossibleFixMessage() ? html `
              <div class="hint-popup-possible-fix">
                  ${Directives.unsafeHTML(__classPrivateFieldGet(this, _CSSHintDetailsView_authoringHint, "f").getPossibleFixMessage())}
                  ${link ? html `
                      <x-link id="learn-more" href=${link} class="clickable underlined unbreakable-text"}>
                          ${i18nString(UIStrings.learnMore)}
                      </x-link>
                  ` : ''}
              </div>
          ` : ''}
        </div>
      `, __classPrivateFieldGet(this, _CSSHintDetailsView_shadow, "f"), {
        host: this,
    });
    // clang-format on
};
Object.defineProperty(CSSHintDetailsView, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.literal `devtools-css-hint-details-view`
});
customElements.define('devtools-css-hint-details-view', CSSHintDetailsView);


/***/ }),

/***/ "./src/panels/elements/components/CSSPropertyDocsView.ts":
/*!***************************************************************!*\
  !*** ./src/panels/elements/components/CSSPropertyDocsView.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSPropertyDocsView: () => (/* binding */ CSSPropertyDocsView)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _ui_components_input_input_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/input/input.js */ "./src/ui/components/input/input.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './cssPropertyDocsView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2023 The Chromium Authors. All rights reserved.
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
var _CSSPropertyDocsView_instances, _CSSPropertyDocsView_shadow, _CSSPropertyDocsView_cssProperty, _CSSPropertyDocsView_dontShowChanged, _CSSPropertyDocsView_render;






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
    constructor(cssProperty) {
        super();
        _CSSPropertyDocsView_instances.add(this);
        _CSSPropertyDocsView_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _CSSPropertyDocsView_cssProperty.set(this, void 0);
        __classPrivateFieldSet(this, _CSSPropertyDocsView_cssProperty, cssProperty, "f");
        __classPrivateFieldGet(this, _CSSPropertyDocsView_shadow, "f").adoptedStyleSheets = [_ui_components_input_input_js__WEBPACK_IMPORTED_MODULE_2__.checkboxStyles, Object(function webpackMissingModule() { var e = new Error("Cannot find module './cssPropertyDocsView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
        __classPrivateFieldGet(this, _CSSPropertyDocsView_instances, "m", _CSSPropertyDocsView_render).call(this);
    }
}
_CSSPropertyDocsView_shadow = new WeakMap(), _CSSPropertyDocsView_cssProperty = new WeakMap(), _CSSPropertyDocsView_instances = new WeakSet(), _CSSPropertyDocsView_dontShowChanged = function _CSSPropertyDocsView_dontShowChanged(e) {
    const showDocumentation = !e.target.checked;
    _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance()
        .moduleSetting('show-css-property-documentation-on-hover')
        .set(showDocumentation);
}, _CSSPropertyDocsView_render = function _CSSPropertyDocsView_render() {
    const description = __classPrivateFieldGet(this, _CSSPropertyDocsView_cssProperty, "f").description;
    const link = __classPrivateFieldGet(this, _CSSPropertyDocsView_cssProperty, "f").references?.[0].url;
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
              <input type="checkbox" @change=${__classPrivateFieldGet(this, _CSSPropertyDocsView_instances, "m", _CSSPropertyDocsView_dontShowChanged)} jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.toggle('css-property-doc').track({ change: true })}/>
              ${i18nString(UIStrings.dontShow)}
            </label>
          </div>
        ` : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.nothing}
      </div>
    `, __classPrivateFieldGet(this, _CSSPropertyDocsView_shadow, "f"), {
        host: this,
    });
    // clang-format on
};
Object.defineProperty(CSSPropertyDocsView, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.literal `devtools-css-property-docs-view`
});
customElements.define('devtools-css-property-docs-view', CSSPropertyDocsView);


/***/ }),

/***/ "./src/panels/elements/components/CSSQuery.ts":
/*!****************************************************!*\
  !*** ./src/panels/elements/components/CSSQuery.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSQuery: () => (/* binding */ CSSQuery)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../ui/legacy/inspectorCommon.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './cssQuery.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright (c) 2021 The Chromium Authors. All rights reserved.
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
var _CSSQuery_instances, _CSSQuery_shadow, _CSSQuery_queryPrefix, _CSSQuery_queryName, _CSSQuery_queryText, _CSSQuery_onQueryTextClick, _CSSQuery_jslogContext, _CSSQuery_render;
// eslint-disable-next-line rulesdir/es_modules_import




const { render, html } = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__;
class CSSQuery extends HTMLElement {
    constructor() {
        super(...arguments);
        _CSSQuery_instances.add(this);
        _CSSQuery_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _CSSQuery_queryPrefix.set(this, '');
        _CSSQuery_queryName.set(this, void 0);
        _CSSQuery_queryText.set(this, '');
        _CSSQuery_onQueryTextClick.set(this, void 0);
        _CSSQuery_jslogContext.set(this, void 0);
    }
    set data(data) {
        __classPrivateFieldSet(this, _CSSQuery_queryPrefix, data.queryPrefix, "f");
        __classPrivateFieldSet(this, _CSSQuery_queryName, data.queryName, "f");
        __classPrivateFieldSet(this, _CSSQuery_queryText, data.queryText, "f");
        __classPrivateFieldSet(this, _CSSQuery_onQueryTextClick, data.onQueryTextClick, "f");
        __classPrivateFieldSet(this, _CSSQuery_jslogContext, data.jslogContext, "f");
        __classPrivateFieldGet(this, _CSSQuery_instances, "m", _CSSQuery_render).call(this);
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _CSSQuery_shadow, "f").adoptedStyleSheets = [
            Object(function webpackMissingModule() { var e = new Error("Cannot find module './cssQuery.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../ui/legacy/inspectorCommon.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
        ];
    }
}
_CSSQuery_shadow = new WeakMap(), _CSSQuery_queryPrefix = new WeakMap(), _CSSQuery_queryName = new WeakMap(), _CSSQuery_queryText = new WeakMap(), _CSSQuery_onQueryTextClick = new WeakMap(), _CSSQuery_jslogContext = new WeakMap(), _CSSQuery_instances = new WeakSet(), _CSSQuery_render = function _CSSQuery_render() {
    const queryClasses = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.Directives.classMap({
        query: true,
        editable: Boolean(__classPrivateFieldGet(this, _CSSQuery_onQueryTextClick, "f")),
    });
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    const queryText = html `
      <span class="query-text" @click=${__classPrivateFieldGet(this, _CSSQuery_onQueryTextClick, "f")}>${__classPrivateFieldGet(this, _CSSQuery_queryText, "f")}</span>
    `;
    render(html `
      <div class=${queryClasses} jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_2__.cssRuleHeader(__classPrivateFieldGet(this, _CSSQuery_jslogContext, "f")).track({ click: true, change: true })}>
        <slot name="indent"></slot>${__classPrivateFieldGet(this, _CSSQuery_queryPrefix, "f") ? html `<span>${__classPrivateFieldGet(this, _CSSQuery_queryPrefix, "f") + ' '}</span>` : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.nothing}${__classPrivateFieldGet(this, _CSSQuery_queryName, "f") ? html `<span>${__classPrivateFieldGet(this, _CSSQuery_queryName, "f") + ' '}</span>` : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.nothing}${queryText} {
      </div>
    `, __classPrivateFieldGet(this, _CSSQuery_shadow, "f"), {
        host: this,
    });
    // clang-format on
};
Object.defineProperty(CSSQuery, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.literal `devtools-css-query`
});
customElements.define('devtools-css-query', CSSQuery);


/***/ }),

/***/ "./src/panels/elements/components/CSSVariableValueView.ts":
/*!****************************************************************!*\
  !*** ./src/panels/elements/components/CSSVariableValueView.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSVariableParserError: () => (/* binding */ CSSVariableParserError),
/* harmony export */   CSSVariableValueView: () => (/* binding */ CSSVariableValueView)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './cssVariableValueView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _CSSVariableParserError_instances, _CSSVariableParserError_shadow, _CSSVariableParserError_render, _CSSVariableValueView_instances, _CSSVariableValueView_shadow, _CSSVariableValueView_render;



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
    constructor(details) {
        super();
        _CSSVariableParserError_instances.add(this);
        _CSSVariableParserError_shadow.set(this, this.attachShadow({ mode: 'open' }));
        __classPrivateFieldGet(this, _CSSVariableParserError_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './cssVariableValueView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
        __classPrivateFieldGet(this, _CSSVariableParserError_instances, "m", _CSSVariableParserError_render).call(this, details);
    }
}
_CSSVariableParserError_shadow = new WeakMap(), _CSSVariableParserError_instances = new WeakSet(), _CSSVariableParserError_render = function _CSSVariableParserError_render(details) {
    const type = html `<span class="monospace css-property">${details.registration.syntax()}</span>`;
    render(html `
      <div class="variable-value-popup-wrapper">
        ${i18nTemplate(UIStrings.invalidPropertyValue, { type })}
        ${getLinkSection(details)}
      </div>`, __classPrivateFieldGet(this, _CSSVariableParserError_shadow, "f"), {
        host: this,
    });
};
Object.defineProperty(CSSVariableParserError, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.literal `devtools-css-variable-parser-error`
});
class CSSVariableValueView extends HTMLElement {
    constructor({ variableName, value, details, }) {
        super();
        _CSSVariableValueView_instances.add(this);
        _CSSVariableValueView_shadow.set(this, this.attachShadow({ mode: 'open' }));
        Object.defineProperty(this, "variableName", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "value", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "details", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        __classPrivateFieldGet(this, _CSSVariableValueView_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './cssVariableValueView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
        this.variableName = variableName;
        this.value = value;
        this.details = details;
        __classPrivateFieldGet(this, _CSSVariableValueView_instances, "m", _CSSVariableValueView_render).call(this);
    }
}
_CSSVariableValueView_shadow = new WeakMap(), _CSSVariableValueView_instances = new WeakSet(), _CSSVariableValueView_render = function _CSSVariableValueView_render() {
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
             `, __classPrivateFieldGet(this, _CSSVariableValueView_shadow, "f"), {
        host: this,
    });
};
Object.defineProperty(CSSVariableValueView, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.literal `devtools-css-variable-value-view`
});
customElements.define('devtools-css-variable-value-view', CSSVariableValueView);
customElements.define('devtools-css-variable-parser-error', CSSVariableParserError);


/***/ }),

/***/ "./src/panels/elements/components/ComputedStyleProperty.ts":
/*!*****************************************************************!*\
  !*** ./src/panels/elements/components/ComputedStyleProperty.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComputedStyleProperty: () => (/* binding */ ComputedStyleProperty),
/* harmony export */   NavigateToSourceEvent: () => (/* binding */ NavigateToSourceEvent)
/* harmony export */ });
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './computedStyleProperty.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
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
var _ComputedStyleProperty_instances, _ComputedStyleProperty_shadow, _ComputedStyleProperty_inherited, _ComputedStyleProperty_traceable, _ComputedStyleProperty_onNavigateToSourceClick, _ComputedStyleProperty_render;



const { render, html } = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__;
class NavigateToSourceEvent extends Event {
    constructor() {
        super(NavigateToSourceEvent.eventName, { bubbles: true, composed: true });
    }
}
Object.defineProperty(NavigateToSourceEvent, "eventName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'onnavigatetosource'
});
class ComputedStyleProperty extends HTMLElement {
    constructor() {
        super(...arguments);
        _ComputedStyleProperty_instances.add(this);
        _ComputedStyleProperty_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _ComputedStyleProperty_inherited.set(this, false);
        _ComputedStyleProperty_traceable.set(this, false);
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _ComputedStyleProperty_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './computedStyleProperty.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
        __classPrivateFieldGet(this, _ComputedStyleProperty_instances, "m", _ComputedStyleProperty_render).call(this);
    }
    set inherited(inherited) {
        if (inherited === __classPrivateFieldGet(this, _ComputedStyleProperty_inherited, "f")) {
            return;
        }
        __classPrivateFieldSet(this, _ComputedStyleProperty_inherited, inherited, "f");
        __classPrivateFieldGet(this, _ComputedStyleProperty_instances, "m", _ComputedStyleProperty_render).call(this);
    }
    set traceable(traceable) {
        if (traceable === __classPrivateFieldGet(this, _ComputedStyleProperty_traceable, "f")) {
            return;
        }
        __classPrivateFieldSet(this, _ComputedStyleProperty_traceable, traceable, "f");
        __classPrivateFieldGet(this, _ComputedStyleProperty_instances, "m", _ComputedStyleProperty_render).call(this);
    }
}
_ComputedStyleProperty_shadow = new WeakMap(), _ComputedStyleProperty_inherited = new WeakMap(), _ComputedStyleProperty_traceable = new WeakMap(), _ComputedStyleProperty_instances = new WeakSet(), _ComputedStyleProperty_onNavigateToSourceClick = function _ComputedStyleProperty_onNavigateToSourceClick() {
    this.dispatchEvent(new NavigateToSourceEvent());
}, _ComputedStyleProperty_render = function _ComputedStyleProperty_render() {
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    render(html `
      <div class="computed-style-property ${__classPrivateFieldGet(this, _ComputedStyleProperty_inherited, "f") ? 'inherited' : ''}">
        <div class="property-name">
          <slot name="name"></slot>
        </div>
        <span class="hidden" aria-hidden="false">: </span>
        ${__classPrivateFieldGet(this, _ComputedStyleProperty_traceable, "f") ?
        html `<span class="goto" @click=${__classPrivateFieldGet(this, _ComputedStyleProperty_instances, "m", _ComputedStyleProperty_onNavigateToSourceClick)} jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_1__.action('elements.jump-to-style').track({ click: true })}></span>` :
        null}
        <div class="property-value">
          <slot name="value"></slot>
        </div>
        <span class="hidden" aria-hidden="false">;</span>
      </div>
    `, __classPrivateFieldGet(this, _ComputedStyleProperty_shadow, "f"), {
        host: this,
    });
    // clang-format on
};
Object.defineProperty(ComputedStyleProperty, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal `devtools-computed-style-property`
});
customElements.define('devtools-computed-style-property', ComputedStyleProperty);


/***/ }),

/***/ "./src/panels/elements/components/ComputedStyleTrace.ts":
/*!**************************************************************!*\
  !*** ./src/panels/elements/components/ComputedStyleTrace.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComputedStyleTrace: () => (/* binding */ ComputedStyleTrace)
/* harmony export */ });
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './computedStyleTrace.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
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
var _ComputedStyleTrace_instances, _ComputedStyleTrace_shadow, _ComputedStyleTrace_selector, _ComputedStyleTrace_active, _ComputedStyleTrace_onNavigateToSource, _ComputedStyleTrace_ruleOriginNode, _ComputedStyleTrace_render;



const { render, html } = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__;
class ComputedStyleTrace extends HTMLElement {
    constructor() {
        super(...arguments);
        _ComputedStyleTrace_instances.add(this);
        _ComputedStyleTrace_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _ComputedStyleTrace_selector.set(this, '');
        _ComputedStyleTrace_active.set(this, false);
        _ComputedStyleTrace_onNavigateToSource.set(this, () => { });
        _ComputedStyleTrace_ruleOriginNode.set(this, void 0);
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _ComputedStyleTrace_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './computedStyleTrace.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__.UIUtils.injectCoreStyles(__classPrivateFieldGet(this, _ComputedStyleTrace_shadow, "f"));
    }
    set data(data) {
        __classPrivateFieldSet(this, _ComputedStyleTrace_selector, data.selector, "f");
        __classPrivateFieldSet(this, _ComputedStyleTrace_active, data.active, "f");
        __classPrivateFieldSet(this, _ComputedStyleTrace_onNavigateToSource, data.onNavigateToSource, "f");
        __classPrivateFieldSet(this, _ComputedStyleTrace_ruleOriginNode, data.ruleOriginNode, "f");
        __classPrivateFieldGet(this, _ComputedStyleTrace_instances, "m", _ComputedStyleTrace_render).call(this);
    }
}
_ComputedStyleTrace_shadow = new WeakMap(), _ComputedStyleTrace_selector = new WeakMap(), _ComputedStyleTrace_active = new WeakMap(), _ComputedStyleTrace_onNavigateToSource = new WeakMap(), _ComputedStyleTrace_ruleOriginNode = new WeakMap(), _ComputedStyleTrace_instances = new WeakSet(), _ComputedStyleTrace_render = function _ComputedStyleTrace_render() {
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    render(html `
      <div class="computed-style-trace ${__classPrivateFieldGet(this, _ComputedStyleTrace_active, "f") ? 'active' : 'inactive'}">
        <span class="goto" @click=${__classPrivateFieldGet(this, _ComputedStyleTrace_onNavigateToSource, "f")}></span>
        <slot name="trace-value" @click=${__classPrivateFieldGet(this, _ComputedStyleTrace_onNavigateToSource, "f")}></slot>
        <span class="trace-selector">${__classPrivateFieldGet(this, _ComputedStyleTrace_selector, "f")}</span>
        <span class="trace-link">${__classPrivateFieldGet(this, _ComputedStyleTrace_ruleOriginNode, "f")}</span>
      </div>
    `, __classPrivateFieldGet(this, _ComputedStyleTrace_shadow, "f"), {
        host: this,
    });
    // clang-format on
};
Object.defineProperty(ComputedStyleTrace, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.literal `devtools-computed-style-trace`
});
customElements.define('devtools-computed-style-trace', ComputedStyleTrace);


/***/ }),

/***/ "./src/panels/elements/components/ElementsTreeExpandButton.ts":
/*!********************************************************************!*\
  !*** ./src/panels/elements/components/ElementsTreeExpandButton.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ElementsTreeExpandButton: () => (/* binding */ ElementsTreeExpandButton)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './elementsTreeExpandButton.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2022 The Chromium Authors. All rights reserved.
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
var _ElementsTreeExpandButton_instances, _ElementsTreeExpandButton_shadow, _ElementsTreeExpandButton_clickHandler, _ElementsTreeExpandButton_update, _ElementsTreeExpandButton_render;





const UIStrings = {
    /**
     *@description Aria label for a button expanding collapsed subtree
     */
    expand: 'Expand',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/elements/components/ElementsTreeExpandButton.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
class ElementsTreeExpandButton extends HTMLElement {
    constructor() {
        super(...arguments);
        _ElementsTreeExpandButton_instances.add(this);
        _ElementsTreeExpandButton_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _ElementsTreeExpandButton_clickHandler.set(this, () => { });
    }
    set data(data) {
        __classPrivateFieldSet(this, _ElementsTreeExpandButton_clickHandler, data.clickHandler, "f");
        __classPrivateFieldGet(this, _ElementsTreeExpandButton_instances, "m", _ElementsTreeExpandButton_update).call(this);
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _ElementsTreeExpandButton_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './elementsTreeExpandButton.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
    }
}
_ElementsTreeExpandButton_shadow = new WeakMap(), _ElementsTreeExpandButton_clickHandler = new WeakMap(), _ElementsTreeExpandButton_instances = new WeakSet(), _ElementsTreeExpandButton_update = function _ElementsTreeExpandButton_update() {
    __classPrivateFieldGet(this, _ElementsTreeExpandButton_instances, "m", _ElementsTreeExpandButton_render).call(this);
}, _ElementsTreeExpandButton_render = function _ElementsTreeExpandButton_render() {
    // clang-format off
    // This button's innerText will be tested by e2e test and blink layout tests.
    // It can't have any other characters like '\n' or space, otherwise it will break tests.
    _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.html `<button
        class="expand-button"
        tabindex="-1"
        aria-label=${i18nString(UIStrings.expand)}
        jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.action('expand').track({ click: true })}
        @click=${__classPrivateFieldGet(this, _ElementsTreeExpandButton_clickHandler, "f")}><${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__.Icon.Icon.litTagName} name="dots-horizontal"></${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__.Icon.Icon.litTagName}></button>`, __classPrivateFieldGet(this, _ElementsTreeExpandButton_shadow, "f"), { host: this });
    // clang-format on
};
Object.defineProperty(ElementsTreeExpandButton, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.literal `devtools-elements-tree-expand-button`
});
customElements.define('devtools-elements-tree-expand-button', ElementsTreeExpandButton);


/***/ }),

/***/ "./src/panels/elements/components/Helper.ts":
/*!**************************************************!*\
  !*** ./src/panels/elements/components/Helper.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   legacyNodeToElementsComponentsNode: () => (/* binding */ legacyNodeToElementsComponentsNode)
/* harmony export */ });
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
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


/***/ }),

/***/ "./src/panels/elements/components/LayoutPaneUtils.ts":
/*!***********************************************************!*\
  !*** ./src/panels/elements/components/LayoutPaneUtils.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



/***/ }),

/***/ "./src/panels/elements/components/QueryContainer.ts":
/*!**********************************************************!*\
  !*** ./src/panels/elements/components/QueryContainer.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QueriedSizeRequestedEvent: () => (/* binding */ QueriedSizeRequestedEvent),
/* harmony export */   QueryContainer: () => (/* binding */ QueryContainer)
/* harmony export */ });
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _ui_components_node_text_node_text_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/node_text/node_text.js */ "./src/ui/components/node_text/node_text.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './queryContainer.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright (c) 2021 The Chromium Authors. All rights reserved.
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
var _QueryContainer_instances, _QueryContainer_shadow, _QueryContainer_queryName, _QueryContainer_container, _QueryContainer_onContainerLinkClick, _QueryContainer_isContainerLinkHovered, _QueryContainer_queriedSizeDetails, _QueryContainer_onContainerLinkMouseEnter, _QueryContainer_onContainerLinkMouseLeave, _QueryContainer_render, _QueryContainer_renderQueriedSizeDetails;






const { render, html } = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__;
const { PhysicalAxis, QueryAxis } = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CSSContainerQuery;
class QueriedSizeRequestedEvent extends Event {
    constructor() {
        super(QueriedSizeRequestedEvent.eventName, {});
    }
}
Object.defineProperty(QueriedSizeRequestedEvent, "eventName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'queriedsizerequested'
});
class QueryContainer extends HTMLElement {
    constructor() {
        super(...arguments);
        _QueryContainer_instances.add(this);
        _QueryContainer_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _QueryContainer_queryName.set(this, void 0);
        _QueryContainer_container.set(this, void 0);
        _QueryContainer_onContainerLinkClick.set(this, void 0);
        _QueryContainer_isContainerLinkHovered.set(this, false);
        _QueryContainer_queriedSizeDetails.set(this, void 0);
    }
    set data(data) {
        __classPrivateFieldSet(this, _QueryContainer_queryName, data.queryName, "f");
        __classPrivateFieldSet(this, _QueryContainer_container, data.container, "f");
        __classPrivateFieldSet(this, _QueryContainer_onContainerLinkClick, data.onContainerLinkClick, "f");
        __classPrivateFieldGet(this, _QueryContainer_instances, "m", _QueryContainer_render).call(this);
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _QueryContainer_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './queryContainer.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
    }
    updateContainerQueriedSizeDetails(details) {
        __classPrivateFieldSet(this, _QueryContainer_queriedSizeDetails, details, "f");
        __classPrivateFieldGet(this, _QueryContainer_instances, "m", _QueryContainer_render).call(this);
    }
}
_QueryContainer_shadow = new WeakMap(), _QueryContainer_queryName = new WeakMap(), _QueryContainer_container = new WeakMap(), _QueryContainer_onContainerLinkClick = new WeakMap(), _QueryContainer_isContainerLinkHovered = new WeakMap(), _QueryContainer_queriedSizeDetails = new WeakMap(), _QueryContainer_instances = new WeakSet(), _QueryContainer_onContainerLinkMouseEnter = async function _QueryContainer_onContainerLinkMouseEnter() {
    __classPrivateFieldGet(this, _QueryContainer_container, "f")?.highlightNode('container-outline');
    __classPrivateFieldSet(this, _QueryContainer_isContainerLinkHovered, true, "f");
    this.dispatchEvent(new QueriedSizeRequestedEvent());
}, _QueryContainer_onContainerLinkMouseLeave = function _QueryContainer_onContainerLinkMouseLeave() {
    __classPrivateFieldGet(this, _QueryContainer_container, "f")?.clearHighlight();
    __classPrivateFieldSet(this, _QueryContainer_isContainerLinkHovered, false, "f");
    __classPrivateFieldGet(this, _QueryContainer_instances, "m", _QueryContainer_render).call(this);
}, _QueryContainer_render = function _QueryContainer_render() {
    if (!__classPrivateFieldGet(this, _QueryContainer_container, "f")) {
        return;
    }
    let idToDisplay, classesToDisplay;
    if (!__classPrivateFieldGet(this, _QueryContainer_queryName, "f")) {
        idToDisplay = __classPrivateFieldGet(this, _QueryContainer_container, "f").getAttribute('id');
        classesToDisplay = __classPrivateFieldGet(this, _QueryContainer_container, "f").getAttribute('class')?.split(/\s+/).filter(Boolean);
    }
    const nodeTitle = __classPrivateFieldGet(this, _QueryContainer_queryName, "f") || __classPrivateFieldGet(this, _QueryContainer_container, "f").nodeNameNicelyCased;
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    // eslint-disable-next-line rulesdir/ban_a_tags_in_lit_html
    render(html `
      →
      <a href="#"
        draggable=false
        class="container-link"
        jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.cssRuleHeader('container-query').track({ click: true })}
        @click=${__classPrivateFieldGet(this, _QueryContainer_onContainerLinkClick, "f")}
        @mouseenter=${__classPrivateFieldGet(this, _QueryContainer_instances, "m", _QueryContainer_onContainerLinkMouseEnter)}
        @mouseleave=${__classPrivateFieldGet(this, _QueryContainer_instances, "m", _QueryContainer_onContainerLinkMouseLeave)}
      ><${_ui_components_node_text_node_text_js__WEBPACK_IMPORTED_MODULE_2__.NodeText.NodeText.litTagName}
          data-node-title=${nodeTitle}
          .data=${{
        nodeTitle,
        nodeId: idToDisplay,
        nodeClasses: classesToDisplay,
    }}></${_ui_components_node_text_node_text_js__WEBPACK_IMPORTED_MODULE_2__.NodeText.NodeText.litTagName}></a>
      ${__classPrivateFieldGet(this, _QueryContainer_isContainerLinkHovered, "f") ? __classPrivateFieldGet(this, _QueryContainer_instances, "m", _QueryContainer_renderQueriedSizeDetails).call(this) : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.nothing}
    `, __classPrivateFieldGet(this, _QueryContainer_shadow, "f"), {
        host: this,
    });
    // clang-format on
}, _QueryContainer_renderQueriedSizeDetails = function _QueryContainer_renderQueriedSizeDetails() {
    if (!__classPrivateFieldGet(this, _QueryContainer_queriedSizeDetails, "f") || __classPrivateFieldGet(this, _QueryContainer_queriedSizeDetails, "f").queryAxis === QueryAxis.None) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.nothing;
    }
    const areBothAxesQueried = __classPrivateFieldGet(this, _QueryContainer_queriedSizeDetails, "f").queryAxis === QueryAxis.Both;
    const axisIconClasses = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.Directives.classMap({
        'axis-icon': true,
        'hidden': areBothAxesQueried,
        'vertical': __classPrivateFieldGet(this, _QueryContainer_queriedSizeDetails, "f").physicalAxis === PhysicalAxis.Vertical,
    });
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    return html `
      <span class="queried-size-details">
        (${__classPrivateFieldGet(this, _QueryContainer_queriedSizeDetails, "f").queryAxis}<${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__.Icon.Icon.litTagName}
          class=${axisIconClasses} .data=${{
        iconName: 'width',
        color: 'var(--icon-default)',
    }}></${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__.Icon.Icon.litTagName}>)
        ${areBothAxesQueried && __classPrivateFieldGet(this, _QueryContainer_queriedSizeDetails, "f").width ? 'width:' : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.nothing}
        ${__classPrivateFieldGet(this, _QueryContainer_queriedSizeDetails, "f").width || _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.nothing}
        ${areBothAxesQueried && __classPrivateFieldGet(this, _QueryContainer_queriedSizeDetails, "f").height ? 'height:' : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.nothing}
        ${__classPrivateFieldGet(this, _QueryContainer_queriedSizeDetails, "f").height || _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.nothing}
      </span>
    `;
    // clang-format on
};
Object.defineProperty(QueryContainer, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.literal `devtools-query-container`
});
customElements.define('devtools-query-container', QueryContainer);


/***/ }),

/***/ "./src/panels/elements/components/components.ts":
/*!******************************************************!*\
  !*** ./src/panels/elements/components/components.ts ***!
  \******************************************************/
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
/* harmony import */ var _AccessibilityTreeNode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AccessibilityTreeNode.js */ "./src/panels/elements/components/AccessibilityTreeNode.ts");
/* harmony import */ var _AdornerManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdornerManager.js */ "./src/panels/elements/components/AdornerManager.ts");
/* harmony import */ var _AdornerSettingsPane_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AdornerSettingsPane.js */ "./src/panels/elements/components/AdornerSettingsPane.ts");
/* harmony import */ var _AnchorFunctionLinkSwatch_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AnchorFunctionLinkSwatch.js */ "./src/panels/elements/components/AnchorFunctionLinkSwatch.ts");
/* harmony import */ var _ComputedStyleProperty_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ComputedStyleProperty.js */ "./src/panels/elements/components/ComputedStyleProperty.ts");
/* harmony import */ var _ComputedStyleTrace_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ComputedStyleTrace.js */ "./src/panels/elements/components/ComputedStyleTrace.ts");
/* harmony import */ var _CSSHintDetailsView_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CSSHintDetailsView.js */ "./src/panels/elements/components/CSSHintDetailsView.ts");
/* harmony import */ var _CSSPropertyDocsView_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CSSPropertyDocsView.js */ "./src/panels/elements/components/CSSPropertyDocsView.ts");
/* harmony import */ var _CSSPropertyIconResolver_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CSSPropertyIconResolver.js */ "./src/panels/elements/components/CSSPropertyIconResolver.ts");
/* harmony import */ var _CSSQuery_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CSSQuery.js */ "./src/panels/elements/components/CSSQuery.ts");
/* harmony import */ var _CSSVariableValueView_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CSSVariableValueView.js */ "./src/panels/elements/components/CSSVariableValueView.ts");
/* harmony import */ var _ElementsBreadcrumbs_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ElementsBreadcrumbs.js */ "./src/panels/elements/components/ElementsBreadcrumbs.ts");
/* harmony import */ var _ElementsBreadcrumbsUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ElementsBreadcrumbsUtils.js */ "./src/panels/elements/components/ElementsBreadcrumbsUtils.ts");
/* harmony import */ var _ElementsTreeExpandButton_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ElementsTreeExpandButton.js */ "./src/panels/elements/components/ElementsTreeExpandButton.ts");
/* harmony import */ var _Helper_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Helper.js */ "./src/panels/elements/components/Helper.ts");
/* harmony import */ var _LayoutPane_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./LayoutPane.js */ "./src/panels/elements/components/LayoutPane.ts");
/* harmony import */ var _LayoutPaneUtils_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./LayoutPaneUtils.js */ "./src/panels/elements/components/LayoutPaneUtils.ts");
/* harmony import */ var _QueryContainer_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./QueryContainer.js */ "./src/panels/elements/components/QueryContainer.ts");
/* harmony import */ var _StylePropertyEditor_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./StylePropertyEditor.js */ "./src/panels/elements/components/StylePropertyEditor.ts");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






















/***/ })

}]);