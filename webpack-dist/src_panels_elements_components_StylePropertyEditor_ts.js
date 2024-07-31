"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_elements_components_StylePropertyEditor_ts"],{

/***/ "./src/panels/elements/components/StylePropertyEditor.ts":
/*!***************************************************************!*\
  !*** ./src/panels/elements/components/StylePropertyEditor.ts ***!
  \***************************************************************/
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
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _CSSPropertyIconResolver_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CSSPropertyIconResolver.js */ "./src/panels/elements/components/CSSPropertyIconResolver.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './stylePropertyEditor.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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
var _StylePropertyEditor_instances, _StylePropertyEditor_shadow, _StylePropertyEditor_authoredProperties, _StylePropertyEditor_computedProperties, _StylePropertyEditor_render, _StylePropertyEditor_renderProperty, _StylePropertyEditor_renderButton, _StylePropertyEditor_onButtonClick;






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
    constructor(name, value) {
        super(PropertySelectedEvent.eventName, {});
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.data = { name, value };
    }
}
Object.defineProperty(PropertySelectedEvent, "eventName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'propertyselected'
});
class PropertyDeselectedEvent extends Event {
    constructor(name, value) {
        super(PropertyDeselectedEvent.eventName, {});
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.data = { name, value };
    }
}
Object.defineProperty(PropertyDeselectedEvent, "eventName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'propertydeselected'
});
// eslint-disable-next-line rulesdir/check_component_naming
class StylePropertyEditor extends HTMLElement {
    constructor() {
        super();
        _StylePropertyEditor_instances.add(this);
        _StylePropertyEditor_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _StylePropertyEditor_authoredProperties.set(this, new Map());
        _StylePropertyEditor_computedProperties.set(this, new Map());
        Object.defineProperty(this, "editableProperties", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _StylePropertyEditor_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './stylePropertyEditor.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
    }
    getEditableProperties() {
        return this.editableProperties;
    }
    set data(data) {
        __classPrivateFieldSet(this, _StylePropertyEditor_authoredProperties, data.authoredProperties, "f");
        __classPrivateFieldSet(this, _StylePropertyEditor_computedProperties, data.computedProperties, "f");
        __classPrivateFieldGet(this, _StylePropertyEditor_instances, "m", _StylePropertyEditor_render).call(this);
    }
    findIcon(_query, _computedProperties) {
        throw new Error('Not implemented');
    }
}
_StylePropertyEditor_shadow = new WeakMap(), _StylePropertyEditor_authoredProperties = new WeakMap(), _StylePropertyEditor_computedProperties = new WeakMap(), _StylePropertyEditor_instances = new WeakSet(), _StylePropertyEditor_render = function _StylePropertyEditor_render() {
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    render(html `
      <div class="container">
        ${this.editableProperties.map(prop => __classPrivateFieldGet(this, _StylePropertyEditor_instances, "m", _StylePropertyEditor_renderProperty).call(this, prop))}
      </div>
    `, __classPrivateFieldGet(this, _StylePropertyEditor_shadow, "f"), {
        host: this,
    });
    // clang-format on
}, _StylePropertyEditor_renderProperty = function _StylePropertyEditor_renderProperty(prop) {
    const authoredValue = __classPrivateFieldGet(this, _StylePropertyEditor_authoredProperties, "f").get(prop.propertyName);
    const notAuthored = !authoredValue;
    const shownValue = authoredValue || __classPrivateFieldGet(this, _StylePropertyEditor_computedProperties, "f").get(prop.propertyName);
    const classes = Directives.classMap({
        'property-value': true,
        'not-authored': notAuthored,
    });
    return html `<div class="row">
      <div class="property">
        <span class="property-name">${prop.propertyName}</span>: <span class=${classes}>${shownValue}</span>
      </div>
      <div class="buttons">
        ${prop.propertyValues.map(value => __classPrivateFieldGet(this, _StylePropertyEditor_instances, "m", _StylePropertyEditor_renderButton).call(this, value, prop.propertyName, value === authoredValue))}
      </div>
    </div>`;
}, _StylePropertyEditor_renderButton = function _StylePropertyEditor_renderButton(propertyValue, propertyName, selected = false) {
    const query = `${propertyName}: ${propertyValue}`;
    const iconInfo = this.findIcon(query, __classPrivateFieldGet(this, _StylePropertyEditor_computedProperties, "f"));
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
              @click=${() => __classPrivateFieldGet(this, _StylePropertyEditor_instances, "m", _StylePropertyEditor_onButtonClick).call(this, propertyName, propertyValue, selected)}>
        <${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__.Icon.Icon.litTagName} style=${transform} name=${iconInfo.iconName}>
        </${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__.Icon.Icon.litTagName}>
      </button>
    `;
}, _StylePropertyEditor_onButtonClick = function _StylePropertyEditor_onButtonClick(propertyName, propertyValue, selected) {
    if (selected) {
        this.dispatchEvent(new PropertyDeselectedEvent(propertyName, propertyValue));
    }
    else {
        this.dispatchEvent(new PropertySelectedEvent(propertyName, propertyValue));
    }
};
class FlexboxEditor extends StylePropertyEditor {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "jslogContext", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'cssFlexboxEditor'
        });
        Object.defineProperty(this, "editableProperties", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: FlexboxEditableProperties
        });
    }
    findIcon(query, computedProperties) {
        return (0,_CSSPropertyIconResolver_js__WEBPACK_IMPORTED_MODULE_4__.findFlexContainerIcon)(query, computedProperties);
    }
}
customElements.define('devtools-flexbox-editor', FlexboxEditor);
class GridEditor extends StylePropertyEditor {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "jslogContext", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'cssGridEditor'
        });
        Object.defineProperty(this, "editableProperties", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: GridEditableProperties
        });
    }
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


/***/ })

}]);