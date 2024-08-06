"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_lighthouse_LighthouseController_js"],{

/***/ "./panels/emulation/emulation.js":
/*!***************************************!*\
  !*** ./panels/emulation/emulation.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdvancedApp: () => (/* reexport module object */ _AdvancedApp_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   DeviceModeToolbar: () => (/* reexport module object */ _DeviceModeToolbar_js__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   DeviceModeView: () => (/* reexport module object */ _DeviceModeView_js__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   DeviceModeWrapper: () => (/* reexport module object */ _DeviceModeWrapper_js__WEBPACK_IMPORTED_MODULE_5__),
/* harmony export */   InspectedPagePlaceholder: () => (/* reexport module object */ _InspectedPagePlaceholder_js__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   MediaQueryInspector: () => (/* reexport module object */ _MediaQueryInspector_js__WEBPACK_IMPORTED_MODULE_2__)
/* harmony export */ });
/* harmony import */ var _AdvancedApp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdvancedApp.js */ "./panels/emulation/AdvancedApp.js");
/* harmony import */ var _InspectedPagePlaceholder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InspectedPagePlaceholder.js */ "./panels/emulation/InspectedPagePlaceholder.js");
/* harmony import */ var _MediaQueryInspector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MediaQueryInspector.js */ "./panels/emulation/MediaQueryInspector.js");
/* harmony import */ var _DeviceModeToolbar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DeviceModeToolbar.js */ "./panels/emulation/DeviceModeToolbar.js");
/* harmony import */ var _DeviceModeView_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DeviceModeView.js */ "./panels/emulation/DeviceModeView.js");
/* harmony import */ var _DeviceModeWrapper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DeviceModeWrapper.js */ "./panels/emulation/DeviceModeWrapper.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.













//# sourceMappingURL=emulation.js.map

/***/ }),

/***/ "./panels/lighthouse/LighthouseController.js":
/*!***************************************************!*\
  !*** ./panels/lighthouse/LighthouseController.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Events: () => (/* binding */ Events),
/* harmony export */   LighthouseController: () => (/* binding */ LighthouseController),
/* harmony export */   Presets: () => (/* binding */ Presets),
/* harmony export */   RuntimeSettings: () => (/* binding */ RuntimeSettings)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/emulation/emulation.js */ "./models/emulation/emulation.js");
/* harmony import */ var _emulation_emulation_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../emulation/emulation.js */ "./panels/emulation/emulation.js");
// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






const UIStrings = {
    /**
     *@description Explanation for user that Ligthhouse can only audit HTTP/HTTPS pages
     */
    canOnlyAuditHttphttpsPages: 'Can only audit pages on HTTP or HTTPS. Navigate to a different page.',
    /**
     *@description Text when stored data in one location may affect Lighthouse run
     *@example {IndexedDB} PH1
     */
    thereMayBeStoredDataAffectingSingular: 'There may be stored data affecting loading performance in this location: {PH1}. Audit this page in an incognito window to prevent those resources from affecting your scores.',
    /**
     *@description Text when stored data in multiple locations may affect Lighthouse run
     *@example {IndexedDB, WebSQL} PH1
     */
    thereMayBeStoredDataAffectingLoadingPlural: 'There may be stored data affecting loading performance in these locations: {PH1}. Audit this page in an incognito window to prevent those resources from affecting your scores.',
    /**
     *@description Help text in Lighthouse Controller
     */
    multipleTabsAreBeingControlledBy: 'Multiple tabs are being controlled by the same `service worker`. Close your other tabs on the same origin to audit this page.',
    /**
     *@description Help text in Lighthouse Controller
     */
    atLeastOneCategoryMustBeSelected: 'At least one category must be selected.',
    /**
     *@description Text in Application Panel Sidebar of the Application panel
     */
    localStorage: 'Local storage',
    /**
     *@description Text in Application Panel Sidebar of the Application panel
     */
    indexeddb: 'IndexedDB',
    /**
     *@description Text in Application Panel Sidebar of the Application panel
     */
    webSql: 'Web SQL',
    /**
     *@description Text of checkbox to include running the performance audits in Lighthouse
     */
    performance: 'Performance',
    /**
     *@description Tooltip text of checkbox to include running the performance audits in Lighthouse
     */
    howLongDoesThisAppTakeToShow: 'How long does this app take to show content and become usable',
    /**
     *@description Text of checkbox to include running the Best Practices audits in Lighthouse
     */
    bestPractices: 'Best practices',
    /**
     *@description Tooltip text of checkbox to include running the Best Practices audits in Lighthouse
     */
    doesThisPageFollowBestPractices: 'Does this page follow best practices for modern web development',
    /**
     *@description Text of checkbox to include running the Accessibility audits in Lighthouse
     */
    accessibility: 'Accessibility',
    /**
     *@description Tooltip text of checkbox to include running the Accessibility audits in Lighthouse
     */
    isThisPageUsableByPeopleWith: 'Is this page usable by people with disabilities or impairments',
    /**
     *@description Text of checkbox to include running the Search Engine Optimization audits in Lighthouse
     */
    seo: 'SEO',
    /**
     *@description Tooltip text of checkbox to include running the Search Engine Optimization audits in Lighthouse
     */
    isThisPageOptimizedForSearch: 'Is this page optimized for search engine results ranking',
    /**
     *@description ARIA label for a radio button input to emulate mobile device behavior when running audits in Lighthouse.
     */
    applyMobileEmulation: 'Apply mobile emulation',
    /**
     *@description Tooltip text of checkbox to emulate mobile device behavior when running audits in Lighthouse
     */
    applyMobileEmulationDuring: 'Apply mobile emulation during auditing',
    /**
     * @description ARIA label for a radio button input to select the Lighthouse mode.
     */
    lighthouseMode: 'Lighthouse mode',
    /**
     * @description Tooltip text of a radio button to select the Lighthouse mode. "Navigation" is a Lighthouse mode that audits a page navigation. "Timespan" is a Lighthouse mode that audits user interactions over a period of time. "Snapshot" is a Lighthouse mode that audits the current page state.
     */
    runLighthouseInMode: 'Run Lighthouse in navigation, timespan, or snapshot mode',
    /**
     * @description Label of a radio option for a Lighthouse mode that audits a page navigation. This should be marked as the default radio option.
     */
    navigation: 'Navigation (Default)',
    /**
     * @description Tooltip description of a radio option for a Lighthouse mode that audits a page navigation.
     */
    navigationTooltip: 'Navigation mode analyzes a page load, exactly like the original Lighthouse reports.',
    /**
     * @description Label of a radio option for a Lighthouse mode that audits user interactions over a period of time.
     */
    timespan: 'Timespan',
    /**
     * @description Tooltip description of a radio option for a Lighthouse mode that audits user interactions over a period of time.
     */
    timespanTooltip: 'Timespan mode analyzes an arbitrary period of time, typically containing user interactions.',
    /**
     * @description Label of a radio option for a Lighthouse mode that audits the current page state.
     */
    snapshot: 'Snapshot',
    /**
     * @description Tooltip description of a radio option for a Lighthouse mode that audits the current page state.
     */
    snapshotTooltip: 'Snapshot mode analyzes the page in a particular state, typically after user interactions.',
    /**
     *@description Text for the mobile platform, as opposed to desktop
     */
    mobile: 'Mobile',
    /**
     *@description Text for the desktop platform, as opposed to mobile
     */
    desktop: 'Desktop',
    /**
     * @description Text for an option to select a throttling method.
     */
    throttlingMethod: 'Throttling method',
    /**
     * @description Text for an option in a dropdown to use simulated throttling. This is the default setting.
     */
    simulatedThrottling: 'Simulated throttling (default)',
    /**
     * @description Text for an option in a dropdown to use DevTools throttling. This option should only be used by advanced users.
     */
    devtoolsThrottling: 'DevTools throttling (advanced)',
    /**
     * @description Tooltip text that appears when hovering over the 'Simulated Throttling' checkbox in the settings pane opened by clicking the setting cog in the start view of the audits panel
     */
    simulateASlowerPageLoadBasedOn: 'Simulated throttling simulates a slower page load based on data from an initial unthrottled load. DevTools throttling actually slows down the page.',
    /**
     *@description Text of checkbox to reset storage features prior to running audits in Lighthouse
     */
    clearStorage: 'Clear storage',
    /**
     * @description Tooltip text of checkbox to reset storage features prior to running audits in
     * Lighthouse. Resetting the storage clears/empties it to a neutral state.
     */
    resetStorageLocalstorage: 'Reset storage (`cache`, `service workers`, etc) before auditing. (Good for performance & `PWA` testing)',
    /**
     * @description Text of checkbox to enable JavaScript sampling while running audits in Lighthouse
     */
    enableSampling: 'Enable JS sampling',
    /**
     * @description Tooltip text of checkbox to enable JavaScript sampling while running audits in
     * Lighthouse. Resetting the storage clears/empties it to a neutral state.
     */
    enableJavaScriptSampling: 'Enable JavaScript sampling during the Lighthouse run. This will provide more execution details in the performance panel when you view the trace, but has higher CPU overhead and may impact the performance of the page.',
    /**
     *@description Explanation for user that Lighthouse can only audit when JavaScript is enabled
     */
    javaScriptDisabled: 'JavaScript is disabled. You need to enable JavaScript to audit this page. Open the Command Menu and run the Enable JavaScript command to enable JavaScript.',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/lighthouse/LighthouseController.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
const i18nLazyString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLazilyComputedLocalizedString.bind(undefined, str_);
class LighthouseController extends _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper {
    protocolService;
    manager;
    serviceWorkerListeners;
    inspectedURL;
    currentLighthouseRun;
    emulationStateBefore;
    constructor(protocolService) {
        super();
        this.protocolService = protocolService;
        protocolService.registerStatusCallback(message => this.dispatchEventToListeners(Events.AuditProgressChanged, { message }));
        for (const preset of Presets) {
            preset.setting.addChangeListener(this.recomputePageAuditability.bind(this));
        }
        for (const runtimeSetting of RuntimeSettings) {
            runtimeSetting.setting.addChangeListener(this.recomputePageAuditability.bind(this));
        }
        const javaScriptDisabledSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('java-script-disabled');
        javaScriptDisabledSetting.addChangeListener(this.recomputePageAuditability.bind(this));
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().observeModels(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ServiceWorkerManager.ServiceWorkerManager, this);
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().addEventListener("InspectedURLChanged" /* SDK.TargetManager.Events.InspectedURLChanged */, this.recomputePageAuditability, this);
    }
    modelAdded(serviceWorkerManager) {
        if (serviceWorkerManager.target() !== _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().primaryPageTarget()) {
            return;
        }
        this.manager = serviceWorkerManager;
        this.serviceWorkerListeners = [
            this.manager.addEventListener("RegistrationUpdated" /* SDK.ServiceWorkerManager.Events.RegistrationUpdated */, this.recomputePageAuditability, this),
            this.manager.addEventListener("RegistrationDeleted" /* SDK.ServiceWorkerManager.Events.RegistrationDeleted */, this.recomputePageAuditability, this),
        ];
        this.recomputePageAuditability();
    }
    modelRemoved(serviceWorkerManager) {
        if (this.manager !== serviceWorkerManager) {
            return;
        }
        if (this.serviceWorkerListeners) {
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.EventTarget.removeEventListeners(this.serviceWorkerListeners);
        }
        this.manager = null;
        this.recomputePageAuditability();
    }
    hasActiveServiceWorker() {
        if (!this.manager) {
            return false;
        }
        const mainTarget = this.manager.target();
        if (!mainTarget) {
            return false;
        }
        const inspectedURL = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL.fromString(mainTarget.inspectedURL());
        const inspectedOrigin = inspectedURL && inspectedURL.securityOrigin();
        for (const registration of this.manager.registrations().values()) {
            if (registration.securityOrigin !== inspectedOrigin) {
                continue;
            }
            for (const version of registration.versions.values()) {
                if (version.controlledClients.length > 1) {
                    return true;
                }
            }
        }
        return false;
    }
    hasAtLeastOneCategory() {
        return Presets.some(preset => preset.setting.get());
    }
    unauditablePageMessage() {
        if (!this.manager) {
            return null;
        }
        const mainTarget = this.manager.target();
        const inspectedURL = mainTarget && mainTarget.inspectedURL();
        /*
         * The full history of Lighthouse panel + extensions et al:
         *
         * Running Lighthouse against extensions caused crashes (crbug.com/734532), so we disabled it in Aug 2017
         * Unfortunately, the CAN_DOCK heuristic used also disabled auditing any page while remote-debugging.
         * FYI: The CAN_DOCK signal is what determines if the device-mode functionality (viewport emulation) should be shown in the UI.
         *
         * In Sept 2017 we allow-listed http* and chrome-extension URLs formally: crrev.com/c/639032
         * This added support for chrome-extension:// pages (not overlays/popups) as they satisfy CAN_DOCK.
         *
         * We wanted remote-debugging support restored, and the crashes were fixed,
         * so we renabled auditing in all CAN_DOCK cases in Feb 2019 (crbug.com/931849). This included all chrome extensions views.
         *
         * Auditing overlay windows/popups cause problems with viewport emulation (eg crbug.com/1116347)
         * And even full-page extension tabs (like OneTab) have NO_NAVSTART problems and others (crbug.com/1065323)
         * So in in April 2023 we blocked all chrome-extension cases.
         */
        // Only http*, thus disallow: chrome-extension://*, about:*, chrome://dino, file://*, devtools://*, etc.
        if (!inspectedURL?.startsWith('http')) {
            return i18nString(UIStrings.canOnlyAuditHttphttpsPages);
        }
        // Catch .pdf. TODO: handle other MimeHandler extensions. crbug.com/1168245
        try {
            const isPdf = new URL(inspectedURL).pathname.endsWith('.pdf');
            if (isPdf) {
                return i18nString(UIStrings.canOnlyAuditHttphttpsPages);
            }
        }
        catch (e) {
            return i18nString(UIStrings.canOnlyAuditHttphttpsPages);
        }
        return null;
    }
    javaScriptDisabled() {
        return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('java-script-disabled').get();
    }
    async hasImportantResourcesNotCleared() {
        const clearStorageSetting = RuntimeSettings.find(runtimeSetting => runtimeSetting.setting.name === 'lighthouse.clear-storage');
        if (clearStorageSetting && !clearStorageSetting.setting.get()) {
            return '';
        }
        if (!this.manager) {
            return '';
        }
        const mainTarget = this.manager.target();
        const origin = mainTarget.inspectedURL();
        if (!origin) {
            return '';
        }
        const usageData = await mainTarget.storageAgent().invoke_getUsageAndQuota({ origin });
        if (usageData.getError()) {
            return '';
        }
        const locations = usageData.usageBreakdown.filter(usage => usage.usage)
            .map(usage => STORAGE_TYPE_NAMES.get(usage.storageType))
            .map(i18nStringFn => i18nStringFn ? i18nStringFn() : undefined)
            .filter(Boolean);
        if (locations.length === 1) {
            return i18nString(UIStrings.thereMayBeStoredDataAffectingSingular, { PH1: String(locations[0]) });
        }
        if (locations.length > 1) {
            return i18nString(UIStrings.thereMayBeStoredDataAffectingLoadingPlural, { PH1: locations.join(', ') });
        }
        return '';
    }
    async evaluateInspectedURL() {
        const mainTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().primaryPageTarget();
        if (!mainTarget) {
            throw new Error('Unable to find main target required for Lighthouse');
        }
        // target.inspectedURL is reliably populated, however it lacks any url #hash
        const inspectedURL = mainTarget.inspectedURL();
        // We'll use the navigationHistory to acquire the current URL including hash
        const resourceTreeModel = mainTarget.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.ResourceTreeModel);
        const navHistory = resourceTreeModel && await resourceTreeModel.navigationHistory();
        if (!resourceTreeModel || !navHistory) {
            return inspectedURL;
        }
        const { currentIndex, entries } = navHistory;
        const navigationEntry = entries[currentIndex];
        return navigationEntry.url;
    }
    getCurrentRun() {
        return this.currentLighthouseRun;
    }
    getFlags() {
        const flags = {};
        for (const runtimeSetting of RuntimeSettings) {
            runtimeSetting.setFlags(flags, runtimeSetting.setting.get());
        }
        return flags;
    }
    getCategoryIDs() {
        const categoryIDs = [];
        for (const preset of Presets) {
            if (preset.setting.get()) {
                categoryIDs.push(preset.configID);
            }
        }
        return categoryIDs;
    }
    async getInspectedURL(options) {
        if (options && options.force || !this.inspectedURL) {
            this.inspectedURL = await this.evaluateInspectedURL();
        }
        return this.inspectedURL;
    }
    recomputePageAuditability() {
        const hasActiveServiceWorker = this.hasActiveServiceWorker();
        const hasAtLeastOneCategory = this.hasAtLeastOneCategory();
        const unauditablePageMessage = this.unauditablePageMessage();
        const javaScriptDisabled = this.javaScriptDisabled();
        let helpText = '';
        if (hasActiveServiceWorker) {
            helpText = i18nString(UIStrings.multipleTabsAreBeingControlledBy);
        }
        else if (!hasAtLeastOneCategory) {
            helpText = i18nString(UIStrings.atLeastOneCategoryMustBeSelected);
        }
        else if (unauditablePageMessage) {
            helpText = unauditablePageMessage;
        }
        else if (javaScriptDisabled) {
            helpText = i18nString(UIStrings.javaScriptDisabled);
        }
        this.dispatchEventToListeners(Events.PageAuditabilityChanged, { helpText });
        void this.hasImportantResourcesNotCleared().then(warning => {
            if (this.getFlags().mode !== 'navigation') {
                warning = '';
            }
            this.dispatchEventToListeners(Events.PageWarningsChanged, { warning });
        });
    }
    recordMetrics(flags, categoryIds) {
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.LighthouseStarted);
        for (const preset of Presets) {
            if (!categoryIds.includes(preset.configID)) {
                continue;
            }
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.lighthouseCategoryUsed(preset.userMetric);
        }
        switch (flags.mode) {
            case 'navigation':
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.lighthouseModeRun(0 /* Host.UserMetrics.LighthouseModeRun.Navigation */);
                break;
            case 'timespan':
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.lighthouseModeRun(1 /* Host.UserMetrics.LighthouseModeRun.Timespan */);
                break;
            case 'snapshot':
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.lighthouseModeRun(2 /* Host.UserMetrics.LighthouseModeRun.Snapshot */);
                break;
        }
    }
    async startLighthouse() {
        try {
            const inspectedURL = await this.getInspectedURL({ force: true });
            const categoryIDs = this.getCategoryIDs();
            const flags = this.getFlags();
            this.recordMetrics(flags, categoryIDs);
            this.currentLighthouseRun = { inspectedURL, categoryIDs, flags };
            await this.setupEmulationAndProtocolConnection();
            if (flags.mode === 'timespan') {
                await this.protocolService.startTimespan(this.currentLighthouseRun);
            }
        }
        catch (err) {
            await this.restoreEmulationAndProtocolConnection();
            throw err;
        }
    }
    async collectLighthouseResults() {
        try {
            if (!this.currentLighthouseRun) {
                throw new Error('Lighthouse is not started');
            }
            const lighthouseResponse = await this.protocolService.collectLighthouseResults(this.currentLighthouseRun);
            if (!lighthouseResponse) {
                throw new Error('Auditing failed to produce a result');
            }
            if (lighthouseResponse.fatal) {
                const error = new Error(lighthouseResponse.message);
                error.stack = lighthouseResponse.stack;
                throw error;
            }
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.LighthouseFinished);
            await this.restoreEmulationAndProtocolConnection();
            return lighthouseResponse;
        }
        catch (err) {
            await this.restoreEmulationAndProtocolConnection();
            throw err;
        }
        finally {
            this.currentLighthouseRun = undefined;
        }
    }
    async cancelLighthouse() {
        await this.restoreEmulationAndProtocolConnection();
        this.currentLighthouseRun = undefined;
    }
    /**
     * We set the device emulation on the DevTools-side for two reasons:
     * 1. To workaround some odd device metrics emulation bugs like occuluding viewports
     * 2. To get the attractive device outline
     */
    async setupEmulationAndProtocolConnection() {
        const flags = this.getFlags();
        const emulationModel = _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__.DeviceModeModel.DeviceModeModel.instance();
        this.emulationStateBefore = {
            emulation: {
                type: emulationModel.type(),
                enabled: emulationModel.enabledSetting().get(),
                outlineEnabled: emulationModel.deviceOutlineSetting().get(),
                toolbarControlsEnabled: emulationModel.toolbarControlsEnabledSetting().get(),
                scale: emulationModel.scaleSetting().get(),
                device: emulationModel.device(),
                mode: emulationModel.mode(),
            },
            network: { conditions: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkManager.MultitargetNetworkManager.instance().networkConditions() },
        };
        emulationModel.toolbarControlsEnabledSetting().set(false);
        if ('formFactor' in flags && flags.formFactor === 'desktop') {
            emulationModel.enabledSetting().set(false);
            emulationModel.emulate(_models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__.DeviceModeModel.Type.None, null, null);
        }
        else if (flags.formFactor === 'mobile') {
            emulationModel.enabledSetting().set(true);
            emulationModel.deviceOutlineSetting().set(true);
            for (const device of _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__.EmulatedDevices.EmulatedDevicesList.instance().standard()) {
                if (device.title === 'Moto G Power') {
                    emulationModel.emulate(_models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__.DeviceModeModel.Type.Device, device, device.modes[0], 1);
                }
            }
        }
        await this.protocolService.attach();
    }
    async restoreEmulationAndProtocolConnection() {
        if (!this.currentLighthouseRun) {
            return;
        }
        await this.protocolService.detach();
        if (this.emulationStateBefore) {
            const emulationModel = _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__.DeviceModeModel.DeviceModeModel.instance();
            // Detaching a session after overriding device metrics will prevent other sessions from overriding device metrics in the future.
            // A workaround is to call "Emulation.clearDeviceMetricOverride" which is the result of the next line.
            // https://bugs.chromium.org/p/chromium/issues/detail?id=1337089
            emulationModel.emulate(_models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__.DeviceModeModel.Type.None, null, null);
            const { type, enabled, outlineEnabled, toolbarControlsEnabled, scale, device, mode } = this.emulationStateBefore.emulation;
            emulationModel.enabledSetting().set(enabled);
            emulationModel.deviceOutlineSetting().set(outlineEnabled);
            emulationModel.toolbarControlsEnabledSetting().set(toolbarControlsEnabled);
            // `emulate` will ignore the `scale` parameter for responsive emulation.
            // In this case we can just set it here.
            if (type === _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__.DeviceModeModel.Type.Responsive) {
                emulationModel.scaleSetting().set(scale);
            }
            emulationModel.emulate(type, device, mode, scale);
            _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkManager.MultitargetNetworkManager.instance().setNetworkConditions(this.emulationStateBefore.network.conditions);
            delete this.emulationStateBefore;
        }
        _emulation_emulation_js__WEBPACK_IMPORTED_MODULE_5__.InspectedPagePlaceholder.InspectedPagePlaceholder.instance().update(true);
        const mainTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().primaryPageTarget();
        if (!mainTarget) {
            return;
        }
        const resourceTreeModel = mainTarget.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.ResourceTreeModel);
        if (!resourceTreeModel) {
            return;
        }
        // Reload to reset page state after a navigation.
        // We want to retain page state for timespan and snapshot modes.
        const mode = this.currentLighthouseRun.flags.mode;
        if (mode === 'navigation') {
            const inspectedURL = await this.getInspectedURL();
            await resourceTreeModel.navigate(inspectedURL);
        }
    }
}
const STORAGE_TYPE_NAMES = new Map([
    ["local_storage" /* Protocol.Storage.StorageType.Local_storage */, i18nLazyString(UIStrings.localStorage)],
    ["indexeddb" /* Protocol.Storage.StorageType.Indexeddb */, i18nLazyString(UIStrings.indexeddb)],
    ["websql" /* Protocol.Storage.StorageType.Websql */, i18nLazyString(UIStrings.webSql)],
]);
const Presets = [
    // configID maps to Lighthouse's Object.keys(config.categories)[0] value
    {
        setting: _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('lighthouse.cat-perf', true, "Synced" /* Common.Settings.SettingStorageType.Synced */),
        configID: 'performance',
        title: i18nLazyString(UIStrings.performance),
        description: i18nLazyString(UIStrings.howLongDoesThisAppTakeToShow),
        supportedModes: ['navigation', 'timespan', 'snapshot'],
        userMetric: 0 /* Host.UserMetrics.LighthouseCategoryUsed.Performance */,
    },
    {
        setting: _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('lighthouse.cat-a11y', true, "Synced" /* Common.Settings.SettingStorageType.Synced */),
        configID: 'accessibility',
        title: i18nLazyString(UIStrings.accessibility),
        description: i18nLazyString(UIStrings.isThisPageUsableByPeopleWith),
        supportedModes: ['navigation', 'snapshot'],
        userMetric: 1 /* Host.UserMetrics.LighthouseCategoryUsed.Accessibility */,
    },
    {
        setting: _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('lighthouse.cat-best-practices', true, "Synced" /* Common.Settings.SettingStorageType.Synced */),
        configID: 'best-practices',
        title: i18nLazyString(UIStrings.bestPractices),
        description: i18nLazyString(UIStrings.doesThisPageFollowBestPractices),
        supportedModes: ['navigation', 'timespan', 'snapshot'],
        userMetric: 2 /* Host.UserMetrics.LighthouseCategoryUsed.BestPractices */,
    },
    {
        setting: _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('lighthouse.cat-seo', true, "Synced" /* Common.Settings.SettingStorageType.Synced */),
        configID: 'seo',
        title: i18nLazyString(UIStrings.seo),
        description: i18nLazyString(UIStrings.isThisPageOptimizedForSearch),
        supportedModes: ['navigation', 'snapshot'],
        userMetric: 3 /* Host.UserMetrics.LighthouseCategoryUsed.SEO */,
    },
];
const RuntimeSettings = [
    {
        setting: _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('lighthouse.device-type', 'mobile', "Synced" /* Common.Settings.SettingStorageType.Synced */),
        title: i18nLazyString(UIStrings.applyMobileEmulation),
        description: i18nLazyString(UIStrings.applyMobileEmulationDuring),
        setFlags: (flags, value) => {
            // See Audits.AuditsPanel._setupEmulationAndProtocolConnection()
            flags.formFactor = value;
        },
        options: [
            { label: i18nLazyString(UIStrings.mobile), value: 'mobile' },
            { label: i18nLazyString(UIStrings.desktop), value: 'desktop' },
        ],
        learnMore: undefined,
    },
    {
        setting: _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('lighthouse.mode', 'navigation', "Synced" /* Common.Settings.SettingStorageType.Synced */),
        title: i18nLazyString(UIStrings.lighthouseMode),
        description: i18nLazyString(UIStrings.runLighthouseInMode),
        setFlags: (flags, value) => {
            flags.mode = value;
        },
        options: [
            {
                label: i18nLazyString(UIStrings.navigation),
                tooltip: i18nLazyString(UIStrings.navigationTooltip),
                value: 'navigation',
            },
            {
                label: i18nLazyString(UIStrings.timespan),
                tooltip: i18nLazyString(UIStrings.timespanTooltip),
                value: 'timespan',
            },
            {
                label: i18nLazyString(UIStrings.snapshot),
                tooltip: i18nLazyString(UIStrings.snapshotTooltip),
                value: 'snapshot',
            },
        ],
        learnMore: 'https://github.com/GoogleChrome/lighthouse/blob/HEAD/docs/user-flows.md',
    },
    {
        // This setting is disabled, but we keep it around to show in the UI.
        setting: _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('lighthouse.throttling', 'simulate', "Synced" /* Common.Settings.SettingStorageType.Synced */),
        title: i18nLazyString(UIStrings.throttlingMethod),
        // We will disable this when we have a Lantern trace viewer within DevTools.
        learnMore: 'https://github.com/GoogleChrome/lighthouse/blob/master/docs/throttling.md#devtools-lighthouse-panel-throttling',
        description: i18nLazyString(UIStrings.simulateASlowerPageLoadBasedOn),
        setFlags: (flags, value) => {
            if (typeof value === 'string') {
                flags.throttlingMethod = value;
            }
            else {
                flags.throttlingMethod = value ? 'simulate' : 'devtools';
            }
        },
        options: [
            { label: i18nLazyString(UIStrings.simulatedThrottling), value: 'simulate' },
            { label: i18nLazyString(UIStrings.devtoolsThrottling), value: 'devtools' },
        ],
    },
    {
        setting: _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('lighthouse.clear-storage', true, "Synced" /* Common.Settings.SettingStorageType.Synced */),
        title: i18nLazyString(UIStrings.clearStorage),
        description: i18nLazyString(UIStrings.resetStorageLocalstorage),
        setFlags: (flags, value) => {
            flags.disableStorageReset = !value;
        },
        options: undefined,
        learnMore: undefined,
    },
    {
        setting: _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('lighthouse.enable-sampling', false, "Synced" /* Common.Settings.SettingStorageType.Synced */),
        title: i18nLazyString(UIStrings.enableSampling),
        description: i18nLazyString(UIStrings.enableJavaScriptSampling),
        setFlags: (flags, value) => {
            if (value) {
                flags.additionalTraceCategories = 'disabled-by-default-v8.cpu_profiler';
            }
            else {
                flags.additionalTraceCategories = '';
            }
        },
        options: undefined,
        learnMore: undefined,
    },
];
var Events;
(function (Events) {
    Events["PageAuditabilityChanged"] = "PageAuditabilityChanged";
    Events["PageWarningsChanged"] = "PageWarningsChanged";
    Events["AuditProgressChanged"] = "AuditProgressChanged";
})(Events || (Events = {}));
//# sourceMappingURL=LighthouseController.js.map

/***/ })

}]);