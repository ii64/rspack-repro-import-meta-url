"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_application_StorageView_ts"],{

/***/ "./src/panels/application/StorageView.ts":
/*!***********************************************!*\
  !*** ./src/panels/application/StorageView.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionDelegate: () => (/* binding */ ActionDelegate),
/* harmony export */   AllStorageTypes: () => (/* binding */ AllStorageTypes),
/* harmony export */   StorageView: () => (/* binding */ StorageView)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../generated/protocol.js */ "./src/generated/protocol.ts");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/legacy/components/perf_ui/perf_ui.js */ "./src/ui/legacy/components/perf_ui/perf_ui.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _DOMStorageModel_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./DOMStorageModel.js */ "./src/panels/application/DOMStorageModel.ts");
/* harmony import */ var _IndexedDBModel_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./IndexedDBModel.js */ "./src/panels/application/IndexedDBModel.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './storageView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright (c) 2016 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.












const UIStrings = {
    /**
     * @description Text in the Storage View that expresses the amout of used and available storage quota
     * @example {1.5 MB} PH1
     * @example {123.1 MB} PH2
     */
    storageQuotaUsed: '{PH1} used out of {PH2} storage quota',
    /**
     * @description Tooltip in the Storage View that expresses the precise amout of used and available storage quota
     * @example {200} PH1
     * @example {400} PH2
     */
    storageQuotaUsedWithBytes: '{PH1} bytes used out of {PH2} bytes storage quota',
    /**
     * @description Fragment indicating that a certain data size has been custom configured
     * @example {1.5 MB} PH1
     */
    storageWithCustomMarker: '{PH1} (custom)',
    /**
     * @description Text in Application Panel Sidebar and title text of the Storage View of the Application panel
     */
    storageTitle: 'Storage',
    /**
     * @description Title text in Storage View of the Application panel
     */
    usage: 'Usage',
    /**
     * @description Unit for data size in DevTools
     */
    mb: 'MB',
    /**
     * @description Link to learn more about Progressive Web Apps
     */
    learnMore: 'Learn more',
    /**
     * @description Button text for the button in the Storage View of the Application panel for clearing site-specific storage
     */
    clearSiteData: 'Clear site data',
    /**
     * @description Annouce message when the "clear site data" task is complete
     */
    SiteDataCleared: 'Site data cleared',
    /**
     * @description Category description in the Clear Storage section of the Storage View of the Application panel
     */
    application: 'Application',
    /**
     * @description Checkbox label in the Clear Storage section of the Storage View of the Application panel
     */
    unregisterServiceWorker: 'Unregister service workers',
    /**
     * @description Checkbox label in the Clear Storage section of the Storage View of the Application panel
     */
    localAndSessionStorage: 'Local and session storage',
    /**
     * @description Checkbox label in the Clear Storage section of the Storage View of the Application panel
     */
    indexDB: 'IndexedDB',
    /**
     * @description Checkbox label in the Clear Storage section of the Storage View of the Application panel
     */
    webSql: 'Web SQL',
    /**
     * @description Checkbox label in the Clear Storage section of the Storage View of the Application panel
     */
    cookies: 'Cookies',
    /**
     * @description Checkbox label in the Clear Storage section of the Storage View of the Application panel
     */
    cacheStorage: 'Cache storage',
    /**
     * @description Checkbox label in the Clear Storage section of the Storage View of the Application panel
     */
    includingThirdPartyCookies: 'including third-party cookies',
    /**
     * @description Text for error message in Application Quota Override
     * @example {Image} PH1
     */
    sFailedToLoad: '{PH1} (failed to load)',
    /**
     * @description Text for error message in Application Quota Override
     */
    internalError: 'Internal error',
    /**
     * @description Text for error message in Application Quota Override
     */
    pleaseEnterANumber: 'Please enter a number',
    /**
     * @description Text for error message in Application Quota Override
     */
    numberMustBeNonNegative: 'Number must be non-negative',
    /**
     * @description Text for error message in Application Quota Override
     * @example {9000000000000} PH1
     */
    numberMustBeSmaller: 'Number must be smaller than {PH1}',
    /**
     * @description Button text for the "Clear site data" button in the Storage View of the Application panel while the clearing action is pending
     */
    clearing: 'Clearing...',
    /**
     * @description Quota row title in Clear Storage View of the Application panel
     */
    storageQuotaIsLimitedIn: 'Storage quota is limited in Incognito mode',
    /**
     * @description Text in Application Panel Sidebar of the Application panel
     */
    fileSystem: 'File System',
    /**
     * @description Text in Application Panel Sidebar of the Application panel
     */
    other: 'Other',
    /**
     * @description Text in Application Panel Sidebar of the Application panel
     */
    storageUsage: 'Storage usage',
    /**
     * @description Text in Application Panel Sidebar of the Application panel
     */
    serviceWorkers: 'Service workers',
    /**
     * @description Checkbox label in Application Panel Sidebar of the Application panel.
     * Storage quota refers to the amount of disk available for the website or app.
     */
    simulateCustomStorage: 'Simulate custom storage quota',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/application/StorageView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
/**
 * @implements {SDK.TargetManager.Observer}
 */
class StorageView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.ThrottledWidget.ThrottledWidget {
    constructor() {
        super(true, 1000);
        Object.defineProperty(this, "pieColors", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "reportView", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "target", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "securityOrigin", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "storageKey", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "settings", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "includeThirdPartyCookiesSetting", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "quotaRow", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "quotaUsage", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "pieChart", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "previousOverrideFieldValue", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "quotaOverrideCheckbox", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "quotaOverrideControlRow", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "quotaOverrideEditor", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "quotaOverrideErrorMessage", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "clearButton", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.contentElement.classList.add('clear-storage-container');
        this.contentElement.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.pane('clear-storage')}`);
        this.pieColors = new Map([
            [_generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Storage.StorageType.Appcache, 'rgb(110, 161, 226)'], // blue
            [_generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Storage.StorageType.Cache_storage, 'rgb(229, 113, 113)'], // red
            [_generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Storage.StorageType.Cookies, 'rgb(239, 196, 87)'], // yellow
            [_generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Storage.StorageType.Indexeddb, 'rgb(155, 127, 230)'], // purple
            [_generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Storage.StorageType.Local_storage, 'rgb(116, 178, 102)'], // green
            [_generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Storage.StorageType.Service_workers, 'rgb(255, 167, 36)'], // orange
            [_generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Storage.StorageType.Websql, 'rgb(203, 220, 56)'], // lime
        ]);
        // TODO(crbug.com/1156978): Replace UI.ReportView.ReportView with ReportView.ts web component.
        this.reportView = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportView(i18nString(UIStrings.storageTitle));
        this.reportView.element.classList.add('clear-storage-header');
        this.reportView.show(this.contentElement);
        this.target = null;
        this.securityOrigin = null;
        this.storageKey = null;
        this.settings = new Map();
        for (const type of AllStorageTypes) {
            this.settings.set(type, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('clear-storage-' + _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.StringUtilities.toKebabCase(type), true));
        }
        this.includeThirdPartyCookiesSetting =
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('clear-storage-include-third-party-cookies', false);
        const quota = this.reportView.appendSection(i18nString(UIStrings.usage));
        quota.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.section('usage')}`);
        this.quotaRow = quota.appendSelectableRow();
        this.quotaRow.classList.add('quota-usage-row');
        const learnMoreRow = quota.appendRow();
        const learnMore = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.XLink.XLink.create('https://developer.chrome.com/docs/devtools/progressive-web-apps#opaque-responses', i18nString(UIStrings.learnMore), undefined, undefined, 'learn-more');
        learnMoreRow.appendChild(learnMore);
        this.quotaUsage = null;
        this.pieChart = new _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_6__.PieChart.PieChart();
        this.populatePieChart(0, []);
        const usageBreakdownRow = quota.appendRow();
        usageBreakdownRow.classList.add('usage-breakdown-row');
        usageBreakdownRow.appendChild(this.pieChart);
        this.previousOverrideFieldValue = '';
        const quotaOverrideCheckboxRow = quota.appendRow();
        quotaOverrideCheckboxRow.classList.add('quota-override-row');
        this.quotaOverrideCheckbox =
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.UIUtils.CheckboxLabel.create(i18nString(UIStrings.simulateCustomStorage), false, '');
        this.quotaOverrideCheckbox.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.toggle('simulate-custom-quota').track({ change: true })}`);
        quotaOverrideCheckboxRow.appendChild(this.quotaOverrideCheckbox);
        this.quotaOverrideCheckbox.checkboxElement.addEventListener('click', this.onClickCheckbox.bind(this), false);
        this.quotaOverrideControlRow = quota.appendRow();
        this.quotaOverrideEditor =
            this.quotaOverrideControlRow.createChild('input', 'quota-override-notification-editor');
        this.quotaOverrideEditor.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.textField('quota-override').track({ change: true })}`);
        this.quotaOverrideControlRow.appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.UIUtils.createLabel(i18nString(UIStrings.mb)));
        this.quotaOverrideControlRow.classList.add('hidden');
        this.quotaOverrideEditor.addEventListener('keyup', event => {
            if (event.key === 'Enter') {
                void this.applyQuotaOverrideFromInputField();
                event.consume(true);
            }
        });
        this.quotaOverrideEditor.addEventListener('focusout', event => {
            void this.applyQuotaOverrideFromInputField();
            event.consume(true);
        });
        const errorMessageRow = quota.appendRow();
        this.quotaOverrideErrorMessage = errorMessageRow.createChild('div', 'quota-override-error');
        const clearButtonSection = this.reportView.appendSection('', 'clear-storage-button').appendRow();
        this.clearButton = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.UIUtils.createTextButton(i18nString(UIStrings.clearSiteData), this.clear.bind(this), { jslogContext: 'storage.clear-site-data' });
        this.clearButton.id = 'storage-view-clear-button';
        clearButtonSection.appendChild(this.clearButton);
        const includeThirdPartyCookiesCheckbox = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.SettingsUI.createSettingCheckbox(i18nString(UIStrings.includingThirdPartyCookies), this.includeThirdPartyCookiesSetting, true);
        includeThirdPartyCookiesCheckbox.classList.add('include-third-party-cookies');
        clearButtonSection.appendChild(includeThirdPartyCookiesCheckbox);
        const application = this.reportView.appendSection(i18nString(UIStrings.application));
        application.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.section('application')}`);
        this.appendItem(application, i18nString(UIStrings.unregisterServiceWorker), _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Storage.StorageType.Service_workers);
        application.markFieldListAsGroup();
        const storage = this.reportView.appendSection(i18nString(UIStrings.storageTitle));
        storage.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.section('storage')}`);
        this.appendItem(storage, i18nString(UIStrings.localAndSessionStorage), _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Storage.StorageType.Local_storage);
        this.appendItem(storage, i18nString(UIStrings.indexDB), _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Storage.StorageType.Indexeddb);
        this.appendItem(storage, i18nString(UIStrings.webSql), _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Storage.StorageType.Websql);
        this.appendItem(storage, i18nString(UIStrings.cookies), _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Storage.StorageType.Cookies);
        this.appendItem(storage, i18nString(UIStrings.cacheStorage), _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Storage.StorageType.Cache_storage);
        storage.markFieldListAsGroup();
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().observeTargets(this);
    }
    appendItem(section, title, settingName) {
        const row = section.appendRow();
        const setting = this.settings.get(settingName);
        if (setting) {
            row.appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.SettingsUI.createSettingCheckbox(title, setting, true));
        }
    }
    targetAdded(target) {
        if (target !== _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().primaryPageTarget()) {
            return;
        }
        this.target = target;
        const securityOriginManager = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.SecurityOriginManager.SecurityOriginManager);
        this.updateOrigin(securityOriginManager.mainSecurityOrigin(), securityOriginManager.unreachableMainSecurityOrigin());
        securityOriginManager.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.SecurityOriginManager.Events.MainSecurityOriginChanged, this.originChanged, this);
        const storageKeyManager = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.StorageKeyManager.StorageKeyManager);
        this.updateStorageKey(storageKeyManager.mainStorageKey());
        storageKeyManager.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.StorageKeyManager.Events.MainStorageKeyChanged, this.storageKeyChanged, this);
    }
    targetRemoved(target) {
        if (this.target !== target) {
            return;
        }
        const securityOriginManager = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.SecurityOriginManager.SecurityOriginManager);
        securityOriginManager.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.SecurityOriginManager.Events.MainSecurityOriginChanged, this.originChanged, this);
        const storageKeyManager = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.StorageKeyManager.StorageKeyManager);
        storageKeyManager.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.StorageKeyManager.Events.MainStorageKeyChanged, this.storageKeyChanged, this);
    }
    originChanged(event) {
        const { mainSecurityOrigin, unreachableMainSecurityOrigin } = event.data;
        this.updateOrigin(mainSecurityOrigin, unreachableMainSecurityOrigin);
    }
    storageKeyChanged(event) {
        const { mainStorageKey } = event.data;
        this.updateStorageKey(mainStorageKey);
    }
    updateOrigin(mainOrigin, unreachableMainOrigin) {
        const oldOrigin = this.securityOrigin;
        if (unreachableMainOrigin) {
            this.securityOrigin = unreachableMainOrigin;
            this.reportView.setSubtitle(i18nString(UIStrings.sFailedToLoad, { PH1: unreachableMainOrigin }));
        }
        else {
            this.securityOrigin = mainOrigin;
            this.reportView.setSubtitle(mainOrigin);
        }
        if (oldOrigin !== this.securityOrigin) {
            this.quotaOverrideControlRow.classList.add('hidden');
            this.quotaOverrideCheckbox.checkboxElement.checked = false;
            this.quotaOverrideErrorMessage.textContent = '';
        }
        void this.doUpdate();
    }
    updateStorageKey(mainStorageKey) {
        const oldStorageKey = this.storageKey;
        this.storageKey = mainStorageKey;
        this.reportView.setSubtitle(mainStorageKey);
        if (oldStorageKey !== this.storageKey) {
            this.quotaOverrideControlRow.classList.add('hidden');
            this.quotaOverrideCheckbox.checkboxElement.checked = false;
            this.quotaOverrideErrorMessage.textContent = '';
        }
        void this.doUpdate();
    }
    async applyQuotaOverrideFromInputField() {
        if (!this.target || !this.securityOrigin) {
            this.quotaOverrideErrorMessage.textContent = i18nString(UIStrings.internalError);
            return;
        }
        this.quotaOverrideErrorMessage.textContent = '';
        const editorString = this.quotaOverrideEditor.value;
        if (editorString === '') {
            await this.clearQuotaForOrigin(this.target, this.securityOrigin);
            this.previousOverrideFieldValue = '';
            return;
        }
        const quota = parseFloat(editorString);
        if (!Number.isFinite(quota)) {
            this.quotaOverrideErrorMessage.textContent = i18nString(UIStrings.pleaseEnterANumber);
            return;
        }
        if (quota < 0) {
            this.quotaOverrideErrorMessage.textContent = i18nString(UIStrings.numberMustBeNonNegative);
            return;
        }
        const cutoff = 9000000000000;
        if (quota >= cutoff) {
            this.quotaOverrideErrorMessage.textContent =
                i18nString(UIStrings.numberMustBeSmaller, { PH1: cutoff.toLocaleString() });
            return;
        }
        const bytesPerMB = 1000 * 1000;
        const quotaInBytes = Math.round(quota * bytesPerMB);
        const quotaFieldValue = `${quotaInBytes / bytesPerMB}`;
        this.quotaOverrideEditor.value = quotaFieldValue;
        this.previousOverrideFieldValue = quotaFieldValue;
        await this.target.storageAgent().invoke_overrideQuotaForOrigin({ origin: this.securityOrigin, quotaSize: quotaInBytes });
    }
    async clearQuotaForOrigin(target, origin) {
        await target.storageAgent().invoke_overrideQuotaForOrigin({ origin });
    }
    async onClickCheckbox() {
        if (this.quotaOverrideControlRow.classList.contains('hidden')) {
            this.quotaOverrideControlRow.classList.remove('hidden');
            this.quotaOverrideCheckbox.checkboxElement.checked = true;
            this.quotaOverrideEditor.value = this.previousOverrideFieldValue;
            this.quotaOverrideEditor.focus();
        }
        else if (this.target && this.securityOrigin) {
            this.quotaOverrideControlRow.classList.add('hidden');
            this.quotaOverrideCheckbox.checkboxElement.checked = false;
            await this.clearQuotaForOrigin(this.target, this.securityOrigin);
            this.quotaOverrideErrorMessage.textContent = '';
        }
    }
    clear() {
        if (!this.securityOrigin) {
            return;
        }
        const selectedStorageTypes = [];
        for (const type of this.settings.keys()) {
            const setting = this.settings.get(type);
            if (setting && setting.get()) {
                selectedStorageTypes.push(type);
            }
        }
        if (this.target) {
            const includeThirdPartyCookies = this.includeThirdPartyCookiesSetting.get();
            StorageView.clear(this.target, this.storageKey, this.securityOrigin, selectedStorageTypes, includeThirdPartyCookies);
        }
        this.clearButton.disabled = true;
        const label = this.clearButton.textContent;
        this.clearButton.textContent = i18nString(UIStrings.clearing);
        window.setTimeout(() => {
            this.clearButton.disabled = false;
            this.clearButton.textContent = label;
            this.clearButton.focus();
        }, 500);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.ARIAUtils.alert(i18nString(UIStrings.SiteDataCleared));
    }
    static clear(target, storageKey, originForCookies, selectedStorageTypes, includeThirdPartyCookies) {
        console.assert(Boolean(storageKey));
        if (!storageKey) {
            return;
        }
        void target.storageAgent().invoke_clearDataForStorageKey({ storageKey, storageTypes: selectedStorageTypes.join(',') });
        const set = new Set(selectedStorageTypes);
        const hasAll = set.has(_generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Storage.StorageType.All);
        if (set.has(_generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Storage.StorageType.Local_storage) || hasAll) {
            const storageModel = target.model(_DOMStorageModel_js__WEBPACK_IMPORTED_MODULE_9__.DOMStorageModel);
            if (storageModel) {
                storageModel.clearForStorageKey(storageKey);
            }
        }
        if (set.has(_generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Storage.StorageType.Indexeddb) || hasAll) {
            for (const target of _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().targets()) {
                const indexedDBModel = target.model(_IndexedDBModel_js__WEBPACK_IMPORTED_MODULE_10__.IndexedDBModel);
                if (indexedDBModel) {
                    indexedDBModel.clearForStorageKey(storageKey);
                }
            }
        }
        if (originForCookies && (set.has(_generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Storage.StorageType.Cookies) || hasAll)) {
            void target.storageAgent().invoke_clearDataForOrigin({ origin: originForCookies, storageTypes: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Storage.StorageType.Cookies });
            const cookieModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.CookieModel.CookieModel);
            if (cookieModel) {
                void cookieModel.clear(undefined, includeThirdPartyCookies ? undefined : originForCookies);
            }
        }
        if (set.has(_generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Storage.StorageType.Cache_storage) || hasAll) {
            const target = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().primaryPageTarget();
            const model = target && target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ServiceWorkerCacheModel.ServiceWorkerCacheModel);
            if (model) {
                model.clearForStorageKey(storageKey);
            }
        }
    }
    async doUpdate() {
        if (!this.securityOrigin || !this.target) {
            this.quotaRow.textContent = '';
            this.populatePieChart(0, []);
            return;
        }
        const securityOrigin = this.securityOrigin;
        const response = await this.target.storageAgent().invoke_getUsageAndQuota({ origin: securityOrigin });
        this.quotaRow.textContent = '';
        if (response.getError()) {
            this.populatePieChart(0, []);
            return;
        }
        const quotaOverridden = response.overrideActive;
        const quotaAsString = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.NumberUtilities.bytesToString(response.quota);
        const usageAsString = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.NumberUtilities.bytesToString(response.usage);
        const formattedQuotaAsString = i18nString(UIStrings.storageWithCustomMarker, { PH1: quotaAsString });
        const quota = quotaOverridden ? _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Fragment.Fragment.build `<b>${formattedQuotaAsString}</b>`.element() : quotaAsString;
        const element = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getFormatLocalizedString(str_, UIStrings.storageQuotaUsed, { PH1: usageAsString, PH2: quota });
        this.quotaRow.appendChild(element);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Tooltip.Tooltip.install(this.quotaRow, i18nString(UIStrings.storageQuotaUsedWithBytes, { PH1: response.usage.toLocaleString(), PH2: response.quota.toLocaleString() }));
        if (!response.overrideActive && response.quota < 125829120) { // 120 MB
            const icon = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.Icon();
            icon.data = { iconName: 'info', color: 'var(--icon-info)', width: '14px', height: '14px' };
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Tooltip.Tooltip.install(this.quotaRow, i18nString(UIStrings.storageQuotaIsLimitedIn));
            this.quotaRow.appendChild(icon);
        }
        if (this.quotaUsage === null || this.quotaUsage !== response.usage) {
            this.quotaUsage = response.usage;
            const slices = [];
            for (const usageForType of response.usageBreakdown.sort((a, b) => b.usage - a.usage)) {
                const value = usageForType.usage;
                if (!value) {
                    continue;
                }
                const title = this.getStorageTypeName(usageForType.storageType);
                const color = this.pieColors.get(usageForType.storageType) || '#ccc';
                slices.push({ value, color, title });
            }
            this.populatePieChart(response.usage, slices);
        }
        this.update();
    }
    populatePieChart(total, slices) {
        this.pieChart.data = {
            chartName: i18nString(UIStrings.storageUsage),
            size: 110,
            formatter: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.NumberUtilities.bytesToString,
            showLegend: true,
            total,
            slices,
        };
    }
    getStorageTypeName(type) {
        switch (type) {
            case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Storage.StorageType.File_systems:
                return i18nString(UIStrings.fileSystem);
            case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Storage.StorageType.Websql:
                return i18nString(UIStrings.webSql);
            case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Storage.StorageType.Appcache:
                return i18nString(UIStrings.application);
            case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Storage.StorageType.Indexeddb:
                return i18nString(UIStrings.indexDB);
            case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Storage.StorageType.Cache_storage:
                return i18nString(UIStrings.cacheStorage);
            case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Storage.StorageType.Service_workers:
                return i18nString(UIStrings.serviceWorkers);
            default:
                return i18nString(UIStrings.other);
        }
    }
    wasShown() {
        super.wasShown();
        this.reportView.registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './storageView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
        this.registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './storageView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
    }
}
const AllStorageTypes = [
    _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Storage.StorageType.Appcache,
    _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Storage.StorageType.Cache_storage,
    _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Storage.StorageType.Cookies,
    _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Storage.StorageType.Indexeddb,
    _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Storage.StorageType.Local_storage,
    _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Storage.StorageType.Service_workers,
    _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Storage.StorageType.Websql,
];
class ActionDelegate {
    handleAction(_context, actionId) {
        switch (actionId) {
            case 'resources.clear':
                return this.handleClear(false);
            case 'resources.clear-incl-third-party-cookies':
                return this.handleClear(true);
        }
        return false;
    }
    handleClear(includeThirdPartyCookies) {
        const target = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().primaryPageTarget();
        if (!target) {
            return false;
        }
        const resourceTreeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.ResourceTreeModel);
        if (!resourceTreeModel) {
            return false;
        }
        const securityOrigin = resourceTreeModel.getMainSecurityOrigin();
        resourceTreeModel.getMainStorageKey().then(storageKey => {
            StorageView.clear(target, storageKey, securityOrigin, AllStorageTypes, includeThirdPartyCookies);
        }, _ => { });
        return true;
    }
}


/***/ })

}]);