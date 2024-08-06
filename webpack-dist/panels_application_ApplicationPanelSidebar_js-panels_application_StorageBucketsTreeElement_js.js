"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_application_ApplicationPanelSidebar_js-panels_application_StorageBucketsTreeElement_js"],{

/***/ "./panels/application/ApplicationPanelSidebar.js":
/*!*******************************************************!*\
  !*** ./panels/application/ApplicationPanelSidebar.js ***!
  \*******************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppManifestTreeElement: () => (/* binding */ AppManifestTreeElement),
/* harmony export */   ApplicationPanelSidebar: () => (/* binding */ ApplicationPanelSidebar),
/* harmony export */   BackgroundServiceTreeElement: () => (/* binding */ BackgroundServiceTreeElement),
/* harmony export */   ClearStorageTreeElement: () => (/* binding */ ClearStorageTreeElement),
/* harmony export */   CookieTreeElement: () => (/* binding */ CookieTreeElement),
/* harmony export */   DOMStorageTreeElement: () => (/* binding */ DOMStorageTreeElement),
/* harmony export */   FrameResourceTreeElement: () => (/* binding */ FrameResourceTreeElement),
/* harmony export */   FrameTreeElement: () => (/* binding */ FrameTreeElement),
/* harmony export */   IDBDatabaseTreeElement: () => (/* binding */ IDBDatabaseTreeElement),
/* harmony export */   IDBIndexTreeElement: () => (/* binding */ IDBIndexTreeElement),
/* harmony export */   IDBObjectStoreTreeElement: () => (/* binding */ IDBObjectStoreTreeElement),
/* harmony export */   IndexedDBTreeElement: () => (/* binding */ IndexedDBTreeElement),
/* harmony export */   ManifestChildTreeElement: () => (/* binding */ ManifestChildTreeElement),
/* harmony export */   ResourcesSection: () => (/* binding */ ResourcesSection),
/* harmony export */   ServiceWorkersTreeElement: () => (/* binding */ ServiceWorkersTreeElement),
/* harmony export */   StorageCategoryView: () => (/* binding */ StorageCategoryView)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _core_root_root_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/root/root.js */ "./core/root/root.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/issues_manager/issues_manager.js */ "./models/issues_manager/issues_manager.js");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */ var _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/components/legacy_wrapper/legacy_wrapper.js */ "./ui/components/legacy_wrapper/legacy_wrapper.js");
/* harmony import */ var _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ui/legacy/components/source_frame/source_frame.js */ "./ui/legacy/components/source_frame/source_frame.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ApplicationPanelTreeElement.js */ "./panels/application/ApplicationPanelTreeElement.js");
/* harmony import */ var _AppManifestView_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./AppManifestView.js */ "./panels/application/AppManifestView.js");
/* harmony import */ var _BackForwardCacheTreeElement_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./BackForwardCacheTreeElement.js */ "./panels/application/BackForwardCacheTreeElement.js");
/* harmony import */ var _BackgroundServiceModel_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./BackgroundServiceModel.js */ "./panels/application/BackgroundServiceModel.js");
/* harmony import */ var _BackgroundServiceView_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./BackgroundServiceView.js */ "./panels/application/BackgroundServiceView.js");
/* harmony import */ var _BounceTrackingMitigationsTreeElement_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./BounceTrackingMitigationsTreeElement.js */ "./panels/application/BounceTrackingMitigationsTreeElement.js");
/* harmony import */ var _components_components_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/components.js */ "./panels/application/components/components.js");
/* harmony import */ var _DOMStorageModel_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./DOMStorageModel.js */ "./panels/application/DOMStorageModel.js");
/* harmony import */ var _IndexedDBModel_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./IndexedDBModel.js */ "./panels/application/IndexedDBModel.js");
/* harmony import */ var _IndexedDBViews_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./IndexedDBViews.js */ "./panels/application/IndexedDBViews.js");
/* harmony import */ var _InterestGroupStorageModel_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./InterestGroupStorageModel.js */ "./panels/application/InterestGroupStorageModel.js");
/* harmony import */ var _InterestGroupTreeElement_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./InterestGroupTreeElement.js */ "./panels/application/InterestGroupTreeElement.js");
/* harmony import */ var _OpenedWindowDetailsView_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./OpenedWindowDetailsView.js */ "./panels/application/OpenedWindowDetailsView.js");
/* harmony import */ var _PreloadingTreeElement_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./PreloadingTreeElement.js */ "./panels/application/PreloadingTreeElement.js");
/* harmony import */ var _ReportingApiTreeElement_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./ReportingApiTreeElement.js */ "./panels/application/ReportingApiTreeElement.js");
/* harmony import */ var _resourcesSidebar_css_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./resourcesSidebar.css.js */ "./panels/application/resourcesSidebar.css.js");
/* harmony import */ var _ServiceWorkerCacheTreeElement_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./ServiceWorkerCacheTreeElement.js */ "./panels/application/ServiceWorkerCacheTreeElement.js");
/* harmony import */ var _ServiceWorkersView_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./ServiceWorkersView.js */ "./panels/application/ServiceWorkersView.js");
/* harmony import */ var _SharedStorageListTreeElement_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./SharedStorageListTreeElement.js */ "./panels/application/SharedStorageListTreeElement.js");
/* harmony import */ var _SharedStorageModel_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./SharedStorageModel.js */ "./panels/application/SharedStorageModel.js");
/* harmony import */ var _SharedStorageTreeElement_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./SharedStorageTreeElement.js */ "./panels/application/SharedStorageTreeElement.js");
/* harmony import */ var _StorageBucketsTreeElement_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./StorageBucketsTreeElement.js */ "./panels/application/StorageBucketsTreeElement.js");
/* harmony import */ var _StorageView_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./StorageView.js */ "./panels/application/StorageView.js");
/* harmony import */ var _TrustTokensTreeElement_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./TrustTokensTreeElement.js */ "./panels/application/TrustTokensTreeElement.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_PreloadingTreeElement_js__WEBPACK_IMPORTED_MODULE_24__, _StorageBucketsTreeElement_js__WEBPACK_IMPORTED_MODULE_32__]);
([_PreloadingTreeElement_js__WEBPACK_IMPORTED_MODULE_24__, _StorageBucketsTreeElement_js__WEBPACK_IMPORTED_MODULE_32__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/*
 * Copyright (C) 2007, 2008, 2010 Apple Inc.  All rights reserved.
 * Copyright (C) 2009 Joseph Pecoraro
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
 * THIS SOFTWARE IS PROVIDED BY APPLE AND ITS CONTRIBUTORS "AS IS" AND ANY
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



































const UIStrings = {
    /**
     *@description Text in Application Panel Sidebar of the Application panel
     */
    application: 'Application',
    /**
     *@description Text in Application Panel Sidebar of the Application panel
     */
    storage: 'Storage',
    /**
     *@description Text in Application Panel Sidebar of the Application panel
     */
    localStorage: 'Local storage',
    /**
     *@description Text in Application Panel Sidebar of the Application panel
     */
    sessionStorage: 'Session storage',
    /**
     *@description Text for web cookies
     */
    cookies: 'Cookies',
    /**
     *@description Text in Application Panel Sidebar of the Application panel
     */
    backgroundServices: 'Background services',
    /**
     *@description Text for rendering frames
     */
    frames: 'Frames',
    /**
     *@description Text that appears on a button for the manifest resource type filter.
     */
    manifest: 'Manifest',
    /**
     *@description Text in App Manifest View of the Application panel
     */
    noManifestDetected: 'No manifest detected',
    /**
     *@description Text in App Manifest View of the Application panel
     */
    appManifest: 'App Manifest',
    /**
     *@description Text in Application Panel Sidebar of the Application panel
     */
    indexeddb: 'IndexedDB',
    /**
     *@description A context menu item in the Application Panel Sidebar of the Application panel
     */
    refreshIndexeddb: 'Refresh IndexedDB',
    /**
     *@description Tooltip in Application Panel Sidebar of the Application panel
     *@example {1.0} PH1
     */
    versionSEmpty: 'Version: {PH1} (empty)',
    /**
     *@description Tooltip in Application Panel Sidebar of the Application panel
     *@example {1.0} PH1
     */
    versionS: 'Version: {PH1}',
    /**
     *@description Text to clear content
     */
    clear: 'Clear',
    /**
     *@description Text in Application Panel Sidebar of the Application panel
     *@example {"key path"} PH1
     */
    keyPathS: 'Key path: {PH1}',
    /**
     *@description Text in Application Panel Sidebar of the Application panel
     */
    localFiles: 'Local Files',
    /**
     *@description Tooltip in Application Panel Sidebar of the Application panel
     *@example {https://example.com} PH1
     */
    cookiesUsedByFramesFromS: 'Cookies used by frames from {PH1}',
    /**
     *@description Text in Frames View of the Application panel
     */
    openedWindows: 'Opened Windows',
    /**
     *@description Label for plural of worker type: web workers
     */
    webWorkers: 'Web Workers',
    /**
     *@description Label in frame tree for unavailable document
     */
    documentNotAvailable: 'Document not available',
    /**
     *@description Description of content of unavailable document in Application panel
     */
    theContentOfThisDocumentHasBeen: 'The content of this document has been generated dynamically via \'document.write()\'.',
    /**
     *@description Text in Frames View of the Application panel
     */
    windowWithoutTitle: 'Window without title',
    /**
     *@description Default name for worker
     */
    worker: 'worker',
    /**
     * @description Aria text for screen reader to announce they can scroll to top of manifest if invoked
     */
    onInvokeManifestAlert: 'Manifest: Invoke to scroll to the top of manifest',
    /**
     * @description Aria text for screen reader to announce they can scroll to a section if invoked
     * @example {"Identity"} PH1
     */
    beforeInvokeAlert: '{PH1}: Invoke to scroll to this section in manifest',
    /**
     * @description Alert message for screen reader to announce which subsection is being scrolled to
     * @example {"Identity"} PH1
     */
    onInvokeAlert: 'Scrolled to {PH1}',
    /**
     * @description Application sidebar panel
     */
    applicationSidebarPanel: 'Application panel sidebar',
    /**
     *@description Tooltip in Application Panel Sidebar of the Application panel
     *@example {https://example.com} PH1
     */
    thirdPartyPhaseout: 'Cookies from {PH1} may have been blocked due to third-party cookie phaseout.',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/application/ApplicationPanelSidebar.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
function assertNotMainTarget(targetId) {
    if (targetId === 'main') {
        throw new Error('Unexpected main target id');
    }
}
class ApplicationPanelSidebar extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Widget.VBox {
    panel;
    sidebarTree;
    applicationTreeElement;
    serviceWorkersTreeElement;
    localStorageListTreeElement;
    sessionStorageListTreeElement;
    indexedDBListTreeElement;
    interestGroupTreeElement;
    cookieListTreeElement;
    trustTokensTreeElement;
    cacheStorageListTreeElement;
    sharedStorageListTreeElement;
    storageBucketsTreeElement;
    backForwardCacheListTreeElement;
    backgroundFetchTreeElement;
    backgroundSyncTreeElement;
    bounceTrackingMitigationsTreeElement;
    notificationsTreeElement;
    paymentHandlerTreeElement;
    periodicBackgroundSyncTreeElement;
    pushMessagingTreeElement;
    reportingApiTreeElement;
    preloadingSummaryTreeElement;
    resourcesSection;
    domStorageTreeElements;
    sharedStorageTreeElements;
    domains;
    // Holds main frame target.
    target;
    previousHoveredElement;
    sharedStorageTreeElementDispatcher;
    constructor(panel) {
        super();
        this.panel = panel;
        this.sidebarTree = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.TreeOutline.TreeOutlineInShadow();
        this.sidebarTree.element.classList.add('resources-sidebar');
        this.sidebarTree.element.classList.add('filter-all');
        // Listener needs to have been set up before the elements are added
        this.sidebarTree.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.TreeOutline.Events.ElementAttached, this.treeElementAdded, this);
        this.contentElement.appendChild(this.sidebarTree.element);
        const applicationSectionTitle = i18nString(UIStrings.application);
        this.applicationTreeElement = this.addSidebarSection(applicationSectionTitle, 'application');
        const applicationPanelSidebar = this.applicationTreeElement.treeOutline?.contentElement;
        if (applicationPanelSidebar) {
            applicationPanelSidebar.ariaLabel = i18nString(UIStrings.applicationSidebarPanel);
        }
        const manifestTreeElement = new AppManifestTreeElement(panel);
        this.applicationTreeElement.appendChild(manifestTreeElement);
        manifestTreeElement.generateChildren();
        this.serviceWorkersTreeElement = new ServiceWorkersTreeElement(panel);
        this.applicationTreeElement.appendChild(this.serviceWorkersTreeElement);
        const clearStorageTreeElement = new ClearStorageTreeElement(panel);
        this.applicationTreeElement.appendChild(clearStorageTreeElement);
        const storageSectionTitle = i18nString(UIStrings.storage);
        const storageTreeElement = this.addSidebarSection(storageSectionTitle, 'storage');
        this.localStorageListTreeElement =
            new _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_11__.ExpandableApplicationPanelTreeElement(panel, i18nString(UIStrings.localStorage), 'local-storage');
        this.localStorageListTreeElement.setLink('https://developer.chrome.com/docs/devtools/storage/localstorage/?utm_source=devtools');
        const localStorageIcon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_7__.Icon.create('table');
        this.localStorageListTreeElement.setLeadingIcons([localStorageIcon]);
        storageTreeElement.appendChild(this.localStorageListTreeElement);
        this.sessionStorageListTreeElement =
            new _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_11__.ExpandableApplicationPanelTreeElement(panel, i18nString(UIStrings.sessionStorage), 'session-storage');
        this.sessionStorageListTreeElement.setLink('https://developer.chrome.com/docs/devtools/storage/sessionstorage/?utm_source=devtools');
        const sessionStorageIcon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_7__.Icon.create('table');
        this.sessionStorageListTreeElement.setLeadingIcons([sessionStorageIcon]);
        storageTreeElement.appendChild(this.sessionStorageListTreeElement);
        this.indexedDBListTreeElement = new IndexedDBTreeElement(panel);
        this.indexedDBListTreeElement.setLink('https://developer.chrome.com/docs/devtools/storage/indexeddb/?utm_source=devtools');
        storageTreeElement.appendChild(this.indexedDBListTreeElement);
        this.cookieListTreeElement =
            new _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_11__.ExpandableApplicationPanelTreeElement(panel, i18nString(UIStrings.cookies), 'cookies');
        this.cookieListTreeElement.setLink('https://developer.chrome.com/docs/devtools/storage/cookies/?utm_source=devtools');
        const cookieIcon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_7__.Icon.create('cookie');
        this.cookieListTreeElement.setLeadingIcons([cookieIcon]);
        storageTreeElement.appendChild(this.cookieListTreeElement);
        this.trustTokensTreeElement = new _TrustTokensTreeElement_js__WEBPACK_IMPORTED_MODULE_34__.TrustTokensTreeElement(panel);
        storageTreeElement.appendChild(this.trustTokensTreeElement);
        this.interestGroupTreeElement = new _InterestGroupTreeElement_js__WEBPACK_IMPORTED_MODULE_22__.InterestGroupTreeElement(panel);
        storageTreeElement.appendChild(this.interestGroupTreeElement);
        this.sharedStorageListTreeElement = new _SharedStorageListTreeElement_js__WEBPACK_IMPORTED_MODULE_29__.SharedStorageListTreeElement(panel);
        storageTreeElement.appendChild(this.sharedStorageListTreeElement);
        this.cacheStorageListTreeElement = new _ServiceWorkerCacheTreeElement_js__WEBPACK_IMPORTED_MODULE_27__.ServiceWorkerCacheTreeElement(panel);
        storageTreeElement.appendChild(this.cacheStorageListTreeElement);
        this.storageBucketsTreeElement = new _StorageBucketsTreeElement_js__WEBPACK_IMPORTED_MODULE_32__.StorageBucketsTreeParentElement(panel);
        storageTreeElement.appendChild(this.storageBucketsTreeElement);
        const backgroundServiceSectionTitle = i18nString(UIStrings.backgroundServices);
        const backgroundServiceTreeElement = this.addSidebarSection(backgroundServiceSectionTitle, 'background-services');
        this.backForwardCacheListTreeElement = new _BackForwardCacheTreeElement_js__WEBPACK_IMPORTED_MODULE_13__.BackForwardCacheTreeElement(panel);
        backgroundServiceTreeElement.appendChild(this.backForwardCacheListTreeElement);
        this.backgroundFetchTreeElement =
            new BackgroundServiceTreeElement(panel, "backgroundFetch" /* Protocol.BackgroundService.ServiceName.BackgroundFetch */);
        backgroundServiceTreeElement.appendChild(this.backgroundFetchTreeElement);
        this.backgroundSyncTreeElement =
            new BackgroundServiceTreeElement(panel, "backgroundSync" /* Protocol.BackgroundService.ServiceName.BackgroundSync */);
        backgroundServiceTreeElement.appendChild(this.backgroundSyncTreeElement);
        this.bounceTrackingMitigationsTreeElement = new _BounceTrackingMitigationsTreeElement_js__WEBPACK_IMPORTED_MODULE_16__.BounceTrackingMitigationsTreeElement(panel);
        backgroundServiceTreeElement.appendChild(this.bounceTrackingMitigationsTreeElement);
        this.notificationsTreeElement =
            new BackgroundServiceTreeElement(panel, "notifications" /* Protocol.BackgroundService.ServiceName.Notifications */);
        backgroundServiceTreeElement.appendChild(this.notificationsTreeElement);
        this.paymentHandlerTreeElement =
            new BackgroundServiceTreeElement(panel, "paymentHandler" /* Protocol.BackgroundService.ServiceName.PaymentHandler */);
        backgroundServiceTreeElement.appendChild(this.paymentHandlerTreeElement);
        this.periodicBackgroundSyncTreeElement =
            new BackgroundServiceTreeElement(panel, "periodicBackgroundSync" /* Protocol.BackgroundService.ServiceName.PeriodicBackgroundSync */);
        backgroundServiceTreeElement.appendChild(this.periodicBackgroundSyncTreeElement);
        if (_core_root_root_js__WEBPACK_IMPORTED_MODULE_4__.Runtime.experiments.isEnabled("preloading-status-panel" /* Root.Runtime.ExperimentName.PRELOADING_STATUS_PANEL */)) {
            this.preloadingSummaryTreeElement = new _PreloadingTreeElement_js__WEBPACK_IMPORTED_MODULE_24__.PreloadingSummaryTreeElement(panel);
            backgroundServiceTreeElement.appendChild(this.preloadingSummaryTreeElement);
            this.preloadingSummaryTreeElement.constructChildren(panel);
        }
        this.pushMessagingTreeElement =
            new BackgroundServiceTreeElement(panel, "pushMessaging" /* Protocol.BackgroundService.ServiceName.PushMessaging */);
        backgroundServiceTreeElement.appendChild(this.pushMessagingTreeElement);
        this.reportingApiTreeElement = new _ReportingApiTreeElement_js__WEBPACK_IMPORTED_MODULE_25__.ReportingApiTreeElement(panel);
        backgroundServiceTreeElement.appendChild(this.reportingApiTreeElement);
        const resourcesSectionTitle = i18nString(UIStrings.frames);
        const resourcesTreeElement = this.addSidebarSection(resourcesSectionTitle, 'frames');
        this.resourcesSection = new ResourcesSection(panel, resourcesTreeElement);
        this.domStorageTreeElements = new Map();
        this.sharedStorageTreeElements = new Map();
        this.domains = {};
        this.sidebarTree.contentElement.addEventListener('mousemove', this.onmousemove.bind(this), false);
        this.sidebarTree.contentElement.addEventListener('mouseleave', this.onmouseleave.bind(this), false);
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().observeTargets(this, { scoped: true });
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.ResourceTreeModel.ResourceTreeModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.ResourceTreeModel.Events.FrameNavigated, this.frameNavigated, this, { scoped: true });
        const selection = this.panel.lastSelectedItemPath();
        if (!selection.length) {
            manifestTreeElement.select();
        }
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().observeModels(_DOMStorageModel_js__WEBPACK_IMPORTED_MODULE_18__.DOMStorageModel, {
            modelAdded: (model) => this.domStorageModelAdded(model),
            modelRemoved: (model) => this.domStorageModelRemoved(model),
        }, { scoped: true });
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().observeModels(_IndexedDBModel_js__WEBPACK_IMPORTED_MODULE_19__.IndexedDBModel, {
            modelAdded: (model) => this.indexedDBModelAdded(model),
            modelRemoved: (model) => this.indexedDBModelRemoved(model),
        }, { scoped: true });
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().observeModels(_InterestGroupStorageModel_js__WEBPACK_IMPORTED_MODULE_21__.InterestGroupStorageModel, {
            modelAdded: (model) => this.interestGroupModelAdded(model),
            modelRemoved: (model) => this.interestGroupModelRemoved(model),
        }, { scoped: true });
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().observeModels(_SharedStorageModel_js__WEBPACK_IMPORTED_MODULE_30__.SharedStorageModel, {
            modelAdded: (model) => this.sharedStorageModelAdded(model).catch(err => {
                console.error(err);
            }),
            modelRemoved: (model) => this.sharedStorageModelRemoved(model),
        }, { scoped: true });
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().observeModels(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.StorageBucketsModel.StorageBucketsModel, {
            modelAdded: (model) => this.storageBucketsModelAdded(model),
            modelRemoved: (model) => this.storageBucketsModelRemoved(model),
        }, { scoped: true });
        this.sharedStorageTreeElementDispatcher =
            new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper();
        // Work-around for crbug.com/1152713: Something is wrong with custom scrollbars and size containment.
        // @ts-ignore
        this.contentElement.style.contain = 'layout style';
    }
    addSidebarSection(title, jslogContext) {
        const treeElement = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.TreeOutline.TreeElement(title, true, jslogContext);
        treeElement.listItemElement.classList.add('storage-group-list-item');
        treeElement.setCollapsible(false);
        treeElement.selectable = false;
        this.sidebarTree.appendChild(treeElement);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ARIAUtils.markAsHeading(treeElement.listItemElement, 3);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ARIAUtils.setLabel(treeElement.childrenListElement, title);
        return treeElement;
    }
    targetAdded(target) {
        if (target !== target.outermostTarget()) {
            return;
        }
        this.target = target;
        const interestGroupModel = target.model(_InterestGroupStorageModel_js__WEBPACK_IMPORTED_MODULE_21__.InterestGroupStorageModel);
        if (interestGroupModel) {
            interestGroupModel.addEventListener("InterestGroupAccess" /* InterestGroupModelEvents.InterestGroupAccess */, this.interestGroupAccess, this);
        }
        const resourceTreeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.ResourceTreeModel.ResourceTreeModel);
        if (!resourceTreeModel) {
            return;
        }
        if (resourceTreeModel.cachedResourcesLoaded()) {
            this.initialize();
        }
        resourceTreeModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.ResourceTreeModel.Events.CachedResourcesLoaded, this.initialize, this);
        resourceTreeModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.ResourceTreeModel.Events.WillLoadCachedResources, this.resetWithFrames, this);
    }
    targetRemoved(target) {
        if (target !== this.target) {
            return;
        }
        delete this.target;
        const resourceTreeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.ResourceTreeModel.ResourceTreeModel);
        if (resourceTreeModel) {
            resourceTreeModel.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.ResourceTreeModel.Events.CachedResourcesLoaded, this.initialize, this);
            resourceTreeModel.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.ResourceTreeModel.Events.WillLoadCachedResources, this.resetWithFrames, this);
        }
        const interestGroupModel = target.model(_InterestGroupStorageModel_js__WEBPACK_IMPORTED_MODULE_21__.InterestGroupStorageModel);
        if (interestGroupModel) {
            interestGroupModel.removeEventListener("InterestGroupAccess" /* InterestGroupModelEvents.InterestGroupAccess */, this.interestGroupAccess, this);
        }
        this.resetWithFrames();
    }
    focus() {
        this.sidebarTree.focus();
    }
    initialize() {
        for (const frame of _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.ResourceTreeModel.ResourceTreeModel.frames()) {
            this.addCookieDocument(frame);
        }
        const interestGroupModel = this.target && this.target.model(_InterestGroupStorageModel_js__WEBPACK_IMPORTED_MODULE_21__.InterestGroupStorageModel);
        if (interestGroupModel) {
            interestGroupModel.enable();
        }
        this.cacheStorageListTreeElement.initialize();
        const backgroundServiceModel = this.target && this.target.model(_BackgroundServiceModel_js__WEBPACK_IMPORTED_MODULE_14__.BackgroundServiceModel) || null;
        this.backgroundFetchTreeElement && this.backgroundFetchTreeElement.initialize(backgroundServiceModel);
        this.backgroundSyncTreeElement && this.backgroundSyncTreeElement.initialize(backgroundServiceModel);
        this.notificationsTreeElement.initialize(backgroundServiceModel);
        this.paymentHandlerTreeElement.initialize(backgroundServiceModel);
        this.periodicBackgroundSyncTreeElement.initialize(backgroundServiceModel);
        this.pushMessagingTreeElement.initialize(backgroundServiceModel);
        this.storageBucketsTreeElement?.initialize();
        if (_core_root_root_js__WEBPACK_IMPORTED_MODULE_4__.Runtime.experiments.isEnabled("preloading-status-panel" /* Root.Runtime.ExperimentName.PRELOADING_STATUS_PANEL */)) {
            const preloadingModel = this.target?.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.PreloadingModel.PreloadingModel);
            if (preloadingModel) {
                this.preloadingSummaryTreeElement?.initialize(preloadingModel);
            }
        }
    }
    domStorageModelAdded(model) {
        model.enable();
        model.storages().forEach(this.addDOMStorage.bind(this));
        model.addEventListener("DOMStorageAdded" /* DOMStorageModelEvents.DOMStorageAdded */, this.domStorageAdded, this);
        model.addEventListener("DOMStorageRemoved" /* DOMStorageModelEvents.DOMStorageRemoved */, this.domStorageRemoved, this);
    }
    domStorageModelRemoved(model) {
        model.storages().forEach(this.removeDOMStorage.bind(this));
        model.removeEventListener("DOMStorageAdded" /* DOMStorageModelEvents.DOMStorageAdded */, this.domStorageAdded, this);
        model.removeEventListener("DOMStorageRemoved" /* DOMStorageModelEvents.DOMStorageRemoved */, this.domStorageRemoved, this);
    }
    indexedDBModelAdded(model) {
        model.enable();
        this.indexedDBListTreeElement.addIndexedDBForModel(model);
    }
    indexedDBModelRemoved(model) {
        this.indexedDBListTreeElement.removeIndexedDBForModel(model);
    }
    interestGroupModelAdded(model) {
        model.enable();
        model.addEventListener("InterestGroupAccess" /* InterestGroupModelEvents.InterestGroupAccess */, this.interestGroupAccess, this);
    }
    interestGroupModelRemoved(model) {
        model.disable();
        model.removeEventListener("InterestGroupAccess" /* InterestGroupModelEvents.InterestGroupAccess */, this.interestGroupAccess, this);
    }
    async sharedStorageModelAdded(model) {
        await model.enable();
        for (const storage of model.storages()) {
            await this.addSharedStorage(storage);
        }
        model.addEventListener("SharedStorageAdded" /* SharedStorageModelEvents.SharedStorageAdded */, this.sharedStorageAdded, this);
        model.addEventListener("SharedStorageRemoved" /* SharedStorageModelEvents.SharedStorageRemoved */, this.sharedStorageRemoved, this);
        model.addEventListener("SharedStorageAccess" /* SharedStorageModelEvents.SharedStorageAccess */, this.sharedStorageAccess, this);
    }
    sharedStorageModelRemoved(model) {
        model.disable();
        for (const storage of model.storages()) {
            this.removeSharedStorage(storage);
        }
        model.removeEventListener("SharedStorageAdded" /* SharedStorageModelEvents.SharedStorageAdded */, this.sharedStorageAdded, this);
        model.removeEventListener("SharedStorageRemoved" /* SharedStorageModelEvents.SharedStorageRemoved */, this.sharedStorageRemoved, this);
        model.removeEventListener("SharedStorageAccess" /* SharedStorageModelEvents.SharedStorageAccess */, this.sharedStorageAccess, this);
    }
    storageBucketsModelAdded(model) {
        model.enable();
    }
    storageBucketsModelRemoved(model) {
        this.storageBucketsTreeElement?.removeBucketsForModel(model);
    }
    resetWithFrames() {
        this.resourcesSection.reset();
        this.reset();
    }
    treeElementAdded(event) {
        // On tree item selection its itemURL and those of its parents are persisted.
        // On reload/navigation we check for matches starting from the root on the
        // path to the current element. Matching nodes are expanded until we hit a
        // mismatch. This way we ensure that the longest matching path starting from
        // the root is expanded, even if we cannot match the whole path.
        const selection = this.panel.lastSelectedItemPath();
        if (!selection.length) {
            return;
        }
        const element = event.data;
        const elementPath = [element];
        for (let parent = element.parent; parent && 'itemURL' in parent && parent.itemURL; parent = parent.parent) {
            elementPath.push(parent);
        }
        let i = selection.length - 1;
        let j = elementPath.length - 1;
        while (i >= 0 && j >= 0 && selection[i] === elementPath[j].itemURL) {
            if (!elementPath[j].expanded) {
                if (i > 0) {
                    elementPath[j].expand();
                }
                if (!elementPath[j].selected) {
                    elementPath[j].select();
                }
            }
            i--;
            j--;
        }
    }
    reset() {
        this.domains = {};
        this.cookieListTreeElement.removeChildren();
        this.interestGroupTreeElement.clearEvents();
    }
    frameNavigated(event) {
        const frame = event.data;
        if (frame.isOutermostFrame()) {
            this.reset();
        }
        this.addCookieDocument(frame);
    }
    interestGroupAccess(event) {
        this.interestGroupTreeElement.addEvent(event.data);
    }
    addCookieDocument(frame) {
        // In case the current frame was unreachable, show its cookies
        // instead of the error interstitials because they might help to
        // debug why the frame was unreachable.
        const urlToParse = frame.unreachableUrl() || frame.url;
        const parsedURL = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL.fromString(urlToParse);
        if (!parsedURL || (parsedURL.scheme !== 'http' && parsedURL.scheme !== 'https' && parsedURL.scheme !== 'file')) {
            return;
        }
        const domain = parsedURL.securityOrigin();
        if (!this.domains[domain]) {
            this.domains[domain] = true;
            const cookieDomainTreeElement = new CookieTreeElement(this.panel, frame, parsedURL);
            this.cookieListTreeElement.appendChild(cookieDomainTreeElement);
        }
    }
    domStorageAdded(event) {
        const domStorage = event.data;
        this.addDOMStorage(domStorage);
    }
    addDOMStorage(domStorage) {
        console.assert(!this.domStorageTreeElements.get(domStorage));
        console.assert(Boolean(domStorage.storageKey));
        const domStorageTreeElement = new DOMStorageTreeElement(this.panel, domStorage);
        this.domStorageTreeElements.set(domStorage, domStorageTreeElement);
        if (domStorage.isLocalStorage) {
            this.localStorageListTreeElement.appendChild(domStorageTreeElement, comparator);
        }
        else {
            this.sessionStorageListTreeElement.appendChild(domStorageTreeElement, comparator);
        }
        function comparator(a, b) {
            const aTitle = a.titleAsText().toLocaleLowerCase();
            const bTitle = b.titleAsText().toLocaleUpperCase();
            return aTitle.localeCompare(bTitle);
        }
    }
    domStorageRemoved(event) {
        const domStorage = event.data;
        this.removeDOMStorage(domStorage);
    }
    removeDOMStorage(domStorage) {
        const treeElement = this.domStorageTreeElements.get(domStorage);
        if (!treeElement) {
            return;
        }
        const wasSelected = treeElement.selected;
        const parentListTreeElement = treeElement.parent;
        if (parentListTreeElement) {
            parentListTreeElement.removeChild(treeElement);
            if (wasSelected) {
                parentListTreeElement.select();
            }
        }
        this.domStorageTreeElements.delete(domStorage);
    }
    async sharedStorageAdded(event) {
        await this.addSharedStorage(event.data);
    }
    async addSharedStorage(sharedStorage) {
        const sharedStorageTreeElement = await _SharedStorageTreeElement_js__WEBPACK_IMPORTED_MODULE_31__.SharedStorageTreeElement.createElement(this.panel, sharedStorage);
        // A tree element for `sharedStorage.securityOrigin` may have been added while we were waiting for `sharedStorageTreeElement` to be created.
        if (this.sharedStorageTreeElements.has(sharedStorage.securityOrigin)) {
            return;
        }
        this.sharedStorageTreeElements.set(sharedStorage.securityOrigin, sharedStorageTreeElement);
        this.sharedStorageListTreeElement.appendChild(sharedStorageTreeElement);
        this.sharedStorageTreeElementDispatcher.dispatchEventToListeners("SharedStorageTreeElementAdded" /* SharedStorageTreeElementDispatcher.Events.SharedStorageTreeElementAdded */, { origin: sharedStorage.securityOrigin });
    }
    sharedStorageRemoved(event) {
        this.removeSharedStorage(event.data);
    }
    removeSharedStorage(sharedStorage) {
        const treeElement = this.sharedStorageTreeElements.get(sharedStorage.securityOrigin);
        if (!treeElement) {
            return;
        }
        const wasSelected = treeElement.selected;
        const parentListTreeElement = treeElement.parent;
        if (parentListTreeElement) {
            parentListTreeElement.removeChild(treeElement);
            parentListTreeElement.setExpandable(parentListTreeElement.childCount() > 0);
            if (wasSelected) {
                parentListTreeElement.select();
            }
        }
        this.sharedStorageTreeElements.delete(sharedStorage.securityOrigin);
    }
    sharedStorageAccess(event) {
        this.sharedStorageListTreeElement.addEvent(event.data);
    }
    async showResource(resource, line, column) {
        await this.resourcesSection.revealResource(resource, line, column);
    }
    showFrame(frame) {
        this.resourcesSection.revealAndSelectFrame(frame);
    }
    showFileSystem(view) {
        this.innerShowView(view);
    }
    innerShowView(view) {
        this.panel.showView(view);
    }
    showPreloadingRuleSetView(revealInfo) {
        if (this.preloadingSummaryTreeElement) {
            this.preloadingSummaryTreeElement.expandAndRevealRuleSet(revealInfo);
        }
    }
    showPreloadingAttemptViewWithFilter(filter) {
        if (this.preloadingSummaryTreeElement) {
            this.preloadingSummaryTreeElement.expandAndRevealAttempts(filter);
        }
    }
    onmousemove(event) {
        const nodeUnderMouse = event.target;
        if (!nodeUnderMouse) {
            return;
        }
        const listNode = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.UIUtils.enclosingNodeOrSelfWithNodeName(nodeUnderMouse, 'li');
        if (!listNode) {
            return;
        }
        const element = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.TreeOutline.TreeElement.getTreeElementBylistItemNode(listNode);
        if (this.previousHoveredElement === element) {
            return;
        }
        if (this.previousHoveredElement) {
            this.previousHoveredElement.hovered = false;
            delete this.previousHoveredElement;
        }
        if (element instanceof FrameTreeElement) {
            this.previousHoveredElement = element;
            element.hovered = true;
        }
    }
    onmouseleave(_event) {
        if (this.previousHoveredElement) {
            this.previousHoveredElement.hovered = false;
            delete this.previousHoveredElement;
        }
    }
    wasShown() {
        super.wasShown();
        this.sidebarTree.registerCSSFiles([_resourcesSidebar_css_js__WEBPACK_IMPORTED_MODULE_26__["default"]]);
    }
}
class BackgroundServiceTreeElement extends _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_11__.ApplicationPanelTreeElement {
    serviceName;
    view;
    model;
    selectedInternal;
    constructor(storagePanel, serviceName) {
        super(storagePanel, _BackgroundServiceView_js__WEBPACK_IMPORTED_MODULE_15__.BackgroundServiceView.getUIString(serviceName), false, _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.StringUtilities.toKebabCase(serviceName));
        this.serviceName = serviceName;
        /* Whether the element has been selected. */
        this.selectedInternal = false;
        this.view = null;
        this.model = null;
        const backgroundServiceIcon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_7__.Icon.create(this.getIconType());
        this.setLeadingIcons([backgroundServiceIcon]);
    }
    getIconType() {
        switch (this.serviceName) {
            case "backgroundFetch" /* Protocol.BackgroundService.ServiceName.BackgroundFetch */:
                return 'arrow-up-down';
            case "backgroundSync" /* Protocol.BackgroundService.ServiceName.BackgroundSync */:
                return 'sync';
            case "pushMessaging" /* Protocol.BackgroundService.ServiceName.PushMessaging */:
                return 'cloud';
            case "notifications" /* Protocol.BackgroundService.ServiceName.Notifications */:
                return 'bell';
            case "paymentHandler" /* Protocol.BackgroundService.ServiceName.PaymentHandler */:
                return 'credit-card';
            case "periodicBackgroundSync" /* Protocol.BackgroundService.ServiceName.PeriodicBackgroundSync */:
                return 'watch';
            default:
                console.error(`Service ${this.serviceName} does not have a dedicated icon`);
                return 'table';
        }
    }
    initialize(model) {
        this.model = model;
        // Show the view if the model was initialized after selection.
        if (this.selectedInternal && !this.view) {
            this.onselect(false);
        }
    }
    get itemURL() {
        return `background-service://${this.serviceName}`;
    }
    get selectable() {
        if (!this.model) {
            return false;
        }
        return super.selectable;
    }
    onselect(selectedByUser) {
        super.onselect(selectedByUser);
        this.selectedInternal = true;
        if (!this.model) {
            return false;
        }
        if (!this.view) {
            this.view = new _BackgroundServiceView_js__WEBPACK_IMPORTED_MODULE_15__.BackgroundServiceView(this.serviceName, this.model);
        }
        this.showView(this.view);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Context.Context.instance().setFlavor(_BackgroundServiceView_js__WEBPACK_IMPORTED_MODULE_15__.BackgroundServiceView, this.view);
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.panelShown('background_service_' + this.serviceName);
        return false;
    }
}
class ServiceWorkersTreeElement extends _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_11__.ApplicationPanelTreeElement {
    view;
    constructor(storagePanel) {
        super(storagePanel, _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.lockedString('Service workers'), false, 'service-workers');
        const icon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_7__.Icon.create('gears');
        this.setLeadingIcons([icon]);
    }
    get itemURL() {
        return 'service-workers://';
    }
    onselect(selectedByUser) {
        super.onselect(selectedByUser);
        if (!this.view) {
            this.view = new _ServiceWorkersView_js__WEBPACK_IMPORTED_MODULE_28__.ServiceWorkersView();
        }
        this.showView(this.view);
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.panelShown('service-workers');
        return false;
    }
}
class AppManifestTreeElement extends _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_11__.ApplicationPanelTreeElement {
    view;
    constructor(storagePanel) {
        super(storagePanel, i18nString(UIStrings.manifest), true, 'manifest');
        const icon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_7__.Icon.create('document');
        this.setLeadingIcons([icon]);
        self.onInvokeElement(this.listItemElement, this.onInvoke.bind(this));
        const emptyView = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.EmptyWidget.EmptyWidget(i18nString(UIStrings.noManifestDetected));
        // TODO(crbug.com/1156978): Replace UI.ReportView.ReportView with ReportView.ts web component.
        const reportView = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ReportView.ReportView(i18nString(UIStrings.appManifest));
        this.view = new _AppManifestView_js__WEBPACK_IMPORTED_MODULE_12__.AppManifestView(emptyView, reportView, new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Throttler.Throttler(1000));
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ARIAUtils.setLabel(this.listItemElement, i18nString(UIStrings.onInvokeManifestAlert));
        const handleExpansion = (hasManifest) => {
            this.setExpandable(hasManifest);
        };
        this.view.addEventListener("ManifestDetected" /* AppManifestViewEvents.ManifestDetected */, event => handleExpansion(event.data));
    }
    get itemURL() {
        return 'manifest://';
    }
    onselect(selectedByUser) {
        super.onselect(selectedByUser);
        this.showView(this.view);
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.panelShown('app-manifest');
        return false;
    }
    generateChildren() {
        const staticSections = this.view.getStaticSections();
        for (const section of staticSections) {
            const sectionElement = section.getTitleElement();
            const childTitle = section.title();
            const sectionFieldElement = section.getFieldElement();
            const child = new ManifestChildTreeElement(this.resourcesPanel, sectionElement, childTitle, sectionFieldElement, section.jslogContext || '');
            this.appendChild(child);
        }
    }
    onInvoke() {
        this.view.getManifestElement().scrollIntoView();
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ARIAUtils.alert(i18nString(UIStrings.onInvokeAlert, { PH1: this.listItemElement.title }));
    }
    showManifestView() {
        this.showView(this.view);
    }
}
class ManifestChildTreeElement extends _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_11__.ApplicationPanelTreeElement {
    #sectionElement;
    #sectionFieldElement;
    constructor(storagePanel, element, childTitle, fieldElement, jslogContext) {
        super(storagePanel, childTitle, false, jslogContext);
        const icon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_7__.Icon.create('document');
        this.setLeadingIcons([icon]);
        this.#sectionElement = element;
        this.#sectionFieldElement = fieldElement;
        self.onInvokeElement(this.listItemElement, this.onInvoke.bind(this));
        this.listItemElement.addEventListener('keydown', this.onInvokeElementKeydown.bind(this));
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ARIAUtils.setLabel(this.listItemElement, i18nString(UIStrings.beforeInvokeAlert, { PH1: this.listItemElement.title }));
    }
    get itemURL() {
        return 'manifest://' + this.title;
    }
    onInvoke() {
        this.parent?.showManifestView();
        this.#sectionElement.scrollIntoView();
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ARIAUtils.alert(i18nString(UIStrings.onInvokeAlert, { PH1: this.listItemElement.title }));
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.manifestSectionSelected(this.listItemElement.title);
    }
    // direct focus to the corresponding element
    onInvokeElementKeydown(event) {
        if (event.key !== 'Tab' || event.shiftKey) {
            return;
        }
        const checkBoxElement = this.#sectionFieldElement.querySelector('.mask-checkbox');
        let focusableElement = this.#sectionFieldElement.querySelector('[tabindex="0"]');
        if (checkBoxElement && checkBoxElement.shadowRoot) {
            focusableElement = checkBoxElement.shadowRoot.querySelector('input') || null;
        }
        else if (!focusableElement) {
            // special case for protocol handler section since it is a custom Element and has different structure than the others
            focusableElement = this.#sectionFieldElement.querySelector('devtools-protocol-handlers-view')
                ?.shadowRoot?.querySelector('[tabindex="0"]') ||
                null;
        }
        if (focusableElement) {
            focusableElement?.focus();
            event.consume(true);
        }
    }
}
class ClearStorageTreeElement extends _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_11__.ApplicationPanelTreeElement {
    view;
    constructor(storagePanel) {
        super(storagePanel, i18nString(UIStrings.storage), false, 'storage');
        const icon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_7__.Icon.create('database');
        this.setLeadingIcons([icon]);
    }
    get itemURL() {
        return 'clear-storage://';
    }
    onselect(selectedByUser) {
        super.onselect(selectedByUser);
        if (!this.view) {
            this.view = new _StorageView_js__WEBPACK_IMPORTED_MODULE_33__.StorageView();
        }
        this.showView(this.view);
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.panelShown(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.PanelCodes[_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.PanelCodes.storage]);
        return false;
    }
}
class IndexedDBTreeElement extends _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_11__.ExpandableApplicationPanelTreeElement {
    idbDatabaseTreeElements;
    storageBucket;
    constructor(storagePanel, storageBucket) {
        super(storagePanel, i18nString(UIStrings.indexeddb), 'indexed-db');
        const icon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_7__.Icon.create('database');
        this.setLeadingIcons([icon]);
        this.idbDatabaseTreeElements = [];
        this.storageBucket = storageBucket;
        this.initialize();
    }
    initialize() {
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().addModelListener(_IndexedDBModel_js__WEBPACK_IMPORTED_MODULE_19__.IndexedDBModel, _IndexedDBModel_js__WEBPACK_IMPORTED_MODULE_19__.Events.DatabaseAdded, this.indexedDBAdded, this, { scoped: true });
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().addModelListener(_IndexedDBModel_js__WEBPACK_IMPORTED_MODULE_19__.IndexedDBModel, _IndexedDBModel_js__WEBPACK_IMPORTED_MODULE_19__.Events.DatabaseRemoved, this.indexedDBRemoved, this, { scoped: true });
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().addModelListener(_IndexedDBModel_js__WEBPACK_IMPORTED_MODULE_19__.IndexedDBModel, _IndexedDBModel_js__WEBPACK_IMPORTED_MODULE_19__.Events.DatabaseLoaded, this.indexedDBLoaded, this, { scoped: true });
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().addModelListener(_IndexedDBModel_js__WEBPACK_IMPORTED_MODULE_19__.IndexedDBModel, _IndexedDBModel_js__WEBPACK_IMPORTED_MODULE_19__.Events.IndexedDBContentUpdated, this.indexedDBContentUpdated, this, { scoped: true });
        // TODO(szuend): Replace with a Set once two web tests no longer directly access this private
        //               variable (indexeddb/live-update-indexeddb-content.js, indexeddb/delete-entry.js).
        this.idbDatabaseTreeElements = [];
        for (const indexedDBModel of _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().models(_IndexedDBModel_js__WEBPACK_IMPORTED_MODULE_19__.IndexedDBModel, { scoped: true })) {
            const databases = indexedDBModel.databases();
            for (let j = 0; j < databases.length; ++j) {
                this.addIndexedDB(indexedDBModel, databases[j]);
            }
        }
    }
    addIndexedDBForModel(model) {
        for (const databaseId of model.databases()) {
            this.addIndexedDB(model, databaseId);
        }
    }
    removeIndexedDBForModel(model) {
        const idbDatabaseTreeElements = this.idbDatabaseTreeElements.filter(element => element.model === model);
        for (const idbDatabaseTreeElement of idbDatabaseTreeElements) {
            this.removeIDBDatabaseTreeElement(idbDatabaseTreeElement);
        }
    }
    onattach() {
        super.onattach();
        this.listItemElement.addEventListener('contextmenu', this.handleContextMenuEvent.bind(this), true);
    }
    handleContextMenuEvent(event) {
        const contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ContextMenu.ContextMenu(event);
        contextMenu.defaultSection().appendItem(i18nString(UIStrings.refreshIndexeddb), this.refreshIndexedDB.bind(this), { jslogContext: 'refresh-indexeddb' });
        void contextMenu.show();
    }
    refreshIndexedDB() {
        for (const indexedDBModel of _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().models(_IndexedDBModel_js__WEBPACK_IMPORTED_MODULE_19__.IndexedDBModel, { scoped: true })) {
            void indexedDBModel.refreshDatabaseNames();
        }
    }
    databaseInTree(databaseId) {
        if (this.storageBucket) {
            return databaseId.inBucket(this.storageBucket);
        }
        return true;
    }
    indexedDBAdded({ data: { databaseId, model }, }) {
        this.addIndexedDB(model, databaseId);
    }
    addIndexedDB(model, databaseId) {
        if (!this.databaseInTree(databaseId)) {
            return;
        }
        const idbDatabaseTreeElement = new IDBDatabaseTreeElement(this.resourcesPanel, model, databaseId);
        this.idbDatabaseTreeElements.push(idbDatabaseTreeElement);
        this.appendChild(idbDatabaseTreeElement);
        model.refreshDatabase(databaseId);
    }
    indexedDBRemoved({ data: { databaseId, model }, }) {
        const idbDatabaseTreeElement = this.idbDatabaseTreeElement(model, databaseId);
        if (!idbDatabaseTreeElement) {
            return;
        }
        this.removeIDBDatabaseTreeElement(idbDatabaseTreeElement);
    }
    removeIDBDatabaseTreeElement(idbDatabaseTreeElement) {
        idbDatabaseTreeElement.clear();
        this.removeChild(idbDatabaseTreeElement);
        _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.ArrayUtilities.removeElement(this.idbDatabaseTreeElements, idbDatabaseTreeElement);
        this.setExpandable(this.childCount() > 0);
    }
    indexedDBLoaded({ data: { database, model, entriesUpdated } }) {
        const idbDatabaseTreeElement = this.idbDatabaseTreeElement(model, database.databaseId);
        if (!idbDatabaseTreeElement) {
            return;
        }
        idbDatabaseTreeElement.update(database, entriesUpdated);
        this.indexedDBLoadedForTest();
    }
    indexedDBLoadedForTest() {
        // For sniffing in tests.
    }
    indexedDBContentUpdated({ data: { databaseId, objectStoreName, model }, }) {
        const idbDatabaseTreeElement = this.idbDatabaseTreeElement(model, databaseId);
        if (!idbDatabaseTreeElement) {
            return;
        }
        idbDatabaseTreeElement.indexedDBContentUpdated(objectStoreName);
    }
    idbDatabaseTreeElement(model, databaseId) {
        return this.idbDatabaseTreeElements.find(x => x.databaseId.equals(databaseId) && x.model === model) || null;
    }
}
class IDBDatabaseTreeElement extends _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_11__.ApplicationPanelTreeElement {
    model;
    databaseId;
    idbObjectStoreTreeElements;
    database;
    view;
    constructor(storagePanel, model, databaseId) {
        super(storagePanel, databaseId.name, false, 'indexed-db-database');
        this.model = model;
        this.databaseId = databaseId;
        this.idbObjectStoreTreeElements = new Map();
        const icon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_7__.Icon.create('database');
        this.setLeadingIcons([icon]);
        this.model.addEventListener(_IndexedDBModel_js__WEBPACK_IMPORTED_MODULE_19__.Events.DatabaseNamesRefreshed, this.refreshIndexedDB, this);
    }
    get itemURL() {
        return 'indexedDB://' + this.databaseId.storageBucket.storageKey + '/' +
            (this.databaseId.storageBucket.name ?? '') + '/' + this.databaseId.name;
    }
    onattach() {
        super.onattach();
        this.listItemElement.addEventListener('contextmenu', this.handleContextMenuEvent.bind(this), true);
    }
    handleContextMenuEvent(event) {
        const contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ContextMenu.ContextMenu(event);
        contextMenu.defaultSection().appendItem(i18nString(UIStrings.refreshIndexeddb), this.refreshIndexedDB.bind(this), { jslogContext: 'refresh-indexeddb' });
        void contextMenu.show();
    }
    refreshIndexedDB() {
        this.model.refreshDatabase(this.databaseId);
    }
    indexedDBContentUpdated(objectStoreName) {
        const treeElement = this.idbObjectStoreTreeElements.get(objectStoreName);
        if (treeElement) {
            treeElement.markNeedsRefresh();
        }
    }
    update(database, entriesUpdated) {
        this.database = database;
        const objectStoreNames = new Set();
        for (const objectStoreName of [...this.database.objectStores.keys()].sort()) {
            const objectStore = this.database.objectStores.get(objectStoreName);
            if (!objectStore) {
                continue;
            }
            objectStoreNames.add(objectStore.name);
            let treeElement = this.idbObjectStoreTreeElements.get(objectStore.name);
            if (!treeElement) {
                treeElement = new IDBObjectStoreTreeElement(this.resourcesPanel, this.model, this.databaseId, objectStore);
                this.idbObjectStoreTreeElements.set(objectStore.name, treeElement);
                this.appendChild(treeElement);
            }
            treeElement.update(objectStore, entriesUpdated);
        }
        for (const objectStoreName of this.idbObjectStoreTreeElements.keys()) {
            if (!objectStoreNames.has(objectStoreName)) {
                this.objectStoreRemoved(objectStoreName);
            }
        }
        if (this.view) {
            this.view.getComponent().update(database);
        }
        this.updateTooltip();
    }
    updateTooltip() {
        const version = this.database ? this.database.version : '-';
        if (Object.keys(this.idbObjectStoreTreeElements).length === 0) {
            this.tooltip = i18nString(UIStrings.versionSEmpty, { PH1: version });
        }
        else {
            this.tooltip = i18nString(UIStrings.versionS, { PH1: version });
        }
    }
    get selectable() {
        if (!this.database) {
            return false;
        }
        return super.selectable;
    }
    onselect(selectedByUser) {
        super.onselect(selectedByUser);
        if (!this.database) {
            return false;
        }
        if (!this.view) {
            this.view = _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_8__.LegacyWrapper.legacyWrapper(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Widget.VBox, new _IndexedDBViews_js__WEBPACK_IMPORTED_MODULE_20__.IDBDatabaseView(this.model, this.database), 'indexeddb-data');
        }
        this.showView(this.view);
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.panelShown('indexed-db');
        return false;
    }
    objectStoreRemoved(objectStoreName) {
        const objectStoreTreeElement = this.idbObjectStoreTreeElements.get(objectStoreName);
        if (objectStoreTreeElement) {
            objectStoreTreeElement.clear();
            this.removeChild(objectStoreTreeElement);
        }
        this.idbObjectStoreTreeElements.delete(objectStoreName);
        this.updateTooltip();
    }
    clear() {
        for (const objectStoreName of this.idbObjectStoreTreeElements.keys()) {
            this.objectStoreRemoved(objectStoreName);
        }
    }
}
class IDBObjectStoreTreeElement extends _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_11__.ApplicationPanelTreeElement {
    model;
    databaseId;
    idbIndexTreeElements;
    objectStore;
    view;
    constructor(storagePanel, model, databaseId, objectStore) {
        super(storagePanel, objectStore.name, false, 'indexed-db-object-store');
        this.model = model;
        this.databaseId = databaseId;
        this.idbIndexTreeElements = new Map();
        this.objectStore = objectStore;
        this.view = null;
        const icon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_7__.Icon.create('table');
        this.setLeadingIcons([icon]);
    }
    get itemURL() {
        return 'indexedDB://' + this.databaseId.storageBucket.storageKey + '/' +
            (this.databaseId.storageBucket.name ?? '') + '/' + this.databaseId.name + '/' +
            this.objectStore.name;
    }
    onattach() {
        super.onattach();
        this.listItemElement.addEventListener('contextmenu', this.handleContextMenuEvent.bind(this), true);
    }
    markNeedsRefresh() {
        if (this.view) {
            this.view.markNeedsRefresh();
        }
        for (const treeElement of this.idbIndexTreeElements.values()) {
            treeElement.markNeedsRefresh();
        }
    }
    handleContextMenuEvent(event) {
        const contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ContextMenu.ContextMenu(event);
        contextMenu.defaultSection().appendItem(i18nString(UIStrings.clear), this.clearObjectStore.bind(this), { jslogContext: 'clear' });
        void contextMenu.show();
    }
    refreshObjectStore() {
        if (this.view) {
            this.view.refreshData();
        }
        for (const treeElement of this.idbIndexTreeElements.values()) {
            treeElement.refreshIndex();
        }
    }
    async clearObjectStore() {
        await this.model.clearObjectStore(this.databaseId, this.objectStore.name);
        this.update(this.objectStore, true);
    }
    update(objectStore, entriesUpdated) {
        this.objectStore = objectStore;
        const indexNames = new Set();
        for (const index of this.objectStore.indexes.values()) {
            indexNames.add(index.name);
            let treeElement = this.idbIndexTreeElements.get(index.name);
            if (!treeElement) {
                treeElement = new IDBIndexTreeElement(this.resourcesPanel, this.model, this.databaseId, this.objectStore, index, this.refreshObjectStore.bind(this));
                this.idbIndexTreeElements.set(index.name, treeElement);
                this.appendChild(treeElement);
            }
            treeElement.update(this.objectStore, index, entriesUpdated);
        }
        for (const indexName of this.idbIndexTreeElements.keys()) {
            if (!indexNames.has(indexName)) {
                this.indexRemoved(indexName);
            }
        }
        for (const [indexName, treeElement] of this.idbIndexTreeElements.entries()) {
            if (!indexNames.has(indexName)) {
                this.removeChild(treeElement);
                this.idbIndexTreeElements.delete(indexName);
            }
        }
        if (this.childCount()) {
            this.expand();
        }
        if (this.view && entriesUpdated) {
            this.view.update(this.objectStore, null);
        }
        this.updateTooltip();
    }
    updateTooltip() {
        const keyPathString = this.objectStore.keyPathString;
        let tooltipString = keyPathString !== null ? i18nString(UIStrings.keyPathS, { PH1: keyPathString }) : '';
        if (this.objectStore.autoIncrement) {
            tooltipString += '\n' + _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.lockedString('autoIncrement');
        }
        this.tooltip = tooltipString;
    }
    onselect(selectedByUser) {
        super.onselect(selectedByUser);
        if (!this.view) {
            this.view =
                new _IndexedDBViews_js__WEBPACK_IMPORTED_MODULE_20__.IDBDataView(this.model, this.databaseId, this.objectStore, null, this.refreshObjectStore.bind(this));
        }
        this.showView(this.view);
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.panelShown('indexed-db');
        return false;
    }
    indexRemoved(indexName) {
        const indexTreeElement = this.idbIndexTreeElements.get(indexName);
        if (indexTreeElement) {
            indexTreeElement.clear();
            this.removeChild(indexTreeElement);
        }
        this.idbIndexTreeElements.delete(indexName);
    }
    clear() {
        for (const indexName of this.idbIndexTreeElements.keys()) {
            this.indexRemoved(indexName);
        }
        if (this.view) {
            this.view.clear();
        }
    }
}
class IDBIndexTreeElement extends _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_11__.ApplicationPanelTreeElement {
    model;
    databaseId;
    objectStore;
    index;
    refreshObjectStore;
    view;
    constructor(storagePanel, model, databaseId, objectStore, index, refreshObjectStore) {
        super(storagePanel, index.name, false, 'indexed-db');
        this.model = model;
        this.databaseId = databaseId;
        this.objectStore = objectStore;
        this.index = index;
        this.refreshObjectStore = refreshObjectStore;
    }
    get itemURL() {
        return 'indexedDB://' + this.databaseId.storageBucket.storageKey + '/' +
            (this.databaseId.storageBucket.name ?? '') + '/' + this.databaseId.name + '/' + this.objectStore.name + '/' +
            this.index.name;
    }
    markNeedsRefresh() {
        if (this.view) {
            this.view.markNeedsRefresh();
        }
    }
    refreshIndex() {
        if (this.view) {
            this.view.refreshData();
        }
    }
    update(objectStore, index, entriesUpdated) {
        this.objectStore = objectStore;
        this.index = index;
        if (this.view && entriesUpdated) {
            this.view.update(this.objectStore, this.index);
        }
        this.updateTooltip();
    }
    updateTooltip() {
        const tooltipLines = [];
        const keyPathString = this.index.keyPathString;
        tooltipLines.push(i18nString(UIStrings.keyPathS, { PH1: keyPathString }));
        if (this.index.unique) {
            tooltipLines.push(_core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.lockedString('unique'));
        }
        if (this.index.multiEntry) {
            tooltipLines.push(_core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.lockedString('multiEntry'));
        }
        this.tooltip = tooltipLines.join('\n');
    }
    onselect(selectedByUser) {
        super.onselect(selectedByUser);
        if (!this.view) {
            this.view = new _IndexedDBViews_js__WEBPACK_IMPORTED_MODULE_20__.IDBDataView(this.model, this.databaseId, this.objectStore, this.index, this.refreshObjectStore);
        }
        this.showView(this.view);
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.panelShown('indexed-db');
        return false;
    }
    clear() {
        if (this.view) {
            this.view.clear();
        }
    }
}
class DOMStorageTreeElement extends _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_11__.ApplicationPanelTreeElement {
    domStorage;
    constructor(storagePanel, domStorage) {
        super(storagePanel, domStorage.storageKey ? _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.StorageKeyManager.parseStorageKey(domStorage.storageKey).origin :
            i18nString(UIStrings.localFiles), false, domStorage.isLocalStorage ? 'local-storage-for-domain' : 'session-storage-for-domain');
        this.domStorage = domStorage;
        const icon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_7__.Icon.create('table');
        this.setLeadingIcons([icon]);
    }
    get itemURL() {
        return 'storage://' + this.domStorage.storageKey + '/' + (this.domStorage.isLocalStorage ? 'local' : 'session');
    }
    onselect(selectedByUser) {
        super.onselect(selectedByUser);
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.panelShown('dom-storage');
        this.resourcesPanel.showDOMStorage(this.domStorage);
        return false;
    }
    onattach() {
        super.onattach();
        this.listItemElement.addEventListener('contextmenu', this.handleContextMenuEvent.bind(this), true);
    }
    handleContextMenuEvent(event) {
        const contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ContextMenu.ContextMenu(event);
        contextMenu.defaultSection().appendItem(i18nString(UIStrings.clear), () => this.domStorage.clear(), { jslogContext: 'clear' });
        void contextMenu.show();
    }
}
class CookieTreeElement extends _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_11__.ApplicationPanelTreeElement {
    target;
    cookieDomainInternal;
    constructor(storagePanel, frame, cookieUrl) {
        super(storagePanel, cookieUrl.securityOrigin() || i18nString(UIStrings.localFiles), false, 'cookies-for-frame');
        this.target = frame.resourceTreeModel().target();
        this.cookieDomainInternal = cookieUrl.securityOrigin();
        this.tooltip = i18nString(UIStrings.cookiesUsedByFramesFromS, { PH1: this.cookieDomainInternal });
        const icon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_7__.Icon.create('cookie');
        // Note that we cannot use `cookieDomainInternal` here since it contains scheme.
        if (_models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_6__.RelatedIssue.hasThirdPartyPhaseoutCookieIssueForDomain(cookieUrl.domain())) {
            icon.name = 'warning-filled';
            icon.classList.add('warn-icon');
            this.tooltip = i18nString(UIStrings.thirdPartyPhaseout, { PH1: this.cookieDomainInternal });
        }
        this.setLeadingIcons([icon]);
    }
    get itemURL() {
        return 'cookies://' + this.cookieDomainInternal;
    }
    cookieDomain() {
        return this.cookieDomainInternal;
    }
    onattach() {
        super.onattach();
        this.listItemElement.addEventListener('contextmenu', this.handleContextMenuEvent.bind(this), true);
    }
    handleContextMenuEvent(event) {
        const contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ContextMenu.ContextMenu(event);
        contextMenu.defaultSection().appendItem(i18nString(UIStrings.clear), () => this.resourcesPanel.clearCookies(this.target, this.cookieDomainInternal), { jslogContext: 'clear' });
        void contextMenu.show();
    }
    onselect(selectedByUser) {
        super.onselect(selectedByUser);
        this.resourcesPanel.showCookies(this.target, this.cookieDomainInternal);
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.panelShown(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.PanelCodes[_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.PanelCodes.cookies]);
        return false;
    }
}
class StorageCategoryView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Widget.VBox {
    emptyWidget;
    linkElement;
    constructor() {
        super();
        this.element.classList.add('storage-view');
        this.emptyWidget = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.EmptyWidget.EmptyWidget('');
        this.linkElement = null;
        this.emptyWidget.show(this.element);
    }
    setText(text) {
        this.emptyWidget.text = text;
    }
    setLink(link) {
        if (link && !this.linkElement) {
            this.linkElement = this.emptyWidget.appendLink(link);
        }
        if (!link && this.linkElement) {
            this.linkElement.classList.add('hidden');
        }
        if (link && this.linkElement) {
            this.linkElement.setAttribute('href', link);
            this.linkElement.classList.remove('hidden');
        }
    }
}
class ResourcesSection {
    panel;
    treeElement;
    treeElementForFrameId;
    treeElementForTargetId;
    constructor(storagePanel, treeElement) {
        this.panel = storagePanel;
        this.treeElement = treeElement;
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ARIAUtils.setLabel(this.treeElement.listItemNode, 'Resources Section');
        this.treeElementForFrameId = new Map();
        this.treeElementForTargetId = new Map();
        const frameManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.FrameManager.FrameManager.instance();
        frameManager.addEventListener("FrameAddedToTarget" /* SDK.FrameManager.Events.FrameAddedToTarget */, event => this.frameAdded(event.data.frame), this);
        frameManager.addEventListener("FrameRemoved" /* SDK.FrameManager.Events.FrameRemoved */, event => this.frameDetached(event.data.frameId), this);
        frameManager.addEventListener("FrameNavigated" /* SDK.FrameManager.Events.FrameNavigated */, event => this.frameNavigated(event.data.frame), this);
        frameManager.addEventListener("ResourceAdded" /* SDK.FrameManager.Events.ResourceAdded */, event => this.resourceAdded(event.data.resource), this);
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.ChildTargetManager.ChildTargetManager, "TargetCreated" /* SDK.ChildTargetManager.Events.TargetCreated */, this.windowOpened, this, { scoped: true });
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.ChildTargetManager.ChildTargetManager, "TargetInfoChanged" /* SDK.ChildTargetManager.Events.TargetInfoChanged */, this.windowChanged, this, { scoped: true });
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.ChildTargetManager.ChildTargetManager, "TargetDestroyed" /* SDK.ChildTargetManager.Events.TargetDestroyed */, this.windowDestroyed, this, { scoped: true });
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().observeTargets(this, { scoped: true });
    }
    initialize() {
        const frameManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.FrameManager.FrameManager.instance();
        for (const frame of frameManager.getAllFrames()) {
            if (!this.treeElementForFrameId.get(frame.id)) {
                this.addFrameAndParents(frame);
            }
            const childTargetManager = frame.resourceTreeModel().target().model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.ChildTargetManager.ChildTargetManager);
            if (childTargetManager) {
                for (const targetInfo of childTargetManager.targetInfos()) {
                    this.windowOpened({ data: targetInfo });
                }
            }
        }
    }
    targetAdded(target) {
        if (target.type() === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.Target.Type.Worker || target.type() === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.Target.Type.ServiceWorker) {
            void this.workerAdded(target);
        }
        if (target.type() === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.Target.Type.Frame && target === target.outermostTarget()) {
            // Process existing frames, e.g. after prerendering activation or
            // switching between outermost targets.
            this.initialize();
        }
    }
    async workerAdded(target) {
        const parentTarget = target.parentTarget();
        if (!parentTarget) {
            return;
        }
        const parentTargetId = parentTarget.id();
        const frameTreeElement = this.treeElementForTargetId.get(parentTargetId);
        const targetId = target.id();
        assertNotMainTarget(targetId);
        const { targetInfo } = await parentTarget.targetAgent().invoke_getTargetInfo({ targetId });
        if (frameTreeElement && targetInfo) {
            frameTreeElement.workerCreated(targetInfo);
        }
    }
    targetRemoved(_target) {
    }
    addFrameAndParents(frame) {
        const parentFrame = frame.parentFrame();
        if (parentFrame && !this.treeElementForFrameId.get(parentFrame.id)) {
            this.addFrameAndParents(parentFrame);
        }
        this.frameAdded(frame);
    }
    expandFrame(frame) {
        if (!frame) {
            return false;
        }
        let treeElement = this.treeElementForFrameId.get(frame.id);
        if (!treeElement && !this.expandFrame(frame.parentFrame())) {
            return false;
        }
        treeElement = this.treeElementForFrameId.get(frame.id);
        if (!treeElement) {
            return false;
        }
        treeElement.expand();
        return true;
    }
    async revealResource(resource, line, column) {
        if (!this.expandFrame(resource.frame())) {
            return;
        }
        const resourceTreeElement = FrameResourceTreeElement.forResource(resource);
        if (resourceTreeElement) {
            await resourceTreeElement.revealResource(line, column);
        }
    }
    revealAndSelectFrame(frame) {
        const frameTreeElement = this.treeElementForFrameId.get(frame.id);
        frameTreeElement?.reveal();
        frameTreeElement?.select();
    }
    frameAdded(frame) {
        if (!_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().isInScope(frame.resourceTreeModel())) {
            return;
        }
        const parentFrame = frame.parentFrame();
        const parentTreeElement = parentFrame ? this.treeElementForFrameId.get(parentFrame.id) : this.treeElement;
        if (!parentTreeElement) {
            return;
        }
        const existingElement = this.treeElementForFrameId.get(frame.id);
        if (existingElement) {
            this.treeElementForFrameId.delete(frame.id);
            if (existingElement.parent) {
                existingElement.parent.removeChild(existingElement);
            }
        }
        const frameTreeElement = new FrameTreeElement(this, frame);
        this.treeElementForFrameId.set(frame.id, frameTreeElement);
        const targetId = frame.resourceTreeModel().target().id();
        if (!this.treeElementForTargetId.get(targetId)) {
            this.treeElementForTargetId.set(targetId, frameTreeElement);
        }
        parentTreeElement.appendChild(frameTreeElement);
        for (const resource of frame.resources()) {
            this.resourceAdded(resource);
        }
    }
    frameDetached(frameId) {
        const frameTreeElement = this.treeElementForFrameId.get(frameId);
        if (!frameTreeElement) {
            return;
        }
        this.treeElementForFrameId.delete(frameId);
        if (frameTreeElement.parent) {
            frameTreeElement.parent.removeChild(frameTreeElement);
        }
    }
    frameNavigated(frame) {
        if (!_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().isInScope(frame.resourceTreeModel())) {
            return;
        }
        const frameTreeElement = this.treeElementForFrameId.get(frame.id);
        if (frameTreeElement) {
            void frameTreeElement.frameNavigated(frame);
        }
    }
    resourceAdded(resource) {
        const frame = resource.frame();
        if (!frame) {
            return;
        }
        if (!_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().isInScope(frame.resourceTreeModel())) {
            return;
        }
        const frameTreeElement = this.treeElementForFrameId.get(frame.id);
        if (!frameTreeElement) {
            // This is a frame's main resource, it will be retained
            // and re-added by the resource manager;
            return;
        }
        frameTreeElement.appendResource(resource);
    }
    windowOpened(event) {
        const targetInfo = event.data;
        // Events for DevTools windows are ignored because they do not have an openerId
        if (targetInfo.openerId && targetInfo.type === 'page') {
            const frameTreeElement = this.treeElementForFrameId.get(targetInfo.openerId);
            if (frameTreeElement) {
                this.treeElementForTargetId.set(targetInfo.targetId, frameTreeElement);
                frameTreeElement.windowOpened(targetInfo);
            }
        }
    }
    windowDestroyed(event) {
        const targetId = event.data;
        const frameTreeElement = this.treeElementForTargetId.get(targetId);
        if (frameTreeElement) {
            frameTreeElement.windowDestroyed(targetId);
            this.treeElementForTargetId.delete(targetId);
        }
    }
    windowChanged(event) {
        const targetInfo = event.data;
        // Events for DevTools windows are ignored because they do not have an openerId
        if (targetInfo.openerId && targetInfo.type === 'page') {
            const frameTreeElement = this.treeElementForFrameId.get(targetInfo.openerId);
            if (frameTreeElement) {
                frameTreeElement.windowChanged(targetInfo);
            }
        }
    }
    reset() {
        this.treeElement.removeChildren();
        this.treeElementForFrameId.clear();
        this.treeElementForTargetId.clear();
    }
}
class FrameTreeElement extends _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_11__.ApplicationPanelTreeElement {
    section;
    frame;
    frameId;
    categoryElements;
    treeElementForResource;
    treeElementForWindow;
    treeElementForWorker;
    view;
    constructor(section, frame) {
        super(section.panel, '', false, 'frame');
        this.section = section;
        this.frame = frame;
        this.frameId = frame.id;
        this.categoryElements = new Map();
        this.treeElementForResource = new Map();
        this.treeElementForWindow = new Map();
        this.treeElementForWorker = new Map();
        void this.frameNavigated(frame);
        this.view = null;
    }
    getIconTypeForFrame(frame) {
        if (frame.isOutermostFrame()) {
            return frame.unreachableUrl() ? 'frame-crossed' : 'frame';
        }
        return frame.unreachableUrl() ? 'iframe-crossed' : 'iframe';
    }
    async frameNavigated(frame) {
        const icon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_7__.Icon.create(this.getIconTypeForFrame(frame));
        if (frame.unreachableUrl()) {
            icon.classList.add('red-icon');
        }
        this.setLeadingIcons([icon]);
        this.invalidateChildren();
        this.frameId = frame.id;
        if (this.title !== frame.displayName()) {
            this.title = frame.displayName();
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ARIAUtils.setLabel(this.listItemElement, this.title);
            if (this.parent) {
                const parent = this.parent;
                // Insert frame at new position to preserve correct alphabetical order
                parent.removeChild(this);
                parent.appendChild(this);
            }
        }
        this.categoryElements.clear();
        this.treeElementForResource.clear();
        this.treeElementForWorker.clear();
        if (this.selected) {
            this.view = _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_8__.LegacyWrapper.legacyWrapper(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Widget.Widget, new _components_components_js__WEBPACK_IMPORTED_MODULE_17__.FrameDetailsView.FrameDetailsReportView(this.frame));
            this.showView(this.view);
        }
        else {
            this.view = null;
        }
        // Service Workers' parent is always the outermost frame. We need to reconstruct
        // the service worker tree elements after those navigations which allow
        // the service workers to stay alive.
        if (frame.isOutermostFrame()) {
            const targets = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().targets();
            for (const target of targets) {
                if (target.type() === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.Target.Type.ServiceWorker &&
                    _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().isInScope(target)) {
                    const targetId = target.id();
                    assertNotMainTarget(targetId);
                    const agent = frame.resourceTreeModel().target().targetAgent();
                    const targetInfo = (await agent.invoke_getTargetInfo({ targetId })).targetInfo;
                    this.workerCreated(targetInfo);
                }
            }
        }
    }
    get itemURL() {
        // This is used to persist over reloads/navigation which frame was selected.
        // A frame's title can change on DevTools refresh, so we resort to using
        // the URL instead (even though it is not guaranteed to be unique).
        if (this.frame.isOutermostFrame()) {
            return 'frame://';
        }
        return 'frame://' + encodeURI(this.frame.url);
    }
    onselect(selectedByUser) {
        super.onselect(selectedByUser);
        if (!this.view) {
            this.view = _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_8__.LegacyWrapper.legacyWrapper(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Widget.Widget, new _components_components_js__WEBPACK_IMPORTED_MODULE_17__.FrameDetailsView.FrameDetailsReportView(this.frame));
        }
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.panelShown('frame-details');
        this.showView(this.view);
        this.listItemElement.classList.remove('hovered');
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.OverlayModel.OverlayModel.hideDOMNodeHighlight();
        return false;
    }
    set hovered(hovered) {
        if (hovered) {
            this.listItemElement.classList.add('hovered');
            void this.frame.highlight();
        }
        else {
            this.listItemElement.classList.remove('hovered');
            _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.OverlayModel.OverlayModel.hideDOMNodeHighlight();
        }
    }
    appendResource(resource) {
        const statusCode = resource.statusCode();
        if (statusCode >= 301 && statusCode <= 303) {
            return;
        }
        const resourceType = resource.resourceType();
        const categoryName = resourceType.name();
        let categoryElement = resourceType === _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Document ? this : this.categoryElements.get(categoryName);
        if (!categoryElement) {
            categoryElement = new _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_11__.ExpandableApplicationPanelTreeElement(this.section.panel, resource.resourceType().category().title(), categoryName, categoryName === 'Frames');
            this.categoryElements.set(resourceType.name(), categoryElement);
            this.appendChild(categoryElement, FrameTreeElement.presentationOrderCompare);
        }
        const resourceTreeElement = new FrameResourceTreeElement(this.section.panel, resource);
        categoryElement.appendChild(resourceTreeElement, FrameTreeElement.presentationOrderCompare);
        this.treeElementForResource.set(resource.url, resourceTreeElement);
    }
    windowOpened(targetInfo) {
        const categoryKey = 'opened-windows';
        let categoryElement = this.categoryElements.get(categoryKey);
        if (!categoryElement) {
            categoryElement = new _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_11__.ExpandableApplicationPanelTreeElement(this.section.panel, i18nString(UIStrings.openedWindows), categoryKey);
            this.categoryElements.set(categoryKey, categoryElement);
            this.appendChild(categoryElement, FrameTreeElement.presentationOrderCompare);
        }
        if (!this.treeElementForWindow.get(targetInfo.targetId)) {
            const windowTreeElement = new FrameWindowTreeElement(this.section.panel, targetInfo);
            categoryElement.appendChild(windowTreeElement);
            this.treeElementForWindow.set(targetInfo.targetId, windowTreeElement);
        }
    }
    workerCreated(targetInfo) {
        const categoryKey = targetInfo.type === 'service_worker' ? 'service-workers' : 'web-workers';
        const categoryName = targetInfo.type === 'service_worker' ? _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.lockedString('Service workers') :
            i18nString(UIStrings.webWorkers);
        let categoryElement = this.categoryElements.get(categoryKey);
        if (!categoryElement) {
            categoryElement = new _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_11__.ExpandableApplicationPanelTreeElement(this.section.panel, categoryName, categoryKey);
            this.categoryElements.set(categoryKey, categoryElement);
            this.appendChild(categoryElement, FrameTreeElement.presentationOrderCompare);
        }
        if (!this.treeElementForWorker.get(targetInfo.targetId)) {
            const workerTreeElement = new WorkerTreeElement(this.section.panel, targetInfo);
            categoryElement.appendChild(workerTreeElement);
            this.treeElementForWorker.set(targetInfo.targetId, workerTreeElement);
        }
    }
    windowChanged(targetInfo) {
        const windowTreeElement = this.treeElementForWindow.get(targetInfo.targetId);
        if (!windowTreeElement) {
            return;
        }
        if (windowTreeElement.title !== targetInfo.title) {
            windowTreeElement.title = targetInfo.title;
        }
        windowTreeElement.update(targetInfo);
    }
    windowDestroyed(targetId) {
        const windowTreeElement = this.treeElementForWindow.get(targetId);
        if (windowTreeElement) {
            windowTreeElement.windowClosed();
        }
    }
    appendChild(treeElement, comparator = FrameTreeElement.presentationOrderCompare) {
        super.appendChild(treeElement, comparator);
    }
    /**
     * Order elements by type (first frames, then resources, last Document resources)
     * and then each of these groups in the alphabetical order.
     */
    static presentationOrderCompare(treeElement1, treeElement2) {
        function typeWeight(treeElement) {
            if (treeElement instanceof _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_11__.ExpandableApplicationPanelTreeElement) {
                return 2;
            }
            if (treeElement instanceof FrameTreeElement) {
                return 1;
            }
            return 3;
        }
        const typeWeight1 = typeWeight(treeElement1);
        const typeWeight2 = typeWeight(treeElement2);
        return typeWeight1 - typeWeight2 || treeElement1.titleAsText().localeCompare(treeElement2.titleAsText());
    }
}
const resourceToFrameResourceTreeElement = new WeakMap();
class FrameResourceTreeElement extends _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_11__.ApplicationPanelTreeElement {
    panel;
    resource;
    previewPromise;
    constructor(storagePanel, resource) {
        super(storagePanel, resource.isGenerated ? i18nString(UIStrings.documentNotAvailable) : resource.displayName, false, 'frame-resource');
        this.panel = storagePanel;
        this.resource = resource;
        this.previewPromise = null;
        this.tooltip = resource.url;
        resourceToFrameResourceTreeElement.set(this.resource, this);
        const icon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_7__.Icon.create('document', 'navigator-file-tree-item');
        icon.classList.add('navigator-' + resource.resourceType().name() + '-tree-item');
        this.setLeadingIcons([icon]);
    }
    static forResource(resource) {
        return resourceToFrameResourceTreeElement.get(resource);
    }
    get itemURL() {
        return this.resource.url;
    }
    preparePreview() {
        if (this.previewPromise) {
            return this.previewPromise;
        }
        const viewPromise = _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_9__.PreviewFactory.PreviewFactory.createPreview(this.resource, this.resource.mimeType);
        this.previewPromise = viewPromise.then(view => {
            if (view) {
                return view;
            }
            return new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.EmptyWidget.EmptyWidget(this.resource.url);
        });
        return this.previewPromise;
    }
    onselect(selectedByUser) {
        super.onselect(selectedByUser);
        if (this.resource.isGenerated) {
            this.panel.showCategoryView(i18nString(UIStrings.theContentOfThisDocumentHasBeen), null);
        }
        else {
            void this.panel.scheduleShowView(this.preparePreview());
        }
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.panelShown('frame-resource');
        return false;
    }
    ondblclick(_event) {
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.openInNewTab(this.resource.url);
        return false;
    }
    onattach() {
        super.onattach();
        this.listItemElement.draggable = true;
        this.listItemElement.addEventListener('dragstart', this.ondragstart.bind(this), false);
        this.listItemElement.addEventListener('contextmenu', this.handleContextMenuEvent.bind(this), true);
    }
    ondragstart(event) {
        if (!event.dataTransfer) {
            return false;
        }
        event.dataTransfer.setData('text/plain', this.resource.content || '');
        event.dataTransfer.effectAllowed = 'copy';
        return true;
    }
    handleContextMenuEvent(event) {
        const contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ContextMenu.ContextMenu(event);
        contextMenu.appendApplicableItems(this.resource);
        void contextMenu.show();
    }
    async revealResource(lineNumber, columnNumber) {
        this.revealAndSelect(true);
        const view = await this.panel.scheduleShowView(this.preparePreview());
        if (!(view instanceof _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_9__.ResourceSourceFrame.ResourceSourceFrame) || typeof lineNumber !== 'number') {
            return;
        }
        view.revealPosition({ lineNumber, columnNumber }, true);
    }
}
class FrameWindowTreeElement extends _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_11__.ApplicationPanelTreeElement {
    targetInfo;
    isWindowClosed;
    view;
    constructor(storagePanel, targetInfo) {
        super(storagePanel, targetInfo.title || i18nString(UIStrings.windowWithoutTitle), false, 'window');
        this.targetInfo = targetInfo;
        this.isWindowClosed = false;
        this.view = null;
        this.updateIcon(targetInfo.canAccessOpener);
    }
    updateIcon(canAccessOpener) {
        const iconType = canAccessOpener ? 'popup' : 'frame';
        const icon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_7__.Icon.create(iconType);
        this.setLeadingIcons([icon]);
    }
    update(targetInfo) {
        if (targetInfo.canAccessOpener !== this.targetInfo.canAccessOpener) {
            this.updateIcon(targetInfo.canAccessOpener);
        }
        this.targetInfo = targetInfo;
        if (this.view) {
            this.view.setTargetInfo(targetInfo);
            this.view.update();
        }
    }
    windowClosed() {
        this.listItemElement.classList.add('window-closed');
        this.isWindowClosed = true;
        if (this.view) {
            this.view.setIsWindowClosed(true);
            this.view.update();
        }
    }
    onselect(selectedByUser) {
        super.onselect(selectedByUser);
        if (!this.view) {
            this.view = new _OpenedWindowDetailsView_js__WEBPACK_IMPORTED_MODULE_23__.OpenedWindowDetailsView(this.targetInfo, this.isWindowClosed);
        }
        else {
            this.view.update();
        }
        this.showView(this.view);
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.panelShown('frame-window');
        return false;
    }
    get itemURL() {
        return this.targetInfo.url;
    }
}
class WorkerTreeElement extends _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_11__.ApplicationPanelTreeElement {
    targetInfo;
    view;
    constructor(storagePanel, targetInfo) {
        super(storagePanel, targetInfo.title || targetInfo.url || i18nString(UIStrings.worker), false, 'worker');
        this.targetInfo = targetInfo;
        this.view = null;
        const icon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_7__.Icon.create('gears', 'navigator-file-tree-item');
        this.setLeadingIcons([icon]);
    }
    onselect(selectedByUser) {
        super.onselect(selectedByUser);
        if (!this.view) {
            this.view = new _OpenedWindowDetailsView_js__WEBPACK_IMPORTED_MODULE_23__.WorkerDetailsView(this.targetInfo);
        }
        else {
            this.view.update();
        }
        this.showView(this.view);
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.panelShown('frame-worker');
        return false;
    }
    get itemURL() {
        return this.targetInfo.url;
    }
}
//# sourceMappingURL=ApplicationPanelSidebar.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./panels/application/BackForwardCacheTreeElement.js":
/*!***********************************************************!*\
  !*** ./panels/application/BackForwardCacheTreeElement.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BackForwardCacheTreeElement: () => (/* binding */ BackForwardCacheTreeElement)
/* harmony export */ });
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */ var _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/components/legacy_wrapper/legacy_wrapper.js */ "./ui/components/legacy_wrapper/legacy_wrapper.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ApplicationPanelTreeElement.js */ "./panels/application/ApplicationPanelTreeElement.js");
/* harmony import */ var _components_components_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/components.js */ "./panels/application/components/components.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







const UIStrings = {
    /**
     *@description Text in Application Panel Sidebar of the Application panel
     */
    backForwardCache: 'Back/forward cache',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/application/BackForwardCacheTreeElement.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
class BackForwardCacheTreeElement extends _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_5__.ApplicationPanelTreeElement {
    view;
    constructor(resourcesPanel) {
        super(resourcesPanel, i18nString(UIStrings.backForwardCache), false, 'bfcache');
        const icon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__.Icon.create('database');
        this.setLeadingIcons([icon]);
    }
    get itemURL() {
        return 'bfcache://';
    }
    onselect(selectedByUser) {
        super.onselect(selectedByUser);
        if (!this.view) {
            this.view = _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_3__.LegacyWrapper.legacyWrapper(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Widget.Widget, new _components_components_js__WEBPACK_IMPORTED_MODULE_6__.BackForwardCacheView.BackForwardCacheView());
        }
        this.showView(this.view);
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.userMetrics.panelShown('back-forward-cache');
        return false;
    }
}
//# sourceMappingURL=BackForwardCacheTreeElement.js.map

/***/ }),

/***/ "./panels/application/BounceTrackingMitigationsTreeElement.js":
/*!********************************************************************!*\
  !*** ./panels/application/BounceTrackingMitigationsTreeElement.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BounceTrackingMitigationsTreeElement: () => (/* binding */ BounceTrackingMitigationsTreeElement),
/* harmony export */   i18nString: () => (/* binding */ i18nString)
/* harmony export */ });
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */ var _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/components/legacy_wrapper/legacy_wrapper.js */ "./ui/components/legacy_wrapper/legacy_wrapper.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ApplicationPanelTreeElement.js */ "./panels/application/ApplicationPanelTreeElement.js");
/* harmony import */ var _components_components_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/components.js */ "./panels/application/components/components.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







const UIStrings = {
    /**
     * @description Hover text for the Bounce Tracking Mitigations element in the Application Panel sidebar.
     */
    bounceTrackingMitigations: 'Bounce tracking mitigations',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/application/BounceTrackingMitigationsTreeElement.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
class BounceTrackingMitigationsTreeElement extends _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_5__.ApplicationPanelTreeElement {
    view;
    constructor(resourcesPanel) {
        super(resourcesPanel, i18nString(UIStrings.bounceTrackingMitigations), false, 'bounce-tracking-mitigations');
        const icon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__.Icon.create('database');
        this.setLeadingIcons([icon]);
    }
    get itemURL() {
        return 'bounce-tracking-mitigations://';
    }
    onselect(selectedByUser) {
        super.onselect(selectedByUser);
        if (!this.view) {
            this.view = _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_3__.LegacyWrapper.legacyWrapper(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Widget.Widget, new _components_components_js__WEBPACK_IMPORTED_MODULE_6__.BounceTrackingMitigationsView.BounceTrackingMitigationsView());
        }
        this.showView(this.view);
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.userMetrics.panelShown('bounce-tracking-mitigations');
        return false;
    }
}
//# sourceMappingURL=BounceTrackingMitigationsTreeElement.js.map

/***/ }),

/***/ "./panels/application/InterestGroupStorageModel.js":
/*!*********************************************************!*\
  !*** ./panels/application/InterestGroupStorageModel.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InterestGroupStorageModel: () => (/* binding */ InterestGroupStorageModel)
/* harmony export */ });
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/*
 * Copyright (C) 2021 Google Inc. All rights reserved.
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

class InterestGroupStorageModel extends _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.SDKModel.SDKModel {
    storageAgent;
    enabled;
    constructor(target) {
        super(target);
        target.registerStorageDispatcher(this);
        this.storageAgent = target.storageAgent();
        this.enabled = false;
    }
    enable() {
        if (this.enabled) {
            return;
        }
        void this.storageAgent.invoke_setInterestGroupTracking({ enable: true });
    }
    disable() {
        if (!this.enabled) {
            return;
        }
        void this.storageAgent.invoke_setInterestGroupTracking({ enable: false });
    }
    interestGroupAccessed(event) {
        this.dispatchEventToListeners("InterestGroupAccess" /* Events.InterestGroupAccess */, event);
    }
    attributionReportingTriggerRegistered(_event) {
    }
    indexedDBListUpdated(_event) {
    }
    indexedDBContentUpdated(_event) {
    }
    interestGroupAuctionEventOccurred(_event) {
    }
    interestGroupAuctionNetworkRequestCreated(_event) {
    }
    cacheStorageListUpdated(_event) {
    }
    cacheStorageContentUpdated(_event) {
    }
    sharedStorageAccessed(_event) {
    }
    storageBucketCreatedOrUpdated(_event) {
    }
    storageBucketDeleted(_event) {
    }
    attributionReportingSourceRegistered(_event) {
    }
}
_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.SDKModel.SDKModel.register(InterestGroupStorageModel, { capabilities: 8192 /* SDK.Target.Capability.Storage */, autostart: false });
//# sourceMappingURL=InterestGroupStorageModel.js.map

/***/ }),

/***/ "./panels/application/PreloadingTreeElement.js":
/*!*****************************************************!*\
  !*** ./panels/application/PreloadingTreeElement.js ***!
  \*****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PreloadingRuleSetTreeElement: () => (/* binding */ PreloadingRuleSetTreeElement),
/* harmony export */   PreloadingSummaryTreeElement: () => (/* binding */ PreloadingSummaryTreeElement)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */ var _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ApplicationPanelTreeElement.js */ "./panels/application/ApplicationPanelTreeElement.js");
/* harmony import */ var _preloading_PreloadingView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./preloading/PreloadingView.js */ "./panels/application/preloading/PreloadingView.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_preloading_PreloadingView_js__WEBPACK_IMPORTED_MODULE_3__]);
_preloading_PreloadingView_js__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




const UIStrings = {
    /**
     *@description Text in Application Panel Sidebar of the Application panel
     */
    speculativeLoads: 'Speculative loads',
    /**
     *@description Text in Application Panel Sidebar of the Application panel
     */
    rules: 'Rules',
    /**
     *@description Text in Application Panel Sidebar of the Application panel
     */
    speculations: 'Speculations',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/application/PreloadingTreeElement.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
class PreloadingTreeElementBase extends _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_2__.ApplicationPanelTreeElement {
    #model;
    #viewConstructor;
    view;
    #path;
    #selectedInternal;
    constructor(panel, viewConstructor, path, title) {
        super(panel, title, false, 'speculative-loads');
        this.#viewConstructor = viewConstructor;
        this.#path = path;
        const icon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__.Icon.create('arrow-up-down');
        this.setLeadingIcons([icon]);
        this.#selectedInternal = false;
        // TODO(https://crbug.com/1384419): Set link
    }
    get itemURL() {
        return this.#path;
    }
    initialize(model) {
        this.#model = model;
        // Show the view if the model was initialized after selection.
        if (this.#selectedInternal && !this.view) {
            this.onselect(false);
        }
    }
    onselect(selectedByUser) {
        super.onselect(selectedByUser);
        this.#selectedInternal = true;
        if (!this.#model) {
            return false;
        }
        if (!this.view) {
            this.view = new this.#viewConstructor(this.#model);
        }
        this.showView(this.view);
        return false;
    }
}
class PreloadingSummaryTreeElement extends _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_2__.ExpandableApplicationPanelTreeElement {
    #model;
    #view;
    #selectedInternal;
    #ruleSet = null;
    #attempt = null;
    constructor(panel) {
        super(panel, i18nString(UIStrings.speculativeLoads), 'preloading');
        const icon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__.Icon.create('arrow-up-down');
        this.setLeadingIcons([icon]);
        this.#selectedInternal = false;
        // TODO(https://crbug.com/1384419): Set link
    }
    // Note that
    //
    // - TreeElement.ensureSelection assumes TreeElement.treeOutline initalized.
    // - TreeElement.treeOutline is propagated in TreeElement.appendChild.
    //
    // So, `this.constructChildren` should be called just after `parent.appendChild(this)`
    // to enrich children with TreeElement.selectionElementInternal correctly.
    constructChildren(panel) {
        this.#ruleSet = new PreloadingRuleSetTreeElement(panel);
        this.#attempt = new PreloadingAttemptTreeElement(panel);
        this.appendChild(this.#ruleSet);
        this.appendChild(this.#attempt);
    }
    initialize(model) {
        if (this.#ruleSet === null || this.#attempt === null) {
            throw new Error('unreachable');
        }
        this.#model = model;
        this.#ruleSet.initialize(model);
        this.#attempt.initialize(model);
        // Show the view if the model was initialized after selection.
        if (this.#selectedInternal && !this.#view) {
            this.onselect(false);
        }
    }
    onselect(selectedByUser) {
        super.onselect(selectedByUser);
        this.#selectedInternal = true;
        if (!this.#model) {
            return false;
        }
        if (!this.#view) {
            this.#view = new _preloading_PreloadingView_js__WEBPACK_IMPORTED_MODULE_3__.PreloadingSummaryView(this.#model);
        }
        this.showView(this.#view);
        return false;
    }
    expandAndRevealRuleSet(revealInfo) {
        if (this.#ruleSet === null) {
            throw new Error('unreachable');
        }
        this.expand();
        this.#ruleSet.revealRuleSet(revealInfo);
    }
    expandAndRevealAttempts(filter) {
        if (this.#attempt === null) {
            throw new Error('unreachable');
        }
        this.expand();
        this.#attempt.revealAttempts(filter);
    }
}
class PreloadingRuleSetTreeElement extends PreloadingTreeElementBase {
    constructor(panel) {
        super(panel, _preloading_PreloadingView_js__WEBPACK_IMPORTED_MODULE_3__.PreloadingRuleSetView, 'preloading://rule-set', i18nString(UIStrings.rules));
    }
    revealRuleSet(revealInfo) {
        this.select();
        if (this.view === undefined) {
            return;
        }
        this.view?.revealRuleSet(revealInfo);
    }
}
class PreloadingAttemptTreeElement extends PreloadingTreeElementBase {
    constructor(panel) {
        super(panel, _preloading_PreloadingView_js__WEBPACK_IMPORTED_MODULE_3__.PreloadingAttemptView, 'preloading://attempt', i18nString(UIStrings.speculations));
    }
    revealAttempts(filter) {
        this.select();
        this.view?.setFilter(filter);
    }
}
//# sourceMappingURL=PreloadingTreeElement.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./panels/application/ReportingApiReportsView.js":
/*!*******************************************************!*\
  !*** ./panels/application/ReportingApiReportsView.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReportingApiReportsView: () => (/* binding */ ReportingApiReportsView),
/* harmony export */   i18nString: () => (/* binding */ i18nString)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/components/source_frame/source_frame.js */ "./ui/legacy/components/source_frame/source_frame.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _components_components_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/components.js */ "./panels/application/components/components.js");
/* harmony import */ var _reportingApiReportsView_css_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reportingApiReportsView.css.js */ "./panels/application/reportingApiReportsView.css.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







const UIStrings = {
    /**
     *@description Placeholder text instructing the user how to display a Reporting API
     *report body (https://developers.google.com/web/updates/2018/09/reportingapi#sending).
     */
    clickToDisplayBody: 'Click on any report to display its body',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/application/ReportingApiReportsView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
class ReportingApiReportsView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.SplitWidget.SplitWidget {
    reportsGrid = new _components_components_js__WEBPACK_IMPORTED_MODULE_5__.ReportsGrid.ReportsGrid();
    reports = [];
    constructor(networkManager) {
        super(/* isVertical: */ false, /* secondIsSidebar: */ true);
        const topPanel = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Widget.VBox();
        const bottomPanel = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Widget.VBox();
        topPanel.setMinimumSize(0, 80);
        this.setMainWidget(topPanel);
        bottomPanel.setMinimumSize(0, 40);
        bottomPanel.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.pane('preview').track({ resize: true })}`);
        this.setSidebarWidget(bottomPanel);
        topPanel.contentElement.appendChild(this.reportsGrid);
        this.reportsGrid.addEventListener('cellfocused', this.onFocus.bind(this));
        bottomPanel.contentElement.classList.add('placeholder');
        const centered = bottomPanel.contentElement.createChild('div');
        centered.textContent = i18nString(UIStrings.clickToDisplayBody);
        networkManager.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.NetworkManager.Events.ReportingApiReportAdded, event => this.onReportAdded(event.data), this);
        networkManager.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.NetworkManager.Events.ReportingApiReportUpdated, event => this.onReportUpdated(event.data), this);
    }
    wasShown() {
        super.wasShown();
        const sbw = this.sidebarWidget();
        if (sbw) {
            sbw.registerCSSFiles([_reportingApiReportsView_css_js__WEBPACK_IMPORTED_MODULE_6__["default"]]);
        }
    }
    onReportAdded(report) {
        this.reports.push(report);
        this.reportsGrid.data = { reports: this.reports };
    }
    onReportUpdated(report) {
        const index = this.reports.findIndex(oldReport => oldReport.id === report.id);
        this.reports[index] = report;
        this.reportsGrid.data = { reports: this.reports };
    }
    async onFocus(event) {
        const focusedEvent = event;
        const cell = focusedEvent.data.row.cells.find(cell => cell.columnId === 'id');
        const report = cell && this.reports.find(report => report.id === cell.value);
        if (report) {
            const jsonView = await _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_2__.JSONView.JSONView.createView(JSON.stringify(report.body));
            jsonView?.setMinimumSize(0, 40);
            if (jsonView) {
                this.setSidebarWidget(jsonView);
            }
        }
    }
    getReports() {
        return this.reports;
    }
    getReportsGrid() {
        return this.reportsGrid;
    }
}
//# sourceMappingURL=ReportingApiReportsView.js.map

/***/ }),

/***/ "./panels/application/ReportingApiTreeElement.js":
/*!*******************************************************!*\
  !*** ./panels/application/ReportingApiTreeElement.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReportingApiTreeElement: () => (/* binding */ ReportingApiTreeElement),
/* harmony export */   i18nString: () => (/* binding */ i18nString)
/* harmony export */ });
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */ var _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ApplicationPanelTreeElement.js */ "./panels/application/ApplicationPanelTreeElement.js");
/* harmony import */ var _components_components_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/components.js */ "./panels/application/components/components.js");
/* harmony import */ var _ReportingApiView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ReportingApiView.js */ "./panels/application/ReportingApiView.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






const UIStrings = {
    /**
     *@description Label for an item in the Application Panel Sidebar of the Application panel
     */
    reportingApi: 'Reporting API',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/application/ReportingApiTreeElement.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
class ReportingApiTreeElement extends _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_3__.ApplicationPanelTreeElement {
    view;
    constructor(storagePanel) {
        super(storagePanel, i18nString(UIStrings.reportingApi), false, 'reporting-api');
        const icon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__.Icon.create('document');
        this.setLeadingIcons([icon]);
    }
    get itemURL() {
        return 'reportingApi://';
    }
    onselect(selectedByUser) {
        super.onselect(selectedByUser);
        if (!this.view) {
            this.view = new _ReportingApiView_js__WEBPACK_IMPORTED_MODULE_5__.ReportingApiView(new _components_components_js__WEBPACK_IMPORTED_MODULE_4__.EndpointsGrid.EndpointsGrid());
        }
        this.showView(this.view);
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.userMetrics.panelShown('reporting-api');
        return false;
    }
}
//# sourceMappingURL=ReportingApiTreeElement.js.map

/***/ }),

/***/ "./panels/application/ReportingApiView.js":
/*!************************************************!*\
  !*** ./panels/application/ReportingApiView.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReportingApiView: () => (/* binding */ ReportingApiView)
/* harmony export */ });
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _ReportingApiReportsView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ReportingApiReportsView.js */ "./panels/application/ReportingApiReportsView.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




class ReportingApiView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.SplitWidget.SplitWidget {
    endpointsGrid;
    endpoints;
    constructor(endpointsGrid) {
        super(/* isVertical: */ false, /* secondIsSidebar: */ true);
        this.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_2__.pane('reporting-api')}`);
        this.endpointsGrid = endpointsGrid;
        this.endpoints = new Map();
        const mainTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance().primaryPageTarget();
        const networkManager = mainTarget && mainTarget.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.NetworkManager.NetworkManager);
        if (networkManager) {
            networkManager.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.NetworkManager.Events.ReportingApiEndpointsChangedForOrigin, event => this.onEndpointsChangedForOrigin(event.data), this);
            const reportingApiReportsView = new _ReportingApiReportsView_js__WEBPACK_IMPORTED_MODULE_3__.ReportingApiReportsView(networkManager);
            const reportingApiEndpointsView = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.Widget.VBox();
            reportingApiEndpointsView.setMinimumSize(0, 40);
            reportingApiEndpointsView.contentElement.appendChild(this.endpointsGrid);
            this.setMainWidget(reportingApiReportsView);
            this.setSidebarWidget(reportingApiEndpointsView);
            void networkManager.enableReportingApi();
        }
    }
    onEndpointsChangedForOrigin(data) {
        this.endpoints.set(data.origin, data.endpoints);
        this.endpointsGrid.data = { endpoints: this.endpoints };
    }
}
//# sourceMappingURL=ReportingApiView.js.map

/***/ }),

/***/ "./panels/application/ServiceWorkerCacheTreeElement.js":
/*!*************************************************************!*\
  !*** ./panels/application/ServiceWorkerCacheTreeElement.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SWCacheTreeElement: () => (/* binding */ SWCacheTreeElement),
/* harmony export */   ServiceWorkerCacheTreeElement: () => (/* binding */ ServiceWorkerCacheTreeElement)
/* harmony export */ });
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ApplicationPanelTreeElement.js */ "./panels/application/ApplicationPanelTreeElement.js");
/* harmony import */ var _ServiceWorkerCacheViews_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ServiceWorkerCacheViews.js */ "./panels/application/ServiceWorkerCacheViews.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







const UIStrings = {
    /**
     *@description Text in Application Panel Sidebar of the Application panel
     */
    cacheStorage: 'Cache storage',
    /**
     *@description A context menu item in the Application Panel Sidebar of the Application panel
     */
    refreshCaches: 'Refresh Caches',
    /**
     *@description Text to delete something
     */
    delete: 'Delete',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/application/ServiceWorkerCacheTreeElement.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
class ServiceWorkerCacheTreeElement extends _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_5__.ExpandableApplicationPanelTreeElement {
    swCacheModels;
    swCacheTreeElements;
    storageBucket;
    constructor(resourcesPanel, storageBucket) {
        super(resourcesPanel, i18nString(UIStrings.cacheStorage), 'cache-storage');
        const icon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.create('database');
        this.setLink('https://developer.chrome.com/docs/devtools/storage/cache/?utm_source=devtools');
        this.setLeadingIcons([icon]);
        this.swCacheModels = new Set();
        this.swCacheTreeElements = new Set();
        this.storageBucket = storageBucket;
    }
    initialize() {
        this.swCacheModels.clear();
        this.swCacheTreeElements.clear();
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().observeModels(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ServiceWorkerCacheModel.ServiceWorkerCacheModel, {
            modelAdded: (model) => this.serviceWorkerCacheModelAdded(model),
            modelRemoved: (model) => this.serviceWorkerCacheModelRemoved(model),
        });
    }
    onattach() {
        super.onattach();
        this.listItemElement.addEventListener('contextmenu', this.handleContextMenuEvent.bind(this), true);
    }
    handleContextMenuEvent(event) {
        const contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ContextMenu.ContextMenu(event);
        contextMenu.defaultSection().appendItem(i18nString(UIStrings.refreshCaches), this.refreshCaches.bind(this), { jslogContext: 'refresh-caches' });
        void contextMenu.show();
    }
    refreshCaches() {
        for (const swCacheModel of this.swCacheModels) {
            swCacheModel.refreshCacheNames();
        }
    }
    serviceWorkerCacheModelAdded(model) {
        model.enable();
        this.swCacheModels.add(model);
        for (const cache of model.caches()) {
            this.addCache(model, cache);
        }
        model.addEventListener("CacheAdded" /* SDK.ServiceWorkerCacheModel.Events.CacheAdded */, this.cacheAdded, this);
        model.addEventListener("CacheRemoved" /* SDK.ServiceWorkerCacheModel.Events.CacheRemoved */, this.cacheRemoved, this);
    }
    serviceWorkerCacheModelRemoved(model) {
        for (const cache of model.caches()) {
            this.removeCache(model, cache);
        }
        model.removeEventListener("CacheAdded" /* SDK.ServiceWorkerCacheModel.Events.CacheAdded */, this.cacheAdded, this);
        model.removeEventListener("CacheRemoved" /* SDK.ServiceWorkerCacheModel.Events.CacheRemoved */, this.cacheRemoved, this);
        this.swCacheModels.delete(model);
    }
    cacheAdded(event) {
        const { model, cache } = event.data;
        this.addCache(model, cache);
    }
    cacheInTree(cache) {
        if (this.storageBucket) {
            return cache.inBucket(this.storageBucket);
        }
        return true;
    }
    addCache(model, cache) {
        if (this.cacheInTree(cache)) {
            const swCacheTreeElement = new SWCacheTreeElement(this.resourcesPanel, model, cache, this.storageBucket === undefined);
            this.swCacheTreeElements.add(swCacheTreeElement);
            this.appendChild(swCacheTreeElement);
        }
    }
    cacheRemoved(event) {
        const { model, cache } = event.data;
        if (this.cacheInTree(cache)) {
            this.removeCache(model, cache);
        }
    }
    removeCache(model, cache) {
        const swCacheTreeElement = this.cacheTreeElement(model, cache);
        if (!swCacheTreeElement) {
            return;
        }
        this.removeChild(swCacheTreeElement);
        this.swCacheTreeElements.delete(swCacheTreeElement);
        this.setExpandable(this.childCount() > 0);
    }
    cacheTreeElement(model, cache) {
        for (const cacheTreeElement of this.swCacheTreeElements) {
            if (cacheTreeElement.hasModelAndCache(model, cache)) {
                return cacheTreeElement;
            }
        }
        return null;
    }
}
class SWCacheTreeElement extends _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_5__.ApplicationPanelTreeElement {
    model;
    cache;
    view;
    constructor(resourcesPanel, model, cache, appendStorageKey) {
        let cacheName;
        if (appendStorageKey) {
            cacheName = cache.cacheName + ' - ' + cache.storageKey;
        }
        else {
            cacheName = cache.cacheName;
        }
        super(resourcesPanel, cacheName, false, 'cache-storage-instance');
        this.model = model;
        this.cache = cache;
        this.view = null;
        const icon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.create('table');
        this.setLeadingIcons([icon]);
    }
    get itemURL() {
        // I don't think this will work at all.
        return 'cache://' + this.cache.cacheId;
    }
    onattach() {
        super.onattach();
        this.listItemElement.addEventListener('contextmenu', this.handleContextMenuEvent.bind(this), true);
    }
    handleContextMenuEvent(event) {
        const contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ContextMenu.ContextMenu(event);
        contextMenu.defaultSection().appendItem(i18nString(UIStrings.delete), this.clearCache.bind(this), { jslogContext: 'delete' });
        void contextMenu.show();
    }
    clearCache() {
        void this.model.deleteCache(this.cache);
    }
    update(cache) {
        this.cache = cache;
        if (this.view) {
            this.view.update(cache);
        }
    }
    onselect(selectedByUser) {
        super.onselect(selectedByUser);
        if (!this.view) {
            this.view = new _ServiceWorkerCacheViews_js__WEBPACK_IMPORTED_MODULE_6__.ServiceWorkerCacheView(this.model, this.cache);
        }
        this.showView(this.view);
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.userMetrics.panelShown('service-worker-cache');
        return false;
    }
    hasModelAndCache(model, cache) {
        return this.cache.equals(cache) && this.model === model;
    }
}
//# sourceMappingURL=ServiceWorkerCacheTreeElement.js.map

/***/ }),

/***/ "./panels/application/SharedStorageEventsView.js":
/*!*******************************************************!*\
  !*** ./panels/application/SharedStorageEventsView.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedStorageEventsView: () => (/* binding */ SharedStorageEventsView)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/components/source_frame/source_frame.js */ "./ui/legacy/components/source_frame/source_frame.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _components_components_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/components.js */ "./panels/application/components/components.js");
/* harmony import */ var _sharedStorageEventsView_css_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sharedStorageEventsView.css.js */ "./panels/application/sharedStorageEventsView.css.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







const UIStrings = {
    /**
     *@description Placeholder text instructing the user how to display shared
     *storage event details.
     */
    clickToDisplayBody: 'Click on any shared storage event to display the event parameters.',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/application/SharedStorageEventsView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
function eventEquals(a, b) {
    return JSON.stringify(a) === JSON.stringify(b);
}
class SharedStorageEventsView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.SplitWidget.SplitWidget {
    #sharedStorageEventGrid = new _components_components_js__WEBPACK_IMPORTED_MODULE_5__.SharedStorageAccessGrid.SharedStorageAccessGrid();
    #events = [];
    #noDisplayView;
    #defaultId = '';
    constructor() {
        super(/* isVertical */ false, /* secondIsSidebar: */ true);
        this.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.pane('shared-storage-events')}`);
        const topPanel = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Widget.VBox();
        this.#noDisplayView = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Widget.VBox();
        topPanel.setMinimumSize(0, 80);
        this.setMainWidget(topPanel);
        this.#noDisplayView.setMinimumSize(0, 40);
        this.setSidebarWidget(this.#noDisplayView);
        topPanel.contentElement.appendChild(this.#sharedStorageEventGrid);
        this.#sharedStorageEventGrid.addEventListener('cellfocused', this.#onFocus.bind(this));
        this.#sharedStorageEventGrid.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.section('events-table')}`);
        this.#getMainFrameResourceTreeModel()?.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.Events.PrimaryPageChanged, this.clearEvents, this);
        this.#noDisplayView.contentElement.classList.add('placeholder');
        const noDisplayDiv = this.#noDisplayView.contentElement.createChild('div');
        noDisplayDiv.textContent = i18nString(UIStrings.clickToDisplayBody);
    }
    #getMainFrameResourceTreeModel() {
        const primaryPageTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().primaryPageTarget();
        return primaryPageTarget?.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.ResourceTreeModel) || null;
    }
    #getMainFrame() {
        return this.#getMainFrameResourceTreeModel()?.mainFrame || null;
    }
    get id() {
        return this.#getMainFrame()?.id || this.#defaultId;
    }
    wasShown() {
        super.wasShown();
        const sidebar = this.sidebarWidget();
        if (sidebar) {
            sidebar.registerCSSFiles([_sharedStorageEventsView_css_js__WEBPACK_IMPORTED_MODULE_6__["default"]]);
        }
    }
    addEvent(event) {
        // Only add event if main frame id matches.
        if (event.mainFrameId !== this.id) {
            return;
        }
        // Only add if not already present.
        if (this.#events.some(t => eventEquals(t, event))) {
            return;
        }
        this.#events.push(event);
        this.#sharedStorageEventGrid.data = this.#events;
    }
    clearEvents() {
        this.#events = [];
        this.#sharedStorageEventGrid.data = this.#events;
        this.setSidebarWidget(this.#noDisplayView);
    }
    async #onFocus(event) {
        const focusedEvent = event;
        const row = focusedEvent.data.row;
        if (!row) {
            return;
        }
        const wrappedEvent = {
            accessTime: row.cells.find(cell => cell.columnId === 'event-time')?.value,
            accessType: row.cells.find(cell => cell.columnId === 'event-type')?.value,
            ownerOrigin: row.cells.find(cell => cell.columnId === 'event-owner-origin')?.value,
            eventParams: JSON.parse(row.cells.find(cell => cell.columnId === 'event-params')?.value),
        };
        const jsonView = _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_2__.JSONView.JSONView.createViewSync(wrappedEvent);
        jsonView.setMinimumSize(0, 40);
        this.setSidebarWidget(jsonView);
    }
    setDefaultIdForTesting(id) {
        this.#defaultId = id;
    }
    getEventsForTesting() {
        return this.#events;
    }
    getSharedStorageAccessGridForTesting() {
        return this.#sharedStorageEventGrid;
    }
}
//# sourceMappingURL=SharedStorageEventsView.js.map

/***/ }),

/***/ "./panels/application/SharedStorageListTreeElement.js":
/*!************************************************************!*\
  !*** ./panels/application/SharedStorageListTreeElement.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedStorageListTreeElement: () => (/* binding */ SharedStorageListTreeElement)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */ var _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ApplicationPanelTreeElement.js */ "./panels/application/ApplicationPanelTreeElement.js");
/* harmony import */ var _SharedStorageEventsView_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SharedStorageEventsView.js */ "./panels/application/SharedStorageEventsView.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





const UIStrings = {
    /**
     *@description Text in SharedStorage Category View of the Application panel
     */
    sharedStorage: 'Shared storage',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/application/SharedStorageListTreeElement.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
class SharedStorageListTreeElement extends _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_3__.ApplicationPanelTreeElement {
    #expandedSetting;
    view;
    constructor(resourcesPanel, expandedSettingsDefault = false) {
        super(resourcesPanel, i18nString(UIStrings.sharedStorage), false, 'shared-storage');
        this.#expandedSetting =
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('resources-shared-storage-expanded', expandedSettingsDefault);
        const sharedStorageIcon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__.Icon.create('database');
        this.setLeadingIcons([sharedStorageIcon]);
        this.view = new _SharedStorageEventsView_js__WEBPACK_IMPORTED_MODULE_4__.SharedStorageEventsView();
    }
    get itemURL() {
        return 'shared-storage://';
    }
    onselect(selectedByUser) {
        super.onselect(selectedByUser);
        this.resourcesPanel.showView(this.view);
        return false;
    }
    onattach() {
        super.onattach();
        if (this.#expandedSetting.get()) {
            this.expand();
        }
    }
    onexpand() {
        this.#expandedSetting.set(true);
    }
    oncollapse() {
        this.#expandedSetting.set(false);
    }
    addEvent(event) {
        this.view.addEvent(event);
    }
}
//# sourceMappingURL=SharedStorageListTreeElement.js.map

/***/ }),

/***/ "./panels/application/SharedStorageModel.js":
/*!**************************************************!*\
  !*** ./panels/application/SharedStorageModel.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedStorageForOrigin: () => (/* binding */ SharedStorageForOrigin),
/* harmony export */   SharedStorageModel: () => (/* binding */ SharedStorageModel)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


class SharedStorageForOrigin extends _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper {
    #model;
    #securityOrigin;
    constructor(model, securityOrigin) {
        super();
        this.#model = model;
        this.#securityOrigin = securityOrigin;
    }
    get securityOrigin() {
        return this.#securityOrigin;
    }
    async getMetadata() {
        return this.#model.storageAgent.invoke_getSharedStorageMetadata({ ownerOrigin: this.securityOrigin })
            .then(({ metadata }) => metadata);
    }
    async getEntries() {
        return this.#model.storageAgent.invoke_getSharedStorageEntries({ ownerOrigin: this.securityOrigin })
            .then(({ entries }) => entries);
    }
    async setEntry(key, value, ignoreIfPresent) {
        await this.#model.storageAgent.invoke_setSharedStorageEntry({ ownerOrigin: this.securityOrigin, key, value, ignoreIfPresent });
    }
    async deleteEntry(key) {
        await this.#model.storageAgent.invoke_deleteSharedStorageEntry({ ownerOrigin: this.securityOrigin, key });
    }
    async clear() {
        await this.#model.storageAgent.invoke_clearSharedStorageEntries({ ownerOrigin: this.securityOrigin });
    }
    async resetBudget() {
        await this.#model.storageAgent.invoke_resetSharedStorageBudget({ ownerOrigin: this.securityOrigin });
    }
}
class SharedStorageModel extends _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.SDKModel.SDKModel {
    #securityOriginManager;
    #storages;
    storageAgent;
    #enabled;
    constructor(target) {
        super(target);
        target.registerStorageDispatcher(this);
        this.#securityOriginManager = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.SecurityOriginManager.SecurityOriginManager);
        this.#storages = new Map();
        this.storageAgent = target.storageAgent();
        this.#enabled = false;
    }
    async enable() {
        if (this.#enabled) {
            return;
        }
        this.#securityOriginManager.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.SecurityOriginManager.Events.SecurityOriginAdded, this.#securityOriginAdded, this);
        this.#securityOriginManager.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.SecurityOriginManager.Events.SecurityOriginRemoved, this.#securityOriginRemoved, this);
        await this.storageAgent.invoke_setSharedStorageTracking({ enable: true });
        this.#addAllOrigins();
        this.#enabled = true;
    }
    disable() {
        if (!this.#enabled) {
            return;
        }
        this.#securityOriginManager.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.SecurityOriginManager.Events.SecurityOriginAdded, this.#securityOriginAdded, this);
        this.#securityOriginManager.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.SecurityOriginManager.Events.SecurityOriginRemoved, this.#securityOriginRemoved, this);
        void this.storageAgent.invoke_setSharedStorageTracking({ enable: false });
        this.#removeAllOrigins();
        this.#enabled = false;
    }
    dispose() {
        this.disable();
    }
    #addAllOrigins() {
        for (const securityOrigin of this.#securityOriginManager.securityOrigins()) {
            void this.#maybeAddOrigin(securityOrigin);
        }
    }
    #removeAllOrigins() {
        for (const securityOrigin of this.#storages.keys()) {
            this.#removeOrigin(securityOrigin);
        }
    }
    #securityOriginAdded(event) {
        this.#maybeAddOrigin(event.data);
    }
    #maybeAddOrigin(securityOrigin) {
        const parsedSecurityOrigin = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL(securityOrigin);
        // These are "opaque" origins which are not supposed to support shared storage.
        if (!parsedSecurityOrigin.isValid || parsedSecurityOrigin.scheme === 'data' ||
            parsedSecurityOrigin.scheme === 'about' || parsedSecurityOrigin.scheme === 'javascript') {
            return;
        }
        // Only add origin if it's not already added.
        if (this.#storages.has(securityOrigin)) {
            return;
        }
        const storage = new SharedStorageForOrigin(this, securityOrigin);
        this.#storages.set(securityOrigin, storage);
        this.dispatchEventToListeners("SharedStorageAdded" /* Events.SharedStorageAdded */, storage);
    }
    #securityOriginRemoved(event) {
        this.#removeOrigin(event.data);
    }
    #removeOrigin(securityOrigin) {
        const storage = this.storageForOrigin(securityOrigin);
        if (!storage) {
            return;
        }
        this.#storages.delete(securityOrigin);
        this.dispatchEventToListeners("SharedStorageRemoved" /* Events.SharedStorageRemoved */, storage);
    }
    storages() {
        return this.#storages.values();
    }
    storageForOrigin(origin) {
        return this.#storages.get(origin) || null;
    }
    numStoragesForTesting() {
        return this.#storages.size;
    }
    isChangeEvent(event) {
        return [
            "documentSet" /* Protocol.Storage.SharedStorageAccessType.DocumentSet */,
            "documentAppend" /* Protocol.Storage.SharedStorageAccessType.DocumentAppend */,
            "documentDelete" /* Protocol.Storage.SharedStorageAccessType.DocumentDelete */,
            "documentClear" /* Protocol.Storage.SharedStorageAccessType.DocumentClear */,
            "workletSet" /* Protocol.Storage.SharedStorageAccessType.WorkletSet */,
            "workletAppend" /* Protocol.Storage.SharedStorageAccessType.WorkletAppend */,
            "workletDelete" /* Protocol.Storage.SharedStorageAccessType.WorkletDelete */,
            "workletClear" /* Protocol.Storage.SharedStorageAccessType.WorkletClear */,
        ].includes(event.type);
    }
    sharedStorageAccessed(event) {
        if (this.isChangeEvent(event)) {
            const sharedStorage = this.storageForOrigin(event.ownerOrigin);
            if (sharedStorage) {
                const eventData = { accessTime: event.accessTime, type: event.type, mainFrameId: event.mainFrameId, params: event.params };
                // Forward events that may have changed `sharedStorage` to listeners for `sharedStorage`.
                sharedStorage.dispatchEventToListeners("SharedStorageChanged" /* SharedStorageForOrigin.Events.SharedStorageChanged */, eventData);
            }
            else {
                void this.#maybeAddOrigin(event.ownerOrigin);
            }
        }
        this.dispatchEventToListeners("SharedStorageAccess" /* Events.SharedStorageAccess */, event);
    }
    attributionReportingTriggerRegistered(_event) {
    }
    indexedDBListUpdated(_event) {
    }
    indexedDBContentUpdated(_event) {
    }
    cacheStorageListUpdated(_event) {
    }
    cacheStorageContentUpdated(_event) {
    }
    interestGroupAccessed(_event) {
    }
    interestGroupAuctionEventOccurred(_event) {
    }
    interestGroupAuctionNetworkRequestCreated(_event) {
    }
    storageBucketCreatedOrUpdated(_event) {
    }
    storageBucketDeleted(_event) {
    }
    attributionReportingSourceRegistered(_event) {
    }
}
_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.SDKModel.SDKModel.register(SharedStorageModel, { capabilities: 8192 /* SDK.Target.Capability.Storage */, autostart: false });
//# sourceMappingURL=SharedStorageModel.js.map

/***/ }),

/***/ "./panels/application/SharedStorageTreeElement.js":
/*!********************************************************!*\
  !*** ./panels/application/SharedStorageTreeElement.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedStorageTreeElement: () => (/* binding */ SharedStorageTreeElement)
/* harmony export */ });
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ApplicationPanelTreeElement.js */ "./panels/application/ApplicationPanelTreeElement.js");
/* harmony import */ var _SharedStorageItemsView_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SharedStorageItemsView.js */ "./panels/application/SharedStorageItemsView.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



class SharedStorageTreeElement extends _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_1__.ApplicationPanelTreeElement {
    view;
    constructor(resourcesPanel, sharedStorage) {
        super(resourcesPanel, sharedStorage.securityOrigin, false, 'shared-storage-instance');
    }
    static async createElement(resourcesPanel, sharedStorage) {
        const treeElement = new SharedStorageTreeElement(resourcesPanel, sharedStorage);
        treeElement.view = await _SharedStorageItemsView_js__WEBPACK_IMPORTED_MODULE_2__.SharedStorageItemsView.createView(sharedStorage);
        treeElement.view.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_0__.pane('shared-storage-data')}`);
        return treeElement;
    }
    get itemURL() {
        return 'shared-storage://';
    }
    onselect(selectedByUser) {
        super.onselect(selectedByUser);
        this.resourcesPanel.showView(this.view);
        return false;
    }
}
//# sourceMappingURL=SharedStorageTreeElement.js.map

/***/ }),

/***/ "./panels/application/StorageBucketsTreeElement.js":
/*!*********************************************************!*\
  !*** ./panels/application/StorageBucketsTreeElement.js ***!
  \*********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StorageBucketsTreeElement: () => (/* binding */ StorageBucketsTreeElement),
/* harmony export */   StorageBucketsTreeParentElement: () => (/* binding */ StorageBucketsTreeParentElement),
/* harmony export */   i18nString: () => (/* binding */ i18nString)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */ var _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/components/legacy_wrapper/legacy_wrapper.js */ "./ui/components/legacy_wrapper/legacy_wrapper.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ApplicationPanelSidebar_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ApplicationPanelSidebar.js */ "./panels/application/ApplicationPanelSidebar.js");
/* harmony import */ var _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ApplicationPanelTreeElement.js */ "./panels/application/ApplicationPanelTreeElement.js");
/* harmony import */ var _components_components_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/components.js */ "./panels/application/components/components.js");
/* harmony import */ var _ServiceWorkerCacheTreeElement_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ServiceWorkerCacheTreeElement.js */ "./panels/application/ServiceWorkerCacheTreeElement.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ApplicationPanelSidebar_js__WEBPACK_IMPORTED_MODULE_5__]);
_ApplicationPanelSidebar_js__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.









const UIStrings = {
    /**
     *@description Label for an item in the Application Panel Sidebar of the Application panel
     * Storage Buckets allow developers to seperate site data into buckets so that they can be
     * deleted independently.
     */
    storageBuckets: 'Storage buckets',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/application/StorageBucketsTreeElement.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
class StorageBucketsTreeParentElement extends _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_6__.ExpandableApplicationPanelTreeElement {
    bucketTreeElements = new Set();
    constructor(storagePanel) {
        super(storagePanel, i18nString(UIStrings.storageBuckets), 'storage-buckets');
        const icon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__.Icon.create('database');
        this.setLeadingIcons([icon]);
        this.setLink('https://github.com/WICG/storage-buckets/blob/gh-pages/explainer.md');
    }
    initialize() {
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.StorageBucketsModel.StorageBucketsModel, "BucketAdded" /* SDK.StorageBucketsModel.Events.BucketAdded */, this.bucketAdded, this);
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.StorageBucketsModel.StorageBucketsModel, "BucketRemoved" /* SDK.StorageBucketsModel.Events.BucketRemoved */, this.bucketRemoved, this);
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.StorageBucketsModel.StorageBucketsModel, "BucketChanged" /* SDK.StorageBucketsModel.Events.BucketChanged */, this.bucketChanged, this);
        for (const bucketsModel of _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().models(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.StorageBucketsModel.StorageBucketsModel)) {
            const buckets = bucketsModel.getBuckets();
            for (const bucket of buckets) {
                this.addBucketTreeElement(bucketsModel, bucket);
            }
        }
    }
    removeBucketsForModel(model) {
        for (const bucketTreeElement of this.bucketTreeElements) {
            if (bucketTreeElement.model === model) {
                this.removeBucketTreeElement(bucketTreeElement);
            }
        }
    }
    bucketAdded({ data: { model, bucketInfo } }) {
        this.addBucketTreeElement(model, bucketInfo);
    }
    bucketRemoved({ data: { model, bucketInfo } }) {
        const idbDatabaseTreeElement = this.getBucketTreeElement(model, bucketInfo);
        if (!idbDatabaseTreeElement) {
            return;
        }
        this.removeBucketTreeElement(idbDatabaseTreeElement);
    }
    bucketChanged({ data: { model, bucketInfo } }) {
        const idbDatabaseTreeElement = this.getBucketTreeElement(model, bucketInfo);
        if (!idbDatabaseTreeElement) {
            return;
        }
        idbDatabaseTreeElement.bucketInfo = bucketInfo;
    }
    addBucketTreeElement(model, bucketInfo) {
        if (bucketInfo.bucket.name === undefined) {
            return;
        }
        const singleBucketTreeElement = new StorageBucketsTreeElement(this.resourcesPanel, model, bucketInfo);
        this.bucketTreeElements.add(singleBucketTreeElement);
        this.appendChild(singleBucketTreeElement);
        singleBucketTreeElement.initialize();
    }
    removeBucketTreeElement(bucketTreeElement) {
        this.removeChild(bucketTreeElement);
        this.bucketTreeElements.delete(bucketTreeElement);
        this.setExpandable(this.bucketTreeElements.size > 0);
    }
    get itemURL() {
        return 'storage-buckets-group://';
    }
    getBucketTreeElement(model, { bucket: { storageKey, name }, }) {
        for (const bucketTreeElement of this.bucketTreeElements) {
            if (bucketTreeElement.model === model && bucketTreeElement.bucketInfo.bucket.storageKey === storageKey &&
                bucketTreeElement.bucketInfo.bucket.name === name) {
                return bucketTreeElement;
            }
        }
        return null;
    }
}
class StorageBucketsTreeElement extends _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_6__.ExpandableApplicationPanelTreeElement {
    storageBucketInfo;
    bucketModel;
    view;
    constructor(resourcesPanel, model, bucketInfo) {
        const { bucket } = bucketInfo;
        const { origin } = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.StorageKeyManager.parseStorageKey(bucketInfo.bucket.storageKey);
        super(resourcesPanel, `${bucket.name} - ${origin}`, 'storage-bucket');
        this.bucketModel = model;
        this.storageBucketInfo = bucketInfo;
        const icon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__.Icon.create('database');
        this.setLeadingIcons([icon]);
    }
    initialize() {
        const { bucket } = this.bucketInfo;
        const indexedDBTreeElement = new _ApplicationPanelSidebar_js__WEBPACK_IMPORTED_MODULE_5__.IndexedDBTreeElement(this.resourcesPanel, bucket);
        this.appendChild(indexedDBTreeElement);
        const serviceWorkerCacheTreeElement = new _ServiceWorkerCacheTreeElement_js__WEBPACK_IMPORTED_MODULE_8__.ServiceWorkerCacheTreeElement(this.resourcesPanel, bucket);
        this.appendChild(serviceWorkerCacheTreeElement);
        serviceWorkerCacheTreeElement.initialize();
    }
    get itemURL() {
        const { bucket } = this.bucketInfo;
        return `storage-buckets-group://${bucket.name}/${bucket.storageKey}`;
    }
    get model() {
        return this.bucketModel;
    }
    get bucketInfo() {
        return this.storageBucketInfo;
    }
    set bucketInfo(bucketInfo) {
        this.storageBucketInfo = bucketInfo;
        if (this.view) {
            this.view.getComponent().setStorageBucket(this.storageBucketInfo);
        }
    }
    onselect(selectedByUser) {
        super.onselect(selectedByUser);
        if (!this.view) {
            this.view =
                _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_3__.LegacyWrapper.legacyWrapper(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Widget.Widget, new _components_components_js__WEBPACK_IMPORTED_MODULE_7__.StorageMetadataView.StorageMetadataView());
            this.view.getComponent().enableStorageBucketControls(this.model);
            this.view.getComponent().setStorageBucket(this.storageBucketInfo);
        }
        this.showView(this.view);
        return false;
    }
}
//# sourceMappingURL=StorageBucketsTreeElement.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./panels/application/TrustTokensTreeElement.js":
/*!******************************************************!*\
  !*** ./panels/application/TrustTokensTreeElement.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TrustTokensTreeElement: () => (/* binding */ TrustTokensTreeElement),
/* harmony export */   i18nString: () => (/* binding */ i18nString)
/* harmony export */ });
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */ var _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/components/legacy_wrapper/legacy_wrapper.js */ "./ui/components/legacy_wrapper/legacy_wrapper.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ApplicationPanelTreeElement.js */ "./panels/application/ApplicationPanelTreeElement.js");
/* harmony import */ var _components_components_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/components.js */ "./panels/application/components/components.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







const UIStrings = {
    /**
     * @description Hover text for an info icon in the Private State Token panel.
     * Previously known as 'Trust Tokens'.
     */
    trustTokens: 'Private state tokens',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/application/TrustTokensTreeElement.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
class TrustTokensTreeElement extends _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_5__.ApplicationPanelTreeElement {
    view;
    constructor(storagePanel) {
        super(storagePanel, i18nString(UIStrings.trustTokens), false, 'private-state-tokens');
        const icon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__.Icon.create('database');
        this.setLeadingIcons([icon]);
    }
    get itemURL() {
        return 'trustTokens://';
    }
    onselect(selectedByUser) {
        super.onselect(selectedByUser);
        if (!this.view) {
            this.view = _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_3__.LegacyWrapper.legacyWrapper(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Widget.Widget, new _components_components_js__WEBPACK_IMPORTED_MODULE_6__.TrustTokensView.TrustTokensView(), 'trust-tokens');
        }
        this.showView(this.view);
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.userMetrics.panelShown('trust-tokens');
        return false;
    }
}
//# sourceMappingURL=TrustTokensTreeElement.js.map

/***/ }),

/***/ "./panels/application/reportingApiReportsView.css.js":
/*!***********************************************************!*\
  !*** ./panels/application/reportingApiReportsView.css.js ***!
  \***********************************************************/
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

.placeholder {
  align-items: center;
  justify-content: center;
  font-size: 13px;
  color: var(--sys-color-token-subtle);
  overflow: auto;
  text-align: center;

  & div {
    width: 100%;
  }
}

/*# sourceURL=reportingApiReportsView.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./panels/application/resourcesSidebar.css.js":
/*!****************************************************!*\
  !*** ./panels/application/resourcesSidebar.css.js ***!
  \****************************************************/
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

.tree-outline {
  padding-left: 0;
  color: var(--sys-color-on-surface);
}

.tree-outline > ol {
  padding-bottom: 10px;
}

.tree-outline li {
  min-height: 20px;
}

.tree-outline li[role="heading"] {
  color: var(--sys-color-on-surface-subtle);
  font-weight: 500;
}

li.storage-group-list-item {
  padding: 10px 8px 6px;
}

li.storage-group-list-item:not(:first-child) {
  border-top: 1px solid var(--sys-color-divider);
}

li.storage-group-list-item::before {
  display: none;
}

.icons-container devtools-icon.red-icon {
  color: var(--icon-error);
}

.icons-container devtools-icon.warn-icon {
  color: var(--icon-warning);
}

devtools-icon.navigator-file-tree-item {
  color: var(--icon-file-default);
}

devtools-icon.navigator-folder-tree-item {
  color: var(--icon-folder-primary);
}

devtools-icon.navigator-script-tree-item {
  color: var(--icon-file-script);
}

devtools-icon.navigator-stylesheet-tree-item {
  color: var(--icon-file-styles);
}

devtools-icon.navigator-image-tree-item,
devtools-icon.navigator-font-tree-item {
  color: var(--icon-file-image);
}

.window-closed .tree-element-title {
  text-decoration: line-through;
}

/*# sourceURL=resourcesSidebar.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./panels/application/sharedStorageEventsView.css.js":
/*!***********************************************************!*\
  !*** ./panels/application/sharedStorageEventsView.css.js ***!
  \***********************************************************/
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
 * Copyright 2022 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

devtools-shared-storage-access-grid {
  overflow: auto;
}

.placeholder {
  align-items: center;
  justify-content: center;
  font-size: 13px;
  color: var(--sys-color-token-subtle);
  overflow: auto;
  text-align: center;

  & div {
    width: 100%;
  }
}

/*# sourceURL=sharedStorageEventsView.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);