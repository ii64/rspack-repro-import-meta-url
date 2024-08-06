"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_elements_ElementStatePaneWidget_js"], {
"./panels/elements/ElementStatePaneWidget.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ButtonProvider: function() { return ButtonProvider; },
  ElementStatePaneWidget: function() { return ElementStatePaneWidget; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _ElementsPanel_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ElementsPanel.js */ "./panels/elements/ElementsPanel.js");
/* harmony import */var _elementStatePaneWidget_css_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./elementStatePaneWidget.css.js */ "./panels/elements/elementStatePaneWidget.css.js");
// Copyright (c) 2015 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function get(target, property, receiver) {
            var base = _super_prop_base(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver || target);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
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
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
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
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
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









var UIStrings = {
    /**
     * @description Title of a section in the Element State Pane Widget of the Elements panel. The
     * controls in this section allow users to force a particular state on the selected element, e.g. a
     * focused state via :focus or a hover state via :hover.
     */ forceElementState: 'Force element state',
    /**
     * @description Tooltip text in Element State Pane Widget of the Elements panel. For a button that
     * opens a tool that toggles the various states of the selected element on/off.
     */ toggleElementState: 'Toggle Element State',
    /**
     * @description The name of a checkbox setting in the Element & Page State Pane Widget of the Elements panel.. This setting
     * emulates/pretends that the webpage is focused.
     */ emulateFocusedPage: 'Emulate a focused page',
    /**
     * @description Explanation text for the 'Emulate a focused page' setting in the Rendering tool.
     */ emulatesAFocusedPage: 'Keep page focused. Commonly used for debugging disappearing elements.'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/elements/ElementStatePaneWidget.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
var ElementStatePaneWidget = /*#__PURE__*/ function(_UI_Widget_Widget) {
    "use strict";
    _inherits(ElementStatePaneWidget, _UI_Widget_Widget);
    var _super = _create_super(ElementStatePaneWidget);
    function ElementStatePaneWidget() {
        _class_call_check(this, ElementStatePaneWidget);
        var _this;
        _this = _super.call(this, true);
        _define_property(_assert_this_initialized(_this), "inputs", void 0);
        _define_property(_assert_this_initialized(_this), "inputStates", void 0);
        _define_property(_assert_this_initialized(_this), "cssModel", void 0);
        _this.contentElement.className = 'styles-element-state-pane';
        _this.contentElement.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.pane('element-states')));
        var inputs = [];
        _this.inputs = inputs;
        _this.inputStates = new WeakMap();
        var createSectionHeader = function(title) {
            var sectionHeaderContainer = document.createElement('div');
            sectionHeaderContainer.classList.add('section-header');
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.createTextChild(sectionHeaderContainer.createChild('span'), title);
            return sectionHeaderContainer;
        };
        var clickListener = function(event) {
            var node = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.DOMModel.DOMNode);
            if (!node || !_instanceof(event.target, HTMLInputElement)) {
                return;
            }
            var state = _this.inputStates.get(event.target);
            if (!state) {
                return;
            }
            node.domModel().cssModel().forcePseudoState(node, state, event.target.checked);
        };
        var createElementStateCheckbox = function(state) {
            var td = document.createElement('td');
            var label = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.CheckboxLabel.create(':' + state, undefined, undefined, undefined, true);
            var input = label.checkboxElement;
            _this.inputStates.set(input, state);
            input.addEventListener('click', clickListener, false);
            input.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.toggle().track({
                click: true
            }).context(state)));
            inputs.push(input);
            td.appendChild(label);
            return td;
        };
        var createEmulateFocusedPageCheckbox = function() {
            var div = document.createElement('div');
            div.classList.add('page-state-checkbox');
            var label = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.CheckboxLabel.create(i18nString(UIStrings.emulateFocusedPage), undefined, undefined, undefined, true);
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.SettingsUI.bindCheckbox(label.checkboxElement, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('emulate-page-focus'), {
                enable: _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.ToggleEmulateFocusedPageFromStylesPaneOn,
                disable: _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.ToggleEmulateFocusedPageFromStylesPaneOff
            });
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Tooltip.Tooltip.install(label.textElement, i18nString(UIStrings.emulatesAFocusedPage));
            var link = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.XLink.XLink.create('https://goo.gle/devtools-emulate-focused-page', undefined, undefined, undefined, 'learn-more');
            link.textContent = '';
            link.style.setProperty('display', 'inline-flex');
            var icon = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__.Icon.Icon();
            icon.data = {
                iconName: 'help',
                color: 'var(--icon-default)',
                width: '16px',
                height: '16px'
            };
            link.prepend(icon);
            div.appendChild(label);
            div.appendChild(link);
            return div;
        };
        _this.contentElement.className = 'styles-element-state-pane';
        // Populate page states
        var keepPageFocusedCheckbox = createEmulateFocusedPageCheckbox();
        _this.contentElement.appendChild(keepPageFocusedCheckbox);
        // Populate element states
        _this.contentElement.appendChild(createSectionHeader(i18nString(UIStrings.forceElementState)));
        var table = document.createElement('table');
        table.classList.add('source-code');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.markAsPresentation(table);
        var tr = table.createChild('tr');
        tr.appendChild(createElementStateCheckbox('active'));
        tr.appendChild(createElementStateCheckbox('hover'));
        tr = table.createChild('tr');
        tr.appendChild(createElementStateCheckbox('focus'));
        tr.appendChild(createElementStateCheckbox('visited'));
        tr = table.createChild('tr');
        tr.appendChild(createElementStateCheckbox('focus-within'));
        tr.appendChild(createElementStateCheckbox('focus-visible'));
        tr = table.createChild('tr');
        tr.appendChild(createElementStateCheckbox('target'));
        _this.contentElement.appendChild(table);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Context.Context.instance().addFlavorChangeListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.DOMModel.DOMNode, _this.update, _assert_this_initialized(_this));
        return _this;
    }
    _create_class(ElementStatePaneWidget, [
        {
            key: "updateModel",
            value: function updateModel(cssModel) {
                if (this.cssModel === cssModel) {
                    return;
                }
                if (this.cssModel) {
                    this.cssModel.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.CSSModel.Events.PseudoStateForced, this.update, this);
                }
                this.cssModel = cssModel;
                if (this.cssModel) {
                    this.cssModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.CSSModel.Events.PseudoStateForced, this.update, this);
                }
            }
        },
        {
            key: "wasShown",
            value: function wasShown() {
                _get(_get_prototype_of(ElementStatePaneWidget.prototype), "wasShown", this).call(this);
                this.registerCSSFiles([
                    _elementStatePaneWidget_css_js__WEBPACK_IMPORTED_MODULE_8__["default"]
                ]);
                this.update();
            }
        },
        {
            key: "update",
            value: function update() {
                var node = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.DOMModel.DOMNode);
                if (node) {
                    node = node.enclosingElementOrSelf();
                }
                this.updateModel(node ? node.domModel().cssModel() : null);
                if (node) {
                    var nodePseudoState = node.domModel().cssModel().pseudoState(node);
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = this.inputs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var input = _step.value;
                            input.disabled = Boolean(node.pseudoType());
                            var state = this.inputStates.get(input);
                            input.checked = nodePseudoState && state !== undefined ? nodePseudoState.indexOf(state) >= 0 : false;
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return != null) {
                                _iterator.return();
                            }
                        } finally{
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                } else {
                    var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                    try {
                        for(var _iterator1 = this.inputs[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                            var input1 = _step1.value;
                            input1.disabled = true;
                            input1.checked = false;
                        }
                    } catch (err) {
                        _didIteratorError1 = true;
                        _iteratorError1 = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                                _iterator1.return();
                            }
                        } finally{
                            if (_didIteratorError1) {
                                throw _iteratorError1;
                            }
                        }
                    }
                }
                ButtonProvider.instance().item().setChecked(this.inputs.some(function(input) {
                    return input.checked;
                }));
            }
        }
    ]);
    return ElementStatePaneWidget;
}(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Widget.Widget);
var buttonProviderInstance;
var ButtonProvider = /*#__PURE__*/ function() {
    "use strict";
    function ButtonProvider() {
        _class_call_check(this, ButtonProvider);
        _define_property(this, "button", void 0);
        _define_property(this, "view", void 0);
        this.button = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Toolbar.ToolbarToggle(i18nString(UIStrings.toggleElementState), 'hover');
        this.button.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */ , this.clicked, this);
        this.button.element.classList.add('element-state');
        this.button.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.toggleSubpane('element-states').track({
            click: true
        })));
        this.button.element.style.setProperty('--dot-toggle-top', '12px');
        this.button.element.style.setProperty('--dot-toggle-left', '18px');
        this.view = new ElementStatePaneWidget();
    }
    _create_class(ButtonProvider, [
        {
            key: "clicked",
            value: function clicked() {
                _ElementsPanel_js__WEBPACK_IMPORTED_MODULE_7__.ElementsPanel.instance().showToolbarPane(!this.view.isShowing() ? this.view : null, this.button);
            }
        },
        {
            key: "item",
            value: function item() {
                return this.button;
            }
        }
    ], [
        {
            key: "instance",
            value: function instance() {
                var opts = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
                    forceNew: null
                };
                var forceNew = opts.forceNew;
                if (!buttonProviderInstance || forceNew) {
                    buttonProviderInstance = new ButtonProvider();
                }
                return buttonProviderInstance;
            }
        }
    ]);
    return ButtonProvider;
} //# sourceMappingURL=ElementStatePaneWidget.js.map
();


}),
"./panels/elements/elementStatePaneWidget.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/**\n * Copyright 2017 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.styles-element-state-pane {\n  overflow: hidden;\n  padding-left: 2px;\n  background-color: var(--sys-color-cdt-base-container);\n  border-bottom: 1px solid var(--sys-color-divider);\n  margin-top: 0;\n  padding-bottom: 2px;\n}\n\n.styles-element-state-pane > .page-state-checkbox {\n  margin-block: 6px;\n  display: flex;\n  align-items: center;\n  gap: 2px;\n}\n\n.styles-element-state-pane > .section-header {\n  margin: 8px 4px 6px;\n  color: var(--color-text-secondary);\n}\n\n.styles-element-state-pane > table {\n  width: 100%;\n  border-spacing: 0;\n}\n\n.styles-element-state-pane td {\n  padding: 0;\n}\n\n/*# sourceURL=elementStatePaneWidget.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);