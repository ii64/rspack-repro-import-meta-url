"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_application_ServiceWorkerCacheTreeElement_js"],{

/***/ "./panels/application/ApplicationPanelTreeElement.js":
/*!***********************************************************!*\
  !*** ./panels/application/ApplicationPanelTreeElement.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApplicationPanelTreeElement: () => (/* binding */ ApplicationPanelTreeElement),
/* harmony export */   ExpandableApplicationPanelTreeElement: () => (/* binding */ ExpandableApplicationPanelTreeElement)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


class ApplicationPanelTreeElement extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.TreeOutline.TreeElement {
    resourcesPanel;
    constructor(resourcesPanel, title, expandable, jslogContext) {
        super(title, expandable, jslogContext);
        this.resourcesPanel = resourcesPanel;
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.ARIAUtils.setLabel(this.listItemElement, title);
        this.listItemElement.tabIndex = -1;
    }
    deselect() {
        super.deselect();
        this.listItemElement.tabIndex = -1;
    }
    get itemURL() {
        throw new Error('Unimplemented Method');
    }
    onselect(selectedByUser) {
        if (!selectedByUser) {
            return false;
        }
        const path = [];
        for (let el = this; el; el = el.parent) {
            const url = el instanceof ApplicationPanelTreeElement && el.itemURL;
            if (!url) {
                break;
            }
            path.push(url);
        }
        this.resourcesPanel.setLastSelectedItemPath(path);
        return false;
    }
    showView(view) {
        this.resourcesPanel.showView(view);
    }
}
class ExpandableApplicationPanelTreeElement extends ApplicationPanelTreeElement {
    expandedSetting;
    categoryName;
    categoryLink;
    constructor(resourcesPanel, categoryName, settingsKey, settingsDefault = false) {
        super(resourcesPanel, categoryName, false, settingsKey);
        this.expandedSetting =
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('resources-' + settingsKey + '-expanded', settingsDefault);
        this.categoryName = categoryName;
        this.categoryLink = null;
    }
    get itemURL() {
        return 'category://' + this.categoryName;
    }
    setLink(link) {
        this.categoryLink = link;
    }
    onselect(selectedByUser) {
        super.onselect(selectedByUser);
        this.resourcesPanel.showCategoryView(this.categoryName, this.categoryLink);
        return false;
    }
    onattach() {
        super.onattach();
        if (this.expandedSetting.get()) {
            this.expand();
        }
    }
    onexpand() {
        this.expandedSetting.set(true);
    }
    oncollapse() {
        this.expandedSetting.set(false);
    }
}
//# sourceMappingURL=ApplicationPanelTreeElement.js.map

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

/***/ })

}]);