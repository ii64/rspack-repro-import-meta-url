"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_elements_components_StylePropertyEditor_js"], {
"./panels/elements/components/StylePropertyEditor.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  FlexboxEditableProperties: function() { return FlexboxEditableProperties; },
  FlexboxEditor: function() { return FlexboxEditor; },
  GridEditableProperties: function() { return GridEditableProperties; },
  GridEditor: function() { return GridEditor; },
  PropertyDeselectedEvent: function() { return PropertyDeselectedEvent; },
  PropertySelectedEvent: function() { return PropertySelectedEvent; },
  StylePropertyEditor: function() { return StylePropertyEditor; }
});
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _CSSPropertyIconResolver_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CSSPropertyIconResolver.js */ "./panels/elements/components/CSSPropertyIconResolver.js");
/* harmony import */var _stylePropertyEditor_css_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stylePropertyEditor.css.js */ "./panels/elements/components/stylePropertyEditor.css.js");
// Copyright (c) 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _check_private_redeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
        throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
}
function _class_apply_descriptor_get(receiver, descriptor) {
    if (descriptor.get) {
        return descriptor.get.call(receiver);
    }
    return descriptor.value;
}
function _class_apply_descriptor_set(receiver, descriptor, value) {
    if (descriptor.set) {
        descriptor.set.call(receiver, value);
    } else {
        if (!descriptor.writable) {
            throw new TypeError("attempted to set read only private field");
        }
        descriptor.value = value;
    }
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _class_extract_field_descriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to " + action + " private field on non-instance");
    }
    return privateMap.get(receiver);
}
function _class_private_field_get(receiver, privateMap) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "get");
    return _class_apply_descriptor_get(receiver, descriptor);
}
function _class_private_field_init(obj, privateMap, value) {
    _check_private_redeclaration(obj, privateMap);
    privateMap.set(obj, value);
}
function _class_private_field_set(receiver, privateMap, value) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "set");
    _class_apply_descriptor_set(receiver, descriptor, value);
    return value;
}
function _class_private_method_get(receiver, privateSet, fn) {
    if (!privateSet.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return fn;
}
function _class_private_method_init(obj, privateSet) {
    _check_private_redeclaration(obj, privateSet);
    privateSet.add(obj);
}
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _tagged_template_literal(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
}
function _is_native_reflect_construct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
function _templateObject() {
    var data = _tagged_template_literal([
        '\n      <div class="container">\n        ',
        "\n      </div>\n    "
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        '<div class="row">\n      <div class="property">\n        <span class="property-name">',
        "</span>: <span class=",
        ">",
        '</span>\n      </div>\n      <div class="buttons">\n        ',
        "\n      </div>\n    </div>"
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        "\n      <button title=",
        "\n              class=",
        "\n              jslog=",
        "\n              @click=",
        ">\n        <",
        " style=",
        " name=",
        ">\n        </",
        ">\n      </button>\n    "
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}






var UIStrings = {
    /**
     * @description Title of the button that selects a flex property.
     * @example {flex-direction} propertyName
     * @example {column} propertyValue
     */ selectButton: 'Add {propertyName}: {propertyValue}',
    /**
     * @description Title of the button that deselects a flex property.
     * @example {flex-direction} propertyName
     * @example {row} propertyValue
     */ deselectButton: 'Remove {propertyName}: {propertyValue}'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/elements/components/StylePropertyEditor.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
var render = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.render, html = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.html, Directives = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.Directives;
var PropertySelectedEvent = /*#__PURE__*/ function(Event1) {
    "use strict";
    _inherits(PropertySelectedEvent, Event1);
    var _super = _create_super(PropertySelectedEvent);
    function PropertySelectedEvent(name, value) {
        _class_call_check(this, PropertySelectedEvent);
        var _this;
        _this = _super.call(this, PropertySelectedEvent.eventName, {});
        _define_property(_assert_this_initialized(_this), "data", void 0);
        _this.data = {
            name: name,
            value: value
        };
        return _this;
    }
    return PropertySelectedEvent;
}(_wrap_native_super(Event));
_define_property(PropertySelectedEvent, "eventName", 'propertyselected');
var PropertyDeselectedEvent = /*#__PURE__*/ function(Event1) {
    "use strict";
    _inherits(PropertyDeselectedEvent, Event1);
    var _super = _create_super(PropertyDeselectedEvent);
    function PropertyDeselectedEvent(name, value) {
        _class_call_check(this, PropertyDeselectedEvent);
        var _this;
        _this = _super.call(this, PropertyDeselectedEvent.eventName, {});
        _define_property(_assert_this_initialized(_this), "data", void 0);
        _this.data = {
            name: name,
            value: value
        };
        return _this;
    }
    return PropertyDeselectedEvent;
}(_wrap_native_super(Event));
_define_property(PropertyDeselectedEvent, "eventName", 'propertydeselected');
var _shadow = /*#__PURE__*/ new WeakMap(), _authoredProperties = /*#__PURE__*/ new WeakMap(), _computedProperties = /*#__PURE__*/ new WeakMap(), _render = /*#__PURE__*/ new WeakSet(), _renderProperty = /*#__PURE__*/ new WeakSet(), _renderButton = /*#__PURE__*/ new WeakSet(), _onButtonClick = /*#__PURE__*/ new WeakSet();
// eslint-disable-next-line rulesdir/check_component_naming
var StylePropertyEditor = /*#__PURE__*/ function(HTMLElement1) {
    "use strict";
    _inherits(StylePropertyEditor, HTMLElement1);
    var _super = _create_super(StylePropertyEditor);
    function StylePropertyEditor() {
        _class_call_check(this, StylePropertyEditor);
        var _this;
        _this = _super.call(this);
        _class_private_method_init(_assert_this_initialized(_this), _render);
        _class_private_method_init(_assert_this_initialized(_this), _renderProperty);
        _class_private_method_init(_assert_this_initialized(_this), _renderButton);
        _class_private_method_init(_assert_this_initialized(_this), _onButtonClick);
        _class_private_field_init(_assert_this_initialized(_this), _shadow, {
            writable: true,
            value: _this.attachShadow({
                mode: 'open'
            })
        });
        _class_private_field_init(_assert_this_initialized(_this), _authoredProperties, {
            writable: true,
            value: new Map()
        });
        _class_private_field_init(_assert_this_initialized(_this), _computedProperties, {
            writable: true,
            value: new Map()
        });
        _define_property(_assert_this_initialized(_this), "editableProperties", []);
        return _this;
    }
    _create_class(StylePropertyEditor, [
        {
            key: "connectedCallback",
            value: function connectedCallback() {
                _class_private_field_get(this, _shadow).adoptedStyleSheets = [
                    _stylePropertyEditor_css_js__WEBPACK_IMPORTED_MODULE_5__["default"]
                ];
            }
        },
        {
            key: "getEditableProperties",
            value: function getEditableProperties() {
                return this.editableProperties;
            }
        },
        {
            key: "data",
            set: function set(data) {
                _class_private_field_set(this, _authoredProperties, data.authoredProperties);
                _class_private_field_set(this, _computedProperties, data.computedProperties);
                _class_private_method_get(this, _render, render1).call(this);
            }
        },
        {
            key: "findIcon",
            value: function findIcon(_query, _computedProperties) {
                throw new Error('Not implemented');
            }
        }
    ]);
    return StylePropertyEditor;
}(_wrap_native_super(HTMLElement));
function render1() {
    var _this = this;
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    render(html(_templateObject(), this.editableProperties.map(function(prop) {
        return _class_private_method_get(_this, _renderProperty, renderProperty).call(_this, prop);
    })), _class_private_field_get(this, _shadow), {
        host: this
    });
// clang-format on
}
function renderProperty(prop) {
    var _this = this;
    var authoredValue = _class_private_field_get(this, _authoredProperties).get(prop.propertyName);
    var notAuthored = !authoredValue;
    var shownValue = authoredValue || _class_private_field_get(this, _computedProperties).get(prop.propertyName);
    var classes = Directives.classMap({
        'property-value': true,
        'not-authored': notAuthored
    });
    return html(_templateObject1(), prop.propertyName, classes, shownValue, prop.propertyValues.map(function(value) {
        return _class_private_method_get(_this, _renderButton, renderButton).call(_this, value, prop.propertyName, value === authoredValue);
    }));
}
function renderButton(propertyValue, propertyName) {
    var _this = this;
    var selected = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    var query = "".concat(propertyName, ": ").concat(propertyValue);
    var iconInfo = this.findIcon(query, _class_private_field_get(this, _computedProperties));
    if (!iconInfo) {
        throw new Error("Icon for ".concat(query, " is not found"));
    }
    var transform = "transform: rotate(".concat(iconInfo.rotate, "deg) scale(").concat(iconInfo.scaleX, ", ").concat(iconInfo.scaleY, ")");
    var classes = Directives.classMap({
        'button': true,
        'selected': selected
    });
    var values = {
        propertyName: propertyName,
        propertyValue: propertyValue
    };
    var title = selected ? i18nString(UIStrings.deselectButton, values) : i18nString(UIStrings.selectButton, values);
    return html(_templateObject2(), title, classes, _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.item().track({
        click: true
    }).context("".concat(propertyName, "-").concat(propertyValue)), function() {
        return _class_private_method_get(_this, _onButtonClick, onButtonClick).call(_this, propertyName, propertyValue, selected);
    }, _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__.Icon.Icon.litTagName, transform, iconInfo.iconName, _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__.Icon.Icon.litTagName);
}
function onButtonClick(propertyName, propertyValue, selected) {
    if (selected) {
        this.dispatchEvent(new PropertyDeselectedEvent(propertyName, propertyValue));
    } else {
        this.dispatchEvent(new PropertySelectedEvent(propertyName, propertyValue));
    }
}
var FlexboxEditor = /*#__PURE__*/ function(StylePropertyEditor) {
    "use strict";
    _inherits(FlexboxEditor, StylePropertyEditor);
    var _super = _create_super(FlexboxEditor);
    function FlexboxEditor() {
        _class_call_check(this, FlexboxEditor);
        var _this;
        _this = _super.apply(this, arguments);
        _define_property(_assert_this_initialized(_this), "jslogContext", 'cssFlexboxEditor');
        _define_property(_assert_this_initialized(_this), "editableProperties", FlexboxEditableProperties);
        return _this;
    }
    _create_class(FlexboxEditor, [
        {
            key: "findIcon",
            value: function findIcon(query, computedProperties) {
                return (0,_CSSPropertyIconResolver_js__WEBPACK_IMPORTED_MODULE_4__.findFlexContainerIcon)(query, computedProperties);
            }
        }
    ]);
    return FlexboxEditor;
}(StylePropertyEditor);
customElements.define('devtools-flexbox-editor', FlexboxEditor);
var GridEditor = /*#__PURE__*/ function(StylePropertyEditor) {
    "use strict";
    _inherits(GridEditor, StylePropertyEditor);
    var _super = _create_super(GridEditor);
    function GridEditor() {
        _class_call_check(this, GridEditor);
        var _this;
        _this = _super.apply(this, arguments);
        _define_property(_assert_this_initialized(_this), "jslogContext", 'cssGridEditor');
        _define_property(_assert_this_initialized(_this), "editableProperties", GridEditableProperties);
        return _this;
    }
    _create_class(GridEditor, [
        {
            key: "findIcon",
            value: function findIcon(query, computedProperties) {
                return (0,_CSSPropertyIconResolver_js__WEBPACK_IMPORTED_MODULE_4__.findGridContainerIcon)(query, computedProperties);
            }
        }
    ]);
    return GridEditor;
}(StylePropertyEditor);
customElements.define('devtools-grid-editor', GridEditor);
var FlexboxEditableProperties = [
    {
        propertyName: 'flex-direction',
        propertyValues: [
            'row',
            'column',
            'row-reverse',
            'column-reverse'
        ]
    },
    {
        propertyName: 'flex-wrap',
        propertyValues: [
            'nowrap',
            'wrap'
        ]
    },
    {
        propertyName: 'align-content',
        propertyValues: [
            'center',
            'flex-start',
            'flex-end',
            'space-around',
            'space-between',
            'stretch'
        ]
    },
    {
        propertyName: 'justify-content',
        propertyValues: [
            'center',
            'flex-start',
            'flex-end',
            'space-between',
            'space-around',
            'space-evenly'
        ]
    },
    {
        propertyName: 'align-items',
        propertyValues: [
            'center',
            'flex-start',
            'flex-end',
            'stretch',
            'baseline'
        ]
    }
];
var GridEditableProperties = [
    {
        propertyName: 'align-content',
        propertyValues: [
            'center',
            'space-between',
            'space-around',
            'space-evenly',
            'stretch'
        ]
    },
    {
        propertyName: 'justify-content',
        propertyValues: [
            'center',
            'start',
            'end',
            'space-between',
            'space-around',
            'space-evenly'
        ]
    },
    {
        propertyName: 'align-items',
        propertyValues: [
            'center',
            'start',
            'end',
            'stretch',
            'baseline'
        ]
    },
    {
        propertyName: 'justify-items',
        propertyValues: [
            'center',
            'start',
            'end',
            'stretch'
        ]
    }
]; //# sourceMappingURL=StylePropertyEditor.js.map


}),
"./panels/elements/components/stylePropertyEditor.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2021 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.container {\n  padding: 12px;\n  min-width: 170px;\n}\n\n.row {\n  padding: 0;\n  color: var(--sys-color-on-surface);\n  padding-bottom: 16px;\n}\n\n.row:last-child {\n  padding-bottom: 0;\n}\n\n.property {\n  padding-bottom: 4px;\n  white-space: nowrap;\n}\n\n.property-name {\n  color: var(--sys-color-token-property-special);\n}\n\n.property-value {\n  color: var(--sys-color-on-surface);\n}\n\n.property-value.not-authored {\n  color: var(--sys-color-state-disabled);\n}\n\n.buttons {\n  display: flex;\n  flex-direction: row;\n}\n\n.buttons > :first-child {\n  border-radius: 3px 0 0 3px;\n}\n\n.buttons > :last-child {\n  border-radius: 0 3px 3px 0;\n}\n\n.button {\n  border: 1px solid var(--sys-color-neutral-outline);\n  background-color: var(--sys-color-cdt-base-container);\n  width: 24px;\n  height: 24px;\n  min-width: 24px;\n  min-height: 24px;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n\n.button:focus-visible {\n  outline: auto 5px -webkit-focus-ring-color;\n}\n\n.button devtools-icon {\n  color: var(--icon-default);\n}\n\n.button:hover devtools-icon {\n  color: var(--icon-default-hover);\n}\n\n.button.selected devtools-icon {\n  color: var(--icon-toggled);\n}\n\n/*# sourceURL=stylePropertyEditor.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);