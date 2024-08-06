"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_developer_resources_DeveloperResourcesListView_js"],{

/***/ "./panels/developer_resources/DeveloperResourcesListView.js":
/*!******************************************************************!*\
  !*** ./panels/developer_resources/DeveloperResourcesListView.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeveloperResourcesListView: () => (/* binding */ DeveloperResourcesListView)
/* harmony export */ });
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/text_utils/text_utils.js */ "./models/text_utils/text_utils.js");
/* harmony import */ var _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/components/data_grid/data_grid.js */ "./ui/legacy/components/data_grid/data_grid.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _developerResourcesListView_css_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./developerResourcesListView.css.js */ "./panels/developer_resources/developerResourcesListView.css.js");
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.








const UIStrings = {
    /**
     *@description Text for the status of something
     */
    status: 'Status',
    /**
     *@description Text for web URLs
     */
    url: 'URL',
    /**
     *@description Text for the initiator of something
     */
    initiator: 'Initiator',
    /**
     *@description Text in Coverage List View of the Coverage tab
     */
    totalBytes: 'Total Bytes',
    /**
     *@description Text for errors
     */
    error: 'Error',
    /**
     *@description Title for the Developer resources tab
     */
    developerResources: 'Developer resources',
    /**
     *@description Text for a context menu entry
     */
    copyUrl: 'Copy URL',
    /**
     * @description Text for a context menu entry. Command to copy a URL to the clipboard. The initiator
     * of a request is the entity that caused this request to be sent.
     */
    copyInitiatorUrl: 'Copy initiator URL',
    /**
     *@description Text for the status column of a list view
     */
    pending: 'pending',
    /**
     *@description Text for the status column of a list view
     */
    success: 'success',
    /**
     *@description Text for the status column of a list view
     */
    failure: 'failure',
    /**
     *@description Accessible text for the value in bytes in memory allocation.
     */
    sBytes: '{n, plural, =1 {# byte} other {# bytes}}',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/developer_resources/DeveloperResourcesListView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
class DeveloperResourcesListView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Widget.VBox {
    nodeForItem;
    isVisibleFilter;
    highlightRegExp;
    dataGrid;
    constructor(isVisibleFilter) {
        super(true);
        this.nodeForItem = new Map();
        this.isVisibleFilter = isVisibleFilter;
        this.highlightRegExp = null;
        const columns = [
            { id: 'status', title: i18nString(UIStrings.status), width: '60px', fixedWidth: true, sortable: true },
            { id: 'url', title: i18nString(UIStrings.url), width: '250px', fixedWidth: false, sortable: true },
            { id: 'initiator', title: i18nString(UIStrings.initiator), width: '80px', fixedWidth: false, sortable: true },
            {
                id: 'size',
                title: i18nString(UIStrings.totalBytes),
                width: '80px',
                fixedWidth: true,
                sortable: true,
                align: "right" /* DataGrid.DataGrid.Align.Right */,
            },
            {
                id: 'error-message',
                title: i18nString(UIStrings.error),
                width: '200px',
                fixedWidth: false,
                sortable: true,
            },
        ];
        this.dataGrid = new _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_5__.SortableDataGrid.SortableDataGrid({
            displayName: i18nString(UIStrings.developerResources),
            columns,
            editCallback: undefined,
            refreshCallback: undefined,
            deleteCallback: undefined,
        });
        this.dataGrid.setResizeMethod("last" /* DataGrid.DataGrid.ResizeMethod.Last */);
        this.dataGrid.setStriped(true);
        this.dataGrid.element.classList.add('flex-auto');
        this.dataGrid.addEventListener("SortingChanged" /* DataGrid.DataGrid.Events.SortingChanged */, this.sortingChanged, this);
        this.dataGrid.setRowContextMenuCallback(this.populateContextMenu.bind(this));
        const dataGridWidget = this.dataGrid.asWidget();
        dataGridWidget.show(this.contentElement);
        this.setDefaultFocusedChild(dataGridWidget);
    }
    select(item) {
        const node = this.nodeForItem.get(item);
        if (node) {
            node.select();
        }
    }
    selectedItem() {
        if (!this.dataGrid.selectedNode) {
            return null;
        }
        return this.dataGrid.selectedNode.item;
    }
    populateContextMenu(contextMenu, gridNode) {
        const item = gridNode.item;
        contextMenu.clipboardSection().appendItem(i18nString(UIStrings.copyUrl), () => {
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.InspectorFrontendHost.InspectorFrontendHostInstance.copyText(item.url);
        }, { jslogContext: 'copy-url' });
        if (item.initiator.initiatorUrl) {
            contextMenu.clipboardSection().appendItem(i18nString(UIStrings.copyInitiatorUrl), () => {
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.InspectorFrontendHost.InspectorFrontendHostInstance.copyText(item.initiator.initiatorUrl);
            }, { jslogContext: 'copy-initiator-url' });
        }
    }
    update(items) {
        let hadUpdates = false;
        const rootNode = this.dataGrid.rootNode();
        for (const item of items) {
            let node = this.nodeForItem.get(item);
            if (node) {
                if (this.isVisibleFilter(node.item)) {
                    hadUpdates = node.refreshIfNeeded() || hadUpdates;
                }
                continue;
            }
            node = new GridNode(item);
            this.nodeForItem.set(item, node);
            if (this.isVisibleFilter(node.item)) {
                rootNode.appendChild(node);
                hadUpdates = true;
            }
        }
        if (hadUpdates) {
            this.sortingChanged();
        }
    }
    reset() {
        this.nodeForItem.clear();
        this.dataGrid.rootNode().removeChildren();
    }
    updateFilterAndHighlight(highlightRegExp) {
        this.highlightRegExp = highlightRegExp;
        let hadTreeUpdates = false;
        for (const node of this.nodeForItem.values()) {
            const shouldBeVisible = this.isVisibleFilter(node.item);
            const isVisible = Boolean(node.parent);
            if (shouldBeVisible) {
                node.setHighlight(this.highlightRegExp);
            }
            if (shouldBeVisible === isVisible) {
                continue;
            }
            hadTreeUpdates = true;
            if (!shouldBeVisible) {
                node.remove();
            }
            else {
                this.dataGrid.rootNode().appendChild(node);
            }
        }
        if (hadTreeUpdates) {
            this.sortingChanged();
        }
    }
    sortingChanged() {
        const columnId = this.dataGrid.sortColumnId();
        if (!columnId) {
            return;
        }
        const sortFunction = GridNode.sortFunctionForColumn(columnId);
        if (sortFunction) {
            this.dataGrid.sortNodes(sortFunction, !this.dataGrid.isSortOrderAscending());
        }
    }
    wasShown() {
        super.wasShown();
        this.registerCSSFiles([_developerResourcesListView_css_js__WEBPACK_IMPORTED_MODULE_7__["default"]]);
    }
}
class GridNode extends _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_5__.SortableDataGrid.SortableDataGridNode {
    item;
    highlightRegExp;
    constructor(item) {
        super();
        this.item = item;
        this.highlightRegExp = null;
    }
    setHighlight(highlightRegExp) {
        if (this.highlightRegExp === highlightRegExp) {
            return;
        }
        this.highlightRegExp = highlightRegExp;
        this.refresh();
    }
    refreshIfNeeded() {
        this.refresh();
        return true;
    }
    createCell(columnId) {
        const cell = this.createTD(columnId);
        switch (columnId) {
            case 'url': {
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Tooltip.Tooltip.install(cell, this.item.url);
                const outer = cell.createChild('div', 'url-outer');
                const prefix = outer.createChild('div', 'url-prefix');
                const suffix = outer.createChild('div', 'url-suffix');
                const splitURL = /^(.*)(\/[^/]*)$/.exec(this.item.url);
                prefix.textContent = splitURL ? splitURL[1] : this.item.url;
                suffix.textContent = splitURL ? splitURL[2] : '';
                if (this.highlightRegExp) {
                    this.highlight(outer, this.item.url);
                }
                this.setCellAccessibleName(this.item.url, cell, columnId);
                break;
            }
            case 'initiator': {
                const url = this.item.initiator.initiatorUrl || '';
                cell.textContent = url;
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Tooltip.Tooltip.install(cell, url);
                this.setCellAccessibleName(url, cell, columnId);
                cell.onmouseenter = () => {
                    const frameId = this.item.initiator.frameId;
                    const frame = frameId ? _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.FrameManager.FrameManager.instance().getFrame(frameId) : null;
                    if (frame) {
                        void frame.highlight();
                    }
                };
                cell.onmouseleave = () => _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.OverlayModel.OverlayModel.hideDOMNodeHighlight();
                break;
            }
            case 'status': {
                if (this.item.success === null) {
                    cell.textContent = i18nString(UIStrings.pending);
                }
                else {
                    cell.textContent = this.item.success ? i18nString(UIStrings.success) : i18nString(UIStrings.failure);
                }
                break;
            }
            case 'size': {
                const size = this.item.size;
                if (size !== null) {
                    const sizeSpan = cell.createChild('span');
                    sizeSpan.textContent = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.NumberUtilities.withThousandsSeparator(size);
                    const sizeAccessibleName = i18nString(UIStrings.sBytes, { n: size });
                    this.setCellAccessibleName(sizeAccessibleName, cell, columnId);
                }
                break;
            }
            case 'error-message': {
                cell.classList.add('error-message');
                if (this.item.errorMessage) {
                    cell.textContent = this.item.errorMessage;
                    if (this.highlightRegExp) {
                        this.highlight(cell, this.item.errorMessage);
                    }
                }
                break;
            }
        }
        return cell;
    }
    highlight(element, textContent) {
        if (!this.highlightRegExp) {
            return;
        }
        const matches = this.highlightRegExp.exec(textContent);
        if (!matches || !matches.length) {
            return;
        }
        const range = new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_4__.TextRange.SourceRange(matches.index, matches[0].length);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.highlightRangesWithStyleClass(element, [range], 'filter-highlight');
    }
    static sortFunctionForColumn(columnId) {
        const nullToNegative = (x) => x === null ? -1 : Number(x);
        switch (columnId) {
            case 'url':
                return (a, b) => a.item.url.localeCompare(b.item.url);
            case 'status':
                return (a, b) => {
                    return nullToNegative(a.item.success) - nullToNegative(b.item.success);
                };
            case 'size':
                return (a, b) => nullToNegative(a.item.size) - nullToNegative(b.item.size);
            case 'initiator':
                return (a, b) => (a.item.initiator.initiatorUrl || '').localeCompare(b.item.initiator.initiatorUrl || '');
            case 'error-message':
                return (a, b) => (a.item.errorMessage || '').localeCompare(b.item.errorMessage || '');
            default:
                console.assert(false, 'Unknown sort field: ' + columnId);
                return null;
        }
    }
}
//# sourceMappingURL=DeveloperResourcesListView.js.map

/***/ }),

/***/ "./panels/developer_resources/developerResourcesListView.css.js":
/*!**********************************************************************!*\
  !*** ./panels/developer_resources/developerResourcesListView.css.js ***!
  \**********************************************************************/
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
 * Copyright (c) 2020 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.data-grid {
  border: none;
}

.data-grid td .url-outer {
  width: 100%;
  display: inline-flex;
  justify-content: flex-start;
}

.data-grid td .url-outer .filter-highlight {
  font-weight: bold;
}

.data-grid td .url-prefix {
  overflow-x: hidden;
  text-overflow: ellipsis;
}

.data-grid td .url-suffix {
  flex: none;
}

.data-grid td.error-message .filter-highlight {
  font-weight: bold;
}

/*# sourceURL=developerResourcesListView.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);