"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_profiler_LiveHeapProfileView_ts"],{

/***/ "./src/panels/profiler/LiveHeapProfileView.ts":
/*!****************************************************!*\
  !*** ./src/panels/profiler/LiveHeapProfileView.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionDelegate: () => (/* binding */ ActionDelegate),
/* harmony export */   GridNode: () => (/* binding */ GridNode),
/* harmony export */   LiveHeapProfileView: () => (/* binding */ LiveHeapProfileView)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./src/models/workspace/workspace.ts");
/* harmony import */ var _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/components/data_grid/data_grid.js */ "./src/ui/legacy/components/data_grid/data_grid.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './liveHeapProfile.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.








const UIStrings = {
    /**
     *@description Text for a heap profile type
     */
    jsHeap: 'JS Heap',
    /**
     *@description Text in Live Heap Profile View of a profiler tool
     */
    allocatedJsHeapSizeCurrentlyIn: 'Allocated JS heap size currently in use',
    /**
     *@description Text in Live Heap Profile View of a profiler tool
     */
    vms: 'VMs',
    /**
     *@description Text in Live Heap Profile View of a profiler tool
     */
    numberOfVmsSharingTheSameScript: 'Number of VMs sharing the same script source',
    /**
     *@description Text in Live Heap Profile View of a profiler tool
     */
    scriptUrl: 'Script URL',
    /**
     *@description Text in Live Heap Profile View of a profiler tool
     */
    urlOfTheScriptSource: 'URL of the script source',
    /**
     *@description Data grid name for Heap Profile data grids
     */
    heapProfile: 'Heap Profile',
    /**
     *@description Text in Live Heap Profile View of a profiler tool
     *@example {1} PH1
     */
    anonymousScriptS: '(Anonymous Script {PH1})',
    /**
     *@description A unit
     */
    kb: 'kB',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/profiler/LiveHeapProfileView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
let liveHeapProfileViewInstance;
class LiveHeapProfileView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Widget.VBox {
    constructor() {
        super(true);
        Object.defineProperty(this, "gridNodeByUrl", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "setting", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "toggleRecordAction", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "toggleRecordButton", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "startWithReloadButton", {
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
        Object.defineProperty(this, "currentPollId", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.gridNodeByUrl = new Map();
        this.setting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('memory-live-heap-profile');
        const toolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.Toolbar('live-heap-profile-toolbar', this.contentElement);
        this.toggleRecordAction =
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ActionRegistry.ActionRegistry.instance().getAction('live-heap-profile.toggle-recording');
        this.toggleRecordButton =
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.Toolbar.createActionButton(this.toggleRecordAction);
        this.toggleRecordButton.setToggled(this.setting.get());
        toolbar.appendToolbarItem(this.toggleRecordButton);
        const mainTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().primaryPageTarget();
        if (mainTarget && mainTarget.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.ResourceTreeModel)) {
            const startWithReloadAction = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ActionRegistry.ActionRegistry.instance().getAction('live-heap-profile.start-with-reload');
            this.startWithReloadButton = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.Toolbar.createActionButton(startWithReloadAction);
            toolbar.appendToolbarItem(this.startWithReloadButton);
        }
        this.dataGrid = this.createDataGrid();
        this.dataGrid.asWidget().show(this.contentElement);
        this.currentPollId = 0;
    }
    static instance() {
        if (!liveHeapProfileViewInstance) {
            liveHeapProfileViewInstance = new LiveHeapProfileView();
        }
        return liveHeapProfileViewInstance;
    }
    createDataGrid() {
        const defaultColumnConfig = {
            id: '',
            title: _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.UIString.LocalizedEmptyString,
            width: undefined,
            fixedWidth: true,
            sortable: true,
            align: _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_5__.DataGrid.Align.Right,
            sort: _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_5__.DataGrid.Order.Descending,
            titleDOMFragment: undefined,
            editable: undefined,
            nonSelectable: undefined,
            longText: undefined,
            disclosure: undefined,
            weight: undefined,
            allowInSortByEvenWhenHidden: undefined,
            dataType: undefined,
            defaultWeight: undefined,
        };
        const columns = [
            {
                ...defaultColumnConfig,
                id: 'size',
                title: i18nString(UIStrings.jsHeap),
                width: '72px',
                fixedWidth: true,
                sortable: true,
                align: _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_5__.DataGrid.Align.Right,
                sort: _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_5__.DataGrid.Order.Descending,
                tooltip: i18nString(UIStrings.allocatedJsHeapSizeCurrentlyIn),
            },
            {
                ...defaultColumnConfig,
                id: 'isolates',
                title: i18nString(UIStrings.vms),
                width: '40px',
                fixedWidth: true,
                align: _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_5__.DataGrid.Align.Right,
                tooltip: i18nString(UIStrings.numberOfVmsSharingTheSameScript),
            },
            {
                ...defaultColumnConfig,
                id: 'url',
                title: i18nString(UIStrings.scriptUrl),
                fixedWidth: false,
                sortable: true,
                tooltip: i18nString(UIStrings.urlOfTheScriptSource),
            },
        ];
        const dataGrid = new _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_5__.SortableDataGrid.SortableDataGrid({
            displayName: i18nString(UIStrings.heapProfile),
            columns,
            editCallback: undefined,
            deleteCallback: undefined,
            refreshCallback: undefined,
        });
        dataGrid.setResizeMethod(_ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_5__.DataGrid.ResizeMethod.Last);
        dataGrid.element.classList.add('flex-auto');
        dataGrid.element.addEventListener('keydown', this.onKeyDown.bind(this), false);
        dataGrid.addEventListener(_ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_5__.DataGrid.Events.OpenedNode, this.revealSourceForSelectedNode, this);
        dataGrid.addEventListener(_ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_5__.DataGrid.Events.SortingChanged, this.sortingChanged, this);
        for (const info of columns) {
            const headerCell = dataGrid.headerTableHeader(info.id);
            if (headerCell) {
                headerCell.setAttribute('title', info.tooltip);
            }
        }
        return dataGrid;
    }
    wasShown() {
        super.wasShown();
        void this.poll();
        this.registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './liveHeapProfile.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
        this.setting.addChangeListener(this.settingChanged, this);
    }
    willHide() {
        ++this.currentPollId;
        this.setting.removeChangeListener(this.settingChanged, this);
    }
    settingChanged(value) {
        this.toggleRecordButton.setToggled(value.data);
    }
    async poll() {
        const pollId = this.currentPollId;
        do {
            const isolates = Array.from(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.IsolateManager.IsolateManager.instance().isolates());
            const profiles = await Promise.all(isolates.map(isolate => {
                const heapProfilerModel = isolate.heapProfilerModel();
                if (!heapProfilerModel) {
                    return null;
                }
                return heapProfilerModel.getSamplingProfile();
            }));
            if (this.currentPollId !== pollId) {
                return;
            }
            this.update(isolates, profiles);
            await new Promise(r => window.setTimeout(r, 3000));
        } while (this.currentPollId === pollId);
    }
    update(isolates, profiles) {
        const dataByUrl = new Map();
        profiles.forEach((profile, index) => {
            if (profile) {
                processNodeTree(isolates[index], '', profile.head);
            }
        });
        const rootNode = this.dataGrid.rootNode();
        const exisitingNodes = new Set();
        for (const pair of dataByUrl) {
            const url = pair[0];
            const size = pair[1].size;
            const isolateCount = pair[1].isolates.size;
            if (!url) {
                console.info(`Node with empty URL: ${size} bytes`); // eslint-disable-line no-console
                continue;
            }
            let node = this.gridNodeByUrl.get(url);
            if (node) {
                node.updateNode(size, isolateCount);
            }
            else {
                node = new GridNode(url, size, isolateCount);
                this.gridNodeByUrl.set(url, node);
                rootNode.appendChild(node);
            }
            exisitingNodes.add(node);
        }
        for (const node of rootNode.children.slice()) {
            const gridNode = node;
            if (!exisitingNodes.has(gridNode)) {
                gridNode.remove();
            }
            this.gridNodeByUrl.delete(gridNode.url);
        }
        this.sortingChanged();
        function processNodeTree(isolate, parentUrl, node) {
            const url = node.callFrame.url || parentUrl || systemNodeName(node) || anonymousScriptName(node);
            node.children.forEach(processNodeTree.bind(null, isolate, url));
            if (!node.selfSize) {
                return;
            }
            let data = dataByUrl.get(url);
            if (!data) {
                data = { size: 0, isolates: new Set() };
                dataByUrl.set(url, data);
            }
            data.size += node.selfSize;
            data.isolates.add(isolate);
        }
        function systemNodeName(node) {
            const name = node.callFrame.functionName;
            return name.startsWith('(') && name !== '(root)' ? name : '';
        }
        function anonymousScriptName(node) {
            return Number(node.callFrame.scriptId) ? i18nString(UIStrings.anonymousScriptS, { PH1: node.callFrame.scriptId }) :
                '';
        }
    }
    onKeyDown(event) {
        if (!(event.key === 'Enter')) {
            return;
        }
        event.consume(true);
        this.revealSourceForSelectedNode();
    }
    revealSourceForSelectedNode() {
        const node = this.dataGrid.selectedNode;
        if (!node || !node.url) {
            return;
        }
        const sourceCode = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.Workspace.WorkspaceImpl.instance().uiSourceCodeForURL(node.url);
        if (sourceCode) {
            void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(sourceCode);
        }
    }
    sortingChanged() {
        const columnId = this.dataGrid.sortColumnId();
        if (!columnId) {
            return;
        }
        function sortByUrl(a, b) {
            return b.url.localeCompare(a.url);
        }
        function sortBySize(a, b) {
            return b.size - a.size;
        }
        const sortFunction = columnId === 'url' ? sortByUrl : sortBySize;
        this.dataGrid.sortNodes(sortFunction, this.dataGrid.isSortOrderAscending());
    }
    toggleRecording() {
        const enable = !this.setting.get();
        if (enable) {
            this.startRecording(false);
        }
        else {
            void this.stopRecording();
        }
    }
    startRecording(reload) {
        this.setting.set(true);
        if (!reload) {
            return;
        }
        const mainTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().primaryPageTarget();
        if (!mainTarget) {
            return;
        }
        const resourceTreeModel = mainTarget.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.ResourceTreeModel);
        if (resourceTreeModel) {
            resourceTreeModel.reloadPage();
        }
    }
    async stopRecording() {
        this.setting.set(false);
    }
}
class GridNode extends _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_5__.SortableDataGrid.SortableDataGridNode {
    constructor(url, size, isolateCount) {
        super();
        Object.defineProperty(this, "url", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "size", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "isolateCount", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.url = url;
        this.size = size;
        this.isolateCount = isolateCount;
    }
    updateNode(size, isolateCount) {
        if (this.size === size && this.isolateCount === isolateCount) {
            return;
        }
        this.size = size;
        this.isolateCount = isolateCount;
        this.refresh();
    }
    createCell(columnId) {
        const cell = this.createTD(columnId);
        switch (columnId) {
            case 'url':
                cell.textContent = this.url;
                break;
            case 'size':
                cell.textContent = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.NumberUtilities.withThousandsSeparator(Math.round(this.size / 1e3));
                cell.createChild('span', 'size-units').textContent = i18nString(UIStrings.kb);
                break;
            case 'isolates':
                cell.textContent = `${this.isolateCount}`;
                break;
        }
        return cell;
    }
}
class ActionDelegate {
    handleAction(_context, actionId) {
        void (async () => {
            const profileViewId = 'live-heap-profile';
            await _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ViewManager.ViewManager.instance().showView(profileViewId);
            const view = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ViewManager.ViewManager.instance().view(profileViewId);
            if (view) {
                const widget = await view.widget();
                this.innerHandleAction(widget, actionId);
            }
        })();
        return true;
    }
    innerHandleAction(profilerView, actionId) {
        switch (actionId) {
            case 'live-heap-profile.toggle-recording':
                profilerView.toggleRecording();
                break;
            case 'live-heap-profile.start-with-reload':
                profilerView.startRecording(true);
                break;
            default:
                console.assert(false, `Unknown action: ${actionId}`);
        }
    }
}


/***/ })

}]);