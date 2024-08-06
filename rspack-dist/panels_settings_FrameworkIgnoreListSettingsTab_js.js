"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_settings_FrameworkIgnoreListSettingsTab_js"], {
"./panels/settings/FrameworkIgnoreListSettingsTab.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  FrameworkIgnoreListSettingsTab: function() { return FrameworkIgnoreListSettingsTab; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _frameworkIgnoreListSettingsTab_css_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./frameworkIgnoreListSettingsTab.css.js */ "./panels/settings/frameworkIgnoreListSettingsTab.css.js");
// Copyright 2014 The Chromium Authors. All rights reserved.
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
     *@description Header text content in Framework Ignore List Settings Tab of the Settings
     */ frameworkIgnoreList: 'Framework Ignore List',
    /**
     *@description Text in Framework Ignore List Settings Tab of the Settings
     */ debuggerWillSkipThroughThe: 'Debugger will skip through the scripts and will not stop on exceptions thrown by them.',
    /**
     *@description Text in Framework Ignore List Settings Tab of the Settings
     */ ignoreListContentScripts: 'Content scripts injected by extensions',
    /**
     *@description Text in Framework Ignore List Settings Tab of the Settings
     */ automaticallyIgnoreListKnownThirdPartyScripts: 'Known third-party scripts from source maps',
    /**
     *@description Text in Framework Ignore List Settings Tab of the Settings
     */ enableIgnoreListing: 'Enable Ignore Listing',
    /**
     *@description Text in Framework Ignore List Settings Tab of the Settings
     */ enableIgnoreListingTooltip: 'Uncheck to disable all ignore listing',
    /**
     *@description Text in Framework Ignore List Settings Tab of the Settings
     */ generalExclusionRules: 'General exclusion rules:',
    /**
     *@description Text in Framework Ignore List Settings Tab of the Settings
     */ customExclusionRules: 'Custom exclusion rules:',
    /**
     *@description Text of the add pattern button in Framework Ignore List Settings Tab of the Settings
     */ addPattern: 'Add pattern...',
    /**
     *@description Aria accessible name in Framework Ignore List Settings Tab of the Settings
     */ addFilenamePattern: 'Add filename pattern',
    /**
     *@description Pattern title in Framework Ignore List Settings Tab of the Settings
     *@example {ad.*?} PH1
     */ ignoreScriptsWhoseNamesMatchS: 'Ignore scripts whose names match \'\'{PH1}\'\'',
    /**
     *@description Aria accessible name in Framework Ignore List Settings Tab of the Settings. It labels the input
     * field used to add new or edit existing regular expressions that match file names to ignore in the debugger.
     */ pattern: 'Add Pattern',
    /**
     *@description Error message in Framework Ignore List settings pane that declares pattern must not be empty
     */ patternCannotBeEmpty: 'Pattern cannot be empty',
    /**
     *@description Error message in Framework Ignore List settings pane that declares pattern already exits
     */ patternAlreadyExists: 'Pattern already exists',
    /**
     *@description Error message in Framework Ignore List settings pane that declares pattern must be a valid regular expression
     */ patternMustBeAValidRegular: 'Pattern must be a valid regular expression',
    /**
     *@description Text that is usually a hyperlink to more documentation
     */ learnMore: 'Learn more'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/settings/FrameworkIgnoreListSettingsTab.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
var FrameworkIgnoreListSettingsTab = /*#__PURE__*/ function(_UI_Widget_VBox) {
    "use strict";
    _inherits(FrameworkIgnoreListSettingsTab, _UI_Widget_VBox);
    var _super = _create_super(FrameworkIgnoreListSettingsTab);
    function FrameworkIgnoreListSettingsTab() {
        _class_call_check(this, FrameworkIgnoreListSettingsTab);
        var _this;
        var enabledChanged = function enabledChanged() {
            var enabled = enabledSetting.get();
            if (enabled) {
                ignoreListOptions.classList.remove('ignore-listing-disabled');
            } else {
                ignoreListOptions.classList.add('ignore-listing-disabled');
            }
        };
        _this = _super.call(this, true);
        _define_property(_assert_this_initialized(_this), "list", void 0);
        _define_property(_assert_this_initialized(_this), "setting", void 0);
        _define_property(_assert_this_initialized(_this), "editor", void 0);
        _this.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.pane('blackbox')));
        var header = _this.contentElement.createChild('div', 'header');
        header.textContent = i18nString(UIStrings.frameworkIgnoreList);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ARIAUtils.markAsHeading(header, 1);
        _this.contentElement.createChild('div', 'intro').textContent = i18nString(UIStrings.debuggerWillSkipThroughThe);
        var enabledSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('enable-ignore-listing');
        var enableIgnoreListing = _this.contentElement.createChild('div', 'ignore-list-global-enable');
        enableIgnoreListing.appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.SettingsUI.createSettingCheckbox(i18nString(UIStrings.enableIgnoreListing), enabledSetting, true));
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Tooltip.Tooltip.install(enableIgnoreListing, i18nString(UIStrings.enableIgnoreListingTooltip));
        var ignoreListOptions = _this.contentElement.createChild('div', 'ignore-list-options');
        var generalExclusionGroup = _this.createSettingGroup(i18nString(UIStrings.generalExclusionRules));
        ignoreListOptions.appendChild(generalExclusionGroup);
        var ignoreListContentScripts = generalExclusionGroup.createChild('div', 'ignore-list-option');
        ignoreListContentScripts.appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.SettingsUI.createSettingCheckbox(i18nString(UIStrings.ignoreListContentScripts), _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('skip-content-scripts'), true));
        var automaticallyIgnoreList = generalExclusionGroup.createChild('div', 'ignore-list-option');
        automaticallyIgnoreList.appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.SettingsUI.createSettingCheckbox(i18nString(UIStrings.automaticallyIgnoreListKnownThirdPartyScripts), _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('automatically-ignore-list-known-third-party-scripts'), true));
        var automaticallyIgnoreLink = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.XLink.XLink.create('http://goo.gle/skip-third-party', undefined, undefined, undefined, 'learn-more');
        automaticallyIgnoreLink.textContent = '';
        automaticallyIgnoreLink.setAttribute('aria-label', i18nString(UIStrings.learnMore));
        var automaticallyIgnoreLinkIcon = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__.Icon.Icon();
        automaticallyIgnoreLinkIcon.data = {
            iconName: 'help',
            color: 'var(--icon-default)',
            width: '16px',
            height: '16px'
        };
        automaticallyIgnoreLink.prepend(automaticallyIgnoreLinkIcon);
        automaticallyIgnoreList.appendChild(automaticallyIgnoreLink);
        var customExclusionGroup = _this.createSettingGroup(i18nString(UIStrings.customExclusionRules));
        ignoreListOptions.appendChild(customExclusionGroup);
        _this.list = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ListWidget.ListWidget(_assert_this_initialized(_this));
        _this.list.element.classList.add('ignore-list');
        var placeholder = document.createElement('div');
        placeholder.classList.add('ignore-list-empty');
        _this.list.setEmptyPlaceholder(placeholder);
        _this.list.show(customExclusionGroup);
        var addPatternButton = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.UIUtils.createTextButton(i18nString(UIStrings.addPattern), _this.addButtonClicked.bind(_assert_this_initialized(_this)), {
            className: 'add-button',
            jslogContext: 'settings.add-ignore-list-pattern'
        });
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ARIAUtils.setLabel(addPatternButton, i18nString(UIStrings.addFilenamePattern));
        customExclusionGroup.appendChild(addPatternButton);
        _this.setting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('skip-stack-frames-pattern');
        _this.setting.addChangeListener(_this.settingUpdated, _assert_this_initialized(_this));
        _this.setDefaultFocusedElement(addPatternButton);
        enabledSetting.addChangeListener(enabledChanged);
        enabledChanged();
        return _this;
    }
    _create_class(FrameworkIgnoreListSettingsTab, [
        {
            key: "wasShown",
            value: function wasShown() {
                _get(_get_prototype_of(FrameworkIgnoreListSettingsTab.prototype), "wasShown", this).call(this);
                this.list.registerCSSFiles([
                    _frameworkIgnoreListSettingsTab_css_js__WEBPACK_IMPORTED_MODULE_5__["default"]
                ]);
                this.registerCSSFiles([
                    _frameworkIgnoreListSettingsTab_css_js__WEBPACK_IMPORTED_MODULE_5__["default"]
                ]);
                this.settingUpdated();
            }
        },
        {
            key: "settingUpdated",
            value: function settingUpdated() {
                this.list.clear();
                var patterns = this.setting.getAsArray();
                for(var i = 0; i < patterns.length; ++i){
                    this.list.appendItem(patterns[i], true);
                }
            }
        },
        {
            key: "addButtonClicked",
            value: function addButtonClicked() {
                this.list.addNewItem(this.setting.getAsArray().length, {
                    pattern: '',
                    disabled: false
                });
            }
        },
        {
            key: "createSettingGroup",
            value: function createSettingGroup(title) {
                var group = document.createElement('div');
                group.classList.add('ignore-list-option-group');
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ARIAUtils.markAsGroup(group);
                var groupTitle = group.createChild('div', 'ignore-list-option-group-title');
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ARIAUtils.markAsHeading(groupTitle, 2);
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ARIAUtils.setLabel(group, title);
                groupTitle.textContent = title;
                return group;
            }
        },
        {
            key: "renderItem",
            value: function renderItem(item, _editable) {
                var element = document.createElement('div');
                var listSetting = this.setting;
                var checkbox = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.UIUtils.CheckboxLabel.create(item.pattern, !item.disabled, undefined, 'settings.ignore-list-pattern');
                var helpText = i18nString(UIStrings.ignoreScriptsWhoseNamesMatchS, {
                    PH1: item.pattern
                });
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Tooltip.Tooltip.install(checkbox, helpText);
                checkbox.checkboxElement.ariaLabel = helpText;
                checkbox.checkboxElement.addEventListener('change', inputChanged, false);
                element.appendChild(checkbox);
                element.classList.add('ignore-list-item');
                return element;
                function inputChanged() {
                    var disabled = !checkbox.checkboxElement.checked;
                    if (item.disabled !== disabled) {
                        item.disabled = disabled;
                        item.disabledForUrl = undefined;
                        // Send changed event
                        listSetting.setAsArray(listSetting.getAsArray());
                    }
                }
            }
        },
        {
            key: "removeItemRequested",
            value: function removeItemRequested(item, index) {
                var patterns = this.setting.getAsArray();
                patterns.splice(index, 1);
                this.setting.setAsArray(patterns);
            }
        },
        {
            key: "commitEdit",
            value: function commitEdit(item, editor, isNew) {
                item.pattern = editor.control('pattern').value.trim();
                var list = this.setting.getAsArray();
                if (isNew) {
                    list.push(item);
                }
                this.setting.setAsArray(list);
            }
        },
        {
            key: "beginEdit",
            value: function beginEdit(item) {
                var editor = this.createEditor();
                editor.control('pattern').value = item.pattern;
                return editor;
            }
        },
        {
            key: "createEditor",
            value: function createEditor() {
                if (this.editor) {
                    return this.editor;
                }
                var editor = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ListWidget.Editor();
                this.editor = editor;
                var content = editor.contentElement();
                var titles = content.createChild('div', 'ignore-list-edit-row');
                titles.createChild('div', 'ignore-list-pattern').textContent = i18nString(UIStrings.pattern);
                var fields = content.createChild('div', 'ignore-list-edit-row');
                var pattern = editor.createInput('pattern', 'text', '/framework\\.js$', patternValidator.bind(this));
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ARIAUtils.setLabel(pattern, i18nString(UIStrings.pattern));
                fields.createChild('div', 'ignore-list-pattern').appendChild(pattern);
                return editor;
                function patternValidator(item, index, input) {
                    var pattern = input.value.trim();
                    var patterns = this.setting.getAsArray();
                    if (!pattern.length) {
                        return {
                            valid: false,
                            errorMessage: i18nString(UIStrings.patternCannotBeEmpty)
                        };
                    }
                    for(var i = 0; i < patterns.length; ++i){
                        if (i !== index && patterns[i].pattern === pattern) {
                            return {
                                valid: false,
                                errorMessage: i18nString(UIStrings.patternAlreadyExists)
                            };
                        }
                    }
                    var regex;
                    try {
                        regex = new RegExp(pattern);
                    } catch (e) {}
                    if (!regex) {
                        return {
                            valid: false,
                            errorMessage: i18nString(UIStrings.patternMustBeAValidRegular)
                        };
                    }
                    return {
                        valid: true,
                        errorMessage: undefined
                    };
                }
            }
        }
    ]);
    return FrameworkIgnoreListSettingsTab;
} //# sourceMappingURL=FrameworkIgnoreListSettingsTab.js.map
(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Widget.VBox);


}),
"./panels/settings/frameworkIgnoreListSettingsTab.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync('/*\n * Copyright 2015 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n:host {\n  overflow: hidden;\n}\n\n.header {\n  padding: 0 0 6px;\n  border-bottom: 1px solid var(--sys-color-divider);\n  font-size: 18px;\n  font-weight: normal;\n  flex: none;\n}\n\n.intro {\n  margin-top: 10px;\n}\n\n.ignore-list-option {\n  flex: none;\n  padding: 3px 6px;\n  min-height: 30px;\n}\n\n.ignore-list-option devtools-icon {\n  margin-bottom: -1px;\n}\n\n.ignore-list-option-group {\n  margin-top: 13px;\n  margin-bottom: 3px;\n  margin-left: 8px;\n  flex-shrink: 0;\n}\n\n.add-button {\n  margin: 10px 2px;\n  align-self: flex-start;\n  flex: none;\n}\n\n.ignore-list {\n  max-width: 500px;\n  flex: 0 1 auto;\n}\n\n.ignore-list-global-enable {\n  padding: 3px 0;\n  color: var(--sys-color-token-subtle);\n  font-size: 120%;\n  margin-top: 17px;\n}\n\n.ignore-list-item {\n  padding: 3px 5px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  position: relative;\n  flex: auto 1 1;\n}\n\n.ignore-list-pattern {\n  flex: auto;\n  min-width: 100px;\n}\n\n.ignore-list-item > [is="dt-checkbox"] {\n  width: 100%;\n}\n\n.ignore-list-item .ignore-list-pattern {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  user-select: none;\n  color: var(--sys-color-on-surface);\n  overflow: hidden;\n}\n\n.ignore-list-edit-row {\n  flex: none;\n  display: flex;\n  flex-direction: row;\n  margin: 6px 5px;\n  align-items: center;\n}\n\n.ignore-list-edit-row input,\n.ignore-list-edit-row select {\n  width: 100%;\n  text-align: inherit;\n}\n\n.ignore-list-options {\n  margin-left: 22px;\n  display: flex;\n  flex-direction: column;\n}\n\n.ignore-list-options.ignore-listing-disabled {\n  opacity: 30%;\n}\n\n.list:has(.ignore-list-empty),\n.list:has(.ignore-list-edit-row),\n.list:has(.ignore-list-item) {\n  border: none;\n}\n\n.editor-container:has(.ignore-list-edit-row) {\n  background: var(--sys-color-surface1);\n  border-radius: 10px;\n}\n\n.ignore-list.list-editing ~ .add-button {\n  display: none;\n}\n\n.devtools-link:has(devtools-icon) {\n  margin-left: 6px;\n}\n\n/*# sourceURL=frameworkIgnoreListSettingsTab.css */\n');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);