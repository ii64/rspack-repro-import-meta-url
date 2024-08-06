"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_recorder_components_SelectButton_js"], {
"./panels/recorder/components/SelectButton.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  SelectButton: function() { return SelectButton; },
  SelectButtonClickEvent: function() { return SelectButtonClickEvent; },
  SelectMenuSelectedEvent: function() { return SelectMenuSelectedEvent; }
});
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/components/buttons/buttons.js */ "./ui/components/buttons/buttons.js");
/* harmony import */var _ui_components_dialogs_dialogs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/dialogs/dialogs.js */ "./ui/components/dialogs/dialogs.js");
/* harmony import */var _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/components/helpers/helpers.js */ "./ui/components/helpers/helpers.js");
/* harmony import */var _ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/components/menus/menus.js */ "./ui/components/menus/menus.js");
/* harmony import */var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _models_models_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/models.js */ "./panels/recorder/models/models.js");
/* harmony import */var _selectButton_css_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./selectButton.css.js */ "./panels/recorder/components/selectButton.css.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
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
        "",
        ""
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        "\n        <",
        "\n            .disabled=",
        "\n            .variant=",
        "\n            .iconName=",
        "\n            @click=",
        ">\n            ",
        "\n        </",
        ">"
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        '\n      <div class="select-button" title=',
        ">\n      <",
        "\n          class=",
        "\n          @selectmenuselected=",
        "\n          ?disabled=",
        "\n          .showArrow=",
        "\n          .sideButton=",
        "\n          .showSelectedItem=",
        "\n          .disabled=",
        "\n          .buttonTitle=",
        "\n          .position=",
        "\n          .horizontalAlignment=",
        "\n        >\n          ",
        "\n        </",
        ">\n        ",
        "\n      </div>"
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = _tagged_template_literal([
        "devtools-select-button"
    ]);
    _templateObject3 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject4() {
    var data = _tagged_template_literal([
        "\n      <",
        " .value=",
        " .selected=",
        " jslog=",
        ">\n        ",
        "\n      </",
        ">\n    "
    ]);
    _templateObject4 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject5() {
    var data = _tagged_template_literal([
        "\n      <",
        " .name=",
        ">\n        ",
        "\n      </",
        ">\n    "
    ]);
    _templateObject5 = function _templateObject() {
        return data;
    };
    return data;
}









var SelectButtonClickEvent = /*#__PURE__*/ function(Event1) {
    "use strict";
    _inherits(SelectButtonClickEvent, Event1);
    var _super = _create_super(SelectButtonClickEvent);
    function SelectButtonClickEvent(value) {
        _class_call_check(this, SelectButtonClickEvent);
        var _this;
        _this = _super.call(this, SelectButtonClickEvent.eventName, {
            bubbles: true,
            composed: true
        });
        _define_property(_assert_this_initialized(_this), "value", void 0);
        _this.value = value;
        return _this;
    }
    return SelectButtonClickEvent;
}(_wrap_native_super(Event));
_define_property(SelectButtonClickEvent, "eventName", 'selectbuttonclick');
var SelectMenuSelectedEvent = /*#__PURE__*/ function(Event1) {
    "use strict";
    _inherits(SelectMenuSelectedEvent, Event1);
    var _super = _create_super(SelectMenuSelectedEvent);
    function SelectMenuSelectedEvent(value) {
        _class_call_check(this, SelectMenuSelectedEvent);
        var _this;
        _this = _super.call(this, SelectMenuSelectedEvent.eventName, {
            bubbles: true,
            composed: true
        });
        _define_property(_assert_this_initialized(_this), "value", void 0);
        _this.value = value;
        return _this;
    }
    return SelectMenuSelectedEvent;
}(_wrap_native_super(Event));
_define_property(SelectMenuSelectedEvent, "eventName", 'selectmenuselected');
var _shadow = /*#__PURE__*/ new WeakMap(), _props = /*#__PURE__*/ new WeakMap(), _handleClick = /*#__PURE__*/ new WeakSet(), _handleSelectMenuSelect = /*#__PURE__*/ new WeakSet(), _renderSelectItem = /*#__PURE__*/ new WeakSet(), _renderSelectGroup = /*#__PURE__*/ new WeakSet(), _getTitle = /*#__PURE__*/ new WeakSet(), _render = /*#__PURE__*/ new WeakMap();
var SelectButton = /*#__PURE__*/ function(HTMLElement1) {
    "use strict";
    _inherits(SelectButton, HTMLElement1);
    var _super = _create_super(SelectButton);
    function SelectButton() {
        _class_call_check(this, SelectButton);
        var _this;
        _this = _super.apply(this, arguments);
        _class_private_method_init(_assert_this_initialized(_this), _handleClick);
        _class_private_method_init(_assert_this_initialized(_this), _handleSelectMenuSelect);
        _class_private_method_init(_assert_this_initialized(_this), _renderSelectItem);
        _class_private_method_init(_assert_this_initialized(_this), _renderSelectGroup);
        _class_private_method_init(_assert_this_initialized(_this), _getTitle);
        _class_private_field_init(_assert_this_initialized(_this), _shadow, {
            writable: true,
            value: _this.attachShadow({
                mode: 'open'
            })
        });
        _class_private_field_init(_assert_this_initialized(_this), _props, {
            writable: true,
            value: {
                disabled: false,
                value: '',
                items: [],
                buttonLabel: '',
                groups: [],
                variant: "primary" /* Variant.PRIMARY */ 
            }
        });
        _class_private_field_init(_assert_this_initialized(_this), _render, {
            writable: true,
            value: function() {
                var hasGroups = Boolean(_class_private_field_get(_this, _props).groups.length);
                var items = hasGroups ? _class_private_field_get(_this, _props).groups.flatMap(function(group) {
                    return group.items;
                }) : _class_private_field_get(_this, _props).items;
                var selectedItem = items.find(function(item) {
                    return item.value === _class_private_field_get(_this, _props).value;
                }) || items[0];
                if (!selectedItem) {
                    return;
                }
                var classes = {
                    primary: _class_private_field_get(_this, _props).variant === "primary" /* Variant.PRIMARY */ ,
                    secondary: _class_private_field_get(_this, _props).variant === "outlined" /* Variant.OUTLINED */ 
                };
                var buttonVariant = _class_private_field_get(_this, _props).variant === "outlined" /* Variant.OUTLINED */  ? "outlined" /* Buttons.Button.Variant.OUTLINED */  : "primary" /* Buttons.Button.Variant.PRIMARY */ ;
                var menuLabel = selectedItem.buttonLabel ? selectedItem.buttonLabel() : selectedItem.label();
                // clang-format off
                _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.html(_templateObject2(), _class_private_method_get(_this, _getTitle, getTitle).call(_assert_this_initialized(_this), menuLabel) || _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.nothing, _ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_4__.SelectMenu.SelectMenu.litTagName, _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.Directives.classMap(classes), _class_private_method_get(_assert_this_initialized(_this), _handleSelectMenuSelect, handleSelectMenuSelect), _class_private_field_get(_this, _props).disabled, true, false, true, _class_private_field_get(_this, _props).disabled, _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.html(_templateObject(), menuLabel), "bottom" /* Dialogs.Dialog.DialogVerticalPosition.BOTTOM */ , "right" /* Dialogs.Dialog.DialogHorizontalAlignment.RIGHT */ , hasGroups ? _class_private_field_get(_this, _props).groups.map(function(group) {
                    return _class_private_method_get(_this, _renderSelectGroup, renderSelectGroup).call(_assert_this_initialized(_this), group, selectedItem);
                }) : _class_private_field_get(_this, _props).items.map(function(item) {
                    return _class_private_method_get(_this, _renderSelectItem, renderSelectItem).call(_assert_this_initialized(_this), item, selectedItem);
                }), _ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_4__.SelectMenu.SelectMenu.litTagName, selectedItem ? _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.html(_templateObject1(), _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button.litTagName, _class_private_field_get(_this, _props).disabled, buttonVariant, selectedItem.buttonIconName, _class_private_method_get(_assert_this_initialized(_this), _handleClick, handleClick), _class_private_field_get(_this, _props).buttonLabel, _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button.litTagName) : ''), _class_private_field_get(_assert_this_initialized(_this), _shadow), {
                    host: _assert_this_initialized(_this)
                });
            // clang-format on
            }
        });
        return _this;
    }
    _create_class(SelectButton, [
        {
            key: "connectedCallback",
            value: function connectedCallback() {
                _class_private_field_get(this, _shadow).adoptedStyleSheets = [
                    _selectButton_css_js__WEBPACK_IMPORTED_MODULE_8__["default"]
                ];
                void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_3__.ScheduledRender.scheduleRender(this, _class_private_field_get(this, _render));
            }
        },
        {
            key: "disabled",
            get: function get() {
                return _class_private_field_get(this, _props).disabled;
            },
            set: function set(disabled) {
                _class_private_field_get(this, _props).disabled = disabled;
                void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_3__.ScheduledRender.scheduleRender(this, _class_private_field_get(this, _render));
            }
        },
        {
            key: "items",
            get: function get() {
                return _class_private_field_get(this, _props).items;
            },
            set: function set(items) {
                _class_private_field_get(this, _props).items = items;
                void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_3__.ScheduledRender.scheduleRender(this, _class_private_field_get(this, _render));
            }
        },
        {
            key: "buttonLabel",
            set: function set(buttonLabel) {
                _class_private_field_get(this, _props).buttonLabel = buttonLabel;
            }
        },
        {
            key: "groups",
            set: function set(groups) {
                _class_private_field_get(this, _props).groups = groups;
                void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_3__.ScheduledRender.scheduleRender(this, _class_private_field_get(this, _render));
            }
        },
        {
            key: "value",
            get: function get() {
                return _class_private_field_get(this, _props).value;
            },
            set: function set(value) {
                _class_private_field_get(this, _props).value = value;
                void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_3__.ScheduledRender.scheduleRender(this, _class_private_field_get(this, _render));
            }
        },
        {
            key: "variant",
            get: function get() {
                return _class_private_field_get(this, _props).variant;
            },
            set: function set(variant) {
                _class_private_field_get(this, _props).variant = variant;
                void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_3__.ScheduledRender.scheduleRender(this, _class_private_field_get(this, _render));
            }
        },
        {
            key: "action",
            set: function set(value) {
                _class_private_field_get(this, _props).action = value;
                void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_3__.ScheduledRender.scheduleRender(this, _class_private_field_get(this, _render));
            }
        }
    ]);
    return SelectButton;
}(_wrap_native_super(HTMLElement));
_define_property(SelectButton, "litTagName", _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.literal(_templateObject3()));
function handleClick(ev) {
    ev.stopPropagation();
    this.dispatchEvent(new SelectButtonClickEvent(_class_private_field_get(this, _props).value));
}
function handleSelectMenuSelect(evt) {
    this.dispatchEvent(new SelectMenuSelectedEvent(evt.itemValue));
    void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_3__.ScheduledRender.scheduleRender(this, _class_private_field_get(this, _render));
}
function renderSelectItem(item, selectedItem) {
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.html(_templateObject4(), _ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_4__.Menu.MenuItem.litTagName, item.value, item.value === selectedItem.value, _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.item(_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.toKebabCase(item.value)).track({
        click: true
    }), item.label(), _ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_4__.Menu.MenuItem.litTagName);
// clang-format on
}
function renderSelectGroup(group, selectedItem) {
    var _this = this;
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.html(_templateObject5(), _ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_4__.Menu.MenuGroup.litTagName, group.name, group.items.map(function(item) {
        return _class_private_method_get(_this, _renderSelectItem, renderSelectItem).call(_this, item, selectedItem);
    }), _ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_4__.Menu.MenuGroup.litTagName);
// clang-format on
}
function getTitle(label) {
    return _class_private_field_get(this, _props).action ? _models_models_js__WEBPACK_IMPORTED_MODULE_7__.Tooltip.getTooltipForActions(label, _class_private_field_get(this, _props).action) : '';
}
customElements.define('devtools-select-button', SelectButton); //# sourceMappingURL=SelectButton.js.map


}),
"./panels/recorder/components/selectButton.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync('/*\n * Copyright 2023 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.select-button {\n  display: flex;\n  gap: 12px;\n}\n\n.select-button devtools-button {\n  position: relative; /* Needed for outline to appear on top of the next element */\n}\n\n.select-menu-item-content-with-icon {\n  display: flex;\n  align-items: center;\n}\n\n/* .select-menu-item-content-with-icon::before {\n  content: "";\n  position: relative;\n  left: 0;\n  top: 0;\n  background-color: var(--sys-color-on-surface);\n  display: inline-block;\n  mask-repeat: no-repeat;\n  mask-position: center;\n  width: 24px;\n  height: 24px;\n  margin-right: 4px;\n  mask-image: var(--item-mask-icon);\n} */\n\n/* devtools-select-menu {\n  height: var(--override-select-menu-height, 24px);\n  border-radius: 0 4px 4px 0;\n  box-sizing: border-box;\n\n  --override-select-menu-show-button-outline: var(--sys-color-state-focus-ring);\n  --override-select-menu-label-with-arrow-padding: 0;\n  --override-select-menu-border: none;\n  --override-select-menu-show-button-padding: 0 6px 0 0;\n} */\n\n/* devtools-select-menu.primary {\n  border: none;\n  border-left: 1px solid var(--override-icon-and-text-color);\n\n  --override-icon-and-text-color: var(--sys-color-cdt-base-container);\n  --override-select-menu-arrow-color: var(--override-icon-and-text-color);\n  --override-divider-color: var(--override-icon-and-text-color);\n  --override-select-menu-background-color: var(--sys-color-primary);\n  --override-select-menu-active-background-color:\n    var(\n      --override-select-menu-background-color\n    );\n} */\n\n/* devtools-select-menu.primary:hover {\n  --override-select-menu-background-color: color-mix(in sRGB, var(--sys-color-primary), var(--sys-color-state-hover-on-prominent) 10%);\n} */\n\n/* devtools-select-menu[disabled].primary,\ndevtools-select-menu[disabled].primary:hover {\n  --override-icon-and-text-color: var(--sys-color-state-disabled);\n  --override-select-menu-background-color: var(--sys-color-cdt-base-container-elevation-1);\n} */\n\n/*# sourceURL=selectButton.css */\n');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);