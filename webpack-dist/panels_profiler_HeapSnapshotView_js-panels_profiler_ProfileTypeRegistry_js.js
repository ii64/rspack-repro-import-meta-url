"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_profiler_HeapSnapshotView_js-panels_profiler_ProfileTypeRegistry_js"],{

/***/ "./panels/profiler/HeapSnapshotView.js":
/*!*********************************************!*\
  !*** ./panels/profiler/HeapSnapshotView.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AllocationPerspective: () => (/* binding */ AllocationPerspective),
/* harmony export */   ComparisonPerspective: () => (/* binding */ ComparisonPerspective),
/* harmony export */   ContainmentPerspective: () => (/* binding */ ContainmentPerspective),
/* harmony export */   HeapAllocationStackView: () => (/* binding */ HeapAllocationStackView),
/* harmony export */   HeapProfileHeader: () => (/* binding */ HeapProfileHeader),
/* harmony export */   HeapSnapshotProfileType: () => (/* binding */ HeapSnapshotProfileType),
/* harmony export */   HeapSnapshotStatisticsView: () => (/* binding */ HeapSnapshotStatisticsView),
/* harmony export */   HeapSnapshotView: () => (/* binding */ HeapSnapshotView),
/* harmony export */   Perspective: () => (/* binding */ Perspective),
/* harmony export */   StatisticsPerspective: () => (/* binding */ StatisticsPerspective),
/* harmony export */   SummaryPerspective: () => (/* binding */ SummaryPerspective),
/* harmony export */   TrackingHeapSnapshotProfileType: () => (/* binding */ TrackingHeapSnapshotProfileType)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _core_root_root_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/root/root.js */ "./core/root/root.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */ var _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/heap_snapshot_model/heap_snapshot_model.js */ "./models/heap_snapshot_model/heap_snapshot_model.js");
/* harmony import */ var _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/legacy/components/data_grid/data_grid.js */ "./ui/legacy/components/data_grid/data_grid.js");
/* harmony import */ var _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ui/legacy/components/object_ui/object_ui.js */ "./ui/legacy/components/object_ui/object_ui.js");
/* harmony import */ var _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ui/legacy/components/perf_ui/perf_ui.js */ "./ui/legacy/components/perf_ui/perf_ui.js");
/* harmony import */ var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../ui/legacy/components/utils/utils.js */ "./ui/legacy/components/utils/utils.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _HeapSnapshotDataGrids_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./HeapSnapshotDataGrids.js */ "./panels/profiler/HeapSnapshotDataGrids.js");
/* harmony import */ var _HeapSnapshotGridNodes_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./HeapSnapshotGridNodes.js */ "./panels/profiler/HeapSnapshotGridNodes.js");
/* harmony import */ var _HeapSnapshotProxy_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./HeapSnapshotProxy.js */ "./panels/profiler/HeapSnapshotProxy.js");
/* harmony import */ var _HeapTimelineOverview_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./HeapTimelineOverview.js */ "./panels/profiler/HeapTimelineOverview.js");
/* harmony import */ var _ModuleUIStrings_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ModuleUIStrings.js */ "./panels/profiler/ModuleUIStrings.js");
/* harmony import */ var _ProfileHeader_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ProfileHeader.js */ "./panels/profiler/ProfileHeader.js");
/* harmony import */ var _ProfileSidebarTreeElement_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ProfileSidebarTreeElement.js */ "./panels/profiler/ProfileSidebarTreeElement.js");
/* harmony import */ var _ProfileTypeRegistry_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ProfileTypeRegistry.js */ "./panels/profiler/ProfileTypeRegistry.js");
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
     *@description Text to find an item
     */
    find: 'Find',
    /**
     *@description Text in Heap Snapshot View of a profiler tool
     */
    containment: 'Containment',
    /**
     *@description Retaining paths title text content in Heap Snapshot View of a profiler tool
     */
    retainers: 'Retainers',
    /**
     *@description Text in Heap Snapshot View of a profiler tool
     */
    allocationStack: 'Allocation stack',
    /**
     *@description Screen reader label for a select box that chooses the perspective in the Memory panel when vieweing a Heap Snapshot
     */
    perspective: 'Perspective',
    /**
     *@description Screen reader label for a select box that chooses the snapshot to use as a base in the Memory panel when vieweing a Heap Snapshot
     */
    baseSnapshot: 'Base snapshot',
    /**
     *@description Text to filter result items
     */
    filter: 'Filter',
    /**
     *@description Placeholder text in the filter bar to filter by JavaScript class names for a heap
     */
    filterByClass: 'Filter by class',
    /**
     *@description Text in Heap Snapshot View of a profiler tool
     */
    code: 'Code',
    /**
     *@description Text in Heap Snapshot View of a profiler tool
     */
    strings: 'Strings',
    /**
     *@description Label on a pie chart in the statistics view for the Heap Snapshot tool
     */
    jsArrays: 'JS arrays',
    /**
     *@description Label on a pie chart in the statistics view for the Heap Snapshot tool
     */
    typedArrays: 'Typed arrays',
    /**
     *@description Label on a pie chart in the statistics view for the Heap Snapshot tool
     */
    systemObjects: 'System objects',
    /**
     *@description The reported total size used in the selected time frame of the allocation sampling profile
     *@example {3 MB} PH1
     */
    selectedSizeS: 'Selected size: {PH1}',
    /**
     *@description Text in Heap Snapshot View of a profiler tool
     */
    allObjects: 'All objects',
    /**
     *@description Title in Heap Snapshot View of a profiler tool
     *@example {Profile 2} PH1
     */
    objectsAllocatedBeforeS: 'Objects allocated before {PH1}',
    /**
     *@description Title in Heap Snapshot View of a profiler tool
     *@example {Profile 1} PH1
     *@example {Profile 2} PH2
     */
    objectsAllocatedBetweenSAndS: 'Objects allocated between {PH1} and {PH2}',
    /**
     *@description An option which will filter the heap snapshot to show only
     * strings which exactly match at least one other string
     */
    duplicatedStrings: 'Duplicated strings',
    /**
     *@description An option which will filter the heap snapshot to show only
     * detached DOM nodes and other objects kept alive by detached DOM nodes
     */
    objectsRetainedByDetachedDomNodes: 'Objects retained by detached DOM nodes',
    /**
     *@description An option which will filter the heap snapshot to show only
     * objects kept alive by the DevTools console
     */
    objectsRetainedByConsole: 'Objects retained by the DevTools console',
    /**
     *@description Text for the summary view
     */
    summary: 'Summary',
    /**
     *@description Text in Heap Snapshot View of a profiler tool
     */
    comparison: 'Comparison',
    /**
     *@description Text in Heap Snapshot View of a profiler tool
     */
    allocation: 'Allocation',
    /**
     *@description Title text content in Heap Snapshot View of a profiler tool
     */
    liveObjects: 'Live objects',
    /**
     *@description Text in Heap Snapshot View of a profiler tool
     */
    statistics: 'Statistics',
    /**
     *@description Text in Heap Snapshot View of a profiler tool
     */
    heapSnapshot: 'Heap snapshot',
    /**
     *@description Text in Heap Snapshot View of a profiler tool
     */
    takeHeapSnapshot: 'Take heap snapshot',
    /**
     *@description Text in Heap Snapshot View of a profiler tool
     */
    heapSnapshots: 'Heap snapshots',
    /**
     *@description Text in Heap Snapshot View of a profiler tool
     */
    heapSnapshotProfilesShowMemory: 'Heap snapshot profiles show memory distribution among your page\'s JavaScript objects and related DOM nodes.',
    /**
     *@description Label for a checkbox in the heap snapshot view of the profiler tool. The "heap snapshot" contains the
     * current state of JavaScript memory. With this checkbox enabled, the snapshot also includes internal data that is
     * specific to Chrome (hence implementation-specific).
     */
    exposeInternals: 'Expose internals (includes additional implementation-specific details)',
    /**
     *@description Progress update that the profiler is capturing a snapshot of the heap
     */
    snapshotting: 'Snapshotting…',
    /**
     *@description Profile title in Heap Snapshot View of a profiler tool
     *@example {1} PH1
     */
    snapshotD: 'Snapshot {PH1}',
    /**
     *@description Text for a percentage value
     *@example {13.0} PH1
     */
    percentagePlaceholder: '{PH1}%',
    /**
     *@description Text in Heap Snapshot View of a profiler tool
     */
    allocationInstrumentationOn: 'Allocation instrumentation on timeline',
    /**
     *@description Text in Heap Snapshot View of a profiler tool
     */
    stopRecordingHeapProfile: 'Stop recording heap profile',
    /**
     *@description Text in Heap Snapshot View of a profiler tool
     */
    startRecordingHeapProfile: 'Start recording heap profile',
    /**
     *@description Text in Heap Snapshot View of a profiler tool.
     * A stack trace is a list of functions that were called.
     * This option turns on recording of a stack trace at each allocation.
     * The recording itself is a somewhat expensive operation, so turning this option on, the website's performance may be affected negatively (e.g. everything becomes slower).
     */
    recordAllocationStacksExtra: 'Record stack traces of allocations (extra performance overhead)',
    /**
     *@description Text in CPUProfile View of a profiler tool
     */
    recording: 'Recording…',
    /**
     *@description Text in Heap Snapshot View of a profiler tool
     */
    allocationTimelines: 'Allocation timelines',
    /**
     *@description Description for the 'Allocation timeline' tool in the Memory panel.
     */
    AllocationTimelinesShowInstrumented: 'Allocation timelines show instrumented JavaScript memory allocations over time. Once profile is recorded you can select a time interval to see objects that were allocated within it and still alive by the end of recording. Use this profile type to isolate memory leaks.',
    /**
     *@description Text when something is loading
     */
    loading: 'Loading…',
    /**
     *@description Text in Heap Snapshot View of a profiler tool
     *@example {30} PH1
     */
    savingD: 'Saving… {PH1}%',
    /**
     *@description Text in Heap Snapshot View of a profiler tool
     */
    heapMemoryUsage: 'Heap memory usage',
    /**
     *@description Text of a DOM element in Heap Snapshot View of a profiler tool
     */
    stackWasNotRecordedForThisObject: 'Stack was not recorded for this object because it had been allocated before this profile recording started.',
    /**
     *@description Text in Heap Snapshot View of a profiler tool.
     * This text is on a button to undo all previous "Ignore this retainer" actions.
     */
    restoreIgnoredRetainers: 'Restore ignored retainers',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/profiler/HeapSnapshotView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
// The way this is handled is to workaround the strings inside the heap_snapshot_worker
// If strings are removed from inside the worker strings can be declared in this module
// as any other.
// eslint-disable-next-line @typescript-eslint/naming-convention
const moduleUIstr_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/profiler/ModuleUIStrings.ts', _ModuleUIStrings_js__WEBPACK_IMPORTED_MODULE_18__.UIStrings);
const moduleI18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, moduleUIstr_);
class HeapSnapshotView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.View.SimpleView {
    searchResults;
    profile;
    linkifier;
    parentDataDisplayDelegate;
    searchableViewInternal;
    splitWidget;
    containmentDataGrid;
    containmentWidget;
    statisticsView;
    constructorsDataGrid;
    constructorsWidget;
    diffDataGrid;
    diffWidget;
    allocationDataGrid;
    allocationWidget;
    allocationStackView;
    tabbedPane;
    retainmentDataGrid;
    retainmentWidget;
    objectDetailsView;
    perspectives;
    comparisonPerspective;
    perspectiveSelect;
    baseSelect;
    filterSelect;
    classNameFilter;
    selectedSizeText;
    resetRetainersButton;
    popoverHelper;
    currentPerspectiveIndex;
    currentPerspective;
    dataGrid;
    searchThrottler;
    baseProfile;
    trackingOverviewGrid;
    currentSearchResultIndex = -1;
    currentQuery;
    constructor(dataDisplayDelegate, profile) {
        super(i18nString(UIStrings.heapSnapshot));
        this.searchResults = [];
        this.element.classList.add('heap-snapshot-view');
        this.profile = profile;
        this.linkifier = new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_11__.Linkifier.Linkifier();
        const profileType = profile.profileType();
        profileType.addEventListener("SnapshotReceived" /* HeapSnapshotProfileTypeEvents.SnapshotReceived */, this.onReceiveSnapshot, this);
        profileType.addEventListener("remove-profile-header" /* ProfileTypeEvents.RemoveProfileHeader */, this.onProfileHeaderRemoved, this);
        const isHeapTimeline = profileType.id === TrackingHeapSnapshotProfileType.TypeId;
        if (isHeapTimeline) {
            this.createOverview();
        }
        const hasAllocationStacks = _ProfileTypeRegistry_js__WEBPACK_IMPORTED_MODULE_21__.instance.trackingHeapSnapshotProfileType.recordAllocationStacksSetting().get();
        this.parentDataDisplayDelegate = dataDisplayDelegate;
        this.searchableViewInternal = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.SearchableView.SearchableView(this, null);
        this.searchableViewInternal.setPlaceholder(i18nString(UIStrings.find), i18nString(UIStrings.find));
        this.searchableViewInternal.show(this.element);
        this.splitWidget = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.SplitWidget.SplitWidget(false, true, 'heap-snapshot-split-view-state', 200, 200);
        this.splitWidget.show(this.searchableViewInternal.element);
        const heapProfilerModel = profile.heapProfilerModel();
        this.containmentDataGrid = new _HeapSnapshotDataGrids_js__WEBPACK_IMPORTED_MODULE_14__.HeapSnapshotContainmentDataGrid(heapProfilerModel, this, /* displayName */ i18nString(UIStrings.containment));
        this.containmentDataGrid.addEventListener("SelectedNode" /* DataGrid.DataGrid.Events.SelectedNode */, this.selectionChanged, this);
        this.containmentWidget = this.containmentDataGrid.asWidget();
        this.containmentWidget.setMinimumSize(50, 25);
        this.statisticsView = new HeapSnapshotStatisticsView();
        this.constructorsDataGrid = new _HeapSnapshotDataGrids_js__WEBPACK_IMPORTED_MODULE_14__.HeapSnapshotConstructorsDataGrid(heapProfilerModel, this);
        this.constructorsDataGrid.addEventListener("SelectedNode" /* DataGrid.DataGrid.Events.SelectedNode */, this.selectionChanged, this);
        this.constructorsWidget = this.constructorsDataGrid.asWidget();
        this.constructorsWidget.setMinimumSize(50, 25);
        this.constructorsWidget.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_13__.pane('heap-snapshot.constructors-view').track({ resize: true })}`);
        this.diffDataGrid = new _HeapSnapshotDataGrids_js__WEBPACK_IMPORTED_MODULE_14__.HeapSnapshotDiffDataGrid(heapProfilerModel, this);
        this.diffDataGrid.addEventListener("SelectedNode" /* DataGrid.DataGrid.Events.SelectedNode */, this.selectionChanged, this);
        this.diffWidget = this.diffDataGrid.asWidget();
        this.diffWidget.setMinimumSize(50, 25);
        this.allocationDataGrid = null;
        if (isHeapTimeline && hasAllocationStacks) {
            this.allocationDataGrid = new _HeapSnapshotDataGrids_js__WEBPACK_IMPORTED_MODULE_14__.AllocationDataGrid(heapProfilerModel, this);
            this.allocationDataGrid.addEventListener("SelectedNode" /* DataGrid.DataGrid.Events.SelectedNode */, this.onSelectAllocationNode, this);
            this.allocationWidget = this.allocationDataGrid.asWidget();
            this.allocationWidget.setMinimumSize(50, 25);
            this.allocationStackView = new HeapAllocationStackView(heapProfilerModel);
            this.allocationStackView.setMinimumSize(50, 25);
            this.tabbedPane = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.TabbedPane.TabbedPane();
        }
        this.retainmentDataGrid = new _HeapSnapshotDataGrids_js__WEBPACK_IMPORTED_MODULE_14__.HeapSnapshotRetainmentDataGrid(heapProfilerModel, this);
        this.retainmentWidget = this.retainmentDataGrid.asWidget();
        this.retainmentWidget.setMinimumSize(50, 21);
        this.retainmentWidget.element.classList.add('retaining-paths-view');
        this.retainmentWidget.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_13__.pane('heap-snapshot.retaining-paths-view').track({ resize: true })}`);
        let splitWidgetResizer;
        if (this.allocationStackView) {
            this.tabbedPane = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.TabbedPane.TabbedPane();
            this.tabbedPane.appendTab('retainers', i18nString(UIStrings.retainers), this.retainmentWidget);
            this.tabbedPane.appendTab('allocation-stack', i18nString(UIStrings.allocationStack), this.allocationStackView);
            splitWidgetResizer = this.tabbedPane.headerElement();
            this.objectDetailsView = this.tabbedPane;
        }
        else {
            const retainmentViewHeader = document.createElement('div');
            retainmentViewHeader.classList.add('heap-snapshot-view-resizer');
            const retainingPathsTitleDiv = retainmentViewHeader.createChild('div', 'title');
            retainmentViewHeader.createChild('div', 'verticalResizerIcon');
            const retainingPathsTitle = retainingPathsTitleDiv.createChild('span');
            retainingPathsTitle.textContent = i18nString(UIStrings.retainers);
            splitWidgetResizer = retainmentViewHeader;
            this.objectDetailsView = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.Widget.VBox();
            this.objectDetailsView.element.appendChild(retainmentViewHeader);
            this.retainmentWidget.show(this.objectDetailsView.element);
        }
        this.splitWidget.hideDefaultResizer();
        this.splitWidget.installResizer(splitWidgetResizer);
        this.retainmentDataGrid.addEventListener("SelectedNode" /* DataGrid.DataGrid.Events.SelectedNode */, this.inspectedObjectChanged, this);
        this.retainmentDataGrid.reset();
        this.perspectives = [];
        this.comparisonPerspective = new ComparisonPerspective();
        this.perspectives.push(new SummaryPerspective());
        if (profile.profileType() !== _ProfileTypeRegistry_js__WEBPACK_IMPORTED_MODULE_21__.instance.trackingHeapSnapshotProfileType) {
            this.perspectives.push(this.comparisonPerspective);
        }
        this.perspectives.push(new ContainmentPerspective());
        if (this.allocationWidget) {
            this.perspectives.push(new AllocationPerspective());
        }
        this.perspectives.push(new StatisticsPerspective());
        this.perspectiveSelect = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.Toolbar.ToolbarComboBox(this.onSelectedPerspectiveChanged.bind(this), i18nString(UIStrings.perspective), undefined, 'profiler.heap-snapshot-perspective');
        this.updatePerspectiveOptions();
        this.baseSelect = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.Toolbar.ToolbarComboBox(this.changeBase.bind(this), i18nString(UIStrings.baseSnapshot), undefined, 'profiler.heap-snapshot-base');
        this.baseSelect.setVisible(false);
        this.updateBaseOptions();
        this.filterSelect = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.Toolbar.ToolbarComboBox(this.changeFilter.bind(this), i18nString(UIStrings.filter), undefined, 'profiler.heap-snapshot-filter');
        this.filterSelect.setVisible(false);
        this.updateFilterOptions();
        this.classNameFilter = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.Toolbar.ToolbarFilter(i18nString(UIStrings.filterByClass));
        this.classNameFilter.setVisible(false);
        this.constructorsDataGrid.setNameFilter(this.classNameFilter);
        this.diffDataGrid.setNameFilter(this.classNameFilter);
        this.selectedSizeText = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.Toolbar.ToolbarText();
        const restoreIgnoredRetainers = i18nString(UIStrings.restoreIgnoredRetainers);
        this.resetRetainersButton =
            new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.Toolbar.ToolbarButton(restoreIgnoredRetainers, 'clear-list', restoreIgnoredRetainers);
        this.resetRetainersButton.setVisible(false);
        this.resetRetainersButton.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */, async () => {
            // The reset retainers button acts upon whichever snapshot is currently shown in the Retainers pane.
            await this.retainmentDataGrid.snapshot?.unignoreAllNodesInRetainersView();
            await this.retainmentDataGrid.dataSourceChanged();
        });
        this.retainmentDataGrid.resetRetainersButton = this.resetRetainersButton;
        this.popoverHelper = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.PopoverHelper.PopoverHelper(this.element, this.getPopoverRequest.bind(this), 'profiler.heap-snapshot-object');
        this.popoverHelper.setDisableOnClick(true);
        this.popoverHelper.setHasPadding(true);
        this.element.addEventListener('scroll', this.popoverHelper.hidePopover.bind(this.popoverHelper), true);
        this.currentPerspectiveIndex = 0;
        this.currentPerspective = this.perspectives[0];
        this.currentPerspective.activate(this);
        this.dataGrid = this.currentPerspective.masterGrid(this);
        void this.populate();
        this.searchThrottler = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Throttler.Throttler(0);
        for (const existingProfile of this.profiles()) {
            existingProfile.addEventListener("ProfileTitleChanged" /* ProfileHeaderEvents.ProfileTitleChanged */, this.updateControls, this);
        }
    }
    createOverview() {
        const profileType = this.profile.profileType();
        this.trackingOverviewGrid = new _HeapTimelineOverview_js__WEBPACK_IMPORTED_MODULE_17__.HeapTimelineOverview();
        this.trackingOverviewGrid.addEventListener("IdsRangeChanged" /* Events.IdsRangeChanged */, this.onIdsRangeChanged.bind(this));
        if (!this.profile.fromFile() && profileType.profileBeingRecorded() === this.profile) {
            profileType
                .addEventListener("HeapStatsUpdate" /* TrackingHeapSnapshotProfileTypeEvents.HeapStatsUpdate */, this.onHeapStatsUpdate, this);
            profileType
                .addEventListener("TrackingStopped" /* TrackingHeapSnapshotProfileTypeEvents.TrackingStopped */, this.onStopTracking, this);
            this.trackingOverviewGrid.start();
        }
    }
    onStopTracking() {
        const profileType = this.profile.profileType();
        profileType.removeEventListener("HeapStatsUpdate" /* TrackingHeapSnapshotProfileTypeEvents.HeapStatsUpdate */, this.onHeapStatsUpdate, this);
        profileType.removeEventListener("TrackingStopped" /* TrackingHeapSnapshotProfileTypeEvents.TrackingStopped */, this.onStopTracking, this);
        if (this.trackingOverviewGrid) {
            this.trackingOverviewGrid.stop();
        }
    }
    onHeapStatsUpdate({ data: samples }) {
        if (this.trackingOverviewGrid) {
            this.trackingOverviewGrid.setSamples(samples);
        }
    }
    searchableView() {
        return this.searchableViewInternal;
    }
    showProfile(profile) {
        return this.parentDataDisplayDelegate.showProfile(profile);
    }
    showObject(snapshotObjectId, perspectiveName) {
        if (Number(snapshotObjectId) <= this.profile.maxJSObjectId) {
            void this.selectLiveObject(perspectiveName, snapshotObjectId);
        }
        else {
            this.parentDataDisplayDelegate.showObject(snapshotObjectId, perspectiveName);
        }
    }
    async linkifyObject(nodeIndex) {
        const heapProfilerModel = this.profile.heapProfilerModel();
        // heapProfilerModel is null if snapshot was loaded from file
        if (!heapProfilerModel) {
            return null;
        }
        const location = await this.profile.getLocation(nodeIndex);
        if (!location) {
            return null;
        }
        const debuggerModel = heapProfilerModel.runtimeModel().debuggerModel();
        const rawLocation = debuggerModel.createRawLocationByScriptId(String(location.scriptId), location.lineNumber, location.columnNumber);
        if (!rawLocation) {
            return null;
        }
        const script = rawLocation.script();
        const sourceURL = script && script.sourceURL;
        return sourceURL && this.linkifier ? this.linkifier.linkifyRawLocation(rawLocation, sourceURL) : null;
    }
    async populate() {
        const heapSnapshotProxy = await this.profile.loadPromise;
        void this.retrieveStatistics(heapSnapshotProxy);
        if (this.dataGrid) {
            void this.dataGrid.setDataSource(heapSnapshotProxy, 0);
        }
        if (this.profile.profileType().id === TrackingHeapSnapshotProfileType.TypeId && this.profile.fromFile()) {
            const samples = await heapSnapshotProxy.getSamples();
            if (samples) {
                console.assert(Boolean(samples.timestamps.length));
                const profileSamples = new _HeapTimelineOverview_js__WEBPACK_IMPORTED_MODULE_17__.Samples();
                profileSamples.sizes = samples.sizes;
                profileSamples.ids = samples.lastAssignedIds;
                profileSamples.timestamps = samples.timestamps;
                profileSamples.max = samples.sizes;
                profileSamples.totalTime = Math.max(samples.timestamps[samples.timestamps.length - 1] || 0, 10000);
                if (this.trackingOverviewGrid) {
                    this.trackingOverviewGrid.setSamples(profileSamples);
                }
            }
        }
        const list = this.profiles();
        const profileIndex = list.indexOf(this.profile);
        this.baseSelect.setSelectedIndex(Math.max(0, profileIndex - 1));
        if (this.trackingOverviewGrid) {
            this.trackingOverviewGrid.updateGrid();
        }
    }
    async retrieveStatistics(heapSnapshotProxy) {
        const statistics = await heapSnapshotProxy.getStatistics();
        const records = [
            { value: statistics.code, color: '#f77', title: i18nString(UIStrings.code) },
            { value: statistics.strings, color: '#5e5', title: i18nString(UIStrings.strings) },
            { value: statistics.jsArrays, color: '#7af', title: i18nString(UIStrings.jsArrays) },
            { value: statistics.native, color: '#fc5', title: i18nString(UIStrings.typedArrays) },
            { value: statistics.system, color: '#98f', title: i18nString(UIStrings.systemObjects) },
        ];
        this.statisticsView.setTotalAndRecords(statistics.total, records);
        return statistics;
    }
    onIdsRangeChanged(event) {
        const { minId, maxId } = event.data;
        this.selectedSizeText.setText(i18nString(UIStrings.selectedSizeS, { PH1: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.NumberUtilities.bytesToString(event.data.size) }));
        if (this.constructorsDataGrid.snapshot) {
            this.constructorsDataGrid.setSelectionRange(minId, maxId);
        }
    }
    async toolbarItems() {
        const result = [this.perspectiveSelect, this.classNameFilter];
        if (this.profile.profileType() !== _ProfileTypeRegistry_js__WEBPACK_IMPORTED_MODULE_21__.instance.trackingHeapSnapshotProfileType) {
            result.push(this.baseSelect, this.filterSelect);
        }
        result.push(this.selectedSizeText);
        result.push(this.resetRetainersButton);
        return result;
    }
    willHide() {
        this.currentSearchResultIndex = -1;
        this.popoverHelper.hidePopover();
    }
    supportsCaseSensitiveSearch() {
        return true;
    }
    supportsRegexSearch() {
        return false;
    }
    onSearchCanceled() {
        this.currentSearchResultIndex = -1;
        this.searchResults = [];
    }
    selectRevealedNode(node) {
        if (node) {
            node.select();
        }
    }
    performSearch(searchConfig, shouldJump, jumpBackwards) {
        const nextQuery = new _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_7__.HeapSnapshotModel.SearchConfig(searchConfig.query.trim(), searchConfig.caseSensitive, searchConfig.isRegex, shouldJump, jumpBackwards || false);
        void this.searchThrottler.schedule(this.performSearchInternal.bind(this, nextQuery));
    }
    async performSearchInternal(nextQuery) {
        // Call onSearchCanceled since it will reset everything we need before doing a new search.
        this.onSearchCanceled();
        if (!this.currentPerspective.supportsSearch()) {
            return;
        }
        this.currentQuery = nextQuery;
        const query = nextQuery.query.trim();
        if (!query) {
            return;
        }
        if (query.charAt(0) === '@') {
            const snapshotNodeId = parseInt(query.substring(1), 10);
            if (isNaN(snapshotNodeId)) {
                return;
            }
            if (!this.dataGrid) {
                return;
            }
            const node = await this.dataGrid.revealObjectByHeapSnapshotId(String(snapshotNodeId));
            this.selectRevealedNode(node);
            return;
        }
        if (!this.profile.snapshotProxy || !this.dataGrid) {
            return;
        }
        const filter = this.dataGrid.nodeFilter();
        this.searchResults = filter ? await this.profile.snapshotProxy.search(this.currentQuery, filter) : [];
        this.searchableViewInternal.updateSearchMatchesCount(this.searchResults.length);
        if (this.searchResults.length) {
            this.currentSearchResultIndex = nextQuery.jumpBackward ? this.searchResults.length - 1 : 0;
        }
        await this.jumpToSearchResult(this.currentSearchResultIndex);
    }
    jumpToNextSearchResult() {
        if (!this.searchResults.length) {
            return;
        }
        this.currentSearchResultIndex = (this.currentSearchResultIndex + 1) % this.searchResults.length;
        void this.searchThrottler.schedule(this.jumpToSearchResult.bind(this, this.currentSearchResultIndex));
    }
    jumpToPreviousSearchResult() {
        if (!this.searchResults.length) {
            return;
        }
        this.currentSearchResultIndex =
            (this.currentSearchResultIndex + this.searchResults.length - 1) % this.searchResults.length;
        void this.searchThrottler.schedule(this.jumpToSearchResult.bind(this, this.currentSearchResultIndex));
    }
    async jumpToSearchResult(searchResultIndex) {
        this.searchableViewInternal.updateCurrentMatchIndex(searchResultIndex);
        if (searchResultIndex === -1) {
            return;
        }
        if (!this.dataGrid) {
            return;
        }
        const node = await this.dataGrid.revealObjectByHeapSnapshotId(String(this.searchResults[searchResultIndex]));
        this.selectRevealedNode(node);
    }
    refreshVisibleData() {
        if (!this.dataGrid) {
            return;
        }
        let child = this.dataGrid.rootNode().children[0];
        while (child) {
            child.refresh();
            child = child.traverseNextNode(false, null, true);
        }
    }
    changeBase() {
        if (this.baseProfile === this.profiles()[this.baseSelect.selectedIndex()]) {
            return;
        }
        this.baseProfile = this.profiles()[this.baseSelect.selectedIndex()];
        const dataGrid = this.dataGrid;
        // Change set base data source only if main data source is already set.
        if (dataGrid.snapshot) {
            void this.baseProfile.loadPromise.then(dataGrid.setBaseDataSource.bind(dataGrid));
        }
        if (!this.currentQuery || !this.searchResults) {
            return;
        }
        // The current search needs to be performed again. First negate out previous match
        // count by calling the search finished callback with a negative number of matches.
        // Then perform the search again with the same query and callback.
        this.performSearch(this.currentQuery, false);
    }
    static ALWAYS_AVAILABLE_FILTERS = [
        { uiName: i18nString(UIStrings.duplicatedStrings), filterName: 'duplicatedStrings' },
        { uiName: i18nString(UIStrings.objectsRetainedByDetachedDomNodes), filterName: 'objectsRetainedByDetachedDomNodes' },
        { uiName: i18nString(UIStrings.objectsRetainedByConsole), filterName: 'objectsRetainedByConsole' },
    ];
    changeFilter() {
        let selectedIndex = this.filterSelect.selectedIndex();
        let filterName = undefined;
        const indexOfFirstAlwaysAvailableFilter = this.filterSelect.size() - HeapSnapshotView.ALWAYS_AVAILABLE_FILTERS.length;
        if (selectedIndex >= indexOfFirstAlwaysAvailableFilter) {
            filterName =
                HeapSnapshotView.ALWAYS_AVAILABLE_FILTERS[selectedIndex - indexOfFirstAlwaysAvailableFilter].filterName;
            selectedIndex = 0;
        }
        const profileIndex = selectedIndex - 1;
        if (!this.dataGrid) {
            return;
        }
        this.dataGrid
            .filterSelectIndexChanged(this.profiles(), profileIndex, filterName);
        if (!this.currentQuery || !this.searchResults) {
            return;
        }
        // The current search needs to be performed again. First negate out previous match
        // count by calling the search finished callback with a negative number of matches.
        // Then perform the search again with the same query and callback.
        this.performSearch(this.currentQuery, false);
    }
    profiles() {
        return this.profile.profileType().getProfiles();
    }
    selectionChanged(event) {
        const selectedNode = event.data;
        this.setSelectedNodeForDetailsView(selectedNode);
        this.inspectedObjectChanged(event);
    }
    onSelectAllocationNode(event) {
        const selectedNode = event.data;
        this.constructorsDataGrid.setAllocationNodeId(selectedNode.allocationNodeId());
        this.setSelectedNodeForDetailsView(null);
    }
    inspectedObjectChanged(event) {
        const selectedNode = event.data;
        const heapProfilerModel = this.profile.heapProfilerModel();
        if (heapProfilerModel && selectedNode instanceof _HeapSnapshotGridNodes_js__WEBPACK_IMPORTED_MODULE_15__.HeapSnapshotGenericObjectNode) {
            void heapProfilerModel.addInspectedHeapObject(String(selectedNode.snapshotNodeId));
        }
    }
    setSelectedNodeForDetailsView(nodeItem) {
        const dataSource = nodeItem && nodeItem.retainersDataSource();
        if (dataSource) {
            void this.retainmentDataGrid.setDataSource(dataSource.snapshot, dataSource.snapshotNodeIndex, dataSource.snapshotNodeId);
            if (this.allocationStackView) {
                void this.allocationStackView.setAllocatedObject(dataSource.snapshot, dataSource.snapshotNodeIndex);
            }
        }
        else {
            if (this.allocationStackView) {
                this.allocationStackView.clear();
            }
            this.retainmentDataGrid.reset();
        }
    }
    async changePerspectiveAndWait(perspectiveTitle) {
        const perspectiveIndex = this.perspectives.findIndex(perspective => perspective.title() === perspectiveTitle);
        if (perspectiveIndex === -1 || this.currentPerspectiveIndex === perspectiveIndex) {
            return;
        }
        const dataGrid = this.perspectives[perspectiveIndex].masterGrid(this);
        if (!dataGrid) {
            return;
        }
        const promise = dataGrid.once(_HeapSnapshotDataGrids_js__WEBPACK_IMPORTED_MODULE_14__.HeapSnapshotSortableDataGridEvents.ContentShown);
        const option = this.perspectiveSelect.options().find(option => option.value === String(perspectiveIndex));
        this.perspectiveSelect.select(option);
        this.changePerspective(perspectiveIndex);
        await promise;
    }
    async updateDataSourceAndView() {
        const dataGrid = this.dataGrid;
        if (!dataGrid || dataGrid.snapshot) {
            return;
        }
        const snapshotProxy = await this.profile.loadPromise;
        if (this.dataGrid !== dataGrid) {
            return;
        }
        if (dataGrid.snapshot !== snapshotProxy) {
            void dataGrid.setDataSource(snapshotProxy, 0);
        }
        if (dataGrid !== this.diffDataGrid) {
            return;
        }
        if (!this.baseProfile) {
            this.baseProfile = this.profiles()[this.baseSelect.selectedIndex()];
        }
        const baseSnapshotProxy = await this.baseProfile.loadPromise;
        if (this.diffDataGrid.baseSnapshot !== baseSnapshotProxy) {
            this.diffDataGrid.setBaseDataSource(baseSnapshotProxy);
        }
    }
    onSelectedPerspectiveChanged(event) {
        this.changePerspective(Number(event.target.selectedOptions[0].value));
    }
    changePerspective(selectedIndex) {
        if (selectedIndex === this.currentPerspectiveIndex) {
            return;
        }
        this.currentPerspectiveIndex = selectedIndex;
        this.currentPerspective.deactivate(this);
        const perspective = this.perspectives[selectedIndex];
        this.currentPerspective = perspective;
        this.dataGrid = perspective.masterGrid(this);
        perspective.activate(this);
        this.refreshVisibleData();
        if (this.dataGrid) {
            this.dataGrid.updateWidths();
        }
        void this.updateDataSourceAndView();
        if (!this.currentQuery || !this.searchResults) {
            return;
        }
        // The current search needs to be performed again. First negate out previous match
        // count by calling the search finished callback with a negative number of matches.
        // Then perform the search again the with same query and callback.
        this.performSearch(this.currentQuery, false);
    }
    async selectLiveObject(perspectiveName, snapshotObjectId) {
        await this.changePerspectiveAndWait(perspectiveName);
        if (!this.dataGrid) {
            return;
        }
        const node = await this.dataGrid.revealObjectByHeapSnapshotId(snapshotObjectId);
        if (node) {
            node.select();
        }
        else {
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Console.Console.instance().error('Cannot find corresponding heap snapshot node');
        }
    }
    getPopoverRequest(event) {
        const span = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.UIUtils.enclosingNodeOrSelfWithNodeName(event.target, 'span');
        const row = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.UIUtils.enclosingNodeOrSelfWithNodeName(event.target, 'tr');
        if (!row) {
            return null;
        }
        if (!this.dataGrid) {
            return null;
        }
        const node = this.dataGrid.dataGridNodeFromNode(row) || this.containmentDataGrid.dataGridNodeFromNode(row) ||
            this.constructorsDataGrid.dataGridNodeFromNode(row) || this.diffDataGrid.dataGridNodeFromNode(row) ||
            (this.allocationDataGrid && this.allocationDataGrid.dataGridNodeFromNode(row)) ||
            this.retainmentDataGrid.dataGridNodeFromNode(row);
        const heapProfilerModel = this.profile.heapProfilerModel();
        if (!node || !span || !heapProfilerModel) {
            return null;
        }
        let objectPopoverHelper;
        return {
            // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
            // @ts-expect-error
            box: span.boxInWindow(),
            show: async (popover) => {
                if (!heapProfilerModel) {
                    return false;
                }
                const remoteObject = await node.queryObjectContent(heapProfilerModel, 'popover');
                if (remoteObject instanceof _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.RemoteObject.RemoteObject) {
                    objectPopoverHelper =
                        await _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_9__.ObjectPopoverHelper.ObjectPopoverHelper.buildObjectPopover(remoteObject, popover);
                }
                else {
                    objectPopoverHelper = _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_9__.ObjectPopoverHelper.ObjectPopoverHelper.buildDescriptionPopover(remoteObject.description, remoteObject.link, popover);
                }
                if (!objectPopoverHelper) {
                    heapProfilerModel.runtimeModel().releaseObjectGroup('popover');
                    return false;
                }
                return true;
            },
            hide: () => {
                heapProfilerModel.runtimeModel().releaseObjectGroup('popover');
                if (objectPopoverHelper) {
                    objectPopoverHelper.dispose();
                }
            },
        };
    }
    updatePerspectiveOptions() {
        const multipleSnapshots = this.profiles().length > 1;
        this.perspectiveSelect.removeOptions();
        this.perspectives.forEach((perspective, index) => {
            if (multipleSnapshots || perspective !== this.comparisonPerspective) {
                const option = this.perspectiveSelect.createOption(perspective.title(), String(index));
                if (perspective === this.currentPerspective) {
                    this.perspectiveSelect.select(option);
                }
            }
        });
    }
    updateBaseOptions() {
        const list = this.profiles();
        const selectedIndex = this.baseSelect.selectedIndex();
        this.baseSelect.removeOptions();
        for (const item of list) {
            this.baseSelect.createOption(item.title);
        }
        if (selectedIndex > -1) {
            this.baseSelect.setSelectedIndex(selectedIndex);
        }
    }
    updateFilterOptions() {
        const list = this.profiles();
        const selectedIndex = this.filterSelect.selectedIndex();
        const originalSize = this.filterSelect.size();
        this.filterSelect.removeOptions();
        this.filterSelect.createOption(i18nString(UIStrings.allObjects));
        for (let i = 0; i < list.length; ++i) {
            let title;
            if (!i) {
                title = i18nString(UIStrings.objectsAllocatedBeforeS, { PH1: list[i].title });
            }
            else {
                title = i18nString(UIStrings.objectsAllocatedBetweenSAndS, { PH1: list[i - 1].title, PH2: list[i].title });
            }
            this.filterSelect.createOption(title);
        }
        // Create a dividing line using em dashes.
        const dividerIndex = this.filterSelect.size();
        const divider = this.filterSelect.createOption('\u2014'.repeat(18));
        divider.disabled = true;
        for (const filter of HeapSnapshotView.ALWAYS_AVAILABLE_FILTERS) {
            this.filterSelect.createOption(filter.uiName);
        }
        const newSize = this.filterSelect.size();
        if (selectedIndex > -1) {
            const distanceFromEnd = originalSize - selectedIndex;
            if (distanceFromEnd <= HeapSnapshotView.ALWAYS_AVAILABLE_FILTERS.length) {
                // If one of the always-available filters was selected, then select the
                // same filter again even though its index may have changed.
                this.filterSelect.setSelectedIndex(newSize - distanceFromEnd);
            }
            else if (selectedIndex >= dividerIndex) {
                // If the select list is now shorter than it was, such that we can't
                // keep the index unchanged, set it to -1, which causes it to be blank.
                this.filterSelect.setSelectedIndex(-1);
            }
            else {
                this.filterSelect.setSelectedIndex(selectedIndex);
            }
        }
    }
    updateControls() {
        this.updatePerspectiveOptions();
        this.updateBaseOptions();
        this.updateFilterOptions();
    }
    onReceiveSnapshot(event) {
        this.updateControls();
        const profile = event.data;
        profile.addEventListener("ProfileTitleChanged" /* ProfileHeaderEvents.ProfileTitleChanged */, this.updateControls, this);
    }
    onProfileHeaderRemoved(event) {
        const profile = event.data;
        profile.removeEventListener("ProfileTitleChanged" /* ProfileHeaderEvents.ProfileTitleChanged */, this.updateControls, this);
        if (this.profile === profile) {
            this.detach();
            this.profile.profileType().removeEventListener("SnapshotReceived" /* HeapSnapshotProfileTypeEvents.SnapshotReceived */, this.onReceiveSnapshot, this);
            this.profile.profileType().removeEventListener("remove-profile-header" /* ProfileTypeEvents.RemoveProfileHeader */, this.onProfileHeaderRemoved, this);
            this.dispose();
        }
        else {
            this.updateControls();
        }
    }
    dispose() {
        this.linkifier.dispose();
        this.popoverHelper.dispose();
        if (this.allocationStackView) {
            this.allocationStackView.clear();
            if (this.allocationDataGrid) {
                this.allocationDataGrid.dispose();
            }
        }
        this.onStopTracking();
        if (this.trackingOverviewGrid) {
            this.trackingOverviewGrid.removeEventListener("IdsRangeChanged" /* Events.IdsRangeChanged */, this.onIdsRangeChanged.bind(this));
        }
    }
}
class Perspective {
    titleInternal;
    constructor(title) {
        this.titleInternal = title;
    }
    activate(_heapSnapshotView) {
    }
    deactivate(heapSnapshotView) {
        heapSnapshotView.baseSelect.setVisible(false);
        heapSnapshotView.filterSelect.setVisible(false);
        heapSnapshotView.classNameFilter.setVisible(false);
        if (heapSnapshotView.trackingOverviewGrid) {
            heapSnapshotView.trackingOverviewGrid.detach();
        }
        if (heapSnapshotView.allocationWidget) {
            heapSnapshotView.allocationWidget.detach();
        }
        if (heapSnapshotView.statisticsView) {
            heapSnapshotView.statisticsView.detach();
        }
        heapSnapshotView.splitWidget.detach();
        heapSnapshotView.splitWidget.detachChildWidgets();
    }
    masterGrid(_heapSnapshotView) {
        return null;
    }
    title() {
        return this.titleInternal;
    }
    supportsSearch() {
        return false;
    }
}
class SummaryPerspective extends Perspective {
    constructor() {
        super(i18nString(UIStrings.summary));
    }
    activate(heapSnapshotView) {
        heapSnapshotView.splitWidget.setMainWidget(heapSnapshotView.constructorsWidget);
        heapSnapshotView.splitWidget.setSidebarWidget(heapSnapshotView.objectDetailsView);
        heapSnapshotView.splitWidget.show(heapSnapshotView.searchableViewInternal.element);
        heapSnapshotView.filterSelect.setVisible(true);
        heapSnapshotView.classNameFilter.setVisible(true);
        if (!heapSnapshotView.trackingOverviewGrid) {
            return;
        }
        heapSnapshotView.trackingOverviewGrid.show(heapSnapshotView.searchableViewInternal.element, heapSnapshotView.splitWidget.element);
        heapSnapshotView.trackingOverviewGrid.update();
        heapSnapshotView.trackingOverviewGrid.updateGrid();
    }
    masterGrid(heapSnapshotView) {
        return heapSnapshotView.constructorsDataGrid;
    }
    supportsSearch() {
        return true;
    }
}
class ComparisonPerspective extends Perspective {
    constructor() {
        super(i18nString(UIStrings.comparison));
    }
    activate(heapSnapshotView) {
        heapSnapshotView.splitWidget.setMainWidget(heapSnapshotView.diffWidget);
        heapSnapshotView.splitWidget.setSidebarWidget(heapSnapshotView.objectDetailsView);
        heapSnapshotView.splitWidget.show(heapSnapshotView.searchableViewInternal.element);
        heapSnapshotView.baseSelect.setVisible(true);
        heapSnapshotView.classNameFilter.setVisible(true);
    }
    masterGrid(heapSnapshotView) {
        return heapSnapshotView.diffDataGrid;
    }
    supportsSearch() {
        return true;
    }
}
class ContainmentPerspective extends Perspective {
    constructor() {
        super(i18nString(UIStrings.containment));
    }
    activate(heapSnapshotView) {
        heapSnapshotView.splitWidget.setMainWidget(heapSnapshotView.containmentWidget);
        heapSnapshotView.splitWidget.setSidebarWidget(heapSnapshotView.objectDetailsView);
        heapSnapshotView.splitWidget.show(heapSnapshotView.searchableViewInternal.element);
    }
    masterGrid(heapSnapshotView) {
        return heapSnapshotView.containmentDataGrid;
    }
}
class AllocationPerspective extends Perspective {
    allocationSplitWidget;
    constructor() {
        super(i18nString(UIStrings.allocation));
        this.allocationSplitWidget =
            new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.SplitWidget.SplitWidget(false, true, 'heap-snapshot-allocation-split-view-state', 200, 200);
        this.allocationSplitWidget.setSidebarWidget(new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.Widget.VBox());
    }
    activate(heapSnapshotView) {
        if (heapSnapshotView.allocationWidget) {
            this.allocationSplitWidget.setMainWidget(heapSnapshotView.allocationWidget);
        }
        heapSnapshotView.splitWidget.setMainWidget(heapSnapshotView.constructorsWidget);
        heapSnapshotView.splitWidget.setSidebarWidget(heapSnapshotView.objectDetailsView);
        const allocatedObjectsView = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.Widget.VBox();
        const resizer = document.createElement('div');
        resizer.classList.add('heap-snapshot-view-resizer');
        const title = resizer.createChild('div', 'title').createChild('span');
        resizer.createChild('div', 'verticalResizerIcon');
        title.textContent = i18nString(UIStrings.liveObjects);
        this.allocationSplitWidget.hideDefaultResizer();
        this.allocationSplitWidget.installResizer(resizer);
        allocatedObjectsView.element.appendChild(resizer);
        heapSnapshotView.splitWidget.show(allocatedObjectsView.element);
        this.allocationSplitWidget.setSidebarWidget(allocatedObjectsView);
        this.allocationSplitWidget.show(heapSnapshotView.searchableViewInternal.element);
        heapSnapshotView.constructorsDataGrid.clear();
        if (heapSnapshotView.allocationDataGrid) {
            const selectedNode = heapSnapshotView.allocationDataGrid.selectedNode;
            if (selectedNode) {
                heapSnapshotView.constructorsDataGrid.setAllocationNodeId(selectedNode.allocationNodeId());
            }
        }
    }
    deactivate(heapSnapshotView) {
        this.allocationSplitWidget.detach();
        super.deactivate(heapSnapshotView);
    }
    masterGrid(heapSnapshotView) {
        return heapSnapshotView.allocationDataGrid;
    }
}
class StatisticsPerspective extends Perspective {
    constructor() {
        super(i18nString(UIStrings.statistics));
    }
    activate(heapSnapshotView) {
        heapSnapshotView.statisticsView.show(heapSnapshotView.searchableViewInternal.element);
    }
    masterGrid(_heapSnapshotView) {
        return null;
    }
}
class HeapSnapshotProfileType extends _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.eventMixin(_ProfileHeader_js__WEBPACK_IMPORTED_MODULE_19__.ProfileType) {
    exposeInternals;
    customContentInternal;
    constructor(id, title) {
        super(id || HeapSnapshotProfileType.TypeId, title || i18nString(UIStrings.heapSnapshot));
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().observeModels(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.HeapProfilerModel.HeapProfilerModel, this);
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.HeapProfilerModel.HeapProfilerModel, "ResetProfiles" /* SDK.HeapProfilerModel.Events.ResetProfiles */, this.resetProfiles, this);
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.HeapProfilerModel.HeapProfilerModel, "AddHeapSnapshotChunk" /* SDK.HeapProfilerModel.Events.AddHeapSnapshotChunk */, this.addHeapSnapshotChunk, this);
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.HeapProfilerModel.HeapProfilerModel, "ReportHeapSnapshotProgress" /* SDK.HeapProfilerModel.Events.ReportHeapSnapshotProgress */, this.reportHeapSnapshotProgress, this);
        this.exposeInternals = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('expose-internals', false);
        this.customContentInternal = null;
    }
    modelAdded(heapProfilerModel) {
        void heapProfilerModel.enable();
    }
    modelRemoved(_heapProfilerModel) {
    }
    getProfiles() {
        return super.getProfiles();
    }
    fileExtension() {
        return '.heapsnapshot';
    }
    get buttonTooltip() {
        return i18nString(UIStrings.takeHeapSnapshot);
    }
    isInstantProfile() {
        return true;
    }
    buttonClicked() {
        void this.takeHeapSnapshot();
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.ProfilesHeapProfileTaken);
        return false;
    }
    get treeItemTitle() {
        return i18nString(UIStrings.heapSnapshots);
    }
    get description() {
        return i18nString(UIStrings.heapSnapshotProfilesShowMemory);
    }
    customContent() {
        const showOptionToExposeInternalsInHeapSnapshot = _core_root_root_js__WEBPACK_IMPORTED_MODULE_4__.Runtime.experiments.isEnabled('show-option-tp-expose-internals-in-heap-snapshot');
        const omitParagraphElement = true;
        const exposeInternalsInHeapSnapshotCheckbox = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.SettingsUI.createSettingCheckbox(i18nString(UIStrings.exposeInternals), this.exposeInternals, omitParagraphElement);
        this.customContentInternal = exposeInternalsInHeapSnapshotCheckbox;
        return showOptionToExposeInternalsInHeapSnapshot ? exposeInternalsInHeapSnapshotCheckbox : null;
    }
    setCustomContentEnabled(enable) {
        if (this.customContentInternal) {
            this.customContentInternal.checkboxElement.disabled = !enable;
        }
    }
    createProfileLoadedFromFile(title) {
        return new HeapProfileHeader(null, this, title);
    }
    async takeHeapSnapshot() {
        if (this.profileBeingRecorded()) {
            return;
        }
        const heapProfilerModel = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.HeapProfilerModel.HeapProfilerModel);
        if (!heapProfilerModel) {
            return;
        }
        let profile = new HeapProfileHeader(heapProfilerModel, this);
        this.setProfileBeingRecorded(profile);
        this.addProfile(profile);
        profile.updateStatus(i18nString(UIStrings.snapshotting));
        await heapProfilerModel.takeHeapSnapshot({
            reportProgress: true,
            captureNumericValue: true,
            exposeInternals: this.exposeInternals.get(),
        });
        profile = this.profileBeingRecorded();
        if (!profile) {
            return;
        }
        profile.title = i18nString(UIStrings.snapshotD, { PH1: profile.uid });
        profile.finishLoad();
        this.setProfileBeingRecorded(null);
        this.dispatchEventToListeners("profile-complete" /* ProfileTypeEvents.ProfileComplete */, profile);
    }
    addHeapSnapshotChunk(event) {
        const profile = this.profileBeingRecorded();
        if (!profile) {
            return;
        }
        profile.transferChunk(event.data);
    }
    reportHeapSnapshotProgress(event) {
        const profile = this.profileBeingRecorded();
        if (!profile) {
            return;
        }
        const { done, total, finished } = event.data;
        profile.updateStatus(i18nString(UIStrings.percentagePlaceholder, { PH1: ((done / total) * 100).toFixed(0) }), true);
        if (finished) {
            profile.prepareToLoad();
        }
    }
    resetProfiles(event) {
        const heapProfilerModel = event.data;
        for (const profile of this.getProfiles()) {
            if (profile.heapProfilerModel() === heapProfilerModel) {
                this.removeProfile(profile);
            }
        }
    }
    snapshotReceived(profile) {
        if (this.profileBeingRecorded() === profile) {
            this.setProfileBeingRecorded(null);
        }
        this.dispatchEventToListeners("SnapshotReceived" /* HeapSnapshotProfileTypeEvents.SnapshotReceived */, profile);
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    static TypeId = 'HEAP';
    // TODO(crbug.com/1228674): Remove event string once its no longer used in web tests.
    // eslint-disable-next-line @typescript-eslint/naming-convention
    static SnapshotReceived = 'SnapshotReceived';
}
class TrackingHeapSnapshotProfileType extends _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.eventMixin(HeapSnapshotProfileType) {
    recordAllocationStacksSettingInternal;
    customContentInternal;
    recording;
    profileSamples;
    constructor() {
        super(TrackingHeapSnapshotProfileType.TypeId, i18nString(UIStrings.allocationInstrumentationOn));
        this.recordAllocationStacksSettingInternal =
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('record-allocation-stacks', false);
        this.customContentInternal = null;
        this.recording = false;
    }
    modelAdded(heapProfilerModel) {
        super.modelAdded(heapProfilerModel);
        heapProfilerModel.addEventListener("HeapStatsUpdate" /* SDK.HeapProfilerModel.Events.HeapStatsUpdate */, this.heapStatsUpdate, this);
        heapProfilerModel.addEventListener("LastSeenObjectId" /* SDK.HeapProfilerModel.Events.LastSeenObjectId */, this.lastSeenObjectId, this);
    }
    modelRemoved(heapProfilerModel) {
        super.modelRemoved(heapProfilerModel);
        heapProfilerModel.removeEventListener("HeapStatsUpdate" /* SDK.HeapProfilerModel.Events.HeapStatsUpdate */, this.heapStatsUpdate, this);
        heapProfilerModel.removeEventListener("LastSeenObjectId" /* SDK.HeapProfilerModel.Events.LastSeenObjectId */, this.lastSeenObjectId, this);
    }
    heapStatsUpdate(event) {
        if (!this.profileSamples) {
            return;
        }
        const samples = event.data;
        let index;
        for (let i = 0; i < samples.length; i += 3) {
            index = samples[i];
            const size = samples[i + 2];
            this.profileSamples.sizes[index] = size;
            if (!this.profileSamples.max[index]) {
                this.profileSamples.max[index] = size;
            }
        }
    }
    lastSeenObjectId(event) {
        const profileSamples = this.profileSamples;
        if (!profileSamples) {
            return;
        }
        const { lastSeenObjectId, timestamp } = event.data;
        const currentIndex = Math.max(profileSamples.ids.length, profileSamples.max.length - 1);
        profileSamples.ids[currentIndex] = lastSeenObjectId;
        if (!profileSamples.max[currentIndex]) {
            profileSamples.max[currentIndex] = 0;
            profileSamples.sizes[currentIndex] = 0;
        }
        profileSamples.timestamps[currentIndex] = timestamp;
        if (profileSamples.totalTime < timestamp - profileSamples.timestamps[0]) {
            profileSamples.totalTime *= 2;
        }
        if (this.profileSamples) {
            this.dispatchEventToListeners("HeapStatsUpdate" /* TrackingHeapSnapshotProfileTypeEvents.HeapStatsUpdate */, this.profileSamples);
        }
        const profile = this.profileBeingRecorded();
        if (profile) {
            profile.updateStatus(null, true);
        }
    }
    hasTemporaryView() {
        return true;
    }
    get buttonTooltip() {
        return this.recording ? i18nString(UIStrings.stopRecordingHeapProfile) :
            i18nString(UIStrings.startRecordingHeapProfile);
    }
    isInstantProfile() {
        return false;
    }
    buttonClicked() {
        return this.toggleRecording();
    }
    startRecordingProfile() {
        if (this.profileBeingRecorded()) {
            return;
        }
        const heapProfilerModel = this.addNewProfile();
        if (!heapProfilerModel) {
            return;
        }
        void heapProfilerModel.startTrackingHeapObjects(this.recordAllocationStacksSettingInternal.get());
    }
    customContent() {
        const checkboxSetting = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.SettingsUI.createSettingCheckbox(i18nString(UIStrings.recordAllocationStacksExtra), this.recordAllocationStacksSettingInternal, true);
        this.customContentInternal = checkboxSetting;
        return checkboxSetting;
    }
    setCustomContentEnabled(enable) {
        if (this.customContentInternal) {
            this.customContentInternal.checkboxElement.disabled = !enable;
        }
    }
    recordAllocationStacksSetting() {
        return this.recordAllocationStacksSettingInternal;
    }
    addNewProfile() {
        const heapProfilerModel = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.HeapProfilerModel.HeapProfilerModel);
        if (!heapProfilerModel) {
            return null;
        }
        this.setProfileBeingRecorded(new HeapProfileHeader(heapProfilerModel, this, undefined));
        this.profileSamples = new _HeapTimelineOverview_js__WEBPACK_IMPORTED_MODULE_17__.Samples();
        // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.profileBeingRecorded()._profileSamples = this.profileSamples;
        this.recording = true;
        this.addProfile(this.profileBeingRecorded());
        this.profileBeingRecorded().updateStatus(i18nString(UIStrings.recording));
        this.dispatchEventToListeners("TrackingStarted" /* TrackingHeapSnapshotProfileTypeEvents.TrackingStarted */);
        return heapProfilerModel;
    }
    async stopRecordingProfile() {
        let profile = this.profileBeingRecorded();
        profile.updateStatus(i18nString(UIStrings.snapshotting));
        const stopPromise = profile.heapProfilerModel().stopTrackingHeapObjects(true);
        this.recording = false;
        this.dispatchEventToListeners("TrackingStopped" /* TrackingHeapSnapshotProfileTypeEvents.TrackingStopped */);
        await stopPromise;
        profile = this.profileBeingRecorded();
        if (!profile) {
            return;
        }
        profile.finishLoad();
        this.profileSamples = null;
        this.setProfileBeingRecorded(null);
        this.dispatchEventToListeners("profile-complete" /* ProfileTypeEvents.ProfileComplete */, profile);
    }
    toggleRecording() {
        if (this.recording) {
            void this.stopRecordingProfile();
        }
        else {
            this.startRecordingProfile();
        }
        return this.recording;
    }
    fileExtension() {
        return '.heaptimeline';
    }
    get treeItemTitle() {
        return i18nString(UIStrings.allocationTimelines);
    }
    get description() {
        return i18nString(UIStrings.AllocationTimelinesShowInstrumented);
    }
    resetProfiles(event) {
        const wasRecording = this.recording;
        // Clear current profile to avoid stopping backend.
        this.setProfileBeingRecorded(null);
        super.resetProfiles(event);
        this.profileSamples = null;
        if (wasRecording) {
            this.addNewProfile();
        }
    }
    profileBeingRecordedRemoved() {
        void this.stopRecordingProfile();
        this.profileSamples = null;
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    static TypeId = 'HEAP-RECORD';
    // TODO(crbug.com/1228674): Remove event strings once they are no longer used in web tests.
    // eslint-disable-next-line @typescript-eslint/naming-convention
    static HeapStatsUpdate = 'HeapStatsUpdate';
    // eslint-disable-next-line @typescript-eslint/naming-convention
    static TrackingStarted = 'TrackingStarted';
    // eslint-disable-next-line @typescript-eslint/naming-convention
    static TrackingStopped = 'TrackingStopped';
}
class HeapProfileHeader extends _ProfileHeader_js__WEBPACK_IMPORTED_MODULE_19__.ProfileHeader {
    heapProfilerModelInternal;
    maxJSObjectId;
    workerProxy;
    receiver;
    snapshotProxy;
    loadPromise;
    fulfillLoad;
    totalNumberOfChunks;
    bufferedWriter;
    onTempFileReady;
    failedToCreateTempFile;
    wasDisposed;
    fileName;
    constructor(heapProfilerModel, type, title) {
        super(type, title || i18nString(UIStrings.snapshotD, { PH1: type.nextProfileUid() }));
        this.heapProfilerModelInternal = heapProfilerModel;
        this.maxJSObjectId = -1;
        this.workerProxy = null;
        this.receiver = null;
        this.snapshotProxy = null;
        this.loadPromise = new Promise(resolve => {
            this.fulfillLoad = resolve;
        });
        this.totalNumberOfChunks = 0;
        this.bufferedWriter = null;
        this.onTempFileReady = null;
    }
    heapProfilerModel() {
        return this.heapProfilerModelInternal;
    }
    async getLocation(nodeIndex) {
        if (!this.snapshotProxy) {
            return null;
        }
        return this.snapshotProxy.getLocation(nodeIndex);
    }
    createSidebarTreeElement(dataDisplayDelegate) {
        return new _ProfileSidebarTreeElement_js__WEBPACK_IMPORTED_MODULE_20__.ProfileSidebarTreeElement(dataDisplayDelegate, this, 'heap-snapshot-sidebar-tree-item');
    }
    createView(dataDisplayDelegate) {
        return new HeapSnapshotView(dataDisplayDelegate, this);
    }
    prepareToLoad() {
        console.assert(!this.receiver, 'Already loading');
        this.setupWorker();
        this.updateStatus(i18nString(UIStrings.loading), true);
    }
    finishLoad() {
        if (!this.wasDisposed && this.receiver) {
            void this.receiver.close();
        }
        if (!this.bufferedWriter) {
            return;
        }
        this.didWriteToTempFile(this.bufferedWriter);
    }
    didWriteToTempFile(tempFile) {
        if (this.wasDisposed) {
            if (tempFile) {
                tempFile.remove();
            }
            return;
        }
        this.tempFile = tempFile;
        if (!tempFile) {
            this.failedToCreateTempFile = true;
        }
        if (this.onTempFileReady) {
            this.onTempFileReady();
            this.onTempFileReady = null;
        }
    }
    setupWorker() {
        console.assert(!this.workerProxy, 'HeapSnapshotWorkerProxy already exists');
        this.workerProxy = new _HeapSnapshotProxy_js__WEBPACK_IMPORTED_MODULE_16__.HeapSnapshotWorkerProxy(this.handleWorkerEvent.bind(this));
        this.workerProxy.addEventListener("Wait" /* HeapSnapshotWorkerProxy.Events.Wait */, event => {
            this.updateStatus(null, event.data);
        }, this);
        this.receiver = this.workerProxy.createLoader(this.uid, this.snapshotReceived.bind(this));
    }
    // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    handleWorkerEvent(eventName, data) {
        if (_models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_7__.HeapSnapshotModel.HeapSnapshotProgressEvent.BrokenSnapshot === eventName) {
            const error = data;
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Console.Console.instance().error(error);
            return;
        }
        if (_models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_7__.HeapSnapshotModel.HeapSnapshotProgressEvent.Update !== eventName) {
            return;
        }
        const serializedMessage = data;
        const messageObject = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.deserializeUIString(serializedMessage);
        // We know all strings from the worker are declared inside a single file so we can
        // use a custom function.
        this.updateStatus(moduleI18nString(messageObject.string, messageObject.values));
    }
    dispose() {
        if (this.workerProxy) {
            this.workerProxy.dispose();
        }
        this.removeTempFile();
        this.wasDisposed = true;
    }
    didCompleteSnapshotTransfer() {
        if (!this.snapshotProxy) {
            return;
        }
        this.updateStatus(_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.NumberUtilities.bytesToString(this.snapshotProxy.totalSize), false);
    }
    transferChunk(chunk) {
        if (!this.bufferedWriter) {
            this.bufferedWriter = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__.TempFile.TempFile();
        }
        this.bufferedWriter.write([chunk]);
        ++this.totalNumberOfChunks;
        if (this.receiver) {
            void this.receiver.write(chunk);
        }
    }
    snapshotReceived(snapshotProxy) {
        if (this.wasDisposed) {
            return;
        }
        this.receiver = null;
        this.snapshotProxy = snapshotProxy;
        this.maxJSObjectId = snapshotProxy.maxJSObjectId();
        this.didCompleteSnapshotTransfer();
        if (this.workerProxy) {
            this.workerProxy.startCheckingForLongRunningCalls();
        }
        this.notifySnapshotReceived();
    }
    notifySnapshotReceived() {
        if (this.snapshotProxy && this.fulfillLoad) {
            this.fulfillLoad(this.snapshotProxy);
        }
        this.profileType().snapshotReceived(this);
    }
    canSaveToFile() {
        return !this.fromFile();
    }
    async saveToFile() {
        await this.loadPromise;
        const fileOutputStream = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__.FileUtils.FileOutputStream();
        this.fileName = this.fileName ||
            'Heap-' + _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.DateUtilities.toISO8601Compact(new Date()) + this.profileType().fileExtension();
        const onOpen = async (accepted) => {
            if (!accepted) {
                return;
            }
            if (this.failedToCreateTempFile) {
                _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Console.Console.instance().error('Failed to open temp file with heap snapshot');
                void fileOutputStream.close();
                return;
            }
            if (this.tempFile) {
                const error = await this.tempFile.copyToOutputStream(fileOutputStream, this.onChunkTransferred.bind(this));
                if (error) {
                    _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Console.Console.instance().error('Failed to read heap snapshot from temp file: ' + error.message);
                }
                this.didCompleteSnapshotTransfer();
                return;
            }
            this.onTempFileReady = () => {
                void onOpen(accepted);
            };
            this.updateSaveProgress(0, 1);
        };
        await fileOutputStream.open(this.fileName).then(onOpen.bind(this));
    }
    onChunkTransferred(reader) {
        this.updateSaveProgress(reader.loadedSize(), reader.fileSize());
    }
    updateSaveProgress(value, total) {
        const percentValue = ((total && value / total) * 100).toFixed(0);
        this.updateStatus(i18nString(UIStrings.savingD, { PH1: percentValue }));
    }
    async loadFromFile(file) {
        this.updateStatus(i18nString(UIStrings.loading), true);
        this.setupWorker();
        const reader = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__.FileUtils.ChunkedFileReader(file, 10000000);
        const success = await reader.read(this.receiver);
        if (!success) {
            const error = reader.error();
            if (error) {
                this.updateStatus(error.message);
            }
        }
        return success ? null : reader.error();
    }
    profileType() {
        return super.profileType();
    }
}
class HeapSnapshotStatisticsView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.Widget.VBox {
    pieChart;
    constructor() {
        super();
        this.element.classList.add('heap-snapshot-statistics-view');
        this.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_13__.pane('profiler.heap-snapshot-statistics-view').track({ resize: true })}`);
        this.pieChart = new _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_10__.PieChart.PieChart();
        this.setTotalAndRecords(0, []);
        this.pieChart.classList.add('heap-snapshot-stats-pie-chart');
        this.element.appendChild(this.pieChart);
    }
    static valueFormatter(value) {
        const formatter = new Intl.NumberFormat(_core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.DevToolsLocale.DevToolsLocale.instance().locale, {
            style: 'unit',
            unit: 'kilobyte',
        });
        return formatter.format(Math.round(value / 1000));
    }
    setTotalAndRecords(total, records) {
        this.pieChart.data = {
            chartName: i18nString(UIStrings.heapMemoryUsage),
            size: 150,
            formatter: HeapSnapshotStatisticsView.valueFormatter,
            showLegend: true,
            total,
            slices: records,
        };
    }
}
class HeapAllocationStackView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.Widget.Widget {
    heapProfilerModel;
    linkifier;
    frameElements;
    constructor(heapProfilerModel) {
        super();
        this.heapProfilerModel = heapProfilerModel;
        this.linkifier = new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_11__.Linkifier.Linkifier();
        this.frameElements = [];
    }
    onContextMenu(link, event) {
        const contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.ContextMenu.ContextMenu(event);
        contextMenu.appendApplicableItems(link);
        void contextMenu.show();
        event.consume(true);
    }
    onStackViewKeydown(event) {
        const target = event.target;
        if (!target) {
            return;
        }
        if (event.key === 'Enter') {
            const link = stackFrameToURLElement.get(target);
            if (!link) {
                return;
            }
            const linkInfo = _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_11__.Linkifier.Linkifier.linkInfo(link);
            if (!linkInfo) {
                return;
            }
            if (_ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_11__.Linkifier.Linkifier.invokeFirstAction(linkInfo)) {
                event.consume(true);
            }
            return;
        }
        let navDown;
        const keyboardEvent = event;
        if (keyboardEvent.key === 'ArrowUp') {
            navDown = false;
        }
        else if (keyboardEvent.key === 'ArrowDown') {
            navDown = true;
        }
        else {
            return;
        }
        const index = this.frameElements.indexOf(target);
        if (index === -1) {
            return;
        }
        const nextIndex = navDown ? index + 1 : index - 1;
        if (nextIndex < 0 || nextIndex >= this.frameElements.length) {
            return;
        }
        const nextFrame = this.frameElements[nextIndex];
        nextFrame.tabIndex = 0;
        target.tabIndex = -1;
        nextFrame.focus();
        event.consume(true);
    }
    async setAllocatedObject(snapshot, snapshotNodeIndex) {
        this.clear();
        const frames = await snapshot.allocationStack(snapshotNodeIndex);
        if (!frames) {
            const stackDiv = this.element.createChild('div', 'no-heap-allocation-stack');
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.UIUtils.createTextChild(stackDiv, i18nString(UIStrings.stackWasNotRecordedForThisObject));
            return;
        }
        const stackDiv = this.element.createChild('div', 'heap-allocation-stack');
        stackDiv.addEventListener('keydown', this.onStackViewKeydown.bind(this), false);
        for (const frame of frames) {
            const frameDiv = stackDiv.createChild('div', 'stack-frame');
            this.frameElements.push(frameDiv);
            frameDiv.tabIndex = -1;
            const name = frameDiv.createChild('div');
            name.textContent = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.UIUtils.beautifyFunctionName(frame.functionName);
            if (!frame.scriptId) {
                continue;
            }
            const target = this.heapProfilerModel ? this.heapProfilerModel.target() : null;
            const options = { columnNumber: frame.column - 1, inlineFrameIndex: 0 };
            const urlElement = this.linkifier.linkifyScriptLocation(target, String(frame.scriptId), frame.scriptName, frame.line - 1, options);
            frameDiv.appendChild(urlElement);
            stackFrameToURLElement.set(frameDiv, urlElement);
            frameDiv.addEventListener('contextmenu', this.onContextMenu.bind(this, urlElement));
        }
        this.frameElements[0].tabIndex = 0;
    }
    clear() {
        this.element.removeChildren();
        this.frameElements = [];
        this.linkifier.reset();
    }
}
const stackFrameToURLElement = new WeakMap();
//# sourceMappingURL=HeapSnapshotView.js.map

/***/ }),

/***/ "./panels/profiler/ModuleUIStrings.js":
/*!********************************************!*\
  !*** ./panels/profiler/ModuleUIStrings.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UIStrings: () => (/* binding */ UIStrings)
/* harmony export */ });
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const UIStrings = {
    /**
     *@description Text to indicate the status of a heap snapshot in the Performance Pane
     */
    buildingEdgeIndexes: 'Building edge indexes…',
    /**
     *@description Text to indicate the status of a heap snapshot in the Performance Pane
     */
    buildingRetainers: 'Building retainers…',
    /**
     *@description Text to indicate the status of a heap snapshot in the Performance Pane
     */
    propagatingDomState: 'Propagating DOM state…',
    /**
     * @description Text to indicate the status of a heap snapshot in the Performance Pane. Flag here
     * refers to the programming concept for a piece of binary data (yes/no).
     */
    calculatingNodeFlags: 'Calculating node flags…',
    /**
     *@description Text to indicate the status of a heap snapshot in the Performance Pane
     */
    calculatingDistances: 'Calculating distances…',
    /**
     *@description Text to indicate the status of a heap snapshot in the Performance Pane
     */
    buildingPostorderIndex: 'Building postorder index…',
    /**
     *@description Text to indicate the status of a heap snapshot in the Performance Pane
     */
    buildingDominatorTree: 'Building dominator tree…',
    /**
     *@description Text to indicate the status of a heap snapshot in the Performance Pane
     */
    calculatingShallowSizes: 'Calculating shallow sizes…',
    /**
     *@description Text to indicate the status of a heap snapshot in the Performance Pane
     */
    calculatingRetainedSizes: 'Calculating retained sizes…',
    /**
     *@description Text to indicate the status of a heap snapshot in the Performance Pane
     */
    buildingDominatedNodes: 'Building dominated nodes…',
    /**
     *@description Text to indicate the status of a heap snapshot in the Performance Pane
     */
    calculatingStatistics: 'Calculating statistics…',
    /**
     *@description Text to indicate the status of a heap snapshot in the Performance Pane
     */
    calculatingSamples: 'Calculating samples…',
    /**
     *@description Text to indicate the status of a heap snapshot in the Performance Pane
     */
    buildingLocations: 'Building locations…',
    /**
     *@description Text to indicate the status of a heap snapshot in the Performance Pane
     */
    finishedProcessing: 'Finished processing.',
    /**
     *@description Text to indicate the status of a heap snapshot in the Performance Pane
     */
    buildingAllocationStatistics: 'Building allocation statistics…',
    /**
     *@description Text to indicate the status of a heap snapshot in the Performance Pane
     */
    done: 'Done',
    /**
     *@description Text in Heap Snapshot Loader of the Memory panel when taking a heap snapshot
     */
    processingSnapshot: 'Processing snapshot…',
    /**
     *@description Text to indicate the status of a heap snapshot in the Performance Pane
     */
    parsingStrings: 'Parsing strings…',
    /**
     *@description Text in Heap Snapshot Loader of the Memory panel when taking a heap snapshot
     */
    loadingSnapshotInfo: 'Loading snapshot info…',
    /**
     *@description Text in Heap Snapshot Loader of the Memory panel when taking a heap snapshot
     *@example {38} PH1
     */
    loadingNodesD: 'Loading nodes… {PH1}%',
    /**
     *@description Text in Heap Snapshot Loader of the Memory panel when taking a heap snapshot
     *@example {30} PH1
     */
    loadingEdgesD: 'Loading edges… {PH1}%',
    /**
     *@description Text in Heap Snapshot Loader of the Memory panel when taking a heap snapshot
     *@example {30} PH1
     */
    loadingAllocationTracesD: 'Loading allocation traces… {PH1}%',
    /**
     *@description Text in Heap Snapshot Loader of the Memory panel when taking a heap snapshot
     */
    loadingSamples: 'Loading samples…',
    /**
     *@description Text in Heap Snapshot Loader of the Memory panel when taking a heap snapshot
     */
    loadingLocations: 'Loading locations…',
    /**
     *@description Text in Heap Snapshot Loader of the Memory panel when taking a heap snapshot
     */
    loadingStrings: 'Loading strings…',
};
//# sourceMappingURL=ModuleUIStrings.js.map

/***/ }),

/***/ "./panels/profiler/ProfileTypeRegistry.js":
/*!************************************************!*\
  !*** ./panels/profiler/ProfileTypeRegistry.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileTypeRegistry: () => (/* binding */ ProfileTypeRegistry),
/* harmony export */   instance: () => (/* binding */ instance)
/* harmony export */ });
/* harmony import */ var _HeapProfileView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HeapProfileView.js */ "./panels/profiler/HeapProfileView.js");
/* harmony import */ var _HeapSnapshotView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeapSnapshotView.js */ "./panels/profiler/HeapSnapshotView.js");
// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


class ProfileTypeRegistry {
    heapSnapshotProfileType;
    samplingHeapProfileType;
    trackingHeapSnapshotProfileType;
    constructor() {
        this.heapSnapshotProfileType = new _HeapSnapshotView_js__WEBPACK_IMPORTED_MODULE_1__.HeapSnapshotProfileType();
        this.samplingHeapProfileType = new _HeapProfileView_js__WEBPACK_IMPORTED_MODULE_0__.SamplingHeapProfileType();
        this.trackingHeapSnapshotProfileType = new _HeapSnapshotView_js__WEBPACK_IMPORTED_MODULE_1__.TrackingHeapSnapshotProfileType();
    }
}
const instance = new ProfileTypeRegistry();
//# sourceMappingURL=ProfileTypeRegistry.js.map

/***/ })

}]);