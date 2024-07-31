"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_application_ApplicationPanelSidebar_ts-src_panels_application_StorageBucketsTreeEl-6bb958"],{

/***/ "./src/panels/application/ApplicationPanelSidebar.ts":
/*!***********************************************************!*\
  !*** ./src/panels/application/ApplicationPanelSidebar.ts ***!
  \***********************************************************/
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
/* harmony export */   SharedStorageTreeElementDispatcher: () => (/* binding */ SharedStorageTreeElementDispatcher),
/* harmony export */   StorageCategoryView: () => (/* binding */ StorageCategoryView)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _core_root_root_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/root/root.js */ "./src/core/root/root.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../generated/protocol.js */ "./src/generated/protocol.ts");
/* harmony import */ var _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/issues_manager/issues_manager.js */ "./src/models/issues_manager/issues_manager.ts");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ui/components/legacy_wrapper/legacy_wrapper.js */ "./src/ui/components/legacy_wrapper/legacy_wrapper.ts");
/* harmony import */ var _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ui/legacy/components/source_frame/source_frame.js */ "./src/ui/legacy/components/source_frame/source_frame.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ApplicationPanelTreeElement.js */ "./src/panels/application/ApplicationPanelTreeElement.ts");
/* harmony import */ var _AppManifestView_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./AppManifestView.js */ "./src/panels/application/AppManifestView.ts");
/* harmony import */ var _BackForwardCacheTreeElement_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./BackForwardCacheTreeElement.js */ "./src/panels/application/BackForwardCacheTreeElement.ts");
/* harmony import */ var _BackgroundServiceModel_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./BackgroundServiceModel.js */ "./src/panels/application/BackgroundServiceModel.ts");
/* harmony import */ var _BackgroundServiceView_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./BackgroundServiceView.js */ "./src/panels/application/BackgroundServiceView.ts");
/* harmony import */ var _BounceTrackingMitigationsTreeElement_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./BounceTrackingMitigationsTreeElement.js */ "./src/panels/application/BounceTrackingMitigationsTreeElement.ts");
/* harmony import */ var _components_components_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/components.js */ "./src/panels/application/components/components.ts");
/* harmony import */ var _DOMStorageModel_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./DOMStorageModel.js */ "./src/panels/application/DOMStorageModel.ts");
/* harmony import */ var _IndexedDBModel_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./IndexedDBModel.js */ "./src/panels/application/IndexedDBModel.ts");
/* harmony import */ var _IndexedDBViews_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./IndexedDBViews.js */ "./src/panels/application/IndexedDBViews.ts");
/* harmony import */ var _InterestGroupStorageModel_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./InterestGroupStorageModel.js */ "./src/panels/application/InterestGroupStorageModel.ts");
/* harmony import */ var _InterestGroupTreeElement_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./InterestGroupTreeElement.js */ "./src/panels/application/InterestGroupTreeElement.ts");
/* harmony import */ var _OpenedWindowDetailsView_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./OpenedWindowDetailsView.js */ "./src/panels/application/OpenedWindowDetailsView.ts");
/* harmony import */ var _PreloadingTreeElement_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./PreloadingTreeElement.js */ "./src/panels/application/PreloadingTreeElement.ts");
/* harmony import */ var _ReportingApiTreeElement_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./ReportingApiTreeElement.js */ "./src/panels/application/ReportingApiTreeElement.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './resourcesSidebar.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ServiceWorkerCacheTreeElement_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./ServiceWorkerCacheTreeElement.js */ "./src/panels/application/ServiceWorkerCacheTreeElement.ts");
/* harmony import */ var _ServiceWorkersView_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./ServiceWorkersView.js */ "./src/panels/application/ServiceWorkersView.ts");
/* harmony import */ var _SharedStorageListTreeElement_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./SharedStorageListTreeElement.js */ "./src/panels/application/SharedStorageListTreeElement.ts");
/* harmony import */ var _SharedStorageModel_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./SharedStorageModel.js */ "./src/panels/application/SharedStorageModel.ts");
/* harmony import */ var _SharedStorageTreeElement_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./SharedStorageTreeElement.js */ "./src/panels/application/SharedStorageTreeElement.ts");
/* harmony import */ var _StorageBucketsTreeElement_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./StorageBucketsTreeElement.js */ "./src/panels/application/StorageBucketsTreeElement.ts");
/* harmony import */ var _StorageView_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./StorageView.js */ "./src/panels/application/StorageView.ts");
/* harmony import */ var _TrustTokensTreeElement_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./TrustTokensTreeElement.js */ "./src/panels/application/TrustTokensTreeElement.ts");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_PreloadingTreeElement_js__WEBPACK_IMPORTED_MODULE_25__, _StorageBucketsTreeElement_js__WEBPACK_IMPORTED_MODULE_33__]);
([_PreloadingTreeElement_js__WEBPACK_IMPORTED_MODULE_25__, _StorageBucketsTreeElement_js__WEBPACK_IMPORTED_MODULE_33__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ManifestChildTreeElement_sectionElement, _ManifestChildTreeElement_sectionFieldElement;
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
var SharedStorageTreeElementDispatcher;
(function (SharedStorageTreeElementDispatcher) {
    let Events;
    (function (Events) {
        Events["SharedStorageTreeElementAdded"] = "SharedStorageTreeElementAdded";
    })(Events = SharedStorageTreeElementDispatcher.Events || (SharedStorageTreeElementDispatcher.Events = {}));
})(SharedStorageTreeElementDispatcher || (SharedStorageTreeElementDispatcher = {}));
class ApplicationPanelSidebar extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.Widget.VBox {
    constructor(panel) {
        super();
        Object.defineProperty(this, "panel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "sidebarTree", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "applicationTreeElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "serviceWorkersTreeElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "localStorageListTreeElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "sessionStorageListTreeElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "indexedDBListTreeElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "interestGroupTreeElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "cookieListTreeElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "trustTokensTreeElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "cacheStorageListTreeElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "sharedStorageListTreeElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "storageBucketsTreeElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "backForwardCacheListTreeElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "backgroundFetchTreeElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "backgroundSyncTreeElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "bounceTrackingMitigationsTreeElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "notificationsTreeElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "paymentHandlerTreeElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "periodicBackgroundSyncTreeElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "pushMessagingTreeElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "reportingApiTreeElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "preloadingSummaryTreeElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "resourcesSection", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "domStorageTreeElements", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "sharedStorageTreeElements", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "domains", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        // Holds main frame target.
        Object.defineProperty(this, "target", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "previousHoveredElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "sharedStorageTreeElementDispatcher", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.panel = panel;
        this.sidebarTree = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.TreeOutline.TreeOutlineInShadow();
        this.sidebarTree.element.classList.add('resources-sidebar');
        this.sidebarTree.element.classList.add('filter-all');
        // Listener needs to have been set up before the elements are added
        this.sidebarTree.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.TreeOutline.Events.ElementAttached, this.treeElementAdded, this);
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
            new _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_12__.ExpandableApplicationPanelTreeElement(panel, i18nString(UIStrings.localStorage), 'local-storage');
        this.localStorageListTreeElement.setLink('https://developer.chrome.com/docs/devtools/storage/localstorage/?utm_source=devtools');
        const localStorageIcon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_8__.Icon.create('table');
        this.localStorageListTreeElement.setLeadingIcons([localStorageIcon]);
        storageTreeElement.appendChild(this.localStorageListTreeElement);
        this.sessionStorageListTreeElement =
            new _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_12__.ExpandableApplicationPanelTreeElement(panel, i18nString(UIStrings.sessionStorage), 'session-storage');
        this.sessionStorageListTreeElement.setLink('https://developer.chrome.com/docs/devtools/storage/sessionstorage/?utm_source=devtools');
        const sessionStorageIcon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_8__.Icon.create('table');
        this.sessionStorageListTreeElement.setLeadingIcons([sessionStorageIcon]);
        storageTreeElement.appendChild(this.sessionStorageListTreeElement);
        this.indexedDBListTreeElement = new IndexedDBTreeElement(panel);
        this.indexedDBListTreeElement.setLink('https://developer.chrome.com/docs/devtools/storage/indexeddb/?utm_source=devtools');
        storageTreeElement.appendChild(this.indexedDBListTreeElement);
        this.cookieListTreeElement =
            new _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_12__.ExpandableApplicationPanelTreeElement(panel, i18nString(UIStrings.cookies), 'cookies');
        this.cookieListTreeElement.setLink('https://developer.chrome.com/docs/devtools/storage/cookies/?utm_source=devtools');
        const cookieIcon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_8__.Icon.create('cookie');
        this.cookieListTreeElement.setLeadingIcons([cookieIcon]);
        storageTreeElement.appendChild(this.cookieListTreeElement);
        this.trustTokensTreeElement = new _TrustTokensTreeElement_js__WEBPACK_IMPORTED_MODULE_35__.TrustTokensTreeElement(panel);
        storageTreeElement.appendChild(this.trustTokensTreeElement);
        this.interestGroupTreeElement = new _InterestGroupTreeElement_js__WEBPACK_IMPORTED_MODULE_23__.InterestGroupTreeElement(panel);
        storageTreeElement.appendChild(this.interestGroupTreeElement);
        this.sharedStorageListTreeElement = new _SharedStorageListTreeElement_js__WEBPACK_IMPORTED_MODULE_30__.SharedStorageListTreeElement(panel);
        storageTreeElement.appendChild(this.sharedStorageListTreeElement);
        this.cacheStorageListTreeElement = new _ServiceWorkerCacheTreeElement_js__WEBPACK_IMPORTED_MODULE_28__.ServiceWorkerCacheTreeElement(panel);
        storageTreeElement.appendChild(this.cacheStorageListTreeElement);
        this.storageBucketsTreeElement = new _StorageBucketsTreeElement_js__WEBPACK_IMPORTED_MODULE_33__.StorageBucketsTreeParentElement(panel);
        storageTreeElement.appendChild(this.storageBucketsTreeElement);
        const backgroundServiceSectionTitle = i18nString(UIStrings.backgroundServices);
        const backgroundServiceTreeElement = this.addSidebarSection(backgroundServiceSectionTitle, 'background-services');
        this.backForwardCacheListTreeElement = new _BackForwardCacheTreeElement_js__WEBPACK_IMPORTED_MODULE_14__.BackForwardCacheTreeElement(panel);
        backgroundServiceTreeElement.appendChild(this.backForwardCacheListTreeElement);
        this.backgroundFetchTreeElement =
            new BackgroundServiceTreeElement(panel, _generated_protocol_js__WEBPACK_IMPORTED_MODULE_6__.BackgroundService.ServiceName.BackgroundFetch);
        backgroundServiceTreeElement.appendChild(this.backgroundFetchTreeElement);
        this.backgroundSyncTreeElement =
            new BackgroundServiceTreeElement(panel, _generated_protocol_js__WEBPACK_IMPORTED_MODULE_6__.BackgroundService.ServiceName.BackgroundSync);
        backgroundServiceTreeElement.appendChild(this.backgroundSyncTreeElement);
        this.bounceTrackingMitigationsTreeElement = new _BounceTrackingMitigationsTreeElement_js__WEBPACK_IMPORTED_MODULE_17__.BounceTrackingMitigationsTreeElement(panel);
        backgroundServiceTreeElement.appendChild(this.bounceTrackingMitigationsTreeElement);
        this.notificationsTreeElement =
            new BackgroundServiceTreeElement(panel, _generated_protocol_js__WEBPACK_IMPORTED_MODULE_6__.BackgroundService.ServiceName.Notifications);
        backgroundServiceTreeElement.appendChild(this.notificationsTreeElement);
        this.paymentHandlerTreeElement =
            new BackgroundServiceTreeElement(panel, _generated_protocol_js__WEBPACK_IMPORTED_MODULE_6__.BackgroundService.ServiceName.PaymentHandler);
        backgroundServiceTreeElement.appendChild(this.paymentHandlerTreeElement);
        this.periodicBackgroundSyncTreeElement =
            new BackgroundServiceTreeElement(panel, _generated_protocol_js__WEBPACK_IMPORTED_MODULE_6__.BackgroundService.ServiceName.PeriodicBackgroundSync);
        backgroundServiceTreeElement.appendChild(this.periodicBackgroundSyncTreeElement);
        if (_core_root_root_js__WEBPACK_IMPORTED_MODULE_4__.Runtime.experiments.isEnabled(_core_root_root_js__WEBPACK_IMPORTED_MODULE_4__.Runtime.ExperimentName.PRELOADING_STATUS_PANEL)) {
            this.preloadingSummaryTreeElement = new _PreloadingTreeElement_js__WEBPACK_IMPORTED_MODULE_25__.PreloadingSummaryTreeElement(panel);
            backgroundServiceTreeElement.appendChild(this.preloadingSummaryTreeElement);
            this.preloadingSummaryTreeElement.constructChildren(panel);
        }
        this.pushMessagingTreeElement =
            new BackgroundServiceTreeElement(panel, _generated_protocol_js__WEBPACK_IMPORTED_MODULE_6__.BackgroundService.ServiceName.PushMessaging);
        backgroundServiceTreeElement.appendChild(this.pushMessagingTreeElement);
        this.reportingApiTreeElement = new _ReportingApiTreeElement_js__WEBPACK_IMPORTED_MODULE_26__.ReportingApiTreeElement(panel);
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
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().observeModels(_DOMStorageModel_js__WEBPACK_IMPORTED_MODULE_19__.DOMStorageModel, {
            modelAdded: (model) => this.domStorageModelAdded(model),
            modelRemoved: (model) => this.domStorageModelRemoved(model),
        }, { scoped: true });
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().observeModels(_IndexedDBModel_js__WEBPACK_IMPORTED_MODULE_20__.IndexedDBModel, {
            modelAdded: (model) => this.indexedDBModelAdded(model),
            modelRemoved: (model) => this.indexedDBModelRemoved(model),
        }, { scoped: true });
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().observeModels(_InterestGroupStorageModel_js__WEBPACK_IMPORTED_MODULE_22__.InterestGroupStorageModel, {
            modelAdded: (model) => this.interestGroupModelAdded(model),
            modelRemoved: (model) => this.interestGroupModelRemoved(model),
        }, { scoped: true });
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().observeModels(_SharedStorageModel_js__WEBPACK_IMPORTED_MODULE_31__.SharedStorageModel, {
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
        const treeElement = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.TreeOutline.TreeElement(title, true, jslogContext);
        treeElement.listItemElement.classList.add('storage-group-list-item');
        treeElement.setCollapsible(false);
        treeElement.selectable = false;
        this.sidebarTree.appendChild(treeElement);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.ARIAUtils.markAsHeading(treeElement.listItemElement, 3);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.ARIAUtils.setLabel(treeElement.childrenListElement, title);
        return treeElement;
    }
    targetAdded(target) {
        if (target !== target.outermostTarget()) {
            return;
        }
        this.target = target;
        const interestGroupModel = target.model(_InterestGroupStorageModel_js__WEBPACK_IMPORTED_MODULE_22__.InterestGroupStorageModel);
        if (interestGroupModel) {
            interestGroupModel.addEventListener(_InterestGroupStorageModel_js__WEBPACK_IMPORTED_MODULE_22__.Events.InterestGroupAccess, this.interestGroupAccess, this);
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
        const interestGroupModel = target.model(_InterestGroupStorageModel_js__WEBPACK_IMPORTED_MODULE_22__.InterestGroupStorageModel);
        if (interestGroupModel) {
            interestGroupModel.removeEventListener(_InterestGroupStorageModel_js__WEBPACK_IMPORTED_MODULE_22__.Events.InterestGroupAccess, this.interestGroupAccess, this);
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
        const interestGroupModel = this.target && this.target.model(_InterestGroupStorageModel_js__WEBPACK_IMPORTED_MODULE_22__.InterestGroupStorageModel);
        if (interestGroupModel) {
            interestGroupModel.enable();
        }
        this.cacheStorageListTreeElement.initialize();
        const backgroundServiceModel = this.target && this.target.model(_BackgroundServiceModel_js__WEBPACK_IMPORTED_MODULE_15__.BackgroundServiceModel) || null;
        this.backgroundFetchTreeElement && this.backgroundFetchTreeElement.initialize(backgroundServiceModel);
        this.backgroundSyncTreeElement && this.backgroundSyncTreeElement.initialize(backgroundServiceModel);
        this.notificationsTreeElement.initialize(backgroundServiceModel);
        this.paymentHandlerTreeElement.initialize(backgroundServiceModel);
        this.periodicBackgroundSyncTreeElement.initialize(backgroundServiceModel);
        this.pushMessagingTreeElement.initialize(backgroundServiceModel);
        this.storageBucketsTreeElement?.initialize();
        if (_core_root_root_js__WEBPACK_IMPORTED_MODULE_4__.Runtime.experiments.isEnabled(_core_root_root_js__WEBPACK_IMPORTED_MODULE_4__.Runtime.ExperimentName.PRELOADING_STATUS_PANEL)) {
            const preloadingModel = this.target?.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.PreloadingModel.PreloadingModel);
            if (preloadingModel) {
                this.preloadingSummaryTreeElement?.initialize(preloadingModel);
            }
        }
    }
    domStorageModelAdded(model) {
        model.enable();
        model.storages().forEach(this.addDOMStorage.bind(this));
        model.addEventListener(_DOMStorageModel_js__WEBPACK_IMPORTED_MODULE_19__.Events.DOMStorageAdded, this.domStorageAdded, this);
        model.addEventListener(_DOMStorageModel_js__WEBPACK_IMPORTED_MODULE_19__.Events.DOMStorageRemoved, this.domStorageRemoved, this);
    }
    domStorageModelRemoved(model) {
        model.storages().forEach(this.removeDOMStorage.bind(this));
        model.removeEventListener(_DOMStorageModel_js__WEBPACK_IMPORTED_MODULE_19__.Events.DOMStorageAdded, this.domStorageAdded, this);
        model.removeEventListener(_DOMStorageModel_js__WEBPACK_IMPORTED_MODULE_19__.Events.DOMStorageRemoved, this.domStorageRemoved, this);
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
        model.addEventListener(_InterestGroupStorageModel_js__WEBPACK_IMPORTED_MODULE_22__.Events.InterestGroupAccess, this.interestGroupAccess, this);
    }
    interestGroupModelRemoved(model) {
        model.disable();
        model.removeEventListener(_InterestGroupStorageModel_js__WEBPACK_IMPORTED_MODULE_22__.Events.InterestGroupAccess, this.interestGroupAccess, this);
    }
    async sharedStorageModelAdded(model) {
        await model.enable();
        for (const storage of model.storages()) {
            await this.addSharedStorage(storage);
        }
        model.addEventListener(_SharedStorageModel_js__WEBPACK_IMPORTED_MODULE_31__.Events.SharedStorageAdded, this.sharedStorageAdded, this);
        model.addEventListener(_SharedStorageModel_js__WEBPACK_IMPORTED_MODULE_31__.Events.SharedStorageRemoved, this.sharedStorageRemoved, this);
        model.addEventListener(_SharedStorageModel_js__WEBPACK_IMPORTED_MODULE_31__.Events.SharedStorageAccess, this.sharedStorageAccess, this);
    }
    sharedStorageModelRemoved(model) {
        model.disable();
        for (const storage of model.storages()) {
            this.removeSharedStorage(storage);
        }
        model.removeEventListener(_SharedStorageModel_js__WEBPACK_IMPORTED_MODULE_31__.Events.SharedStorageAdded, this.sharedStorageAdded, this);
        model.removeEventListener(_SharedStorageModel_js__WEBPACK_IMPORTED_MODULE_31__.Events.SharedStorageRemoved, this.sharedStorageRemoved, this);
        model.removeEventListener(_SharedStorageModel_js__WEBPACK_IMPORTED_MODULE_31__.Events.SharedStorageAccess, this.sharedStorageAccess, this);
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
        const sharedStorageTreeElement = await _SharedStorageTreeElement_js__WEBPACK_IMPORTED_MODULE_32__.SharedStorageTreeElement.createElement(this.panel, sharedStorage);
        // A tree element for `sharedStorage.securityOrigin` may have been added while we were waiting for `sharedStorageTreeElement` to be created.
        if (this.sharedStorageTreeElements.has(sharedStorage.securityOrigin)) {
            return;
        }
        this.sharedStorageTreeElements.set(sharedStorage.securityOrigin, sharedStorageTreeElement);
        this.sharedStorageListTreeElement.appendChild(sharedStorageTreeElement);
        this.sharedStorageTreeElementDispatcher.dispatchEventToListeners(SharedStorageTreeElementDispatcher.Events.SharedStorageTreeElementAdded, { origin: sharedStorage.securityOrigin });
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
        const listNode = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.UIUtils.enclosingNodeOrSelfWithNodeName(nodeUnderMouse, 'li');
        if (!listNode) {
            return;
        }
        const element = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.TreeOutline.TreeElement.getTreeElementBylistItemNode(listNode);
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
        this.sidebarTree.registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './resourcesSidebar.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
    }
}
class BackgroundServiceTreeElement extends _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_12__.ApplicationPanelTreeElement {
    constructor(storagePanel, serviceName) {
        super(storagePanel, _BackgroundServiceView_js__WEBPACK_IMPORTED_MODULE_16__.BackgroundServiceView.getUIString(serviceName), false, _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.StringUtilities.toKebabCase(serviceName));
        Object.defineProperty(this, "serviceName", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "view", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "model", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "selectedInternal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.serviceName = serviceName;
        /* Whether the element has been selected. */
        this.selectedInternal = false;
        this.view = null;
        this.model = null;
        const backgroundServiceIcon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_8__.Icon.create(this.getIconType());
        this.setLeadingIcons([backgroundServiceIcon]);
    }
    getIconType() {
        switch (this.serviceName) {
            case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_6__.BackgroundService.ServiceName.BackgroundFetch:
                return 'arrow-up-down';
            case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_6__.BackgroundService.ServiceName.BackgroundSync:
                return 'sync';
            case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_6__.BackgroundService.ServiceName.PushMessaging:
                return 'cloud';
            case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_6__.BackgroundService.ServiceName.Notifications:
                return 'bell';
            case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_6__.BackgroundService.ServiceName.PaymentHandler:
                return 'credit-card';
            case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_6__.BackgroundService.ServiceName.PeriodicBackgroundSync:
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
            this.view = new _BackgroundServiceView_js__WEBPACK_IMPORTED_MODULE_16__.BackgroundServiceView(this.serviceName, this.model);
        }
        this.showView(this.view);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.Context.Context.instance().setFlavor(_BackgroundServiceView_js__WEBPACK_IMPORTED_MODULE_16__.BackgroundServiceView, this.view);
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.panelShown('background_service_' + this.serviceName);
        return false;
    }
}
class ServiceWorkersTreeElement extends _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_12__.ApplicationPanelTreeElement {
    constructor(storagePanel) {
        super(storagePanel, _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.lockedString('Service workers'), false, 'service-workers');
        Object.defineProperty(this, "view", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        const icon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_8__.Icon.create('gears');
        this.setLeadingIcons([icon]);
    }
    get itemURL() {
        return 'service-workers://';
    }
    onselect(selectedByUser) {
        super.onselect(selectedByUser);
        if (!this.view) {
            this.view = new _ServiceWorkersView_js__WEBPACK_IMPORTED_MODULE_29__.ServiceWorkersView();
        }
        this.showView(this.view);
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.panelShown('service-workers');
        return false;
    }
}
class AppManifestTreeElement extends _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_12__.ApplicationPanelTreeElement {
    constructor(storagePanel) {
        super(storagePanel, i18nString(UIStrings.manifest), true, 'manifest');
        Object.defineProperty(this, "view", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        const icon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_8__.Icon.create('document');
        this.setLeadingIcons([icon]);
        self.onInvokeElement(this.listItemElement, this.onInvoke.bind(this));
        const emptyView = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.EmptyWidget.EmptyWidget(i18nString(UIStrings.noManifestDetected));
        // TODO(crbug.com/1156978): Replace UI.ReportView.ReportView with ReportView.ts web component.
        const reportView = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.ReportView.ReportView(i18nString(UIStrings.appManifest));
        this.view = new _AppManifestView_js__WEBPACK_IMPORTED_MODULE_13__.AppManifestView(emptyView, reportView, new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Throttler.Throttler(1000));
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.ARIAUtils.setLabel(this.listItemElement, i18nString(UIStrings.onInvokeManifestAlert));
        const handleExpansion = (hasManifest) => {
            this.setExpandable(hasManifest);
        };
        this.view.addEventListener(_AppManifestView_js__WEBPACK_IMPORTED_MODULE_13__.Events.ManifestDetected, event => handleExpansion(event.data));
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
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.ARIAUtils.alert(i18nString(UIStrings.onInvokeAlert, { PH1: this.listItemElement.title }));
    }
    showManifestView() {
        this.showView(this.view);
    }
}
class ManifestChildTreeElement extends _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_12__.ApplicationPanelTreeElement {
    constructor(storagePanel, element, childTitle, fieldElement, jslogContext) {
        super(storagePanel, childTitle, false, jslogContext);
        _ManifestChildTreeElement_sectionElement.set(this, void 0);
        _ManifestChildTreeElement_sectionFieldElement.set(this, void 0);
        const icon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_8__.Icon.create('document');
        this.setLeadingIcons([icon]);
        __classPrivateFieldSet(this, _ManifestChildTreeElement_sectionElement, element, "f");
        __classPrivateFieldSet(this, _ManifestChildTreeElement_sectionFieldElement, fieldElement, "f");
        self.onInvokeElement(this.listItemElement, this.onInvoke.bind(this));
        this.listItemElement.addEventListener('keydown', this.onInvokeElementKeydown.bind(this));
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.ARIAUtils.setLabel(this.listItemElement, i18nString(UIStrings.beforeInvokeAlert, { PH1: this.listItemElement.title }));
    }
    get itemURL() {
        return 'manifest://' + this.title;
    }
    onInvoke() {
        this.parent?.showManifestView();
        __classPrivateFieldGet(this, _ManifestChildTreeElement_sectionElement, "f").scrollIntoView();
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.ARIAUtils.alert(i18nString(UIStrings.onInvokeAlert, { PH1: this.listItemElement.title }));
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.manifestSectionSelected(this.listItemElement.title);
    }
    // direct focus to the corresponding element
    onInvokeElementKeydown(event) {
        if (event.key !== 'Tab' || event.shiftKey) {
            return;
        }
        const checkBoxElement = __classPrivateFieldGet(this, _ManifestChildTreeElement_sectionFieldElement, "f").querySelector('.mask-checkbox');
        let focusableElement = __classPrivateFieldGet(this, _ManifestChildTreeElement_sectionFieldElement, "f").querySelector('[tabindex="0"]');
        if (checkBoxElement && checkBoxElement.shadowRoot) {
            focusableElement = checkBoxElement.shadowRoot.querySelector('input') || null;
        }
        else if (!focusableElement) {
            // special case for protocol handler section since it is a custom Element and has different structure than the others
            focusableElement = __classPrivateFieldGet(this, _ManifestChildTreeElement_sectionFieldElement, "f").querySelector('devtools-protocol-handlers-view')
                ?.shadowRoot?.querySelector('[tabindex="0"]') ||
                null;
        }
        if (focusableElement) {
            focusableElement?.focus();
            event.consume(true);
        }
    }
}
_ManifestChildTreeElement_sectionElement = new WeakMap(), _ManifestChildTreeElement_sectionFieldElement = new WeakMap();
class ClearStorageTreeElement extends _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_12__.ApplicationPanelTreeElement {
    constructor(storagePanel) {
        super(storagePanel, i18nString(UIStrings.storage), false, 'storage');
        Object.defineProperty(this, "view", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        const icon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_8__.Icon.create('database');
        this.setLeadingIcons([icon]);
    }
    get itemURL() {
        return 'clear-storage://';
    }
    onselect(selectedByUser) {
        super.onselect(selectedByUser);
        if (!this.view) {
            this.view = new _StorageView_js__WEBPACK_IMPORTED_MODULE_34__.StorageView();
        }
        this.showView(this.view);
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.panelShown(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.PanelCodes[_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.PanelCodes.storage]);
        return false;
    }
}
class IndexedDBTreeElement extends _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_12__.ExpandableApplicationPanelTreeElement {
    constructor(storagePanel, storageBucket) {
        super(storagePanel, i18nString(UIStrings.indexeddb), 'indexed-db');
        Object.defineProperty(this, "idbDatabaseTreeElements", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "storageBucket", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        const icon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_8__.Icon.create('database');
        this.setLeadingIcons([icon]);
        this.idbDatabaseTreeElements = [];
        this.storageBucket = storageBucket;
        this.initialize();
    }
    initialize() {
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().addModelListener(_IndexedDBModel_js__WEBPACK_IMPORTED_MODULE_20__.IndexedDBModel, _IndexedDBModel_js__WEBPACK_IMPORTED_MODULE_20__.Events.DatabaseAdded, this.indexedDBAdded, this, { scoped: true });
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().addModelListener(_IndexedDBModel_js__WEBPACK_IMPORTED_MODULE_20__.IndexedDBModel, _IndexedDBModel_js__WEBPACK_IMPORTED_MODULE_20__.Events.DatabaseRemoved, this.indexedDBRemoved, this, { scoped: true });
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().addModelListener(_IndexedDBModel_js__WEBPACK_IMPORTED_MODULE_20__.IndexedDBModel, _IndexedDBModel_js__WEBPACK_IMPORTED_MODULE_20__.Events.DatabaseLoaded, this.indexedDBLoaded, this, { scoped: true });
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().addModelListener(_IndexedDBModel_js__WEBPACK_IMPORTED_MODULE_20__.IndexedDBModel, _IndexedDBModel_js__WEBPACK_IMPORTED_MODULE_20__.Events.IndexedDBContentUpdated, this.indexedDBContentUpdated, this, { scoped: true });
        // TODO(szuend): Replace with a Set once two web tests no longer directly access this private
        //               variable (indexeddb/live-update-indexeddb-content.js, indexeddb/delete-entry.js).
        this.idbDatabaseTreeElements = [];
        for (const indexedDBModel of _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().models(_IndexedDBModel_js__WEBPACK_IMPORTED_MODULE_20__.IndexedDBModel, { scoped: true })) {
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
        const contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.ContextMenu.ContextMenu(event);
        contextMenu.defaultSection().appendItem(i18nString(UIStrings.refreshIndexeddb), this.refreshIndexedDB.bind(this), { jslogContext: 'refresh-indexeddb' });
        void contextMenu.show();
    }
    refreshIndexedDB() {
        for (const indexedDBModel of _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().models(_IndexedDBModel_js__WEBPACK_IMPORTED_MODULE_20__.IndexedDBModel, { scoped: true })) {
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
class IDBDatabaseTreeElement extends _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_12__.ApplicationPanelTreeElement {
    constructor(storagePanel, model, databaseId) {
        super(storagePanel, databaseId.name, false, 'indexed-db-database');
        Object.defineProperty(this, "model", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "databaseId", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "idbObjectStoreTreeElements", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "database", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "view", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.model = model;
        this.databaseId = databaseId;
        this.idbObjectStoreTreeElements = new Map();
        const icon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_8__.Icon.create('database');
        this.setLeadingIcons([icon]);
        this.model.addEventListener(_IndexedDBModel_js__WEBPACK_IMPORTED_MODULE_20__.Events.DatabaseNamesRefreshed, this.refreshIndexedDB, this);
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
        const contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.ContextMenu.ContextMenu(event);
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
            this.view = _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_9__.LegacyWrapper.legacyWrapper(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.Widget.VBox, new _IndexedDBViews_js__WEBPACK_IMPORTED_MODULE_21__.IDBDatabaseView(this.model, this.database), 'indexeddb-data');
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
class IDBObjectStoreTreeElement extends _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_12__.ApplicationPanelTreeElement {
    constructor(storagePanel, model, databaseId, objectStore) {
        super(storagePanel, objectStore.name, false, 'indexed-db-object-store');
        Object.defineProperty(this, "model", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "databaseId", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "idbIndexTreeElements", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "objectStore", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "view", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.model = model;
        this.databaseId = databaseId;
        this.idbIndexTreeElements = new Map();
        this.objectStore = objectStore;
        this.view = null;
        const icon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_8__.Icon.create('table');
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
        const contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.ContextMenu.ContextMenu(event);
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
                new _IndexedDBViews_js__WEBPACK_IMPORTED_MODULE_21__.IDBDataView(this.model, this.databaseId, this.objectStore, null, this.refreshObjectStore.bind(this));
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
class IDBIndexTreeElement extends _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_12__.ApplicationPanelTreeElement {
    constructor(storagePanel, model, databaseId, objectStore, index, refreshObjectStore) {
        super(storagePanel, index.name, false, 'indexed-db');
        Object.defineProperty(this, "model", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "databaseId", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "objectStore", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "index", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "refreshObjectStore", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "view", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
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
            this.view = new _IndexedDBViews_js__WEBPACK_IMPORTED_MODULE_21__.IDBDataView(this.model, this.databaseId, this.objectStore, this.index, this.refreshObjectStore);
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
class DOMStorageTreeElement extends _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_12__.ApplicationPanelTreeElement {
    constructor(storagePanel, domStorage) {
        super(storagePanel, domStorage.storageKey ? _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.StorageKeyManager.parseStorageKey(domStorage.storageKey).origin :
            i18nString(UIStrings.localFiles), false, domStorage.isLocalStorage ? 'local-storage-for-domain' : 'session-storage-for-domain');
        Object.defineProperty(this, "domStorage", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.domStorage = domStorage;
        const icon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_8__.Icon.create('table');
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
        const contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.ContextMenu.ContextMenu(event);
        contextMenu.defaultSection().appendItem(i18nString(UIStrings.clear), () => this.domStorage.clear(), { jslogContext: 'clear' });
        void contextMenu.show();
    }
}
class CookieTreeElement extends _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_12__.ApplicationPanelTreeElement {
    constructor(storagePanel, frame, cookieUrl) {
        super(storagePanel, cookieUrl.securityOrigin() || i18nString(UIStrings.localFiles), false, 'cookies-for-frame');
        Object.defineProperty(this, "target", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "cookieDomainInternal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.target = frame.resourceTreeModel().target();
        this.cookieDomainInternal = cookieUrl.securityOrigin();
        this.tooltip = i18nString(UIStrings.cookiesUsedByFramesFromS, { PH1: this.cookieDomainInternal });
        const icon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_8__.Icon.create('cookie');
        // Note that we cannot use `cookieDomainInternal` here since it contains scheme.
        if (_models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_7__.RelatedIssue.hasThirdPartyPhaseoutCookieIssueForDomain(cookieUrl.domain())) {
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
        const contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.ContextMenu.ContextMenu(event);
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
class StorageCategoryView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.Widget.VBox {
    constructor() {
        super();
        Object.defineProperty(this, "emptyWidget", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "linkElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.element.classList.add('storage-view');
        this.emptyWidget = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.EmptyWidget.EmptyWidget('');
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
    constructor(storagePanel, treeElement) {
        Object.defineProperty(this, "panel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "treeElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "treeElementForFrameId", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "treeElementForTargetId", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.panel = storagePanel;
        this.treeElement = treeElement;
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.ARIAUtils.setLabel(this.treeElement.listItemNode, 'Resources Section');
        this.treeElementForFrameId = new Map();
        this.treeElementForTargetId = new Map();
        const frameManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.FrameManager.FrameManager.instance();
        frameManager.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.FrameManager.Events.FrameAddedToTarget, event => this.frameAdded(event.data.frame), this);
        frameManager.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.FrameManager.Events.FrameRemoved, event => this.frameDetached(event.data.frameId), this);
        frameManager.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.FrameManager.Events.FrameNavigated, event => this.frameNavigated(event.data.frame), this);
        frameManager.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.FrameManager.Events.ResourceAdded, event => this.resourceAdded(event.data.resource), this);
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.ChildTargetManager.ChildTargetManager, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.ChildTargetManager.Events.TargetCreated, this.windowOpened, this, { scoped: true });
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.ChildTargetManager.ChildTargetManager, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.ChildTargetManager.Events.TargetInfoChanged, this.windowChanged, this, { scoped: true });
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.ChildTargetManager.ChildTargetManager, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.ChildTargetManager.Events.TargetDestroyed, this.windowDestroyed, this, { scoped: true });
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
class FrameTreeElement extends _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_12__.ApplicationPanelTreeElement {
    constructor(section, frame) {
        super(section.panel, '', false, 'frame');
        Object.defineProperty(this, "section", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "frame", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "frameId", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "categoryElements", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "treeElementForResource", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "treeElementForWindow", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "treeElementForWorker", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "view", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
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
        const icon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_8__.Icon.create(this.getIconTypeForFrame(frame));
        if (frame.unreachableUrl()) {
            icon.classList.add('red-icon');
        }
        this.setLeadingIcons([icon]);
        this.invalidateChildren();
        this.frameId = frame.id;
        if (this.title !== frame.displayName()) {
            this.title = frame.displayName();
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.ARIAUtils.setLabel(this.listItemElement, this.title);
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
            this.view = _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_9__.LegacyWrapper.legacyWrapper(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.Widget.Widget, new _components_components_js__WEBPACK_IMPORTED_MODULE_18__.FrameDetailsView.FrameDetailsReportView(this.frame));
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
            this.view = _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_9__.LegacyWrapper.legacyWrapper(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.Widget.Widget, new _components_components_js__WEBPACK_IMPORTED_MODULE_18__.FrameDetailsView.FrameDetailsReportView(this.frame));
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
            categoryElement = new _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_12__.ExpandableApplicationPanelTreeElement(this.section.panel, resource.resourceType().category().title(), categoryName, categoryName === 'Frames');
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
            categoryElement = new _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_12__.ExpandableApplicationPanelTreeElement(this.section.panel, i18nString(UIStrings.openedWindows), categoryKey);
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
            categoryElement = new _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_12__.ExpandableApplicationPanelTreeElement(this.section.panel, categoryName, categoryKey);
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
            if (treeElement instanceof _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_12__.ExpandableApplicationPanelTreeElement) {
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
class FrameResourceTreeElement extends _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_12__.ApplicationPanelTreeElement {
    constructor(storagePanel, resource) {
        super(storagePanel, resource.isGenerated ? i18nString(UIStrings.documentNotAvailable) : resource.displayName, false, 'frame-resource');
        Object.defineProperty(this, "panel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "resource", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "previewPromise", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.panel = storagePanel;
        this.resource = resource;
        this.previewPromise = null;
        this.tooltip = resource.url;
        resourceToFrameResourceTreeElement.set(this.resource, this);
        const icon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_8__.Icon.create('document', 'navigator-file-tree-item');
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
        const viewPromise = _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_10__.PreviewFactory.PreviewFactory.createPreview(this.resource, this.resource.mimeType);
        this.previewPromise = viewPromise.then(view => {
            if (view) {
                return view;
            }
            return new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.EmptyWidget.EmptyWidget(this.resource.url);
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
        const contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.ContextMenu.ContextMenu(event);
        contextMenu.appendApplicableItems(this.resource);
        void contextMenu.show();
    }
    async revealResource(lineNumber, columnNumber) {
        this.revealAndSelect(true);
        const view = await this.panel.scheduleShowView(this.preparePreview());
        if (!(view instanceof _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_10__.ResourceSourceFrame.ResourceSourceFrame) || typeof lineNumber !== 'number') {
            return;
        }
        view.revealPosition({ lineNumber, columnNumber }, true);
    }
}
class FrameWindowTreeElement extends _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_12__.ApplicationPanelTreeElement {
    constructor(storagePanel, targetInfo) {
        super(storagePanel, targetInfo.title || i18nString(UIStrings.windowWithoutTitle), false, 'window');
        Object.defineProperty(this, "targetInfo", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "isWindowClosed", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "view", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.targetInfo = targetInfo;
        this.isWindowClosed = false;
        this.view = null;
        this.updateIcon(targetInfo.canAccessOpener);
    }
    updateIcon(canAccessOpener) {
        const iconType = canAccessOpener ? 'popup' : 'frame';
        const icon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_8__.Icon.create(iconType);
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
            this.view = new _OpenedWindowDetailsView_js__WEBPACK_IMPORTED_MODULE_24__.OpenedWindowDetailsView(this.targetInfo, this.isWindowClosed);
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
class WorkerTreeElement extends _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_12__.ApplicationPanelTreeElement {
    constructor(storagePanel, targetInfo) {
        super(storagePanel, targetInfo.title || targetInfo.url || i18nString(UIStrings.worker), false, 'worker');
        Object.defineProperty(this, "targetInfo", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "view", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.targetInfo = targetInfo;
        this.view = null;
        const icon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_8__.Icon.create('gears', 'navigator-file-tree-item');
        this.setLeadingIcons([icon]);
    }
    onselect(selectedByUser) {
        super.onselect(selectedByUser);
        if (!this.view) {
            this.view = new _OpenedWindowDetailsView_js__WEBPACK_IMPORTED_MODULE_24__.WorkerDetailsView(this.targetInfo);
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

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./src/panels/application/BackForwardCacheTreeElement.ts":
/*!***************************************************************!*\
  !*** ./src/panels/application/BackForwardCacheTreeElement.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BackForwardCacheTreeElement: () => (/* binding */ BackForwardCacheTreeElement)
/* harmony export */ });
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/components/legacy_wrapper/legacy_wrapper.js */ "./src/ui/components/legacy_wrapper/legacy_wrapper.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ApplicationPanelTreeElement.js */ "./src/panels/application/ApplicationPanelTreeElement.ts");
/* harmony import */ var _components_components_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/components.js */ "./src/panels/application/components/components.ts");
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
    constructor(resourcesPanel) {
        super(resourcesPanel, i18nString(UIStrings.backForwardCache), false, 'bfcache');
        Object.defineProperty(this, "view", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
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


/***/ }),

/***/ "./src/panels/application/BounceTrackingMitigationsTreeElement.ts":
/*!************************************************************************!*\
  !*** ./src/panels/application/BounceTrackingMitigationsTreeElement.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BounceTrackingMitigationsTreeElement: () => (/* binding */ BounceTrackingMitigationsTreeElement),
/* harmony export */   i18nString: () => (/* binding */ i18nString)
/* harmony export */ });
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/components/legacy_wrapper/legacy_wrapper.js */ "./src/ui/components/legacy_wrapper/legacy_wrapper.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ApplicationPanelTreeElement.js */ "./src/panels/application/ApplicationPanelTreeElement.ts");
/* harmony import */ var _components_components_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/components.js */ "./src/panels/application/components/components.ts");
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
    constructor(resourcesPanel) {
        super(resourcesPanel, i18nString(UIStrings.bounceTrackingMitigations), false, 'bounce-tracking-mitigations');
        Object.defineProperty(this, "view", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
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


/***/ }),

/***/ "./src/panels/application/InterestGroupStorageModel.ts":
/*!*************************************************************!*\
  !*** ./src/panels/application/InterestGroupStorageModel.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Events: () => (/* binding */ Events),
/* harmony export */   InterestGroupStorageModel: () => (/* binding */ InterestGroupStorageModel)
/* harmony export */ });
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
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
    constructor(target) {
        super(target);
        Object.defineProperty(this, "storageAgent", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "enabled", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
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
        this.dispatchEventToListeners(Events.InterestGroupAccess, event);
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
_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.SDKModel.SDKModel.register(InterestGroupStorageModel, { capabilities: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.Target.Capability.Storage, autostart: false });
var Events;
(function (Events) {
    Events["InterestGroupAccess"] = "InterestGroupAccess";
})(Events || (Events = {}));


/***/ }),

/***/ "./src/panels/application/InterestGroupStorageView.ts":
/*!************************************************************!*\
  !*** ./src/panels/application/InterestGroupStorageView.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InterestGroupStorageView: () => (/* binding */ InterestGroupStorageView)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../generated/protocol.js */ "./src/generated/protocol.ts");
/* harmony import */ var _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/components/source_frame/source_frame.js */ "./src/ui/legacy/components/source_frame/source_frame.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _components_components_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/components.js */ "./src/panels/application/components/components.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './interestGroupStorageView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







const UIStrings = {
    /**
     *@description Placeholder text instructing the user how to display interest group
     *details.
     */
    clickToDisplayBody: 'Click on any interest group event to display the group\'s current state',
    /**
     *@description Placeholder text telling the user no details are available for
     *the selected interest group.
     */
    noDataAvailable: 'No details available for the selected interest group. The browser may have left the group.',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/application/InterestGroupStorageView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
function eventEquals(a, b) {
    return (a.accessTime === b.accessTime && a.type === b.type && a.ownerOrigin === b.ownerOrigin && a.name === b.name);
}
class InterestGroupStorageView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.SplitWidget.SplitWidget {
    constructor(detailsGetter) {
        super(/* isVertical */ false, /* secondIsSidebar: */ true);
        Object.defineProperty(this, "interestGroupGrid", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new _components_components_js__WEBPACK_IMPORTED_MODULE_5__.InterestGroupAccessGrid.InterestGroupAccessGrid()
        });
        Object.defineProperty(this, "events", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        Object.defineProperty(this, "detailsGetter", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "noDataView", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "noDisplayView", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.pane('interest-groups')}`);
        this.detailsGetter = detailsGetter;
        const topPanel = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Widget.VBox();
        this.noDisplayView = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Widget.VBox();
        this.noDataView = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Widget.VBox();
        topPanel.setMinimumSize(0, 80);
        this.setMainWidget(topPanel);
        this.noDisplayView.setMinimumSize(0, 40);
        this.setSidebarWidget(this.noDisplayView);
        this.noDataView.setMinimumSize(0, 40);
        topPanel.contentElement.appendChild(this.interestGroupGrid);
        this.interestGroupGrid.addEventListener('cellfocused', this.onFocus.bind(this));
        this.noDisplayView.contentElement.classList.add('placeholder');
        this.noDisplayView.contentElement.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.pane('details').track({ resize: true })}`);
        const noDisplayDiv = this.noDisplayView.contentElement.createChild('div');
        noDisplayDiv.textContent = i18nString(UIStrings.clickToDisplayBody);
        this.noDataView.contentElement.classList.add('placeholder');
        this.noDataView.contentElement.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.pane('details').track({ resize: true })}`);
        const noDataDiv = this.noDataView.contentElement.createChild('div');
        noDataDiv.textContent = i18nString(UIStrings.noDataAvailable);
    }
    wasShown() {
        super.wasShown();
        const sbw = this.sidebarWidget();
        if (sbw) {
            sbw.registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './interestGroupStorageView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
        }
    }
    addEvent(event) {
        // Only add if not already present.
        const foundEvent = this.events.find(t => eventEquals(t, event));
        if (!foundEvent) {
            this.events.push(event);
            this.interestGroupGrid.data = this.events;
        }
    }
    clearEvents() {
        this.events = [];
        this.interestGroupGrid.data = this.events;
        this.setSidebarWidget(this.noDisplayView);
        this.sidebarUpdatedForTesting();
    }
    async onFocus(event) {
        const focusedEvent = event;
        const row = focusedEvent.data.row;
        if (!row) {
            return;
        }
        const ownerOrigin = row.cells.find(cell => cell.columnId === 'event-group-owner')?.value;
        const name = row.cells.find(cell => cell.columnId === 'event-group-name')?.value;
        const eventType = row.cells.find(cell => cell.columnId === 'event-type')?.value;
        if (!ownerOrigin || !name) {
            return;
        }
        let details = null;
        // Details of additional bids can't be looked up like regular bids,
        // they are ephemeral to the auction.
        if (eventType !== _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Storage.InterestGroupAccessType.AdditionalBid &&
            eventType !== _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Storage.InterestGroupAccessType.AdditionalBidWin &&
            eventType !== _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Storage.InterestGroupAccessType.TopLevelAdditionalBid) {
            details = await this.detailsGetter.getInterestGroupDetails(ownerOrigin, name);
        }
        if (details) {
            const jsonView = await _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_2__.JSONView.JSONView.createView(JSON.stringify(details));
            jsonView?.setMinimumSize(0, 40);
            if (jsonView) {
                jsonView.contentElement.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.pane('details').track({ resize: true })}`);
                this.setSidebarWidget(jsonView);
            }
        }
        else {
            this.setSidebarWidget(this.noDataView);
        }
        this.sidebarUpdatedForTesting();
    }
    getEventsForTesting() {
        return this.events;
    }
    getInterestGroupGridForTesting() {
        return this.interestGroupGrid;
    }
    sidebarUpdatedForTesting() {
    }
}


/***/ }),

/***/ "./src/panels/application/InterestGroupTreeElement.ts":
/*!************************************************************!*\
  !*** ./src/panels/application/InterestGroupTreeElement.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InterestGroupTreeElement: () => (/* binding */ InterestGroupTreeElement),
/* harmony export */   i18nString: () => (/* binding */ i18nString)
/* harmony export */ });
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ApplicationPanelTreeElement.js */ "./src/panels/application/ApplicationPanelTreeElement.ts");
/* harmony import */ var _InterestGroupStorageView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./InterestGroupStorageView.js */ "./src/panels/application/InterestGroupStorageView.ts");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






const UIStrings = {
    /**
     *@description Label for an item in the Application Panel Sidebar of the Application panel
     * An interest group is an ad targeting group stored on the browser that can
     * be used to show a certain set of advertisements in the future as the
     * outcome of a FLEDGE auction. (https://developer.chrome.com/blog/fledge-api/)
     */
    interestGroups: 'Interest groups',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/application/InterestGroupTreeElement.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
class InterestGroupTreeElement extends _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_4__.ApplicationPanelTreeElement {
    constructor(storagePanel) {
        super(storagePanel, i18nString(UIStrings.interestGroups), false, 'interest-groups');
        Object.defineProperty(this, "view", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        const interestGroupIcon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.create('database');
        this.setLeadingIcons([interestGroupIcon]);
        this.view = new _InterestGroupStorageView_js__WEBPACK_IMPORTED_MODULE_5__.InterestGroupStorageView(this);
    }
    get itemURL() {
        return 'interest-groups://';
    }
    async getInterestGroupDetails(owner, name) {
        const mainTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().primaryPageTarget();
        if (!mainTarget) {
            return null;
        }
        const response = await mainTarget.storageAgent().invoke_getInterestGroupDetails({ 'ownerOrigin': owner, 'name': name });
        return response.details;
    }
    onselect(selectedByUser) {
        super.onselect(selectedByUser);
        this.showView(this.view);
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.userMetrics.panelShown('interest-groups');
        return false;
    }
    addEvent(event) {
        this.view.addEvent(event);
    }
    clearEvents() {
        this.view.clearEvents();
    }
}


/***/ }),

/***/ "./src/panels/application/PreloadingTreeElement.ts":
/*!*********************************************************!*\
  !*** ./src/panels/application/PreloadingTreeElement.ts ***!
  \*********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PreloadingRuleSetTreeElement: () => (/* binding */ PreloadingRuleSetTreeElement),
/* harmony export */   PreloadingSummaryTreeElement: () => (/* binding */ PreloadingSummaryTreeElement)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ApplicationPanelTreeElement.js */ "./src/panels/application/ApplicationPanelTreeElement.ts");
/* harmony import */ var _preloading_PreloadingView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./preloading/PreloadingView.js */ "./src/panels/application/preloading/PreloadingView.ts");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_preloading_PreloadingView_js__WEBPACK_IMPORTED_MODULE_3__]);
_preloading_PreloadingView_js__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _PreloadingTreeElementBase_model, _PreloadingTreeElementBase_viewConstructor, _PreloadingTreeElementBase_path, _PreloadingTreeElementBase_selectedInternal, _PreloadingSummaryTreeElement_model, _PreloadingSummaryTreeElement_view, _PreloadingSummaryTreeElement_selectedInternal, _PreloadingSummaryTreeElement_ruleSet, _PreloadingSummaryTreeElement_attempt;




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
    constructor(panel, viewConstructor, path, title) {
        super(panel, title, false, 'speculative-loads');
        _PreloadingTreeElementBase_model.set(this, void 0);
        _PreloadingTreeElementBase_viewConstructor.set(this, void 0);
        Object.defineProperty(this, "view", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        _PreloadingTreeElementBase_path.set(this, void 0);
        _PreloadingTreeElementBase_selectedInternal.set(this, void 0);
        __classPrivateFieldSet(this, _PreloadingTreeElementBase_viewConstructor, viewConstructor, "f");
        __classPrivateFieldSet(this, _PreloadingTreeElementBase_path, path, "f");
        const icon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__.Icon.create('arrow-up-down');
        this.setLeadingIcons([icon]);
        __classPrivateFieldSet(this, _PreloadingTreeElementBase_selectedInternal, false, "f");
        // TODO(https://crbug.com/1384419): Set link
    }
    get itemURL() {
        return __classPrivateFieldGet(this, _PreloadingTreeElementBase_path, "f");
    }
    initialize(model) {
        __classPrivateFieldSet(this, _PreloadingTreeElementBase_model, model, "f");
        // Show the view if the model was initialized after selection.
        if (__classPrivateFieldGet(this, _PreloadingTreeElementBase_selectedInternal, "f") && !this.view) {
            this.onselect(false);
        }
    }
    onselect(selectedByUser) {
        super.onselect(selectedByUser);
        __classPrivateFieldSet(this, _PreloadingTreeElementBase_selectedInternal, true, "f");
        if (!__classPrivateFieldGet(this, _PreloadingTreeElementBase_model, "f")) {
            return false;
        }
        if (!this.view) {
            this.view = new (__classPrivateFieldGet(this, _PreloadingTreeElementBase_viewConstructor, "f"))(__classPrivateFieldGet(this, _PreloadingTreeElementBase_model, "f"));
        }
        this.showView(this.view);
        return false;
    }
}
_PreloadingTreeElementBase_model = new WeakMap(), _PreloadingTreeElementBase_viewConstructor = new WeakMap(), _PreloadingTreeElementBase_path = new WeakMap(), _PreloadingTreeElementBase_selectedInternal = new WeakMap();
class PreloadingSummaryTreeElement extends _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_2__.ExpandableApplicationPanelTreeElement {
    constructor(panel) {
        super(panel, i18nString(UIStrings.speculativeLoads), 'preloading');
        _PreloadingSummaryTreeElement_model.set(this, void 0);
        _PreloadingSummaryTreeElement_view.set(this, void 0);
        _PreloadingSummaryTreeElement_selectedInternal.set(this, void 0);
        _PreloadingSummaryTreeElement_ruleSet.set(this, null);
        _PreloadingSummaryTreeElement_attempt.set(this, null);
        const icon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__.Icon.create('arrow-up-down');
        this.setLeadingIcons([icon]);
        __classPrivateFieldSet(this, _PreloadingSummaryTreeElement_selectedInternal, false, "f");
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
        __classPrivateFieldSet(this, _PreloadingSummaryTreeElement_ruleSet, new PreloadingRuleSetTreeElement(panel), "f");
        __classPrivateFieldSet(this, _PreloadingSummaryTreeElement_attempt, new PreloadingAttemptTreeElement(panel), "f");
        this.appendChild(__classPrivateFieldGet(this, _PreloadingSummaryTreeElement_ruleSet, "f"));
        this.appendChild(__classPrivateFieldGet(this, _PreloadingSummaryTreeElement_attempt, "f"));
    }
    initialize(model) {
        if (__classPrivateFieldGet(this, _PreloadingSummaryTreeElement_ruleSet, "f") === null || __classPrivateFieldGet(this, _PreloadingSummaryTreeElement_attempt, "f") === null) {
            throw new Error('unreachable');
        }
        __classPrivateFieldSet(this, _PreloadingSummaryTreeElement_model, model, "f");
        __classPrivateFieldGet(this, _PreloadingSummaryTreeElement_ruleSet, "f").initialize(model);
        __classPrivateFieldGet(this, _PreloadingSummaryTreeElement_attempt, "f").initialize(model);
        // Show the view if the model was initialized after selection.
        if (__classPrivateFieldGet(this, _PreloadingSummaryTreeElement_selectedInternal, "f") && !__classPrivateFieldGet(this, _PreloadingSummaryTreeElement_view, "f")) {
            this.onselect(false);
        }
    }
    onselect(selectedByUser) {
        super.onselect(selectedByUser);
        __classPrivateFieldSet(this, _PreloadingSummaryTreeElement_selectedInternal, true, "f");
        if (!__classPrivateFieldGet(this, _PreloadingSummaryTreeElement_model, "f")) {
            return false;
        }
        if (!__classPrivateFieldGet(this, _PreloadingSummaryTreeElement_view, "f")) {
            __classPrivateFieldSet(this, _PreloadingSummaryTreeElement_view, new _preloading_PreloadingView_js__WEBPACK_IMPORTED_MODULE_3__.PreloadingSummaryView(__classPrivateFieldGet(this, _PreloadingSummaryTreeElement_model, "f")), "f");
        }
        this.showView(__classPrivateFieldGet(this, _PreloadingSummaryTreeElement_view, "f"));
        return false;
    }
    expandAndRevealRuleSet(revealInfo) {
        if (__classPrivateFieldGet(this, _PreloadingSummaryTreeElement_ruleSet, "f") === null) {
            throw new Error('unreachable');
        }
        this.expand();
        __classPrivateFieldGet(this, _PreloadingSummaryTreeElement_ruleSet, "f").revealRuleSet(revealInfo);
    }
    expandAndRevealAttempts(filter) {
        if (__classPrivateFieldGet(this, _PreloadingSummaryTreeElement_attempt, "f") === null) {
            throw new Error('unreachable');
        }
        this.expand();
        __classPrivateFieldGet(this, _PreloadingSummaryTreeElement_attempt, "f").revealAttempts(filter);
    }
}
_PreloadingSummaryTreeElement_model = new WeakMap(), _PreloadingSummaryTreeElement_view = new WeakMap(), _PreloadingSummaryTreeElement_selectedInternal = new WeakMap(), _PreloadingSummaryTreeElement_ruleSet = new WeakMap(), _PreloadingSummaryTreeElement_attempt = new WeakMap();
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

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./src/panels/application/ReportingApiReportsView.ts":
/*!***********************************************************!*\
  !*** ./src/panels/application/ReportingApiReportsView.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReportingApiReportsView: () => (/* binding */ ReportingApiReportsView),
/* harmony export */   i18nString: () => (/* binding */ i18nString)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/components/source_frame/source_frame.js */ "./src/ui/legacy/components/source_frame/source_frame.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _components_components_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/components.js */ "./src/panels/application/components/components.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './reportingApiReportsView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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
    constructor(networkManager) {
        super(/* isVertical: */ false, /* secondIsSidebar: */ true);
        Object.defineProperty(this, "reportsGrid", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new _components_components_js__WEBPACK_IMPORTED_MODULE_5__.ReportsGrid.ReportsGrid()
        });
        Object.defineProperty(this, "reports", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
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
            sbw.registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './reportingApiReportsView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
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


/***/ }),

/***/ "./src/panels/application/ReportingApiTreeElement.ts":
/*!***********************************************************!*\
  !*** ./src/panels/application/ReportingApiTreeElement.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReportingApiTreeElement: () => (/* binding */ ReportingApiTreeElement),
/* harmony export */   i18nString: () => (/* binding */ i18nString)
/* harmony export */ });
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ApplicationPanelTreeElement.js */ "./src/panels/application/ApplicationPanelTreeElement.ts");
/* harmony import */ var _components_components_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/components.js */ "./src/panels/application/components/components.ts");
/* harmony import */ var _ReportingApiView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ReportingApiView.js */ "./src/panels/application/ReportingApiView.ts");
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
    constructor(storagePanel) {
        super(storagePanel, i18nString(UIStrings.reportingApi), false, 'reporting-api');
        Object.defineProperty(this, "view", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
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


/***/ }),

/***/ "./src/panels/application/ReportingApiView.ts":
/*!****************************************************!*\
  !*** ./src/panels/application/ReportingApiView.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReportingApiView: () => (/* binding */ ReportingApiView)
/* harmony export */ });
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _ReportingApiReportsView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ReportingApiReportsView.js */ "./src/panels/application/ReportingApiReportsView.ts");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




class ReportingApiView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.SplitWidget.SplitWidget {
    constructor(endpointsGrid) {
        super(/* isVertical: */ false, /* secondIsSidebar: */ true);
        Object.defineProperty(this, "endpointsGrid", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "endpoints", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
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


/***/ }),

/***/ "./src/panels/application/ServiceWorkerCacheTreeElement.ts":
/*!*****************************************************************!*\
  !*** ./src/panels/application/ServiceWorkerCacheTreeElement.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SWCacheTreeElement: () => (/* binding */ SWCacheTreeElement),
/* harmony export */   ServiceWorkerCacheTreeElement: () => (/* binding */ ServiceWorkerCacheTreeElement)
/* harmony export */ });
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ApplicationPanelTreeElement.js */ "./src/panels/application/ApplicationPanelTreeElement.ts");
/* harmony import */ var _ServiceWorkerCacheViews_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ServiceWorkerCacheViews.js */ "./src/panels/application/ServiceWorkerCacheViews.ts");
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
    constructor(resourcesPanel, storageBucket) {
        super(resourcesPanel, i18nString(UIStrings.cacheStorage), 'cache-storage');
        Object.defineProperty(this, "swCacheModels", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "swCacheTreeElements", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "storageBucket", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
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
        model.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ServiceWorkerCacheModel.Events.CacheAdded, this.cacheAdded, this);
        model.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ServiceWorkerCacheModel.Events.CacheRemoved, this.cacheRemoved, this);
    }
    serviceWorkerCacheModelRemoved(model) {
        for (const cache of model.caches()) {
            this.removeCache(model, cache);
        }
        model.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ServiceWorkerCacheModel.Events.CacheAdded, this.cacheAdded, this);
        model.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ServiceWorkerCacheModel.Events.CacheRemoved, this.cacheRemoved, this);
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
    constructor(resourcesPanel, model, cache, appendStorageKey) {
        let cacheName;
        if (appendStorageKey) {
            cacheName = cache.cacheName + ' - ' + cache.storageKey;
        }
        else {
            cacheName = cache.cacheName;
        }
        super(resourcesPanel, cacheName, false, 'cache-storage-instance');
        Object.defineProperty(this, "model", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "cache", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "view", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
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


/***/ }),

/***/ "./src/panels/application/SharedStorageTreeElement.ts":
/*!************************************************************!*\
  !*** ./src/panels/application/SharedStorageTreeElement.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedStorageTreeElement: () => (/* binding */ SharedStorageTreeElement)
/* harmony export */ });
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ApplicationPanelTreeElement.js */ "./src/panels/application/ApplicationPanelTreeElement.ts");
/* harmony import */ var _SharedStorageItemsView_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SharedStorageItemsView.js */ "./src/panels/application/SharedStorageItemsView.ts");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



class SharedStorageTreeElement extends _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_1__.ApplicationPanelTreeElement {
    constructor(resourcesPanel, sharedStorage) {
        super(resourcesPanel, sharedStorage.securityOrigin, false, 'shared-storage-instance');
        Object.defineProperty(this, "view", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
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


/***/ }),

/***/ "./src/panels/application/StorageBucketsTreeElement.ts":
/*!*************************************************************!*\
  !*** ./src/panels/application/StorageBucketsTreeElement.ts ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StorageBucketsTreeElement: () => (/* binding */ StorageBucketsTreeElement),
/* harmony export */   StorageBucketsTreeParentElement: () => (/* binding */ StorageBucketsTreeParentElement),
/* harmony export */   i18nString: () => (/* binding */ i18nString)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/components/legacy_wrapper/legacy_wrapper.js */ "./src/ui/components/legacy_wrapper/legacy_wrapper.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ApplicationPanelSidebar_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ApplicationPanelSidebar.js */ "./src/panels/application/ApplicationPanelSidebar.ts");
/* harmony import */ var _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ApplicationPanelTreeElement.js */ "./src/panels/application/ApplicationPanelTreeElement.ts");
/* harmony import */ var _components_components_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/components.js */ "./src/panels/application/components/components.ts");
/* harmony import */ var _ServiceWorkerCacheTreeElement_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ServiceWorkerCacheTreeElement.js */ "./src/panels/application/ServiceWorkerCacheTreeElement.ts");
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
    constructor(storagePanel) {
        super(storagePanel, i18nString(UIStrings.storageBuckets), 'storage-buckets');
        Object.defineProperty(this, "bucketTreeElements", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new Set()
        });
        const icon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__.Icon.create('database');
        this.setLeadingIcons([icon]);
        this.setLink('https://github.com/WICG/storage-buckets/blob/gh-pages/explainer.md');
    }
    initialize() {
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.StorageBucketsModel.StorageBucketsModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.StorageBucketsModel.Events.BucketAdded, this.bucketAdded, this);
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.StorageBucketsModel.StorageBucketsModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.StorageBucketsModel.Events.BucketRemoved, this.bucketRemoved, this);
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.StorageBucketsModel.StorageBucketsModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.StorageBucketsModel.Events.BucketChanged, this.bucketChanged, this);
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
    constructor(resourcesPanel, model, bucketInfo) {
        const { bucket } = bucketInfo;
        const { origin } = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.StorageKeyManager.parseStorageKey(bucketInfo.bucket.storageKey);
        super(resourcesPanel, `${bucket.name} - ${origin}`, 'storage-bucket');
        Object.defineProperty(this, "storageBucketInfo", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "bucketModel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "view", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
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

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./src/panels/application/TrustTokensTreeElement.ts":
/*!**********************************************************!*\
  !*** ./src/panels/application/TrustTokensTreeElement.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TrustTokensTreeElement: () => (/* binding */ TrustTokensTreeElement),
/* harmony export */   i18nString: () => (/* binding */ i18nString)
/* harmony export */ });
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/components/legacy_wrapper/legacy_wrapper.js */ "./src/ui/components/legacy_wrapper/legacy_wrapper.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ApplicationPanelTreeElement.js */ "./src/panels/application/ApplicationPanelTreeElement.ts");
/* harmony import */ var _components_components_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/components.js */ "./src/panels/application/components/components.ts");
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
    constructor(storagePanel) {
        super(storagePanel, i18nString(UIStrings.trustTokens), false, 'private-state-tokens');
        Object.defineProperty(this, "view", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
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


/***/ })

}]);