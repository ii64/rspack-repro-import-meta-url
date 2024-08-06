"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_application_BackgroundServiceView_js"],{

/***/ "./panels/application/BackgroundServiceModel.js":
/*!******************************************************!*\
  !*** ./panels/application/BackgroundServiceModel.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BackgroundServiceModel: () => (/* binding */ BackgroundServiceModel),
/* harmony export */   Events: () => (/* binding */ Events)
/* harmony export */ });
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

class BackgroundServiceModel extends _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.SDKModel.SDKModel {
    backgroundServiceAgent;
    events;
    constructor(target) {
        super(target);
        this.backgroundServiceAgent = target.backgroundServiceAgent();
        target.registerBackgroundServiceDispatcher(this);
        this.events = new Map();
    }
    enable(service) {
        this.events.set(service, []);
        void this.backgroundServiceAgent.invoke_startObserving({ service });
    }
    setRecording(shouldRecord, service) {
        void this.backgroundServiceAgent.invoke_setRecording({ shouldRecord, service });
    }
    clearEvents(service) {
        this.events.set(service, []);
        void this.backgroundServiceAgent.invoke_clearEvents({ service });
    }
    getEvents(service) {
        return this.events.get(service) || [];
    }
    recordingStateChanged({ isRecording, service }) {
        this.dispatchEventToListeners(Events.RecordingStateChanged, { isRecording, serviceName: service });
    }
    backgroundServiceEventReceived({ backgroundServiceEvent }) {
        // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
        // @ts-expect-error
        this.events.get(backgroundServiceEvent.service).push(backgroundServiceEvent);
        this.dispatchEventToListeners(Events.BackgroundServiceEventReceived, backgroundServiceEvent);
    }
}
_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.SDKModel.SDKModel.register(BackgroundServiceModel, { capabilities: 1 /* SDK.Target.Capability.Browser */, autostart: false });
var Events;
(function (Events) {
    Events["RecordingStateChanged"] = "RecordingStateChanged";
    Events["BackgroundServiceEventReceived"] = "BackgroundServiceEventReceived";
})(Events || (Events = {}));
//# sourceMappingURL=BackgroundServiceModel.js.map

/***/ }),

/***/ "./panels/application/BackgroundServiceView.js":
/*!*****************************************************!*\
  !*** ./panels/application/BackgroundServiceView.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionDelegate: () => (/* binding */ ActionDelegate),
/* harmony export */   BackgroundServiceView: () => (/* binding */ BackgroundServiceView),
/* harmony export */   EventDataNode: () => (/* binding */ EventDataNode)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */ var _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/components/data_grid/data_grid.js */ "./ui/legacy/components/data_grid/data_grid.js");
/* harmony import */ var _ui_legacy_emptyWidget_css_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/emptyWidget.css.js */ "./ui/legacy/emptyWidget.css.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _BackgroundServiceModel_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./BackgroundServiceModel.js */ "./panels/application/BackgroundServiceModel.js");
/* harmony import */ var _backgroundServiceView_css_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./backgroundServiceView.css.js */ "./panels/application/backgroundServiceView.css.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





// eslint-disable-next-line rulesdir/es_modules_import





const UIStrings = {
    /**
     *@description Text in Background Service View of the Application panel
     */
    backgroundFetch: 'Background fetch',
    /**
     *@description Text in Background Service View of the Application panel
     */
    backgroundSync: 'Background sync',
    /**
     *@description Text in Background Service View of the Application panel
     */
    pushMessaging: 'Push messaging',
    /**
     *@description Text in Background Service View of the Application panel
     */
    notifications: 'Notifications',
    /**
     *@description Text in Background Service View of the Application panel
     */
    paymentHandler: 'Payment handler',
    /**
     *@description Text in the Periodic Background Service View of the Application panel
     */
    periodicBackgroundSync: 'Periodic background sync',
    /**
     *@description Text to clear content
     */
    clear: 'Clear',
    /**
     *@description Tooltip text that appears when hovering over the largeicon download button in the Background Service View of the Application panel
     */
    saveEvents: 'Save events',
    /**
     *@description Text in Background Service View of the Application panel
     */
    showEventsFromOtherDomains: 'Show events from other domains',
    /**
     *@description Text of a checkbox to show events for other dtorage keys
     */
    showEventsForOtherStorageKeys: 'Show events from other storage partitions',
    /**
     *@description Title of an action under the Background Services category that can be invoked through the Command Menu
     */
    stopRecordingEvents: 'Stop recording events',
    /**
     *@description Title of an action under the Background Services category that can be invoked through the Command Menu
     */
    startRecordingEvents: 'Start recording events',
    /**
     *@description Text for timestamps of items
     */
    timestamp: 'Timestamp',
    /**
     *@description Text that refers to some events
     */
    event: 'Event',
    /**
     *@description Text for the origin of something
     */
    origin: 'Origin',
    /**
     *@description Text for the storage key of something
     */
    storageKey: 'Storage Key',
    /**
     *@description Text in Background Service View of the Application panel. The Scope is a URL associated with the Service Worker, which limits which pages/sites the Service Worker operates on.
     */
    swScope: 'Service Worker Scope',
    /**
     *@description Text in Background Service View of the Application panel
     */
    instanceId: 'Instance ID',
    /**
     *@description Text in Application Panel Sidebar of the Application panel
     */
    backgroundServices: 'Background services',
    /**
     *@description Text that is usually a hyperlink to more documentation
     */
    learnMore: 'Learn more',
    /**
     *@description Text in Background Service View of the Application panel
     */
    selectAnEntryToViewMetadata: 'Select an entry to view metadata',
    /**
     *@description Text in Background Service View of the Application panel
     *@example {Background Fetch} PH1
     */
    recordingSActivity: 'Recording {PH1} activity...',
    /**
     *@description Inform users that DevTools are recording/waiting for events in the Periodic Background Sync tool of the Application panel
     *@example {Background Fetch} PH1
     */
    devtoolsWillRecordAllSActivity: 'DevTools will record all {PH1} activity for up to 3 days, even when closed.',
    /**
     *@description Text in Background Service View of the Application panel
     *@example {record} PH1
     *@example {Ctrl + R} PH2
     */
    clickTheRecordButtonSOrHitSTo: 'Click the record button {PH1} or hit {PH2} to start recording.',
    /**
     *@description Text to show an item is empty
     */
    empty: 'empty',
    /**
     *@description Text in Background Service View of the Application panel
     */
    noMetadataForThisEvent: 'No metadata for this event',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/application/BackgroundServiceView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
class BackgroundServiceView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Widget.VBox {
    serviceName;
    model;
    serviceWorkerManager;
    securityOriginManager;
    storageKeyManager;
    recordAction;
    recordButton;
    originCheckbox;
    storageKeyCheckbox;
    saveButton;
    toolbar;
    splitWidget;
    dataGrid;
    previewPanel;
    selectedEventNode;
    preview;
    static getUIString(serviceName) {
        switch (serviceName) {
            case "backgroundFetch" /* Protocol.BackgroundService.ServiceName.BackgroundFetch */:
                return i18nString(UIStrings.backgroundFetch);
            case "backgroundSync" /* Protocol.BackgroundService.ServiceName.BackgroundSync */:
                return i18nString(UIStrings.backgroundSync);
            case "pushMessaging" /* Protocol.BackgroundService.ServiceName.PushMessaging */:
                return i18nString(UIStrings.pushMessaging);
            case "notifications" /* Protocol.BackgroundService.ServiceName.Notifications */:
                return i18nString(UIStrings.notifications);
            case "paymentHandler" /* Protocol.BackgroundService.ServiceName.PaymentHandler */:
                return i18nString(UIStrings.paymentHandler);
            case "periodicBackgroundSync" /* Protocol.BackgroundService.ServiceName.PeriodicBackgroundSync */:
                return i18nString(UIStrings.periodicBackgroundSync);
            default:
                return '';
        }
    }
    constructor(serviceName, model) {
        super(true);
        this.serviceName = serviceName;
        const kebabName = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.toKebabCase(serviceName);
        this.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.pane().context(kebabName)}`);
        this.model = model;
        this.model.addEventListener(_BackgroundServiceModel_js__WEBPACK_IMPORTED_MODULE_8__.Events.RecordingStateChanged, this.onRecordingStateChanged, this);
        this.model.addEventListener(_BackgroundServiceModel_js__WEBPACK_IMPORTED_MODULE_8__.Events.BackgroundServiceEventReceived, this.onEventReceived, this);
        this.model.enable(this.serviceName);
        this.serviceWorkerManager = this.model.target().model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ServiceWorkerManager.ServiceWorkerManager);
        this.securityOriginManager = this.model.target().model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.SecurityOriginManager.SecurityOriginManager);
        if (!this.securityOriginManager) {
            throw new Error('SecurityOriginManager instance is missing');
        }
        this.securityOriginManager.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.SecurityOriginManager.Events.MainSecurityOriginChanged, () => this.onOriginChanged());
        this.storageKeyManager =
            this.model.target().model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.StorageKeyManager.StorageKeyManager);
        if (!this.storageKeyManager) {
            throw new Error('StorageKeyManager instance is missing');
        }
        this.storageKeyManager.addEventListener("MainStorageKeyChanged" /* SDK.StorageKeyManager.Events.MainStorageKeyChanged */, () => this.onStorageKeyChanged());
        this.recordAction = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ActionRegistry.ActionRegistry.instance().getAction('background-service.toggle-recording');
        this.toolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.Toolbar('background-service-toolbar', this.contentElement);
        this.toolbar.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.toolbar()}`);
        void this.setupToolbar();
        /**
         * This will contain the DataGrid for displaying events, and a panel at the bottom for showing
         * extra metadata related to the selected event.
         */
        this.splitWidget = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.SplitWidget.SplitWidget(/* isVertical= */ false, /* secondIsSidebar= */ true);
        this.splitWidget.show(this.contentElement);
        this.dataGrid = this.createDataGrid();
        this.previewPanel = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Widget.VBox();
        this.previewPanel.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.pane('preview').track({ resize: true })}`);
        this.selectedEventNode = null;
        this.preview = null;
        this.splitWidget.setMainWidget(this.dataGrid.asWidget());
        this.splitWidget.setSidebarWidget(this.previewPanel);
        this.showPreview(null);
    }
    getDataGrid() {
        return this.dataGrid;
    }
    /**
     * Creates the toolbar UI element.
     */
    async setupToolbar() {
        this.toolbar.makeWrappable(true);
        this.recordButton = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.Toolbar.createActionButton(this.recordAction);
        this.toolbar.appendToolbarItem(this.recordButton);
        const clearButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.ToolbarButton(i18nString(UIStrings.clear), 'clear', undefined, 'background-service.clear');
        clearButton.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */, () => this.clearEvents());
        this.toolbar.appendToolbarItem(clearButton);
        this.toolbar.appendSeparator();
        this.saveButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.ToolbarButton(i18nString(UIStrings.saveEvents), 'download', undefined, 'background-service.save-events');
        this.saveButton.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */, _event => {
            void this.saveToFile();
        });
        this.saveButton.setEnabled(false);
        this.toolbar.appendToolbarItem(this.saveButton);
        this.toolbar.appendSeparator();
        this.originCheckbox = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.ToolbarCheckbox(i18nString(UIStrings.showEventsFromOtherDomains), i18nString(UIStrings.showEventsFromOtherDomains), () => this.refreshView(), 'show-events-from-other-domains');
        this.toolbar.appendToolbarItem(this.originCheckbox);
        this.storageKeyCheckbox = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.ToolbarCheckbox(i18nString(UIStrings.showEventsForOtherStorageKeys), i18nString(UIStrings.showEventsForOtherStorageKeys), () => this.refreshView(), 'show-events-from-other-partitions');
        this.toolbar.appendToolbarItem(this.storageKeyCheckbox);
    }
    /**
     * Displays all available events in the grid.
     */
    refreshView() {
        this.clearView();
        const events = this.model.getEvents(this.serviceName).filter(event => this.acceptEvent(event));
        for (const event of events) {
            this.addEvent(event);
        }
    }
    /**
     * Clears the grid and panel.
     */
    clearView() {
        this.selectedEventNode = null;
        this.dataGrid.rootNode().removeChildren();
        this.saveButton.setEnabled(false);
        this.showPreview(null);
    }
    /**
     * Called when the `Toggle Record` button is clicked.
     */
    toggleRecording() {
        this.model.setRecording(!this.recordButton.isToggled(), this.serviceName);
    }
    /**
     * Called when the `Clear` button is clicked.
     */
    clearEvents() {
        this.model.clearEvents(this.serviceName);
        this.clearView();
    }
    onRecordingStateChanged({ data: state }) {
        if (state.serviceName !== this.serviceName) {
            return;
        }
        if (state.isRecording === this.recordButton.isToggled()) {
            return;
        }
        this.recordButton.setToggled(state.isRecording);
        this.updateRecordButtonTooltip();
        this.showPreview(this.selectedEventNode);
    }
    updateRecordButtonTooltip() {
        const buttonTooltip = this.recordButton.isToggled() ? i18nString(UIStrings.stopRecordingEvents) :
            i18nString(UIStrings.startRecordingEvents);
        this.recordButton.setTitle(buttonTooltip, 'background-service.toggle-recording');
    }
    onEventReceived({ data: serviceEvent, }) {
        if (!this.acceptEvent(serviceEvent)) {
            return;
        }
        this.addEvent(serviceEvent);
    }
    onOriginChanged() {
        // No need to refresh the view if we are already showing all events.
        if (this.originCheckbox.checked()) {
            return;
        }
        this.refreshView();
    }
    onStorageKeyChanged() {
        if (this.storageKeyCheckbox.checked()) {
            return;
        }
        this.refreshView();
    }
    addEvent(serviceEvent) {
        const data = this.createEventData(serviceEvent);
        const dataNode = new EventDataNode(data, serviceEvent.eventMetadata);
        this.dataGrid.rootNode().appendChild(dataNode);
        if (this.dataGrid.rootNode().children.length === 1) {
            this.saveButton.setEnabled(true);
            this.showPreview(this.selectedEventNode);
        }
    }
    createDataGrid() {
        const columns = [
            { id: 'id', title: '#', weight: 1 },
            { id: 'timestamp', title: i18nString(UIStrings.timestamp), weight: 7 },
            { id: 'event-name', title: i18nString(UIStrings.event), weight: 8 },
            { id: 'origin', title: i18nString(UIStrings.origin), weight: 8 },
            { id: 'storage-key', title: i18nString(UIStrings.storageKey), weight: 8 },
            { id: 'sw-scope', title: i18nString(UIStrings.swScope), weight: 4 },
            { id: 'instance-id', title: i18nString(UIStrings.instanceId), weight: 8 },
        ];
        const dataGrid = new _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_4__.DataGrid.DataGridImpl({
            displayName: i18nString(UIStrings.backgroundServices),
            columns,
            editCallback: undefined,
            refreshCallback: undefined,
            deleteCallback: undefined,
        });
        dataGrid.setStriped(true);
        dataGrid.addEventListener("SelectedNode" /* DataGrid.DataGrid.Events.SelectedNode */, event => this.showPreview(event.data));
        return dataGrid;
    }
    /**
     * Creates the data object to pass to the DataGrid Node.
     */
    createEventData(serviceEvent) {
        let swScope = '';
        // Try to get the scope of the Service Worker registration to be more user-friendly.
        const registration = this.serviceWorkerManager ?
            this.serviceWorkerManager.registrations().get(serviceEvent.serviceWorkerRegistrationId) :
            undefined;
        if (registration) {
            swScope = registration.scopeURL.substr(registration.securityOrigin.length);
        }
        return {
            id: this.dataGrid.rootNode().children.length + 1,
            timestamp: _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.formatTimestamp(serviceEvent.timestamp * 1000, /* full= */ true),
            origin: serviceEvent.origin,
            'storage-key': serviceEvent.storageKey,
            'sw-scope': swScope,
            'event-name': serviceEvent.eventName,
            'instance-id': serviceEvent.instanceId,
        };
    }
    /**
     * Filtration function to know whether event should be shown or not.
     */
    acceptEvent(event) {
        if (event.service !== this.serviceName) {
            return false;
        }
        if (this.originCheckbox.checked() || this.storageKeyCheckbox.checked()) {
            return true;
        }
        // Trim the trailing '/'.
        const origin = event.origin.substr(0, event.origin.length - 1);
        const storageKey = event.storageKey;
        return this.securityOriginManager.securityOrigins().includes(origin) ||
            this.storageKeyManager.storageKeys().includes(storageKey);
    }
    createLearnMoreLink() {
        let url = 'https://developer.chrome.com/docs/devtools/javascript/background-services/?utm_source=devtools';
        switch (this.serviceName) {
            case "backgroundFetch" /* Protocol.BackgroundService.ServiceName.BackgroundFetch */:
                url += '#fetch';
                break;
            case "backgroundSync" /* Protocol.BackgroundService.ServiceName.BackgroundSync */:
                url += '#sync';
                break;
            case "pushMessaging" /* Protocol.BackgroundService.ServiceName.PushMessaging */:
                url += '#push';
                break;
            case "notifications" /* Protocol.BackgroundService.ServiceName.Notifications */:
                url += '#notifications';
                break;
            default:
                break;
        }
        return _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.XLink.XLink.create(url, i18nString(UIStrings.learnMore), undefined, undefined, 'learn-more');
    }
    showPreview(dataNode) {
        if (this.selectedEventNode && this.selectedEventNode === dataNode) {
            return;
        }
        this.selectedEventNode = dataNode;
        if (this.preview) {
            this.preview.detach();
        }
        if (this.selectedEventNode) {
            this.preview = this.selectedEventNode.createPreview();
            this.preview.show(this.previewPanel.contentElement);
            return;
        }
        this.preview = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Widget.VBox();
        this.preview.contentElement.classList.add('background-service-preview', 'fill');
        const centered = this.preview.contentElement.createChild('div');
        if (this.dataGrid.rootNode().children.length) {
            // Inform users that grid entries are clickable.
            centered.createChild('p').textContent = i18nString(UIStrings.selectAnEntryToViewMetadata);
        }
        else if (this.recordButton.isToggled()) {
            // Inform users that we are recording/waiting for events.
            const featureName = BackgroundServiceView.getUIString(this.serviceName).toLowerCase();
            centered.createChild('p').textContent = i18nString(UIStrings.recordingSActivity, { PH1: featureName });
            centered.createChild('p').textContent = i18nString(UIStrings.devtoolsWillRecordAllSActivity, { PH1: featureName });
        }
        else {
            const landingRecordButton = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.Toolbar.createActionButton(this.recordAction);
            const recordKey = document.createElement('b');
            recordKey.classList.add('background-service-shortcut');
            recordKey.textContent = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ShortcutRegistry.ShortcutRegistry.instance()
                .shortcutsForAction('background-service.toggle-recording')[0]
                .title();
            const inlineButton = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createInlineButton(landingRecordButton);
            inlineButton.classList.add('background-service-record-inline-button');
            centered.createChild('p').appendChild(_core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getFormatLocalizedString(str_, UIStrings.clickTheRecordButtonSOrHitSTo, { PH1: inlineButton, PH2: recordKey }));
            centered.appendChild(this.createLearnMoreLink());
        }
        this.preview.show(this.previewPanel.contentElement);
    }
    /**
     * Saves all currently displayed events in a file (JSON format).
     */
    async saveToFile() {
        const fileName = `${this.serviceName}-${_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.DateUtilities.toISO8601Compact(new Date())}.json`;
        const stream = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__.FileUtils.FileOutputStream();
        const accepted = await stream.open(fileName);
        if (!accepted) {
            return;
        }
        const events = this.model.getEvents(this.serviceName).filter(event => this.acceptEvent(event));
        await stream.write(JSON.stringify(events, undefined, 2));
        void stream.close();
    }
    wasShown() {
        super.wasShown();
        this.registerCSSFiles([_ui_legacy_emptyWidget_css_js__WEBPACK_IMPORTED_MODULE_5__["default"], _backgroundServiceView_css_js__WEBPACK_IMPORTED_MODULE_9__["default"]]);
    }
}
class EventDataNode extends _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_4__.DataGrid.DataGridNode {
    eventMetadata;
    constructor(data, eventMetadata) {
        super(data);
        this.eventMetadata = eventMetadata.sort((m1, m2) => _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.compare(m1.key, m2.key));
    }
    createPreview() {
        const preview = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Widget.VBox();
        preview.element.classList.add('background-service-metadata');
        preview.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.section('metadata')}`);
        for (const entry of this.eventMetadata) {
            const div = document.createElement('div');
            div.classList.add('background-service-metadata-entry');
            div.createChild('div', 'background-service-metadata-name').textContent = entry.key + ': ';
            if (entry.value) {
                div.createChild('div', 'background-service-metadata-value source-code').textContent = entry.value;
            }
            else {
                div.createChild('div', 'background-service-metadata-value background-service-empty-value').textContent =
                    i18nString(UIStrings.empty);
            }
            preview.element.appendChild(div);
        }
        if (!preview.element.children.length) {
            const div = document.createElement('div');
            div.classList.add('background-service-metadata-entry');
            div.createChild('div', 'background-service-metadata-name background-service-empty-value').textContent =
                i18nString(UIStrings.noMetadataForThisEvent);
            preview.element.appendChild(div);
        }
        return preview;
    }
}
class ActionDelegate {
    handleAction(context, actionId) {
        const view = context.flavor(BackgroundServiceView);
        switch (actionId) {
            case 'background-service.toggle-recording': {
                if (!view) {
                    throw new Error('BackgroundServiceView instance is missing');
                }
                view.toggleRecording();
                return true;
            }
        }
        return false;
    }
}
//# sourceMappingURL=BackgroundServiceView.js.map

/***/ }),

/***/ "./panels/application/backgroundServiceView.css.js":
/*!*********************************************************!*\
  !*** ./panels/application/backgroundServiceView.css.js ***!
  \*********************************************************/
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
 * Copyright 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.background-service-toolbar {
  background-color: var(--sys-color-cdt-base-container);
  border-bottom: var(--sys-color-divider);
}

.data-grid {
  flex: auto;
  border: none;
}

[slot="insertion-point-main"] {
  overflow: auto;
}

.background-service-preview {
  position: absolute;
  background-color: var(--sys-color-cdt-base-container);
  justify-content: center;
  align-items: center;
  overflow: auto;
  font-size: 13px;
  color: var(--sys-color-on-surface-subtle);
}

.background-service-preview > div {
  max-width: 450px;
  margin: 10px;
  text-align: center;
}

.background-service-preview > div > p {
  flex: none;
  white-space: pre-line;
}

.background-service-shortcut {
  color: var(--sys-color-on-surface-subtle);
}

.background-service-metadata {
  padding-left: 5px;
  padding-top: 10px;
}

.background-service-metadata-entry {
  padding-left: 10px;
  padding-bottom: 5px;
}

.background-service-metadata-name {
  color: var(--sys-color-on-surface-subtle);
  display: inline-block;
  margin-right: 0.25em;
  font-weight: bold;
}

.background-service-metadata-value {
  display: inline;
  margin-right: 1em;
  white-space: pre-wrap;
  word-break: break-all;
  user-select: text;
}

.background-service-empty-value {
  color: var(--sys-color-state-disabled);
  font-style: italic;
}

.background-service-record-inline-button {
  margin-bottom: 6px;
}

/*# sourceURL=backgroundServiceView.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);