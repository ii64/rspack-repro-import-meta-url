"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_settings_SettingsScreen_js"], {
"./panels/settings/SettingsScreen.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ActionDelegate: function() { return ActionDelegate; },
  ExperimentsSettingsTab: function() { return ExperimentsSettingsTab; },
  GenericSettingsTab: function() { return GenericSettingsTab; },
  Revealer: function() { return Revealer; },
  SettingsScreen: function() { return SettingsScreen; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_root_root_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/root/root.js */ "./core/root/root.js");
/* harmony import */var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/components/utils/utils.js */ "./ui/legacy/components/utils/utils.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _utils_utils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/utils.js */ "./panels/utils/utils.js");
/* harmony import */var _components_components_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/components.js */ "./panels/settings/components/components.js");
/* harmony import */var _settingsScreen_css_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./settingsScreen.css.js */ "./panels/settings/settingsScreen.css.js");
/*
 * Copyright (C) 2013 Google Inc. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Google Inc. nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
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
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}











var UIStrings = {
    /**
     *@description Name of the Settings view
     */ settings: 'Settings',
    /**
     *@description Text for keyboard shortcuts
     */ shortcuts: 'Shortcuts',
    /**
     *@description Text in Settings Screen of the Settings
     */ preferences: 'Preferences',
    /**
     *@description Text of button in Settings Screen of the Settings
     */ restoreDefaultsAndReload: 'Restore defaults and reload',
    /**
     *@description Text in Settings Screen of the Settings
     */ experiments: 'Experiments',
    /**
     *@description Message shown in the experiments panel to warn users about any possible unstable features.
     */ theseExperimentsCouldBeUnstable: 'These experiments could be unstable or unreliable and may require you to restart DevTools.',
    /**
     *@description Message text content in Settings Screen of the Settings
     */ theseExperimentsAreParticularly: 'These experiments are particularly unstable. Enable at your own risk.',
    /**
     *@description Warning text content in Settings Screen of the Settings
     */ warning: 'WARNING:',
    /**
     *@description Message to display if a setting change requires a reload of DevTools
     */ oneOrMoreSettingsHaveChanged: 'One or more settings have changed which requires a reload to take effect.',
    /**
     * @description Label for a filter text input that controls which experiments are shown.
     */ filterExperimentsLabel: 'Filter',
    /**
     * @description Warning text shown when the user has entered text to filter the
     * list of experiments, but no experiments match the filter.
     */ noResults: 'No experiments match the filter',
    /**
     *@description Text that is usually a hyperlink to more documentation
     */ learnMore: 'Learn more',
    /**
     *@description Text that is usually a hyperlink to a feedback form
     */ sendFeedback: 'Send feedback'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/settings/SettingsScreen.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
var settingsScreenInstance;
var SettingsScreen = /*#__PURE__*/ function(_UI_Widget_VBox) {
    "use strict";
    _inherits(SettingsScreen, _UI_Widget_VBox);
    var _super = _create_super(SettingsScreen);
    function SettingsScreen() {
        _class_call_check(this, SettingsScreen);
        var _this;
        _this = _super.call(this, true);
        _define_property(_assert_this_initialized(_this), "tabbedLocation", void 0);
        _define_property(_assert_this_initialized(_this), "keybindsTab", void 0);
        _define_property(_assert_this_initialized(_this), "reportTabOnReveal", void 0);
        _this.contentElement.classList.add('settings-window-main');
        _this.contentElement.classList.add('vbox');
        var settingsLabelElement = document.createElement('div');
        settingsLabelElement.classList.add('settings-window-label-element');
        var settingsTitleElement = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createShadowRootWithCoreStyles(settingsLabelElement, {
            cssFile: [
                _settingsScreen_css_js__WEBPACK_IMPORTED_MODULE_10__["default"]
            ],
            delegatesFocus: undefined
        }).createChild('div', 'settings-window-title');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.markAsHeading(settingsTitleElement, 1);
        settingsTitleElement.textContent = i18nString(UIStrings.settings);
        _this.tabbedLocation = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ViewManager.ViewManager.instance().createTabbedLocation(function() {
            return SettingsScreen.revealSettingsScreen();
        }, 'settings-view');
        var tabbedPane = _this.tabbedLocation.tabbedPane();
        tabbedPane.registerCSSFiles([
            _settingsScreen_css_js__WEBPACK_IMPORTED_MODULE_10__["default"]
        ]);
        tabbedPane.headerElement().prepend(settingsLabelElement);
        tabbedPane.setShrinkableTabs(false);
        tabbedPane.makeVerticalTabLayout();
        var keyBindsView = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ViewManager.ViewManager.instance().view('keybinds');
        if (keyBindsView) {
            void keyBindsView.widget().then(function(widget) {
                _this.keybindsTab = widget;
            });
        }
        tabbedPane.show(_this.contentElement);
        tabbedPane.selectTab('preferences');
        tabbedPane.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.TabbedPane.Events.TabInvoked, _this.tabInvoked, _assert_this_initialized(_this));
        _this.reportTabOnReveal = false;
        return _this;
    }
    _create_class(SettingsScreen, [
        {
            key: "resolveLocation",
            value: function resolveLocation(_locationName) {
                return this.tabbedLocation;
            }
        },
        {
            key: "selectTab",
            value: function selectTab(name) {
                this.tabbedLocation.tabbedPane().selectTab(name, /* userGesture */ true);
            }
        },
        {
            key: "tabInvoked",
            value: function tabInvoked(event) {
                var eventData = event.data;
                if (!eventData.isUserGesture) {
                    return;
                }
                var prevTabId = eventData.prevTabId;
                var tabId = eventData.tabId;
                if (!this.reportTabOnReveal && prevTabId && prevTabId === tabId) {
                    return;
                }
                this.reportTabOnReveal = false;
                this.reportSettingsPanelShown(tabId);
            }
        },
        {
            key: "reportSettingsPanelShown",
            value: function reportSettingsPanelShown(tabId) {
                if (tabId === i18nString(UIStrings.shortcuts)) {
                    _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.settingsPanelShown('shortcuts');
                    return;
                }
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.settingsPanelShown(tabId);
            }
        },
        {
            key: "onEscapeKeyPressed",
            value: function onEscapeKeyPressed(event) {
                if (this.tabbedLocation.tabbedPane().selectedTabId === 'keybinds' && this.keybindsTab) {
                    this.keybindsTab.onEscapeKeyPressed(event);
                }
            }
        },
        {
            key: "wasShown",
            value: function wasShown() {
                _get(_get_prototype_of(SettingsScreen.prototype), "wasShown", this).call(this);
                this.registerCSSFiles([
                    _settingsScreen_css_js__WEBPACK_IMPORTED_MODULE_10__["default"]
                ]);
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
                if (!settingsScreenInstance || forceNew) {
                    settingsScreenInstance = new SettingsScreen();
                }
                return settingsScreenInstance;
            }
        },
        {
            key: "revealSettingsScreen",
            value: function revealSettingsScreen() {
                var settingsScreen = SettingsScreen.instance();
                if (settingsScreen.isShowing()) {
                    return settingsScreen;
                }
                settingsScreen.reportTabOnReveal = true;
                var dialog = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Dialog.Dialog('settings');
                dialog.contentElement.tabIndex = -1;
                dialog.addCloseButton();
                dialog.setOutsideClickCallback(function() {});
                dialog.setPointerEventsBehavior("PierceGlassPane" /* UI.GlassPane.PointerEventsBehavior.PierceGlassPane */ );
                dialog.setOutsideTabIndexBehavior("PreserveMainViewTabIndex" /* UI.Dialog.OutsideTabIndexBehavior.PreserveMainViewTabIndex */ );
                settingsScreen.show(dialog.contentElement);
                dialog.setEscapeKeyCallback(settingsScreen.onEscapeKeyPressed.bind(settingsScreen));
                dialog.setMarginBehavior("NoMargin" /* UI.GlassPane.MarginBehavior.NoMargin */ );
                // UI.Dialog extends GlassPane and overrides the `show` method with a wider
                // accepted type. However, TypeScript uses the supertype declaration to
                // determine the full type, which requires a `!Document`.
                // @ts-ignore
                dialog.show();
                return settingsScreen;
            }
        },
        {
            key: "showSettingsScreen",
            value: function showSettingsScreen() {
                var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
                    name: undefined,
                    focusTabHeader: undefined
                };
                return _async_to_generator(function() {
                    var name, focusTabHeader, settingsScreen, tabbedPane;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                name = options.name, focusTabHeader = options.focusTabHeader;
                                settingsScreen = SettingsScreen.revealSettingsScreen();
                                settingsScreen.selectTab(name || 'preferences');
                                tabbedPane = settingsScreen.tabbedLocation.tabbedPane();
                                return [
                                    4,
                                    tabbedPane.waitForTabElementUpdate()
                                ];
                            case 1:
                                _state.sent();
                                if (focusTabHeader) {
                                    tabbedPane.focusSelectedTabHeader();
                                } else {
                                    tabbedPane.focus();
                                }
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return SettingsScreen;
}(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Widget.VBox);
var SettingsTab = /*#__PURE__*/ function(_UI_Widget_VBox) {
    "use strict";
    _inherits(SettingsTab, _UI_Widget_VBox);
    var _super = _create_super(SettingsTab);
    function SettingsTab(name, id) {
        _class_call_check(this, SettingsTab);
        var _this;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "containerElement", void 0);
        _this.element.classList.add('settings-tab-container');
        if (id) {
            _this.element.id = id;
        }
        var header = _this.element.createChild('header');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createTextChild(header.createChild('h1'), name);
        _this.containerElement = _this.element.createChild('div', 'settings-container-wrapper').createChild('div', 'settings-tab settings-content settings-container');
        return _this;
    }
    _create_class(SettingsTab, [
        {
            key: "appendSection",
            value: function appendSection(name) {
                var block = this.containerElement.createChild('div', 'settings-block');
                if (name) {
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.markAsGroup(block);
                    var title = block.createChild('div', 'settings-section-title');
                    title.textContent = name;
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.markAsHeading(title, 2);
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.setLabel(block, name);
                }
                return block;
            }
        }
    ]);
    return SettingsTab;
}(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Widget.VBox);
var GenericSettingsTab = /*#__PURE__*/ function(SettingsTab) {
    "use strict";
    _inherits(GenericSettingsTab, SettingsTab);
    var _super = _create_super(GenericSettingsTab);
    function GenericSettingsTab() {
        _class_call_check(this, GenericSettingsTab);
        var _this;
        var restoreAndReload = function restoreAndReload() {
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().clearAll();
            _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_5__.Reload.reload();
        };
        _this = _super.call(this, i18nString(UIStrings.preferences), 'preferences-tab-content');
        _define_property(_assert_this_initialized(_this), "syncSection", new _components_components_js__WEBPACK_IMPORTED_MODULE_9__.SyncSection.SyncSection());
        _define_property(_assert_this_initialized(_this), "settingToControl", new Map());
        _this.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.pane('preferences')));
        // GRID, MOBILE, EMULATION, and RENDERING are intentionally excluded from this list.
        var explicitSectionOrder = [
            "" /* Common.Settings.SettingCategory.NONE */ ,
            "APPEARANCE" /* Common.Settings.SettingCategory.APPEARANCE */ ,
            "SOURCES" /* Common.Settings.SettingCategory.SOURCES */ ,
            "ELEMENTS" /* Common.Settings.SettingCategory.ELEMENTS */ ,
            "NETWORK" /* Common.Settings.SettingCategory.NETWORK */ ,
            "PERFORMANCE" /* Common.Settings.SettingCategory.PERFORMANCE */ ,
            "MEMORY" /* Common.Settings.SettingCategory.MEMORY */ ,
            "CONSOLE" /* Common.Settings.SettingCategory.CONSOLE */ ,
            "EXTENSIONS" /* Common.Settings.SettingCategory.EXTENSIONS */ ,
            "PERSISTENCE" /* Common.Settings.SettingCategory.PERSISTENCE */ ,
            "DEBUGGER" /* Common.Settings.SettingCategory.DEBUGGER */ ,
            "GLOBAL" /* Common.Settings.SettingCategory.GLOBAL */ ,
            "SYNC" /* Common.Settings.SettingCategory.SYNC */ 
        ];
        // Some settings define their initial ordering.
        var preRegisteredSettings = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().getRegisteredSettings().sort(function(firstSetting, secondSetting) {
            if (firstSetting.order && secondSetting.order) {
                return firstSetting.order - secondSetting.order;
            }
            if (firstSetting.order) {
                return -1;
            }
            if (secondSetting.order) {
                return 1;
            }
            return 0;
        });
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            var _loop = function() {
                var sectionCategory = _step.value;
                var settingsForSection = preRegisteredSettings.filter(function(setting) {
                    return setting.category === sectionCategory && GenericSettingsTab.isSettingVisible(setting);
                });
                _this.createSectionElement(sectionCategory, settingsForSection);
            };
            for(var _iterator = explicitSectionOrder[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
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
        var restoreAndReloadButton = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createTextButton(i18nString(UIStrings.restoreDefaultsAndReload), restoreAndReload, {
            jslogContext: 'settings.restore-defaults-and-reload'
        });
        _this.appendSection().appendChild(restoreAndReloadButton);
        return _this;
    }
    _create_class(GenericSettingsTab, [
        {
            key: "wasShown",
            value: function wasShown() {
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Context.Context.instance().setFlavor(GenericSettingsTab, this);
                _get(_get_prototype_of(GenericSettingsTab.prototype), "wasShown", this).call(this);
                this.updateSyncSection();
            }
        },
        {
            key: "willHide",
            value: function willHide() {
                _get(_get_prototype_of(GenericSettingsTab.prototype), "willHide", this).call(this);
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Context.Context.instance().setFlavor(GenericSettingsTab, null);
            }
        },
        {
            key: "updateSyncSection",
            value: function updateSyncSection() {
                var _this = this;
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.getSyncInformation(function(syncInfo) {
                    _this.syncSection.data = {
                        syncInfo: syncInfo,
                        syncSetting: _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.moduleSetting('sync-preferences')
                    };
                });
            }
        },
        {
            key: "createExtensionSection",
            value: function createExtensionSection(settings) {
                var sectionName = "EXTENSIONS" /* Common.Settings.SettingCategory.EXTENSIONS */ ;
                var settingUI = _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_5__.Linkifier.LinkHandlerSettingUI.instance();
                var element = settingUI.settingElement();
                if (element) {
                    var sectionElement = this.createStandardSectionElement(sectionName, settings);
                    sectionElement.appendChild(element);
                }
            }
        },
        {
            key: "createSectionElement",
            value: function createSectionElement(category, settings) {
                // Always create the EXTENSIONS section and append the link handling control.
                if (category === "EXTENSIONS" /* Common.Settings.SettingCategory.EXTENSIONS */ ) {
                    this.createExtensionSection(settings);
                } else if (category === "SYNC" /* Common.Settings.SettingCategory.SYNC */  && settings.length > 0) {
                    this.containerElement.appendChild(this.syncSection);
                } else if (settings.length > 0) {
                    this.createStandardSectionElement(category, settings);
                }
            }
        },
        {
            key: "createStandardSectionElement",
            value: function createStandardSectionElement(category, settings) {
                var uiSectionName = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.getLocalizedSettingsCategory(category);
                var sectionElement = this.appendSection(uiSectionName);
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = settings[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var settingRegistration = _step.value;
                        var setting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting(settingRegistration.settingName);
                        var settingControl = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.SettingsUI.createControlForSetting(setting);
                        if (settingControl) {
                            this.settingToControl.set(setting, settingControl);
                            sectionElement.appendChild(settingControl);
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
                return sectionElement;
            }
        },
        {
            key: "highlightObject",
            value: function highlightObject(setting) {
                if (_instanceof(setting, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Setting)) {
                    var element = this.settingToControl.get(setting);
                    if (element) {
                        _utils_utils_js__WEBPACK_IMPORTED_MODULE_8__.PanelUtils.highlightElement(element);
                    }
                }
            }
        }
    ], [
        {
            key: "isSettingVisible",
            value: function isSettingVisible(setting) {
                var _setting_title;
                return Boolean((_setting_title = setting.title) === null || _setting_title === void 0 ? void 0 : _setting_title.call(setting)) && Boolean(setting.category);
            }
        }
    ]);
    return GenericSettingsTab;
}(SettingsTab);
var _experimentsSection = /*#__PURE__*/ new WeakMap(), _unstableExperimentsSection = /*#__PURE__*/ new WeakMap(), _inputElement = /*#__PURE__*/ new WeakMap();
var ExperimentsSettingsTab = /*#__PURE__*/ function(SettingsTab) {
    "use strict";
    _inherits(ExperimentsSettingsTab, SettingsTab);
    var _super = _create_super(ExperimentsSettingsTab);
    function ExperimentsSettingsTab() {
        _class_call_check(this, ExperimentsSettingsTab);
        var _this;
        _this = _super.call(this, i18nString(UIStrings.experiments), 'experiments-tab-content');
        _class_private_field_init(_assert_this_initialized(_this), _experimentsSection, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _unstableExperimentsSection, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _inputElement, {
            writable: true,
            value: void 0
        });
        _define_property(_assert_this_initialized(_this), "experimentToControl", new Map());
        var filterSection = _this.appendSection();
        filterSection.classList.add('experiments-filter');
        _this.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.pane('experiments')));
        var labelElement = filterSection.createChild('label');
        labelElement.textContent = i18nString(UIStrings.filterExperimentsLabel);
        _class_private_field_set(_assert_this_initialized(_this), _inputElement, _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createInput('', 'text', 'experiments-filter'));
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.bindLabelToControl(labelElement, _class_private_field_get(_assert_this_initialized(_this), _inputElement));
        filterSection.appendChild(_class_private_field_get(_assert_this_initialized(_this), _inputElement));
        _class_private_field_get(_this, _inputElement).addEventListener('input', function() {
            return _this.renderExperiments(_class_private_field_get(_this, _inputElement).value.toLowerCase());
        }, false);
        _this.setDefaultFocusedElement(_class_private_field_get(_assert_this_initialized(_this), _inputElement));
        _this.setFilter('');
        return _this;
    }
    _create_class(ExperimentsSettingsTab, [
        {
            key: "renderExperiments",
            value: function renderExperiments(filterText) {
                this.experimentToControl.clear();
                if (_class_private_field_get(this, _experimentsSection)) {
                    _class_private_field_get(this, _experimentsSection).remove();
                }
                if (_class_private_field_get(this, _unstableExperimentsSection)) {
                    _class_private_field_get(this, _unstableExperimentsSection).remove();
                }
                var experiments = _core_root_root_js__WEBPACK_IMPORTED_MODULE_3__.Runtime.experiments.allConfigurableExperiments().sort();
                var unstableExperiments = experiments.filter(function(e) {
                    return e.unstable && e.title.toLowerCase().includes(filterText);
                });
                var stableExperiments = experiments.filter(function(e) {
                    return !e.unstable && e.title.toLowerCase().includes(filterText);
                });
                if (stableExperiments.length) {
                    _class_private_field_set(this, _experimentsSection, this.appendSection());
                    var warningMessage = i18nString(UIStrings.theseExperimentsCouldBeUnstable);
                    _class_private_field_get(this, _experimentsSection).appendChild(this.createExperimentsWarningSubsection(warningMessage));
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = stableExperiments[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var experiment = _step.value;
                            _class_private_field_get(this, _experimentsSection).appendChild(this.createExperimentCheckbox(experiment));
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
                }
                if (unstableExperiments.length) {
                    _class_private_field_set(this, _unstableExperimentsSection, this.appendSection());
                    var warningMessage1 = i18nString(UIStrings.theseExperimentsAreParticularly);
                    _class_private_field_get(this, _unstableExperimentsSection).appendChild(this.createExperimentsWarningSubsection(warningMessage1));
                    var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                    try {
                        for(var _iterator1 = unstableExperiments[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                            var experiment1 = _step1.value;
                            _class_private_field_get(this, _unstableExperimentsSection).appendChild(this.createExperimentCheckbox(experiment1));
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
                if (!stableExperiments.length && !unstableExperiments.length) {
                    _class_private_field_set(this, _experimentsSection, this.appendSection());
                    var warning = _class_private_field_get(this, _experimentsSection).createChild('span');
                    warning.textContent = i18nString(UIStrings.noResults);
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.alert(warning.textContent);
                }
            }
        },
        {
            key: "createExperimentsWarningSubsection",
            value: function createExperimentsWarningSubsection(warningMessage) {
                var subsection = document.createElement('div');
                var warning = subsection.createChild('span', 'settings-experiments-warning-subsection-warning');
                warning.textContent = i18nString(UIStrings.warning);
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createTextChild(subsection, ' ');
                var message = subsection.createChild('span', 'settings-experiments-warning-subsection-message');
                message.textContent = warningMessage;
                return subsection;
            }
        },
        {
            key: "createExperimentCheckbox",
            value: function createExperimentCheckbox(experiment) {
                var label = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.CheckboxLabel.create(experiment.title, experiment.isEnabled(), undefined, experiment.name);
                label.classList.add('experiment-label');
                var input = label.checkboxElement;
                input.name = experiment.name;
                function listener() {
                    experiment.setEnabled(input.checked);
                    _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.experimentChanged(experiment.name, experiment.isEnabled());
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.InspectorView.InspectorView.instance().displayReloadRequiredWarning(i18nString(UIStrings.oneOrMoreSettingsHaveChanged));
                }
                input.addEventListener('click', listener, false);
                var p = document.createElement('p');
                this.experimentToControl.set(experiment, p);
                p.classList.add('settings-experiment');
                if (experiment.unstable && !experiment.isEnabled()) {
                    p.classList.add('settings-experiment-unstable');
                }
                p.appendChild(label);
                if (experiment.docLink) {
                    var link = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.XLink.XLink.create(experiment.docLink, undefined, undefined, undefined, "".concat(experiment.name, "-documentation"));
                    link.textContent = '';
                    link.setAttribute('aria-label', i18nString(UIStrings.learnMore));
                    var linkIcon = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__.Icon.Icon();
                    linkIcon.data = {
                        iconName: 'help',
                        color: 'var(--icon-default)',
                        width: '16px',
                        height: '16px'
                    };
                    linkIcon.classList.add('link-icon');
                    link.prepend(linkIcon);
                    p.appendChild(link);
                }
                if (experiment.feedbackLink) {
                    var link1 = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.XLink.XLink.create(experiment.feedbackLink, undefined, undefined, undefined, "".concat(experiment.name, "-feedback"));
                    link1.textContent = i18nString(UIStrings.sendFeedback);
                    link1.classList.add('feedback-link');
                    p.appendChild(link1);
                }
                return p;
            }
        },
        {
            key: "highlightObject",
            value: function highlightObject(experiment) {
                if (_instanceof(experiment, _core_root_root_js__WEBPACK_IMPORTED_MODULE_3__.Runtime.Experiment)) {
                    var element = this.experimentToControl.get(experiment);
                    if (element) {
                        _utils_utils_js__WEBPACK_IMPORTED_MODULE_8__.PanelUtils.highlightElement(element);
                    }
                }
            }
        },
        {
            key: "setFilter",
            value: function setFilter(filterText) {
                _class_private_field_get(this, _inputElement).value = filterText;
                _class_private_field_get(this, _inputElement).dispatchEvent(new Event('input', {
                    'bubbles': true,
                    'cancelable': true
                }));
            }
        },
        {
            key: "wasShown",
            value: function wasShown() {
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Context.Context.instance().setFlavor(ExperimentsSettingsTab, this);
                _get(_get_prototype_of(ExperimentsSettingsTab.prototype), "wasShown", this).call(this);
            }
        },
        {
            key: "willHide",
            value: function willHide() {
                _get(_get_prototype_of(ExperimentsSettingsTab.prototype), "willHide", this).call(this);
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Context.Context.instance().setFlavor(ExperimentsSettingsTab, null);
            }
        }
    ]);
    return ExperimentsSettingsTab;
}(SettingsTab);
var ActionDelegate = /*#__PURE__*/ function() {
    "use strict";
    function ActionDelegate() {
        _class_call_check(this, ActionDelegate);
    }
    _create_class(ActionDelegate, [
        {
            key: "handleAction",
            value: function handleAction(context, actionId) {
                switch(actionId){
                    case 'settings.show':
                        void SettingsScreen.showSettingsScreen({
                            focusTabHeader: true
                        });
                        return true;
                    case 'settings.documentation':
                        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.openInNewTab(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.addReferrerToURL('https://developer.chrome.com/docs/devtools/'));
                        return true;
                    case 'settings.shortcuts':
                        void SettingsScreen.showSettingsScreen({
                            name: 'keybinds',
                            focusTabHeader: true
                        });
                        return true;
                }
                return false;
            }
        }
    ]);
    return ActionDelegate;
}();
var Revealer = /*#__PURE__*/ function() {
    "use strict";
    function Revealer() {
        _class_call_check(this, Revealer);
    }
    _create_class(Revealer, [
        {
            key: "reveal",
            value: function reveal(object) {
                return _async_to_generator(function() {
                    var context, experimentsSettingsTab, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, settingRegistration, genericSettingsTab, err, _iteratorNormalCompletion1, _didIteratorError1, _iteratorError1, _iterator1, _step1, view, id, location, settings, widget, err;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                context = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Context.Context.instance();
                                if (!_instanceof(object, _core_root_root_js__WEBPACK_IMPORTED_MODULE_3__.Runtime.Experiment)) return [
                                    3,
                                    2
                                ];
                                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.bringToFront();
                                return [
                                    4,
                                    SettingsScreen.showSettingsScreen({
                                        name: 'experiments'
                                    })
                                ];
                            case 1:
                                _state.sent();
                                experimentsSettingsTab = context.flavor(ExperimentsSettingsTab);
                                if (experimentsSettingsTab !== null) {
                                    experimentsSettingsTab.highlightObject(object);
                                }
                                return [
                                    2
                                ];
                            case 2:
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                _state.label = 3;
                            case 3:
                                _state.trys.push([
                                    3,
                                    8,
                                    9,
                                    10
                                ]);
                                _iterator = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().getRegisteredSettings()[Symbol.iterator]();
                                _state.label = 4;
                            case 4:
                                if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                                    3,
                                    7
                                ];
                                settingRegistration = _step.value;
                                if (!GenericSettingsTab.isSettingVisible(settingRegistration)) {
                                    return [
                                        3,
                                        6
                                    ];
                                }
                                if (!(settingRegistration.settingName === object.name)) return [
                                    3,
                                    6
                                ];
                                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.bringToFront();
                                return [
                                    4,
                                    SettingsScreen.showSettingsScreen()
                                ];
                            case 5:
                                _state.sent();
                                genericSettingsTab = context.flavor(GenericSettingsTab);
                                if (genericSettingsTab !== null) {
                                    genericSettingsTab.highlightObject(object);
                                }
                                return [
                                    2
                                ];
                            case 6:
                                _iteratorNormalCompletion = true;
                                return [
                                    3,
                                    4
                                ];
                            case 7:
                                return [
                                    3,
                                    10
                                ];
                            case 8:
                                err = _state.sent();
                                _didIteratorError = true;
                                _iteratorError = err;
                                return [
                                    3,
                                    10
                                ];
                            case 9:
                                try {
                                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                                        _iterator.return();
                                    }
                                } finally{
                                    if (_didIteratorError) {
                                        throw _iteratorError;
                                    }
                                }
                                return [
                                    7
                                ];
                            case 10:
                                _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                                _state.label = 11;
                            case 11:
                                _state.trys.push([
                                    11,
                                    17,
                                    18,
                                    19
                                ]);
                                _iterator1 = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ViewManager.getRegisteredViewExtensions(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().getHostConfig())[Symbol.iterator]();
                                _state.label = 12;
                            case 12:
                                if (!!(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done)) return [
                                    3,
                                    16
                                ];
                                view = _step1.value;
                                id = view.viewId();
                                location = view.location();
                                if (location !== "settings-view" /* UI.ViewManager.ViewLocationValues.SETTINGS_VIEW */ ) {
                                    return [
                                        3,
                                        15
                                    ];
                                }
                                settings = view.settings();
                                if (!(settings && settings.indexOf(object.name) !== -1)) return [
                                    3,
                                    15
                                ];
                                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.bringToFront();
                                return [
                                    4,
                                    SettingsScreen.showSettingsScreen({
                                        name: id
                                    })
                                ];
                            case 13:
                                _state.sent();
                                return [
                                    4,
                                    view.widget()
                                ];
                            case 14:
                                widget = _state.sent();
                                if (_instanceof(widget, SettingsTab)) {
                                    widget.highlightObject(object);
                                }
                                return [
                                    2
                                ];
                            case 15:
                                _iteratorNormalCompletion1 = true;
                                return [
                                    3,
                                    12
                                ];
                            case 16:
                                return [
                                    3,
                                    19
                                ];
                            case 17:
                                err = _state.sent();
                                _didIteratorError1 = true;
                                _iteratorError1 = err;
                                return [
                                    3,
                                    19
                                ];
                            case 18:
                                try {
                                    if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                                        _iterator1.return();
                                    }
                                } finally{
                                    if (_didIteratorError1) {
                                        throw _iteratorError1;
                                    }
                                }
                                return [
                                    7
                                ];
                            case 19:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return Revealer;
} //# sourceMappingURL=SettingsScreen.js.map
();


}),
"./panels/settings/components/components.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  SyncSection: function() { return /* reexport module object */ _SyncSection_js__WEBPACK_IMPORTED_MODULE_0__; }
});
/* harmony import */var _SyncSection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SyncSection.js */ "./panels/settings/components/SyncSection.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

 //# sourceMappingURL=components.js.map


}),
"./panels/settings/settingsScreen.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright (c) 2015 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.settings-window-main {\n  color: var(--sys-color-on-surface);\n  background-color: var(--sys-color-cdt-base-container);\n}\n\n.settings-content {\n  overflow-y: auto;\n  overflow-x: hidden;\n  margin: 8px 8px 8px 0;\n  padding: 0 4px;\n  flex: auto;\n}\n\n.settings-container {\n  width: 100%;\n  column-width: 288px;\n}\n\n.settings-block {\n  display: block;\n  padding-bottom: 9px;\n  width: 288px;\n  break-inside: avoid;\n}\n\n.settings-tab.settings-container {\n  column-width: 308px;\n}\n\n.settings-tab .settings-block {\n  margin-left: 20px;\n}\n\n.settings-line {\n  padding-bottom: 5px;\n  margin-bottom: 5px;\n}\n\n.settings-key-cell {\n  display: inline-block;\n  width: 153px;\n  white-space: nowrap;\n  text-align: right;\n  vertical-align: middle;\n  padding-right: 6px;\n}\n\n.settings-cell {\n  display: inline-block;\n  width: 135px;\n  vertical-align: middle;\n}\n\n.settings-section-title {\n  font-size: 120%;\n  text-align: left;\n}\n\n.settings-combine-keys {\n  margin: 0 0.3em;\n  font-size: 9px;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n  border: none;\n}\n\n.experiments-filter {\n  padding-top: 1px;\n  display: flex;\n  align-items: center;\n}\n\nlabel {\n  padding-right: 8px;\n  padding-bottom: 8px;\n}\n\n.experiments-filter label {\n  padding-bottom: 0;\n}\n\n.settings-tab p {\n  margin: 6px 0;\n}\n\n.settings-block p p {\n  padding-left: 30px;\n}\n\n.settings-select {\n  align-items: center;\n  display: grid;\n}\n\n.settings-experiments-warning-subsection-warning {\n  color: var(--sys-color-error);\n}\n\n.settings-experiments-warning-subsection-message {\n  color: inherit;\n}\n\n.settings-content input[type=\"checkbox\"] {\n  margin: 1px 7px 1px 2px;\n}\n\n.settings-window-label-element {\n  flex: none;\n}\n\n.settings-window-title {\n  display: flex;\n  align-items: center;\n  font-size: var(--sys-size-9);\n  color: var(--sys-color-on-surface);\n  margin: var(--sys-size-8) var(--sys-size-7);\n\n  &::before {\n    content: \"\";\n    width: var(--sys-size-9);\n    height: var(--sys-size-9);\n    margin-right: var(--sys-size-6);\n    background-image: var(--image-file-devtools);\n  }\n}\n\n.settings-container-wrapper {\n  position: absolute;\n  top: 31px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: auto;\n  padding-top: 9px;\n  border-top: 1px solid var(--sys-color-divider);\n}\n\n.settings-tab.settings-content {\n  margin: 0;\n  padding: 0;\n}\n\n.settings-tab-container {\n  flex: auto;\n  overflow: hidden;\n}\n\n.settings-tab-container header {\n  padding: 0 0 6px;\n}\n\n#experiments-tab-content .settings-container {\n  column-width: auto;\n}\n\n#experiments-tab-content .settings-block {\n  width: auto;\n  margin-left: 0;\n  margin-right: 10px;\n}\n\n.settings-tab-container header > h1 {\n  font-size: 18px;\n  font-weight: normal;\n  margin: 0;\n  padding-bottom: 3px;\n  white-space: nowrap;\n}\n\n.settings-tab .settings-section-title {\n  margin-left: -20px;\n  color: var(--sys-color-on-surface-subtle);\n}\n\n.settings-tab select {\n  margin-left: 10px;\n  width: 80%;\n}\n\n.settings-experiment {\n  display: grid;\n  grid-template-columns: auto min-content auto 1fr;\n}\n\n.settings-experiment .devtools-link {\n  display: flex !important; /* stylelint-disable-line declaration-no-important */\n  align-items: center;\n}\n\n.settings-experiment .devtools-link:has(.link-icon) {\n  outline-offset: 0;\n}\n\n.experiment-label {\n  margin-right: 2px;\n}\n\n.settings-experiment-unstable {\n  color: var(--sys-color-token-subtle);\n}\n\n.settings-experiment .feedback-link {\n  color: var(--sys-color-primary);\n  text-decoration-line: underline;\n  margin-left: 4px;\n}\n\n.tabbed-pane-content slot::slotted(.widget) {\n  /* '!important' in order to overwrite the slotted widget's 'overflow-auto' class.\n  This prevents the focus-ring of selectable elements from being cut off. */\n  overflow: visible !important; /* stylelint-disable-line declaration-no-important */\n}\n\n@media (forced-colors: active) {\n  .settings-window-title {\n    color: canvastext;\n  }\n\n  .tabbed-pane-header-tab {\n    background: ButtonFace;\n  }\n\n  .tabbed-pane-header-tab-title {\n    color: canvastext;\n  }\n}\n\n@media (forced-colors: active) and (prefers-color-scheme: dark) {\n  .tabbed-pane-header-tab.selected {\n    background: ButtonFace;\n  }\n\n  .tabbed-pane-header-tab.selected .tabbed-pane-header-tab-title {\n    color: HighlightText;\n  }\n}\n\n/*# sourceURL=settingsScreen.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);