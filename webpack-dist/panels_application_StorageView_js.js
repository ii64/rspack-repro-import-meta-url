"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_application_StorageView_js"],{

/***/ "./panels/application/DOMStorageModel.js":
/*!***********************************************!*\
  !*** ./panels/application/DOMStorageModel.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DOMStorage: () => (/* binding */ DOMStorage),
/* harmony export */   DOMStorageDispatcher: () => (/* binding */ DOMStorageDispatcher),
/* harmony export */   DOMStorageModel: () => (/* binding */ DOMStorageModel)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/*
 * Copyright (C) 2008 Nokia Inc.  All rights reserved.
 * Copyright (C) 2013 Samsung Electronics. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 *
 * 1.  Redistributions of source code must retain the above copyright
 *     notice, this list of conditions and the following disclaimer.
 * 2.  Redistributions in binary form must reproduce the above copyright
 *     notice, this list of conditions and the following disclaimer in the
 *     documentation and/or other materials provided with the distribution.
 * 3.  Neither the name of Apple Computer, Inc. ("Apple") nor the names of
 *     its contributors may be used to endorse or promote products derived
 *     from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL APPLE OR ITS CONTRIBUTORS BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
 * THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */


class DOMStorage extends _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper {
    model;
    storageKeyInternal;
    isLocalStorageInternal;
    constructor(model, storageKey, isLocalStorage) {
        super();
        this.model = model;
        this.storageKeyInternal = storageKey;
        this.isLocalStorageInternal = isLocalStorage;
    }
    static storageId(storageKey, isLocalStorage) {
        return { storageKey: storageKey, isLocalStorage: isLocalStorage };
    }
    get id() {
        return DOMStorage.storageId(this.storageKeyInternal, this.isLocalStorageInternal);
    }
    get storageKey() {
        return this.storageKeyInternal;
    }
    get isLocalStorage() {
        return this.isLocalStorageInternal;
    }
    getItems() {
        return this.model.agent.invoke_getDOMStorageItems({ storageId: this.id }).then(({ entries }) => entries);
    }
    setItem(key, value) {
        void this.model.agent.invoke_setDOMStorageItem({ storageId: this.id, key, value });
    }
    removeItem(key) {
        void this.model.agent.invoke_removeDOMStorageItem({ storageId: this.id, key });
    }
    clear() {
        void this.model.agent.invoke_clear({ storageId: this.id });
    }
}
class DOMStorageModel extends _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.SDKModel.SDKModel {
    storageKeyManagerInternal;
    storagesInternal;
    agent;
    enabled;
    constructor(target) {
        super(target);
        this.storageKeyManagerInternal = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.StorageKeyManager.StorageKeyManager);
        this.storagesInternal = {};
        this.agent = target.domstorageAgent();
    }
    get storageKeyManagerForTest() {
        return this.storageKeyManagerInternal;
    }
    enable() {
        if (this.enabled) {
            return;
        }
        this.target().registerDOMStorageDispatcher(new DOMStorageDispatcher(this));
        if (this.storageKeyManagerInternal) {
            this.storageKeyManagerInternal.addEventListener("StorageKeyAdded" /* SDK.StorageKeyManager.Events.StorageKeyAdded */, this.storageKeyAdded, this);
            this.storageKeyManagerInternal.addEventListener("StorageKeyRemoved" /* SDK.StorageKeyManager.Events.StorageKeyRemoved */, this.storageKeyRemoved, this);
            for (const storageKey of this.storageKeyManagerInternal.storageKeys()) {
                this.addStorageKey(storageKey);
            }
        }
        void this.agent.invoke_enable();
        this.enabled = true;
    }
    clearForStorageKey(storageKey) {
        if (!this.enabled) {
            return;
        }
        for (const isLocal of [true, false]) {
            const key = this.storageKey(storageKey, isLocal);
            const storage = this.storagesInternal[key];
            if (!storage) {
                return;
            }
            storage.clear();
        }
        this.removeStorageKey(storageKey);
        this.addStorageKey(storageKey);
    }
    storageKeyAdded(event) {
        this.addStorageKey(event.data);
    }
    addStorageKey(storageKey) {
        for (const isLocal of [true, false]) {
            const key = this.storageKey(storageKey, isLocal);
            console.assert(!this.storagesInternal[key]);
            const storage = new DOMStorage(this, storageKey, isLocal);
            this.storagesInternal[key] = storage;
            this.dispatchEventToListeners("DOMStorageAdded" /* Events.DOMStorageAdded */, storage);
        }
    }
    storageKeyRemoved(event) {
        this.removeStorageKey(event.data);
    }
    removeStorageKey(storageKey) {
        for (const isLocal of [true, false]) {
            const key = this.storageKey(storageKey, isLocal);
            const storage = this.storagesInternal[key];
            if (!storage) {
                continue;
            }
            delete this.storagesInternal[key];
            this.dispatchEventToListeners("DOMStorageRemoved" /* Events.DOMStorageRemoved */, storage);
        }
    }
    storageKey(storageKey, isLocalStorage) {
        return JSON.stringify(DOMStorage.storageId(storageKey, isLocalStorage));
    }
    domStorageItemsCleared(storageId) {
        const domStorage = this.storageForId(storageId);
        if (!domStorage) {
            return;
        }
        domStorage.dispatchEventToListeners("DOMStorageItemsCleared" /* DOMStorage.Events.DOMStorageItemsCleared */);
    }
    domStorageItemRemoved(storageId, key) {
        const domStorage = this.storageForId(storageId);
        if (!domStorage) {
            return;
        }
        const eventData = { key: key };
        domStorage.dispatchEventToListeners("DOMStorageItemRemoved" /* DOMStorage.Events.DOMStorageItemRemoved */, eventData);
    }
    domStorageItemAdded(storageId, key, value) {
        const domStorage = this.storageForId(storageId);
        if (!domStorage) {
            return;
        }
        const eventData = { key: key, value: value };
        domStorage.dispatchEventToListeners("DOMStorageItemAdded" /* DOMStorage.Events.DOMStorageItemAdded */, eventData);
    }
    domStorageItemUpdated(storageId, key, oldValue, value) {
        const domStorage = this.storageForId(storageId);
        if (!domStorage) {
            return;
        }
        const eventData = { key: key, oldValue: oldValue, value: value };
        domStorage.dispatchEventToListeners("DOMStorageItemUpdated" /* DOMStorage.Events.DOMStorageItemUpdated */, eventData);
    }
    storageForId(storageId) {
        console.assert(Boolean(storageId.storageKey));
        return this.storagesInternal[this.storageKey(storageId.storageKey || '', storageId.isLocalStorage)];
    }
    storages() {
        const result = [];
        for (const id in this.storagesInternal) {
            result.push(this.storagesInternal[id]);
        }
        return result;
    }
}
_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.SDKModel.SDKModel.register(DOMStorageModel, { capabilities: 2 /* SDK.Target.Capability.DOM */, autostart: false });
class DOMStorageDispatcher {
    model;
    constructor(model) {
        this.model = model;
    }
    domStorageItemsCleared({ storageId }) {
        this.model.domStorageItemsCleared(storageId);
    }
    domStorageItemRemoved({ storageId, key }) {
        this.model.domStorageItemRemoved(storageId, key);
    }
    domStorageItemAdded({ storageId, key, newValue }) {
        this.model.domStorageItemAdded(storageId, key, newValue);
    }
    domStorageItemUpdated({ storageId, key, oldValue, newValue }) {
        this.model.domStorageItemUpdated(storageId, key, oldValue, newValue);
    }
}
//# sourceMappingURL=DOMStorageModel.js.map

/***/ }),

/***/ "./panels/application/StorageView.js":
/*!*******************************************!*\
  !*** ./panels/application/StorageView.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionDelegate: () => (/* binding */ ActionDelegate),
/* harmony export */   AllStorageTypes: () => (/* binding */ AllStorageTypes),
/* harmony export */   StorageView: () => (/* binding */ StorageView)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */ var _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/components/perf_ui/perf_ui.js */ "./ui/legacy/components/perf_ui/perf_ui.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _DOMStorageModel_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DOMStorageModel.js */ "./panels/application/DOMStorageModel.js");
/* harmony import */ var _IndexedDBModel_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./IndexedDBModel.js */ "./panels/application/IndexedDBModel.js");
/* harmony import */ var _storageView_css_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./storageView.css.js */ "./panels/application/storageView.css.js");
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
class StorageView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ThrottledWidget.ThrottledWidget {
    pieColors;
    reportView;
    target;
    securityOrigin;
    storageKey;
    settings;
    includeThirdPartyCookiesSetting;
    quotaRow;
    quotaUsage;
    pieChart;
    previousOverrideFieldValue;
    quotaOverrideCheckbox;
    quotaOverrideControlRow;
    quotaOverrideEditor;
    quotaOverrideErrorMessage;
    clearButton;
    constructor() {
        super(true, 1000);
        this.contentElement.classList.add('clear-storage-container');
        this.contentElement.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.pane('clear-storage')}`);
        this.pieColors = new Map([
            ["appcache" /* Protocol.Storage.StorageType.Appcache */, 'rgb(110, 161, 226)'], // blue
            ["cache_storage" /* Protocol.Storage.StorageType.Cache_storage */, 'rgb(229, 113, 113)'], // red
            ["cookies" /* Protocol.Storage.StorageType.Cookies */, 'rgb(239, 196, 87)'], // yellow
            ["indexeddb" /* Protocol.Storage.StorageType.Indexeddb */, 'rgb(155, 127, 230)'], // purple
            ["local_storage" /* Protocol.Storage.StorageType.Local_storage */, 'rgb(116, 178, 102)'], // green
            ["service_workers" /* Protocol.Storage.StorageType.Service_workers */, 'rgb(255, 167, 36)'], // orange
            ["websql" /* Protocol.Storage.StorageType.Websql */, 'rgb(203, 220, 56)'], // lime
        ]);
        // TODO(crbug.com/1156978): Replace UI.ReportView.ReportView with ReportView.ts web component.
        this.reportView = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ReportView.ReportView(i18nString(UIStrings.storageTitle));
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
        quota.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.section('usage')}`);
        this.quotaRow = quota.appendSelectableRow();
        this.quotaRow.classList.add('quota-usage-row');
        const learnMoreRow = quota.appendRow();
        const learnMore = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.XLink.XLink.create('https://developer.chrome.com/docs/devtools/progressive-web-apps#opaque-responses', i18nString(UIStrings.learnMore), undefined, undefined, 'learn-more');
        learnMoreRow.appendChild(learnMore);
        this.quotaUsage = null;
        this.pieChart = new _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_5__.PieChart.PieChart();
        this.populatePieChart(0, []);
        const usageBreakdownRow = quota.appendRow();
        usageBreakdownRow.classList.add('usage-breakdown-row');
        usageBreakdownRow.appendChild(this.pieChart);
        this.previousOverrideFieldValue = '';
        const quotaOverrideCheckboxRow = quota.appendRow();
        quotaOverrideCheckboxRow.classList.add('quota-override-row');
        this.quotaOverrideCheckbox =
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.CheckboxLabel.create(i18nString(UIStrings.simulateCustomStorage), false, '');
        this.quotaOverrideCheckbox.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.toggle('simulate-custom-quota').track({ change: true })}`);
        quotaOverrideCheckboxRow.appendChild(this.quotaOverrideCheckbox);
        this.quotaOverrideCheckbox.checkboxElement.addEventListener('click', this.onClickCheckbox.bind(this), false);
        this.quotaOverrideControlRow = quota.appendRow();
        this.quotaOverrideEditor =
            this.quotaOverrideControlRow.createChild('input', 'quota-override-notification-editor');
        this.quotaOverrideEditor.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.textField('quota-override').track({ change: true })}`);
        this.quotaOverrideControlRow.appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createLabel(i18nString(UIStrings.mb)));
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
        this.clearButton = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createTextButton(i18nString(UIStrings.clearSiteData), this.clear.bind(this), { jslogContext: 'storage.clear-site-data' });
        this.clearButton.id = 'storage-view-clear-button';
        clearButtonSection.appendChild(this.clearButton);
        const includeThirdPartyCookiesCheckbox = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.SettingsUI.createSettingCheckbox(i18nString(UIStrings.includingThirdPartyCookies), this.includeThirdPartyCookiesSetting, true);
        includeThirdPartyCookiesCheckbox.classList.add('include-third-party-cookies');
        clearButtonSection.appendChild(includeThirdPartyCookiesCheckbox);
        const application = this.reportView.appendSection(i18nString(UIStrings.application));
        application.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.section('application')}`);
        this.appendItem(application, i18nString(UIStrings.unregisterServiceWorker), "service_workers" /* Protocol.Storage.StorageType.Service_workers */);
        application.markFieldListAsGroup();
        const storage = this.reportView.appendSection(i18nString(UIStrings.storageTitle));
        storage.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.section('storage')}`);
        this.appendItem(storage, i18nString(UIStrings.localAndSessionStorage), "local_storage" /* Protocol.Storage.StorageType.Local_storage */);
        this.appendItem(storage, i18nString(UIStrings.indexDB), "indexeddb" /* Protocol.Storage.StorageType.Indexeddb */);
        this.appendItem(storage, i18nString(UIStrings.webSql), "websql" /* Protocol.Storage.StorageType.Websql */);
        this.appendItem(storage, i18nString(UIStrings.cookies), "cookies" /* Protocol.Storage.StorageType.Cookies */);
        this.appendItem(storage, i18nString(UIStrings.cacheStorage), "cache_storage" /* Protocol.Storage.StorageType.Cache_storage */);
        storage.markFieldListAsGroup();
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().observeTargets(this);
    }
    appendItem(section, title, settingName) {
        const row = section.appendRow();
        const setting = this.settings.get(settingName);
        if (setting) {
            row.appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.SettingsUI.createSettingCheckbox(title, setting, true));
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
        storageKeyManager.addEventListener("MainStorageKeyChanged" /* SDK.StorageKeyManager.Events.MainStorageKeyChanged */, this.storageKeyChanged, this);
    }
    targetRemoved(target) {
        if (this.target !== target) {
            return;
        }
        const securityOriginManager = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.SecurityOriginManager.SecurityOriginManager);
        securityOriginManager.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.SecurityOriginManager.Events.MainSecurityOriginChanged, this.originChanged, this);
        const storageKeyManager = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.StorageKeyManager.StorageKeyManager);
        storageKeyManager.removeEventListener("MainStorageKeyChanged" /* SDK.StorageKeyManager.Events.MainStorageKeyChanged */, this.storageKeyChanged, this);
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
        const cutoff = 9_000_000_000_000;
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
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.alert(i18nString(UIStrings.SiteDataCleared));
    }
    static clear(target, storageKey, originForCookies, selectedStorageTypes, includeThirdPartyCookies) {
        console.assert(Boolean(storageKey));
        if (!storageKey) {
            return;
        }
        void target.storageAgent().invoke_clearDataForStorageKey({ storageKey, storageTypes: selectedStorageTypes.join(',') });
        const set = new Set(selectedStorageTypes);
        const hasAll = set.has("all" /* Protocol.Storage.StorageType.All */);
        if (set.has("local_storage" /* Protocol.Storage.StorageType.Local_storage */) || hasAll) {
            const storageModel = target.model(_DOMStorageModel_js__WEBPACK_IMPORTED_MODULE_8__.DOMStorageModel);
            if (storageModel) {
                storageModel.clearForStorageKey(storageKey);
            }
        }
        if (set.has("indexeddb" /* Protocol.Storage.StorageType.Indexeddb */) || hasAll) {
            for (const target of _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().targets()) {
                const indexedDBModel = target.model(_IndexedDBModel_js__WEBPACK_IMPORTED_MODULE_9__.IndexedDBModel);
                if (indexedDBModel) {
                    indexedDBModel.clearForStorageKey(storageKey);
                }
            }
        }
        if (originForCookies && (set.has("cookies" /* Protocol.Storage.StorageType.Cookies */) || hasAll)) {
            void target.storageAgent().invoke_clearDataForOrigin({ origin: originForCookies, storageTypes: "cookies" /* Protocol.Storage.StorageType.Cookies */ });
            const cookieModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.CookieModel.CookieModel);
            if (cookieModel) {
                void cookieModel.clear(undefined, includeThirdPartyCookies ? undefined : originForCookies);
            }
        }
        if (set.has("cache_storage" /* Protocol.Storage.StorageType.Cache_storage */) || hasAll) {
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
        const quota = quotaOverridden ? _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Fragment.Fragment.build `<b>${formattedQuotaAsString}</b>`.element() : quotaAsString;
        const element = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getFormatLocalizedString(str_, UIStrings.storageQuotaUsed, { PH1: usageAsString, PH2: quota });
        this.quotaRow.appendChild(element);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Tooltip.Tooltip.install(this.quotaRow, i18nString(UIStrings.storageQuotaUsedWithBytes, { PH1: response.usage.toLocaleString(), PH2: response.quota.toLocaleString() }));
        if (!response.overrideActive && response.quota < 125829120) { // 120 MB
            const icon = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__.Icon.Icon();
            icon.data = { iconName: 'info', color: 'var(--icon-info)', width: '14px', height: '14px' };
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Tooltip.Tooltip.install(this.quotaRow, i18nString(UIStrings.storageQuotaIsLimitedIn));
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
            case "file_systems" /* Protocol.Storage.StorageType.File_systems */:
                return i18nString(UIStrings.fileSystem);
            case "websql" /* Protocol.Storage.StorageType.Websql */:
                return i18nString(UIStrings.webSql);
            case "appcache" /* Protocol.Storage.StorageType.Appcache */:
                return i18nString(UIStrings.application);
            case "indexeddb" /* Protocol.Storage.StorageType.Indexeddb */:
                return i18nString(UIStrings.indexDB);
            case "cache_storage" /* Protocol.Storage.StorageType.Cache_storage */:
                return i18nString(UIStrings.cacheStorage);
            case "service_workers" /* Protocol.Storage.StorageType.Service_workers */:
                return i18nString(UIStrings.serviceWorkers);
            default:
                return i18nString(UIStrings.other);
        }
    }
    wasShown() {
        super.wasShown();
        this.reportView.registerCSSFiles([_storageView_css_js__WEBPACK_IMPORTED_MODULE_10__["default"]]);
        this.registerCSSFiles([_storageView_css_js__WEBPACK_IMPORTED_MODULE_10__["default"]]);
    }
}
const AllStorageTypes = [
    "appcache" /* Protocol.Storage.StorageType.Appcache */,
    "cache_storage" /* Protocol.Storage.StorageType.Cache_storage */,
    "cookies" /* Protocol.Storage.StorageType.Cookies */,
    "indexeddb" /* Protocol.Storage.StorageType.Indexeddb */,
    "local_storage" /* Protocol.Storage.StorageType.Local_storage */,
    "service_workers" /* Protocol.Storage.StorageType.Service_workers */,
    "websql" /* Protocol.Storage.StorageType.Websql */,
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
//# sourceMappingURL=StorageView.js.map

/***/ }),

/***/ "./panels/application/storageView.css.js":
/*!***********************************************!*\
  !*** ./panels/application/storageView.css.js ***!
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
 * Copyright 2016 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.report-row {
  display: flex;
  align-items: center;
  white-space: normal;
}

.clear-storage-button .report-row {
  margin: 0 0 0 17px;
  display: flex;
}

.link {
  margin-left: 10px;
  display: none;
}

.report-row:hover .link {
  display: inline;
}

.quota-override-editor-with-button {
  align-items: baseline;
  display: flex;
}

.quota-override-notification-editor {
  border: solid 1px var(--sys-color-neutral-outline);
  border-radius: 4px;
  display: flex;
  flex: auto;
  margin-right: 4px;
  max-width: 200px;
  min-width: 50px;
  min-height: 19px;
  padding-left: 4px;

  &:focus {
    border-color: var(--sys-color-state-focus-ring);
  }

  &:hover:not(:focus) {
    background-color: var(--sys-color-state-hover-on-subtle);
  }
}

.quota-override-error {
  padding-top: 10px;
  color: var(--sys-color-error);
}

.usage-breakdown-row {
  min-width: fit-content;
}

.clear-storage-container {
  overflow: auto;
}

.clear-storage-header {
  min-width: 400px;
}

.report-content-box {
  overflow: initial;
}

.include-third-party-cookies {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-left: 10px;
}

/*# sourceURL=storageView.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);