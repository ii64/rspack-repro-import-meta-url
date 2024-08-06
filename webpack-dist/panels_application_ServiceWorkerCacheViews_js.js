"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_application_ServiceWorkerCacheViews_js"],{

/***/ "./panels/application/ServiceWorkerCacheViews.js":
/*!*******************************************************!*\
  !*** ./panels/application/ServiceWorkerCacheViews.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataGridNode: () => (/* binding */ DataGridNode),
/* harmony export */   RequestView: () => (/* binding */ RequestView),
/* harmony export */   ServiceWorkerCacheView: () => (/* binding */ ServiceWorkerCacheView)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/text_utils/text_utils.js */ "./models/text_utils/text_utils.js");
/* harmony import */ var _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/components/legacy_wrapper/legacy_wrapper.js */ "./ui/components/legacy_wrapper/legacy_wrapper.js");
/* harmony import */ var _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/legacy/components/data_grid/data_grid.js */ "./ui/legacy/components/data_grid/data_grid.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _network_components_components_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../network/components/components.js */ "./panels/network/components/components.js");
/* harmony import */ var _network_network_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../network/network.js */ "./panels/network/network.js");
/* harmony import */ var _components_components_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/components.js */ "./panels/application/components/components.js");
/* harmony import */ var _serviceWorkerCacheViews_css_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./serviceWorkerCacheViews.css.js */ "./panels/application/serviceWorkerCacheViews.css.js");
// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.













const UIStrings = {
    /**
     *@description Text in Application Panel Sidebar of the Application panel
     */
    cache: 'Cache',
    /**
     *@description Text to refresh the page
     */
    refresh: 'Refresh',
    /**
     *@description Tooltip text that appears when hovering over the largeicon delete button in the Service Worker Cache Views of the Application panel
     */
    deleteSelected: 'Delete Selected',
    /**
     *@description Text in Service Worker Cache Views of the Application panel
     */
    filterByPath: 'Filter by path',
    /**
     *@description Text in Service Worker Cache Views of the Application panel
     */
    selectACacheEntryAboveToPreview: 'Select a cache entry above to preview',
    /**
     *@description Text for the name of something
     */
    name: 'Name',
    /**
     *@description Text in Service Worker Cache Views of the Application panel
     */
    timeCached: 'Time Cached',
    /**
     * @description Tooltip text that appears when hovering over the vary header column in the Service Worker Cache Views of the Application panel
     */
    varyHeaderWarning: '⚠️ Set ignoreVary to true when matching this entry',
    /**
     *@description Text used to show that data was retrieved from ServiceWorker Cache
     */
    serviceWorkerCache: '`Service Worker` Cache',
    /**
     *@description Span text content in Service Worker Cache Views of the Application panel
     *@example {2} PH1
     */
    matchingEntriesS: 'Matching entries: {PH1}',
    /**
     *@description Span text content in Indexed DBViews of the Application panel
     *@example {2} PH1
     */
    totalEntriesS: 'Total entries: {PH1}',
    /**
     *@description Text for network request headers
     */
    headers: 'Headers',
    /**
     *@description Text for previewing items
     */
    preview: 'Preview',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/application/ServiceWorkerCacheViews.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
class ServiceWorkerCacheView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.View.SimpleView {
    model;
    entriesForTest;
    splitWidget;
    previewPanel;
    preview;
    cache;
    dataGrid;
    refreshThrottler;
    refreshButton;
    deleteSelectedButton;
    entryPathFilter;
    returnCount;
    summaryBarElement;
    loadingPromise;
    metadataView = new _components_components_js__WEBPACK_IMPORTED_MODULE_11__.StorageMetadataView.StorageMetadataView();
    constructor(model, cache) {
        super(i18nString(UIStrings.cache));
        this.model = model;
        this.entriesForTest = null;
        this.element.classList.add('service-worker-cache-data-view');
        this.element.classList.add('storage-view');
        this.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.pane('cache-storage-data')}`);
        const editorToolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Toolbar.Toolbar('data-view-toolbar', this.element);
        editorToolbar.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.toolbar()}`);
        this.element.appendChild(this.metadataView);
        this.splitWidget = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.SplitWidget.SplitWidget(false, false);
        this.splitWidget.show(this.element);
        this.previewPanel = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Widget.VBox();
        const resizer = this.previewPanel.element.createChild('div', 'cache-preview-panel-resizer');
        this.splitWidget.setMainWidget(this.previewPanel);
        this.splitWidget.installResizer(resizer);
        this.preview = null;
        this.cache = cache;
        const bucketInfo = this.model.target()
            .model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.StorageBucketsModel.StorageBucketsModel)
            ?.getBucketByName(cache.storageBucket.storageKey, cache.storageBucket.name);
        if (bucketInfo) {
            this.metadataView.setStorageBucket(bucketInfo);
        }
        else if (cache.storageKey) {
            this.metadataView.setStorageKey(cache.storageKey);
        }
        this.dataGrid = null;
        this.refreshThrottler = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Throttler.Throttler(300);
        this.refreshButton =
            new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Toolbar.ToolbarButton(i18nString(UIStrings.refresh), 'refresh', undefined, 'cache-storage.refresh');
        this.refreshButton.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */, this.refreshButtonClicked, this);
        editorToolbar.appendToolbarItem(this.refreshButton);
        this.deleteSelectedButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Toolbar.ToolbarButton(i18nString(UIStrings.deleteSelected), 'cross', undefined, 'cache-storage.delete-selected');
        this.deleteSelectedButton.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */, _event => {
            void this.deleteButtonClicked(null);
        });
        editorToolbar.appendToolbarItem(this.deleteSelectedButton);
        const entryPathFilterBox = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Toolbar.ToolbarFilter(i18nString(UIStrings.filterByPath), 1);
        editorToolbar.appendToolbarItem(entryPathFilterBox);
        const entryPathFilterThrottler = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Throttler.Throttler(300);
        this.entryPathFilter = '';
        entryPathFilterBox.addEventListener("TextChanged" /* UI.Toolbar.ToolbarInput.Event.TextChanged */, () => {
            void entryPathFilterThrottler.schedule(() => {
                this.entryPathFilter = entryPathFilterBox.value();
                return this.updateData(true);
            });
        });
        this.returnCount = null;
        this.summaryBarElement = null;
        this.loadingPromise = null;
        this.update(cache);
    }
    resetDataGrid() {
        if (this.dataGrid) {
            this.dataGrid.asWidget().detach();
        }
        this.dataGrid = this.createDataGrid();
        const dataGridWidget = this.dataGrid.asWidget();
        this.splitWidget.setSidebarWidget(dataGridWidget);
        dataGridWidget.setMinimumSize(0, 250);
    }
    wasShown() {
        this.model.addEventListener("CacheStorageContentUpdated" /* SDK.ServiceWorkerCacheModel.Events.CacheStorageContentUpdated */, this.cacheContentUpdated, this);
        this.registerCSSFiles([_serviceWorkerCacheViews_css_js__WEBPACK_IMPORTED_MODULE_12__["default"]]);
        void this.updateData(true);
    }
    willHide() {
        this.model.removeEventListener("CacheStorageContentUpdated" /* SDK.ServiceWorkerCacheModel.Events.CacheStorageContentUpdated */, this.cacheContentUpdated, this);
    }
    showPreview(preview) {
        if (preview && this.preview === preview) {
            return;
        }
        if (this.preview) {
            this.preview.detach();
        }
        if (!preview) {
            preview = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.EmptyWidget.EmptyWidget(i18nString(UIStrings.selectACacheEntryAboveToPreview));
        }
        this.preview = preview;
        this.preview.show(this.previewPanel.element);
    }
    createDataGrid() {
        const columns = [
            { id: 'number', title: '#', sortable: false, width: '3px' },
            { id: 'name', title: i18nString(UIStrings.name), weight: 4, sortable: true },
            {
                id: 'response-type',
                title: _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.lockedString('Response-Type'),
                weight: 1,
                align: "right" /* DataGrid.DataGrid.Align.Right */,
                sortable: true,
            },
            { id: 'content-type', title: _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.lockedString('Content-Type'), weight: 1, sortable: true },
            {
                id: 'content-length',
                title: _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.lockedString('Content-Length'),
                weight: 1,
                align: "right" /* DataGrid.DataGrid.Align.Right */,
                sortable: true,
            },
            {
                id: 'response-time',
                title: i18nString(UIStrings.timeCached),
                width: '12em',
                weight: 1,
                align: "right" /* DataGrid.DataGrid.Align.Right */,
                sortable: true,
            },
            { id: 'vary-header', title: _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.lockedString('Vary Header'), weight: 1, sortable: true },
        ];
        const dataGrid = new _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_6__.DataGrid.DataGridImpl({
            displayName: i18nString(UIStrings.serviceWorkerCache),
            columns,
            deleteCallback: this.deleteButtonClicked.bind(this),
            refreshCallback: this.updateData.bind(this, true),
            editCallback: undefined,
        });
        dataGrid.addEventListener("SortingChanged" /* DataGrid.DataGrid.Events.SortingChanged */, this.sortingChanged, this);
        dataGrid.addEventListener("SelectedNode" /* DataGrid.DataGrid.Events.SelectedNode */, event => {
            void this.previewCachedResponse(event.data.data);
        }, this);
        dataGrid.setStriped(true);
        return dataGrid;
    }
    sortingChanged() {
        if (!this.dataGrid) {
            return;
        }
        const dataGrid = this.dataGrid;
        const accending = dataGrid.isSortOrderAscending();
        const columnId = dataGrid.sortColumnId();
        let comparator;
        if (columnId === 'name') {
            comparator = (a, b) => a.name.localeCompare(b.name);
        }
        else if (columnId === 'content-type') {
            comparator = (a, b) => a.data.mimeType.localeCompare(b.data.mimeType);
        }
        else if (columnId === 'content-length') {
            comparator = (a, b) => a.data.resourceSize - b.data.resourceSize;
        }
        else if (columnId === 'response-time') {
            comparator = (a, b) => a.data.endTime - b.data.endTime;
        }
        else if (columnId === 'response-type') {
            comparator = (a, b) => a.responseType.localeCompare(b.responseType);
        }
        else if (columnId === 'vary-header') {
            comparator = (a, b) => a.varyHeader.localeCompare(b.varyHeader);
        }
        const children = dataGrid.rootNode().children.slice();
        dataGrid.rootNode().removeChildren();
        children.sort((a, b) => {
            const result = comparator(a, b);
            return accending ? result : -result;
        });
        children.forEach(child => dataGrid.rootNode().appendChild(child));
    }
    async deleteButtonClicked(node) {
        if (!node) {
            node = this.dataGrid && this.dataGrid.selectedNode;
            if (!node) {
                return;
            }
        }
        await this.model.deleteCacheEntry(this.cache, node.data.url());
        node.remove();
    }
    update(cache) {
        this.cache = cache;
        this.resetDataGrid();
        void this.updateData(true);
    }
    updateSummaryBar() {
        if (!this.summaryBarElement) {
            this.summaryBarElement = this.element.createChild('div', 'cache-storage-summary-bar');
        }
        this.summaryBarElement.removeChildren();
        const span = this.summaryBarElement.createChild('span');
        if (this.entryPathFilter) {
            span.textContent = i18nString(UIStrings.matchingEntriesS, { PH1: String(this.returnCount) });
        }
        else {
            span.textContent = i18nString(UIStrings.totalEntriesS, { PH1: String(this.returnCount) });
        }
    }
    updateDataCallback(skipCount, entries, returnCount) {
        if (!this.dataGrid) {
            return;
        }
        const selected = this.dataGrid.selectedNode && this.dataGrid.selectedNode.data.url();
        this.refreshButton.setEnabled(true);
        this.entriesForTest = entries;
        this.returnCount = returnCount;
        this.updateSummaryBar();
        const oldEntries = new Map();
        const rootNode = this.dataGrid.rootNode();
        for (const node of rootNode.children) {
            oldEntries.set(node.data.url, node);
        }
        rootNode.removeChildren();
        let selectedNode = null;
        for (let i = 0; i < entries.length; ++i) {
            const entry = entries[i];
            let node = oldEntries.get(entry.requestURL);
            if (!node || node.data.responseTime !== entry.responseTime) {
                node = new DataGridNode(i, this.createRequest(entry), entry.responseType);
                node.selectable = true;
            }
            else {
                node.data.number = i;
            }
            rootNode.appendChild(node);
            if (entry.requestURL === selected) {
                selectedNode = node;
            }
        }
        if (!selectedNode) {
            this.showPreview(null);
        }
        else {
            selectedNode.revealAndSelect();
        }
        this.updatedForTest();
    }
    async updateData(force) {
        if (!force && this.loadingPromise) {
            return this.loadingPromise;
        }
        this.refreshButton.setEnabled(false);
        if (this.loadingPromise) {
            return this.loadingPromise;
        }
        this.loadingPromise = new Promise(resolve => {
            this.model.loadAllCacheData(this.cache, this.entryPathFilter, (entries, returnCount) => {
                resolve({ entries, returnCount });
            });
        });
        const { entries, returnCount } = await this.loadingPromise;
        this.updateDataCallback(0, entries, returnCount);
        this.loadingPromise = null;
        return;
    }
    refreshButtonClicked() {
        void this.updateData(true);
    }
    cacheContentUpdated(event) {
        const { cacheName, storageBucket } = event.data;
        if ((!this.cache.inBucket(storageBucket) || this.cache.cacheName !== cacheName)) {
            return;
        }
        void this.refreshThrottler.schedule(() => Promise.resolve(this.updateData(true)), "AsSoonAsPossible" /* Common.Throttler.Scheduling.AsSoonAsPossible */);
    }
    async previewCachedResponse(request) {
        let preview = networkRequestToPreview.get(request);
        if (!preview) {
            preview = new RequestView(request);
            networkRequestToPreview.set(request, preview);
        }
        // It is possible that table selection changes before the preview opens.
        if (this.dataGrid && this.dataGrid.selectedNode && request === this.dataGrid.selectedNode.data) {
            this.showPreview(preview);
        }
    }
    createRequest(entry) {
        const request = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkRequest.NetworkRequest.createWithoutBackendRequest('cache-storage-' + entry.requestURL, entry.requestURL, _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.DevToolsPath.EmptyUrlString, null);
        request.requestMethod = entry.requestMethod;
        request.setRequestHeaders(entry.requestHeaders);
        request.statusCode = entry.responseStatus;
        request.statusText = entry.responseStatusText;
        request.protocol = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL(entry.requestURL).scheme;
        request.responseHeaders = entry.responseHeaders;
        request.setRequestHeadersText('');
        request.endTime = entry.responseTime;
        let header = entry.responseHeaders.find(header => header.name.toLowerCase() === 'content-type');
        let mimeType = "text/plain" /* Platform.MimeType.MimeType.PLAIN */;
        if (header) {
            const result = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.MimeType.parseContentType(header.value);
            if (result.mimeType) {
                mimeType = result.mimeType;
            }
        }
        request.mimeType = mimeType;
        header = entry.responseHeaders.find(header => header.name.toLowerCase() === 'content-length');
        request.resourceSize = (header && Number(header.value)) || 0;
        let resourceType = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.ResourceType.fromMimeType(mimeType);
        if (!resourceType) {
            resourceType =
                _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.ResourceType.fromURL(entry.requestURL) || _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Other;
        }
        request.setResourceType(resourceType);
        request.setContentDataProvider(this.requestContent.bind(this, request));
        return request;
    }
    async requestContent(request) {
        const response = await this.cache.requestCachedResponse(request.url(), request.requestHeaders());
        if (!response) {
            return { error: 'No cached response found' };
        }
        return new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_4__.ContentData.ContentData(response.body, /* isBase64=*/ true, request.mimeType, request.charset() ?? undefined);
    }
    updatedForTest() {
    }
}
const networkRequestToPreview = new WeakMap();
class DataGridNode extends _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_6__.DataGrid.DataGridNode {
    number;
    name;
    request;
    responseType;
    varyHeader;
    constructor(number, request, responseType) {
        super(request);
        this.number = number;
        const parsed = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL(request.url());
        if (parsed.isValid) {
            this.name = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.StringUtilities.trimURL(request.url(), parsed.domain());
        }
        else {
            this.name = request.url();
        }
        this.request = request;
        this.responseType = responseType;
        this.varyHeader = request.responseHeaders.find(header => header.name.toLowerCase() === 'vary')?.value || '';
    }
    createCell(columnId) {
        const cell = this.createTD(columnId);
        let value;
        let tooltip = this.request.url();
        if (columnId === 'number') {
            value = String(this.number);
        }
        else if (columnId === 'name') {
            value = this.name;
        }
        else if (columnId === 'response-type') {
            if (this.responseType === 'opaqueResponse') {
                value = 'opaque';
            }
            else if (this.responseType === 'opaqueRedirect') {
                value = 'opaqueredirect';
            }
            else {
                value = this.responseType;
            }
        }
        else if (columnId === 'content-type') {
            value = this.request.mimeType;
        }
        else if (columnId === 'content-length') {
            value = (this.request.resourceSize | 0).toLocaleString('en-US');
        }
        else if (columnId === 'response-time') {
            value = new Date(this.request.endTime * 1000).toLocaleString();
        }
        else if (columnId === 'vary-header') {
            value = this.varyHeader;
            if (this.varyHeader) {
                tooltip = i18nString(UIStrings.varyHeaderWarning);
            }
        }
        const parentElement = cell.parentElement;
        let gridNode;
        if (parentElement && this.dataGrid) {
            gridNode = this.dataGrid.elementToDataGridNode.get(parentElement);
        }
        _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_6__.DataGrid.DataGridImpl.setElementText(cell, value || '', /* longText= */ true, gridNode);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Tooltip.Tooltip.install(cell, tooltip);
        return cell;
    }
}
class RequestView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Widget.VBox {
    tabbedPane;
    resourceViewTabSetting;
    constructor(request) {
        super();
        this.tabbedPane = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.TabbedPane.TabbedPane();
        this.tabbedPane.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.section('network-item-preview')}`);
        this.tabbedPane.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.TabbedPane.Events.TabSelected, this.tabSelected, this);
        this.resourceViewTabSetting =
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('cache-storage-view-tab', 'preview');
        this.tabbedPane.appendTab('headers', i18nString(UIStrings.headers), _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_5__.LegacyWrapper.legacyWrapper(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Widget.VBox, new _network_components_components_js__WEBPACK_IMPORTED_MODULE_9__.RequestHeadersView.RequestHeadersView(request)));
        this.tabbedPane.appendTab('preview', i18nString(UIStrings.preview), new _network_network_js__WEBPACK_IMPORTED_MODULE_10__.RequestPreviewView.RequestPreviewView(request));
        this.tabbedPane.show(this.element);
    }
    wasShown() {
        super.wasShown();
        this.selectTab();
    }
    selectTab(tabId) {
        if (!tabId) {
            tabId = this.resourceViewTabSetting.get();
        }
        if (tabId && !this.tabbedPane.selectTab(tabId)) {
            this.tabbedPane.selectTab('headers');
        }
    }
    tabSelected(event) {
        if (!event.data.isUserGesture) {
            return;
        }
        this.resourceViewTabSetting.set(event.data.tabId);
    }
}
//# sourceMappingURL=ServiceWorkerCacheViews.js.map

/***/ }),

/***/ "./panels/application/serviceWorkerCacheViews.css.js":
/*!***********************************************************!*\
  !*** ./panels/application/serviceWorkerCacheViews.css.js ***!
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
 * Copyright 2014 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.service-worker-cache-data-view .data-view-toolbar {
  position: relative;
  background-color: var(--sys-color-cdt-base-container);
  border-bottom: 1px solid var(--sys-color-divider);
  padding-right: 10px;
}

.service-worker-cache-data-view .data-grid {
  flex: auto;
}

.service-worker-cache-data-view .data-grid .data-container tr:nth-last-child(1) td {
  border: 0;
}

.service-worker-cache-data-view .data-grid .data-container tr:nth-last-child(2) td {
  border-bottom: 1px solid var(--sys-color-divider);
}

.service-worker-cache-data-view .data-grid .data-container tr.selected {
  background-color: var(--sys-color-neutral-container);
  color: inherit;
}

.service-worker-cache-data-view .data-grid:focus .data-container tr.selected {
  background-color: var(--sys-color-tonal-container);
  color: var(--sys-color-on-tonal-container);
}

.service-worker-cache-data-view .section,
.service-worker-cache-data-view .section > .header,
.service-worker-cache-data-view .section > .header .title {
  margin: 0;
  min-height: inherit;
  line-height: inherit;
}

.service-worker-cache-data-view .data-grid .data-container td .section .header .title {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.cache-preview-panel-resizer {
  background-color: var(--sys-color-surface1);
  height: 4px;
  border-bottom: 1px solid var(--sys-color-divider);
}

.cache-storage-summary-bar {
  flex: 0 0 27px;
  line-height: 27px;
  padding-left: 5px;
  background-color: var(--sys-color-cdt-base-container);
  border-top: 1px solid var(--sys-color-divider);
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

/*# sourceURL=serviceWorkerCacheViews.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./panels/network/network.js":
/*!***********************************!*\
  !*** ./panels/network/network.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BinaryResourceView: () => (/* reexport module object */ _BinaryResourceView_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   BlockedURLsPane: () => (/* reexport module object */ _BlockedURLsPane_js__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   EventSourceMessagesView: () => (/* reexport module object */ _EventSourceMessagesView_js__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   NetworkConfigView: () => (/* reexport module object */ _NetworkConfigView_js__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   NetworkDataGridNode: () => (/* reexport module object */ _NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   NetworkFrameGrouper: () => (/* reexport module object */ _NetworkFrameGrouper_js__WEBPACK_IMPORTED_MODULE_9__),
/* harmony export */   NetworkItemView: () => (/* reexport module object */ _NetworkItemView_js__WEBPACK_IMPORTED_MODULE_5__),
/* harmony export */   NetworkLogView: () => (/* reexport module object */ _NetworkLogView_js__WEBPACK_IMPORTED_MODULE_7__),
/* harmony export */   NetworkLogViewColumns: () => (/* reexport module object */ _NetworkLogViewColumns_js__WEBPACK_IMPORTED_MODULE_8__),
/* harmony export */   NetworkManageCustomHeadersView: () => (/* reexport module object */ _NetworkManageCustomHeadersView_js__WEBPACK_IMPORTED_MODULE_10__),
/* harmony export */   NetworkOverview: () => (/* reexport module object */ _NetworkOverview_js__WEBPACK_IMPORTED_MODULE_21__),
/* harmony export */   NetworkPanel: () => (/* reexport module object */ _NetworkPanel_js__WEBPACK_IMPORTED_MODULE_22__),
/* harmony export */   NetworkSearchScope: () => (/* reexport module object */ _NetworkSearchScope_js__WEBPACK_IMPORTED_MODULE_11__),
/* harmony export */   NetworkTimeCalculator: () => (/* reexport module object */ _NetworkTimeCalculator_js__WEBPACK_IMPORTED_MODULE_6__),
/* harmony export */   NetworkWaterfallColumn: () => (/* reexport module object */ _NetworkWaterfallColumn_js__WEBPACK_IMPORTED_MODULE_12__),
/* harmony export */   RequestCookiesView: () => (/* reexport module object */ _RequestCookiesView_js__WEBPACK_IMPORTED_MODULE_13__),
/* harmony export */   RequestHTMLView: () => (/* reexport module object */ _RequestHTMLView_js__WEBPACK_IMPORTED_MODULE_14__),
/* harmony export */   RequestInitiatorView: () => (/* reexport module object */ _RequestInitiatorView_js__WEBPACK_IMPORTED_MODULE_15__),
/* harmony export */   RequestPayloadView: () => (/* reexport module object */ _RequestPayloadView_js__WEBPACK_IMPORTED_MODULE_23__),
/* harmony export */   RequestPreviewView: () => (/* reexport module object */ _RequestPreviewView_js__WEBPACK_IMPORTED_MODULE_17__),
/* harmony export */   RequestResponseView: () => (/* reexport module object */ _RequestResponseView_js__WEBPACK_IMPORTED_MODULE_16__),
/* harmony export */   RequestTimingView: () => (/* reexport module object */ _RequestTimingView_js__WEBPACK_IMPORTED_MODULE_18__),
/* harmony export */   ResourceWebSocketFrameView: () => (/* reexport module object */ _ResourceWebSocketFrameView_js__WEBPACK_IMPORTED_MODULE_19__),
/* harmony export */   SignedExchangeInfoView: () => (/* reexport module object */ _SignedExchangeInfoView_js__WEBPACK_IMPORTED_MODULE_20__)
/* harmony export */ });
/* harmony import */ var _BinaryResourceView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BinaryResourceView.js */ "./panels/network/BinaryResourceView.js");
/* harmony import */ var _BlockedURLsPane_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BlockedURLsPane.js */ "./panels/network/BlockedURLsPane.js");
/* harmony import */ var _EventSourceMessagesView_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EventSourceMessagesView.js */ "./panels/network/EventSourceMessagesView.js");
/* harmony import */ var _NetworkConfigView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NetworkConfigView.js */ "./panels/network/NetworkConfigView.js");
/* harmony import */ var _NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NetworkDataGridNode.js */ "./panels/network/NetworkDataGridNode.js");
/* harmony import */ var _NetworkItemView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NetworkItemView.js */ "./panels/network/NetworkItemView.js");
/* harmony import */ var _NetworkTimeCalculator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NetworkTimeCalculator.js */ "./panels/network/NetworkTimeCalculator.js");
/* harmony import */ var _NetworkLogView_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./NetworkLogView.js */ "./panels/network/NetworkLogView.js");
/* harmony import */ var _NetworkLogViewColumns_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./NetworkLogViewColumns.js */ "./panels/network/NetworkLogViewColumns.js");
/* harmony import */ var _NetworkFrameGrouper_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./NetworkFrameGrouper.js */ "./panels/network/NetworkFrameGrouper.js");
/* harmony import */ var _NetworkManageCustomHeadersView_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./NetworkManageCustomHeadersView.js */ "./panels/network/NetworkManageCustomHeadersView.js");
/* harmony import */ var _NetworkSearchScope_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./NetworkSearchScope.js */ "./panels/network/NetworkSearchScope.js");
/* harmony import */ var _NetworkWaterfallColumn_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./NetworkWaterfallColumn.js */ "./panels/network/NetworkWaterfallColumn.js");
/* harmony import */ var _RequestCookiesView_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./RequestCookiesView.js */ "./panels/network/RequestCookiesView.js");
/* harmony import */ var _RequestHTMLView_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./RequestHTMLView.js */ "./panels/network/RequestHTMLView.js");
/* harmony import */ var _RequestInitiatorView_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./RequestInitiatorView.js */ "./panels/network/RequestInitiatorView.js");
/* harmony import */ var _RequestResponseView_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./RequestResponseView.js */ "./panels/network/RequestResponseView.js");
/* harmony import */ var _RequestPreviewView_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./RequestPreviewView.js */ "./panels/network/RequestPreviewView.js");
/* harmony import */ var _RequestTimingView_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./RequestTimingView.js */ "./panels/network/RequestTimingView.js");
/* harmony import */ var _ResourceWebSocketFrameView_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ResourceWebSocketFrameView.js */ "./panels/network/ResourceWebSocketFrameView.js");
/* harmony import */ var _SignedExchangeInfoView_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./SignedExchangeInfoView.js */ "./panels/network/SignedExchangeInfoView.js");
/* harmony import */ var _NetworkOverview_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./NetworkOverview.js */ "./panels/network/NetworkOverview.js");
/* harmony import */ var _NetworkPanel_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./NetworkPanel.js */ "./panels/network/NetworkPanel.js");
/* harmony import */ var _RequestPayloadView_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./RequestPayloadView.js */ "./panels/network/RequestPayloadView.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
















































//# sourceMappingURL=network.js.map

/***/ })

}]);