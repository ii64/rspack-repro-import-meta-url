"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_profiler_HeapSnapshotDataGrids_js-panels_profiler_HeapSnapshotGridNodes_js"],{

/***/ "./panels/profiler/HeapSnapshotDataGrids.js":
/*!**************************************************!*\
  !*** ./panels/profiler/HeapSnapshotDataGrids.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AllocationDataGrid: () => (/* binding */ AllocationDataGrid),
/* harmony export */   HeapSnapshotConstructorsDataGrid: () => (/* binding */ HeapSnapshotConstructorsDataGrid),
/* harmony export */   HeapSnapshotContainmentDataGrid: () => (/* binding */ HeapSnapshotContainmentDataGrid),
/* harmony export */   HeapSnapshotDiffDataGrid: () => (/* binding */ HeapSnapshotDiffDataGrid),
/* harmony export */   HeapSnapshotRetainmentDataGrid: () => (/* binding */ HeapSnapshotRetainmentDataGrid),
/* harmony export */   HeapSnapshotRetainmentDataGridEvents: () => (/* binding */ HeapSnapshotRetainmentDataGridEvents),
/* harmony export */   HeapSnapshotSortableDataGrid: () => (/* binding */ HeapSnapshotSortableDataGrid),
/* harmony export */   HeapSnapshotSortableDataGridEvents: () => (/* binding */ HeapSnapshotSortableDataGridEvents),
/* harmony export */   HeapSnapshotViewportDataGrid: () => (/* binding */ HeapSnapshotViewportDataGrid)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/heap_snapshot_model/heap_snapshot_model.js */ "./models/heap_snapshot_model/heap_snapshot_model.js");
/* harmony import */ var _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/components/data_grid/data_grid.js */ "./ui/legacy/components/data_grid/data_grid.js");
/* harmony import */ var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/components/utils/utils.js */ "./ui/legacy/components/utils/utils.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _HeapSnapshotGridNodes_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./HeapSnapshotGridNodes.js */ "./panels/profiler/HeapSnapshotGridNodes.js");
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
     *@description Text in Heap Snapshot Data Grids of a profiler tool
     */
    distanceFromWindowObject: 'Distance from window object',
    /**
     *@description Text in Heap Snapshot Data Grids of a profiler tool
     */
    sizeOfTheObjectItselfInBytes: 'Size of the object itself in bytes',
    /**
     *@description Text in Heap Snapshot Data Grids of a profiler tool
     */
    sizeOfTheObjectPlusTheGraphIt: 'Size of the object plus the graph it retains in bytes',
    /**
     *@description Text in Heap Snapshot Data Grids of a profiler tool
     */
    object: 'Object',
    /**
     *@description Text in Heap Snapshot Data Grids of a profiler tool
     */
    distance: 'Distance',
    /**
     *@description Text in Heap Snapshot Data Grids of a profiler tool. Shallow size is the size of just this node, not including children/retained size.
     */
    shallowSize: 'Shallow Size',
    /**
     *@description Text in Heap Snapshot Data Grids of a profiler tool
     */
    retainedSize: 'Retained Size',
    /**
     * @description Title for a section in the Heap Snapshot view. This title is for a table which
     * shows retaining relationships between JavaScript objects. One object retains another if it holds
     * a reference to it, keeping it alive.
     */
    heapSnapshotRetainment: 'Heap Snapshot Retainment',
    /**
     *@description Text in Heap Snapshot Data Grids of a profiler tool
     */
    constructorString: 'Constructor',
    /**
     *@description Data grid name for Heap Snapshot Constructors data grids
     */
    heapSnapshotConstructors: 'Heap Snapshot Constructors',
    /**
     *@description Column header in a table displaying the diff between two Heap Snapshots. This
     * column is number of new objects in snapshot #2 compared to snapshot #1.
     */
    New: '# New',
    /**
     *@description Column header in a table displaying the diff between two Heap Snapshots. This
     * column is number of deleted objects in snapshot #2 compared to snapshot #1.
     */
    Deleted: '# Deleted',
    /**
     * @description Column header in a table displaying the diff between two Heap Snapshots. This
     * column is the difference (delta) between the # New and # Deleted objects in the snapshot.
     */
    Delta: '# Delta',
    /**
     *@description Text in Heap Snapshot Data Grids of a profiler tool
     */
    allocSize: 'Alloc. Size',
    /**
     *@description Text in Heap Snapshot Data Grids of a profiler tool
     */
    freedSize: 'Freed Size',
    /**
     * @description Title of a column in a table in the Heap Snapshot tool. 'Delta' here means
     * difference, so the whole string means 'difference in size'.
     */
    sizeDelta: 'Size Delta',
    /**
     *@description Data grid name for Heap Snapshot Diff data grids
     */
    heapSnapshotDiff: 'Heap Snapshot Diff',
    /**
     *@description Text in Heap Snapshot Data Grids of a profiler tool
     */
    liveCount: 'Live Count',
    /**
     *@description Text in Heap Snapshot Data Grids of a profiler tool
     */
    count: 'Count',
    /**
     *@description Text in Heap Snapshot Data Grids of a profiler tool
     */
    liveSize: 'Live Size',
    /**
     *@description Text for the size of something
     */
    size: 'Size',
    /**
     *@description Text for a programming function
     */
    function: 'Function',
    /**
     *@description Text in Heap Snapshot View of a profiler tool
     */
    allocation: 'Allocation',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/profiler/HeapSnapshotDataGrids.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
const adjacencyMap = new WeakMap();
class HeapSnapshotSortableDataGridBase extends _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_3__.DataGrid.DataGridImpl {
}
class HeapSnapshotSortableDataGrid extends _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.eventMixin(HeapSnapshotSortableDataGridBase) {
    snapshot;
    selectedNode;
    heapProfilerModelInternal;
    dataDisplayDelegateInternal;
    recursiveSortingDepth;
    populatedAndSorted;
    nameFilter;
    nodeFilterInternal;
    lastSortColumnId;
    lastSortAscending;
    constructor(heapProfilerModel, dataDisplayDelegate, dataGridParameters) {
        // TODO(allada) This entire class needs to be converted to use the templates in DataGridNode.
        super(dataGridParameters);
        this.snapshot = null;
        this.selectedNode = null;
        this.heapProfilerModelInternal = heapProfilerModel;
        this.dataDisplayDelegateInternal = dataDisplayDelegate;
        const tooltips = [
            ['distance', i18nString(UIStrings.distanceFromWindowObject)],
            ['shallowSize', i18nString(UIStrings.sizeOfTheObjectItselfInBytes)],
            ['retainedSize', i18nString(UIStrings.sizeOfTheObjectPlusTheGraphIt)],
        ];
        for (const info of tooltips) {
            const headerCell = this.headerTableHeader(info[0]);
            if (headerCell) {
                headerCell.setAttribute('title', info[1]);
            }
        }
        this.recursiveSortingDepth = 0;
        this.populatedAndSorted = false;
        this.nameFilter = null;
        this.nodeFilterInternal = new _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_2__.HeapSnapshotModel.NodeFilter();
        this.addEventListener(HeapSnapshotSortableDataGridEvents.SortingComplete, this.sortingComplete, this);
        this.addEventListener("SortingChanged" /* DataGrid.DataGrid.Events.SortingChanged */, this.sortingChanged, this);
        this.setRowContextMenuCallback(this.populateContextMenu.bind(this));
    }
    async setDataSource(_snapshot, _nodeIndex) {
    }
    isFilteredOut(node) {
        const nameFilterValue = this.nameFilter ? this.nameFilter.value().toLowerCase() : '';
        if (nameFilterValue && (node instanceof _HeapSnapshotGridNodes_js__WEBPACK_IMPORTED_MODULE_6__.HeapSnapshotDiffNode || node instanceof _HeapSnapshotGridNodes_js__WEBPACK_IMPORTED_MODULE_6__.HeapSnapshotConstructorNode) &&
            node.filteredOut(nameFilterValue)) {
            return true;
        }
        return false;
    }
    heapProfilerModel() {
        return this.heapProfilerModelInternal;
    }
    dataDisplayDelegate() {
        return this.dataDisplayDelegateInternal;
    }
    nodeFilter() {
        return this.nodeFilterInternal;
    }
    setNameFilter(nameFilter) {
        this.nameFilter = nameFilter;
    }
    defaultPopulateCount() {
        return 100;
    }
    disposeAllNodes() {
        const children = this.topLevelNodes();
        for (let i = 0, l = children.length; i < l; ++i) {
            children[i].dispose();
        }
    }
    wasShown() {
        if (this.nameFilter) {
            this.nameFilter.addEventListener("TextChanged" /* UI.Toolbar.ToolbarInput.Event.TextChanged */, this.onNameFilterChanged, this);
            this.updateVisibleNodes(true);
        }
        if (this.populatedAndSorted) {
            this.dispatchEventToListeners(HeapSnapshotSortableDataGridEvents.ContentShown, this);
        }
    }
    sortingComplete() {
        this.removeEventListener(HeapSnapshotSortableDataGridEvents.SortingComplete, this.sortingComplete, this);
        this.populatedAndSorted = true;
        this.dispatchEventToListeners(HeapSnapshotSortableDataGridEvents.ContentShown, this);
    }
    willHide() {
        if (this.nameFilter) {
            this.nameFilter.removeEventListener("TextChanged" /* UI.Toolbar.ToolbarInput.Event.TextChanged */, this.onNameFilterChanged, this);
        }
    }
    populateContextMenu(contextMenu, gridNode) {
        const node = gridNode;
        node.populateContextMenu(contextMenu, this.dataDisplayDelegateInternal, this.heapProfilerModel());
        if (node instanceof _HeapSnapshotGridNodes_js__WEBPACK_IMPORTED_MODULE_6__.HeapSnapshotGenericObjectNode && node.linkElement) {
            contextMenu.appendApplicableItems(node.linkElement);
        }
    }
    resetSortingCache() {
        delete this.lastSortColumnId;
        delete this.lastSortAscending;
    }
    topLevelNodes() {
        return this.rootNode().children;
    }
    revealObjectByHeapSnapshotId(_heapSnapshotObjectId) {
        return Promise.resolve(null);
    }
    resetNameFilter() {
        if (this.nameFilter) {
            this.nameFilter.setValue('');
        }
    }
    onNameFilterChanged() {
        this.updateVisibleNodes(true);
        this.deselectFilteredNodes();
    }
    deselectFilteredNodes() {
        let currentNode = this.selectedNode;
        while (currentNode) {
            if (this.selectedNode && this.isFilteredOut(currentNode)) {
                this.selectedNode.deselect();
                this.selectedNode = null;
                return;
            }
            currentNode = currentNode.parent;
        }
    }
    sortFields(_sortColumnId, _ascending) {
        throw new Error('Not implemented');
    }
    sortingChanged() {
        const sortAscending = this.isSortOrderAscending();
        const sortColumnId = this.sortColumnId();
        if (this.lastSortColumnId === sortColumnId && this.lastSortAscending === sortAscending) {
            return;
        }
        this.lastSortColumnId = sortColumnId;
        this.lastSortAscending = sortAscending;
        const sortFields = this.sortFields(sortColumnId || '', sortAscending);
        function sortByTwoFields(nodeA, nodeB) {
            // @ts-ignore
            let field1 = nodeA[sortFields.fieldName1];
            // @ts-ignore
            let field2 = nodeB[sortFields.fieldName1];
            let result = field1 < field2 ? -1 : (field1 > field2 ? 1 : 0);
            if (!sortFields.ascending1) {
                result = -result;
            }
            if (result !== 0) {
                return result;
            }
            // @ts-ignore
            field1 = nodeA[sortFields.fieldName2];
            // @ts-ignore
            field2 = nodeB[sortFields.fieldName2];
            result = field1 < field2 ? -1 : (field1 > field2 ? 1 : 0);
            if (!sortFields.ascending2) {
                result = -result;
            }
            return result;
        }
        this.performSorting(sortByTwoFields);
    }
    performSorting(sortFunction) {
        this.recursiveSortingEnter();
        const children = this.allChildren(this.rootNode());
        this.rootNode().removeChildren();
        children.sort(sortFunction);
        for (let i = 0, l = children.length; i < l; ++i) {
            const child = children[i];
            this.appendChildAfterSorting(child);
            if (child.expanded) {
                void child.sort();
            }
        }
        this.recursiveSortingLeave();
    }
    appendChildAfterSorting(child) {
        const revealed = child.revealed;
        this.rootNode().appendChild(child);
        child.revealed = revealed;
    }
    recursiveSortingEnter() {
        ++this.recursiveSortingDepth;
    }
    recursiveSortingLeave() {
        if (!this.recursiveSortingDepth) {
            return;
        }
        if (--this.recursiveSortingDepth) {
            return;
        }
        this.updateVisibleNodes(true);
        this.dispatchEventToListeners(HeapSnapshotSortableDataGridEvents.SortingComplete);
    }
    updateVisibleNodes(_force) {
    }
    allChildren(parent) {
        return parent.children;
    }
    insertChild(parent, node, index) {
        parent.insertChild(node, index);
    }
    removeChildByIndex(parent, index) {
        parent.removeChild(parent.children[index]);
    }
    removeAllChildren(parent) {
        parent.removeChildren();
    }
    async dataSourceChanged() {
        throw new Error('Not implemented');
    }
}
var HeapSnapshotSortableDataGridEvents;
(function (HeapSnapshotSortableDataGridEvents) {
    HeapSnapshotSortableDataGridEvents["ContentShown"] = "ContentShown";
    HeapSnapshotSortableDataGridEvents["SortingComplete"] = "SortingComplete";
    HeapSnapshotSortableDataGridEvents["ExpandRetainersComplete"] = "ExpandRetainersComplete";
})(HeapSnapshotSortableDataGridEvents || (HeapSnapshotSortableDataGridEvents = {}));
class HeapSnapshotViewportDataGrid extends HeapSnapshotSortableDataGrid {
    topPaddingHeight;
    bottomPaddingHeight;
    selectedNode;
    scrollToResolveCallback;
    constructor(heapProfilerModel, dataDisplayDelegate, dataGridParameters) {
        super(heapProfilerModel, dataDisplayDelegate, dataGridParameters);
        this.scrollContainer.addEventListener('scroll', this.onScroll.bind(this), true);
        this.topPaddingHeight = 0;
        this.bottomPaddingHeight = 0;
        this.selectedNode = null;
    }
    topLevelNodes() {
        return this.allChildren(this.rootNode());
    }
    appendChildAfterSorting(_child) {
        // Do nothing here, it will be added in updateVisibleNodes.
    }
    updateVisibleNodes(force) {
        // Guard zone is used to ensure there are always some extra items
        // above and below the viewport to support keyboard navigation.
        const guardZoneHeight = 40;
        const scrollHeight = this.scrollContainer.scrollHeight;
        let scrollTop = this.scrollContainer.scrollTop;
        let scrollBottom = scrollHeight - scrollTop - this.scrollContainer.offsetHeight;
        scrollTop = Math.max(0, scrollTop - guardZoneHeight);
        scrollBottom = Math.max(0, scrollBottom - guardZoneHeight);
        let viewPortHeight = scrollHeight - scrollTop - scrollBottom;
        // Do nothing if populated nodes still fit the viewport.
        if (!force && scrollTop >= this.topPaddingHeight && scrollBottom >= this.bottomPaddingHeight) {
            return;
        }
        const hysteresisHeight = 500;
        scrollTop -= hysteresisHeight;
        viewPortHeight += 2 * hysteresisHeight;
        const selectedNode = this.selectedNode;
        this.rootNode().removeChildren();
        this.topPaddingHeight = 0;
        this.bottomPaddingHeight = 0;
        this.addVisibleNodes(this.rootNode(), scrollTop, scrollTop + viewPortHeight);
        this.setVerticalPadding(this.topPaddingHeight, this.bottomPaddingHeight);
        if (selectedNode) {
            // Keep selection even if the node is not in the current viewport.
            if (selectedNode.parent) {
                selectedNode.select(true);
            }
            else {
                this.selectedNode = selectedNode;
            }
        }
    }
    addVisibleNodes(parentNode, topBound, bottomBound) {
        if (!parentNode.expanded) {
            return 0;
        }
        const children = this.allChildren(parentNode);
        let topPadding = 0;
        // Iterate over invisible nodes beyond the upper bound of viewport.
        // Do not insert them into the grid, but count their total height.
        let i = 0;
        for (; i < children.length; ++i) {
            const child = children[i];
            if (this.isFilteredOut(child)) {
                continue;
            }
            const newTop = topPadding + this.nodeHeight(child);
            if (newTop > topBound) {
                break;
            }
            topPadding = newTop;
        }
        // Put visible nodes into the data grid.
        let position = topPadding;
        for (; i < children.length && position < bottomBound; ++i) {
            const child = children[i];
            if (this.isFilteredOut(child)) {
                continue;
            }
            const hasChildren = child.hasChildren();
            child.removeChildren();
            child.setHasChildren(hasChildren);
            parentNode.appendChild(child);
            position += child.nodeSelfHeight();
            position += this.addVisibleNodes(child, topBound - position, bottomBound - position);
        }
        // Count the invisible nodes beyond the bottom bound of the viewport.
        let bottomPadding = 0;
        for (; i < children.length; ++i) {
            const child = children[i];
            if (this.isFilteredOut(child)) {
                continue;
            }
            bottomPadding += this.nodeHeight(child);
        }
        this.topPaddingHeight += topPadding;
        this.bottomPaddingHeight += bottomPadding;
        return position + bottomPadding;
    }
    nodeHeight(node) {
        let result = node.nodeSelfHeight();
        if (!node.expanded) {
            return result;
        }
        const children = this.allChildren(node);
        for (let i = 0; i < children.length; i++) {
            result += this.nodeHeight(children[i]);
        }
        return result;
    }
    revealTreeNode(pathToReveal) {
        const height = this.calculateOffset(pathToReveal);
        const node = pathToReveal[pathToReveal.length - 1];
        const scrollTop = this.scrollContainer.scrollTop;
        const scrollBottom = scrollTop + this.scrollContainer.offsetHeight;
        if (height >= scrollTop && height < scrollBottom) {
            return Promise.resolve(node);
        }
        const scrollGap = 40;
        this.scrollContainer.scrollTop = Math.max(0, height - scrollGap);
        return new Promise(resolve => {
            console.assert(!this.scrollToResolveCallback);
            this.scrollToResolveCallback = resolve.bind(null, node);
            // Still resolve the promise if it does not scroll for some reason.
            this.scrollContainer.window().requestAnimationFrame(() => {
                if (!this.scrollToResolveCallback) {
                    return;
                }
                this.scrollToResolveCallback();
                this.scrollToResolveCallback = null;
            });
        });
    }
    calculateOffset(pathToReveal) {
        let parentNode = this.rootNode();
        let height = 0;
        if (pathToReveal.length === 0) {
            return 0;
        }
        for (let i = 0; i < pathToReveal.length; ++i) {
            const node = pathToReveal[i];
            const children = this.allChildren(parentNode);
            for (let j = 0; j < children.length; ++j) {
                const child = children[j];
                if (node === child) {
                    height += node.nodeSelfHeight();
                    break;
                }
                height += this.nodeHeight(child);
            }
            parentNode = node;
        }
        return height - pathToReveal[pathToReveal.length - 1].nodeSelfHeight();
    }
    allChildren(parent) {
        const children = adjacencyMap.get(parent) || [];
        if (!adjacencyMap.has(parent)) {
            adjacencyMap.set(parent, children);
        }
        return children;
    }
    appendNode(parent, node) {
        this.allChildren(parent).push(node);
    }
    insertChild(parent, node, index) {
        this.allChildren(parent).splice(index, 0, node);
    }
    removeChildByIndex(parent, index) {
        this.allChildren(parent).splice(index, 1);
    }
    removeAllChildren(parent) {
        adjacencyMap.delete(parent);
    }
    removeTopLevelNodes() {
        this.disposeAllNodes();
        this.rootNode().removeChildren();
        this.removeAllChildren(this.rootNode());
    }
    isScrolledIntoView(element) {
        const viewportTop = this.scrollContainer.scrollTop;
        const viewportBottom = viewportTop + this.scrollContainer.clientHeight;
        const elemTop = element.offsetTop;
        const elemBottom = elemTop + element.offsetHeight;
        return elemBottom <= viewportBottom && elemTop >= viewportTop;
    }
    onResize() {
        super.onResize();
        this.updateVisibleNodes(false);
    }
    onScroll(_event) {
        this.updateVisibleNodes(false);
        if (this.scrollToResolveCallback) {
            this.scrollToResolveCallback();
            this.scrollToResolveCallback = null;
        }
    }
}
class HeapSnapshotContainmentDataGrid extends HeapSnapshotSortableDataGrid {
    constructor(heapProfilerModel, dataDisplayDelegate, displayName, columns) {
        columns =
            columns || [
                { id: 'object', title: i18nString(UIStrings.object), disclosure: true, sortable: true },
                { id: 'distance', title: i18nString(UIStrings.distance), width: '70px', sortable: true, fixedWidth: true },
                {
                    id: 'shallowSize',
                    title: i18nString(UIStrings.shallowSize),
                    width: '110px',
                    sortable: true,
                    fixedWidth: true,
                },
                {
                    id: 'retainedSize',
                    title: i18nString(UIStrings.retainedSize),
                    width: '110px',
                    sortable: true,
                    fixedWidth: true,
                    sort: _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_3__.DataGrid.Order.Descending,
                },
            ];
        const dataGridParameters = { displayName, columns };
        super(heapProfilerModel, dataDisplayDelegate, dataGridParameters);
    }
    async setDataSource(snapshot, nodeIndex, nodeId) {
        this.snapshot = snapshot;
        const node = new _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_2__.HeapSnapshotModel.Node(nodeId ?? -1, 'root', 0, nodeIndex || snapshot.rootNodeIndex, 0, 0, '');
        this.setRootNode(this.createRootNode(snapshot, node));
        void this.rootNode().sort();
    }
    createRootNode(snapshot, node) {
        const fakeEdge = new _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_2__.HeapSnapshotModel.Edge('', node, '', -1);
        return new _HeapSnapshotGridNodes_js__WEBPACK_IMPORTED_MODULE_6__.HeapSnapshotObjectNode(this, snapshot, fakeEdge, null);
    }
    sortingChanged() {
        const rootNode = this.rootNode();
        if (rootNode.hasChildren()) {
            void rootNode.sort();
        }
    }
}
class HeapSnapshotRetainmentDataGrid extends HeapSnapshotContainmentDataGrid {
    resetRetainersButton;
    constructor(heapProfilerModel, dataDisplayDelegate) {
        const columns = [
            { id: 'object', title: i18nString(UIStrings.object), disclosure: true, sortable: true },
            {
                id: 'distance',
                title: i18nString(UIStrings.distance),
                width: '70px',
                sortable: true,
                fixedWidth: true,
                sort: _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_3__.DataGrid.Order.Ascending,
            },
            { id: 'shallowSize', title: i18nString(UIStrings.shallowSize), width: '110px', sortable: true, fixedWidth: true },
            { id: 'retainedSize', title: i18nString(UIStrings.retainedSize), width: '110px', sortable: true, fixedWidth: true },
        ];
        super(heapProfilerModel, dataDisplayDelegate, i18nString(UIStrings.heapSnapshotRetainment), columns);
    }
    createRootNode(snapshot, node) {
        const fakeEdge = new _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_2__.HeapSnapshotModel.Edge('', node, '', -1);
        return new _HeapSnapshotGridNodes_js__WEBPACK_IMPORTED_MODULE_6__.HeapSnapshotRetainingObjectNode(this, snapshot, fakeEdge, null);
    }
    sortFields(sortColumn, sortAscending) {
        switch (sortColumn) {
            case 'object':
                return new _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_2__.HeapSnapshotModel.ComparatorConfig('name', sortAscending, 'count', false);
            case 'count':
                return new _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_2__.HeapSnapshotModel.ComparatorConfig('count', sortAscending, 'name', true);
            case 'shallowSize':
                return new _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_2__.HeapSnapshotModel.ComparatorConfig('shallowSize', sortAscending, 'name', true);
            case 'retainedSize':
                return new _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_2__.HeapSnapshotModel.ComparatorConfig('retainedSize', sortAscending, 'name', true);
            case 'distance':
                return new _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_2__.HeapSnapshotModel.ComparatorConfig('distance', sortAscending, 'name', true);
            default:
                throw new Error(`Unknown column ${sortColumn}`);
        }
    }
    reset() {
        this.rootNode().removeChildren();
        this.resetSortingCache();
    }
    updateResetButtonVisibility() {
        void this.snapshot?.areNodesIgnoredInRetainersView().then(value => {
            this.resetRetainersButton?.setVisible(value);
        });
    }
    async setDataSource(snapshot, nodeIndex, nodeId) {
        await super.setDataSource(snapshot, nodeIndex, nodeId);
        this.rootNode().expand();
        this.updateResetButtonVisibility();
    }
    async dataSourceChanged() {
        this.reset();
        await this.rootNode().sort();
        this.rootNode().expand();
        this.updateResetButtonVisibility();
    }
}
// TODO(crbug.com/1228674): Remove this enum, it is only used in web tests.
var HeapSnapshotRetainmentDataGridEvents;
(function (HeapSnapshotRetainmentDataGridEvents) {
    HeapSnapshotRetainmentDataGridEvents["ExpandRetainersComplete"] = "ExpandRetainersComplete";
})(HeapSnapshotRetainmentDataGridEvents || (HeapSnapshotRetainmentDataGridEvents = {}));
class HeapSnapshotConstructorsDataGrid extends HeapSnapshotViewportDataGrid {
    profileIndex;
    objectIdToSelect;
    nextRequestedFilter;
    lastFilter;
    filterInProgress;
    constructor(heapProfilerModel, dataDisplayDelegate) {
        const columns = [
            { id: 'object', title: i18nString(UIStrings.constructorString), disclosure: true, sortable: true },
            { id: 'distance', title: i18nString(UIStrings.distance), width: '70px', sortable: true, fixedWidth: true },
            { id: 'shallowSize', title: i18nString(UIStrings.shallowSize), width: '110px', sortable: true, fixedWidth: true },
            {
                id: 'retainedSize',
                title: i18nString(UIStrings.retainedSize),
                width: '110px',
                sort: _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_3__.DataGrid.Order.Descending,
                sortable: true,
                fixedWidth: true,
            },
        ];
        super(heapProfilerModel, dataDisplayDelegate, { displayName: i18nString(UIStrings.heapSnapshotConstructors).toString(), columns });
        // clang-format on
        this.profileIndex = -1;
        this.objectIdToSelect = null;
        this.nextRequestedFilter = null;
    }
    sortFields(sortColumn, sortAscending) {
        switch (sortColumn) {
            case 'object':
                return new _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_2__.HeapSnapshotModel.ComparatorConfig('name', sortAscending, 'retainedSize', false);
            case 'distance':
                return new _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_2__.HeapSnapshotModel.ComparatorConfig('distance', sortAscending, 'retainedSize', false);
            case 'shallowSize':
                return new _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_2__.HeapSnapshotModel.ComparatorConfig('shallowSize', sortAscending, 'name', true);
            case 'retainedSize':
                return new _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_2__.HeapSnapshotModel.ComparatorConfig('retainedSize', sortAscending, 'name', true);
            default:
                throw new Error(`Unknown column ${sortColumn}`);
        }
    }
    async revealObjectByHeapSnapshotId(id) {
        if (!this.snapshot) {
            this.objectIdToSelect = id;
            return null;
        }
        const className = await this.snapshot.nodeClassName(parseInt(id, 10));
        if (!className) {
            return null;
        }
        const parent = this.topLevelNodes().find(classNode => classNode.name === className);
        if (!parent) {
            return null;
        }
        const nodes = await parent.populateNodeBySnapshotObjectId(parseInt(id, 10));
        return nodes.length ? this.revealTreeNode(nodes) : null;
    }
    clear() {
        this.nextRequestedFilter = null;
        this.lastFilter = null;
        this.removeTopLevelNodes();
    }
    async setDataSource(snapshot, _nodeIndex) {
        this.snapshot = snapshot;
        if (this.profileIndex === -1) {
            void this.populateChildren();
        }
        if (this.objectIdToSelect) {
            void this.revealObjectByHeapSnapshotId(this.objectIdToSelect);
            this.objectIdToSelect = null;
        }
    }
    setSelectionRange(minNodeId, maxNodeId) {
        this.nodeFilterInternal = new _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_2__.HeapSnapshotModel.NodeFilter(minNodeId, maxNodeId);
        void this.populateChildren(this.nodeFilterInternal);
    }
    setAllocationNodeId(allocationNodeId) {
        this.nodeFilterInternal = new _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_2__.HeapSnapshotModel.NodeFilter();
        this.nodeFilterInternal.allocationNodeId = allocationNodeId;
        void this.populateChildren(this.nodeFilterInternal);
    }
    aggregatesReceived(nodeFilter, aggregates) {
        this.filterInProgress = null;
        if (this.nextRequestedFilter && this.snapshot) {
            void this.snapshot.aggregatesWithFilter(this.nextRequestedFilter)
                .then(this.aggregatesReceived.bind(this, this.nextRequestedFilter));
            this.filterInProgress = this.nextRequestedFilter;
            this.nextRequestedFilter = null;
        }
        this.removeTopLevelNodes();
        this.resetSortingCache();
        for (const constructor in aggregates) {
            this.appendNode(this.rootNode(), new _HeapSnapshotGridNodes_js__WEBPACK_IMPORTED_MODULE_6__.HeapSnapshotConstructorNode(this, constructor, aggregates[constructor], nodeFilter));
        }
        this.sortingChanged();
        this.lastFilter = nodeFilter;
    }
    async populateChildren(maybeNodeFilter) {
        const nodeFilter = maybeNodeFilter || new _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_2__.HeapSnapshotModel.NodeFilter();
        if (this.filterInProgress) {
            this.nextRequestedFilter = this.filterInProgress.equals(nodeFilter) ? null : nodeFilter;
            return;
        }
        if (this.lastFilter && this.lastFilter.equals(nodeFilter)) {
            return;
        }
        this.filterInProgress = nodeFilter;
        if (this.snapshot) {
            const aggregates = await this.snapshot.aggregatesWithFilter(nodeFilter);
            this.aggregatesReceived(nodeFilter, aggregates);
        }
    }
    filterSelectIndexChanged(profiles, profileIndex, filterName) {
        this.profileIndex = profileIndex;
        this.nodeFilterInternal = undefined;
        if (profileIndex !== -1) {
            const minNodeId = profileIndex > 0 ? profiles[profileIndex - 1].maxJSObjectId : 0;
            const maxNodeId = profiles[profileIndex].maxJSObjectId;
            this.nodeFilterInternal = new _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_2__.HeapSnapshotModel.NodeFilter(minNodeId, maxNodeId);
        }
        else if (filterName !== undefined) {
            this.nodeFilterInternal = new _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_2__.HeapSnapshotModel.NodeFilter();
            this.nodeFilterInternal.filterName = filterName;
        }
        void this.populateChildren(this.nodeFilterInternal);
    }
}
class HeapSnapshotDiffDataGrid extends HeapSnapshotViewportDataGrid {
    baseSnapshot;
    constructor(heapProfilerModel, dataDisplayDelegate) {
        const columns = [
            { id: 'object', title: i18nString(UIStrings.constructorString), disclosure: true, sortable: true },
            { id: 'addedCount', title: i18nString(UIStrings.New), width: '75px', sortable: true, fixedWidth: true },
            { id: 'removedCount', title: i18nString(UIStrings.Deleted), width: '75px', sortable: true, fixedWidth: true },
            { id: 'countDelta', title: i18nString(UIStrings.Delta), width: '65px', sortable: true, fixedWidth: true },
            {
                id: 'addedSize',
                title: i18nString(UIStrings.allocSize),
                width: '75px',
                sortable: true,
                fixedWidth: true,
                sort: _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_3__.DataGrid.Order.Descending,
            },
            { id: 'removedSize', title: i18nString(UIStrings.freedSize), width: '75px', sortable: true, fixedWidth: true },
            { id: 'sizeDelta', title: i18nString(UIStrings.sizeDelta), width: '75px', sortable: true, fixedWidth: true },
        ];
        super(heapProfilerModel, dataDisplayDelegate, { displayName: i18nString(UIStrings.heapSnapshotDiff).toString(), columns });
    }
    defaultPopulateCount() {
        return 50;
    }
    sortFields(sortColumn, sortAscending) {
        switch (sortColumn) {
            case 'object':
                return new _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_2__.HeapSnapshotModel.ComparatorConfig('name', sortAscending, 'count', false);
            case 'addedCount':
                return new _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_2__.HeapSnapshotModel.ComparatorConfig('addedCount', sortAscending, 'name', true);
            case 'removedCount':
                return new _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_2__.HeapSnapshotModel.ComparatorConfig('removedCount', sortAscending, 'name', true);
            case 'countDelta':
                return new _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_2__.HeapSnapshotModel.ComparatorConfig('countDelta', sortAscending, 'name', true);
            case 'addedSize':
                return new _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_2__.HeapSnapshotModel.ComparatorConfig('addedSize', sortAscending, 'name', true);
            case 'removedSize':
                return new _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_2__.HeapSnapshotModel.ComparatorConfig('removedSize', sortAscending, 'name', true);
            case 'sizeDelta':
                return new _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_2__.HeapSnapshotModel.ComparatorConfig('sizeDelta', sortAscending, 'name', true);
            default:
                throw new Error(`Unknown column ${sortColumn}`);
        }
    }
    async setDataSource(snapshot, _nodeIndex) {
        this.snapshot = snapshot;
    }
    setBaseDataSource(baseSnapshot) {
        this.baseSnapshot = baseSnapshot;
        this.removeTopLevelNodes();
        this.resetSortingCache();
        if (this.baseSnapshot === this.snapshot) {
            this.dispatchEventToListeners(HeapSnapshotSortableDataGridEvents.SortingComplete);
            return;
        }
        void this.populateChildren();
    }
    async populateChildren() {
        if (this.snapshot === null || this.baseSnapshot === undefined || this.baseSnapshot.uid === undefined) {
            throw new Error('Data sources have not been set correctly');
        }
        // Two snapshots live in different workers isolated from each other. That is why
        // we first need to collect information about the nodes in the first snapshot and
        // then pass it to the second snapshot to calclulate the diff.
        const aggregatesForDiff = await this.baseSnapshot.aggregatesForDiff();
        const diffByClassName = await this.snapshot.calculateSnapshotDiff(this.baseSnapshot.uid, aggregatesForDiff);
        for (const className in diffByClassName) {
            const diff = diffByClassName[className];
            this.appendNode(this.rootNode(), new _HeapSnapshotGridNodes_js__WEBPACK_IMPORTED_MODULE_6__.HeapSnapshotDiffNode(this, className, diff));
        }
        this.sortingChanged();
    }
}
class AllocationDataGrid extends HeapSnapshotViewportDataGrid {
    linkifierInternal;
    topNodes;
    constructor(heapProfilerModel, dataDisplayDelegate) {
        const columns = [
            { id: 'liveCount', title: i18nString(UIStrings.liveCount), width: '75px', sortable: true, fixedWidth: true },
            { id: 'count', title: i18nString(UIStrings.count), width: '65px', sortable: true, fixedWidth: true },
            { id: 'liveSize', title: i18nString(UIStrings.liveSize), width: '75px', sortable: true, fixedWidth: true },
            {
                id: 'size',
                title: i18nString(UIStrings.size),
                width: '75px',
                sortable: true,
                fixedWidth: true,
                sort: _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_3__.DataGrid.Order.Descending,
            },
            { id: 'name', title: i18nString(UIStrings.function), disclosure: true, sortable: true },
        ];
        super(heapProfilerModel, dataDisplayDelegate, { displayName: i18nString(UIStrings.allocation).toString(), columns });
        // clang-format on
        this.linkifierInternal = new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__.Linkifier.Linkifier();
    }
    get linkifier() {
        return this.linkifierInternal;
    }
    dispose() {
        this.linkifierInternal.reset();
    }
    async setDataSource(snapshot, _nodeIndex) {
        this.snapshot = snapshot;
        this.topNodes = await this.snapshot.allocationTracesTops();
        this.populateChildren();
    }
    populateChildren() {
        this.removeTopLevelNodes();
        const root = this.rootNode();
        const tops = this.topNodes || [];
        for (const top of tops) {
            this.appendNode(root, new _HeapSnapshotGridNodes_js__WEBPACK_IMPORTED_MODULE_6__.AllocationGridNode(this, top));
        }
        this.updateVisibleNodes(true);
    }
    sortingChanged() {
        if (this.topNodes !== undefined) {
            this.topNodes.sort(this.createComparator());
            this.rootNode().removeChildren();
            this.populateChildren();
        }
    }
    createComparator() {
        const fieldName = this.sortColumnId();
        const compareResult = (this.sortOrder() === _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_3__.DataGrid.Order.Ascending) ? +1 : -1;
        function compare(a, b) {
            // @ts-ignore
            if (a[fieldName] > b[fieldName]) {
                return compareResult;
            }
            // @ts-ignore
            if (a[fieldName] < b[fieldName]) {
                return -compareResult;
            }
            return 0;
        }
        return compare;
    }
}
//# sourceMappingURL=HeapSnapshotDataGrids.js.map

/***/ }),

/***/ "./panels/profiler/HeapSnapshotGridNodes.js":
/*!**************************************************!*\
  !*** ./panels/profiler/HeapSnapshotGridNodes.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AllocationGridNode: () => (/* binding */ AllocationGridNode),
/* harmony export */   HeapSnapshotConstructorNode: () => (/* binding */ HeapSnapshotConstructorNode),
/* harmony export */   HeapSnapshotDiffNode: () => (/* binding */ HeapSnapshotDiffNode),
/* harmony export */   HeapSnapshotDiffNodesProvider: () => (/* binding */ HeapSnapshotDiffNodesProvider),
/* harmony export */   HeapSnapshotGenericObjectNode: () => (/* binding */ HeapSnapshotGenericObjectNode),
/* harmony export */   HeapSnapshotGridNode: () => (/* binding */ HeapSnapshotGridNode),
/* harmony export */   HeapSnapshotInstanceNode: () => (/* binding */ HeapSnapshotInstanceNode),
/* harmony export */   HeapSnapshotObjectNode: () => (/* binding */ HeapSnapshotObjectNode),
/* harmony export */   HeapSnapshotRetainingObjectNode: () => (/* binding */ HeapSnapshotRetainingObjectNode)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/heap_snapshot_model/heap_snapshot_model.js */ "./models/heap_snapshot_model/heap_snapshot_model.js");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */ var _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/legacy/components/data_grid/data_grid.js */ "./ui/legacy/components/data_grid/data_grid.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _HeapSnapshotDataGrids_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./HeapSnapshotDataGrids.js */ "./panels/profiler/HeapSnapshotDataGrids.js");
/*
 * Copyright (C) 2011 Google Inc. All rights reserved.
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
     *@description Generic text with two placeholders separated by a comma
     *@example {1 613 680} PH1
     *@example {44 %} PH2
     */
    genericStringsTwoPlaceholders: '{PH1}, {PH2}',
    /**
     *@description Text in Heap Snapshot Grid Nodes of a profiler tool
     */
    internalArray: '(internal array)[]',
    /**
     *@description Text in Heap Snapshot Grid Nodes of a profiler tool
     */
    userObjectReachableFromWindow: 'User object reachable from window',
    /**
     *@description Text in Heap Snapshot Grid Nodes of a profiler tool
     */
    detachedFromDomTree: 'Detached from DOM tree',
    /**
     *@description Text in Heap Snapshot Grid Nodes of a profiler tool
     */
    previewIsNotAvailable: 'Preview is not available',
    /**
     *@description A context menu item in the Heap Profiler Panel of a profiler tool
     */
    revealInSummaryView: 'Reveal in Summary view',
    /**
     *@description Text for the summary view
     */
    summary: 'Summary',
    /**
     *@description A context menu item in the Heap Profiler Panel of a profiler tool
     *@example {SomeClassConstructor} PH1
     *@example {12345} PH2
     */
    revealObjectSWithIdSInSummary: 'Reveal object \'\'{PH1}\'\' with id @{PH2} in Summary view',
    /**
     *@description Text to store an HTML element or JavaScript variable or expression result as a global variable
     */
    storeAsGlobalVariable: 'Store as global variable',
    /**
     *@description Text to ignore an object shown in the Retainers pane
     */
    ignoreThisRetainer: 'Ignore this retainer',
    /**
     *@description Text to undo the "Ignore this retainer" action
     */
    stopIgnoringThisRetainer: 'Stop ignoring this retainer',
    /**
     *@description Text indicating that a node has been ignored with the "Ignore this retainer" action
     */
    ignored: 'ignored',
    /**
     *@description Text in Heap Snapshot Grid Nodes of a profiler tool that indicates an element contained in another
     * element.
     */
    inElement: 'in',
    /**
     *@description A short summary of the text at https://developer.chrome.com/docs/devtools/memory-problems/heap-snapshots#compiled-code
     */
    compiledCodeSummary: 'Internal data which V8 uses to run functions defined by JavaScript or WebAssembly.',
    /**
     *@description A short summary of the text at https://developer.chrome.com/docs/devtools/memory-problems/heap-snapshots#concatenated-string
     */
    concatenatedStringSummary: 'A string which represents the contents of two other strings joined together.',
    /**
     *@description A short summary of the text at https://developer.chrome.com/docs/devtools/memory-problems/heap-snapshots#system-context
     */
    contextSummary: 'An internal object containing variables from a JavaScript scope which may be needed by a function created within that scope.',
    /**
     *@description A short description of the data type internal type DescriptorArray, which is described more fully at https://v8.dev/blog/fast-properties
     */
    descriptorArraySummary: 'A list of the property names used by a JavaScript Object.',
    /**
     *@description A short summary of the text at https://developer.chrome.com/docs/devtools/memory-problems/heap-snapshots#array
     */
    internalArraySummary: 'An internal array-like data structure (not a JavaScript Array).',
    /**
     *@description A short summary of the text at https://developer.chrome.com/docs/devtools/memory-problems/heap-snapshots#internal-node
     */
    internalNodeSummary: 'An object allocated by a component other than V8, such as C++ objects defined by Blink.',
    /**
     *@description A short description of the data type "system / Map" described at https://developer.chrome.com/docs/devtools/memory-problems/heap-snapshots#object-shape
     */
    mapSummary: 'An internal object representing the shape of a JavaScript Object (not a JavaScript Map).',
    /**
     *@description A short summary of the "(object elements)[]" described at https://developer.chrome.com/docs/devtools/memory-problems/heap-snapshots#array
     */
    objectElementsSummary: 'An internal object which stores the indexed properties in a JavaScript Object, such as the contents of an Array.',
    /**
     *@description A short summary of the "(object properties)[]" described at https://developer.chrome.com/docs/devtools/memory-problems/heap-snapshots#array
     */
    objectPropertiesSummary: 'An internal object which stores the named properties in a JavaScript Object.',
    /**
     *@description A short summary of the text at https://developer.chrome.com/docs/devtools/memory-problems/heap-snapshots#sliced-string
     */
    slicedStringSummary: 'A string which represents some of the characters from another string.',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/profiler/HeapSnapshotGridNodes.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
class HeapSnapshotGridNodeBase extends _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_6__.DataGrid.DataGridNode {
}
class HeapSnapshotGridNode extends _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.eventMixin(HeapSnapshotGridNodeBase) {
    dataGridInternal;
    instanceCount;
    savedChildren;
    retrievedChildrenRanges;
    providerObject;
    reachableFromWindow;
    populated;
    constructor(tree, hasChildren) {
        super(null, hasChildren);
        this.dataGridInternal = tree;
        this.instanceCount = 0;
        this.savedChildren = new Map();
        /**
         * List of position ranges for all visible nodes: [startPos1, endPos1),...,[startPosN, endPosN)
         * Position is an item position in the provider.
         */
        this.retrievedChildrenRanges = [];
        this.providerObject = null;
        this.reachableFromWindow = false;
    }
    get name() {
        return undefined;
    }
    heapSnapshotDataGrid() {
        return this.dataGridInternal;
    }
    createProvider() {
        throw new Error('Not implemented.');
    }
    comparator() {
        throw new Error('Not implemented.');
    }
    getHash() {
        throw new Error('Not implemented.');
    }
    createChildNode(_item) {
        throw new Error('Not implemented.');
    }
    retainersDataSource() {
        return null;
    }
    provider() {
        if (!this.providerObject) {
            this.providerObject = this.createProvider();
        }
        return this.providerObject;
    }
    createCell(columnId) {
        return super.createCell(columnId);
    }
    collapse() {
        super.collapse();
        this.dataGridInternal.updateVisibleNodes(true);
    }
    expand() {
        super.expand();
        this.dataGridInternal.updateVisibleNodes(true);
    }
    dispose() {
        if (this.providerObject) {
            this.providerObject.dispose();
        }
        for (let node = this.children[0]; node; node = node.traverseNextNode(true, this, true)) {
            node.dispose();
        }
    }
    queryObjectContent(_heapProfilerModel, _objectGroupName) {
        throw new Error('Not implemented.');
    }
    tryQueryObjectContent(_heapProfilerModel, _objectGroupName) {
        throw new Error('Not implemented.');
    }
    populateContextMenu(_contextMenu, _dataDisplayDelegate, _heapProfilerModel) {
    }
    toPercentString(num) {
        return num.toFixed(0) + '\xa0%'; // \xa0 is a non-breaking space.
    }
    toUIDistance(distance) {
        const baseSystemDistance = _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_4__.HeapSnapshotModel.baseSystemDistance;
        return distance >= 0 && distance < baseSystemDistance ? distance.toString() : '\u2212';
    }
    allChildren() {
        return this.dataGridInternal.allChildren(this);
    }
    removeChildByIndex(index) {
        this.dataGridInternal.removeChildByIndex(this, index);
    }
    childForPosition(nodePosition) {
        let indexOfFirstChildInRange = 0;
        for (let i = 0; i < this.retrievedChildrenRanges.length; i++) {
            const range = this.retrievedChildrenRanges[i];
            if (range.from <= nodePosition && nodePosition < range.to) {
                const childIndex = indexOfFirstChildInRange + nodePosition - range.from;
                return this.allChildren()[childIndex];
            }
            indexOfFirstChildInRange += range.to - range.from + 1;
        }
        return null;
    }
    createValueCell(columnId) {
        const jslog = _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.tableCell('numeric-column').track({ click: true });
        const cell = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Fragment.html `<td class="numeric-column" jslog=${jslog} />`;
        const dataGrid = this.dataGrid;
        if (dataGrid.snapshot && dataGrid.snapshot.totalSize !== 0) {
            const div = document.createElement('div');
            const valueSpan = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Fragment.html `<span>${this.data[columnId]}</span>`;
            div.appendChild(valueSpan);
            const percentColumn = columnId + '-percent';
            if (percentColumn in this.data) {
                const percentSpan = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Fragment.html `<span class="percent-column">${this.data[percentColumn]}</span>`;
                div.appendChild(percentSpan);
                div.classList.add('profile-multiple-values');
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.ARIAUtils.markAsHidden(valueSpan);
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.ARIAUtils.markAsHidden(percentSpan);
                this.setCellAccessibleName(i18nString(UIStrings.genericStringsTwoPlaceholders, { PH1: this.data[columnId], PH2: this.data[percentColumn] }), cell, columnId);
            }
            cell.appendChild(div);
        }
        return cell;
    }
    populate() {
        if (this.populated) {
            return;
        }
        this.populated = true;
        void this.provider().sortAndRewind(this.comparator()).then(() => this.populateChildren());
    }
    expandWithoutPopulate() {
        // Make sure default populate won't take action.
        this.populated = true;
        this.expand();
        return this.provider().sortAndRewind(this.comparator());
    }
    childHashForEntity(entity) {
        if ('edgeIndex' in entity) {
            return entity.edgeIndex;
        }
        return entity.id;
    }
    populateChildren(fromPosition, toPosition) {
        return new Promise(resolve => {
            fromPosition = fromPosition || 0;
            toPosition = toPosition || fromPosition + this.dataGridInternal.defaultPopulateCount();
            let firstNotSerializedPosition = fromPosition;
            serializeNextChunk.call(this, toPosition);
            function serializeNextChunk(toPosition) {
                if (firstNotSerializedPosition >= toPosition) {
                    return;
                }
                const end = Math.min(firstNotSerializedPosition + this.dataGridInternal.defaultPopulateCount(), toPosition);
                void this.provider()
                    .serializeItemsRange(firstNotSerializedPosition, end)
                    .then(itemsRange => childrenRetrieved.call(this, itemsRange, toPosition));
                firstNotSerializedPosition = end;
            }
            function insertRetrievedChild(item, insertionIndex) {
                if (this.savedChildren) {
                    const hash = this.childHashForEntity(item);
                    const child = this.savedChildren.get(hash);
                    if (child) {
                        this.dataGridInternal.insertChild(this, child, insertionIndex);
                        return;
                    }
                }
                this.dataGridInternal.insertChild(this, this.createChildNode(item), insertionIndex);
            }
            function insertShowMoreButton(from, to, insertionIndex) {
                const button = (new _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_6__.ShowMoreDataGridNode.ShowMoreDataGridNode(this.populateChildren.bind(this), from, to, this.dataGridInternal.defaultPopulateCount()));
                this.dataGridInternal.insertChild(this, button, insertionIndex);
            }
            function childrenRetrieved(itemsRange, toPosition) {
                let itemIndex = 0;
                let itemPosition = itemsRange.startPosition;
                const items = itemsRange.items;
                let insertionIndex = 0;
                if (!this.retrievedChildrenRanges.length) {
                    if (itemsRange.startPosition > 0) {
                        this.retrievedChildrenRanges.push({ from: 0, to: 0 });
                        insertShowMoreButton.call(this, 0, itemsRange.startPosition, insertionIndex++);
                    }
                    this.retrievedChildrenRanges.push({ from: itemsRange.startPosition, to: itemsRange.endPosition });
                    for (let i = 0, l = items.length; i < l; ++i) {
                        insertRetrievedChild.call(this, items[i], insertionIndex++);
                    }
                    if (itemsRange.endPosition < itemsRange.totalLength) {
                        insertShowMoreButton.call(this, itemsRange.endPosition, itemsRange.totalLength, insertionIndex++);
                    }
                }
                else {
                    let rangeIndex = 0;
                    let found = false;
                    let range = { from: 0, to: 0 };
                    while (rangeIndex < this.retrievedChildrenRanges.length) {
                        range = this.retrievedChildrenRanges[rangeIndex];
                        if (range.to >= itemPosition) {
                            found = true;
                            break;
                        }
                        insertionIndex += range.to - range.from;
                        // Skip the button if there is one.
                        if (range.to < itemsRange.totalLength) {
                            insertionIndex += 1;
                        }
                        ++rangeIndex;
                    }
                    if (!found || itemsRange.startPosition < range.from) {
                        // Update previous button.
                        const button = this.allChildren()[insertionIndex - 1];
                        button.setEndPosition(itemsRange.startPosition);
                        insertShowMoreButton.call(this, itemsRange.startPosition, found ? range.from : itemsRange.totalLength, insertionIndex);
                        range = { from: itemsRange.startPosition, to: itemsRange.startPosition };
                        if (!found) {
                            rangeIndex = this.retrievedChildrenRanges.length;
                        }
                        this.retrievedChildrenRanges.splice(rangeIndex, 0, range);
                    }
                    else {
                        insertionIndex += itemPosition - range.from;
                    }
                    // At this point insertionIndex is always an index before button or between nodes.
                    // Also it is always true here that range.from <= itemPosition <= range.to
                    // Stretch the range right bound to include all new items.
                    while (range.to < itemsRange.endPosition) {
                        // Skip already added nodes.
                        const skipCount = range.to - itemPosition;
                        insertionIndex += skipCount;
                        itemIndex += skipCount;
                        itemPosition = range.to;
                        // We're at the position before button: ...<?node>x<button>
                        const nextRange = this.retrievedChildrenRanges[rangeIndex + 1];
                        let newEndOfRange = nextRange ? nextRange.from : itemsRange.totalLength;
                        if (newEndOfRange > itemsRange.endPosition) {
                            newEndOfRange = itemsRange.endPosition;
                        }
                        while (itemPosition < newEndOfRange) {
                            insertRetrievedChild.call(this, items[itemIndex++], insertionIndex++);
                            ++itemPosition;
                        }
                        // Merge with the next range.
                        if (nextRange && newEndOfRange === nextRange.from) {
                            range.to = nextRange.to;
                            // Remove "show next" button if there is one.
                            this.removeChildByIndex(insertionIndex);
                            this.retrievedChildrenRanges.splice(rangeIndex + 1, 1);
                        }
                        else {
                            range.to = newEndOfRange;
                            // Remove or update next button.
                            if (newEndOfRange === itemsRange.totalLength) {
                                this.removeChildByIndex(insertionIndex);
                            }
                            else {
                                this.allChildren()[insertionIndex]
                                    .setStartPosition(itemsRange.endPosition);
                            }
                        }
                    }
                }
                this.instanceCount += items.length;
                if (firstNotSerializedPosition < toPosition && firstNotSerializedPosition < itemsRange.totalLength) {
                    serializeNextChunk.call(this, toPosition);
                    return;
                }
                if (this.expanded) {
                    this.dataGridInternal.updateVisibleNodes(true);
                }
                resolve();
                this.dispatchEventToListeners(HeapSnapshotGridNode.Events.PopulateComplete);
            }
        });
    }
    saveChildren() {
        this.savedChildren.clear();
        const children = this.allChildren();
        for (let i = 0, l = children.length; i < l; ++i) {
            const child = children[i];
            if (!child.expanded) {
                continue;
            }
            this.savedChildren.set(child.getHash(), child);
        }
    }
    async sort() {
        this.dataGridInternal.recursiveSortingEnter();
        await this.provider().sortAndRewind(this.comparator());
        this.saveChildren();
        this.dataGridInternal.removeAllChildren(this);
        this.retrievedChildrenRanges = [];
        const instanceCount = this.instanceCount;
        this.instanceCount = 0;
        await this.populateChildren(0, instanceCount);
        for (const child of this.allChildren()) {
            if (child.expanded) {
                void child.sort();
            }
        }
        this.dataGridInternal.recursiveSortingLeave();
    }
}
(function (HeapSnapshotGridNode) {
    let Events;
    (function (Events) {
        Events["PopulateComplete"] = "PopulateComplete";
    })(Events = HeapSnapshotGridNode.Events || (HeapSnapshotGridNode.Events = {}));
})(HeapSnapshotGridNode || (HeapSnapshotGridNode = {}));
class HeapSnapshotGenericObjectNode extends HeapSnapshotGridNode {
    referenceName;
    nameInternal;
    type;
    distance;
    shallowSize;
    retainedSize;
    snapshotNodeId;
    snapshotNodeIndex;
    detachedDOMTreeNode;
    linkElement;
    constructor(dataGrid, node) {
        super(dataGrid, false);
        // node is null for DataGrid root nodes.
        if (!node) {
            return;
        }
        this.referenceName = null;
        this.nameInternal = node.name;
        this.type = node.type;
        this.distance = node.distance;
        this.shallowSize = node.selfSize;
        this.retainedSize = node.retainedSize;
        this.snapshotNodeId = node.id;
        this.snapshotNodeIndex = node.nodeIndex;
        if (this.type === 'string') {
            this.reachableFromWindow = true;
        }
        else if (this.type === 'object' && this.nameInternal.startsWith('Window')) {
            this.nameInternal = this.shortenWindowURL(this.nameInternal, false);
            this.reachableFromWindow = true;
        }
        else if (node.canBeQueried) {
            this.reachableFromWindow = true;
        }
        if (node.detachedDOMTreeNode) {
            this.detachedDOMTreeNode = true;
        }
        const snapshot = dataGrid.snapshot;
        const shallowSizePercent = this.shallowSize / snapshot.totalSize * 100.0;
        const retainedSizePercent = this.retainedSize / snapshot.totalSize * 100.0;
        this.data = {
            'distance': this.toUIDistance(this.distance),
            'shallowSize': _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.NumberUtilities.withThousandsSeparator(this.shallowSize),
            'retainedSize': _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.NumberUtilities.withThousandsSeparator(this.retainedSize),
            'shallowSize-percent': this.toPercentString(shallowSizePercent),
            'retainedSize-percent': this.toPercentString(retainedSizePercent),
        };
    }
    get name() {
        return this.nameInternal;
    }
    retainersDataSource() {
        return this.snapshotNodeIndex === undefined ? null : {
            snapshot: this.dataGridInternal.snapshot,
            snapshotNodeIndex: this.snapshotNodeIndex,
            snapshotNodeId: this.snapshotNodeId,
        };
    }
    createCell(columnId) {
        const cell = columnId !== 'object' ? this.createValueCell(columnId) : this.createObjectCell();
        return cell;
    }
    createObjectCell() {
        let value = this.nameInternal;
        let valueStyle = 'object';
        switch (this.type) {
            case 'concatenated string':
            case 'string':
                value = `"${value}"`;
                valueStyle = 'string';
                break;
            case 'regexp':
                value = `/${value}/`;
                valueStyle = 'string';
                break;
            case 'closure':
                value = `${value}()`;
                valueStyle = 'function';
                break;
            case 'bigint':
                valueStyle = 'bigint';
                break;
            case 'number':
                valueStyle = 'number';
                break;
            case 'hidden':
            case 'object shape':
                valueStyle = 'null';
                break;
            case 'array':
                value = value ? `${value}[]` : i18nString(UIStrings.internalArray);
                break;
        }
        return this.createObjectCellWithValue(valueStyle, value || '');
    }
    createObjectCellWithValue(valueStyle, value) {
        const jslog = _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.tableCell('object-column').track({ click: true });
        const fragment = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Fragment.Fragment.build `
  <td class="object-column disclosure" jslog=${jslog}>
  <div class="source-code event-properties" style="overflow: visible;" $="container">
  <span class="value object-value-${valueStyle}">${value}</span>
  <span class="object-value-id">@${this.snapshotNodeId}</span>
  </div>
  </td>`;
        const div = fragment.$('container');
        this.prefixObjectCell(div);
        if (this.reachableFromWindow) {
            const frameIcon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.create('frame', 'heap-object-tag');
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Tooltip.Tooltip.install(frameIcon, i18nString(UIStrings.userObjectReachableFromWindow));
            div.appendChild(frameIcon);
        }
        if (this.detachedDOMTreeNode) {
            const frameIcon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.create('scissors', 'heap-object-tag');
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Tooltip.Tooltip.install(frameIcon, i18nString(UIStrings.detachedFromDomTree));
            div.appendChild(frameIcon);
        }
        void this.appendSourceLocation(div);
        const cell = fragment.element();
        if (this.depth) {
            cell.style.setProperty('padding-left', (this.depth * this.dataGrid.indentWidth) + 'px');
        }
        return cell;
    }
    prefixObjectCell(_div) {
    }
    async appendSourceLocation(div) {
        const linkContainer = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Fragment.html `<span class="heap-object-source-link" />`;
        div.appendChild(linkContainer);
        const link = await this.dataGridInternal.dataDisplayDelegate().linkifyObject(this.snapshotNodeIndex);
        if (link) {
            link.setAttribute('tabindex', '0');
            linkContainer.appendChild(link);
            this.linkElement = link;
        }
        else {
            linkContainer.remove();
        }
    }
    async queryObjectContent(heapProfilerModel, objectGroupName) {
        const remoteObject = await this.tryQueryObjectContent(heapProfilerModel, objectGroupName);
        return remoteObject || this.tryGetTooltipDescription() ||
            heapProfilerModel.runtimeModel().createRemoteObjectFromPrimitiveValue(i18nString(UIStrings.previewIsNotAvailable));
    }
    async tryQueryObjectContent(heapProfilerModel, objectGroupName) {
        if (this.type === 'string') {
            return heapProfilerModel.runtimeModel().createRemoteObjectFromPrimitiveValue(this.nameInternal);
        }
        return await heapProfilerModel.objectForSnapshotObjectId(String(this.snapshotNodeId), objectGroupName);
    }
    tryGetTooltipDescription() {
        const baseLink = 'https://developer.chrome.com/docs/devtools/memory-problems/heap-snapshots#';
        switch (this.type) {
            case 'code':
                return { description: i18nString(UIStrings.compiledCodeSummary), link: baseLink + 'compiled-code' };
            case 'concatenated string':
                return { description: i18nString(UIStrings.concatenatedStringSummary), link: baseLink + 'concatenated-string' };
            case 'sliced string':
                return { description: i18nString(UIStrings.slicedStringSummary), link: baseLink + 'sliced-string' };
        }
        switch (this.type + ':' + this.nameInternal) {
            case 'array:': // If nameInternal is empty, then the object is shown as "(internal array)[]".
                return { description: i18nString(UIStrings.internalArraySummary), link: baseLink + 'array' };
            case 'array:(object elements)':
                return { description: i18nString(UIStrings.objectElementsSummary), link: baseLink + 'array' };
            case 'array:(object properties)':
            case 'hidden:system / PropertyArray':
                return { description: i18nString(UIStrings.objectPropertiesSummary), link: baseLink + 'array' };
            case 'object:system / Context':
                return { description: i18nString(UIStrings.contextSummary), link: baseLink + 'system-context' };
            case 'object shape:system / DescriptorArray':
                return { description: i18nString(UIStrings.descriptorArraySummary), link: baseLink + 'object-shape' };
            case 'object shape:system / Map':
                return { description: i18nString(UIStrings.mapSummary), link: baseLink + 'object-shape' };
            case 'native:InternalNode':
                return { description: i18nString(UIStrings.internalNodeSummary), link: baseLink + 'internal-node' };
        }
        return undefined;
    }
    async updateHasChildren() {
        const isEmpty = await this.provider().isEmpty();
        this.setHasChildren(!isEmpty);
    }
    shortenWindowURL(fullName, hasObjectId) {
        const startPos = fullName.indexOf('/');
        const endPos = hasObjectId ? fullName.indexOf('@') : fullName.length;
        if (startPos === -1 || endPos === -1) {
            return fullName;
        }
        const fullURL = fullName.substring(startPos + 1, endPos).trimLeft();
        let url = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.StringUtilities.trimURL(fullURL);
        if (url.length > 40) {
            url = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.StringUtilities.trimMiddle(url, 40);
        }
        return fullName.substr(0, startPos + 2) + url + fullName.substr(endPos);
    }
    populateContextMenu(contextMenu, dataDisplayDelegate, heapProfilerModel) {
        if (this.shallowSize !== 0) {
            contextMenu.revealSection().appendItem(i18nString(UIStrings.revealInSummaryView), () => {
                dataDisplayDelegate.showObject(String(this.snapshotNodeId), i18nString(UIStrings.summary));
            }, { jslogContext: 'reveal-in-summary' });
        }
        if (this.referenceName) {
            for (const match of this.referenceName.matchAll(/\((?<objectName>[^@)]*) @(?<snapshotNodeId>\d+)\)/g)) {
                const { objectName, snapshotNodeId } = match.groups;
                contextMenu.revealSection().appendItem(i18nString(UIStrings.revealObjectSWithIdSInSummary, { PH1: objectName, PH2: snapshotNodeId }), () => {
                    dataDisplayDelegate.showObject(snapshotNodeId, i18nString(UIStrings.summary));
                }, { jslogContext: 'reveal-in-summary' });
            }
        }
        if (heapProfilerModel) {
            contextMenu.revealSection().appendItem(i18nString(UIStrings.storeAsGlobalVariable), async () => {
                const remoteObject = await this.tryQueryObjectContent(heapProfilerModel, '');
                if (!remoteObject) {
                    _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Console.Console.instance().error(i18nString(UIStrings.previewIsNotAvailable));
                }
                else {
                    const consoleModel = heapProfilerModel.target().model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ConsoleModel.ConsoleModel);
                    await consoleModel?.saveToTempVariable(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.RuntimeModel.ExecutionContext), remoteObject);
                }
            }, { jslogContext: 'store-as-global-variable' });
        }
    }
}
class HeapSnapshotObjectNode extends HeapSnapshotGenericObjectNode {
    referenceName;
    referenceType;
    edgeIndex;
    snapshot;
    parentObjectNode;
    cycledWithAncestorGridNode;
    constructor(dataGrid, snapshot, edge, parentObjectNode) {
        super(dataGrid, edge.node);
        this.referenceName = edge.name;
        this.referenceType = edge.type;
        this.edgeIndex = edge.edgeIndex;
        this.snapshot = snapshot;
        this.parentObjectNode = parentObjectNode;
        this.cycledWithAncestorGridNode = this.findAncestorWithSameSnapshotNodeId();
        if (!this.cycledWithAncestorGridNode) {
            void this.updateHasChildren();
        }
        const data = this.data;
        data['count'] = '';
        data['addedCount'] = '';
        data['removedCount'] = '';
        data['countDelta'] = '';
        data['addedSize'] = '';
        data['removedSize'] = '';
        data['sizeDelta'] = '';
    }
    retainersDataSource() {
        return this.snapshotNodeIndex === undefined ?
            null :
            { snapshot: this.snapshot, snapshotNodeIndex: this.snapshotNodeIndex, snapshotNodeId: this.snapshotNodeId };
    }
    createProvider() {
        if (this.snapshotNodeIndex === undefined) {
            throw new Error('Cannot create a provider on a root node');
        }
        return this.snapshot.createEdgesProvider(this.snapshotNodeIndex);
    }
    findAncestorWithSameSnapshotNodeId() {
        let ancestor = this.parentObjectNode;
        while (ancestor) {
            if (ancestor.snapshotNodeId === this.snapshotNodeId) {
                return ancestor;
            }
            ancestor = ancestor.parentObjectNode;
        }
        return null;
    }
    createChildNode(item) {
        return new HeapSnapshotObjectNode(this.dataGridInternal, this.snapshot, item, this);
    }
    getHash() {
        return this.edgeIndex;
    }
    comparator() {
        const sortAscending = this.dataGridInternal.isSortOrderAscending();
        const sortColumnId = this.dataGridInternal.sortColumnId();
        switch (sortColumnId) {
            case 'object':
                return new _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_4__.HeapSnapshotModel.ComparatorConfig('!edgeName', sortAscending, 'retainedSize', false);
            case 'count':
                return new _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_4__.HeapSnapshotModel.ComparatorConfig('!edgeName', true, 'retainedSize', false);
            case 'shallowSize':
                return new _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_4__.HeapSnapshotModel.ComparatorConfig('selfSize', sortAscending, '!edgeName', true);
            case 'retainedSize':
                return new _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_4__.HeapSnapshotModel.ComparatorConfig('retainedSize', sortAscending, '!edgeName', true);
            case 'distance':
                return new _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_4__.HeapSnapshotModel.ComparatorConfig('distance', sortAscending, 'name', true);
            default:
                return new _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_4__.HeapSnapshotModel.ComparatorConfig('!edgeName', true, 'retainedSize', false);
        }
    }
    prefixObjectCell(div) {
        let name = this.referenceName || '(empty)';
        let nameClass = 'name';
        switch (this.referenceType) {
            case 'context':
                nameClass = 'object-value-number';
                break;
            case 'internal':
            case 'hidden':
            case 'weak':
                nameClass = 'object-value-null';
                break;
            case 'element':
                name = `[${name}]`;
                break;
        }
        if (this.cycledWithAncestorGridNode) {
            div.classList.add('cycled-ancestor-node');
        }
        div.prepend(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Fragment.html `<span class="property-name ${nameClass}">${name}</span>
  <span class="grayed">${this.edgeNodeSeparator()}</span>`);
    }
    edgeNodeSeparator() {
        return '::';
    }
}
class HeapSnapshotRetainingObjectNode extends HeapSnapshotObjectNode {
    #ignored;
    constructor(dataGrid, snapshot, edge, parentRetainingObjectNode) {
        super(dataGrid, snapshot, edge, parentRetainingObjectNode);
        this.#ignored = edge.node.ignored;
        if (this.#ignored) {
            this.data['distance'] = i18nString(UIStrings.ignored);
        }
    }
    createProvider() {
        if (this.snapshotNodeIndex === undefined) {
            throw new Error('Cannot create providers on root nodes');
        }
        return this.snapshot.createRetainingEdgesProvider(this.snapshotNodeIndex);
    }
    createChildNode(item) {
        return new HeapSnapshotRetainingObjectNode(this.dataGridInternal, this.snapshot, item, this);
    }
    edgeNodeSeparator() {
        // TODO(l10n): improve description or clarify intention.
        return i18nString(UIStrings.inElement);
    }
    expand() {
        this.expandRetainersChain(20);
    }
    populateContextMenu(contextMenu, dataDisplayDelegate, heapProfilerModel) {
        super.populateContextMenu(contextMenu, dataDisplayDelegate, heapProfilerModel);
        const snapshotNodeIndex = this.snapshotNodeIndex;
        if (snapshotNodeIndex === undefined) {
            return;
        }
        if (this.#ignored) {
            contextMenu.revealSection().appendItem(i18nString(UIStrings.stopIgnoringThisRetainer), async () => {
                await this.snapshot.unignoreNodeInRetainersView(snapshotNodeIndex);
                await this.dataGridInternal.dataSourceChanged();
            }, { jslogContext: 'stop-ignoring-this-retainer' });
        }
        else {
            contextMenu.revealSection().appendItem(i18nString(UIStrings.ignoreThisRetainer), async () => {
                await this.snapshot.ignoreNodeInRetainersView(snapshotNodeIndex);
                await this.dataGridInternal.dataSourceChanged();
            }, { jslogContext: 'ignore-this-retainer' });
        }
    }
    isReachable() {
        return (this.distance ?? 0) < _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_4__.HeapSnapshotModel.baseUnreachableDistance;
    }
    prefixObjectCell(div) {
        super.prefixObjectCell(div);
        if (!this.isReachable()) {
            div.classList.add('unreachable-ancestor-node');
        }
    }
    expandRetainersChain(maxExpandLevels) {
        if (!this.populated) {
            void this.once(HeapSnapshotGridNode.Events.PopulateComplete)
                .then(() => this.expandRetainersChain(maxExpandLevels));
            this.populate();
            return;
        }
        super.expand();
        if (--maxExpandLevels > 0 && this.children.length > 0) {
            const retainer = this.children[0];
            if ((retainer.distance || 0) > 1 && retainer.isReachable()) {
                retainer.expandRetainersChain(maxExpandLevels);
                return;
            }
        }
        this.dataGridInternal.dispatchEventToListeners(_HeapSnapshotDataGrids_js__WEBPACK_IMPORTED_MODULE_9__.HeapSnapshotSortableDataGridEvents.ExpandRetainersComplete);
    }
    comparator() {
        const result = super.comparator();
        if (result.fieldName1 === 'distance') {
            result.fieldName1 = '!edgeDistance';
        }
        if (result.fieldName2 === 'distance') {
            result.fieldName2 = '!edgeDistance';
        }
        return result;
    }
}
class HeapSnapshotInstanceNode extends HeapSnapshotGenericObjectNode {
    baseSnapshotOrSnapshot;
    isDeletedNode;
    constructor(dataGrid, snapshot, node, isDeletedNode) {
        super(dataGrid, node);
        this.baseSnapshotOrSnapshot = snapshot;
        this.isDeletedNode = isDeletedNode;
        void this.updateHasChildren();
        const data = this.data;
        data['count'] = '';
        data['countDelta'] = '';
        data['sizeDelta'] = '';
        if (this.isDeletedNode) {
            data['addedCount'] = '';
            data['addedSize'] = '';
            data['removedCount'] = '\u2022';
            data['removedSize'] = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.NumberUtilities.withThousandsSeparator(this.shallowSize || 0);
        }
        else {
            data['addedCount'] = '\u2022';
            data['addedSize'] = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.NumberUtilities.withThousandsSeparator(this.shallowSize || 0);
            data['removedCount'] = '';
            data['removedSize'] = '';
        }
    }
    retainersDataSource() {
        return this.snapshotNodeIndex === undefined ? null : {
            snapshot: this.baseSnapshotOrSnapshot,
            snapshotNodeIndex: this.snapshotNodeIndex,
            snapshotNodeId: this.snapshotNodeId,
        };
    }
    createProvider() {
        if (this.snapshotNodeIndex === undefined) {
            throw new Error('Cannot create providers on root nodes');
        }
        return this.baseSnapshotOrSnapshot.createEdgesProvider(this.snapshotNodeIndex);
    }
    createChildNode(item) {
        return new HeapSnapshotObjectNode(this.dataGridInternal, this.baseSnapshotOrSnapshot, item, null);
    }
    getHash() {
        if (this.snapshotNodeId === undefined) {
            throw new Error('Cannot hash root nodes');
        }
        return this.snapshotNodeId;
    }
    comparator() {
        const sortAscending = this.dataGridInternal.isSortOrderAscending();
        const sortColumnId = this.dataGridInternal.sortColumnId();
        switch (sortColumnId) {
            case 'object':
                return new _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_4__.HeapSnapshotModel.ComparatorConfig('!edgeName', sortAscending, 'retainedSize', false);
            case 'distance':
                return new _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_4__.HeapSnapshotModel.ComparatorConfig('distance', sortAscending, 'retainedSize', false);
            case 'count':
                return new _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_4__.HeapSnapshotModel.ComparatorConfig('!edgeName', true, 'retainedSize', false);
            case 'addedSize':
                return new _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_4__.HeapSnapshotModel.ComparatorConfig('selfSize', sortAscending, '!edgeName', true);
            case 'removedSize':
                return new _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_4__.HeapSnapshotModel.ComparatorConfig('selfSize', sortAscending, '!edgeName', true);
            case 'shallowSize':
                return new _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_4__.HeapSnapshotModel.ComparatorConfig('selfSize', sortAscending, '!edgeName', true);
            case 'retainedSize':
                return new _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_4__.HeapSnapshotModel.ComparatorConfig('retainedSize', sortAscending, '!edgeName', true);
            default:
                return new _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_4__.HeapSnapshotModel.ComparatorConfig('!edgeName', true, 'retainedSize', false);
        }
    }
}
class HeapSnapshotConstructorNode extends HeapSnapshotGridNode {
    nameInternal;
    nodeFilter;
    distance;
    count;
    shallowSize;
    retainedSize;
    constructor(dataGrid, className, aggregate, nodeFilter) {
        super(dataGrid, aggregate.count > 0);
        this.nameInternal = className;
        this.nodeFilter = nodeFilter;
        this.distance = aggregate.distance;
        this.count = aggregate.count;
        this.shallowSize = aggregate.self;
        this.retainedSize = aggregate.maxRet;
        const snapshot = dataGrid.snapshot;
        const retainedSizePercent = this.retainedSize / snapshot.totalSize * 100.0;
        const shallowSizePercent = this.shallowSize / snapshot.totalSize * 100.0;
        this.data = {
            'object': className,
            'count': _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.NumberUtilities.withThousandsSeparator(this.count),
            'distance': this.toUIDistance(this.distance),
            'shallowSize': _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.NumberUtilities.withThousandsSeparator(this.shallowSize),
            'retainedSize': _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.NumberUtilities.withThousandsSeparator(this.retainedSize),
            'shallowSize-percent': this.toPercentString(shallowSizePercent),
            'retainedSize-percent': this.toPercentString(retainedSizePercent),
        };
    }
    get name() {
        return this.nameInternal;
    }
    createProvider() {
        return this.dataGridInternal.snapshot
            .createNodesProviderForClass(this.nameInternal, this.nodeFilter);
    }
    async populateNodeBySnapshotObjectId(snapshotObjectId) {
        this.dataGridInternal.resetNameFilter();
        await this.expandWithoutPopulate();
        const nodePosition = await this.provider().nodePosition(snapshotObjectId);
        if (nodePosition === -1) {
            this.collapse();
            return [];
        }
        await this.populateChildren(nodePosition, null);
        const node = this.childForPosition(nodePosition);
        return node ? [this, node] : [];
    }
    filteredOut(filterValue) {
        return this.nameInternal.toLowerCase().indexOf(filterValue) === -1;
    }
    createCell(columnId) {
        const cell = columnId === 'object' ? super.createCell(columnId) : this.createValueCell(columnId);
        if (columnId === 'object' && this.count > 1) {
            cell.appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Fragment.html `<span class="objects-count">×${this.count}</span>`);
        }
        return cell;
    }
    createChildNode(item) {
        return new HeapSnapshotInstanceNode(this.dataGridInternal, this.dataGridInternal.snapshot, item, false);
    }
    comparator() {
        const sortAscending = this.dataGridInternal.isSortOrderAscending();
        const sortColumnId = this.dataGridInternal.sortColumnId();
        switch (sortColumnId) {
            case 'object':
                return new _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_4__.HeapSnapshotModel.ComparatorConfig('name', sortAscending, 'id', true);
            case 'distance':
                return new _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_4__.HeapSnapshotModel.ComparatorConfig('distance', sortAscending, 'retainedSize', false);
            case 'shallowSize':
                return new _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_4__.HeapSnapshotModel.ComparatorConfig('selfSize', sortAscending, 'id', true);
            case 'retainedSize':
                return new _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_4__.HeapSnapshotModel.ComparatorConfig('retainedSize', sortAscending, 'id', true);
            default:
                throw new Error(`Invalid sort column id ${sortColumnId}`);
        }
    }
}
class HeapSnapshotDiffNodesProvider {
    addedNodesProvider;
    deletedNodesProvider;
    addedCount;
    removedCount;
    constructor(addedNodesProvider, deletedNodesProvider, addedCount, removedCount) {
        this.addedNodesProvider = addedNodesProvider;
        this.deletedNodesProvider = deletedNodesProvider;
        this.addedCount = addedCount;
        this.removedCount = removedCount;
    }
    dispose() {
        this.addedNodesProvider.dispose();
        this.deletedNodesProvider.dispose();
    }
    nodePosition(_snapshotObjectId) {
        throw new Error('Unreachable');
    }
    isEmpty() {
        return Promise.resolve(false);
    }
    async serializeItemsRange(beginPosition, endPosition) {
        let itemsRange;
        let addedItems;
        if (beginPosition < this.addedCount) {
            itemsRange = await this.addedNodesProvider.serializeItemsRange(beginPosition, endPosition);
            for (const item of itemsRange.items) {
                item.isAddedNotRemoved = true;
            }
            if (itemsRange.endPosition >= endPosition) {
                itemsRange.totalLength = this.addedCount + this.removedCount;
                return itemsRange;
            }
            addedItems = itemsRange;
            itemsRange = await this.deletedNodesProvider.serializeItemsRange(0, endPosition - itemsRange.endPosition);
        }
        else {
            addedItems = new _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_4__.HeapSnapshotModel.ItemsRange(0, 0, 0, []);
            itemsRange = await this.deletedNodesProvider.serializeItemsRange(beginPosition - this.addedCount, endPosition - this.addedCount);
        }
        if (!addedItems.items.length) {
            addedItems.startPosition = this.addedCount + itemsRange.startPosition;
        }
        for (const item of itemsRange.items) {
            item.isAddedNotRemoved = false;
        }
        addedItems.items.push(...itemsRange.items);
        addedItems.endPosition = this.addedCount + itemsRange.endPosition;
        addedItems.totalLength = this.addedCount + this.removedCount;
        return addedItems;
    }
    async sortAndRewind(comparator) {
        await this.addedNodesProvider.sortAndRewind(comparator);
        await this.deletedNodesProvider.sortAndRewind(comparator);
    }
}
class HeapSnapshotDiffNode extends HeapSnapshotGridNode {
    nameInternal;
    addedCount;
    removedCount;
    countDelta;
    addedSize;
    removedSize;
    sizeDelta;
    deletedIndexes;
    constructor(dataGrid, className, diffForClass) {
        super(dataGrid, true);
        this.nameInternal = className;
        this.addedCount = diffForClass.addedCount;
        this.removedCount = diffForClass.removedCount;
        this.countDelta = diffForClass.countDelta;
        this.addedSize = diffForClass.addedSize;
        this.removedSize = diffForClass.removedSize;
        this.sizeDelta = diffForClass.sizeDelta;
        this.deletedIndexes = diffForClass.deletedIndexes;
        this.data = {
            'object': className,
            'addedCount': _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.NumberUtilities.withThousandsSeparator(this.addedCount),
            'removedCount': _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.NumberUtilities.withThousandsSeparator(this.removedCount),
            'countDelta': this.signForDelta(this.countDelta) +
                _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.NumberUtilities.withThousandsSeparator(Math.abs(this.countDelta)),
            'addedSize': _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.NumberUtilities.withThousandsSeparator(this.addedSize),
            'removedSize': _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.NumberUtilities.withThousandsSeparator(this.removedSize),
            'sizeDelta': this.signForDelta(this.sizeDelta) + _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.NumberUtilities.withThousandsSeparator(Math.abs(this.sizeDelta)),
        };
    }
    get name() {
        return this.nameInternal;
    }
    createProvider() {
        const tree = this.dataGridInternal;
        if (tree.snapshot === null || tree.baseSnapshot === undefined || tree.baseSnapshot.uid === undefined) {
            throw new Error('Data sources have not been set correctly');
        }
        const addedNodesProvider = tree.snapshot.createAddedNodesProvider(tree.baseSnapshot.uid, this.nameInternal);
        const deletedNodesProvider = tree.baseSnapshot.createDeletedNodesProvider(this.deletedIndexes);
        if (!addedNodesProvider || !deletedNodesProvider) {
            throw new Error('Failed to create node providers');
        }
        return new HeapSnapshotDiffNodesProvider(addedNodesProvider, deletedNodesProvider, this.addedCount, this.removedCount);
    }
    createCell(columnId) {
        const cell = super.createCell(columnId);
        if (columnId !== 'object') {
            cell.classList.add('numeric-column');
        }
        return cell;
    }
    createChildNode(item) {
        const dataGrid = this.dataGridInternal;
        if (item.isAddedNotRemoved) {
            if (dataGrid.snapshot === null) {
                throw new Error('Data sources have not been set correctly');
            }
            return new HeapSnapshotInstanceNode(this.dataGridInternal, dataGrid.snapshot, item, false);
        }
        if (dataGrid.baseSnapshot === undefined) {
            throw new Error('Data sources have not been set correctly');
        }
        return new HeapSnapshotInstanceNode(this.dataGridInternal, dataGrid.baseSnapshot, item, true);
    }
    comparator() {
        const sortAscending = this.dataGridInternal.isSortOrderAscending();
        const sortColumnId = this.dataGridInternal.sortColumnId();
        switch (sortColumnId) {
            case 'object':
                return new _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_4__.HeapSnapshotModel.ComparatorConfig('name', sortAscending, 'id', true);
            case 'addedCount':
                return new _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_4__.HeapSnapshotModel.ComparatorConfig('name', true, 'id', true);
            case 'removedCount':
                return new _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_4__.HeapSnapshotModel.ComparatorConfig('name', true, 'id', true);
            case 'countDelta':
                return new _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_4__.HeapSnapshotModel.ComparatorConfig('name', true, 'id', true);
            case 'addedSize':
                return new _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_4__.HeapSnapshotModel.ComparatorConfig('selfSize', sortAscending, 'id', true);
            case 'removedSize':
                return new _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_4__.HeapSnapshotModel.ComparatorConfig('selfSize', sortAscending, 'id', true);
            case 'sizeDelta':
                return new _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_4__.HeapSnapshotModel.ComparatorConfig('selfSize', sortAscending, 'id', true);
            default:
                throw new Error(`Invalid sort column ${sortColumnId}`);
        }
    }
    filteredOut(filterValue) {
        return this.nameInternal.toLowerCase().indexOf(filterValue) === -1;
    }
    signForDelta(delta) {
        if (delta === 0) {
            return '';
        }
        if (delta > 0) {
            return '+';
        }
        return '\u2212'; // Math minus sign, same width as plus.
    }
}
class AllocationGridNode extends HeapSnapshotGridNode {
    populated;
    allocationNode;
    constructor(dataGrid, data) {
        super(dataGrid, data.hasChildren);
        this.populated = false;
        this.allocationNode = data;
        this.data = {
            'liveCount': _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.NumberUtilities.withThousandsSeparator(data.liveCount),
            'count': _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.NumberUtilities.withThousandsSeparator(data.count),
            'liveSize': _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.NumberUtilities.withThousandsSeparator(data.liveSize),
            'size': _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.NumberUtilities.withThousandsSeparator(data.size),
            'name': data.name,
        };
    }
    populate() {
        if (this.populated) {
            return;
        }
        void this.doPopulate();
    }
    async doPopulate() {
        this.populated = true;
        const callers = await this.dataGridInternal.snapshot.allocationNodeCallers(this.allocationNode.id);
        const callersChain = callers.nodesWithSingleCaller;
        let parentNode = this;
        const dataGrid = this.dataGridInternal;
        for (const caller of callersChain) {
            const child = new AllocationGridNode(dataGrid, caller);
            dataGrid.appendNode(parentNode, child);
            parentNode = child;
            parentNode.populated = true;
            if (this.expanded) {
                parentNode.expand();
            }
        }
        const callersBranch = callers.branchingCallers;
        callersBranch.sort(this.dataGridInternal.createComparator());
        for (const caller of callersBranch) {
            dataGrid.appendNode(parentNode, new AllocationGridNode(dataGrid, caller));
        }
        dataGrid.updateVisibleNodes(true);
    }
    expand() {
        super.expand();
        if (this.children.length === 1) {
            this.children[0].expand();
        }
    }
    createCell(columnId) {
        if (columnId !== 'name') {
            return this.createValueCell(columnId);
        }
        const cell = super.createCell(columnId);
        const allocationNode = this.allocationNode;
        const heapProfilerModel = this.dataGridInternal.heapProfilerModel();
        if (allocationNode.scriptId) {
            const linkifier = this.dataGridInternal.linkifier;
            const urlElement = linkifier.linkifyScriptLocation(heapProfilerModel ? heapProfilerModel.target() : null, String(allocationNode.scriptId), allocationNode.scriptName, allocationNode.line - 1, {
                columnNumber: allocationNode.column - 1,
                inlineFrameIndex: 0,
                className: 'profile-node-file',
            });
            urlElement.style.maxWidth = '75%';
            cell.insertBefore(urlElement, cell.firstChild);
        }
        return cell;
    }
    allocationNodeId() {
        return this.allocationNode.id;
    }
}
//# sourceMappingURL=HeapSnapshotGridNodes.js.map

/***/ })

}]);