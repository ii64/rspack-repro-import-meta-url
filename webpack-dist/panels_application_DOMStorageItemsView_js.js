"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_application_DOMStorageItemsView_js"],{

/***/ "./panels/application/DOMStorageItemsView.js":
/*!***************************************************!*\
  !*** ./panels/application/DOMStorageItemsView.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DOMStorageItemsView: () => (/* binding */ DOMStorageItemsView)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/text_utils/text_utils.js */ "./models/text_utils/text_utils.js");
/* harmony import */ var _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/components/data_grid/data_grid.js */ "./ui/legacy/components/data_grid/data_grid.js");
/* harmony import */ var _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/components/source_frame/source_frame.js */ "./ui/legacy/components/source_frame/source_frame.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _StorageItemsView_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./StorageItemsView.js */ "./panels/application/StorageItemsView.js");
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
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED ``AS IS'' AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
 * PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL APPLE INC. OR
 * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
 * PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 * PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
 * OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */








const UIStrings = {
    /**
     *@description Text in DOMStorage Items View of the Application panel
     */
    domStorage: 'DOM Storage',
    /**
     *@description Text in DOMStorage Items View of the Application panel
     */
    key: 'Key',
    /**
     *@description Text for the value of something
     */
    value: 'Value',
    /**
     *@description Name for the "DOM Storage Items" table that shows the content of the DOM Storage.
     */
    domStorageItems: 'DOM Storage Items',
    /**
     *@description Text for announcing that the "DOM Storage Items" table was cleared, that is, all
     * entries were deleted.
     */
    domStorageItemsCleared: 'DOM Storage Items cleared',
    /**
     *@description Text in DOMStorage Items View of the Application panel
     */
    selectAValueToPreview: 'Select a value to preview',
    /**
     *@description Text for announcing a DOM Storage key/value item has been deleted
     */
    domStorageItemDeleted: 'The storage item was deleted.',
    /**
     *@description Text for announcing number of entries after filtering
     *@example {5} PH1
     */
    domStorageNumberEntries: 'Number of entries shown in table: {PH1}',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/application/DOMStorageItemsView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
class DOMStorageItemsView extends _StorageItemsView_js__WEBPACK_IMPORTED_MODULE_7__.StorageItemsView {
    domStorage;
    dataGrid;
    splitWidget;
    previewPanel;
    preview;
    previewValue;
    eventListeners;
    constructor(domStorage) {
        super(i18nString(UIStrings.domStorage), 'domStoragePanel');
        this.domStorage = domStorage;
        if (domStorage.storageKey) {
            this.setStorageKey(domStorage.storageKey);
        }
        this.element.classList.add('storage-view', 'table');
        const columns = [
            { id: 'key', title: i18nString(UIStrings.key), sortable: true, editable: true, longText: true, weight: 50 },
            { id: 'value', title: i18nString(UIStrings.value), sortable: false, editable: true, longText: true, weight: 50 },
        ];
        this.dataGrid = new _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_3__.DataGrid.DataGridImpl({
            displayName: i18nString(UIStrings.domStorageItems),
            columns,
            editCallback: this.editingCallback.bind(this),
            deleteCallback: this.deleteCallback.bind(this),
            refreshCallback: this.refreshItems.bind(this),
        });
        this.dataGrid.addEventListener("SelectedNode" /* DataGrid.DataGrid.Events.SelectedNode */, event => {
            void this.previewEntry(event.data);
        });
        this.dataGrid.addEventListener("DeselectedNode" /* DataGrid.DataGrid.Events.DeselectedNode */, () => {
            void this.previewEntry(null);
        });
        this.dataGrid.addEventListener("SortingChanged" /* DataGrid.DataGrid.Events.SortingChanged */, this.refreshItems, this);
        this.dataGrid.setStriped(true);
        this.dataGrid.setName('dom-storage-items-view');
        this.splitWidget = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.SplitWidget.SplitWidget(
        /* isVertical: */ false, /* secondIsSidebar: */ true, 'dom-storage-split-view-state');
        this.splitWidget.show(this.element);
        this.previewPanel = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Widget.VBox();
        this.previewPanel.setMinimumSize(0, 50);
        this.previewPanel.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.pane('preview').track({ resize: true })}`);
        const resizer = this.previewPanel.element.createChild('div', 'preview-panel-resizer');
        const dataGridWidget = this.dataGrid.asWidget();
        dataGridWidget.setMinimumSize(0, 50);
        this.splitWidget.setMainWidget(dataGridWidget);
        this.splitWidget.setSidebarWidget(this.previewPanel);
        this.splitWidget.installResizer(resizer);
        this.preview = null;
        this.previewValue = null;
        this.showPreview(null, null);
        this.eventListeners = [];
        this.setStorage(domStorage);
    }
    setStorage(domStorage) {
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.EventTarget.removeEventListeners(this.eventListeners);
        this.domStorage = domStorage;
        const storageKind = domStorage.isLocalStorage ? 'local-storage-data' : 'session-storage-data';
        this.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.pane().context(storageKind)}`);
        if (domStorage.storageKey) {
            this.setStorageKey(domStorage.storageKey);
        }
        this.eventListeners = [
            this.domStorage.addEventListener("DOMStorageItemsCleared" /* DOMStorage.Events.DOMStorageItemsCleared */, this.domStorageItemsCleared, this),
            this.domStorage.addEventListener("DOMStorageItemRemoved" /* DOMStorage.Events.DOMStorageItemRemoved */, this.domStorageItemRemoved, this),
            this.domStorage.addEventListener("DOMStorageItemAdded" /* DOMStorage.Events.DOMStorageItemAdded */, this.domStorageItemAdded, this),
            this.domStorage.addEventListener("DOMStorageItemUpdated" /* DOMStorage.Events.DOMStorageItemUpdated */, this.domStorageItemUpdated, this),
        ];
        this.refreshItems();
    }
    domStorageItemsCleared() {
        if (!this.isShowing() || !this.dataGrid) {
            return;
        }
        this.dataGrid.rootNode().removeChildren();
        this.dataGrid.addCreationNode(false);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.alert(i18nString(UIStrings.domStorageItemsCleared));
        this.setCanDeleteSelected(false);
    }
    domStorageItemRemoved(event) {
        if (!this.isShowing() || !this.dataGrid) {
            return;
        }
        const storageData = event.data;
        const rootNode = this.dataGrid.rootNode();
        const children = rootNode.children;
        for (let i = 0; i < children.length; ++i) {
            const childNode = children[i];
            if (childNode.data.key === storageData.key) {
                rootNode.removeChild(childNode);
                this.setCanDeleteSelected(children.length > 1);
                return;
            }
        }
    }
    domStorageItemAdded(event) {
        if (!this.isShowing() || !this.dataGrid) {
            return;
        }
        const storageData = event.data;
        const rootNode = this.dataGrid.rootNode();
        const children = rootNode.children;
        for (let i = 0; i < children.length; ++i) {
            if (children[i].data.key === storageData.key) {
                return;
            }
        }
        const childNode = new _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_3__.DataGrid.DataGridNode({ key: storageData.key, value: storageData.value }, false);
        rootNode.insertChild(childNode, children.length - 1);
    }
    domStorageItemUpdated(event) {
        if (!this.isShowing() || !this.dataGrid) {
            return;
        }
        const storageData = event.data;
        const childNode = this.dataGrid.rootNode().children.find((child) => child.data.key === storageData.key);
        if (!childNode) {
            return;
        }
        if (childNode.data.value !== storageData.value) {
            childNode.data.value = storageData.value;
            childNode.refresh();
        }
        if (!childNode.selected) {
            return;
        }
        if (this.previewValue !== storageData.value) {
            void this.previewEntry(childNode);
        }
        this.setCanDeleteSelected(true);
    }
    showDOMStorageItems(items) {
        const rootNode = this.dataGrid.rootNode();
        let selectedKey = null;
        for (const node of rootNode.children) {
            if (!node.selected) {
                continue;
            }
            selectedKey = node.data.key;
            break;
        }
        rootNode.removeChildren();
        let selectedNode = null;
        const filteredItems = (item) => `${item[0]} ${item[1]}`;
        const sortDirection = this.dataGrid.isSortOrderAscending() ? 1 : -1;
        const filteredList = this.filter(items, filteredItems).sort(function (item1, item2) {
            return sortDirection * (item1[0] > item2[0] ? 1 : -1);
        });
        for (const item of filteredList) {
            const key = item[0];
            const value = item[1];
            const node = new _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_3__.DataGrid.DataGridNode({ key: key, value: value }, false);
            node.selectable = true;
            rootNode.appendChild(node);
            if (!selectedNode || key === selectedKey) {
                selectedNode = node;
            }
        }
        if (selectedNode) {
            selectedNode.selected = true;
        }
        this.dataGrid.addCreationNode(false);
        this.setCanDeleteSelected(Boolean(selectedNode));
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.alert(i18nString(UIStrings.domStorageNumberEntries, { PH1: filteredList.length }));
    }
    deleteSelectedItem() {
        if (!this.dataGrid || !this.dataGrid.selectedNode) {
            return;
        }
        this.deleteCallback(this.dataGrid.selectedNode);
    }
    refreshItems() {
        void this.domStorage.getItems().then(items => items && this.showDOMStorageItems(items));
    }
    deleteAllItems() {
        this.domStorage.clear();
        // explicitly clear the view because the event won't be fired when it has no items
        this.domStorageItemsCleared();
    }
    editingCallback(editingNode, columnIdentifier, oldText, newText) {
        const domStorage = this.domStorage;
        if (columnIdentifier === 'key') {
            if (typeof oldText === 'string') {
                domStorage.removeItem(oldText);
            }
            domStorage.setItem(newText, editingNode.data.value || '');
            this.removeDupes(editingNode);
        }
        else {
            domStorage.setItem(editingNode.data.key || '', newText);
        }
    }
    removeDupes(masterNode) {
        const rootNode = this.dataGrid.rootNode();
        const children = rootNode.children;
        for (let i = children.length - 1; i >= 0; --i) {
            const childNode = children[i];
            if ((childNode.data.key === masterNode.data.key) && (masterNode !== childNode)) {
                rootNode.removeChild(childNode);
            }
        }
    }
    deleteCallback(node) {
        if (!node || node.isCreationNode) {
            return;
        }
        if (this.domStorage) {
            this.domStorage.removeItem(node.data.key);
        }
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.alert(i18nString(UIStrings.domStorageItemDeleted));
    }
    showPreview(preview, value) {
        if (this.preview && this.previewValue === value) {
            return;
        }
        if (this.preview) {
            this.preview.detach();
        }
        if (!preview) {
            preview = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.EmptyWidget.EmptyWidget(i18nString(UIStrings.selectAValueToPreview));
        }
        this.previewValue = value;
        this.preview = preview;
        preview.show(this.previewPanel.contentElement);
    }
    async previewEntry(entry) {
        const value = entry && entry.data && entry.data.value;
        if (entry && entry.data && entry.data.value) {
            const protocol = this.domStorage.isLocalStorage ? 'localstorage' : 'sessionstorage';
            const url = `${protocol}://${entry.key}`;
            const provider = _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_2__.StaticContentProvider.StaticContentProvider.fromString(url, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.XHR, value);
            const preview = await _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_4__.PreviewFactory.PreviewFactory.createPreview(provider, 'text/plain');
            // Selection could've changed while the preview was loaded
            if (entry.selected) {
                this.showPreview(preview, value);
            }
        }
        else {
            this.showPreview(null, value);
        }
    }
}
//# sourceMappingURL=DOMStorageItemsView.js.map

/***/ })

}]);