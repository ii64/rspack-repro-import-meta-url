"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_application_ServiceWorkersView_js"],{

/***/ "./panels/application/ServiceWorkersView.js":
/*!**************************************************!*\
  !*** ./panels/application/ServiceWorkersView.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Section: () => (/* binding */ Section),
/* harmony export */   ServiceWorkersView: () => (/* binding */ ServiceWorkersView),
/* harmony export */   setThrottleDisabledForDebugging: () => (/* binding */ setThrottleDisabledForDebugging)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/logs/logs.js */ "./models/logs/logs.js");
/* harmony import */ var _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../panels/network/forward/forward.js */ "./panels/network/forward/forward.js");
/* harmony import */ var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/components/buttons/buttons.js */ "./ui/components/buttons/buttons.js");
/* harmony import */ var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/legacy/components/utils/utils.js */ "./ui/legacy/components/utils/utils.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _mobile_throttling_mobile_throttling_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../mobile_throttling/mobile_throttling.js */ "./panels/mobile_throttling/mobile_throttling.js");
/* harmony import */ var _components_components_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/components.js */ "./panels/application/components/components.js");
/* harmony import */ var _serviceWorkersView_css_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./serviceWorkersView.css.js */ "./panels/application/serviceWorkersView.css.js");
/* harmony import */ var _serviceWorkerUpdateCycleView_css_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./serviceWorkerUpdateCycleView.css.js */ "./panels/application/serviceWorkerUpdateCycleView.css.js");
/* harmony import */ var _ServiceWorkerUpdateCycleView_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ServiceWorkerUpdateCycleView.js */ "./panels/application/ServiceWorkerUpdateCycleView.js");
// Copyright (c) 2015 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.















const UIStrings = {
    /**
     *@description Text for linking to other Service Worker registrations
     */
    serviceWorkersFromOtherOrigins: 'Service workers from other origins',
    /**
     *@description Title of update on reload setting in service workers view of the application panel
     */
    updateOnReload: 'Update on reload',
    /**
     *@description Tooltip text that appears on the setting when hovering over it in Service Workers View of the Application panel
     */
    onPageReloadForceTheService: 'On page reload, force the `service worker` to update, and activate it',
    /**
     *@description Title of bypass service worker setting in service workers view of the application panel
     */
    bypassForNetwork: 'Bypass for network',
    /**
     *@description Tooltip text that appears on the setting when hovering over it in Service Workers View of the Application panel
     */
    bypassTheServiceWorkerAndLoad: 'Bypass the `service worker` and load resources from the network',
    /**
     *@description Screen reader title for a section of the Service Workers view of the Application panel
     *@example {https://example.com} PH1
     */
    serviceWorkerForS: '`Service worker` for {PH1}',
    /**
     *@description Text in Service Workers View of the Application panel
     */
    testPushMessageFromDevtools: 'Test push message from DevTools.',
    /**
     *@description Button label for service worker network requests
     */
    networkRequests: 'Network requests',
    /**
     * @description Label for a button in the Service Workers View of the Application panel.
     * Imperative noun. Clicking the button will refresh the list of service worker registrations.
     */
    update: 'Update',
    /**
     *@description Text in Service Workers View of the Application panel
     */
    unregisterServiceWorker: 'Unregister service worker',
    /**
     *@description Text in Service Workers View of the Application panel
     */
    unregister: 'Unregister',
    /**
     *@description Text for the source of something
     */
    source: 'Source',
    /**
     *@description Text for the status of something
     */
    status: 'Status',
    /**
     *@description Text in Service Workers View of the Application panel
     */
    clients: 'Clients',
    /**
     * @description Text in Service Workers View of the Application panel. Label for a section of the
     * tool which allows the developer to send a test push message to the service worker.
     */
    pushString: 'Push',
    /**
     * @description Text in Service Workers View of the Application panel. Placeholder text for where
     * the user can type in the data they want to push to the service worker i.e. the 'push data'. Noun
     * phrase.
     */
    pushData: 'Push data',
    /**
     *@description Text in Service Workers View of the Application panel
     */
    syncString: 'Sync',
    /**
     *@description Placeholder text for the input box where a user is asked for a test tag to sync. This is used as a compound noun, not as a verb.
     */
    syncTag: 'Sync tag',
    /**
     *@description Text for button in Service Workers View of the Application panel that dispatches a periodicsync event
     */
    periodicSync: 'Periodic sync',
    /**
     *@description Default tag for a periodicsync event in Service Workers View of the Application panel
     */
    periodicSyncTag: 'Periodic sync tag',
    /**
     *@description Aria accessible name in Service Workers View of the Application panel
     *@example {3} PH1
     */
    sRegistrationErrors: '{PH1} registration errors',
    /**
     * @description Text in Service Workers View of the Application panel. The Date/time that a service
     * worker version update was received by the webpage.
     * @example {7/3/2019, 3:38:37 PM} PH1
     */
    receivedS: 'Received {PH1}',
    /**
     **@description Text in Service Workers View of the Application panel.
     */
    routers: 'Routers',
    /**
     *@description Text in Service Workers View of the Application panel
     *@example {example.com} PH1
     */
    sDeleted: '{PH1} - deleted',
    /**
     *@description Text in Service Workers View of the Application panel
     *@example {1} PH1
     *@example {stopped} PH2
     */
    sActivatedAndIsS: '#{PH1} activated and is {PH2}',
    /**
     *@description Text in Service Workers View of the Application panel
     */
    stopString: 'Stop',
    /**
     *@description Text in Service Workers View of the Application panel
     */
    inspect: 'Inspect',
    /**
     *@description Text in Service Workers View of the Application panel
     */
    startString: 'Start',
    /**
     * @description Text in Service Workers View of the Application panel. Service workers have
     * different versions, which are labelled with numbers e.g. version #2. This text indicates that a
     * particular version is now redundant (it was replaced by a newer version). # means 'number' here.
     * @example {2} PH1
     */
    sIsRedundant: '#{PH1} is redundant',
    /**
     *@description Text in Service Workers View of the Application panel
     *@example {2} PH1
     */
    sWaitingToActivate: '#{PH1} waiting to activate',
    /**
     *@description Text in Service Workers View of the Application panel
     *@example {2} PH1
     */
    sTryingToInstall: '#{PH1} trying to install',
    /**
     *@description Text in Service Workers Update Timeline. Update is a noun.
     */
    updateCycle: 'Update Cycle',
    /**
     *@description Text of a DOM element in Service Workers View of the Application panel
     *@example {example.com} PH1
     */
    workerS: 'Worker: {PH1}',
    /**
     *@description Link text in Service Workers View of the Application panel. When the link is clicked,
     * the focus is moved to the service worker's client page.
     */
    focus: 'focus',
    /**
     *@description Link to view all the Service Workers that have been registered.
     */
    seeAllRegistrations: 'See all registrations',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/application/ServiceWorkersView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
let throttleDisabledForDebugging = false;
const setThrottleDisabledForDebugging = (enable) => {
    throttleDisabledForDebugging = enable;
};
class ServiceWorkersView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.Widget.VBox {
    currentWorkersView;
    toolbar;
    sections;
    manager;
    securityOriginManager;
    sectionToRegistration;
    eventListeners;
    constructor() {
        super(true);
        // TODO(crbug.com/1156978): Replace UI.ReportView.ReportView with ReportView.ts web component.
        this.currentWorkersView = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportView(_core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.lockedString('Service workers'));
        this.currentWorkersView.setBodyScrollable(false);
        this.contentElement.classList.add('service-worker-list');
        this.contentElement.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_9__.pane('service-workers')}`);
        this.currentWorkersView.show(this.contentElement);
        this.currentWorkersView.element.classList.add('service-workers-this-origin');
        this.currentWorkersView.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_9__.section('this-origin')}`);
        this.toolbar = this.currentWorkersView.createToolbar();
        this.sections = new Map();
        this.manager = null;
        this.securityOriginManager = null;
        this.sectionToRegistration = new WeakMap();
        const othersDiv = this.contentElement.createChild('div', 'service-workers-other-origin');
        othersDiv.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_9__.section('other-origin')}`);
        // TODO(crbug.com/1156978): Replace UI.ReportView.ReportView with ReportView.ts web component.
        const othersView = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportView();
        othersView.setHeaderVisible(false);
        othersView.show(othersDiv);
        const othersSection = othersView.appendSection(i18nString(UIStrings.serviceWorkersFromOtherOrigins));
        const othersSectionRow = othersSection.appendRow();
        const seeOthers = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.Fragment.html `<a class="devtools-link" role="link" tabindex="0" href="chrome://serviceworker-internals" target="_blank" style="display: inline; cursor: pointer;">${i18nString(UIStrings.seeAllRegistrations)}</a>`;
        seeOthers.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_9__.link('view-all').track({ click: true })}`);
        self.onInvokeElement(seeOthers, event => {
            const rootTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().rootTarget();
            rootTarget &&
                void rootTarget.targetAgent().invoke_createTarget({ url: 'chrome://serviceworker-internals?devtools' });
            event.consume(true);
        });
        othersSectionRow.appendChild(seeOthers);
        this.toolbar.appendToolbarItem(_mobile_throttling_mobile_throttling_js__WEBPACK_IMPORTED_MODULE_10__.ThrottlingManager.throttlingManager().createOfflineToolbarCheckbox());
        const updateOnReloadSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('service-worker-update-on-reload', false);
        updateOnReloadSetting.setTitle(i18nString(UIStrings.updateOnReload));
        const forceUpdate = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.Toolbar.ToolbarSettingCheckbox(updateOnReloadSetting, i18nString(UIStrings.onPageReloadForceTheService));
        this.toolbar.appendToolbarItem(forceUpdate);
        const bypassServiceWorkerSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('bypass-service-worker', false);
        bypassServiceWorkerSetting.setTitle(i18nString(UIStrings.bypassForNetwork));
        const fallbackToNetwork = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.Toolbar.ToolbarSettingCheckbox(bypassServiceWorkerSetting, i18nString(UIStrings.bypassTheServiceWorkerAndLoad));
        this.toolbar.appendToolbarItem(fallbackToNetwork);
        this.eventListeners = new Map();
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().observeModels(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ServiceWorkerManager.ServiceWorkerManager, this);
        this.updateListVisibility();
        const drawerChangeHandler = (event) => {
            // @ts-ignore: No support for custom event listener
            const isDrawerOpen = event.detail && event.detail.isDrawerOpen;
            if (this.manager && !isDrawerOpen) {
                const { serviceWorkerNetworkRequestsPanelStatus: { isOpen, openedAt } } = this.manager;
                if (isOpen) {
                    const networkLocation = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.ViewManager.ViewManager.instance().locationNameForViewId('network');
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.ViewManager.ViewManager.instance().showViewInLocation('network', networkLocation, false);
                    void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(_panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_5__.UIFilter.UIRequestFilter.filters([]));
                    const currentTime = Date.now();
                    const timeDifference = currentTime - openedAt;
                    if (timeDifference < 2000) {
                        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.ServiceWorkerNetworkRequestClosedQuickly);
                    }
                    this.manager.serviceWorkerNetworkRequestsPanelStatus = {
                        isOpen: false,
                        openedAt: 0,
                    };
                }
            }
        };
        document.body.addEventListener("drawerchange" /* UI.InspectorView.Events.DrawerChange */, drawerChangeHandler);
    }
    modelAdded(serviceWorkerManager) {
        if (serviceWorkerManager.target() !== _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().primaryPageTarget()) {
            return;
        }
        this.manager = serviceWorkerManager;
        this.securityOriginManager =
            serviceWorkerManager.target().model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.SecurityOriginManager.SecurityOriginManager);
        for (const registration of this.manager.registrations().values()) {
            this.updateRegistration(registration);
        }
        this.eventListeners.set(serviceWorkerManager, [
            this.manager.addEventListener("RegistrationUpdated" /* SDK.ServiceWorkerManager.Events.RegistrationUpdated */, this.registrationUpdated, this),
            this.manager.addEventListener("RegistrationDeleted" /* SDK.ServiceWorkerManager.Events.RegistrationDeleted */, this.registrationDeleted, this),
            this.securityOriginManager.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.SecurityOriginManager.Events.SecurityOriginAdded, this.updateSectionVisibility, this),
            this.securityOriginManager.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.SecurityOriginManager.Events.SecurityOriginRemoved, this.updateSectionVisibility, this),
        ]);
    }
    modelRemoved(serviceWorkerManager) {
        if (!this.manager || this.manager !== serviceWorkerManager) {
            return;
        }
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.EventTarget.removeEventListeners(this.eventListeners.get(serviceWorkerManager) || []);
        this.eventListeners.delete(serviceWorkerManager);
        this.manager = null;
        this.securityOriginManager = null;
    }
    getTimeStamp(registration) {
        const versions = registration.versionsByMode();
        let timestamp = 0;
        const active = versions.get("active" /* SDK.ServiceWorkerManager.ServiceWorkerVersion.Modes.Active */);
        const installing = versions.get("installing" /* SDK.ServiceWorkerManager.ServiceWorkerVersion.Modes.Installing */);
        const waiting = versions.get("waiting" /* SDK.ServiceWorkerManager.ServiceWorkerVersion.Modes.Waiting */);
        const redundant = versions.get("redundant" /* SDK.ServiceWorkerManager.ServiceWorkerVersion.Modes.Redundant */);
        if (active) {
            timestamp = active.scriptResponseTime;
        }
        else if (waiting) {
            timestamp = waiting.scriptResponseTime;
        }
        else if (installing) {
            timestamp = installing.scriptResponseTime;
        }
        else if (redundant) {
            timestamp = redundant.scriptResponseTime;
        }
        return timestamp || 0;
    }
    updateSectionVisibility() {
        let hasThis = false;
        const movedSections = [];
        for (const section of this.sections.values()) {
            const expectedView = this.getReportViewForOrigin(section.registration.securityOrigin);
            hasThis = hasThis || expectedView === this.currentWorkersView;
            if (section.section.parentWidget() !== expectedView) {
                movedSections.push(section);
            }
        }
        for (const section of movedSections) {
            const registration = section.registration;
            this.removeRegistrationFromList(registration);
            this.updateRegistration(registration, true);
        }
        this.currentWorkersView.sortSections((aSection, bSection) => {
            const aRegistration = this.sectionToRegistration.get(aSection);
            const bRegistration = this.sectionToRegistration.get(bSection);
            const aTimestamp = aRegistration ? this.getTimeStamp(aRegistration) : 0;
            const bTimestamp = bRegistration ? this.getTimeStamp(bRegistration) : 0;
            // the newest (largest timestamp value) should be the first
            return bTimestamp - aTimestamp;
        });
        for (const section of this.sections.values()) {
            if (section.section.parentWidget() === this.currentWorkersView ||
                this.isRegistrationVisible(section.registration)) {
                section.section.showWidget();
            }
            else {
                section.section.hideWidget();
            }
        }
        this.contentElement.classList.toggle('service-worker-has-current', Boolean(hasThis));
        this.updateListVisibility();
    }
    registrationUpdated(event) {
        this.updateRegistration(event.data);
        this.gcRegistrations();
    }
    gcRegistrations() {
        if (!this.manager || !this.securityOriginManager) {
            return;
        }
        let hasNonDeletedRegistrations = false;
        const securityOrigins = new Set(this.securityOriginManager.securityOrigins());
        for (const registration of this.manager.registrations().values()) {
            if (!securityOrigins.has(registration.securityOrigin) && !this.isRegistrationVisible(registration)) {
                continue;
            }
            if (!registration.canBeRemoved()) {
                hasNonDeletedRegistrations = true;
                break;
            }
        }
        if (!hasNonDeletedRegistrations) {
            return;
        }
        for (const registration of this.manager.registrations().values()) {
            const visible = securityOrigins.has(registration.securityOrigin) || this.isRegistrationVisible(registration);
            if (!visible && registration.canBeRemoved()) {
                this.removeRegistrationFromList(registration);
            }
        }
    }
    getReportViewForOrigin(origin) {
        if (this.securityOriginManager &&
            (this.securityOriginManager.securityOrigins().includes(origin) ||
                this.securityOriginManager.unreachableMainSecurityOrigin() === origin)) {
            return this.currentWorkersView;
        }
        return null;
    }
    updateRegistration(registration, skipUpdate) {
        let section = this.sections.get(registration);
        if (!section) {
            const title = registration.scopeURL;
            const reportView = this.getReportViewForOrigin(registration.securityOrigin);
            if (!reportView) {
                return;
            }
            const uiSection = reportView.appendSection(title);
            uiSection.setUiGroupTitle(i18nString(UIStrings.serviceWorkerForS, { PH1: title }));
            this.sectionToRegistration.set(uiSection, registration);
            section = new Section(this.manager, uiSection, registration);
            this.sections.set(registration, section);
        }
        if (skipUpdate) {
            return;
        }
        this.updateSectionVisibility();
        section.scheduleUpdate();
    }
    registrationDeleted(event) {
        this.removeRegistrationFromList(event.data);
    }
    removeRegistrationFromList(registration) {
        const section = this.sections.get(registration);
        if (section) {
            section.section.detach();
        }
        this.sections.delete(registration);
        this.updateSectionVisibility();
    }
    isRegistrationVisible(registration) {
        if (!registration.scopeURL) {
            return true;
        }
        return false;
    }
    updateListVisibility() {
        this.contentElement.classList.toggle('service-worker-list-empty', this.sections.size === 0);
    }
    wasShown() {
        super.wasShown();
        this.registerCSSFiles([
            _serviceWorkersView_css_js__WEBPACK_IMPORTED_MODULE_12__["default"],
        ]);
    }
}
class Section {
    manager;
    section;
    registration;
    fingerprint;
    pushNotificationDataSetting;
    syncTagNameSetting;
    periodicSyncTagNameSetting;
    updateCycleView;
    routerView;
    networkRequests;
    updateButton;
    deleteButton;
    sourceField;
    statusField;
    clientsField;
    linkifier;
    clientInfoCache;
    throttler;
    updateCycleField;
    routerField;
    constructor(manager, section, registration) {
        this.manager = manager;
        this.section = section;
        this.registration = registration;
        this.fingerprint = null;
        this.pushNotificationDataSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createLocalSetting('push-data', i18nString(UIStrings.testPushMessageFromDevtools));
        this.syncTagNameSetting =
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createLocalSetting('sync-tag-name', 'test-tag-from-devtools');
        this.periodicSyncTagNameSetting =
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createLocalSetting('periodic-sync-tag-name', 'test-tag-from-devtools');
        this.updateCycleView = new _ServiceWorkerUpdateCycleView_js__WEBPACK_IMPORTED_MODULE_14__.ServiceWorkerUpdateCycleView(registration);
        this.routerView = new _components_components_js__WEBPACK_IMPORTED_MODULE_11__.ServiceWorkerRouterView.ServiceWorkerRouterView();
        this.networkRequests = new _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_6__.Button.Button();
        this.networkRequests.data = {
            iconName: 'bottom-panel-open',
            variant: "text" /* Buttons.Button.Variant.TEXT */,
            title: i18nString(UIStrings.networkRequests),
            jslogContext: 'show-network-requests',
        };
        this.networkRequests.textContent = i18nString(UIStrings.networkRequests);
        this.networkRequests.addEventListener('click', this.networkRequestsClicked.bind(this));
        this.section.appendButtonToHeader(this.networkRequests);
        this.updateButton = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.UIUtils.createTextButton(i18nString(UIStrings.update), this.updateButtonClicked.bind(this), { variant: "text" /* Buttons.Button.Variant.TEXT */, title: i18nString(UIStrings.update), jslogContext: 'update' });
        this.section.appendButtonToHeader(this.updateButton);
        this.deleteButton =
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.UIUtils.createTextButton(i18nString(UIStrings.unregister), this.unregisterButtonClicked.bind(this), {
                variant: "text" /* Buttons.Button.Variant.TEXT */,
                title: i18nString(UIStrings.unregisterServiceWorker),
                jslogContext: 'unregister',
            });
        this.section.appendButtonToHeader(this.deleteButton);
        // Preserve the order.
        this.sourceField = this.wrapWidget(this.section.appendField(i18nString(UIStrings.source)));
        this.statusField = this.wrapWidget(this.section.appendField(i18nString(UIStrings.status)));
        this.clientsField = this.wrapWidget(this.section.appendField(i18nString(UIStrings.clients)));
        this.createSyncNotificationField(i18nString(UIStrings.pushString), this.pushNotificationDataSetting.get(), i18nString(UIStrings.pushData), this.push.bind(this), 'push-message');
        this.createSyncNotificationField(i18nString(UIStrings.syncString), this.syncTagNameSetting.get(), i18nString(UIStrings.syncTag), this.sync.bind(this), 'sync-tag');
        this.createSyncNotificationField(i18nString(UIStrings.periodicSync), this.periodicSyncTagNameSetting.get(), i18nString(UIStrings.periodicSyncTag), tag => this.periodicSync(tag), 'periodic-sync-tag');
        this.createUpdateCycleField();
        this.maybeCreateRouterField();
        this.linkifier = new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_7__.Linkifier.Linkifier();
        this.clientInfoCache = new Map();
        this.throttler = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Throttler.Throttler(500);
    }
    createSyncNotificationField(label, initialValue, placeholder, callback, jslogContext) {
        const form = this.wrapWidget(this.section.appendField(label)).createChild('form', 'service-worker-editor-with-button');
        const editor = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.UIUtils.createInput('source-code service-worker-notification-editor');
        editor.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_9__.textField().track({ change: true }).context(jslogContext)}`);
        form.appendChild(editor);
        const button = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.UIUtils.createTextButton(label, undefined, { jslogContext });
        button.type = 'submit';
        form.appendChild(button);
        editor.value = initialValue;
        editor.placeholder = placeholder;
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.ARIAUtils.setLabel(editor, label);
        form.addEventListener('submit', (e) => {
            callback(editor.value || '');
            e.consume(true);
        });
    }
    scheduleUpdate() {
        if (throttleDisabledForDebugging) {
            void this.update();
            return;
        }
        void this.throttler.schedule(this.update.bind(this));
    }
    targetForVersionId(versionId) {
        const version = this.manager.findVersion(versionId);
        if (!version || !version.targetId) {
            return null;
        }
        return _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().targetById(version.targetId);
    }
    addVersion(versionsStack, icon, label) {
        const installingEntry = versionsStack.createChild('div', 'service-worker-version');
        installingEntry.createChild('div', icon);
        const statusString = installingEntry.createChild('span', 'service-worker-version-string');
        statusString.textContent = label;
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.ARIAUtils.markAsAlert(statusString);
        return installingEntry;
    }
    updateClientsField(version) {
        this.clientsField.removeChildren();
        this.section.setFieldVisible(i18nString(UIStrings.clients), Boolean(version.controlledClients.length));
        for (const client of version.controlledClients) {
            const clientLabelText = this.clientsField.createChild('div', 'service-worker-client');
            const info = this.clientInfoCache.get(client);
            if (info) {
                this.updateClientInfo(clientLabelText, info);
            }
            void this.manager.target()
                .targetAgent()
                .invoke_getTargetInfo({ targetId: client })
                .then(this.onClientInfo.bind(this, clientLabelText));
        }
    }
    updateSourceField(version) {
        this.sourceField.removeChildren();
        const fileName = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL.extractName(version.scriptURL);
        const name = this.sourceField.createChild('div', 'report-field-value-filename');
        const link = _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_7__.Linkifier.Linkifier.linkifyURL(version.scriptURL, { text: fileName });
        link.tabIndex = 0;
        link.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_9__.link('source-location').track({ click: true })}`);
        name.appendChild(link);
        if (this.registration.errors.length) {
            const errorsLabel = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.UIUtils.createIconLabel({
                title: String(this.registration.errors.length),
                iconName: 'cross-circle-filled',
                color: 'var(--icon-error)',
            });
            errorsLabel.classList.add('devtools-link', 'link');
            errorsLabel.tabIndex = 0;
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.ARIAUtils.setLabel(errorsLabel, i18nString(UIStrings.sRegistrationErrors, { PH1: this.registration.errors.length }));
            self.onInvokeElement(errorsLabel, () => _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Console.Console.instance().show());
            name.appendChild(errorsLabel);
        }
        if (version.scriptResponseTime !== undefined) {
            this.sourceField.createChild('div', 'report-field-value-subtitle').textContent =
                i18nString(UIStrings.receivedS, { PH1: new Date(version.scriptResponseTime * 1000).toLocaleString() });
        }
    }
    update() {
        const fingerprint = this.registration.fingerprint();
        if (fingerprint === this.fingerprint) {
            return Promise.resolve();
        }
        this.fingerprint = fingerprint;
        this.section.setHeaderButtonsState(this.registration.isDeleted);
        const versions = this.registration.versionsByMode();
        const scopeURL = this.registration.scopeURL;
        const title = this.registration.isDeleted ? i18nString(UIStrings.sDeleted, { PH1: scopeURL }) : scopeURL;
        this.section.setTitle(title);
        const active = versions.get("active" /* SDK.ServiceWorkerManager.ServiceWorkerVersion.Modes.Active */);
        const waiting = versions.get("waiting" /* SDK.ServiceWorkerManager.ServiceWorkerVersion.Modes.Waiting */);
        const installing = versions.get("installing" /* SDK.ServiceWorkerManager.ServiceWorkerVersion.Modes.Installing */);
        const redundant = versions.get("redundant" /* SDK.ServiceWorkerManager.ServiceWorkerVersion.Modes.Redundant */);
        this.statusField.removeChildren();
        const versionsStack = this.statusField.createChild('div', 'service-worker-version-stack');
        versionsStack.createChild('div', 'service-worker-version-stack-bar');
        if (active) {
            this.updateSourceField(active);
            const localizedRunningStatus = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ServiceWorkerManager.ServiceWorkerVersion.RunningStatus[active.currentState.runningStatus]();
            // TODO(l10n): Don't concatenate strings here.
            const activeEntry = this.addVersion(versionsStack, 'service-worker-active-circle', i18nString(UIStrings.sActivatedAndIsS, { PH1: active.id, PH2: localizedRunningStatus }));
            if (active.isRunning() || active.isStarting()) {
                const stopButton = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.UIUtils.createTextButton(i18nString(UIStrings.stopString), this.stopButtonClicked.bind(this, active.id), { jslogContext: 'stop' });
                activeEntry.appendChild(stopButton);
                if (!this.targetForVersionId(active.id)) {
                    const inspectButton = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.UIUtils.createTextButton(i18nString(UIStrings.inspect), this.inspectButtonClicked.bind(this, active.id), { jslogContext: 'inspect' });
                    activeEntry.appendChild(inspectButton);
                }
            }
            else if (active.isStartable()) {
                const startButton = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.UIUtils.createTextButton(i18nString(UIStrings.startString), this.startButtonClicked.bind(this), { jslogContext: 'start' });
                activeEntry.appendChild(startButton);
            }
            this.updateClientsField(active);
            this.maybeCreateRouterField();
        }
        else if (redundant) {
            this.updateSourceField(redundant);
            this.addVersion(versionsStack, 'service-worker-redundant-circle', i18nString(UIStrings.sIsRedundant, { PH1: redundant.id }));
            this.updateClientsField(redundant);
        }
        if (waiting) {
            const waitingEntry = this.addVersion(versionsStack, 'service-worker-waiting-circle', i18nString(UIStrings.sWaitingToActivate, { PH1: waiting.id }));
            this.createLink(waitingEntry, _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.lockedString('skipWaiting'), this.skipButtonClicked.bind(this));
            if (waiting.scriptResponseTime !== undefined) {
                waitingEntry.createChild('div', 'service-worker-subtitle').textContent =
                    i18nString(UIStrings.receivedS, { PH1: new Date(waiting.scriptResponseTime * 1000).toLocaleString() });
            }
            if (!this.targetForVersionId(waiting.id) && (waiting.isRunning() || waiting.isStarting())) {
                this.createLink(waitingEntry, i18nString(UIStrings.inspect), this.inspectButtonClicked.bind(this, waiting.id));
            }
        }
        if (installing) {
            const installingEntry = this.addVersion(versionsStack, 'service-worker-installing-circle', i18nString(UIStrings.sTryingToInstall, { PH1: installing.id }));
            if (installing.scriptResponseTime !== undefined) {
                installingEntry.createChild('div', 'service-worker-subtitle').textContent = i18nString(UIStrings.receivedS, {
                    PH1: new Date(installing.scriptResponseTime * 1000).toLocaleString(),
                });
            }
            if (!this.targetForVersionId(installing.id) && (installing.isRunning() || installing.isStarting())) {
                this.createLink(installingEntry, i18nString(UIStrings.inspect), this.inspectButtonClicked.bind(this, installing.id));
            }
        }
        this.updateCycleView.refresh();
        return Promise.resolve();
    }
    createLink(parent, title, listener, className, useCapture) {
        const button = document.createElement('button');
        if (className) {
            button.className = className;
        }
        button.classList.add('link', 'devtools-link');
        button.textContent = title;
        button.tabIndex = 0;
        button.addEventListener('click', listener, useCapture);
        parent.appendChild(button);
        return button;
    }
    unregisterButtonClicked() {
        this.manager.deleteRegistration(this.registration.id);
    }
    createUpdateCycleField() {
        this.updateCycleField = this.wrapWidget(this.section.appendField(i18nString(UIStrings.updateCycle)));
        this.updateCycleField.appendChild(this.updateCycleView.tableElement);
    }
    maybeCreateRouterField() {
        const versions = this.registration.versionsByMode();
        const active = versions.get("active" /* SDK.ServiceWorkerManager.ServiceWorkerVersion.Modes.Active */);
        const title = i18nString(UIStrings.routers);
        if (active && active.routerRules && active.routerRules.length > 0) {
            // If there is at least one registered rule in the active version, append the router filed.
            if (!this.routerField) {
                this.routerField = this.wrapWidget(this.section.appendField(title));
            }
            if (!this.routerField.lastElementChild) {
                this.routerField.appendChild(this.routerView);
            }
            this.routerView.update(active.routerRules);
        }
        else {
            // If no active worker or no registered rules, remove the field.
            this.section.removeField(title);
            this.routerField = undefined;
        }
    }
    updateButtonClicked() {
        void this.manager.updateRegistration(this.registration.id);
    }
    networkRequestsClicked() {
        const applicationTabLocation = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.ViewManager.ViewManager.instance().locationNameForViewId('resources');
        const networkTabLocation = applicationTabLocation === 'drawer-view' ? 'panel' : 'drawer-view';
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.ViewManager.ViewManager.instance().showViewInLocation('network', networkTabLocation);
        void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(_panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_5__.UIFilter.UIRequestFilter.filters([
            {
                filterType: _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_5__.UIFilter.FilterType.Is,
                filterValue: "service-worker-intercepted" /* NetworkForward.UIFilter.IsFilterType.ServiceWorkerIntercepted */,
            },
        ]));
        const requests = _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_4__.NetworkLog.NetworkLog.instance().requests();
        let lastRequest = null;
        if (Array.isArray(requests)) {
            for (const request of requests) {
                if (!lastRequest && request.fetchedViaServiceWorker) {
                    lastRequest = request;
                }
                if (request.fetchedViaServiceWorker && lastRequest &&
                    lastRequest.responseReceivedTime < request.responseReceivedTime) {
                    lastRequest = request;
                }
            }
        }
        if (lastRequest) {
            const requestLocation = _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_5__.UIRequestLocation.UIRequestLocation.tab(lastRequest, "timing" /* NetworkForward.UIRequestLocation.UIRequestTabs.Timing */, { clearFilter: false });
            void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(requestLocation);
        }
        this.manager.serviceWorkerNetworkRequestsPanelStatus = {
            isOpen: true,
            openedAt: Date.now(),
        };
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.ServiceWorkerNetworkRequestClicked);
    }
    push(data) {
        this.pushNotificationDataSetting.set(data);
        void this.manager.deliverPushMessage(this.registration.id, data);
    }
    sync(tag) {
        this.syncTagNameSetting.set(tag);
        void this.manager.dispatchSyncEvent(this.registration.id, tag, true);
    }
    periodicSync(tag) {
        this.periodicSyncTagNameSetting.set(tag);
        void this.manager.dispatchPeriodicSyncEvent(this.registration.id, tag);
    }
    onClientInfo(element, targetInfoResponse) {
        const targetInfo = targetInfoResponse.targetInfo;
        if (!targetInfo) {
            return;
        }
        this.clientInfoCache.set(targetInfo.targetId, targetInfo);
        this.updateClientInfo(element, targetInfo);
    }
    updateClientInfo(element, targetInfo) {
        if (targetInfo.type !== 'page' && targetInfo.type === 'iframe') {
            const clientString = element.createChild('span', 'service-worker-client-string');
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.UIUtils.createTextChild(clientString, i18nString(UIStrings.workerS, { PH1: targetInfo.url }));
            return;
        }
        element.removeChildren();
        const clientString = element.createChild('span', 'service-worker-client-string');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.UIUtils.createTextChild(clientString, targetInfo.url);
        const focusButton = new _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_6__.Button.Button();
        focusButton.data = {
            iconName: 'select-element',
            variant: "icon" /* Buttons.Button.Variant.ICON */,
            size: "SMALL" /* Buttons.Button.Size.SMALL */,
            title: i18nString(UIStrings.focus),
            jslogContext: 'client-focus',
        };
        focusButton.className = 'service-worker-client-focus-link';
        focusButton.addEventListener('click', this.activateTarget.bind(this, targetInfo.targetId));
        element.appendChild(focusButton);
    }
    activateTarget(targetId) {
        void this.manager.target().targetAgent().invoke_activateTarget({ targetId });
    }
    startButtonClicked() {
        void this.manager.startWorker(this.registration.scopeURL);
    }
    skipButtonClicked() {
        void this.manager.skipWaiting(this.registration.scopeURL);
    }
    stopButtonClicked(versionId) {
        void this.manager.stopWorker(versionId);
    }
    inspectButtonClicked(versionId) {
        void this.manager.inspectWorker(versionId);
    }
    wrapWidget(container) {
        const shadowRoot = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.UIUtils.createShadowRootWithCoreStyles(container, {
            cssFile: [
                _serviceWorkersView_css_js__WEBPACK_IMPORTED_MODULE_12__["default"],
                /* These styles are for the timing table in serviceWorkerUpdateCycleView but this is the widget that it is rendered
                   * inside so we are registering the files here. */
                _serviceWorkerUpdateCycleView_css_js__WEBPACK_IMPORTED_MODULE_13__["default"],
            ],
            delegatesFocus: undefined,
        });
        const contentElement = document.createElement('div');
        shadowRoot.appendChild(contentElement);
        return contentElement;
    }
}
//# sourceMappingURL=ServiceWorkersView.js.map

/***/ }),

/***/ "./panels/application/serviceWorkerUpdateCycleView.css.js":
/*!****************************************************************!*\
  !*** ./panels/application/serviceWorkerUpdateCycleView.css.js ***!
  \****************************************************************/
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
 * Copyright 2020 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */
.resource-service-worker-update-view {
  display: block;
  margin: 6px;
  color: var(--sys-color-on-surface-subtle);
  overflow: auto;
}

.service-worker-update-timing-table {
  border: 1px solid var(--sys-color-divider);
  border-spacing: 0;
  padding-left: 10px;
  padding-right: 10px;
  line-height: initial;
  table-layout: auto;
  overflow: hidden;
}

.service-worker-update-timing-row {
  position: relative;
  height: 20px;
  overflow: hidden;
  min-width: 80px;
}

.service-worker-update-timing-bar {
  position: absolute;
  min-width: 1px;
  top: 0;
  bottom: 0;
}

.service-worker-update-timing-bar-clickable::before {
  user-select: none;
  mask-image: var(--image-file-triangle-right);
  float: left;
  width: 14px;
  height: 14px;
  margin-right: 2px;
  content: "";
  position: relative;
  background-color: var(--icon-default);
  transition: transform 200ms;
}

.service-worker-update-timing-bar-clickable {
  position: relative;
  left: -12px;
}

.service-worker-update-timing-bar-clickable:focus-visible {
  background-color: var(--sys-color-state-focus-highlight);
}

.service-worker-update-timing-bar-clickable[aria-checked="true"]::before {
  transform: rotate(90deg);
}

.service-worker-update-timing-bar-details-collapsed {
  display: none;
}

.service-worker-update-timing-bar-details-expanded {
  display: table-row;
}

.service-worker-update-timing-bar-details:focus-visible {
  background-color: var(--sys-color-state-focus-highlight);
}

.service-worker-update-timing-bar.activate {
  top: 5px;
  height: 10px;
  background-color: var(--sys-color-yellow-bright);
}

.service-worker-update-timing-bar.wait {
  top: 5px;
  height: 10px;
  background-color: var(--sys-color-purple-bright);
}

.service-worker-update-timing-bar.install {
  top: 5px;
  height: 10px;
  background-color: var(--sys-color-cyan-bright);
}

.service-worker-update-timing-table > tr > td {
  padding: 4px 0;
  padding-right: 10px;
}

table.service-worker-update-timing-table > tr.service-worker-update-timing-table-header > td {
  border-top: 5px solid transparent;
  color: var(--sys-color-token-subtle);
}

table.service-worker-update-timing-table > tr.service-worker-update-timing-bar-details > td:first-child {
  padding-left: 12px;
}

table.service-worker-update-timing-table > tr.service-worker-update-timeline > td:first-child {
  padding-left: 12px;
}

/*# sourceURL=serviceWorkerUpdateCycleView.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./panels/application/serviceWorkersView.css.js":
/*!******************************************************!*\
  !*** ./panels/application/serviceWorkersView.css.js ***!
  \******************************************************/
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
 * Copyright 2015 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.service-worker-version {
  display: flex;
  /* The status string can be long, allow this line of the report to wrap. */
  flex-wrap: wrap;

  devtools-button {
    margin-left: var(--sys-size-3);
  }
}

.service-worker-version-stack {
  position: relative;
}

.service-worker-version-stack-bar {
  position: absolute;
  top: 10px;
  bottom: 20px;
  left: 4px;
  content: "";
  border-left: 1px solid var(--sys-color-divider);
  z-index: 0;
}

.service-worker-version:not(:last-child) {
  margin-bottom: 7px;
}

.service-worker-version-string {
  /* This label contains important information that needs to be legible at all
     times. Don't shrink it. */
  flex-shrink: 0;
}

.service-worker-active-circle,
.service-worker-redundant-circle,
.service-worker-waiting-circle,
.service-worker-installing-circle {
  position: relative;
  display: inline-block;
  width: 10px;
  height: 10px;
  z-index: 10;
  margin-right: 5px;
  border-radius: 50%;
  border: 1px solid var(--sys-color-token-subtle);
  align-self: center;
  /* The circle should not shrink, to avoid risking becoming invisible. */
  flex-shrink: 0;
}

.service-worker-active-circle {
  background-color: var(--sys-color-green-bright);
}

.service-worker-waiting-circle {
  background-color: var(--sys-color-yellow-bright);
}

.service-worker-installing-circle {
  background-color: var(--sys-color-cdt-base-container);
}

.service-worker-redundant-circle {
  background-color: var(--sys-color-neutral-bright);
}

.service-worker-subtitle {
  padding-left: 14px;
  line-height: 14px;
  color: var(--sys-color-state-disabled);
}

.link {
  margin-left: 7px;
}

.service-worker-editor-with-button {
  align-items: baseline;
  display: flex;
}

.service-worker-notification-editor {
  border: 1px solid var(--sys-color-divider);
  display: flex;
  flex: auto;
  margin-right: 4px;
  max-width: 400px;
  min-width: 80px;
}

.report-field-value {
  white-space: normal;
}

.report-field-value-filename,
.service-worker-client-string {
  max-width: 400px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.report-field-value-filename {
  /* hack to prevent focus-ring from being cut off on the left */
  padding-left: 2px;
  margin-left: -2px;
}

.report-field-value-subtitle {
  overflow: hidden;
  text-overflow: ellipsis;
}

.service-worker-client {
  display: flex;
}

.service-worker-client-focus-link {
  flex: none;
  margin-left: 2px;
  align-self: center;
}

.service-worker-notification-editor.source-code {
  /** Simulate CodeMirror that is shown above */
  padding: 4px;
}

.service-worker-list {
  background-color: var(--sys-color-cdt-base-container);
  overflow: auto;
}

.service-workers-this-origin {
  flex-shrink: 0;
  flex-grow: 0;
}

.service-workers-this-origin,
.service-workers-other-origin {
  min-width: max-content;
}

.service-worker-has-current .service-workers-other-origin {
  margin-top: 16px;
  border-top: 1px solid var(--sys-color-divider);
}

.devtools-link {
  line-height: 14px;
  align-self: center;
  padding: 1px;
}

button.link {
  padding: 1px;
}

button.link:focus-visible {
  background-color: inherit;
}

/*# sourceURL=serviceWorkersView.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);