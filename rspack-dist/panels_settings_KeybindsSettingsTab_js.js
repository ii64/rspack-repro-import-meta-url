"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_settings_KeybindsSettingsTab_js"], {
"./panels/settings/KeybindsSettingsTab.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  KeybindsSettingsTab: function() { return KeybindsSettingsTab; },
  ShortcutListItem: function() { return ShortcutListItem; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _keybindsSettingsTab_css_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./keybindsSettingsTab.css.js */ "./panels/settings/keybindsSettingsTab.css.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _assert_this_initialized(self1) {
    if (self1 === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self1;
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
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _possible_constructor_return(self1, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self1);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
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
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
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
     *@description Text for keyboard shortcuts
     */ shortcuts: 'Shortcuts',
    /**
     *@description Text appearing before a select control offering users their choice of keyboard shortcut presets.
     */ matchShortcutsFromPreset: 'Match shortcuts from preset',
    /**
     *@description Screen reader label for list of keyboard shortcuts in settings
     */ keyboardShortcutsList: 'Keyboard shortcuts list',
    /**
     *@description Screen reader label for an icon denoting a shortcut that has been changed from its default
     */ shortcutModified: 'Shortcut modified',
    /**
     *@description Screen reader label for an empty shortcut cell in custom shortcuts settings tab
     */ noShortcutForAction: 'No shortcut for action',
    /**
     *@description Link text in the settings pane to add another shortcut for an action
     */ addAShortcut: 'Add a shortcut',
    /**
     *@description Label for a button in the settings pane that confirms changes to a keyboard shortcut
     */ confirmChanges: 'Confirm changes',
    /**
     *@description Label for a button in the settings pane that discards changes to the shortcut being edited
     */ discardChanges: 'Discard changes',
    /**
     *@description Label for a button in the settings pane that removes a keyboard shortcut.
     */ removeShortcut: 'Remove shortcut',
    /**
     *@description Label for a button in the settings pane that edits a keyboard shortcut
     */ editShortcut: 'Edit shortcut',
    /**
     *@description Message shown in settings when the user inputs a modifier-only shortcut such as Ctrl+Shift.
     */ shortcutsCannotContainOnly: 'Shortcuts cannot contain only modifier keys.',
    /**
     *@description Messages shown in shortcuts settings when the user inputs a shortcut that is already in use.
     *@example {Performance} PH1
     *@example {Start/stop recording} PH2
     */ thisShortcutIsInUseByS: 'This shortcut is in use by {PH1}: {PH2}.',
    /**
     *@description Message shown in settings when to restore default shortcuts.
     */ RestoreDefaultShortcuts: 'Restore default shortcuts',
    /**
     *@description Message shown in settings to show the full list of keyboard shortcuts.
     */ FullListOfDevtoolsKeyboard: 'Full list of DevTools keyboard shortcuts and gestures',
    /**
     *@description Label for a button in the shortcut editor that resets all shortcuts for the current action.
     */ ResetShortcutsForAction: 'Reset shortcuts for action',
    /**
     *@description Screen reader announcement for shortcut removed
     *@example {Start/stop recording} PH1
     */ shortcutRemoved: '{PH1} Shortcut removed',
    /**
     *@description Screen reader announcment for shortcut restored to default
     */ shortcutChangesRestored: 'Changes to shortcut restored to default',
    /**
     *@description Screen reader announcment for applied short cut changes
     */ shortcutChangesApplied: 'Changes to shortcut applied',
    /**
     *@description Screen reader announcment for discarded short cut changes
     */ shortcutChangesDiscared: 'Changes to shortcut discarded'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/settings/KeybindsSettingsTab.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
var KeybindsSettingsTab = /*#__PURE__*/ function(_UI_Widget_VBox) {
    "use strict";
    _inherits(KeybindsSettingsTab, _UI_Widget_VBox);
    var _super = _create_super(KeybindsSettingsTab);
    function KeybindsSettingsTab() {
        _class_call_check(this, KeybindsSettingsTab);
        var _this;
        _this = _super.call(this, true);
        _define_property(_assert_this_initialized(_this), "items", void 0);
        _define_property(_assert_this_initialized(_this), "list", void 0);
        _define_property(_assert_this_initialized(_this), "editingItem", void 0);
        _define_property(_assert_this_initialized(_this), "editingRow", void 0);
        _this.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.pane('keybinds')));
        var header = _this.contentElement.createChild('header');
        header.createChild('h1').textContent = i18nString(UIStrings.shortcuts);
        var keybindsSetSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('active-keybind-set');
        var userShortcutsSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('user-shortcuts');
        keybindsSetSetting.addChangeListener(_this.update, _assert_this_initialized(_this));
        var keybindsSetSelect = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.SettingsUI.createControlForSetting(keybindsSetSetting, i18nString(UIStrings.matchShortcutsFromPreset));
        if (keybindsSetSelect) {
            keybindsSetSelect.classList.add('keybinds-set-select');
            _this.contentElement.appendChild(keybindsSetSelect);
        }
        _this.items = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ListModel.ListModel();
        _this.list = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ListControl.ListControl(_this.items, _assert_this_initialized(_this), _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ListControl.ListMode.NonViewport);
        _this.items.replaceAll(_this.createListItems());
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.markAsList(_this.list.element);
        _this.contentElement.appendChild(_this.list.element);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.setLabel(_this.list.element, i18nString(UIStrings.keyboardShortcutsList));
        var footer = _this.contentElement.createChild('div');
        footer.classList.add('keybinds-footer');
        var docsLink = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.XLink.XLink.create('https://developer.chrome.com/docs/devtools/shortcuts/', i18nString(UIStrings.FullListOfDevtoolsKeyboard), undefined, undefined, 'learn-more');
        docsLink.classList.add('docs-link');
        footer.appendChild(docsLink);
        var restoreDefaultShortcutsButton = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.createTextButton(i18nString(UIStrings.RestoreDefaultShortcuts), function() {
            userShortcutsSetting.set([]);
            keybindsSetSetting.set(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ShortcutRegistry.DefaultShortcutSetting);
        }, {
            jslogContext: 'restore-default-shortcuts'
        });
        footer.appendChild(restoreDefaultShortcutsButton);
        _this.editingItem = null;
        _this.editingRow = null;
        _this.update();
        return _this;
    }
    _create_class(KeybindsSettingsTab, [
        {
            key: "createElementForItem",
            value: function createElementForItem(item) {
                var itemElement = document.createElement('div');
                if (typeof item === 'string') {
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.setLevel(itemElement, 1);
                    itemElement.classList.add('keybinds-category-header');
                    itemElement.textContent = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ActionRegistration.getLocalizedActionCategory(item);
                } else {
                    var listItem = new ShortcutListItem(item, this, item === this.editingItem);
                    itemElement = listItem.element;
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.setLevel(itemElement, 2);
                    if (item === this.editingItem) {
                        this.editingRow = listItem;
                    }
                }
                itemElement.classList.add('keybinds-list-item');
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.markAsListitem(itemElement);
                itemElement.tabIndex = item === this.list.selectedItem() && item !== this.editingItem ? 0 : -1;
                return itemElement;
            }
        },
        {
            key: "commitChanges",
            value: function commitChanges(item, editedShortcuts) {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = editedShortcuts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var _step_value = _sliced_to_array(_step.value, 2), originalShortcut = _step_value[0], newDescriptors = _step_value[1];
                        if (originalShortcut.type !== "UnsetShortcut" /* UI.KeyboardShortcut.Type.UnsetShortcut */ ) {
                            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ShortcutRegistry.ShortcutRegistry.instance().removeShortcut(originalShortcut);
                            if (!newDescriptors) {
                                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.ShortcutRemoved);
                            }
                        }
                        if (newDescriptors) {
                            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ShortcutRegistry.ShortcutRegistry.instance().registerUserShortcut(originalShortcut.changeKeys(newDescriptors).changeType("UserShortcut" /* UI.KeyboardShortcut.Type.UserShortcut */ ));
                            if (originalShortcut.type === "UnsetShortcut" /* UI.KeyboardShortcut.Type.UnsetShortcut */ ) {
                                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.UserShortcutAdded);
                            } else {
                                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.ShortcutModified);
                            }
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
                this.stopEditing(item);
            }
        },
        {
            /**
     * This method will never be called.
     */ key: "heightForItem",
            value: function heightForItem(_item) {
                return 0;
            }
        },
        {
            key: "isItemSelectable",
            value: function isItemSelectable(_item) {
                return true;
            }
        },
        {
            key: "selectedItemChanged",
            value: function selectedItemChanged(from, to, fromElement, toElement) {
                if (fromElement) {
                    fromElement.tabIndex = -1;
                }
                if (toElement) {
                    if (to === this.editingItem && this.editingRow) {
                        this.editingRow.focus();
                    } else {
                        toElement.tabIndex = 0;
                        if (this.list.element.hasFocus()) {
                            toElement.focus();
                        }
                    }
                    this.setDefaultFocusedElement(toElement);
                }
            }
        },
        {
            key: "updateSelectedItemARIA",
            value: function updateSelectedItemARIA(_fromElement, _toElement) {
                return true;
            }
        },
        {
            key: "startEditing",
            value: function startEditing(action) {
                this.list.selectItem(action);
                if (this.editingItem) {
                    this.stopEditing(this.editingItem);
                }
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.markBeingEdited(this.list.element, true);
                this.editingItem = action;
                this.list.refreshItem(action);
            }
        },
        {
            key: "stopEditing",
            value: function stopEditing(action) {
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.markBeingEdited(this.list.element, false);
                this.editingItem = null;
                this.editingRow = null;
                this.list.refreshItem(action);
                this.focus();
            }
        },
        {
            key: "createListItems",
            value: function createListItems() {
                var actions = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ActionRegistry.ActionRegistry.instance().actions().sort(function(actionA, actionB) {
                    if (actionA.category() < actionB.category()) {
                        return -1;
                    }
                    if (actionA.category() > actionB.category()) {
                        return 1;
                    }
                    if (actionA.id() < actionB.id()) {
                        return -1;
                    }
                    if (actionA.id() > actionB.id()) {
                        return 1;
                    }
                    return 0;
                });
                var items = [];
                var currentCategory;
                actions.forEach(function(action) {
                    if (action.id() === 'elements.toggle-element-search') {
                        return;
                    }
                    if (currentCategory !== action.category()) {
                        items.push(action.category());
                    }
                    items.push(action);
                    currentCategory = action.category();
                });
                return items;
            }
        },
        {
            key: "onEscapeKeyPressed",
            value: function onEscapeKeyPressed(event) {
                var deepActiveElement = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.DOMUtilities.deepActiveElement(document);
                if (this.editingRow && deepActiveElement && deepActiveElement.nodeName === 'INPUT') {
                    this.editingRow.onEscapeKeyPressed(event);
                }
            }
        },
        {
            key: "update",
            value: function update() {
                if (this.editingItem) {
                    this.stopEditing(this.editingItem);
                }
                this.list.refreshAllItems();
                if (!this.list.selectedItem()) {
                    this.list.selectItem(this.items.at(0));
                }
            }
        },
        {
            key: "willHide",
            value: function willHide() {
                if (this.editingItem) {
                    this.stopEditing(this.editingItem);
                }
            }
        },
        {
            key: "wasShown",
            value: function wasShown() {
                _get(_get_prototype_of(KeybindsSettingsTab.prototype), "wasShown", this).call(this);
                this.registerCSSFiles([
                    _keybindsSettingsTab_css_js__WEBPACK_IMPORTED_MODULE_7__["default"]
                ]);
            }
        }
    ]);
    return KeybindsSettingsTab;
}(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Widget.VBox);
var ShortcutListItem = /*#__PURE__*/ function() {
    "use strict";
    function ShortcutListItem(item, settingsTab, isEditing) {
        _class_call_check(this, ShortcutListItem);
        _define_property(this, "isEditing", void 0);
        _define_property(this, "settingsTab", void 0);
        _define_property(this, "item", void 0);
        _define_property(this, "element", void 0);
        _define_property(this, "editedShortcuts", void 0);
        _define_property(this, "shortcutInputs", void 0);
        _define_property(this, "shortcuts", void 0);
        _define_property(this, "elementToFocus", void 0);
        _define_property(this, "confirmButton", void 0);
        _define_property(this, "addShortcutLinkContainer", void 0);
        _define_property(this, "errorMessageElement", void 0);
        _define_property(this, "secondKeyTimeout", void 0);
        this.isEditing = Boolean(isEditing);
        this.settingsTab = settingsTab;
        this.item = item;
        this.element = document.createElement('div');
        this.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.item().context(item.id()).track({
            keydown: 'Escape'
        })));
        this.editedShortcuts = new Map();
        this.shortcutInputs = new Map();
        this.shortcuts = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ShortcutRegistry.ShortcutRegistry.instance().shortcutsForAction(item.id());
        this.elementToFocus = null;
        this.confirmButton = null;
        this.addShortcutLinkContainer = null;
        this.errorMessageElement = null;
        this.secondKeyTimeout = null;
        this.update();
    }
    _create_class(ShortcutListItem, [
        {
            key: "focus",
            value: function focus() {
                if (this.elementToFocus) {
                    this.elementToFocus.focus();
                }
            }
        },
        {
            key: "update",
            value: function update() {
                this.element.removeChildren();
                this.elementToFocus = null;
                this.shortcutInputs.clear();
                this.element.classList.toggle('keybinds-editing', this.isEditing);
                this.element.createChild('div', 'keybinds-action-name keybinds-list-text').textContent = this.item.title();
                this.shortcuts.forEach(this.createShortcutRow, this);
                if (this.shortcuts.length === 0) {
                    this.createEmptyInfo();
                }
                if (this.isEditing) {
                    this.setupEditor();
                }
            }
        },
        {
            key: "createEmptyInfo",
            value: function createEmptyInfo() {
                if (_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ShortcutRegistry.ShortcutRegistry.instance().actionHasDefaultShortcut(this.item.id())) {
                    var icon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__.Icon.create('keyboard-pen', 'keybinds-modified');
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.setLabel(icon, i18nString(UIStrings.shortcutModified));
                    this.element.appendChild(icon);
                }
                if (!this.isEditing) {
                    var emptyElement = this.element.createChild('div', 'keybinds-shortcut keybinds-list-text');
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.setLabel(emptyElement, i18nString(UIStrings.noShortcutForAction));
                    this.element.appendChild(this.createEditButton());
                }
            }
        },
        {
            key: "setupEditor",
            value: function setupEditor() {
                var _this = this;
                this.addShortcutLinkContainer = this.element.createChild('div', 'keybinds-shortcut devtools-link');
                var addShortcutLink = this.addShortcutLinkContainer.createChild('span', 'devtools-link');
                addShortcutLink.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.action('add-shortcut').track({
                    click: true
                })));
                addShortcutLink.textContent = i18nString(UIStrings.addAShortcut);
                addShortcutLink.tabIndex = 0;
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.markAsLink(addShortcutLink);
                self.onInvokeElement(addShortcutLink, this.addShortcut.bind(this));
                if (!this.elementToFocus) {
                    this.elementToFocus = addShortcutLink;
                }
                this.errorMessageElement = this.element.createChild('div', 'keybinds-info keybinds-error hidden');
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.markAsAlert(this.errorMessageElement);
                this.element.appendChild(this.createIconButton(i18nString(UIStrings.ResetShortcutsForAction), 'undo', '', 'undo', this.resetShortcutsToDefaults.bind(this)));
                this.confirmButton = this.createIconButton(i18nString(UIStrings.confirmChanges), 'checkmark', 'keybinds-confirm-button', 'confirm', function() {
                    _this.settingsTab.commitChanges(_this.item, _this.editedShortcuts);
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.alert(i18nString(UIStrings.shortcutChangesApplied, {
                        PH1: _this.item.title()
                    }));
                });
                this.element.appendChild(this.confirmButton);
                this.element.appendChild(this.createIconButton(i18nString(UIStrings.discardChanges), 'cross', 'keybinds-cancel-button', 'cancel', function() {
                    _this.settingsTab.stopEditing(_this.item);
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.alert(i18nString(UIStrings.shortcutChangesDiscared));
                }));
                this.element.addEventListener('keydown', function(event) {
                    if (_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.KeyboardUtilities.isEscKey(event)) {
                        _this.settingsTab.stopEditing(_this.item);
                        event.consume(true);
                    }
                });
            }
        },
        {
            key: "addShortcut",
            value: function addShortcut() {
                var shortcut = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.KeyboardShortcut.KeyboardShortcut([], this.item.id(), "UnsetShortcut" /* UI.KeyboardShortcut.Type.UnsetShortcut */ );
                this.shortcuts.push(shortcut);
                this.update();
                var shortcutInput = this.shortcutInputs.get(shortcut);
                if (shortcutInput) {
                    shortcutInput.focus();
                }
            }
        },
        {
            key: "createShortcutRow",
            value: function createShortcutRow(shortcut, index) {
                var _this = this;
                if (this.editedShortcuts.has(shortcut) && !this.editedShortcuts.get(shortcut)) {
                    return;
                }
                var icon;
                if (shortcut.type !== "UnsetShortcut" /* UI.KeyboardShortcut.Type.UnsetShortcut */  && !shortcut.isDefault()) {
                    icon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__.Icon.create('keyboard-pen', 'keybinds-modified');
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.setLabel(icon, i18nString(UIStrings.shortcutModified));
                    this.element.appendChild(icon);
                }
                var shortcutElement = this.element.createChild('div', 'keybinds-shortcut keybinds-list-text');
                if (this.isEditing) {
                    var shortcutInput = shortcutElement.createChild('input', 'harmony-input');
                    shortcutInput.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.textField().track({
                        change: true
                    })));
                    shortcutInput.spellcheck = false;
                    shortcutInput.maxLength = 0;
                    this.shortcutInputs.set(shortcut, shortcutInput);
                    if (!this.elementToFocus) {
                        this.elementToFocus = shortcutInput;
                    }
                    shortcutInput.value = shortcut.title();
                    var userDescriptors = this.editedShortcuts.get(shortcut);
                    if (userDescriptors) {
                        shortcutInput.value = this.shortcutInputTextForDescriptors(userDescriptors);
                    }
                    shortcutInput.addEventListener('keydown', this.onShortcutInputKeyDown.bind(this, shortcut, shortcutInput));
                    shortcutInput.addEventListener('blur', function() {
                        if (_this.secondKeyTimeout !== null) {
                            clearTimeout(_this.secondKeyTimeout);
                            _this.secondKeyTimeout = null;
                        }
                    });
                    shortcutElement.appendChild(this.createIconButton(i18nString(UIStrings.removeShortcut), 'bin', 'keybinds-delete-button', 'delete', function() {
                        var _$index = _this.shortcuts.indexOf(shortcut);
                        if (!shortcut.isDefault()) {
                            _this.shortcuts.splice(_$index, 1);
                        }
                        _this.editedShortcuts.set(shortcut, null);
                        _this.update();
                        _this.focus();
                        _this.validateInputs();
                        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.alert(i18nString(UIStrings.shortcutRemoved, {
                            PH1: _this.item.title()
                        }));
                    }));
                } else {
                    var keys = shortcut.descriptors.flatMap(function(descriptor) {
                        return descriptor.name.split(' + ');
                    });
                    keys.forEach(function(key) {
                        shortcutElement.createChild('span', 'keybinds-key').textContent = key;
                    });
                    if (index === 0) {
                        this.element.appendChild(this.createEditButton());
                    }
                }
            }
        },
        {
            key: "createEditButton",
            value: function createEditButton() {
                var _this = this;
                return this.createIconButton(i18nString(UIStrings.editShortcut), 'edit', 'keybinds-edit-button', 'edit', function() {
                    return _this.settingsTab.startEditing(_this.item);
                });
            }
        },
        {
            key: "createIconButton",
            value: function createIconButton(label, iconName, className, jslogContext, listener) {
                var button = document.createElement('button');
                button.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.action().track({
                    click: true
                }).context(jslogContext)));
                button.setAttribute('title', label);
                button.appendChild(_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__.Icon.create(iconName));
                button.addEventListener('click', listener);
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.setLabel(button, label);
                if (className) {
                    button.classList.add(className);
                }
                return button;
            }
        },
        {
            key: "onShortcutInputKeyDown",
            value: function onShortcutInputKeyDown(shortcut, shortcutInput, event) {
                var _this = this;
                if (event.key !== 'Tab') {
                    var eventDescriptor = this.descriptorForEvent(event);
                    var userDescriptors = this.editedShortcuts.get(shortcut) || [];
                    this.editedShortcuts.set(shortcut, userDescriptors);
                    var isLastKeyOfShortcut = userDescriptors.length === 2 && _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.KeyboardShortcut.KeyboardShortcut.isModifier(userDescriptors[1].key);
                    var shouldClearOldShortcut = userDescriptors.length === 2 && !isLastKeyOfShortcut;
                    if (shouldClearOldShortcut) {
                        userDescriptors.splice(0, 2);
                    }
                    if (this.secondKeyTimeout) {
                        clearTimeout(this.secondKeyTimeout);
                        this.secondKeyTimeout = null;
                        userDescriptors.push(eventDescriptor);
                    } else if (isLastKeyOfShortcut) {
                        userDescriptors[1] = eventDescriptor;
                    } else if (!_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.KeyboardShortcut.KeyboardShortcut.isModifier(eventDescriptor.key)) {
                        userDescriptors[0] = eventDescriptor;
                        this.secondKeyTimeout = window.setTimeout(function() {
                            _this.secondKeyTimeout = null;
                        }, _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ShortcutRegistry.KeyTimeout);
                    } else {
                        userDescriptors[0] = eventDescriptor;
                    }
                    shortcutInput.value = this.shortcutInputTextForDescriptors(userDescriptors);
                    this.validateInputs();
                    event.consume(true);
                }
            }
        },
        {
            key: "descriptorForEvent",
            value: function descriptorForEvent(event) {
                var userKey = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.KeyboardShortcut.KeyboardShortcut.makeKeyFromEvent(event);
                var codeAndModifiers = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.KeyboardShortcut.KeyboardShortcut.keyCodeAndModifiersFromKey(userKey);
                var key = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.KeyboardShortcut.Keys[event.key] || _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.KeyboardShortcut.KeyBindings[event.key];
                if (!key && !/^[a-z]$/i.test(event.key)) {
                    var keyCode = event.code;
                    // if we still don't have a key name, let's try the code before falling back to the raw key
                    key = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.KeyboardShortcut.Keys[keyCode] || _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.KeyboardShortcut.KeyBindings[keyCode];
                    if (keyCode.startsWith('Digit')) {
                        key = keyCode.slice(5);
                    } else if (keyCode.startsWith('Key')) {
                        key = keyCode.slice(3);
                    }
                }
                return _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.KeyboardShortcut.KeyboardShortcut.makeDescriptor(key || event.key, codeAndModifiers.modifiers);
            }
        },
        {
            key: "shortcutInputTextForDescriptors",
            value: function shortcutInputTextForDescriptors(descriptors) {
                return descriptors.map(function(descriptor) {
                    return descriptor.name;
                }).join(' ');
            }
        },
        {
            key: "resetShortcutsToDefaults",
            value: function resetShortcutsToDefaults() {
                var _this = this;
                this.editedShortcuts.clear();
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.shortcuts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var shortcut = _step.value;
                        if (shortcut.type === "UnsetShortcut" /* UI.KeyboardShortcut.Type.UnsetShortcut */ ) {
                            var index = this.shortcuts.indexOf(shortcut);
                            this.shortcuts.splice(index, 1);
                        } else if (shortcut.type === "UserShortcut" /* UI.KeyboardShortcut.Type.UserShortcut */ ) {
                            this.editedShortcuts.set(shortcut, null);
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
                var disabledDefaults = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ShortcutRegistry.ShortcutRegistry.instance().disabledDefaultsForAction(this.item.id());
                disabledDefaults.forEach(function(shortcut) {
                    if (_this.shortcuts.includes(shortcut)) {
                        return;
                    }
                    _this.shortcuts.push(shortcut);
                    _this.editedShortcuts.set(shortcut, shortcut.descriptors);
                });
                this.update();
                this.focus();
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.alert(i18nString(UIStrings.shortcutChangesRestored, {
                    PH1: this.item.title()
                }));
            }
        },
        {
            key: "onEscapeKeyPressed",
            value: function onEscapeKeyPressed(event) {
                var activeElement = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.DOMUtilities.deepActiveElement(document);
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.shortcutInputs.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var _step_value = _sliced_to_array(_step.value, 2), shortcut = _step_value[0], shortcutInput = _step_value[1];
                        if (activeElement === shortcutInput) {
                            this.onShortcutInputKeyDown(shortcut, shortcutInput, event);
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
            }
        },
        {
            key: "validateInputs",
            value: function validateInputs() {
                var _this = this;
                var confirmButton = this.confirmButton;
                var errorMessageElement = this.errorMessageElement;
                if (!confirmButton || !errorMessageElement) {
                    return;
                }
                confirmButton.disabled = false;
                errorMessageElement.classList.add('hidden');
                this.shortcutInputs.forEach(function(shortcutInput, shortcut) {
                    var userDescriptors = _this.editedShortcuts.get(shortcut);
                    if (!userDescriptors) {
                        return;
                    }
                    if (userDescriptors.some(function(descriptor) {
                        return _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.KeyboardShortcut.KeyboardShortcut.isModifier(descriptor.key);
                    })) {
                        confirmButton.disabled = true;
                        shortcutInput.classList.add('error-input');
                        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.setInvalid(shortcutInput, true);
                        errorMessageElement.classList.remove('hidden');
                        errorMessageElement.textContent = i18nString(UIStrings.shortcutsCannotContainOnly);
                        return;
                    }
                    var conflicts = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ShortcutRegistry.ShortcutRegistry.instance().actionsForDescriptors(userDescriptors).filter(function(actionId) {
                        return actionId !== _this.item.id();
                    });
                    if (conflicts.length) {
                        confirmButton.disabled = true;
                        shortcutInput.classList.add('error-input');
                        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.setInvalid(shortcutInput, true);
                        errorMessageElement.classList.remove('hidden');
                        if (!_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ActionRegistry.ActionRegistry.instance().hasAction(conflicts[0])) {
                            return;
                        }
                        var action = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ActionRegistry.ActionRegistry.instance().getAction(conflicts[0]);
                        var actionTitle = action.title();
                        var actionCategory = action.category();
                        errorMessageElement.textContent = i18nString(UIStrings.thisShortcutIsInUseByS, {
                            PH1: actionCategory,
                            PH2: actionTitle
                        });
                        return;
                    }
                    shortcutInput.classList.remove('error-input');
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.setInvalid(shortcutInput, false);
                });
            }
        }
    ]);
    return ShortcutListItem;
} //# sourceMappingURL=KeybindsSettingsTab.js.map
();


}),
"./panels/settings/keybindsSettingsTab.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync('/*\n * Copyright 2020 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\nheader {\n  padding: 0 0 6px;\n  border-bottom: 1px solid var(--sys-color-divider);\n  flex: none;\n  margin-bottom: 16px;\n}\n\nh1 {\n  font-size: 18px;\n  font-weight: normal;\n  padding-bottom: 3px;\n  margin: 0;\n}\n\n[role="list"] {\n  overflow: auto;\n\n  > * {\n    min-width: 300px;\n  }\n}\n\n.keybinds-key {\n  padding: 0.1em 0.6em;\n  border: 1px solid var(--sys-color-neutral-outline);\n  font-size: 11px;\n  background-color: var(--sys-color-neutral-container);\n  color: var(--sys-color-on-surface);\n  box-shadow: var(--box-shadow-outline-color);\n  border-radius: 3px;\n  display: inline-block;\n  margin: 0 0.1em;\n  text-shadow: 0 1px 0 var(--sys-color-cdt-base-container);\n  line-height: 1.5;\n  white-space: nowrap;\n}\n\n.keybinds-list-item {\n  min-height: 30px;\n  display: grid;\n  grid-template-rows: repeat(auto-fit, minmax(30px, auto));\n  grid-template-columns: 1fr 30px 2fr 30px 30px;\n  flex: auto 1 1;\n}\n\n.keybinds-list-item:focus-visible {\n  background-color: var(--sys-color-tonal-container);\n}\n\n.keybinds-list-item:not(.keybinds-category-header) {\n  padding: 4px 0 4px 20px;\n  border-radius: 7px;\n}\n\n.keybinds-list-item:not(.keybinds-category-header):last-child {\n  margin-bottom: 5px;\n}\n\n.keybinds-list-item.keybinds-editing {\n  background-color: var(--sys-color-neutral-container);\n}\n\n.keybinds-list-text.keybinds-action-name {\n  padding-top: 7px;\n  grid-row: 1 / 3;\n}\n\n.keybinds-shortcut,\n.keybinds-info {\n  grid-row: auto;\n  grid-column: 3 / span 1;\n}\n\n.keybinds-shortcut.devtools-link {\n  align-items: center;\n  margin-left: 3px;\n}\n\n.keybinds-shortcut .devtools-link {\n  padding: 4px 0;\n}\n\n.keybinds-info .devtools-link {\n  padding-top: 6px;\n}\n\n.keybinds-error {\n  color: var(--sys-color-error);\n}\n\n.keybinds-list-item.keybinds-editing .keybinds-shortcut {\n  display: flex;\n}\n\n.keybinds-modified {\n  grid-column: 2 / span 1;\n  margin-top: 2px;\n}\n\n.keybinds-list-item button {\n  border: none;\n  padding: 0;\n  background: transparent;\n}\n\n.keybinds-list-item button:hover devtools-icon {\n  color: var(--icon-default-hover);\n}\n\n.keybinds-list-item button:focus-visible {\n  background-color: var(--sys-color-tonal-container);\n}\n\n.keybinds-list-item button[disabled] {\n  opacity: 40%;\n}\n\n.keybinds-confirm-button {\n  grid-column: -2 / span 1;\n}\n\n.keybinds-cancel-button {\n  grid-column: -1 / span 1;\n}\n\n.keybinds-edit-button {\n  display: none;\n  grid-row: 1 / span 1;\n  grid-column: 4 / span 1;\n}\n\n.keybinds-list-item:not(.keybinds-editing):hover .keybinds-edit-button,\n.keybinds-list-item:not(.keybinds-editing):focus-within .keybinds-edit-button {\n  display: inline-block;\n}\n\n.keybinds-list-text {\n  padding: 3px 0;\n  user-select: none;\n  color: var(--sys-color-on-surface);\n  text-align: start;\n  position: relative;\n  margin-right: 0;\n}\n\n.keybinds-category-header {\n  font-weight: bold;\n  line-height: 30px;\n  white-space: nowrap;\n}\n\n.keybinds-category-header:not(:nth-child(2)) {\n  border-top: 1px solid var(--sys-color-divider);\n}\n\n.keybinds-list-item:not(.keybinds-category-header):hover,\n.keybinds-list-item:not(.keybinds-editing):focus-within {\n  background: var(--sys-color-state-hover-on-subtle);\n}\n\n.keybinds-set-select {\n  text-align: right;\n  margin-bottom: 16px;\n}\n\n.keybinds-set-select label p {\n  display: inline;\n  color: var(--sys-color-on-surface);\n}\n\n.keybinds-set-select select {\n  margin-left: 6px;\n  margin-top: 6px;\n}\n\nbutton.text-button {\n  width: fit-content;\n  align-self: flex-end;\n}\n\n.keybinds-list-text input {\n  margin: 0 2px;\n}\n\n.keybinds-list-text:has(.keybinds-delete-button) {\n  grid-column: 3 / -1;\n}\n\n.docs-link.devtools-link {\n  align-self: flex-start;\n  min-height: 2em;\n  line-height: 2em;\n  margin-bottom: 4px;\n}\n\n.keybinds-footer {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  min-height: fit-content;\n  margin-top: 10px;\n}\n\n/*# sourceURL=keybindsSettingsTab.css */\n');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);