"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_settings_KeybindsSettingsTab_ts"],{

/***/ "./src/panels/settings/KeybindsSettingsTab.ts":
/*!****************************************************!*\
  !*** ./src/panels/settings/KeybindsSettingsTab.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KeybindsSettingsTab: () => (/* binding */ KeybindsSettingsTab),
/* harmony export */   ShortcutListItem: () => (/* binding */ ShortcutListItem)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './keybindsSettingsTab.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.








const UIStrings = {
    /**
     *@description Text for keyboard shortcuts
     */
    shortcuts: 'Shortcuts',
    /**
     *@description Text appearing before a select control offering users their choice of keyboard shortcut presets.
     */
    matchShortcutsFromPreset: 'Match shortcuts from preset',
    /**
     *@description Screen reader label for list of keyboard shortcuts in settings
     */
    keyboardShortcutsList: 'Keyboard shortcuts list',
    /**
     *@description Screen reader label for an icon denoting a shortcut that has been changed from its default
     */
    shortcutModified: 'Shortcut modified',
    /**
     *@description Screen reader label for an empty shortcut cell in custom shortcuts settings tab
     */
    noShortcutForAction: 'No shortcut for action',
    /**
     *@description Link text in the settings pane to add another shortcut for an action
     */
    addAShortcut: 'Add a shortcut',
    /**
     *@description Label for a button in the settings pane that confirms changes to a keyboard shortcut
     */
    confirmChanges: 'Confirm changes',
    /**
     *@description Label for a button in the settings pane that discards changes to the shortcut being edited
     */
    discardChanges: 'Discard changes',
    /**
     *@description Label for a button in the settings pane that removes a keyboard shortcut.
     */
    removeShortcut: 'Remove shortcut',
    /**
     *@description Label for a button in the settings pane that edits a keyboard shortcut
     */
    editShortcut: 'Edit shortcut',
    /**
     *@description Message shown in settings when the user inputs a modifier-only shortcut such as Ctrl+Shift.
     */
    shortcutsCannotContainOnly: 'Shortcuts cannot contain only modifier keys.',
    /**
     *@description Messages shown in shortcuts settings when the user inputs a shortcut that is already in use.
     *@example {Performance} PH1
     *@example {Start/stop recording} PH2
     */
    thisShortcutIsInUseByS: 'This shortcut is in use by {PH1}: {PH2}.',
    /**
     *@description Message shown in settings when to restore default shortcuts.
     */
    RestoreDefaultShortcuts: 'Restore default shortcuts',
    /**
     *@description Message shown in settings to show the full list of keyboard shortcuts.
     */
    FullListOfDevtoolsKeyboard: 'Full list of DevTools keyboard shortcuts and gestures',
    /**
     *@description Label for a button in the shortcut editor that resets all shortcuts for the current action.
     */
    ResetShortcutsForAction: 'Reset shortcuts for action',
    /**
     *@description Screen reader announcement for shortcut removed
     *@example {Start/stop recording} PH1
     */
    shortcutRemoved: '{PH1} Shortcut removed',
    /**
     *@description Screen reader announcment for shortcut restored to default
     */
    shortcutChangesRestored: 'Changes to shortcut restored to default',
    /**
     *@description Screen reader announcment for applied short cut changes
     */
    shortcutChangesApplied: 'Changes to shortcut applied',
    /**
     *@description Screen reader announcment for discarded short cut changes
     */
    shortcutChangesDiscared: 'Changes to shortcut discarded',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/settings/KeybindsSettingsTab.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
class KeybindsSettingsTab extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Widget.VBox {
    constructor() {
        super(true);
        Object.defineProperty(this, "items", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "list", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "editingItem", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "editingRow", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.pane('keybinds')}`);
        const header = this.contentElement.createChild('header');
        header.createChild('h1').textContent = i18nString(UIStrings.shortcuts);
        const keybindsSetSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('active-keybind-set');
        const userShortcutsSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('user-shortcuts');
        keybindsSetSetting.addChangeListener(this.update, this);
        const keybindsSetSelect = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.SettingsUI.createControlForSetting(keybindsSetSetting, i18nString(UIStrings.matchShortcutsFromPreset));
        if (keybindsSetSelect) {
            keybindsSetSelect.classList.add('keybinds-set-select');
            this.contentElement.appendChild(keybindsSetSelect);
        }
        this.items = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ListModel.ListModel();
        this.list = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ListControl.ListControl(this.items, this, _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ListControl.ListMode.NonViewport);
        this.items.replaceAll(this.createListItems());
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.markAsList(this.list.element);
        this.contentElement.appendChild(this.list.element);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.setLabel(this.list.element, i18nString(UIStrings.keyboardShortcutsList));
        const footer = this.contentElement.createChild('div');
        footer.classList.add('keybinds-footer');
        const docsLink = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.XLink.XLink.create('https://developer.chrome.com/docs/devtools/shortcuts/', i18nString(UIStrings.FullListOfDevtoolsKeyboard), undefined, undefined, 'learn-more');
        docsLink.classList.add('docs-link');
        footer.appendChild(docsLink);
        const restoreDefaultShortcutsButton = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.createTextButton(i18nString(UIStrings.RestoreDefaultShortcuts), () => {
            userShortcutsSetting.set([]);
            keybindsSetSetting.set(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ShortcutRegistry.DefaultShortcutSetting);
        }, { jslogContext: 'restore-default-shortcuts' });
        footer.appendChild(restoreDefaultShortcutsButton);
        this.editingItem = null;
        this.editingRow = null;
        this.update();
    }
    createElementForItem(item) {
        let itemElement = document.createElement('div');
        if (typeof item === 'string') {
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.setLevel(itemElement, 1);
            itemElement.classList.add('keybinds-category-header');
            itemElement.textContent = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ActionRegistration.getLocalizedActionCategory(item);
        }
        else {
            const listItem = new ShortcutListItem(item, this, item === this.editingItem);
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
    commitChanges(item, editedShortcuts) {
        for (const [originalShortcut, newDescriptors] of editedShortcuts) {
            if (originalShortcut.type !== _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.KeyboardShortcut.Type.UnsetShortcut) {
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ShortcutRegistry.ShortcutRegistry.instance().removeShortcut(originalShortcut);
                if (!newDescriptors) {
                    _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.ShortcutRemoved);
                }
            }
            if (newDescriptors) {
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ShortcutRegistry.ShortcutRegistry.instance().registerUserShortcut(originalShortcut.changeKeys(newDescriptors)
                    .changeType(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.KeyboardShortcut.Type.UserShortcut));
                if (originalShortcut.type === _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.KeyboardShortcut.Type.UnsetShortcut) {
                    _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.UserShortcutAdded);
                }
                else {
                    _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.ShortcutModified);
                }
            }
        }
        this.stopEditing(item);
    }
    /**
     * This method will never be called.
     */
    heightForItem(_item) {
        return 0;
    }
    isItemSelectable(_item) {
        return true;
    }
    selectedItemChanged(from, to, fromElement, toElement) {
        if (fromElement) {
            fromElement.tabIndex = -1;
        }
        if (toElement) {
            if (to === this.editingItem && this.editingRow) {
                this.editingRow.focus();
            }
            else {
                toElement.tabIndex = 0;
                if (this.list.element.hasFocus()) {
                    toElement.focus();
                }
            }
            this.setDefaultFocusedElement(toElement);
        }
    }
    updateSelectedItemARIA(_fromElement, _toElement) {
        return true;
    }
    startEditing(action) {
        this.list.selectItem(action);
        if (this.editingItem) {
            this.stopEditing(this.editingItem);
        }
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.markBeingEdited(this.list.element, true);
        this.editingItem = action;
        this.list.refreshItem(action);
    }
    stopEditing(action) {
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.markBeingEdited(this.list.element, false);
        this.editingItem = null;
        this.editingRow = null;
        this.list.refreshItem(action);
        this.focus();
    }
    createListItems() {
        const actions = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ActionRegistry.ActionRegistry.instance().actions().sort((actionA, actionB) => {
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
        const items = [];
        let currentCategory;
        actions.forEach(action => {
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
    onEscapeKeyPressed(event) {
        const deepActiveElement = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.DOMUtilities.deepActiveElement(document);
        if (this.editingRow && deepActiveElement && deepActiveElement.nodeName === 'INPUT') {
            this.editingRow.onEscapeKeyPressed(event);
        }
    }
    update() {
        if (this.editingItem) {
            this.stopEditing(this.editingItem);
        }
        this.list.refreshAllItems();
        if (!this.list.selectedItem()) {
            this.list.selectItem(this.items.at(0));
        }
    }
    willHide() {
        if (this.editingItem) {
            this.stopEditing(this.editingItem);
        }
    }
    wasShown() {
        super.wasShown();
        this.registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './keybindsSettingsTab.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
    }
}
class ShortcutListItem {
    constructor(item, settingsTab, isEditing) {
        Object.defineProperty(this, "isEditing", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "settingsTab", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "item", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "element", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "editedShortcuts", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "shortcutInputs", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "shortcuts", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "elementToFocus", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "confirmButton", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "addShortcutLinkContainer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "errorMessageElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "secondKeyTimeout", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.isEditing = Boolean(isEditing);
        this.settingsTab = settingsTab;
        this.item = item;
        this.element = document.createElement('div');
        this.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.item().context(item.id()).track({ keydown: 'Escape' })}`);
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
    focus() {
        if (this.elementToFocus) {
            this.elementToFocus.focus();
        }
    }
    update() {
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
    createEmptyInfo() {
        if (_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ShortcutRegistry.ShortcutRegistry.instance().actionHasDefaultShortcut(this.item.id())) {
            const icon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__.Icon.create('keyboard-pen', 'keybinds-modified');
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.setLabel(icon, i18nString(UIStrings.shortcutModified));
            this.element.appendChild(icon);
        }
        if (!this.isEditing) {
            const emptyElement = this.element.createChild('div', 'keybinds-shortcut keybinds-list-text');
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.setLabel(emptyElement, i18nString(UIStrings.noShortcutForAction));
            this.element.appendChild(this.createEditButton());
        }
    }
    setupEditor() {
        this.addShortcutLinkContainer = this.element.createChild('div', 'keybinds-shortcut devtools-link');
        const addShortcutLink = this.addShortcutLinkContainer.createChild('span', 'devtools-link');
        addShortcutLink.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.action('add-shortcut').track({ click: true })}`);
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
        this.confirmButton = this.createIconButton(i18nString(UIStrings.confirmChanges), 'checkmark', 'keybinds-confirm-button', 'confirm', () => {
            this.settingsTab.commitChanges(this.item, this.editedShortcuts);
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.alert(i18nString(UIStrings.shortcutChangesApplied, { PH1: this.item.title() }));
        });
        this.element.appendChild(this.confirmButton);
        this.element.appendChild(this.createIconButton(i18nString(UIStrings.discardChanges), 'cross', 'keybinds-cancel-button', 'cancel', () => {
            this.settingsTab.stopEditing(this.item);
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.alert(i18nString(UIStrings.shortcutChangesDiscared));
        }));
        this.element.addEventListener('keydown', event => {
            if (_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.KeyboardUtilities.isEscKey(event)) {
                this.settingsTab.stopEditing(this.item);
                event.consume(true);
            }
        });
    }
    addShortcut() {
        const shortcut = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.KeyboardShortcut.KeyboardShortcut([], this.item.id(), _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.KeyboardShortcut.Type.UnsetShortcut);
        this.shortcuts.push(shortcut);
        this.update();
        const shortcutInput = this.shortcutInputs.get(shortcut);
        if (shortcutInput) {
            shortcutInput.focus();
        }
    }
    createShortcutRow(shortcut, index) {
        if (this.editedShortcuts.has(shortcut) && !this.editedShortcuts.get(shortcut)) {
            return;
        }
        let icon;
        if (shortcut.type !== _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.KeyboardShortcut.Type.UnsetShortcut && !shortcut.isDefault()) {
            icon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__.Icon.create('keyboard-pen', 'keybinds-modified');
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.setLabel(icon, i18nString(UIStrings.shortcutModified));
            this.element.appendChild(icon);
        }
        const shortcutElement = this.element.createChild('div', 'keybinds-shortcut keybinds-list-text');
        if (this.isEditing) {
            const shortcutInput = shortcutElement.createChild('input', 'harmony-input');
            shortcutInput.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.textField().track({ change: true })}`);
            shortcutInput.spellcheck = false;
            shortcutInput.maxLength = 0;
            this.shortcutInputs.set(shortcut, shortcutInput);
            if (!this.elementToFocus) {
                this.elementToFocus = shortcutInput;
            }
            shortcutInput.value = shortcut.title();
            const userDescriptors = this.editedShortcuts.get(shortcut);
            if (userDescriptors) {
                shortcutInput.value = this.shortcutInputTextForDescriptors(userDescriptors);
            }
            shortcutInput.addEventListener('keydown', this.onShortcutInputKeyDown.bind(this, shortcut, shortcutInput));
            shortcutInput.addEventListener('blur', () => {
                if (this.secondKeyTimeout !== null) {
                    clearTimeout(this.secondKeyTimeout);
                    this.secondKeyTimeout = null;
                }
            });
            shortcutElement.appendChild(this.createIconButton(i18nString(UIStrings.removeShortcut), 'bin', 'keybinds-delete-button', 'delete', () => {
                const index = this.shortcuts.indexOf(shortcut);
                if (!shortcut.isDefault()) {
                    this.shortcuts.splice(index, 1);
                }
                this.editedShortcuts.set(shortcut, null);
                this.update();
                this.focus();
                this.validateInputs();
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.alert(i18nString(UIStrings.shortcutRemoved, { PH1: this.item.title() }));
            }));
        }
        else {
            const keys = shortcut.descriptors.flatMap(descriptor => descriptor.name.split(' + '));
            keys.forEach(key => {
                shortcutElement.createChild('span', 'keybinds-key').textContent = key;
            });
            if (index === 0) {
                this.element.appendChild(this.createEditButton());
            }
        }
    }
    createEditButton() {
        return this.createIconButton(i18nString(UIStrings.editShortcut), 'edit', 'keybinds-edit-button', 'edit', () => this.settingsTab.startEditing(this.item));
    }
    createIconButton(label, iconName, className, jslogContext, listener) {
        const button = document.createElement('button');
        button.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.action().track({ click: true }).context(jslogContext)}`);
        button.setAttribute('title', label);
        button.appendChild(_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__.Icon.create(iconName));
        button.addEventListener('click', listener);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.setLabel(button, label);
        if (className) {
            button.classList.add(className);
        }
        return button;
    }
    onShortcutInputKeyDown(shortcut, shortcutInput, event) {
        if (event.key !== 'Tab') {
            const eventDescriptor = this.descriptorForEvent(event);
            const userDescriptors = this.editedShortcuts.get(shortcut) || [];
            this.editedShortcuts.set(shortcut, userDescriptors);
            const isLastKeyOfShortcut = userDescriptors.length === 2 && _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.KeyboardShortcut.KeyboardShortcut.isModifier(userDescriptors[1].key);
            const shouldClearOldShortcut = userDescriptors.length === 2 && !isLastKeyOfShortcut;
            if (shouldClearOldShortcut) {
                userDescriptors.splice(0, 2);
            }
            if (this.secondKeyTimeout) {
                clearTimeout(this.secondKeyTimeout);
                this.secondKeyTimeout = null;
                userDescriptors.push(eventDescriptor);
            }
            else if (isLastKeyOfShortcut) {
                userDescriptors[1] = eventDescriptor;
            }
            else if (!_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.KeyboardShortcut.KeyboardShortcut.isModifier(eventDescriptor.key)) {
                userDescriptors[0] = eventDescriptor;
                this.secondKeyTimeout = window.setTimeout(() => {
                    this.secondKeyTimeout = null;
                }, _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ShortcutRegistry.KeyTimeout);
            }
            else {
                userDescriptors[0] = eventDescriptor;
            }
            shortcutInput.value = this.shortcutInputTextForDescriptors(userDescriptors);
            this.validateInputs();
            event.consume(true);
        }
    }
    descriptorForEvent(event) {
        const userKey = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.KeyboardShortcut.KeyboardShortcut.makeKeyFromEvent(event);
        const codeAndModifiers = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.KeyboardShortcut.KeyboardShortcut.keyCodeAndModifiersFromKey(userKey);
        let key = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.KeyboardShortcut.Keys[event.key] || _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.KeyboardShortcut.KeyBindings[event.key];
        if (!key && !/^[a-z]$/i.test(event.key)) {
            const keyCode = event.code;
            // if we still don't have a key name, let's try the code before falling back to the raw key
            key = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.KeyboardShortcut.Keys[keyCode] || _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.KeyboardShortcut.KeyBindings[keyCode];
            if (keyCode.startsWith('Digit')) {
                key = keyCode.slice(5);
            }
            else if (keyCode.startsWith('Key')) {
                key = keyCode.slice(3);
            }
        }
        return _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.KeyboardShortcut.KeyboardShortcut.makeDescriptor(key || event.key, codeAndModifiers.modifiers);
    }
    shortcutInputTextForDescriptors(descriptors) {
        return descriptors.map(descriptor => descriptor.name).join(' ');
    }
    resetShortcutsToDefaults() {
        this.editedShortcuts.clear();
        for (const shortcut of this.shortcuts) {
            if (shortcut.type === _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.KeyboardShortcut.Type.UnsetShortcut) {
                const index = this.shortcuts.indexOf(shortcut);
                this.shortcuts.splice(index, 1);
            }
            else if (shortcut.type === _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.KeyboardShortcut.Type.UserShortcut) {
                this.editedShortcuts.set(shortcut, null);
            }
        }
        const disabledDefaults = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ShortcutRegistry.ShortcutRegistry.instance().disabledDefaultsForAction(this.item.id());
        disabledDefaults.forEach(shortcut => {
            if (this.shortcuts.includes(shortcut)) {
                return;
            }
            this.shortcuts.push(shortcut);
            this.editedShortcuts.set(shortcut, shortcut.descriptors);
        });
        this.update();
        this.focus();
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.alert(i18nString(UIStrings.shortcutChangesRestored, { PH1: this.item.title() }));
    }
    onEscapeKeyPressed(event) {
        const activeElement = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.DOMUtilities.deepActiveElement(document);
        for (const [shortcut, shortcutInput] of this.shortcutInputs.entries()) {
            if (activeElement === shortcutInput) {
                this.onShortcutInputKeyDown(shortcut, shortcutInput, event);
            }
        }
    }
    validateInputs() {
        const confirmButton = this.confirmButton;
        const errorMessageElement = this.errorMessageElement;
        if (!confirmButton || !errorMessageElement) {
            return;
        }
        confirmButton.disabled = false;
        errorMessageElement.classList.add('hidden');
        this.shortcutInputs.forEach((shortcutInput, shortcut) => {
            const userDescriptors = this.editedShortcuts.get(shortcut);
            if (!userDescriptors) {
                return;
            }
            if (userDescriptors.some(descriptor => _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.KeyboardShortcut.KeyboardShortcut.isModifier(descriptor.key))) {
                confirmButton.disabled = true;
                shortcutInput.classList.add('error-input');
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.setInvalid(shortcutInput, true);
                errorMessageElement.classList.remove('hidden');
                errorMessageElement.textContent = i18nString(UIStrings.shortcutsCannotContainOnly);
                return;
            }
            const conflicts = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ShortcutRegistry.ShortcutRegistry.instance()
                .actionsForDescriptors(userDescriptors)
                .filter(actionId => actionId !== this.item.id());
            if (conflicts.length) {
                confirmButton.disabled = true;
                shortcutInput.classList.add('error-input');
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.setInvalid(shortcutInput, true);
                errorMessageElement.classList.remove('hidden');
                if (!_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ActionRegistry.ActionRegistry.instance().hasAction(conflicts[0])) {
                    return;
                }
                const action = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ActionRegistry.ActionRegistry.instance().getAction(conflicts[0]);
                const actionTitle = action.title();
                const actionCategory = action.category();
                errorMessageElement.textContent =
                    i18nString(UIStrings.thisShortcutIsInUseByS, { PH1: actionCategory, PH2: actionTitle });
                return;
            }
            shortcutInput.classList.remove('error-input');
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.setInvalid(shortcutInput, false);
        });
    }
}


/***/ })

}]);