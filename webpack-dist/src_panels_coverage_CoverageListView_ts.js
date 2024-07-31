"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_coverage_CoverageListView_ts"],{

/***/ "./src/panels/coverage/CoverageListView.ts":
/*!*************************************************!*\
  !*** ./src/panels/coverage/CoverageListView.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CoverageListView: () => (/* binding */ CoverageListView),
/* harmony export */   GridNode: () => (/* binding */ GridNode),
/* harmony export */   coverageTypeToString: () => (/* binding */ coverageTypeToString)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/text_utils/text_utils.js */ "./src/models/text_utils/text_utils.ts");
/* harmony import */ var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./src/models/workspace/workspace.ts");
/* harmony import */ var _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/components/data_grid/data_grid.js */ "./src/ui/legacy/components/data_grid/data_grid.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './coverageListView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _CoverageModel_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CoverageModel.js */ "./src/panels/coverage/CoverageModel.ts");
// Copyright (c) 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.








const UIStrings = {
    /**
     *@description Text that appears on a button for the css resource type filter.
     */
    css: 'CSS',
    /**
     *@description Text in Coverage List View of the Coverage tab
     */
    jsPerFunction: 'JS (per function)',
    /**
     *@description Text in Coverage List View of the Coverage tab
     */
    jsPerBlock: 'JS (per block)',
    /**
     *@description Text for web URLs
     */
    url: 'URL',
    /**
     *@description Text that refers to some types
     */
    type: 'Type',
    /**
     *@description Text in Coverage List View of the Coverage tab
     */
    totalBytes: 'Total Bytes',
    /**
     *@description Text in Coverage List View of the Coverage tab
     */
    unusedBytes: 'Unused Bytes',
    /**
     *@description Text in the Coverage List View of the Coverage Tab
     */
    usageVisualization: 'Usage Visualization',
    /**
     *@description Data grid name for Coverage data grids
     */
    codeCoverage: 'Code Coverage',
    /**
     *@description Cell title in Coverage List View of the Coverage tab. The coverage tool tells
     *developers which functions (logical groups of lines of code) were actually run/executed. If a
     *function does get run, then it is marked in the UI to indicate that it was covered.
     */
    jsCoverageWithPerFunction: 'JS coverage with per function granularity: Once a function was executed, the whole function is marked as covered.',
    /**
     *@description Cell title in Coverage List View of the Coverage tab. The coverage tool tells
     *developers which blocks (logical groups of lines of code, smaller than a function) were actually
     *run/executed. If a block does get run, then it is marked in the UI to indicate that it was
     *covered.
     */
    jsCoverageWithPerBlock: 'JS coverage with per block granularity: Once a block of JavaScript was executed, that block is marked as covered.',
    /**
     *@description Accessible text for the value in bytes in memory allocation or coverage view.
     */
    sBytes: '{n, plural, =1 {# byte} other {# bytes}}',
    /**
     *@description Accessible text for the unused bytes column in the coverage tool that describes the total unused bytes and percentage of the file unused.
     *@example {88%} percentage
     */
    sBytesS: '{n, plural, =1 {# byte, {percentage}} other {# bytes, {percentage}}}',
    /**
     *@description Tooltip text for the bar in the coverage list view of the coverage tool that illustrates the relation between used and unused bytes.
     *@example {1000} PH1
     *@example {12.34} PH2
     */
    sBytesSBelongToFunctionsThatHave: '{PH1} bytes ({PH2}) belong to functions that have not (yet) been executed.',
    /**
     *@description Tooltip text for the bar in the coverage list view of the coverage tool that illustrates the relation between used and unused bytes.
     *@example {1000} PH1
     *@example {12.34} PH2
     */
    sBytesSBelongToBlocksOf: '{PH1} bytes ({PH2}) belong to blocks of JavaScript that have not (yet) been executed.',
    /**
     *@description Message in Coverage View of the Coverage tab
     *@example {1000} PH1
     *@example {12.34} PH2
     */
    sBytesSBelongToFunctionsThatHaveExecuted: '{PH1} bytes ({PH2}) belong to functions that have executed at least once.',
    /**
     *@description Message in Coverage View of the Coverage tab
     *@example {1000} PH1
     *@example {12.34} PH2
     */
    sBytesSBelongToBlocksOfJavascript: '{PH1} bytes ({PH2}) belong to blocks of JavaScript that have executed at least once.',
    /**
     *@description Accessible text for the visualization column of coverage tool. Contains percentage of unused bytes to used bytes.
     *@example {12.3} PH1
     *@example {12.3} PH2
     */
    sOfFileUnusedSOfFileUsed: '{PH1} % of file unused, {PH2} % of file used',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/coverage/CoverageListView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
function coverageTypeToString(type) {
    const types = [];
    if (type & _CoverageModel_js__WEBPACK_IMPORTED_MODULE_7__.CoverageType.CSS) {
        types.push(i18nString(UIStrings.css));
    }
    if (type & _CoverageModel_js__WEBPACK_IMPORTED_MODULE_7__.CoverageType.JavaScriptPerFunction) {
        types.push(i18nString(UIStrings.jsPerFunction));
    }
    else if (type & _CoverageModel_js__WEBPACK_IMPORTED_MODULE_7__.CoverageType.JavaScript) {
        types.push(i18nString(UIStrings.jsPerBlock));
    }
    return types.join('+');
}
class CoverageListView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Widget.VBox {
    constructor(isVisibleFilter) {
        super(true);
        Object.defineProperty(this, "nodeForCoverageInfo", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "isVisibleFilter", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "highlightRegExp", {
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
        this.nodeForCoverageInfo = new Map();
        this.isVisibleFilter = isVisibleFilter;
        this.highlightRegExp = null;
        const columns = [
            {
                id: 'url',
                title: i18nString(UIStrings.url),
                width: '250px',
                weight: 3,
                fixedWidth: false,
                sortable: true,
                disclosure: true,
            },
            { id: 'type', title: i18nString(UIStrings.type), width: '45px', weight: 1, fixedWidth: true, sortable: true },
            {
                id: 'size',
                title: i18nString(UIStrings.totalBytes),
                width: '60px',
                fixedWidth: true,
                sortable: true,
                align: _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_4__.DataGrid.Align.Right,
                weight: 1,
            },
            {
                id: 'unused-size',
                title: i18nString(UIStrings.unusedBytes),
                width: '100px',
                fixedWidth: true,
                sortable: true,
                align: _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_4__.DataGrid.Align.Right,
                sort: _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_4__.DataGrid.Order.Descending,
                weight: 1,
            },
            {
                id: 'bars',
                title: i18nString(UIStrings.usageVisualization),
                width: '250px',
                fixedWidth: false,
                sortable: true,
                weight: 1,
            },
        ];
        this.dataGrid = new _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_4__.SortableDataGrid.SortableDataGrid({
            displayName: i18nString(UIStrings.codeCoverage),
            columns,
            editCallback: undefined,
            refreshCallback: undefined,
            deleteCallback: undefined,
        });
        this.dataGrid.setResizeMethod(_ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_4__.DataGrid.ResizeMethod.Last);
        this.dataGrid.setStriped(true);
        this.dataGrid.element.classList.add('flex-auto');
        this.dataGrid.addEventListener(_ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_4__.DataGrid.Events.OpenedNode, this.onOpenedNode, this);
        this.dataGrid.addEventListener(_ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_4__.DataGrid.Events.SortingChanged, this.sortingChanged, this);
        const dataGridWidget = this.dataGrid.asWidget();
        dataGridWidget.show(this.contentElement);
        this.setDefaultFocusedChild(dataGridWidget);
    }
    update(coverageInfo) {
        let hadUpdates = false;
        const maxSize = coverageInfo.reduce((acc, entry) => Math.max(acc, entry.size()), 0);
        const rootNode = this.dataGrid.rootNode();
        for (const entry of coverageInfo) {
            let node = this.nodeForCoverageInfo.get(entry);
            if (node) {
                if (this.isVisibleFilter(node.coverageInfo)) {
                    hadUpdates = node.refreshIfNeeded(maxSize) || hadUpdates;
                    if (entry.sourcesURLCoverageInfo.size > 0) {
                        this.updateSourceNodes(entry.sourcesURLCoverageInfo, maxSize, node);
                    }
                }
                continue;
            }
            node = new GridNode(entry, maxSize);
            this.nodeForCoverageInfo.set(entry, node);
            if (this.isVisibleFilter(node.coverageInfo)) {
                rootNode.appendChild(node);
                if (entry.sourcesURLCoverageInfo.size > 0) {
                    void this.createSourceNodes(entry.sourcesURLCoverageInfo, maxSize, node);
                }
                hadUpdates = true;
            }
        }
        if (hadUpdates) {
            this.sortingChanged();
        }
    }
    updateSourceNodes(sourcesURLCoverageInfo, maxSize, node) {
        let shouldCreateSourceNodes = false;
        for (const coverageInfo of sourcesURLCoverageInfo.values()) {
            const sourceNode = this.nodeForCoverageInfo.get(coverageInfo);
            if (sourceNode) {
                sourceNode.refreshIfNeeded(maxSize);
            }
            else {
                shouldCreateSourceNodes = true;
                break;
            }
        }
        if (shouldCreateSourceNodes) {
            void this.createSourceNodes(sourcesURLCoverageInfo, maxSize, node);
        }
    }
    async createSourceNodes(sourcesURLCoverageInfo, maxSize, node) {
        for (const coverageInfo of sourcesURLCoverageInfo.values()) {
            const sourceNode = new GridNode(coverageInfo, maxSize);
            node.appendChild(sourceNode);
            this.nodeForCoverageInfo.set(coverageInfo, sourceNode);
        }
    }
    reset() {
        this.nodeForCoverageInfo.clear();
        this.dataGrid.rootNode().removeChildren();
    }
    updateFilterAndHighlight(highlightRegExp) {
        this.highlightRegExp = highlightRegExp;
        let hadTreeUpdates = false;
        for (const node of this.nodeForCoverageInfo.values()) {
            const shouldBeVisible = this.isVisibleFilter(node.coverageInfo);
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
                this.appendNodeByType(node);
            }
        }
        if (hadTreeUpdates) {
            this.sortingChanged();
        }
    }
    appendNodeByType(node) {
        if (node.coverageInfo instanceof _CoverageModel_js__WEBPACK_IMPORTED_MODULE_7__.SourceURLCoverageInfo) {
            const parentNode = this.nodeForCoverageInfo.get(node.coverageInfo.generatedURLCoverageInfo);
            parentNode?.appendChild(node);
        }
        else {
            this.dataGrid.rootNode().appendChild(node);
        }
    }
    selectByUrl(url) {
        for (const [info, node] of this.nodeForCoverageInfo.entries()) {
            if (info.url() === url) {
                node.revealAndSelect();
                break;
            }
        }
    }
    onOpenedNode() {
        void this.revealSourceForSelectedNode();
    }
    async revealSourceForSelectedNode() {
        const node = this.dataGrid.selectedNode;
        if (!node) {
            return;
        }
        const coverageInfo = node.coverageInfo;
        const sourceCode = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_3__.Workspace.WorkspaceImpl.instance().uiSourceCodeForURL(coverageInfo.url());
        if (!sourceCode) {
            return;
        }
        if (this.dataGrid.selectedNode !== node) {
            return;
        }
        void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(sourceCode);
    }
    sortingChanged() {
        const columnId = this.dataGrid.sortColumnId();
        if (!columnId) {
            return;
        }
        const sortFunction = GridNode.sortFunctionForColumn(columnId);
        if (!sortFunction) {
            return;
        }
        this.dataGrid.sortNodes(sortFunction, !this.dataGrid.isSortOrderAscending());
    }
    wasShown() {
        super.wasShown();
        this.registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './coverageListView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
    }
}
let percentageFormatter = null;
function getPercentageFormatter() {
    if (!percentageFormatter) {
        percentageFormatter = new Intl.NumberFormat(_core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.DevToolsLocale.DevToolsLocale.instance().locale, {
            style: 'percent',
            maximumFractionDigits: 1,
        });
    }
    return percentageFormatter;
}
let bytesFormatter = null;
function getBytesFormatter() {
    if (!bytesFormatter) {
        bytesFormatter = new Intl.NumberFormat(_core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.DevToolsLocale.DevToolsLocale.instance().locale);
    }
    return bytesFormatter;
}
class GridNode extends _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_4__.SortableDataGrid.SortableDataGridNode {
    constructor(coverageInfo, maxSize) {
        super();
        Object.defineProperty(this, "coverageInfo", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "lastUsedSize", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "url", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "maxSize", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "highlightRegExp", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.coverageInfo = coverageInfo;
        this.url = coverageInfo.url();
        this.maxSize = maxSize;
        this.highlightRegExp = null;
    }
    setHighlight(highlightRegExp) {
        if (this.highlightRegExp === highlightRegExp) {
            return;
        }
        this.highlightRegExp = highlightRegExp;
        this.refresh();
    }
    refreshIfNeeded(maxSize) {
        if (this.lastUsedSize === this.coverageInfo.usedSize() && maxSize === this.maxSize) {
            return false;
        }
        this.lastUsedSize = this.coverageInfo.usedSize();
        this.maxSize = maxSize;
        this.refresh();
        return true;
    }
    createCell(columnId) {
        const cell = this.createTD(columnId);
        switch (columnId) {
            case 'url': {
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Tooltip.Tooltip.install(cell, this.url);
                const outer = cell.createChild('div', 'url-outer');
                const prefix = outer.createChild('div', 'url-prefix');
                const suffix = outer.createChild('div', 'url-suffix');
                const splitURL = /^(.*)(\/[^/]*)$/.exec(this.url);
                prefix.textContent = splitURL ? splitURL[1] : this.url;
                suffix.textContent = splitURL ? splitURL[2] : '';
                if (this.highlightRegExp) {
                    this.highlight(outer, this.url);
                }
                this.setCellAccessibleName(this.url, cell, columnId);
                break;
            }
            case 'type': {
                cell.textContent = coverageTypeToString(this.coverageInfo.type());
                if (this.coverageInfo.type() & _CoverageModel_js__WEBPACK_IMPORTED_MODULE_7__.CoverageType.JavaScriptPerFunction) {
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Tooltip.Tooltip.install(cell, i18nString(UIStrings.jsCoverageWithPerFunction));
                }
                else if (this.coverageInfo.type() & _CoverageModel_js__WEBPACK_IMPORTED_MODULE_7__.CoverageType.JavaScript) {
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Tooltip.Tooltip.install(cell, i18nString(UIStrings.jsCoverageWithPerBlock));
                }
                break;
            }
            case 'size': {
                const size = this.coverageInfo.size() || 0;
                const sizeSpan = cell.createChild('span');
                const sizeFormatted = getBytesFormatter().format(size);
                sizeSpan.textContent = sizeFormatted;
                const sizeAccessibleName = i18nString(UIStrings.sBytes, { n: size });
                this.setCellAccessibleName(sizeAccessibleName, cell, columnId);
                break;
            }
            case 'unused-size': {
                const unusedSize = this.coverageInfo.unusedSize() || 0;
                const unusedSizeSpan = cell.createChild('span');
                const unusedPercentsSpan = cell.createChild('span', 'percent-value');
                const unusedSizeFormatted = getBytesFormatter().format(unusedSize);
                unusedSizeSpan.textContent = unusedSizeFormatted;
                const unusedPercentFormatted = getPercentageFormatter().format(this.coverageInfo.unusedPercentage());
                unusedPercentsSpan.textContent = unusedPercentFormatted;
                const unusedAccessibleName = i18nString(UIStrings.sBytesS, { n: unusedSize, percentage: unusedPercentFormatted });
                this.setCellAccessibleName(unusedAccessibleName, cell, columnId);
                break;
            }
            case 'bars': {
                const barContainer = cell.createChild('div', 'bar-container');
                const unusedPercent = getPercentageFormatter().format(this.coverageInfo.unusedPercentage());
                const usedPercent = getPercentageFormatter().format(this.coverageInfo.usedPercentage());
                if (this.coverageInfo.unusedSize() > 0) {
                    const unusedSizeBar = barContainer.createChild('div', 'bar bar-unused-size');
                    unusedSizeBar.style.width = ((this.coverageInfo.unusedSize() / this.maxSize) * 100 || 0) + '%';
                    if (this.coverageInfo.type() & _CoverageModel_js__WEBPACK_IMPORTED_MODULE_7__.CoverageType.JavaScriptPerFunction) {
                        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Tooltip.Tooltip.install(unusedSizeBar, i18nString(UIStrings.sBytesSBelongToFunctionsThatHave, { PH1: this.coverageInfo.unusedSize(), PH2: unusedPercent }));
                    }
                    else if (this.coverageInfo.type() & _CoverageModel_js__WEBPACK_IMPORTED_MODULE_7__.CoverageType.JavaScript) {
                        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Tooltip.Tooltip.install(unusedSizeBar, i18nString(UIStrings.sBytesSBelongToBlocksOf, { PH1: this.coverageInfo.unusedSize(), PH2: unusedPercent }));
                    }
                }
                if (this.coverageInfo.usedSize() > 0) {
                    const usedSizeBar = barContainer.createChild('div', 'bar bar-used-size');
                    usedSizeBar.style.width = ((this.coverageInfo.usedSize() / this.maxSize) * 100 || 0) + '%';
                    if (this.coverageInfo.type() & _CoverageModel_js__WEBPACK_IMPORTED_MODULE_7__.CoverageType.JavaScriptPerFunction) {
                        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Tooltip.Tooltip.install(usedSizeBar, i18nString(UIStrings.sBytesSBelongToFunctionsThatHaveExecuted, { PH1: this.coverageInfo.usedSize(), PH2: usedPercent }));
                    }
                    else if (this.coverageInfo.type() & _CoverageModel_js__WEBPACK_IMPORTED_MODULE_7__.CoverageType.JavaScript) {
                        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Tooltip.Tooltip.install(usedSizeBar, i18nString(UIStrings.sBytesSBelongToBlocksOfJavascript, { PH1: this.coverageInfo.usedSize(), PH2: usedPercent }));
                    }
                }
                this.setCellAccessibleName(i18nString(UIStrings.sOfFileUnusedSOfFileUsed, { PH1: unusedPercent, PH2: usedPercent }), cell, columnId);
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
        const range = new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_2__.TextRange.SourceRange(matches.index, matches[0].length);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.highlightRangesWithStyleClass(element, [range], 'filter-highlight');
    }
    static sortFunctionForColumn(columnId) {
        const compareURL = (a, b) => a.url.localeCompare(b.url);
        switch (columnId) {
            case 'url':
                return compareURL;
            case 'type':
                return (a, b) => {
                    const typeA = coverageTypeToString(a.coverageInfo.type());
                    const typeB = coverageTypeToString(b.coverageInfo.type());
                    return typeA.localeCompare(typeB) || compareURL(a, b);
                };
            case 'size':
                return (a, b) => a.coverageInfo.size() - b.coverageInfo.size() || compareURL(a, b);
            case 'bars':
            case 'unused-size':
                return (a, b) => a.coverageInfo.unusedSize() - b.coverageInfo.unusedSize() || compareURL(a, b);
            default:
                console.assert(false, 'Unknown sort field: ' + columnId);
                return null;
        }
    }
}


/***/ })

}]);