"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_recorder_components_SelectButton_ts"],{

/***/ "./src/panels/recorder/components/SelectButton.ts":
/*!********************************************************!*\
  !*** ./src/panels/recorder/components/SelectButton.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelectButton: () => (/* binding */ SelectButton),
/* harmony export */   SelectButtonClickEvent: () => (/* binding */ SelectButtonClickEvent),
/* harmony export */   SelectMenuSelectedEvent: () => (/* binding */ SelectMenuSelectedEvent),
/* harmony export */   Variant: () => (/* binding */ Variant)
/* harmony export */ });
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/components/buttons/buttons.js */ "./src/ui/components/buttons/buttons.ts");
/* harmony import */ var _ui_components_dialogs_dialogs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/dialogs/dialogs.js */ "./src/ui/components/dialogs/dialogs.ts");
/* harmony import */ var _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/components/helpers/helpers.js */ "./src/ui/components/helpers/helpers.ts");
/* harmony import */ var _ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/components/menus/menus.js */ "./src/ui/components/menus/menus.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _models_models_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/models.js */ "./src/panels/recorder/models/models.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './selectButton.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _SelectButton_instances, _SelectButton_shadow, _SelectButton_props, _SelectButton_handleClick, _SelectButton_handleSelectMenuSelect, _SelectButton_renderSelectItem, _SelectButton_renderSelectGroup, _SelectButton_getTitle, _SelectButton_render;









var Variant;
(function (Variant) {
    Variant["PRIMARY"] = "primary";
    Variant["OUTLINED"] = "outlined";
})(Variant || (Variant = {}));
class SelectButtonClickEvent extends Event {
    constructor(value) {
        super(SelectButtonClickEvent.eventName, { bubbles: true, composed: true });
        Object.defineProperty(this, "value", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: value
        });
    }
}
Object.defineProperty(SelectButtonClickEvent, "eventName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'selectbuttonclick'
});
class SelectMenuSelectedEvent extends Event {
    constructor(value) {
        super(SelectMenuSelectedEvent.eventName, { bubbles: true, composed: true });
        Object.defineProperty(this, "value", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: value
        });
    }
}
Object.defineProperty(SelectMenuSelectedEvent, "eventName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'selectmenuselected'
});
class SelectButton extends HTMLElement {
    constructor() {
        super(...arguments);
        _SelectButton_instances.add(this);
        _SelectButton_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _SelectButton_props.set(this, {
            disabled: false,
            value: '',
            items: [],
            buttonLabel: '',
            groups: [],
            variant: Variant.PRIMARY,
        });
        _SelectButton_render.set(this, () => {
            const hasGroups = Boolean(__classPrivateFieldGet(this, _SelectButton_props, "f").groups.length);
            const items = hasGroups ? __classPrivateFieldGet(this, _SelectButton_props, "f").groups.flatMap(group => group.items) : __classPrivateFieldGet(this, _SelectButton_props, "f").items;
            const selectedItem = items.find(item => item.value === __classPrivateFieldGet(this, _SelectButton_props, "f").value) || items[0];
            if (!selectedItem) {
                return;
            }
            const classes = {
                primary: __classPrivateFieldGet(this, _SelectButton_props, "f").variant === Variant.PRIMARY,
                secondary: __classPrivateFieldGet(this, _SelectButton_props, "f").variant === Variant.OUTLINED,
            };
            const buttonVariant = __classPrivateFieldGet(this, _SelectButton_props, "f").variant === Variant.OUTLINED ? _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Variant.OUTLINED : _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Variant.PRIMARY;
            const menuLabel = selectedItem.buttonLabel ? selectedItem.buttonLabel() : selectedItem.label();
            // clang-format off
            _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.html `
      <div class="select-button" title=${__classPrivateFieldGet(this, _SelectButton_instances, "m", _SelectButton_getTitle).call(this, menuLabel) || _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.nothing}>
      <${_ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_4__.SelectMenu.SelectMenu.litTagName}
          class=${_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.Directives.classMap(classes)}
          @selectmenuselected=${__classPrivateFieldGet(this, _SelectButton_instances, "m", _SelectButton_handleSelectMenuSelect)}
          ?disabled=${__classPrivateFieldGet(this, _SelectButton_props, "f").disabled}
          .showArrow=${true}
          .sideButton=${false}
          .showSelectedItem=${true}
          .disabled=${__classPrivateFieldGet(this, _SelectButton_props, "f").disabled}
          .buttonTitle=${_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.html `${menuLabel}`}
          .position=${_ui_components_dialogs_dialogs_js__WEBPACK_IMPORTED_MODULE_2__.Dialog.DialogVerticalPosition.BOTTOM}
          .horizontalAlignment=${_ui_components_dialogs_dialogs_js__WEBPACK_IMPORTED_MODULE_2__.Dialog.DialogHorizontalAlignment.RIGHT}
        >
          ${hasGroups
                ? __classPrivateFieldGet(this, _SelectButton_props, "f").groups.map(group => __classPrivateFieldGet(this, _SelectButton_instances, "m", _SelectButton_renderSelectGroup).call(this, group, selectedItem))
                : __classPrivateFieldGet(this, _SelectButton_props, "f").items.map(item => __classPrivateFieldGet(this, _SelectButton_instances, "m", _SelectButton_renderSelectItem).call(this, item, selectedItem))}
        </${_ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_4__.SelectMenu.SelectMenu.litTagName}>
        ${selectedItem
                ? _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.html `
        <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button.litTagName}
            .disabled=${__classPrivateFieldGet(this, _SelectButton_props, "f").disabled}
            .variant=${buttonVariant}
            .iconName=${selectedItem.buttonIconName}
            @click=${__classPrivateFieldGet(this, _SelectButton_instances, "m", _SelectButton_handleClick)}>
            ${__classPrivateFieldGet(this, _SelectButton_props, "f").buttonLabel}
        </${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button.litTagName}>`
                : ''}
      </div>`, __classPrivateFieldGet(this, _SelectButton_shadow, "f"), { host: this });
            // clang-format on
        });
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _SelectButton_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './selectButton.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
        void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_3__.ScheduledRender.scheduleRender(this, __classPrivateFieldGet(this, _SelectButton_render, "f"));
    }
    get disabled() {
        return __classPrivateFieldGet(this, _SelectButton_props, "f").disabled;
    }
    set disabled(disabled) {
        __classPrivateFieldGet(this, _SelectButton_props, "f").disabled = disabled;
        void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_3__.ScheduledRender.scheduleRender(this, __classPrivateFieldGet(this, _SelectButton_render, "f"));
    }
    get items() {
        return __classPrivateFieldGet(this, _SelectButton_props, "f").items;
    }
    set items(items) {
        __classPrivateFieldGet(this, _SelectButton_props, "f").items = items;
        void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_3__.ScheduledRender.scheduleRender(this, __classPrivateFieldGet(this, _SelectButton_render, "f"));
    }
    set buttonLabel(buttonLabel) {
        __classPrivateFieldGet(this, _SelectButton_props, "f").buttonLabel = buttonLabel;
    }
    set groups(groups) {
        __classPrivateFieldGet(this, _SelectButton_props, "f").groups = groups;
        void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_3__.ScheduledRender.scheduleRender(this, __classPrivateFieldGet(this, _SelectButton_render, "f"));
    }
    get value() {
        return __classPrivateFieldGet(this, _SelectButton_props, "f").value;
    }
    set value(value) {
        __classPrivateFieldGet(this, _SelectButton_props, "f").value = value;
        void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_3__.ScheduledRender.scheduleRender(this, __classPrivateFieldGet(this, _SelectButton_render, "f"));
    }
    get variant() {
        return __classPrivateFieldGet(this, _SelectButton_props, "f").variant;
    }
    set variant(variant) {
        __classPrivateFieldGet(this, _SelectButton_props, "f").variant = variant;
        void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_3__.ScheduledRender.scheduleRender(this, __classPrivateFieldGet(this, _SelectButton_render, "f"));
    }
    set action(value) {
        __classPrivateFieldGet(this, _SelectButton_props, "f").action = value;
        void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_3__.ScheduledRender.scheduleRender(this, __classPrivateFieldGet(this, _SelectButton_render, "f"));
    }
}
_SelectButton_shadow = new WeakMap(), _SelectButton_props = new WeakMap(), _SelectButton_render = new WeakMap(), _SelectButton_instances = new WeakSet(), _SelectButton_handleClick = function _SelectButton_handleClick(ev) {
    ev.stopPropagation();
    this.dispatchEvent(new SelectButtonClickEvent(__classPrivateFieldGet(this, _SelectButton_props, "f").value));
}, _SelectButton_handleSelectMenuSelect = function _SelectButton_handleSelectMenuSelect(evt) {
    this.dispatchEvent(new SelectMenuSelectedEvent(evt.itemValue));
    void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_3__.ScheduledRender.scheduleRender(this, __classPrivateFieldGet(this, _SelectButton_render, "f"));
}, _SelectButton_renderSelectItem = function _SelectButton_renderSelectItem(item, selectedItem) {
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.html `
      <${_ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_4__.Menu.MenuItem.litTagName} .value=${item.value} .selected=${item.value === selectedItem.value} jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.item(_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.toKebabCase(item.value)).track({ click: true })}>
        ${item.label()}
      </${_ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_4__.Menu.MenuItem.litTagName}>
    `;
    // clang-format on
}, _SelectButton_renderSelectGroup = function _SelectButton_renderSelectGroup(group, selectedItem) {
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.html `
      <${_ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_4__.Menu.MenuGroup.litTagName} .name=${group.name}>
        ${group.items.map(item => __classPrivateFieldGet(this, _SelectButton_instances, "m", _SelectButton_renderSelectItem).call(this, item, selectedItem))}
      </${_ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_4__.Menu.MenuGroup.litTagName}>
    `;
    // clang-format on
}, _SelectButton_getTitle = function _SelectButton_getTitle(label) {
    return __classPrivateFieldGet(this, _SelectButton_props, "f").action ? _models_models_js__WEBPACK_IMPORTED_MODULE_7__.Tooltip.getTooltipForActions(label, __classPrivateFieldGet(this, _SelectButton_props, "f").action) : '';
};
Object.defineProperty(SelectButton, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.literal `devtools-select-button`
});
customElements.define('devtools-select-button', SelectButton);


/***/ })

}]);