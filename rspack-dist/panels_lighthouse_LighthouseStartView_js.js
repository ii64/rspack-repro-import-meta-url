"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_lighthouse_LighthouseStartView_js"], {
"./panels/lighthouse/LighthouseStartView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  StartView: function() { return StartView; }
});
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/components/buttons/buttons.js */ "./ui/components/buttons/buttons.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _LighthouseController_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LighthouseController.js */ "./panels/lighthouse/LighthouseController.js");
/* harmony import */var _lighthouseStartView_css_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lighthouseStartView.css.js */ "./panels/lighthouse/lighthouseStartView.css.js");
/* harmony import */var _RadioSetting_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RadioSetting.js */ "./panels/lighthouse/RadioSetting.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
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
        '\n<form class="lighthouse-start-view">\n  <header class="hbox">\n    <div class="lighthouse-logo"></div>\n    <div class="lighthouse-title">',
        '</div>\n    <div class="lighthouse-start-button-container" $="start-button-container">',
        '</div>\n  </header>\n  <div $="help-text" class="lighthouse-help-text hidden"></div>\n  <div class="lighthouse-options hbox">\n    <div class="lighthouse-form-section">\n      <div class="lighthouse-form-elements" $="mode-form-elements"></div>\n    </div>\n    <div class="lighthouse-form-section">\n      <div class="lighthouse-form-elements" $="device-type-form-elements"></div>\n    </div>\n    <div class="lighthouse-form-categories">\n      <div class="lighthouse-form-section">\n        <div class="lighthouse-form-section-label">',
        '</div>\n        <div class="lighthouse-form-elements" $="categories-form-elements"></div>\n      </div>\n    </div>\n  </div>\n  <div $="warning-text" class="lighthouse-warning-text hidden"></div>\n</form>\n    '
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}






var UIStrings = {
    /**
     * @description Text displayed as the title of a panel that can be used to audit a web page with Lighthouse.
     */ generateLighthouseReport: 'Generate a Lighthouse report',
    /**
     * @description Text that refers to the Lighthouse mode
     */ mode: 'Mode',
    /**
     * @description Title in the Lighthouse Start View for list of categories to run during audit
     */ categories: 'Categories',
    /**
     * @description Label for a button to start analyzing a page navigation with Lighthouse
     */ analyzeNavigation: 'Analyze page load',
    /**
     * @description Label for a button to start analyzing the current page state with Lighthouse
     */ analyzeSnapshot: 'Analyze page state',
    /**
     * @description Label for a button that starts a Lighthouse mode that analyzes user interactions over a period of time.
     */ startTimespan: 'Start timespan',
    /**
     * @description Text that is usually a hyperlink to more documentation
     */ learnMore: 'Learn more',
    /**
     * @description Text that refers to device such as a phone
     */ device: 'Device'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/lighthouse/LighthouseStartView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
var StartView = /*#__PURE__*/ function(_UI_Widget_Widget) {
    "use strict";
    _inherits(StartView, _UI_Widget_Widget);
    var _super = _create_super(StartView);
    function StartView(controller, panel) {
        _class_call_check(this, StartView);
        var _this;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "controller", void 0);
        _define_property(_assert_this_initialized(_this), "panel", void 0);
        _define_property(_assert_this_initialized(_this), "settingsToolbarInternal", void 0);
        _define_property(_assert_this_initialized(_this), "startButton", void 0);
        _define_property(_assert_this_initialized(_this), "helpText", void 0);
        _define_property(_assert_this_initialized(_this), "warningText", void 0);
        _define_property(_assert_this_initialized(_this), "checkboxes", []);
        _define_property(_assert_this_initialized(_this), "changeFormMode", void 0);
        _this.controller = controller;
        _this.panel = panel;
        _this.settingsToolbarInternal = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Toolbar.Toolbar('');
        _this.render();
        return _this;
    }
    _create_class(StartView, [
        {
            key: "populateRuntimeSettingAsRadio",
            value: function populateRuntimeSettingAsRadio(settingName, label, parentElement) {
                var runtimeSetting = _LighthouseController_js__WEBPACK_IMPORTED_MODULE_3__.RuntimeSettings.find(function(item) {
                    return item.setting.name === settingName;
                });
                if (!runtimeSetting || !runtimeSetting.options) {
                    throw new Error("".concat(settingName, " is not a setting with options"));
                }
                var labelEl = document.createElement('div');
                labelEl.classList.add('lighthouse-form-section-label');
                labelEl.textContent = label;
                if (runtimeSetting.learnMore) {
                    var link = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.XLink.XLink.create(runtimeSetting.learnMore, i18nString(UIStrings.learnMore), 'lighthouse-learn-more', undefined, 'learn-more');
                    labelEl.append(link);
                }
                parentElement.appendChild(labelEl);
                var control = new _RadioSetting_js__WEBPACK_IMPORTED_MODULE_5__.RadioSetting(runtimeSetting.options, runtimeSetting.setting, runtimeSetting.description());
                parentElement.appendChild(control.element);
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.ARIAUtils.setLabel(control.element, label);
            }
        },
        {
            key: "populateRuntimeSettingAsToolbarCheckbox",
            value: function populateRuntimeSettingAsToolbarCheckbox(settingName, toolbar) {
                var runtimeSetting = _LighthouseController_js__WEBPACK_IMPORTED_MODULE_3__.RuntimeSettings.find(function(item) {
                    return item.setting.name === settingName;
                });
                if (!runtimeSetting || !runtimeSetting.title) {
                    throw new Error("".concat(settingName, " is not a setting with a title"));
                }
                runtimeSetting.setting.setTitle(runtimeSetting.title());
                var control = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Toolbar.ToolbarSettingCheckbox(runtimeSetting.setting, runtimeSetting.description());
                toolbar.appendToolbarItem(control);
                if (runtimeSetting.learnMore) {
                    var link = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.XLink.XLink.create(runtimeSetting.learnMore, i18nString(UIStrings.learnMore), 'lighthouse-learn-more', undefined, 'learn-more');
                    link.style.margin = '5px';
                    control.element.appendChild(link);
                }
            }
        },
        {
            key: "populateRuntimeSettingAsToolbarDropdown",
            value: function populateRuntimeSettingAsToolbarDropdown(settingName, toolbar) {
                var _runtimeSetting_options;
                var runtimeSetting = _LighthouseController_js__WEBPACK_IMPORTED_MODULE_3__.RuntimeSettings.find(function(item) {
                    return item.setting.name === settingName;
                });
                if (!runtimeSetting || !runtimeSetting.title) {
                    throw new Error("".concat(settingName, " is not a setting with a title"));
                }
                var options = ((_runtimeSetting_options = runtimeSetting.options) === null || _runtimeSetting_options === void 0 ? void 0 : _runtimeSetting_options.map(function(option) {
                    return {
                        label: option.label(),
                        value: option.value
                    };
                })) || [];
                runtimeSetting.setting.setTitle(runtimeSetting.title());
                var control = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Toolbar.ToolbarSettingComboBox(options, runtimeSetting.setting, runtimeSetting.title());
                control.setTitle(runtimeSetting.description());
                toolbar.appendToolbarItem(control);
                if (runtimeSetting.learnMore) {
                    var link = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.XLink.XLink.create(runtimeSetting.learnMore, i18nString(UIStrings.learnMore), 'lighthouse-learn-more', undefined, 'learn-more');
                    link.style.margin = '5px';
                    control.element.appendChild(link);
                }
            }
        },
        {
            key: "populateFormControls",
            value: function populateFormControls(fragment, mode) {
                // Populate the device type
                var deviceTypeFormElements = fragment.$('device-type-form-elements');
                this.populateRuntimeSettingAsRadio('lighthouse.device-type', i18nString(UIStrings.device), deviceTypeFormElements);
                // Populate the categories
                var categoryFormElements = fragment.$('categories-form-elements');
                this.checkboxes = [];
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = _LighthouseController_js__WEBPACK_IMPORTED_MODULE_3__.Presets[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var preset = _step.value;
                        preset.setting.setTitle(preset.title());
                        var checkbox = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Toolbar.ToolbarSettingCheckbox(preset.setting, preset.description());
                        var row = categoryFormElements.createChild('div', 'vbox lighthouse-launcher-row');
                        row.appendChild(checkbox.element);
                        checkbox.element.setAttribute('data-lh-category', preset.configID);
                        this.checkboxes.push({
                            preset: preset,
                            checkbox: checkbox
                        });
                        if (mode && !preset.supportedModes.includes(mode)) {
                            checkbox.setEnabled(false);
                            checkbox.setIndeterminate(true);
                        }
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
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.ARIAUtils.markAsGroup(categoryFormElements);
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.ARIAUtils.setLabel(categoryFormElements, i18nString(UIStrings.categories));
            }
        },
        {
            key: "render",
            value: function render() {
                this.populateRuntimeSettingAsToolbarCheckbox('lighthouse.clear-storage', this.settingsToolbarInternal);
                this.populateRuntimeSettingAsToolbarCheckbox('lighthouse.enable-sampling', this.settingsToolbarInternal);
                this.populateRuntimeSettingAsToolbarDropdown('lighthouse.throttling', this.settingsToolbarInternal);
                var mode = this.controller.getFlags().mode;
                this.populateStartButton(mode);
                var fragment = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Fragment.Fragment.build(_templateObject(), i18nString(UIStrings.generateLighthouseReport), this.startButton, i18nString(UIStrings.categories));
                this.helpText = fragment.$('help-text');
                this.warningText = fragment.$('warning-text');
                var modeFormElements = fragment.$('mode-form-elements');
                this.populateRuntimeSettingAsRadio('lighthouse.mode', i18nString(UIStrings.mode), modeFormElements);
                this.populateFormControls(fragment, mode);
                this.contentElement.textContent = '';
                this.contentElement.append(fragment.element());
                this.refresh();
            }
        },
        {
            key: "populateStartButton",
            value: function populateStartButton(mode) {
                var _this = this;
                var buttonLabel;
                var callback;
                if (mode === 'timespan') {
                    buttonLabel = i18nString(UIStrings.startTimespan);
                    callback = function() {
                        void _this.panel.handleTimespanStart();
                    };
                } else if (mode === 'snapshot') {
                    buttonLabel = i18nString(UIStrings.analyzeSnapshot);
                    callback = function() {
                        void _this.panel.handleCompleteRun();
                    };
                } else {
                    buttonLabel = i18nString(UIStrings.analyzeNavigation);
                    callback = function() {
                        void _this.panel.handleCompleteRun();
                    };
                }
                var startButtonContainer = this.contentElement.querySelector('.lighthouse-start-button-container');
                if (startButtonContainer) {
                    startButtonContainer.textContent = '';
                    this.startButton = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.UIUtils.createTextButton(buttonLabel, callback, {
                        variant: "primary" /* Buttons.Button.Variant.PRIMARY */ ,
                        jslogContext: 'lighthouse.start'
                    });
                    startButtonContainer.append(this.startButton);
                }
            }
        },
        {
            key: "refresh",
            value: function refresh() {
                var mode = this.controller.getFlags().mode;
                this.populateStartButton(mode);
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.checkboxes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var _step_value = _step.value, checkbox = _step_value.checkbox, preset = _step_value.preset;
                        if (preset.supportedModes.includes(mode)) {
                            checkbox.setEnabled(true);
                            checkbox.setIndeterminate(false);
                        } else {
                            checkbox.setEnabled(false);
                            checkbox.setIndeterminate(true);
                        }
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
                // Ensure the correct layout is used after refresh.
                this.onResize();
            }
        },
        {
            key: "onResize",
            value: function onResize() {
                var useNarrowLayout = this.contentElement.offsetWidth < 500;
                var useWideLayout = this.contentElement.offsetWidth > 800;
                var headerEl = this.contentElement.querySelector('.lighthouse-start-view header');
                var optionsEl = this.contentElement.querySelector('.lighthouse-options');
                if (headerEl) {
                    headerEl.classList.toggle('hbox', !useNarrowLayout);
                    headerEl.classList.toggle('vbox', useNarrowLayout);
                }
                if (optionsEl) {
                    optionsEl.classList.toggle('wide', useWideLayout);
                    optionsEl.classList.toggle('narrow', useNarrowLayout);
                }
            }
        },
        {
            key: "focusStartButton",
            value: function focusStartButton() {
                this.startButton.focus();
            }
        },
        {
            key: "setStartButtonEnabled",
            value: function setStartButtonEnabled(isEnabled) {
                if (this.helpText) {
                    this.helpText.classList.toggle('hidden', isEnabled);
                }
                if (this.startButton) {
                    this.startButton.disabled = !isEnabled;
                }
            }
        },
        {
            key: "setUnauditableExplanation",
            value: function setUnauditableExplanation(text) {
                if (this.helpText) {
                    this.helpText.textContent = text;
                }
            }
        },
        {
            key: "setWarningText",
            value: function setWarningText(text) {
                if (this.warningText) {
                    this.warningText.textContent = text;
                    this.warningText.classList.toggle('hidden', !text);
                }
            }
        },
        {
            key: "wasShown",
            value: function wasShown() {
                _get(_get_prototype_of(StartView.prototype), "wasShown", this).call(this);
                this.controller.recomputePageAuditability();
                this.registerCSSFiles([
                    _lighthouseStartView_css_js__WEBPACK_IMPORTED_MODULE_4__["default"]
                ]);
            }
        },
        {
            key: "settingsToolbar",
            value: function settingsToolbar() {
                return this.settingsToolbarInternal;
            }
        }
    ]);
    return StartView;
} //# sourceMappingURL=LighthouseStartView.js.map
(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Widget.Widget);


}),
"./panels/lighthouse/RadioSetting.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  RadioSetting: function() { return RadioSetting; }
});
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
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
function _templateObject() {
    var data = _tagged_template_literal([
        '\n  <label $="label" class="lighthouse-radio">\n  <input $="input" type="radio" value=',
        " name=",
        '>\n  <span $="span" class="lighthouse-radio-text">',
        "</span>\n  </label>\n  "
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}

var RadioSetting = /*#__PURE__*/ function() {
    "use strict";
    function RadioSetting(options, setting, description) {
        _class_call_check(this, RadioSetting);
        _define_property(this, "setting", void 0);
        _define_property(this, "options", void 0);
        _define_property(this, "element", void 0);
        _define_property(this, "radioElements", void 0);
        _define_property(this, "ignoreChangeEvents", void 0);
        _define_property(this, "selectedIndex", void 0);
        this.setting = setting;
        this.options = options;
        this.element = document.createElement('div');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__.ARIAUtils.setDescription(this.element, description);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__.ARIAUtils.markAsRadioGroup(this.element);
        this.radioElements = [];
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = this.options[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var option = _step.value;
                var _option_tooltip;
                var fragment = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__.Fragment.Fragment.build(_templateObject(), option.value, setting.name, option.label());
                this.element.appendChild(fragment.element());
                var tooltip = ((_option_tooltip = option.tooltip) === null || _option_tooltip === void 0 ? void 0 : _option_tooltip.call(option)) || description;
                if (description) {
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__.Tooltip.Tooltip.install(fragment.$('input'), tooltip);
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__.Tooltip.Tooltip.install(fragment.$('span'), tooltip);
                }
                var radioElement = fragment.$('input');
                radioElement.addEventListener('change', this.valueChanged.bind(this));
                this.radioElements.push(radioElement);
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
        this.ignoreChangeEvents = false;
        this.selectedIndex = -1;
        setting.addChangeListener(this.settingChanged, this);
        this.settingChanged();
    }
    _create_class(RadioSetting, [
        {
            key: "updateUI",
            value: function updateUI() {
                this.ignoreChangeEvents = true;
                this.radioElements[this.selectedIndex].checked = true;
                this.ignoreChangeEvents = false;
            }
        },
        {
            key: "settingChanged",
            value: function settingChanged() {
                var value = this.setting.get();
                this.selectedIndex = this.options.findIndex(function(option) {
                    return option.value === value;
                });
                this.updateUI();
            }
        },
        {
            key: "valueChanged",
            value: function valueChanged(_event) {
                if (this.ignoreChangeEvents) {
                    return;
                }
                var selectedRadio = this.radioElements.find(function(radio) {
                    return radio.checked;
                });
                if (!selectedRadio) {
                    return;
                }
                this.setting.set(selectedRadio.value);
            }
        }
    ]);
    return RadioSetting;
} //# sourceMappingURL=RadioSetting.js.map
();


}),
"./panels/lighthouse/lighthouseStartView.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync('/*\n * Copyright 2018 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n/* <3 */\n\n.lighthouse-start-view {\n  font-family: Roboto, sans-serif;\n  font-size: var(--font-size);\n  line-height: 18px;\n  padding: 24px;\n  overflow: auto;\n  height: 100%;\n  /* for buttons */\n  --legacy-accent-color: #0535c1;\n  --legacy-accent-color-hover: #17b;\n  --font-size: 14px;\n  --report-font-family: roboto, helvetica, arial, sans-serif;\n}\n\n.lighthouse-start-view header {\n  display: flex;\n  font-size: 18px;\n  flex-direction: row;\n  align-items: center;\n  column-gap: 16px;\n  margin-bottom: 16px;\n}\n\n.lighthouse-logo {\n  width: 75px;\n  height: 75px;\n  flex-shrink: 0;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-image: var(--image-file-lighthouse_logo);\n}\n\n.lighthouse-start-view .lighthouse-logo {\n  width: 45px;\n  height: 45px;\n}\n\n.lighthouse-form-section {\n  padding: 8px;\n  flex: 1 1;\n}\n\n.lighthouse-form-section-label {\n  margin: 7px 0;\n  font-weight: 500;\n}\n\n.lighthouse-form-section-label i span {\n  position: relative;\n  top: -2px;\n}\n\n.lighthouse-form-section-label span.largeicon-checkmark {\n  top: -4px;\n}\n\n.lighthouse-form-section-label .lighthouse-learn-more {\n  margin: 20px;\n}\n\n.lighthouse-radio {\n  display: flex;\n  align-items: center;\n}\n\ninput[type="radio"] {\n  accent-color: var(--sys-color-primary-bright);\n  color: var(--sys-color-on-primary);\n\n  &:focus {\n    outline-width: 2px;\n  }\n}\n\n.lighthouse-radio-text {\n  margin-left: 3px;\n}\n\n.lighthouse-start-button-container {\n  align-items: center;\n}\n\n.lighthouse-start-view header.hbox .lighthouse-start-button-container {\n  margin-left: auto;\n}\n\n.lighthouse-start-view header.vbox .lighthouse-title {\n  text-align: center;\n}\n\n.lighthouse-start-button-container button {\n  margin: 16px auto;\n  font-family: var(--report-font-family);\n  font-weight: 500;\n  font-size: var(--font-size);\n}\n\n.lighthouse-start-button-container button:disabled {\n  cursor: not-allowed;\n}\n\n.lighthouse-launcher-row,\n.lighthouse-radio {\n  &:last-of-type {\n    margin-bottom: 0;\n  }\n\n  &:not(:has(span[is="dt-checkbox"])) {\n    margin-bottom: 6px;\n  }\n}\n\n.lighthouse-launcher-row .dimmed {\n  padding-left: 22px;\n}\n\n.lighthouse-help-text {\n  text-align: center;\n  color: #f00; /* stylelint-disable-line plugin/use_theme_colors */\n  /* See: crbug.com/1152736 for color variable migration. */\n  font-weight: bold;\n  padding-left: 10px;\n}\n\n.lighthouse-warning-text {\n  text-align: left;\n  color: #ff8c00; /* stylelint-disable-line plugin/use_theme_colors */\n  /* See: crbug.com/1152736 for color variable migration. */\n  font-weight: bold;\n  padding-left: 10px;\n  padding-top: 10px;\n}\n\n.lighthouse-warning-text::before {\n  content: "⚠";\n  margin-right: 10px;\n}\n\n.lighthouse-options {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: auto auto;\n}\n\n.lighthouse-options.narrow {\n  grid-template-columns: 1fr;\n  grid-template-rows: auto auto auto;\n}\n\n.lighthouse-options.wide {\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: auto;\n}\n\n/*# sourceURL=lighthouseStartView.css */\n');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);