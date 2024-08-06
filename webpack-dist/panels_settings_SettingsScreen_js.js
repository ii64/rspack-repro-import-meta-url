"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_settings_SettingsScreen_js"],{

/***/ "./panels/settings/SettingsScreen.js":
/*!*******************************************!*\
  !*** ./panels/settings/SettingsScreen.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionDelegate: () => (/* binding */ ActionDelegate),
/* harmony export */   ExperimentsSettingsTab: () => (/* binding */ ExperimentsSettingsTab),
/* harmony export */   GenericSettingsTab: () => (/* binding */ GenericSettingsTab),
/* harmony export */   Revealer: () => (/* binding */ Revealer),
/* harmony export */   SettingsScreen: () => (/* binding */ SettingsScreen)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_root_root_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/root/root.js */ "./core/root/root.js");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */ var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/components/utils/utils.js */ "./ui/legacy/components/utils/utils.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/utils.js */ "./panels/utils/utils.js");
/* harmony import */ var _components_components_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/components.js */ "./panels/settings/components/components.js");
/* harmony import */ var _settingsScreen_css_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./settingsScreen.css.js */ "./panels/settings/settingsScreen.css.js");
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
 */











const UIStrings = {
    /**
     *@description Name of the Settings view
     */
    settings: 'Settings',
    /**
     *@description Text for keyboard shortcuts
     */
    shortcuts: 'Shortcuts',
    /**
     *@description Text in Settings Screen of the Settings
     */
    preferences: 'Preferences',
    /**
     *@description Text of button in Settings Screen of the Settings
     */
    restoreDefaultsAndReload: 'Restore defaults and reload',
    /**
     *@description Text in Settings Screen of the Settings
     */
    experiments: 'Experiments',
    /**
     *@description Message shown in the experiments panel to warn users about any possible unstable features.
     */
    theseExperimentsCouldBeUnstable: 'These experiments could be unstable or unreliable and may require you to restart DevTools.',
    /**
     *@description Message text content in Settings Screen of the Settings
     */
    theseExperimentsAreParticularly: 'These experiments are particularly unstable. Enable at your own risk.',
    /**
     *@description Warning text content in Settings Screen of the Settings
     */
    warning: 'WARNING:',
    /**
     *@description Message to display if a setting change requires a reload of DevTools
     */
    oneOrMoreSettingsHaveChanged: 'One or more settings have changed which requires a reload to take effect.',
    /**
     * @description Label for a filter text input that controls which experiments are shown.
     */
    filterExperimentsLabel: 'Filter',
    /**
     * @description Warning text shown when the user has entered text to filter the
     * list of experiments, but no experiments match the filter.
     */
    noResults: 'No experiments match the filter',
    /**
     *@description Text that is usually a hyperlink to more documentation
     */
    learnMore: 'Learn more',
    /**
     *@description Text that is usually a hyperlink to a feedback form
     */
    sendFeedback: 'Send feedback',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/settings/SettingsScreen.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
let settingsScreenInstance;
class SettingsScreen extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Widget.VBox {
    tabbedLocation;
    keybindsTab;
    reportTabOnReveal;
    constructor() {
        super(true);
        this.contentElement.classList.add('settings-window-main');
        this.contentElement.classList.add('vbox');
        const settingsLabelElement = document.createElement('div');
        settingsLabelElement.classList.add('settings-window-label-element');
        const settingsTitleElement = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createShadowRootWithCoreStyles(settingsLabelElement, { cssFile: [_settingsScreen_css_js__WEBPACK_IMPORTED_MODULE_10__["default"]], delegatesFocus: undefined })
            .createChild('div', 'settings-window-title');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.markAsHeading(settingsTitleElement, 1);
        settingsTitleElement.textContent = i18nString(UIStrings.settings);
        this.tabbedLocation = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ViewManager.ViewManager.instance().createTabbedLocation(() => SettingsScreen.revealSettingsScreen(), 'settings-view');
        const tabbedPane = this.tabbedLocation.tabbedPane();
        tabbedPane.registerCSSFiles([_settingsScreen_css_js__WEBPACK_IMPORTED_MODULE_10__["default"]]);
        tabbedPane.headerElement().prepend(settingsLabelElement);
        tabbedPane.setShrinkableTabs(false);
        tabbedPane.makeVerticalTabLayout();
        const keyBindsView = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ViewManager.ViewManager.instance().view('keybinds');
        if (keyBindsView) {
            void keyBindsView.widget().then(widget => {
                this.keybindsTab = widget;
            });
        }
        tabbedPane.show(this.contentElement);
        tabbedPane.selectTab('preferences');
        tabbedPane.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.TabbedPane.Events.TabInvoked, this.tabInvoked, this);
        this.reportTabOnReveal = false;
    }
    static instance(opts = { forceNew: null }) {
        const { forceNew } = opts;
        if (!settingsScreenInstance || forceNew) {
            settingsScreenInstance = new SettingsScreen();
        }
        return settingsScreenInstance;
    }
    static revealSettingsScreen() {
        const settingsScreen = SettingsScreen.instance();
        if (settingsScreen.isShowing()) {
            return settingsScreen;
        }
        settingsScreen.reportTabOnReveal = true;
        const dialog = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Dialog.Dialog('settings');
        dialog.contentElement.tabIndex = -1;
        dialog.addCloseButton();
        dialog.setOutsideClickCallback(() => { });
        dialog.setPointerEventsBehavior("PierceGlassPane" /* UI.GlassPane.PointerEventsBehavior.PierceGlassPane */);
        dialog.setOutsideTabIndexBehavior("PreserveMainViewTabIndex" /* UI.Dialog.OutsideTabIndexBehavior.PreserveMainViewTabIndex */);
        settingsScreen.show(dialog.contentElement);
        dialog.setEscapeKeyCallback(settingsScreen.onEscapeKeyPressed.bind(settingsScreen));
        dialog.setMarginBehavior("NoMargin" /* UI.GlassPane.MarginBehavior.NoMargin */);
        // UI.Dialog extends GlassPane and overrides the `show` method with a wider
        // accepted type. However, TypeScript uses the supertype declaration to
        // determine the full type, which requires a `!Document`.
        // @ts-ignore
        dialog.show();
        return settingsScreen;
    }
    static async showSettingsScreen(options = { name: undefined, focusTabHeader: undefined }) {
        const { name, focusTabHeader } = options;
        const settingsScreen = SettingsScreen.revealSettingsScreen();
        settingsScreen.selectTab(name || 'preferences');
        const tabbedPane = settingsScreen.tabbedLocation.tabbedPane();
        await tabbedPane.waitForTabElementUpdate();
        if (focusTabHeader) {
            tabbedPane.focusSelectedTabHeader();
        }
        else {
            tabbedPane.focus();
        }
    }
    resolveLocation(_locationName) {
        return this.tabbedLocation;
    }
    selectTab(name) {
        this.tabbedLocation.tabbedPane().selectTab(name, /* userGesture */ true);
    }
    tabInvoked(event) {
        const eventData = event.data;
        if (!eventData.isUserGesture) {
            return;
        }
        const prevTabId = eventData.prevTabId;
        const tabId = eventData.tabId;
        if (!this.reportTabOnReveal && prevTabId && prevTabId === tabId) {
            return;
        }
        this.reportTabOnReveal = false;
        this.reportSettingsPanelShown(tabId);
    }
    reportSettingsPanelShown(tabId) {
        if (tabId === i18nString(UIStrings.shortcuts)) {
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.settingsPanelShown('shortcuts');
            return;
        }
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.settingsPanelShown(tabId);
    }
    onEscapeKeyPressed(event) {
        if (this.tabbedLocation.tabbedPane().selectedTabId === 'keybinds' && this.keybindsTab) {
            this.keybindsTab.onEscapeKeyPressed(event);
        }
    }
    wasShown() {
        super.wasShown();
        this.registerCSSFiles([_settingsScreen_css_js__WEBPACK_IMPORTED_MODULE_10__["default"]]);
    }
}
class SettingsTab extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Widget.VBox {
    containerElement;
    constructor(name, id) {
        super();
        this.element.classList.add('settings-tab-container');
        if (id) {
            this.element.id = id;
        }
        const header = this.element.createChild('header');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createTextChild(header.createChild('h1'), name);
        this.containerElement = this.element.createChild('div', 'settings-container-wrapper')
            .createChild('div', 'settings-tab settings-content settings-container');
    }
    appendSection(name) {
        const block = this.containerElement.createChild('div', 'settings-block');
        if (name) {
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.markAsGroup(block);
            const title = block.createChild('div', 'settings-section-title');
            title.textContent = name;
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.markAsHeading(title, 2);
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.setLabel(block, name);
        }
        return block;
    }
}
class GenericSettingsTab extends SettingsTab {
    syncSection = new _components_components_js__WEBPACK_IMPORTED_MODULE_9__.SyncSection.SyncSection();
    settingToControl = new Map();
    constructor() {
        super(i18nString(UIStrings.preferences), 'preferences-tab-content');
        this.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.pane('preferences')}`);
        // GRID, MOBILE, EMULATION, and RENDERING are intentionally excluded from this list.
        const explicitSectionOrder = [
            "" /* Common.Settings.SettingCategory.NONE */,
            "APPEARANCE" /* Common.Settings.SettingCategory.APPEARANCE */,
            "SOURCES" /* Common.Settings.SettingCategory.SOURCES */,
            "ELEMENTS" /* Common.Settings.SettingCategory.ELEMENTS */,
            "NETWORK" /* Common.Settings.SettingCategory.NETWORK */,
            "PERFORMANCE" /* Common.Settings.SettingCategory.PERFORMANCE */,
            "MEMORY" /* Common.Settings.SettingCategory.MEMORY */,
            "CONSOLE" /* Common.Settings.SettingCategory.CONSOLE */,
            "EXTENSIONS" /* Common.Settings.SettingCategory.EXTENSIONS */,
            "PERSISTENCE" /* Common.Settings.SettingCategory.PERSISTENCE */,
            "DEBUGGER" /* Common.Settings.SettingCategory.DEBUGGER */,
            "GLOBAL" /* Common.Settings.SettingCategory.GLOBAL */,
            "SYNC" /* Common.Settings.SettingCategory.SYNC */,
        ];
        // Some settings define their initial ordering.
        const preRegisteredSettings = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().getRegisteredSettings().sort((firstSetting, secondSetting) => {
            if (firstSetting.order && secondSetting.order) {
                return (firstSetting.order - secondSetting.order);
            }
            if (firstSetting.order) {
                return -1;
            }
            if (secondSetting.order) {
                return 1;
            }
            return 0;
        });
        for (const sectionCategory of explicitSectionOrder) {
            const settingsForSection = preRegisteredSettings.filter(setting => setting.category === sectionCategory && GenericSettingsTab.isSettingVisible(setting));
            this.createSectionElement(sectionCategory, settingsForSection);
        }
        const restoreAndReloadButton = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createTextButton(i18nString(UIStrings.restoreDefaultsAndReload), restoreAndReload, { jslogContext: 'settings.restore-defaults-and-reload' });
        this.appendSection().appendChild(restoreAndReloadButton);
        function restoreAndReload() {
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().clearAll();
            _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_5__.Reload.reload();
        }
    }
    static isSettingVisible(setting) {
        return Boolean(setting.title?.()) && Boolean(setting.category);
    }
    wasShown() {
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Context.Context.instance().setFlavor(GenericSettingsTab, this);
        super.wasShown();
        this.updateSyncSection();
    }
    willHide() {
        super.willHide();
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Context.Context.instance().setFlavor(GenericSettingsTab, null);
    }
    updateSyncSection() {
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.getSyncInformation(syncInfo => {
            this.syncSection.data = {
                syncInfo,
                syncSetting: _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.moduleSetting('sync-preferences'),
            };
        });
    }
    createExtensionSection(settings) {
        const sectionName = "EXTENSIONS" /* Common.Settings.SettingCategory.EXTENSIONS */;
        const settingUI = _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_5__.Linkifier.LinkHandlerSettingUI.instance();
        const element = settingUI.settingElement();
        if (element) {
            const sectionElement = this.createStandardSectionElement(sectionName, settings);
            sectionElement.appendChild(element);
        }
    }
    createSectionElement(category, settings) {
        // Always create the EXTENSIONS section and append the link handling control.
        if (category === "EXTENSIONS" /* Common.Settings.SettingCategory.EXTENSIONS */) {
            this.createExtensionSection(settings);
        }
        else if (category === "SYNC" /* Common.Settings.SettingCategory.SYNC */ && settings.length > 0) {
            this.containerElement.appendChild(this.syncSection);
        }
        else if (settings.length > 0) {
            this.createStandardSectionElement(category, settings);
        }
    }
    createStandardSectionElement(category, settings) {
        const uiSectionName = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.getLocalizedSettingsCategory(category);
        const sectionElement = this.appendSection(uiSectionName);
        for (const settingRegistration of settings) {
            const setting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting(settingRegistration.settingName);
            const settingControl = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.SettingsUI.createControlForSetting(setting);
            if (settingControl) {
                this.settingToControl.set(setting, settingControl);
                sectionElement.appendChild(settingControl);
            }
        }
        return sectionElement;
    }
    highlightObject(setting) {
        if (setting instanceof _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Setting) {
            const element = this.settingToControl.get(setting);
            if (element) {
                _utils_utils_js__WEBPACK_IMPORTED_MODULE_8__.PanelUtils.highlightElement(element);
            }
        }
    }
}
class ExperimentsSettingsTab extends SettingsTab {
    #experimentsSection;
    #unstableExperimentsSection;
    #inputElement;
    experimentToControl = new Map();
    constructor() {
        super(i18nString(UIStrings.experiments), 'experiments-tab-content');
        const filterSection = this.appendSection();
        filterSection.classList.add('experiments-filter');
        this.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.pane('experiments')}`);
        const labelElement = filterSection.createChild('label');
        labelElement.textContent = i18nString(UIStrings.filterExperimentsLabel);
        this.#inputElement = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createInput('', 'text', 'experiments-filter');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.bindLabelToControl(labelElement, this.#inputElement);
        filterSection.appendChild(this.#inputElement);
        this.#inputElement.addEventListener('input', () => this.renderExperiments(this.#inputElement.value.toLowerCase()), false);
        this.setDefaultFocusedElement(this.#inputElement);
        this.setFilter('');
    }
    renderExperiments(filterText) {
        this.experimentToControl.clear();
        if (this.#experimentsSection) {
            this.#experimentsSection.remove();
        }
        if (this.#unstableExperimentsSection) {
            this.#unstableExperimentsSection.remove();
        }
        const experiments = _core_root_root_js__WEBPACK_IMPORTED_MODULE_3__.Runtime.experiments.allConfigurableExperiments().sort();
        const unstableExperiments = experiments.filter(e => e.unstable && e.title.toLowerCase().includes(filterText));
        const stableExperiments = experiments.filter(e => !e.unstable && e.title.toLowerCase().includes(filterText));
        if (stableExperiments.length) {
            this.#experimentsSection = this.appendSection();
            const warningMessage = i18nString(UIStrings.theseExperimentsCouldBeUnstable);
            this.#experimentsSection.appendChild(this.createExperimentsWarningSubsection(warningMessage));
            for (const experiment of stableExperiments) {
                this.#experimentsSection.appendChild(this.createExperimentCheckbox(experiment));
            }
        }
        if (unstableExperiments.length) {
            this.#unstableExperimentsSection = this.appendSection();
            const warningMessage = i18nString(UIStrings.theseExperimentsAreParticularly);
            this.#unstableExperimentsSection.appendChild(this.createExperimentsWarningSubsection(warningMessage));
            for (const experiment of unstableExperiments) {
                this.#unstableExperimentsSection.appendChild(this.createExperimentCheckbox(experiment));
            }
        }
        if (!stableExperiments.length && !unstableExperiments.length) {
            this.#experimentsSection = this.appendSection();
            const warning = this.#experimentsSection.createChild('span');
            warning.textContent = i18nString(UIStrings.noResults);
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.alert(warning.textContent);
        }
    }
    createExperimentsWarningSubsection(warningMessage) {
        const subsection = document.createElement('div');
        const warning = subsection.createChild('span', 'settings-experiments-warning-subsection-warning');
        warning.textContent = i18nString(UIStrings.warning);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createTextChild(subsection, ' ');
        const message = subsection.createChild('span', 'settings-experiments-warning-subsection-message');
        message.textContent = warningMessage;
        return subsection;
    }
    createExperimentCheckbox(experiment) {
        const label = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.CheckboxLabel.create(experiment.title, experiment.isEnabled(), undefined, experiment.name);
        label.classList.add('experiment-label');
        const input = label.checkboxElement;
        input.name = experiment.name;
        function listener() {
            experiment.setEnabled(input.checked);
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.experimentChanged(experiment.name, experiment.isEnabled());
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.InspectorView.InspectorView.instance().displayReloadRequiredWarning(i18nString(UIStrings.oneOrMoreSettingsHaveChanged));
        }
        input.addEventListener('click', listener, false);
        const p = document.createElement('p');
        this.experimentToControl.set(experiment, p);
        p.classList.add('settings-experiment');
        if (experiment.unstable && !experiment.isEnabled()) {
            p.classList.add('settings-experiment-unstable');
        }
        p.appendChild(label);
        if (experiment.docLink) {
            const link = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.XLink.XLink.create(experiment.docLink, undefined, undefined, undefined, `${experiment.name}-documentation`);
            link.textContent = '';
            link.setAttribute('aria-label', i18nString(UIStrings.learnMore));
            const linkIcon = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__.Icon.Icon();
            linkIcon.data = { iconName: 'help', color: 'var(--icon-default)', width: '16px', height: '16px' };
            linkIcon.classList.add('link-icon');
            link.prepend(linkIcon);
            p.appendChild(link);
        }
        if (experiment.feedbackLink) {
            const link = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.XLink.XLink.create(experiment.feedbackLink, undefined, undefined, undefined, `${experiment.name}-feedback`);
            link.textContent = i18nString(UIStrings.sendFeedback);
            link.classList.add('feedback-link');
            p.appendChild(link);
        }
        return p;
    }
    highlightObject(experiment) {
        if (experiment instanceof _core_root_root_js__WEBPACK_IMPORTED_MODULE_3__.Runtime.Experiment) {
            const element = this.experimentToControl.get(experiment);
            if (element) {
                _utils_utils_js__WEBPACK_IMPORTED_MODULE_8__.PanelUtils.highlightElement(element);
            }
        }
    }
    setFilter(filterText) {
        this.#inputElement.value = filterText;
        this.#inputElement.dispatchEvent(new Event('input', { 'bubbles': true, 'cancelable': true }));
    }
    wasShown() {
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Context.Context.instance().setFlavor(ExperimentsSettingsTab, this);
        super.wasShown();
    }
    willHide() {
        super.willHide();
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Context.Context.instance().setFlavor(ExperimentsSettingsTab, null);
    }
}
class ActionDelegate {
    handleAction(context, actionId) {
        switch (actionId) {
            case 'settings.show':
                void SettingsScreen.showSettingsScreen({ focusTabHeader: true });
                return true;
            case 'settings.documentation':
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.openInNewTab(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.addReferrerToURL('https://developer.chrome.com/docs/devtools/'));
                return true;
            case 'settings.shortcuts':
                void SettingsScreen.showSettingsScreen({ name: 'keybinds', focusTabHeader: true });
                return true;
        }
        return false;
    }
}
class Revealer {
    async reveal(object) {
        const context = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Context.Context.instance();
        if (object instanceof _core_root_root_js__WEBPACK_IMPORTED_MODULE_3__.Runtime.Experiment) {
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.bringToFront();
            await SettingsScreen.showSettingsScreen({ name: 'experiments' });
            const experimentsSettingsTab = context.flavor(ExperimentsSettingsTab);
            if (experimentsSettingsTab !== null) {
                experimentsSettingsTab.highlightObject(object);
            }
            return;
        }
        for (const settingRegistration of _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().getRegisteredSettings()) {
            if (!GenericSettingsTab.isSettingVisible(settingRegistration)) {
                continue;
            }
            if (settingRegistration.settingName === object.name) {
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.bringToFront();
                await SettingsScreen.showSettingsScreen();
                const genericSettingsTab = context.flavor(GenericSettingsTab);
                if (genericSettingsTab !== null) {
                    genericSettingsTab.highlightObject(object);
                }
                return;
            }
        }
        // Reveal settings views
        for (const view of _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ViewManager.getRegisteredViewExtensions(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().getHostConfig())) {
            const id = view.viewId();
            const location = view.location();
            if (location !== "settings-view" /* UI.ViewManager.ViewLocationValues.SETTINGS_VIEW */) {
                continue;
            }
            const settings = view.settings();
            if (settings && settings.indexOf(object.name) !== -1) {
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.bringToFront();
                await SettingsScreen.showSettingsScreen({ name: id });
                const widget = await view.widget();
                if (widget instanceof SettingsTab) {
                    widget.highlightObject(object);
                }
                return;
            }
        }
    }
}
//# sourceMappingURL=SettingsScreen.js.map

/***/ }),

/***/ "./panels/settings/settingsScreen.css.js":
/*!***********************************************!*\
  !*** ./panels/settings/settingsScreen.css.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */
const styles = new CSSStyleSheet();
styles.replaceSync(
`/*
 * Copyright (c) 2015 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.settings-window-main {
  color: var(--sys-color-on-surface);
  background-color: var(--sys-color-cdt-base-container);
}

.settings-content {
  overflow-y: auto;
  overflow-x: hidden;
  margin: 8px 8px 8px 0;
  padding: 0 4px;
  flex: auto;
}

.settings-container {
  width: 100%;
  column-width: 288px;
}

.settings-block {
  display: block;
  padding-bottom: 9px;
  width: 288px;
  break-inside: avoid;
}

.settings-tab.settings-container {
  column-width: 308px;
}

.settings-tab .settings-block {
  margin-left: 20px;
}

.settings-line {
  padding-bottom: 5px;
  margin-bottom: 5px;
}

.settings-key-cell {
  display: inline-block;
  width: 153px;
  white-space: nowrap;
  text-align: right;
  vertical-align: middle;
  padding-right: 6px;
}

.settings-cell {
  display: inline-block;
  width: 135px;
  vertical-align: middle;
}

.settings-section-title {
  font-size: 120%;
  text-align: left;
}

.settings-combine-keys {
  margin: 0 0.3em;
  font-size: 9px;
}

fieldset {
  margin: 0;
  padding: 0;
  border: none;
}

.experiments-filter {
  padding-top: 1px;
  display: flex;
  align-items: center;
}

label {
  padding-right: 8px;
  padding-bottom: 8px;
}

.experiments-filter label {
  padding-bottom: 0;
}

.settings-tab p {
  margin: 6px 0;
}

.settings-block p p {
  padding-left: 30px;
}

.settings-select {
  align-items: center;
  display: grid;
}

.settings-experiments-warning-subsection-warning {
  color: var(--sys-color-error);
}

.settings-experiments-warning-subsection-message {
  color: inherit;
}

.settings-content input[type="checkbox"] {
  margin: 1px 7px 1px 2px;
}

.settings-window-label-element {
  flex: none;
}

.settings-window-title {
  display: flex;
  align-items: center;
  font-size: var(--sys-size-9);
  color: var(--sys-color-on-surface);
  margin: var(--sys-size-8) var(--sys-size-7);

  &::before {
    content: "";
    width: var(--sys-size-9);
    height: var(--sys-size-9);
    margin-right: var(--sys-size-6);
    background-image: var(--image-file-devtools);
  }
}

.settings-container-wrapper {
  position: absolute;
  top: 31px;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: auto;
  padding-top: 9px;
  border-top: 1px solid var(--sys-color-divider);
}

.settings-tab.settings-content {
  margin: 0;
  padding: 0;
}

.settings-tab-container {
  flex: auto;
  overflow: hidden;
}

.settings-tab-container header {
  padding: 0 0 6px;
}

#experiments-tab-content .settings-container {
  column-width: auto;
}

#experiments-tab-content .settings-block {
  width: auto;
  margin-left: 0;
  margin-right: 10px;
}

.settings-tab-container header > h1 {
  font-size: 18px;
  font-weight: normal;
  margin: 0;
  padding-bottom: 3px;
  white-space: nowrap;
}

.settings-tab .settings-section-title {
  margin-left: -20px;
  color: var(--sys-color-on-surface-subtle);
}

.settings-tab select {
  margin-left: 10px;
  width: 80%;
}

.settings-experiment {
  display: grid;
  grid-template-columns: auto min-content auto 1fr;
}

.settings-experiment .devtools-link {
  display: flex !important; /* stylelint-disable-line declaration-no-important */
  align-items: center;
}

.settings-experiment .devtools-link:has(.link-icon) {
  outline-offset: 0;
}

.experiment-label {
  margin-right: 2px;
}

.settings-experiment-unstable {
  color: var(--sys-color-token-subtle);
}

.settings-experiment .feedback-link {
  color: var(--sys-color-primary);
  text-decoration-line: underline;
  margin-left: 4px;
}

.tabbed-pane-content slot::slotted(.widget) {
  /* '!important' in order to overwrite the slotted widget's 'overflow-auto' class.
  This prevents the focus-ring of selectable elements from being cut off. */
  overflow: visible !important; /* stylelint-disable-line declaration-no-important */
}

@media (forced-colors: active) {
  .settings-window-title {
    color: canvastext;
  }

  .tabbed-pane-header-tab {
    background: ButtonFace;
  }

  .tabbed-pane-header-tab-title {
    color: canvastext;
  }
}

@media (forced-colors: active) and (prefers-color-scheme: dark) {
  .tabbed-pane-header-tab.selected {
    background: ButtonFace;
  }

  .tabbed-pane-header-tab.selected .tabbed-pane-header-tab-title {
    color: HighlightText;
  }
}

/*# sourceURL=settingsScreen.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./panels/utils/utils.js":
/*!*******************************!*\
  !*** ./panels/utils/utils.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PanelUtils: () => (/* binding */ PanelUtils)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _models_formatter_formatter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/formatter/formatter.js */ "./models/formatter/formatter.js");
/* harmony import */ var _ui_components_diff_view_diff_view_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/components/diff_view/diff_view.js */ "./ui/components/diff_view/diff_view.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



// These utilities are packaged in a class to allow unittests to stub or spy the implementation.
class PanelUtils {
    static iconDataForResourceType(resourceType) {
        if (resourceType.isDocument()) {
            return { iconName: 'file-document', color: 'var(--icon-file-document)' };
        }
        if (resourceType.isImage()) {
            return { iconName: 'file-image', color: 'var(--icon-file-image)' };
        }
        if (resourceType.isFont()) {
            return { iconName: 'file-font', color: 'var(--icon-file-font)' };
        }
        if (resourceType.isScript()) {
            return { iconName: 'file-script', color: 'var(--icon-file-script)' };
        }
        if (resourceType.isStyleSheet()) {
            return { iconName: 'file-stylesheet', color: 'var(--icon-file-styles)' };
        }
        if (resourceType.name() === _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Manifest.name()) {
            return { iconName: 'file-manifest', color: 'var(--icon-default)' };
        }
        if (resourceType.name() === _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Wasm.name()) {
            return { iconName: 'file-wasm', color: 'var(--icon-default)' };
        }
        if (resourceType.name() === _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.WebSocket.name()) {
            return { iconName: 'file-websocket', color: 'var(--icon-default)' };
        }
        if (resourceType.name() === _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Media.name()) {
            return { iconName: 'file-media', color: 'var(--icon-file-media)' };
        }
        if (resourceType.isWebbundle()) {
            return { iconName: 'bundle', color: 'var(--icon-default)' };
        }
        if (resourceType.name() === _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Fetch.name() ||
            resourceType.name() === _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.XHR.name()) {
            return { iconName: 'file-fetch-xhr', color: 'var(--icon-default)' };
        }
        return { iconName: 'file-generic', color: 'var(--icon-default)' };
    }
    static async formatCSSChangesFromDiff(diff) {
        const indent = '  ';
        const { originalLines, currentLines, rows } = _ui_components_diff_view_diff_view_js__WEBPACK_IMPORTED_MODULE_2__.DiffView.buildDiffRows(diff);
        const originalRuleMaps = await buildStyleRuleMaps(originalLines.join('\n'));
        const currentRuleMaps = await buildStyleRuleMaps(currentLines.join('\n'));
        let changes = '';
        let recordedOriginalSelector, recordedCurrentSelector;
        let hasOpenDeclarationBlock = false;
        for (const { currentLineNumber, originalLineNumber, type } of rows) {
            if (type !== "deletion" /* DiffView.DiffView.RowType.Deletion */ && type !== "addition" /* DiffView.DiffView.RowType.Addition */) {
                continue;
            }
            const isDeletion = type === "deletion" /* DiffView.DiffView.RowType.Deletion */;
            const lines = isDeletion ? originalLines : currentLines;
            // Diff line arrays starts at 0, but line numbers start at 1.
            const lineIndex = isDeletion ? originalLineNumber - 1 : currentLineNumber - 1;
            const line = lines[lineIndex].trim();
            const { declarationIDToStyleRule, styleRuleIDToStyleRule } = isDeletion ? originalRuleMaps : currentRuleMaps;
            let styleRule;
            let prefix = '';
            if (declarationIDToStyleRule.has(lineIndex)) {
                styleRule = declarationIDToStyleRule.get(lineIndex);
                const selector = styleRule.selector;
                // Use the equality of selector strings as a best-effort check for the equality of style rules.
                if (selector !== recordedOriginalSelector && selector !== recordedCurrentSelector) {
                    prefix += `${selector} {\n`;
                }
                prefix += indent;
                hasOpenDeclarationBlock = true;
            }
            else {
                if (hasOpenDeclarationBlock) {
                    prefix = '}\n\n';
                    hasOpenDeclarationBlock = false;
                }
                if (styleRuleIDToStyleRule.has(lineIndex)) {
                    styleRule = styleRuleIDToStyleRule.get(lineIndex);
                }
            }
            const processedLine = isDeletion ? `/* ${line} */` : line;
            changes += prefix + processedLine + '\n';
            if (isDeletion) {
                recordedOriginalSelector = styleRule?.selector;
            }
            else {
                recordedCurrentSelector = styleRule?.selector;
            }
        }
        if (changes.length > 0) {
            changes += '}';
        }
        return changes;
    }
    static highlightElement(element) {
        element.scrollIntoViewIfNeeded();
        element.animate([
            { offset: 0, backgroundColor: 'rgba(255, 255, 0, 0.2)' },
            { offset: 0.1, backgroundColor: 'rgba(255, 255, 0, 0.7)' },
            { offset: 1, backgroundColor: 'transparent' },
        ], { duration: 2000, easing: 'cubic-bezier(0, 0, 0.2, 1)' });
    }
}
async function buildStyleRuleMaps(content) {
    const rules = await new Promise(res => {
        const rules = [];
        _models_formatter_formatter_js__WEBPACK_IMPORTED_MODULE_1__.FormatterWorkerPool.formatterWorkerPool().parseCSS(content, (isLastChunk, currentRules) => {
            rules.push(...currentRules);
            if (isLastChunk) {
                res(rules);
            }
        });
    });
    // We use line numbers as unique IDs for rules and declarations
    const declarationIDToStyleRule = new Map();
    const styleRuleIDToStyleRule = new Map();
    for (const rule of rules) {
        if ('styleRange' in rule) {
            const selector = rule.selectorText.split('\n').pop()?.trim();
            if (!selector) {
                continue;
            }
            const styleRule = { rule, selector };
            styleRuleIDToStyleRule.set(rule.styleRange.startLine, styleRule);
            for (const property of rule.properties) {
                declarationIDToStyleRule.set(property.range.startLine, styleRule);
            }
        }
    }
    return { declarationIDToStyleRule, styleRuleIDToStyleRule };
}
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "./ui/components/diff_view/diff_view.js":
/*!**********************************************!*\
  !*** ./ui/components/diff_view/diff_view.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DiffView: () => (/* reexport module object */ _DiffView_js__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _DiffView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DiffView.js */ "./ui/components/diff_view/DiffView.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

//# sourceMappingURL=diff_view.js.map

/***/ })

}]);