"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_application_IndexedDBViews_ts"],{

/***/ "./src/panels/application/IndexedDBViews.ts":
/*!**************************************************!*\
  !*** ./src/panels/application/IndexedDBViews.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IDBDataGridNode: () => (/* binding */ IDBDataGridNode),
/* harmony export */   IDBDataView: () => (/* binding */ IDBDataView),
/* harmony export */   IDBDatabaseView: () => (/* binding */ IDBDatabaseView)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/components/buttons/buttons.js */ "./src/ui/components/buttons/buttons.ts");
/* harmony import */ var _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/components/report_view/report_view.js */ "./src/ui/components/report_view/report_view.ts");
/* harmony import */ var _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/components/data_grid/data_grid.js */ "./src/ui/legacy/components/data_grid/data_grid.ts");
/* harmony import */ var _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/components/object_ui/object_ui.js */ "./src/ui/legacy/components/object_ui/object_ui.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _components_components_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/components.js */ "./src/panels/application/components/components.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './indexedDBViews.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/*
 * Copyright (C) 2012 Google Inc. All rights reserved.
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











const UIStrings = {
    /**
     *@description Text in Indexed DBViews of the Application panel
     */
    version: 'Version',
    /**
     *@description Text in Indexed DBViews of the Application panel
     */
    objectStores: 'Object stores',
    /**
     *@description Text of button in Indexed DBViews of the Application panel
     */
    deleteDatabase: 'Delete database',
    /**
     *@description Text of button in Indexed DBViews of the Application panel
     */
    refreshDatabase: 'Refresh database',
    /**
     *@description Text in Indexed DBViews of the Application panel
     *@example {msb} PH1
     */
    pleaseConfirmDeleteOfSDatabase: 'Please confirm delete of "{PH1}" database.',
    /**
     *@description Text in Indexed DBViews of the Application panel
     */
    idb: 'IDB',
    /**
     *@description Text to refresh the page
     */
    refresh: 'Refresh',
    /**
     *@description Tooltip text that appears when hovering over the delete button in the Indexed DBViews of the Application panel
     */
    deleteSelected: 'Delete selected',
    /**
     *@description Tooltip text that appears when hovering over the clear button in the Indexed DBViews of the Application panel
     */
    clearObjectStore: 'Clear object store',
    /**
     *@description Text in Indexed DBViews of the Application panel
     */
    dataMayBeStale: 'Data may be stale',
    /**
     *@description Title of needs refresh in indexed dbviews of the application panel
     */
    someEntriesMayHaveBeenModified: 'Some entries may have been modified',
    /**
     *@description Text in DOMStorage Items View of the Application panel
     */
    keyString: 'Key',
    /**
     *@description Text in Indexed DBViews of the Application panel
     */
    primaryKey: 'Primary key',
    /**
     *@description Text for the value of something
     */
    valueString: 'Value',
    /**
     *@description Data grid name for Indexed DB data grids
     */
    indexedDb: 'Indexed DB',
    /**
     *@description Text in Indexed DBViews of the Application panel
     */
    keyPath: 'Key path: ',
    /**
     *@description Tooltip text that appears when hovering over the triangle left button in the Indexed DBViews of the Application panel
     */
    showPreviousPage: 'Show previous page',
    /**
     *@description Tooltip text that appears when hovering over the triangle right button in the Indexed DBViews of the Application panel
     */
    showNextPage: 'Show next page',
    /**
     *@description Text in Indexed DBViews of the Application panel
     */
    filterByKey: 'Filter by key (show keys greater or equal to)',
    /**
     *@description Text in Context menu for expanding objects in IndexedDB tables
     */
    expandRecursively: 'Expand Recursively',
    /**
     *@description Text in Context menu for collapsing objects in IndexedDB tables
     */
    collapse: 'Collapse',
    /**
     *@description Span text content in Indexed DBViews of the Application panel
     *@example {2} PH1
     */
    totalEntriesS: 'Total entries: {PH1}',
    /**
     *@description Text in Indexed DBViews of the Application panel
     *@example {2} PH1
     */
    keyGeneratorValueS: 'Key generator value: {PH1}',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/application/IndexedDBViews.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
class IDBDatabaseView extends _components_components_js__WEBPACK_IMPORTED_MODULE_9__.StorageMetadataView.StorageMetadataView {
    constructor(model, database) {
        super();
        Object.defineProperty(this, "model", {
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
        this.model = model;
        if (database) {
            this.update(database);
        }
    }
    getTitle() {
        return this.database?.databaseId.name;
    }
    async renderReportContent() {
        if (!this.database) {
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.nothing;
        }
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html `
      ${await super.renderReportContent()}
      ${this.key(i18nString(UIStrings.version))}
      ${this.value(this.database.version.toString())}
      ${this.key(i18nString(UIStrings.objectStores))}
      ${this.value(this.database.objectStores.size.toString())}
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_3__.ReportView.ReportSectionDivider.litTagName}></${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_3__.ReportView.ReportSectionDivider.litTagName}>
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_3__.ReportView.ReportSection.litTagName}>
      <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName}
          aria-label=${i18nString(UIStrings.deleteDatabase)}
          .variant=${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Variant.OUTLINED}
          @click=${this.deleteDatabase}
          jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.action('delete-database').track({
            click: true,
        })}>
        ${i18nString(UIStrings.deleteDatabase)}
      </${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName}>&nbsp;
      <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName}
          aria-label=${i18nString(UIStrings.refreshDatabase)}
          .variant=${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Variant.OUTLINED}
          @click=${this.refreshDatabaseButtonClicked}
          jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.action('refresh-database').track({
            click: true,
        })}>
        ${i18nString(UIStrings.refreshDatabase)}
      </${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName}>
      </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_3__.ReportView.ReportSection.litTagName}>
      `;
    }
    refreshDatabaseButtonClicked() {
        this.model.refreshDatabase(this.database.databaseId);
    }
    update(database) {
        this.database = database;
        const bucketInfo = this.model.target()
            .model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.StorageBucketsModel.StorageBucketsModel)
            ?.getBucketByName(database.databaseId.storageBucket.storageKey, database.databaseId.storageBucket.name);
        if (bucketInfo) {
            this.setStorageBucket(bucketInfo);
        }
        else {
            this.setStorageKey(database.databaseId.storageBucket.storageKey);
        }
        void this.render().then(() => this.updatedForTests());
    }
    updatedForTests() {
        // Sniffed in tests.
    }
    async deleteDatabase() {
        const ok = await _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.ConfirmDialog.show(i18nString(UIStrings.pleaseConfirmDeleteOfSDatabase, { PH1: this.database.databaseId.name }), this, { jslogContext: 'delete-database-confirmation' });
        if (ok) {
            void this.model.deleteDatabase(this.database.databaseId);
        }
    }
    wasShown() {
        super.wasShown();
    }
}
customElements.define('devtools-idb-database-view', IDBDatabaseView);
class IDBDataView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.View.SimpleView {
    constructor(model, databaseId, objectStore, index, refreshObjectStoreCallback) {
        super(i18nString(UIStrings.idb));
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
        Object.defineProperty(this, "isIndex", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "refreshObjectStoreCallback", {
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
        Object.defineProperty(this, "deleteSelectedButton", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "clearButton", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "needsRefresh", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "clearingObjectStore", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "pageSize", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "skipCount", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "entries", {
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
        Object.defineProperty(this, "keyInput", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "dataGrid", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "previouslySelectedNode", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "lastPageSize", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "lastSkipCount", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "pageBackButton", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "pageForwardButton", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Object.defineProperty(this, "lastKey", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "summaryBarElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.model = model;
        this.databaseId = databaseId;
        this.isIndex = Boolean(index);
        this.refreshObjectStoreCallback = refreshObjectStoreCallback;
        this.element.classList.add('indexed-db-data-view', 'storage-view');
        this.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.pane('indexed-db-data-view')}`);
        this.refreshButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.ToolbarButton(i18nString(UIStrings.refresh), 'refresh');
        this.refreshButton.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.ToolbarButton.Events.Click, this.refreshButtonClicked, this);
        this.refreshButton.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.action('refresh').track({ click: true })}`);
        this.deleteSelectedButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.ToolbarButton(i18nString(UIStrings.deleteSelected), 'bin');
        this.deleteSelectedButton.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.ToolbarButton.Events.Click, _event => {
            void this.deleteButtonClicked(null);
        });
        this.deleteSelectedButton.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.action('delete-selected').track({ click: true })}`);
        this.clearButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.ToolbarButton(i18nString(UIStrings.clearObjectStore), 'clear');
        this.clearButton.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.ToolbarButton.Events.Click, () => {
            void this.clearButtonClicked();
        }, this);
        this.clearButton.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.action('clear-all').track({ click: true })}`);
        const refreshIcon = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createIconLabel({
            title: i18nString(UIStrings.dataMayBeStale),
            iconName: 'warning',
            color: 'var(--icon-warning)',
            width: '20px',
            height: '20px',
        });
        this.needsRefresh = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.ToolbarItem(refreshIcon);
        this.needsRefresh.setVisible(false);
        this.needsRefresh.setTitle(i18nString(UIStrings.someEntriesMayHaveBeenModified));
        this.clearingObjectStore = false;
        this.createEditorToolbar();
        this.pageSize = 50;
        this.skipCount = 0;
        this.update(objectStore, index);
        this.entries = [];
    }
    createDataGrid() {
        const keyPath = this.isIndex && this.index ? this.index.keyPath : this.objectStore.keyPath;
        const columns = [];
        // Create column defaults so that we avoid repetition below.
        const columnDefaults = {
            title: undefined,
            titleDOMFragment: undefined,
            sortable: false,
            sort: undefined,
            align: undefined,
            width: undefined,
            fixedWidth: undefined,
            editable: undefined,
            nonSelectable: undefined,
            longText: undefined,
            disclosure: undefined,
            weight: undefined,
            allowInSortByEvenWhenHidden: undefined,
            dataType: undefined,
            defaultWeight: undefined,
        };
        columns.push({ ...columnDefaults, id: 'number', title: '#', sortable: false, width: '50px' });
        columns.push({
            ...columnDefaults,
            id: 'key',
            titleDOMFragment: this.keyColumnHeaderFragment(i18nString(UIStrings.keyString), keyPath),
            sortable: false,
        });
        if (this.isIndex) {
            columns.push({
                ...columnDefaults,
                id: 'primary-key',
                titleDOMFragment: this.keyColumnHeaderFragment(i18nString(UIStrings.primaryKey), this.objectStore.keyPath),
                sortable: false,
            });
        }
        const title = i18nString(UIStrings.valueString);
        columns.push({ ...columnDefaults, id: 'value', title, sortable: false });
        const dataGrid = new _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_4__.DataGrid.DataGridImpl({
            displayName: i18nString(UIStrings.indexedDb),
            columns,
            deleteCallback: this.deleteButtonClicked.bind(this),
            refreshCallback: this.updateData.bind(this, true),
            editCallback: undefined,
        });
        dataGrid.setStriped(true);
        dataGrid.addEventListener(_ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_4__.DataGrid.Events.SelectedNode, () => {
            this.updateToolbarEnablement();
            this.updateSelectionColor();
        }, this);
        return dataGrid;
    }
    // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    keyColumnHeaderFragment(prefix, keyPath) {
        const keyColumnHeaderFragment = document.createDocumentFragment();
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createTextChild(keyColumnHeaderFragment, prefix);
        if (keyPath === null) {
            return keyColumnHeaderFragment;
        }
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createTextChild(keyColumnHeaderFragment, ' (' + i18nString(UIStrings.keyPath));
        if (Array.isArray(keyPath)) {
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createTextChild(keyColumnHeaderFragment, '[');
            for (let i = 0; i < keyPath.length; ++i) {
                if (i !== 0) {
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createTextChild(keyColumnHeaderFragment, ', ');
                }
                keyColumnHeaderFragment.appendChild(this.keyPathStringFragment(keyPath[i]));
            }
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createTextChild(keyColumnHeaderFragment, ']');
        }
        else {
            const keyPathString = keyPath;
            keyColumnHeaderFragment.appendChild(this.keyPathStringFragment(keyPathString));
        }
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createTextChild(keyColumnHeaderFragment, ')');
        return keyColumnHeaderFragment;
    }
    keyPathStringFragment(keyPathString) {
        const keyPathStringFragment = document.createDocumentFragment();
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createTextChild(keyPathStringFragment, '"');
        const keyPathSpan = keyPathStringFragment.createChild('span', 'source-code indexed-db-key-path');
        keyPathSpan.textContent = keyPathString;
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createTextChild(keyPathStringFragment, '"');
        return keyPathStringFragment;
    }
    createEditorToolbar() {
        const editorToolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.Toolbar('data-view-toolbar', this.element);
        editorToolbar.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.toolbar()}`);
        editorToolbar.appendToolbarItem(this.refreshButton);
        editorToolbar.appendToolbarItem(this.clearButton);
        editorToolbar.appendToolbarItem(this.deleteSelectedButton);
        editorToolbar.appendToolbarItem(new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.ToolbarSeparator());
        this.pageBackButton =
            new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.ToolbarButton(i18nString(UIStrings.showPreviousPage), 'triangle-left', undefined, 'prev-page');
        this.pageBackButton.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.ToolbarButton.Events.Click, this.pageBackButtonClicked, this);
        editorToolbar.appendToolbarItem(this.pageBackButton);
        this.pageForwardButton =
            new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.ToolbarButton(i18nString(UIStrings.showNextPage), 'triangle-right', undefined, 'next-page');
        this.pageForwardButton.setEnabled(false);
        this.pageForwardButton.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.ToolbarButton.Events.Click, this.pageForwardButtonClicked, this);
        editorToolbar.appendToolbarItem(this.pageForwardButton);
        this.keyInput = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.ToolbarFilter(i18nString(UIStrings.filterByKey), 0.5);
        this.keyInput.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.ToolbarInput.Event.TextChanged, this.updateData.bind(this, false));
        editorToolbar.appendToolbarItem(this.keyInput);
        editorToolbar.appendToolbarItem(new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.ToolbarSeparator());
        editorToolbar.appendToolbarItem(this.needsRefresh);
    }
    pageBackButtonClicked() {
        this.skipCount = Math.max(0, this.skipCount - this.pageSize);
        this.updateData(false);
    }
    pageForwardButtonClicked() {
        this.skipCount = this.skipCount + this.pageSize;
        this.updateData(false);
    }
    populateContextMenu(contextMenu, gridNode) {
        const node = gridNode;
        if (node.valueObjectPresentation) {
            contextMenu.revealSection().appendItem(i18nString(UIStrings.expandRecursively), () => {
                if (!node.valueObjectPresentation) {
                    return;
                }
                void node.valueObjectPresentation.objectTreeElement().expandRecursively();
            }, { jslogContext: 'expand-recursively' });
            contextMenu.revealSection().appendItem(i18nString(UIStrings.collapse), () => {
                if (!node.valueObjectPresentation) {
                    return;
                }
                node.valueObjectPresentation.objectTreeElement().collapse();
            }, { jslogContext: 'collapse' });
        }
    }
    refreshData() {
        this.updateData(true);
    }
    update(objectStore, index) {
        this.objectStore = objectStore;
        this.index = index;
        if (this.dataGrid) {
            this.dataGrid.asWidget().detach();
        }
        this.dataGrid = this.createDataGrid();
        this.dataGrid.setRowContextMenuCallback(this.populateContextMenu.bind(this));
        this.dataGrid.asWidget().show(this.element);
        this.skipCount = 0;
        this.updateData(true);
    }
    // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    parseKey(keyString) {
        let result;
        try {
            result = JSON.parse(keyString);
        }
        catch (e) {
            result = keyString;
        }
        return result;
    }
    updateData(force) {
        const key = this.parseKey(this.keyInput.value());
        const pageSize = this.pageSize;
        let skipCount = this.skipCount;
        let selected = this.dataGrid.selectedNode ? this.dataGrid.selectedNode.data['number'] : 0;
        selected = Math.max(selected, this.skipCount); // Page forward should select top entry
        this.clearButton.setEnabled(!this.isIndex);
        if (!force && this.lastKey === key && this.lastPageSize === pageSize && this.lastSkipCount === skipCount) {
            return;
        }
        if (this.lastKey !== key || this.lastPageSize !== pageSize) {
            skipCount = 0;
            this.skipCount = 0;
        }
        this.lastKey = key;
        this.lastPageSize = pageSize;
        this.lastSkipCount = skipCount;
        function callback(entries, hasMore) {
            this.clear();
            this.entries = entries;
            let selectedNode = null;
            for (let i = 0; i < entries.length; ++i) {
                // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const data = {};
                data['number'] = i + skipCount;
                data['key'] = entries[i].key;
                data['primary-key'] = entries[i].primaryKey;
                data['value'] = entries[i].value;
                const node = new IDBDataGridNode(data);
                this.dataGrid.rootNode().appendChild(node);
                if (data['number'] <= selected) {
                    selectedNode = node;
                }
            }
            if (selectedNode) {
                selectedNode.select();
            }
            this.pageBackButton.setEnabled(Boolean(skipCount));
            this.pageForwardButton.setEnabled(hasMore);
            this.needsRefresh.setVisible(false);
            this.updateToolbarEnablement();
            this.updateSelectionColor();
            this.updatedDataForTests();
        }
        const idbKeyRange = key ? window.IDBKeyRange.lowerBound(key) : null;
        if (this.isIndex && this.index) {
            this.model.loadIndexData(this.databaseId, this.objectStore.name, this.index.name, idbKeyRange, skipCount, pageSize, callback.bind(this));
        }
        else {
            this.model.loadObjectStoreData(this.databaseId, this.objectStore.name, idbKeyRange, skipCount, pageSize, callback.bind(this));
        }
        void this.model.getMetadata(this.databaseId, this.objectStore).then(this.updateSummaryBar.bind(this));
    }
    updateSummaryBar(metadata) {
        if (!this.summaryBarElement) {
            this.summaryBarElement = this.element.createChild('div', 'object-store-summary-bar');
        }
        this.summaryBarElement.removeChildren();
        if (!metadata) {
            return;
        }
        const separator = '\u2002\u2758\u2002';
        const span = this.summaryBarElement.createChild('span');
        span.textContent = i18nString(UIStrings.totalEntriesS, { PH1: String(metadata.entriesCount) });
        if (this.objectStore.autoIncrement) {
            span.textContent += separator;
            span.textContent += i18nString(UIStrings.keyGeneratorValueS, { PH1: String(metadata.keyGeneratorValue) });
        }
    }
    updatedDataForTests() {
        // Sniffed in tests.
    }
    refreshButtonClicked() {
        this.updateData(true);
    }
    async clearButtonClicked() {
        this.clearButton.setEnabled(false);
        this.clearingObjectStore = true;
        await this.model.clearObjectStore(this.databaseId, this.objectStore.name);
        this.clearingObjectStore = false;
        this.clearButton.setEnabled(true);
        this.updateData(true);
    }
    markNeedsRefresh() {
        // We expect that calling clearObjectStore() will cause the backend to send us an update.
        if (this.clearingObjectStore) {
            return;
        }
        this.needsRefresh.setVisible(true);
    }
    async deleteButtonClicked(node) {
        if (!node) {
            node = this.dataGrid.selectedNode;
            if (!node) {
                return;
            }
        }
        const key = (this.isIndex ? node.data['primary-key'] : node.data.key);
        // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const keyValue = key.value;
        await this.model.deleteEntries(this.databaseId, this.objectStore.name, window.IDBKeyRange.only(keyValue));
        this.refreshObjectStoreCallback();
    }
    clear() {
        this.dataGrid.rootNode().removeChildren();
        this.entries = [];
    }
    updateToolbarEnablement() {
        const empty = !this.dataGrid || this.dataGrid.rootNode().children.length === 0;
        this.deleteSelectedButton.setEnabled(!empty && this.dataGrid.selectedNode !== null);
    }
    updateSelectionColor() {
        if (this.previouslySelectedNode) {
            this.previouslySelectedNode.element().querySelectorAll('.source-code').forEach(element => {
                const shadowRoot = element.shadowRoot;
                shadowRoot?.adoptedStyleSheets.pop();
            });
        }
        this.previouslySelectedNode = this.dataGrid.selectedNode ?? undefined;
        this.dataGrid.selectedNode?.element().querySelectorAll('.source-code').forEach(element => {
            const shadowRoot = element.shadowRoot;
            const sheet = new CSSStyleSheet();
            sheet.replaceSync('::selection {background-color: var(--sys-color-state-focus-select);}');
            shadowRoot?.adoptedStyleSheets.push(sheet);
        });
    }
    wasShown() {
        super.wasShown();
        this.registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './indexedDBViews.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
    }
}
class IDBDataGridNode extends _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_4__.DataGrid.DataGridNode {
    constructor(data) {
        super(data, false);
        Object.defineProperty(this, "selectable", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "valueObjectPresentation", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.selectable = true;
        this.valueObjectPresentation = null;
    }
    createCell(columnIdentifier) {
        const cell = super.createCell(columnIdentifier);
        const value = this.data[columnIdentifier];
        switch (columnIdentifier) {
            case 'value': {
                cell.removeChildren();
                const objectPropSection = _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_5__.ObjectPropertiesSection.ObjectPropertiesSection.defaultObjectPropertiesSection(value, undefined /* linkifier */, true /* skipProto */, true /* readOnly */);
                cell.appendChild(objectPropSection.element);
                this.valueObjectPresentation = objectPropSection;
                break;
            }
            case 'key':
            case 'primary-key': {
                cell.removeChildren();
                const objectElement = _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_5__.ObjectPropertiesSection.ObjectPropertiesSection.defaultObjectPresentation(value, undefined /* linkifier */, true /* skipProto */, true /* readOnly */);
                cell.appendChild(objectElement);
                break;
            }
            default: {
            }
        }
        return cell;
    }
}


/***/ })

}]);