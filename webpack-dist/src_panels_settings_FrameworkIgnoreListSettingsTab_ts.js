"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_settings_FrameworkIgnoreListSettingsTab_ts"],{

/***/ "./src/panels/settings/FrameworkIgnoreListSettingsTab.ts":
/*!***************************************************************!*\
  !*** ./src/panels/settings/FrameworkIgnoreListSettingsTab.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FrameworkIgnoreListSettingsTab: () => (/* binding */ FrameworkIgnoreListSettingsTab)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './frameworkIgnoreListSettingsTab.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






const UIStrings = {
    /**
     *@description Header text content in Framework Ignore List Settings Tab of the Settings
     */
    frameworkIgnoreList: 'Framework Ignore List',
    /**
     *@description Text in Framework Ignore List Settings Tab of the Settings
     */
    debuggerWillSkipThroughThe: 'Debugger will skip through the scripts and will not stop on exceptions thrown by them.',
    /**
     *@description Text in Framework Ignore List Settings Tab of the Settings
     */
    ignoreListContentScripts: 'Content scripts injected by extensions',
    /**
     *@description Text in Framework Ignore List Settings Tab of the Settings
     */
    automaticallyIgnoreListKnownThirdPartyScripts: 'Known third-party scripts from source maps',
    /**
     *@description Text in Framework Ignore List Settings Tab of the Settings
     */
    enableIgnoreListing: 'Enable Ignore Listing',
    /**
     *@description Text in Framework Ignore List Settings Tab of the Settings
     */
    enableIgnoreListingTooltip: 'Uncheck to disable all ignore listing',
    /**
     *@description Text in Framework Ignore List Settings Tab of the Settings
     */
    generalExclusionRules: 'General exclusion rules:',
    /**
     *@description Text in Framework Ignore List Settings Tab of the Settings
     */
    customExclusionRules: 'Custom exclusion rules:',
    /**
     *@description Text of the add pattern button in Framework Ignore List Settings Tab of the Settings
     */
    addPattern: 'Add pattern...',
    /**
     *@description Aria accessible name in Framework Ignore List Settings Tab of the Settings
     */
    addFilenamePattern: 'Add filename pattern',
    /**
     *@description Pattern title in Framework Ignore List Settings Tab of the Settings
     *@example {ad.*?} PH1
     */
    ignoreScriptsWhoseNamesMatchS: 'Ignore scripts whose names match \'\'{PH1}\'\'',
    /**
     *@description Aria accessible name in Framework Ignore List Settings Tab of the Settings. It labels the input
     * field used to add new or edit existing regular expressions that match file names to ignore in the debugger.
     */
    pattern: 'Add Pattern',
    /**
     *@description Error message in Framework Ignore List settings pane that declares pattern must not be empty
     */
    patternCannotBeEmpty: 'Pattern cannot be empty',
    /**
     *@description Error message in Framework Ignore List settings pane that declares pattern already exits
     */
    patternAlreadyExists: 'Pattern already exists',
    /**
     *@description Error message in Framework Ignore List settings pane that declares pattern must be a valid regular expression
     */
    patternMustBeAValidRegular: 'Pattern must be a valid regular expression',
    /**
     *@description Text that is usually a hyperlink to more documentation
     */
    learnMore: 'Learn more',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/settings/FrameworkIgnoreListSettingsTab.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
class FrameworkIgnoreListSettingsTab extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Widget.VBox {
    constructor() {
        super(true);
        Object.defineProperty(this, "list", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "setting", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "editor", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.pane('blackbox')}`);
        const header = this.contentElement.createChild('div', 'header');
        header.textContent = i18nString(UIStrings.frameworkIgnoreList);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ARIAUtils.markAsHeading(header, 1);
        this.contentElement.createChild('div', 'intro').textContent = i18nString(UIStrings.debuggerWillSkipThroughThe);
        const enabledSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('enable-ignore-listing');
        const enableIgnoreListing = this.contentElement.createChild('div', 'ignore-list-global-enable');
        enableIgnoreListing.appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.SettingsUI.createSettingCheckbox(i18nString(UIStrings.enableIgnoreListing), enabledSetting, true));
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Tooltip.Tooltip.install(enableIgnoreListing, i18nString(UIStrings.enableIgnoreListingTooltip));
        const ignoreListOptions = this.contentElement.createChild('div', 'ignore-list-options');
        const generalExclusionGroup = this.createSettingGroup(i18nString(UIStrings.generalExclusionRules));
        ignoreListOptions.appendChild(generalExclusionGroup);
        const ignoreListContentScripts = generalExclusionGroup.createChild('div', 'ignore-list-option');
        ignoreListContentScripts.appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.SettingsUI.createSettingCheckbox(i18nString(UIStrings.ignoreListContentScripts), _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('skip-content-scripts'), true));
        const automaticallyIgnoreList = generalExclusionGroup.createChild('div', 'ignore-list-option');
        automaticallyIgnoreList.appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.SettingsUI.createSettingCheckbox(i18nString(UIStrings.automaticallyIgnoreListKnownThirdPartyScripts), _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('automatically-ignore-list-known-third-party-scripts'), true));
        const automaticallyIgnoreLink = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.XLink.XLink.create('http://goo.gle/skip-third-party', undefined, undefined, undefined, 'learn-more');
        automaticallyIgnoreLink.textContent = '';
        automaticallyIgnoreLink.setAttribute('aria-label', i18nString(UIStrings.learnMore));
        const automaticallyIgnoreLinkIcon = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__.Icon.Icon();
        automaticallyIgnoreLinkIcon.data = { iconName: 'help', color: 'var(--icon-default)', width: '16px', height: '16px' };
        automaticallyIgnoreLink.prepend(automaticallyIgnoreLinkIcon);
        automaticallyIgnoreList.appendChild(automaticallyIgnoreLink);
        const customExclusionGroup = this.createSettingGroup(i18nString(UIStrings.customExclusionRules));
        ignoreListOptions.appendChild(customExclusionGroup);
        this.list = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ListWidget.ListWidget(this);
        this.list.element.classList.add('ignore-list');
        const placeholder = document.createElement('div');
        placeholder.classList.add('ignore-list-empty');
        this.list.setEmptyPlaceholder(placeholder);
        this.list.show(customExclusionGroup);
        const addPatternButton = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.UIUtils.createTextButton(i18nString(UIStrings.addPattern), this.addButtonClicked.bind(this), { className: 'add-button', jslogContext: 'settings.add-ignore-list-pattern' });
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ARIAUtils.setLabel(addPatternButton, i18nString(UIStrings.addFilenamePattern));
        customExclusionGroup.appendChild(addPatternButton);
        this.setting =
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('skip-stack-frames-pattern');
        this.setting.addChangeListener(this.settingUpdated, this);
        this.setDefaultFocusedElement(addPatternButton);
        enabledSetting.addChangeListener(enabledChanged);
        enabledChanged();
        function enabledChanged() {
            const enabled = enabledSetting.get();
            if (enabled) {
                ignoreListOptions.classList.remove('ignore-listing-disabled');
            }
            else {
                ignoreListOptions.classList.add('ignore-listing-disabled');
            }
        }
    }
    wasShown() {
        super.wasShown();
        this.list.registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './frameworkIgnoreListSettingsTab.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
        this.registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './frameworkIgnoreListSettingsTab.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
        this.settingUpdated();
    }
    settingUpdated() {
        this.list.clear();
        const patterns = this.setting.getAsArray();
        for (let i = 0; i < patterns.length; ++i) {
            this.list.appendItem(patterns[i], true);
        }
    }
    addButtonClicked() {
        this.list.addNewItem(this.setting.getAsArray().length, { pattern: '', disabled: false });
    }
    createSettingGroup(title) {
        const group = document.createElement('div');
        group.classList.add('ignore-list-option-group');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ARIAUtils.markAsGroup(group);
        const groupTitle = group.createChild('div', 'ignore-list-option-group-title');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ARIAUtils.markAsHeading(groupTitle, 2);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ARIAUtils.setLabel(group, title);
        groupTitle.textContent = title;
        return group;
    }
    renderItem(item, _editable) {
        const element = document.createElement('div');
        const listSetting = this.setting;
        const checkbox = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.UIUtils.CheckboxLabel.create(item.pattern, !item.disabled, undefined, 'settings.ignore-list-pattern');
        const helpText = i18nString(UIStrings.ignoreScriptsWhoseNamesMatchS, { PH1: item.pattern });
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Tooltip.Tooltip.install(checkbox, helpText);
        checkbox.checkboxElement.ariaLabel = helpText;
        checkbox.checkboxElement.addEventListener('change', inputChanged, false);
        element.appendChild(checkbox);
        element.classList.add('ignore-list-item');
        return element;
        function inputChanged() {
            const disabled = !checkbox.checkboxElement.checked;
            if (item.disabled !== disabled) {
                item.disabled = disabled;
                item.disabledForUrl = undefined;
                // Send changed event
                listSetting.setAsArray(listSetting.getAsArray());
            }
        }
    }
    removeItemRequested(item, index) {
        const patterns = this.setting.getAsArray();
        patterns.splice(index, 1);
        this.setting.setAsArray(patterns);
    }
    commitEdit(item, editor, isNew) {
        item.pattern = editor.control('pattern').value.trim();
        const list = this.setting.getAsArray();
        if (isNew) {
            list.push(item);
        }
        this.setting.setAsArray(list);
    }
    beginEdit(item) {
        const editor = this.createEditor();
        editor.control('pattern').value = item.pattern;
        return editor;
    }
    createEditor() {
        if (this.editor) {
            return this.editor;
        }
        const editor = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ListWidget.Editor();
        this.editor = editor;
        const content = editor.contentElement();
        const titles = content.createChild('div', 'ignore-list-edit-row');
        titles.createChild('div', 'ignore-list-pattern').textContent = i18nString(UIStrings.pattern);
        const fields = content.createChild('div', 'ignore-list-edit-row');
        const pattern = editor.createInput('pattern', 'text', '/framework\\.js$', patternValidator.bind(this));
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ARIAUtils.setLabel(pattern, i18nString(UIStrings.pattern));
        fields.createChild('div', 'ignore-list-pattern').appendChild(pattern);
        return editor;
        function patternValidator(item, index, input) {
            const pattern = input.value.trim();
            const patterns = this.setting.getAsArray();
            if (!pattern.length) {
                return { valid: false, errorMessage: i18nString(UIStrings.patternCannotBeEmpty) };
            }
            for (let i = 0; i < patterns.length; ++i) {
                if (i !== index && patterns[i].pattern === pattern) {
                    return { valid: false, errorMessage: i18nString(UIStrings.patternAlreadyExists) };
                }
            }
            let regex;
            try {
                regex = new RegExp(pattern);
            }
            catch (e) {
            }
            if (!regex) {
                return { valid: false, errorMessage: i18nString(UIStrings.patternMustBeAValidRegular) };
            }
            return { valid: true, errorMessage: undefined };
        }
    }
}


/***/ })

}]);