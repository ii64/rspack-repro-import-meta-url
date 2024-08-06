"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_recorder_components_SelectButton_js"],{

/***/ "./panels/recorder/components/SelectButton.js":
/*!****************************************************!*\
  !*** ./panels/recorder/components/SelectButton.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelectButton: () => (/* binding */ SelectButton),
/* harmony export */   SelectButtonClickEvent: () => (/* binding */ SelectButtonClickEvent),
/* harmony export */   SelectMenuSelectedEvent: () => (/* binding */ SelectMenuSelectedEvent)
/* harmony export */ });
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/components/buttons/buttons.js */ "./ui/components/buttons/buttons.js");
/* harmony import */ var _ui_components_dialogs_dialogs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/dialogs/dialogs.js */ "./ui/components/dialogs/dialogs.js");
/* harmony import */ var _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/components/helpers/helpers.js */ "./ui/components/helpers/helpers.js");
/* harmony import */ var _ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/components/menus/menus.js */ "./ui/components/menus/menus.js");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _models_models_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/models.js */ "./panels/recorder/models/models.js");
/* harmony import */ var _selectButton_css_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./selectButton.css.js */ "./panels/recorder/components/selectButton.css.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.









class SelectButtonClickEvent extends Event {
    value;
    static eventName = 'selectbuttonclick';
    constructor(value) {
        super(SelectButtonClickEvent.eventName, { bubbles: true, composed: true });
        this.value = value;
    }
}
class SelectMenuSelectedEvent extends Event {
    value;
    static eventName = 'selectmenuselected';
    constructor(value) {
        super(SelectMenuSelectedEvent.eventName, { bubbles: true, composed: true });
        this.value = value;
    }
}
class SelectButton extends HTMLElement {
    static litTagName = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.literal `devtools-select-button`;
    #shadow = this.attachShadow({ mode: 'open' });
    #props = {
        disabled: false,
        value: '',
        items: [],
        buttonLabel: '',
        groups: [],
        variant: "primary" /* Variant.PRIMARY */,
    };
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_selectButton_css_js__WEBPACK_IMPORTED_MODULE_8__["default"]];
        void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_3__.ScheduledRender.scheduleRender(this, this.#render);
    }
    get disabled() {
        return this.#props.disabled;
    }
    set disabled(disabled) {
        this.#props.disabled = disabled;
        void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_3__.ScheduledRender.scheduleRender(this, this.#render);
    }
    get items() {
        return this.#props.items;
    }
    set items(items) {
        this.#props.items = items;
        void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_3__.ScheduledRender.scheduleRender(this, this.#render);
    }
    set buttonLabel(buttonLabel) {
        this.#props.buttonLabel = buttonLabel;
    }
    set groups(groups) {
        this.#props.groups = groups;
        void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_3__.ScheduledRender.scheduleRender(this, this.#render);
    }
    get value() {
        return this.#props.value;
    }
    set value(value) {
        this.#props.value = value;
        void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_3__.ScheduledRender.scheduleRender(this, this.#render);
    }
    get variant() {
        return this.#props.variant;
    }
    set variant(variant) {
        this.#props.variant = variant;
        void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_3__.ScheduledRender.scheduleRender(this, this.#render);
    }
    set action(value) {
        this.#props.action = value;
        void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_3__.ScheduledRender.scheduleRender(this, this.#render);
    }
    #handleClick(ev) {
        ev.stopPropagation();
        this.dispatchEvent(new SelectButtonClickEvent(this.#props.value));
    }
    #handleSelectMenuSelect(evt) {
        this.dispatchEvent(new SelectMenuSelectedEvent(evt.itemValue));
        void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_3__.ScheduledRender.scheduleRender(this, this.#render);
    }
    #renderSelectItem(item, selectedItem) {
        // clang-format off
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.html `
      <${_ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_4__.Menu.MenuItem.litTagName} .value=${item.value} .selected=${item.value === selectedItem.value} jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.item(_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.toKebabCase(item.value)).track({ click: true })}>
        ${item.label()}
      </${_ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_4__.Menu.MenuItem.litTagName}>
    `;
        // clang-format on
    }
    #renderSelectGroup(group, selectedItem) {
        // clang-format off
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.html `
      <${_ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_4__.Menu.MenuGroup.litTagName} .name=${group.name}>
        ${group.items.map(item => this.#renderSelectItem(item, selectedItem))}
      </${_ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_4__.Menu.MenuGroup.litTagName}>
    `;
        // clang-format on
    }
    #getTitle(label) {
        return this.#props.action ? _models_models_js__WEBPACK_IMPORTED_MODULE_7__.Tooltip.getTooltipForActions(label, this.#props.action) : '';
    }
    #render = () => {
        const hasGroups = Boolean(this.#props.groups.length);
        const items = hasGroups ? this.#props.groups.flatMap(group => group.items) : this.#props.items;
        const selectedItem = items.find(item => item.value === this.#props.value) || items[0];
        if (!selectedItem) {
            return;
        }
        const classes = {
            primary: this.#props.variant === "primary" /* Variant.PRIMARY */,
            secondary: this.#props.variant === "outlined" /* Variant.OUTLINED */,
        };
        const buttonVariant = this.#props.variant === "outlined" /* Variant.OUTLINED */ ? "outlined" /* Buttons.Button.Variant.OUTLINED */ : "primary" /* Buttons.Button.Variant.PRIMARY */;
        const menuLabel = selectedItem.buttonLabel ? selectedItem.buttonLabel() : selectedItem.label();
        // clang-format off
        _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.html `
      <div class="select-button" title=${this.#getTitle(menuLabel) || _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.nothing}>
      <${_ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_4__.SelectMenu.SelectMenu.litTagName}
          class=${_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.Directives.classMap(classes)}
          @selectmenuselected=${this.#handleSelectMenuSelect}
          ?disabled=${this.#props.disabled}
          .showArrow=${true}
          .sideButton=${false}
          .showSelectedItem=${true}
          .disabled=${this.#props.disabled}
          .buttonTitle=${_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.html `${menuLabel}`}
          .position=${"bottom" /* Dialogs.Dialog.DialogVerticalPosition.BOTTOM */}
          .horizontalAlignment=${"right" /* Dialogs.Dialog.DialogHorizontalAlignment.RIGHT */}
        >
          ${hasGroups
            ? this.#props.groups.map(group => this.#renderSelectGroup(group, selectedItem))
            : this.#props.items.map(item => this.#renderSelectItem(item, selectedItem))}
        </${_ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_4__.SelectMenu.SelectMenu.litTagName}>
        ${selectedItem
            ? _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.html `
        <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button.litTagName}
            .disabled=${this.#props.disabled}
            .variant=${buttonVariant}
            .iconName=${selectedItem.buttonIconName}
            @click=${this.#handleClick}>
            ${this.#props.buttonLabel}
        </${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button.litTagName}>`
            : ''}
      </div>`, this.#shadow, { host: this });
        // clang-format on
    };
}
customElements.define('devtools-select-button', SelectButton);
//# sourceMappingURL=SelectButton.js.map

/***/ }),

/***/ "./panels/recorder/components/selectButton.css.js":
/*!********************************************************!*\
  !*** ./panels/recorder/components/selectButton.css.js ***!
  \********************************************************/
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

.select-button {
  display: flex;
  gap: 12px;
}

.select-button devtools-button {
  position: relative; /* Needed for outline to appear on top of the next element */
}

.select-menu-item-content-with-icon {
  display: flex;
  align-items: center;
}

/* .select-menu-item-content-with-icon::before {
  content: "";
  position: relative;
  left: 0;
  top: 0;
  background-color: var(--sys-color-on-surface);
  display: inline-block;
  mask-repeat: no-repeat;
  mask-position: center;
  width: 24px;
  height: 24px;
  margin-right: 4px;
  mask-image: var(--item-mask-icon);
} */

/* devtools-select-menu {
  height: var(--override-select-menu-height, 24px);
  border-radius: 0 4px 4px 0;
  box-sizing: border-box;

  --override-select-menu-show-button-outline: var(--sys-color-state-focus-ring);
  --override-select-menu-label-with-arrow-padding: 0;
  --override-select-menu-border: none;
  --override-select-menu-show-button-padding: 0 6px 0 0;
} */

/* devtools-select-menu.primary {
  border: none;
  border-left: 1px solid var(--override-icon-and-text-color);

  --override-icon-and-text-color: var(--sys-color-cdt-base-container);
  --override-select-menu-arrow-color: var(--override-icon-and-text-color);
  --override-divider-color: var(--override-icon-and-text-color);
  --override-select-menu-background-color: var(--sys-color-primary);
  --override-select-menu-active-background-color:
    var(
      --override-select-menu-background-color
    );
} */

/* devtools-select-menu.primary:hover {
  --override-select-menu-background-color: color-mix(in sRGB, var(--sys-color-primary), var(--sys-color-state-hover-on-prominent) 10%);
} */

/* devtools-select-menu[disabled].primary,
devtools-select-menu[disabled].primary:hover {
  --override-icon-and-text-color: var(--sys-color-state-disabled);
  --override-select-menu-background-color: var(--sys-color-cdt-base-container-elevation-1);
} */

/*# sourceURL=selectButton.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);