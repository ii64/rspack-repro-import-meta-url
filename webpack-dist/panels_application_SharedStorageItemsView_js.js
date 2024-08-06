"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_application_SharedStorageItemsView_js"],{

/***/ "./panels/application/SharedStorageItemsView.js":
/*!******************************************************!*\
  !*** ./panels/application/SharedStorageItemsView.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedStorageItemsView: () => (/* binding */ SharedStorageItemsView)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/components/legacy_wrapper/legacy_wrapper.js */ "./ui/components/legacy_wrapper/legacy_wrapper.js");
/* harmony import */ var _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/components/data_grid/data_grid.js */ "./ui/legacy/components/data_grid/data_grid.js");
/* harmony import */ var _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/components/source_frame/source_frame.js */ "./ui/legacy/components/source_frame/source_frame.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _components_components_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/components.js */ "./panels/application/components/components.js");
/* harmony import */ var _StorageItemsView_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./StorageItemsView.js */ "./panels/application/StorageItemsView.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.









const UIStrings = {
    /**
     *@description Text in SharedStorage Items View of the Application panel
     */
    sharedStorage: 'Shared storage',
    /**
     *@description Text representing the name of a value stored in the "Shared Storage Items" table
     */
    key: 'Key',
    /**
     *@description Text for the value of something
     */
    value: 'Value',
    /**
     *@description Name for the "Shared Storage Items" table that shows the content of the Shared Storage.
     */
    sharedStorageItems: 'Shared Storage Items',
    /**
     *@description Text for announcing that the "Shared Storage Items" table was cleared, that is, all
     * entries were deleted.
     */
    sharedStorageItemsCleared: 'Shared Storage items cleared',
    /**
     *@description Text for announcing that the filtered "Shared Storage Items" table was cleared, that is,
     * all filtered entries were deleted.
     */
    sharedStorageFilteredItemsCleared: 'Shared Storage filtered items cleared',
    /**
     *@description Text in SharedStorage Items View of the Application panel
     */
    selectAValueToPreview: 'Select a value to preview',
    /**
     *@description Text for announcing a Shared Storage key/value item has been deleted
     */
    sharedStorageItemDeleted: 'The storage item was deleted.',
    /**
     *@description Text for announcing a Shared Storage key/value item has been edited
     */
    sharedStorageItemEdited: 'The storage item was edited.',
    /**
     *@description Text for announcing a Shared Storage key/value item edit request has been canceled
     */
    sharedStorageItemEditCanceled: 'The storage item edit was canceled.',
    /**
     *@description Text for announcing number of entries after filtering
     *@example {5} PH1
     */
    sharedStorageNumberEntries: 'Number of entries shown in table: {PH1}',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/application/SharedStorageItemsView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
class SharedStorageItemsView extends _StorageItemsView_js__WEBPACK_IMPORTED_MODULE_8__.StorageItemsView {
    #sharedStorage;
    outerSplitWidget;
    innerSplitWidget;
    #metadataView;
    dataGrid;
    #noDisplayView;
    #eventListeners;
    sharedStorageItemsDispatcher;
    constructor(sharedStorage) {
        super(i18nString(UIStrings.sharedStorage), 'sharedStoragePanel');
        this.#sharedStorage = sharedStorage;
        this.element.classList.add('storage-view', 'table');
        const columns = [
            { id: 'key', title: i18nString(UIStrings.key), sortable: false, editable: true, longText: true, weight: 50 },
            { id: 'value', title: i18nString(UIStrings.value), sortable: false, editable: true, longText: true, weight: 50 },
        ];
        this.dataGrid = new _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_3__.DataGrid.DataGridImpl({
            displayName: i18nString(UIStrings.sharedStorageItems),
            columns,
            editCallback: this.#editingCallback.bind(this),
            deleteCallback: this.#deleteCallback.bind(this),
            refreshCallback: this.refreshItems.bind(this),
        });
        this.dataGrid.addEventListener("SelectedNode" /* DataGrid.DataGrid.Events.SelectedNode */, event => {
            void this.#previewEntry(event.data);
        });
        this.dataGrid.addEventListener("DeselectedNode" /* DataGrid.DataGrid.Events.DeselectedNode */, () => {
            void this.#previewEntry(null);
        });
        this.dataGrid.setStriped(true);
        this.dataGrid.setName('shared-storage-items-view');
        const dataGridWidget = this.dataGrid.asWidget();
        dataGridWidget.setMinimumSize(0, 100);
        this.#metadataView = _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_2__.LegacyWrapper.legacyWrapper(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Widget.VBox, new _components_components_js__WEBPACK_IMPORTED_MODULE_7__.SharedStorageMetadataView.SharedStorageMetadataView(sharedStorage, sharedStorage.securityOrigin));
        this.#metadataView.setMinimumSize(0, 275);
        const innerResizer = this.#metadataView.element.createChild('div', 'metadata-view-resizer');
        this.innerSplitWidget = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.SplitWidget.SplitWidget(
        /* isVertical: */ false, /* secondIsSidebar: */ false, 'shared-storage-inner-split-view-state');
        this.innerSplitWidget.setSidebarWidget(this.#metadataView);
        this.innerSplitWidget.setMainWidget(dataGridWidget);
        this.innerSplitWidget.installResizer(innerResizer);
        this.#noDisplayView = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Widget.VBox();
        this.#noDisplayView.setMinimumSize(0, 25);
        this.#noDisplayView.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.pane('preview').track({ resize: true })}`);
        const outerResizer = this.#noDisplayView.element.createChild('div', 'preview-panel-resizer');
        this.outerSplitWidget = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.SplitWidget.SplitWidget(
        /* isVertical: */ false, /* secondIsSidebar: */ true, 'shared-storage-outer-split-view-state');
        this.outerSplitWidget.show(this.element);
        this.outerSplitWidget.setMainWidget(this.innerSplitWidget);
        this.outerSplitWidget.setSidebarWidget(this.#noDisplayView);
        this.outerSplitWidget.installResizer(outerResizer);
        this.#noDisplayView.contentElement.classList.add('placeholder');
        const noDisplayDiv = this.#noDisplayView.contentElement.createChild('div');
        noDisplayDiv.textContent = i18nString(UIStrings.selectAValueToPreview);
        this.#eventListeners = [];
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.EventTarget.removeEventListeners(this.#eventListeners);
        this.#sharedStorage = sharedStorage;
        this.#eventListeners = [
            this.#sharedStorage.addEventListener("SharedStorageChanged" /* SharedStorageForOrigin.Events.SharedStorageChanged */, this.#sharedStorageChanged, this),
        ];
        this.sharedStorageItemsDispatcher =
            new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper();
    }
    // Use `createView()` instead of the constructor to create a view, so that entries can be awaited asynchronously.
    static async createView(sharedStorage) {
        const view = new SharedStorageItemsView(sharedStorage);
        await view.updateEntriesOnly();
        return view;
    }
    async updateEntriesOnly() {
        if (!this.isShowing()) {
            return;
        }
        const entries = await this.#sharedStorage.getEntries();
        if (entries) {
            this.#showSharedStorageItems(entries);
        }
    }
    async #sharedStorageChanged() {
        await this.refreshItems();
    }
    async refreshItems() {
        if (!this.isShowing()) {
            return;
        }
        await this.#metadataView.getComponent().render();
        await this.updateEntriesOnly();
        this.sharedStorageItemsDispatcher.dispatchEventToListeners("ItemsRefreshed" /* SharedStorageItemsDispatcher.Events.ItemsRefreshed */);
    }
    async deleteSelectedItem() {
        if (!this.dataGrid.selectedNode) {
            return;
        }
        await this.#deleteCallback(this.dataGrid.selectedNode);
    }
    async deleteAllItems() {
        if (!this.hasFilter()) {
            await this.#sharedStorage.clear();
            await this.refreshItems();
            this.sharedStorageItemsDispatcher.dispatchEventToListeners("ItemsCleared" /* SharedStorageItemsDispatcher.Events.ItemsCleared */);
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.alert(i18nString(UIStrings.sharedStorageItemsCleared));
            return;
        }
        await Promise.all(this.dataGrid.rootNode()
            .children.filter(node => node.data.key)
            .map(node => this.#sharedStorage.deleteEntry(node.data.key)));
        await this.refreshItems();
        this.sharedStorageItemsDispatcher.dispatchEventToListeners("FilteredItemsCleared" /* SharedStorageItemsDispatcher.Events.FilteredItemsCleared */);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.alert(i18nString(UIStrings.sharedStorageFilteredItemsCleared));
    }
    async #editingCallback(editingNode, columnIdentifier, oldText, newText) {
        if (columnIdentifier === 'key' && newText === '') {
            // The Shared Storage backend does not currently allow '' as a key, so we only set a new entry with a new key if its new key is nonempty.
            await this.refreshItems();
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.alert(i18nString(UIStrings.sharedStorageItemEditCanceled));
            return;
        }
        if (columnIdentifier === 'key') {
            await this.#sharedStorage.deleteEntry(oldText);
            await this.#sharedStorage.setEntry(newText, editingNode.data.value || '', false);
        }
        else {
            // The Shared Storage backend does not currently allow '' as a key, so we use ' ' as the default key instead.
            await this.#sharedStorage.setEntry(editingNode.data.key || ' ', newText, false);
        }
        await this.refreshItems();
        this.sharedStorageItemsDispatcher.dispatchEventToListeners("ItemEdited" /* SharedStorageItemsDispatcher.Events.ItemEdited */, { columnIdentifier, oldText, newText });
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.alert(i18nString(UIStrings.sharedStorageItemEdited));
    }
    #showSharedStorageItems(items) {
        const rootNode = this.dataGrid.rootNode();
        const [selectedKey] = rootNode.children.filter(node => node.selected).map(node => node.data.key);
        rootNode.removeChildren();
        let selectedNode = null;
        const filteredItems = (item) => `${item.key} ${item.value}`;
        const filteredList = this.filter(items, filteredItems);
        for (const item of filteredList) {
            const node = new _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_3__.DataGrid.DataGridNode({ key: item.key, value: item.value }, false);
            node.selectable = true;
            rootNode.appendChild(node);
            if (!selectedNode || item.key === selectedKey) {
                selectedNode = node;
            }
        }
        if (selectedNode) {
            selectedNode.selected = true;
        }
        this.dataGrid.addCreationNode(false);
        this.setCanDeleteSelected(Boolean(selectedNode));
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.alert(i18nString(UIStrings.sharedStorageNumberEntries, { PH1: filteredList.length }));
    }
    async #deleteCallback(node) {
        if (!node || node.isCreationNode || !this.#sharedStorage) {
            return;
        }
        const key = node.data.key;
        await this.#sharedStorage.deleteEntry(key);
        await this.refreshItems();
        this.sharedStorageItemsDispatcher.dispatchEventToListeners("ItemDeleted" /* SharedStorageItemsDispatcher.Events.ItemDeleted */, { key });
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.alert(i18nString(UIStrings.sharedStorageItemDeleted));
    }
    async #previewEntry(entry) {
        const key = entry?.data?.key;
        const value = entry?.data?.value;
        const wrappedEntry = key && { key: key, value: value || '' };
        if (wrappedEntry) {
            const preview = _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_4__.JSONView.JSONView.createViewSync(wrappedEntry);
            // Selection could've changed while the preview was loaded
            if (entry.selected) {
                this.outerSplitWidget.setSidebarWidget(preview);
                preview.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.pane('preview').track({ resize: true })}`);
            }
        }
        else {
            this.outerSplitWidget.setSidebarWidget(this.#noDisplayView);
        }
    }
    getEntriesForTesting() {
        return this.dataGrid.rootNode()
            .children.filter(node => node.data.key)
            .map(node => node.data);
    }
}
//# sourceMappingURL=SharedStorageItemsView.js.map

/***/ }),

/***/ "./panels/application/StorageItemsView.js":
/*!************************************************!*\
  !*** ./panels/application/StorageItemsView.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StorageItemsView: () => (/* binding */ StorageItemsView)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _components_components_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/components.js */ "./panels/application/components/components.js");
// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





const UIStrings = {
    /**
     *@description Text to refresh the page
     */
    refresh: 'Refresh',
    /**
     *@description Text to clear everything
     */
    clearAll: 'Clear All',
    /**
     *@description Tooltip text that appears when hovering over the largeicon delete button in the Service Worker Cache Views of the Application panel
     */
    deleteSelected: 'Delete Selected',
    /**
     *@description Text that informs screen reader users that the storage table has been refreshed
     */
    refreshedStatus: 'Table refreshed',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/application/StorageItemsView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
class StorageItemsView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Widget.VBox {
    filterRegex;
    refreshButton;
    mainToolbar;
    filterItem;
    deleteAllButton;
    deleteSelectedButton;
    metadataView = new _components_components_js__WEBPACK_IMPORTED_MODULE_4__.StorageMetadataView.StorageMetadataView();
    constructor(_title, _filterName) {
        super(false);
        this.filterRegex = null;
        this.refreshButton = this.addButton(i18nString(UIStrings.refresh), 'refresh', () => {
            this.refreshItems();
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.ARIAUtils.alert(i18nString(UIStrings.refreshedStatus));
        });
        this.refreshButton.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.action('storage-items-view.refresh').track({ click: true })}`);
        this.mainToolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Toolbar.Toolbar('top-resources-toolbar', this.element);
        this.mainToolbar.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.toolbar()}`);
        this.filterItem = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Toolbar.ToolbarFilter(undefined, 0.4);
        this.filterItem.addEventListener("TextChanged" /* UI.Toolbar.ToolbarInput.Event.TextChanged */, this.filterChanged, this);
        const toolbarSeparator = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Toolbar.ToolbarSeparator();
        this.deleteAllButton = this.addButton(i18nString(UIStrings.clearAll), 'clear', this.deleteAllItems);
        this.deleteSelectedButton = this.addButton(i18nString(UIStrings.deleteSelected), 'cross', this.deleteSelectedItem);
        this.deleteSelectedButton.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.action('storage-items-view.delete-selected').track({ click: true })}`);
        this.deleteAllButton.element.id = 'storage-items-delete-all';
        this.deleteAllButton.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.action('storage-items-view.clear-all').track({ click: true })}`);
        const toolbarItems = [this.refreshButton, this.filterItem, toolbarSeparator, this.deleteAllButton, this.deleteSelectedButton];
        for (const item of toolbarItems) {
            this.mainToolbar.appendToolbarItem(item);
        }
        this.contentElement.appendChild(this.metadataView);
    }
    setDeleteAllTitle(title) {
        this.deleteAllButton.setTitle(title);
    }
    setDeleteAllGlyph(glyph) {
        this.deleteAllButton.setGlyph(glyph);
    }
    appendToolbarItem(item) {
        this.mainToolbar.appendToolbarItem(item);
    }
    setStorageKey(storageKey) {
        this.metadataView.setStorageKey(storageKey);
    }
    addButton(label, glyph, callback) {
        const button = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Toolbar.ToolbarButton(label, glyph);
        button.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */, callback, this);
        return button;
    }
    filterChanged({ data: text }) {
        this.filterRegex = text ? new RegExp(_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.escapeForRegExp(text), 'i') : null;
        this.refreshItems();
    }
    filter(items, keyFunction) {
        if (this.filterRegex) {
            const regExp = this.filterRegex;
            return items.filter(item => regExp.test(keyFunction(item)));
        }
        return items;
    }
    hasFilter() {
        return Boolean(this.filterRegex);
    }
    wasShown() {
        this.refreshItems();
    }
    setCanDeleteAll(enabled) {
        this.deleteAllButton.setEnabled(enabled);
    }
    setCanDeleteSelected(enabled) {
        this.deleteSelectedButton.setEnabled(enabled);
    }
    setCanRefresh(enabled) {
        this.refreshButton.setEnabled(enabled);
    }
    setCanFilter(enabled) {
        this.filterItem.setEnabled(enabled);
    }
    deleteAllItems() {
    }
    deleteSelectedItem() {
    }
    refreshItems() {
    }
}
//# sourceMappingURL=StorageItemsView.js.map

/***/ })

}]);