"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_elements_components_StylePropertyEditor_js"],{

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