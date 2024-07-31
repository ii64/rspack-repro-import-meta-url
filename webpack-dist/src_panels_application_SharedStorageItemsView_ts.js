"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_application_SharedStorageItemsView_ts"],{

/***/ "./src/panels/application/SharedStorageItemsView.ts":
/*!**********************************************************!*\
  !*** ./src/panels/application/SharedStorageItemsView.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedStorageItemsDispatcher: () => (/* binding */ SharedStorageItemsDispatcher),
/* harmony export */   SharedStorageItemsView: () => (/* binding */ SharedStorageItemsView)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/components/legacy_wrapper/legacy_wrapper.js */ "./src/ui/components/legacy_wrapper/legacy_wrapper.ts");
/* harmony import */ var _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/components/data_grid/data_grid.js */ "./src/ui/legacy/components/data_grid/data_grid.ts");
/* harmony import */ var _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/components/source_frame/source_frame.js */ "./src/ui/legacy/components/source_frame/source_frame.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _components_components_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/components.js */ "./src/panels/application/components/components.ts");
/* harmony import */ var _SharedStorageModel_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SharedStorageModel.js */ "./src/panels/application/SharedStorageModel.ts");
/* harmony import */ var _StorageItemsView_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./StorageItemsView.js */ "./src/panels/application/StorageItemsView.ts");
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
var _SharedStorageItemsView_instances, _SharedStorageItemsView_sharedStorage, _SharedStorageItemsView_metadataView, _SharedStorageItemsView_noDisplayView, _SharedStorageItemsView_eventListeners, _SharedStorageItemsView_sharedStorageChanged, _SharedStorageItemsView_editingCallback, _SharedStorageItemsView_showSharedStorageItems, _SharedStorageItemsView_deleteCallback, _SharedStorageItemsView_previewEntry;










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
var SharedStorageItemsDispatcher;
(function (SharedStorageItemsDispatcher) {
    let Events;
    (function (Events) {
        Events["FilteredItemsCleared"] = "FilteredItemsCleared";
        Events["ItemDeleted"] = "ItemDeleted";
        Events["ItemEdited"] = "ItemEdited";
        Events["ItemsCleared"] = "ItemsCleared";
        Events["ItemsRefreshed"] = "ItemsRefreshed";
    })(Events = SharedStorageItemsDispatcher.Events || (SharedStorageItemsDispatcher.Events = {}));
})(SharedStorageItemsDispatcher || (SharedStorageItemsDispatcher = {}));
class SharedStorageItemsView extends _StorageItemsView_js__WEBPACK_IMPORTED_MODULE_9__.StorageItemsView {
    constructor(sharedStorage) {
        super(i18nString(UIStrings.sharedStorage), 'sharedStoragePanel');
        _SharedStorageItemsView_instances.add(this);
        _SharedStorageItemsView_sharedStorage.set(this, void 0);
        Object.defineProperty(this, "outerSplitWidget", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "innerSplitWidget", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        _SharedStorageItemsView_metadataView.set(this, void 0);
        Object.defineProperty(this, "dataGrid", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        _SharedStorageItemsView_noDisplayView.set(this, void 0);
        _SharedStorageItemsView_eventListeners.set(this, void 0);
        Object.defineProperty(this, "sharedStorageItemsDispatcher", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        __classPrivateFieldSet(this, _SharedStorageItemsView_sharedStorage, sharedStorage, "f");
        this.element.classList.add('storage-view', 'table');
        const columns = [
            { id: 'key', title: i18nString(UIStrings.key), sortable: false, editable: true, longText: true, weight: 50 },
            { id: 'value', title: i18nString(UIStrings.value), sortable: false, editable: true, longText: true, weight: 50 },
        ];
        this.dataGrid = new _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_3__.DataGrid.DataGridImpl({
            displayName: i18nString(UIStrings.sharedStorageItems),
            columns,
            editCallback: __classPrivateFieldGet(this, _SharedStorageItemsView_instances, "m", _SharedStorageItemsView_editingCallback).bind(this),
            deleteCallback: __classPrivateFieldGet(this, _SharedStorageItemsView_instances, "m", _SharedStorageItemsView_deleteCallback).bind(this),
            refreshCallback: this.refreshItems.bind(this),
        });
        this.dataGrid.addEventListener(_ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_3__.DataGrid.Events.SelectedNode, event => {
            void __classPrivateFieldGet(this, _SharedStorageItemsView_instances, "m", _SharedStorageItemsView_previewEntry).call(this, event.data);
        });
        this.dataGrid.addEventListener(_ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_3__.DataGrid.Events.DeselectedNode, () => {
            void __classPrivateFieldGet(this, _SharedStorageItemsView_instances, "m", _SharedStorageItemsView_previewEntry).call(this, null);
        });
        this.dataGrid.setStriped(true);
        this.dataGrid.setName('shared-storage-items-view');
        const dataGridWidget = this.dataGrid.asWidget();
        dataGridWidget.setMinimumSize(0, 100);
        __classPrivateFieldSet(this, _SharedStorageItemsView_metadataView, _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_2__.LegacyWrapper.legacyWrapper(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Widget.VBox, new _components_components_js__WEBPACK_IMPORTED_MODULE_7__.SharedStorageMetadataView.SharedStorageMetadataView(sharedStorage, sharedStorage.securityOrigin)), "f");
        __classPrivateFieldGet(this, _SharedStorageItemsView_metadataView, "f").setMinimumSize(0, 275);
        const innerResizer = __classPrivateFieldGet(this, _SharedStorageItemsView_metadataView, "f").element.createChild('div', 'metadata-view-resizer');
        this.innerSplitWidget = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.SplitWidget.SplitWidget(
        /* isVertical: */ false, /* secondIsSidebar: */ false, 'shared-storage-inner-split-view-state');
        this.innerSplitWidget.setSidebarWidget(__classPrivateFieldGet(this, _SharedStorageItemsView_metadataView, "f"));
        this.innerSplitWidget.setMainWidget(dataGridWidget);
        this.innerSplitWidget.installResizer(innerResizer);
        __classPrivateFieldSet(this, _SharedStorageItemsView_noDisplayView, new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Widget.VBox(), "f");
        __classPrivateFieldGet(this, _SharedStorageItemsView_noDisplayView, "f").setMinimumSize(0, 25);
        __classPrivateFieldGet(this, _SharedStorageItemsView_noDisplayView, "f").element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.pane('preview').track({ resize: true })}`);
        const outerResizer = __classPrivateFieldGet(this, _SharedStorageItemsView_noDisplayView, "f").element.createChild('div', 'preview-panel-resizer');
        this.outerSplitWidget = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.SplitWidget.SplitWidget(
        /* isVertical: */ false, /* secondIsSidebar: */ true, 'shared-storage-outer-split-view-state');
        this.outerSplitWidget.show(this.element);
        this.outerSplitWidget.setMainWidget(this.innerSplitWidget);
        this.outerSplitWidget.setSidebarWidget(__classPrivateFieldGet(this, _SharedStorageItemsView_noDisplayView, "f"));
        this.outerSplitWidget.installResizer(outerResizer);
        __classPrivateFieldGet(this, _SharedStorageItemsView_noDisplayView, "f").contentElement.classList.add('placeholder');
        const noDisplayDiv = __classPrivateFieldGet(this, _SharedStorageItemsView_noDisplayView, "f").contentElement.createChild('div');
        noDisplayDiv.textContent = i18nString(UIStrings.selectAValueToPreview);
        __classPrivateFieldSet(this, _SharedStorageItemsView_eventListeners, [], "f");
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.EventTarget.removeEventListeners(__classPrivateFieldGet(this, _SharedStorageItemsView_eventListeners, "f"));
        __classPrivateFieldSet(this, _SharedStorageItemsView_sharedStorage, sharedStorage, "f");
        __classPrivateFieldSet(this, _SharedStorageItemsView_eventListeners, [
            __classPrivateFieldGet(this, _SharedStorageItemsView_sharedStorage, "f").addEventListener(_SharedStorageModel_js__WEBPACK_IMPORTED_MODULE_8__.SharedStorageForOrigin.Events.SharedStorageChanged, __classPrivateFieldGet(this, _SharedStorageItemsView_instances, "m", _SharedStorageItemsView_sharedStorageChanged), this),
        ], "f");
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
        const entries = await __classPrivateFieldGet(this, _SharedStorageItemsView_sharedStorage, "f").getEntries();
        if (entries) {
            __classPrivateFieldGet(this, _SharedStorageItemsView_instances, "m", _SharedStorageItemsView_showSharedStorageItems).call(this, entries);
        }
    }
    async refreshItems() {
        if (!this.isShowing()) {
            return;
        }
        await __classPrivateFieldGet(this, _SharedStorageItemsView_metadataView, "f").getComponent().render();
        await this.updateEntriesOnly();
        this.sharedStorageItemsDispatcher.dispatchEventToListeners(SharedStorageItemsDispatcher.Events.ItemsRefreshed);
    }
    async deleteSelectedItem() {
        if (!this.dataGrid.selectedNode) {
            return;
        }
        await __classPrivateFieldGet(this, _SharedStorageItemsView_instances, "m", _SharedStorageItemsView_deleteCallback).call(this, this.dataGrid.selectedNode);
    }
    async deleteAllItems() {
        if (!this.hasFilter()) {
            await __classPrivateFieldGet(this, _SharedStorageItemsView_sharedStorage, "f").clear();
            await this.refreshItems();
            this.sharedStorageItemsDispatcher.dispatchEventToListeners(SharedStorageItemsDispatcher.Events.ItemsCleared);
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.alert(i18nString(UIStrings.sharedStorageItemsCleared));
            return;
        }
        await Promise.all(this.dataGrid.rootNode()
            .children.filter(node => node.data.key)
            .map(node => __classPrivateFieldGet(this, _SharedStorageItemsView_sharedStorage, "f").deleteEntry(node.data.key)));
        await this.refreshItems();
        this.sharedStorageItemsDispatcher.dispatchEventToListeners(SharedStorageItemsDispatcher.Events.FilteredItemsCleared);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.alert(i18nString(UIStrings.sharedStorageFilteredItemsCleared));
    }
    getEntriesForTesting() {
        return this.dataGrid.rootNode()
            .children.filter(node => node.data.key)
            .map(node => node.data);
    }
}
_SharedStorageItemsView_sharedStorage = new WeakMap(), _SharedStorageItemsView_metadataView = new WeakMap(), _SharedStorageItemsView_noDisplayView = new WeakMap(), _SharedStorageItemsView_eventListeners = new WeakMap(), _SharedStorageItemsView_instances = new WeakSet(), _SharedStorageItemsView_sharedStorageChanged = async function _SharedStorageItemsView_sharedStorageChanged() {
    await this.refreshItems();
}, _SharedStorageItemsView_editingCallback = async function _SharedStorageItemsView_editingCallback(editingNode, columnIdentifier, oldText, newText) {
    if (columnIdentifier === 'key' && newText === '') {
        // The Shared Storage backend does not currently allow '' as a key, so we only set a new entry with a new key if its new key is nonempty.
        await this.refreshItems();
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.alert(i18nString(UIStrings.sharedStorageItemEditCanceled));
        return;
    }
    if (columnIdentifier === 'key') {
        await __classPrivateFieldGet(this, _SharedStorageItemsView_sharedStorage, "f").deleteEntry(oldText);
        await __classPrivateFieldGet(this, _SharedStorageItemsView_sharedStorage, "f").setEntry(newText, editingNode.data.value || '', false);
    }
    else {
        // The Shared Storage backend does not currently allow '' as a key, so we use ' ' as the default key instead.
        await __classPrivateFieldGet(this, _SharedStorageItemsView_sharedStorage, "f").setEntry(editingNode.data.key || ' ', newText, false);
    }
    await this.refreshItems();
    this.sharedStorageItemsDispatcher.dispatchEventToListeners(SharedStorageItemsDispatcher.Events.ItemEdited, { columnIdentifier, oldText, newText });
    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.alert(i18nString(UIStrings.sharedStorageItemEdited));
}, _SharedStorageItemsView_showSharedStorageItems = function _SharedStorageItemsView_showSharedStorageItems(items) {
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
}, _SharedStorageItemsView_deleteCallback = async function _SharedStorageItemsView_deleteCallback(node) {
    if (!node || node.isCreationNode || !__classPrivateFieldGet(this, _SharedStorageItemsView_sharedStorage, "f")) {
        return;
    }
    const key = node.data.key;
    await __classPrivateFieldGet(this, _SharedStorageItemsView_sharedStorage, "f").deleteEntry(key);
    await this.refreshItems();
    this.sharedStorageItemsDispatcher.dispatchEventToListeners(SharedStorageItemsDispatcher.Events.ItemDeleted, { key });
    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.alert(i18nString(UIStrings.sharedStorageItemDeleted));
}, _SharedStorageItemsView_previewEntry = async function _SharedStorageItemsView_previewEntry(entry) {
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
        this.outerSplitWidget.setSidebarWidget(__classPrivateFieldGet(this, _SharedStorageItemsView_noDisplayView, "f"));
    }
};


/***/ }),

/***/ "./src/panels/application/StorageItemsView.ts":
/*!****************************************************!*\
  !*** ./src/panels/application/StorageItemsView.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StorageItemsView: () => (/* binding */ StorageItemsView)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _components_components_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/components.js */ "./src/panels/application/components/components.ts");
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
    constructor(_title, _filterName) {
        super(false);
        Object.defineProperty(this, "filterRegex", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "refreshButton", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "mainToolbar", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "filterItem", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "deleteAllButton", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "deleteSelectedButton", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "metadataView", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new _components_components_js__WEBPACK_IMPORTED_MODULE_4__.StorageMetadataView.StorageMetadataView()
        });
        this.filterRegex = null;
        this.refreshButton = this.addButton(i18nString(UIStrings.refresh), 'refresh', () => {
            this.refreshItems();
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.ARIAUtils.alert(i18nString(UIStrings.refreshedStatus));
        });
        this.refreshButton.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.action('storage-items-view.refresh').track({ click: true })}`);
        this.mainToolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Toolbar.Toolbar('top-resources-toolbar', this.element);
        this.mainToolbar.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.toolbar()}`);
        this.filterItem = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Toolbar.ToolbarFilter(undefined, 0.4);
        this.filterItem.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Toolbar.ToolbarInput.Event.TextChanged, this.filterChanged, this);
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
        button.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Toolbar.ToolbarButton.Events.Click, callback, this);
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


/***/ })

}]);