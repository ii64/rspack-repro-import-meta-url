"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_profiler_HeapProfileView_ts"],{

/***/ "./src/panels/profiler/HeapProfileView.ts":
/*!************************************************!*\
  !*** ./src/panels/profiler/HeapProfileView.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeapFlameChartDataProvider: () => (/* binding */ HeapFlameChartDataProvider),
/* harmony export */   HeapProfileView: () => (/* binding */ HeapProfileView),
/* harmony export */   NodeFormatter: () => (/* binding */ NodeFormatter),
/* harmony export */   SamplingHeapProfileHeader: () => (/* binding */ SamplingHeapProfileHeader),
/* harmony export */   SamplingHeapProfileModel: () => (/* binding */ SamplingHeapProfileModel),
/* harmony export */   SamplingHeapProfileNode: () => (/* binding */ SamplingHeapProfileNode),
/* harmony export */   SamplingHeapProfileType: () => (/* binding */ SamplingHeapProfileType),
/* harmony export */   SamplingHeapProfileTypeBase: () => (/* binding */ SamplingHeapProfileTypeBase)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _core_root_root_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/root/root.js */ "./src/core/root/root.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _models_cpu_profile_cpu_profile_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/cpu_profile/cpu_profile.js */ "./src/models/cpu_profile/cpu_profile.ts");
/* harmony import */ var _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/legacy/components/perf_ui/perf_ui.js */ "./src/ui/legacy/components/perf_ui/perf_ui.ts");
/* harmony import */ var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/legacy/components/utils/utils.js */ "./src/ui/legacy/components/utils/utils.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _HeapTimelineOverview_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./HeapTimelineOverview.js */ "./src/panels/profiler/HeapTimelineOverview.ts");
/* harmony import */ var _ProfileFlameChartDataProvider_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ProfileFlameChartDataProvider.js */ "./src/panels/profiler/ProfileFlameChartDataProvider.ts");
/* harmony import */ var _ProfileHeader_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ProfileHeader.js */ "./src/panels/profiler/ProfileHeader.ts");
/* harmony import */ var _ProfileView_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ProfileView.js */ "./src/panels/profiler/ProfileView.ts");
// Copyright 2016 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.













const UIStrings = {
    /**
     *@description The reported total size used in the selected time frame of the allocation sampling profile
     *@example {3 MB} PH1
     */
    selectedSizeS: 'Selected size: {PH1}',
    /**
     *@description Name of column header that reports the size (in terms of bytes) used for a particular part of the heap, excluding the size of the children nodes of this part of the heap
     */
    selfSizeBytes: 'Self Size (bytes)',
    /**
     *@description Name of column header that reports the total size (in terms of bytes) used for a particular part of the heap
     */
    totalSizeBytes: 'Total Size (bytes)',
    /**
     *@description Button text to stop profiling the heap
     */
    stopHeapProfiling: 'Stop heap profiling',
    /**
     *@description Button text to start profiling the heap
     */
    startHeapProfiling: 'Start heap profiling',
    /**
     *@description Progress update that the profiler is recording the contents of the heap
     */
    recording: 'Recording…',
    /**
     *@description Icon title in Heap Profile View of a profiler tool
     */
    heapProfilerIsRecording: 'Heap profiler is recording',
    /**
     *@description Progress update that the profiler is in the process of stopping its recording of the heap
     */
    stopping: 'Stopping…',
    /**
     *@description Sampling category to only profile allocations happening on the heap
     */
    allocationSampling: 'Allocation sampling',
    /**
     *@description The title for the collection of profiles that are gathered from various snapshots of the heap, using a sampling (e.g. every 1/100) technique.
     */
    samplingProfiles: 'Sampling profiles',
    /**
     *@description Description (part 1) in Heap Profile View of a profiler tool
     */
    recordMemoryAllocations: 'Record memory allocations using sampling method.',
    /**
     *@description Description (part 2) in Heap Profile View of a profiler tool
     */
    thisProfileTypeHasMinimal: 'This profile type has minimal performance overhead and can be used for long running operations.',
    /**
     *@description Description (part 3) in Heap Profile View of a profiler tool
     */
    itProvidesGoodApproximation: 'It provides good approximation of allocations broken down by `JavaScript` execution stack.',
    /**
     *@description Name of a profile
     *@example {2} PH1
     */
    profileD: 'Profile {PH1}',
    /**
     *@description Accessible text for the value in bytes in memory allocation or coverage view.
     *@example {12345} PH1
     */
    sBytes: '{PH1} bytes',
    /**
     *@description Text in CPUProfile View of a profiler tool
     *@example {21.33} PH1
     */
    formatPercent: '{PH1} %',
    /**
     *@description The formatted size in kilobytes, abbreviated to kB
     *@example {1,021} PH1
     */
    skb: '{PH1} kB',
    /**
     *@description Text for the name of something
     */
    name: 'Name',
    /**
     *@description Tooltip of a cell that reports the size used for a particular part of the heap, excluding the size of the children nodes of this part of the heap
     */
    selfSize: 'Self size',
    /**
     *@description Tooltip of a cell that reports the total size used for a particular part of the heap
     */
    totalSize: 'Total size',
    /**
     *@description Text for web URLs
     */
    url: 'URL',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/profiler/HeapProfileView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
function convertToSamplingHeapProfile(profileHeader) {
    return (profileHeader.profile || profileHeader.protocolProfile());
}
class HeapProfileView extends _ProfileView_js__WEBPACK_IMPORTED_MODULE_12__.ProfileView {
    constructor(profileHeader) {
        super();
        Object.defineProperty(this, "profileHeader", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "profileType", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "adjustedTotal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "selectedSizeText", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "timestamps", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "sizes", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "max", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "ordinals", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "totalTime", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "lastOrdinal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "timelineOverview", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.profileHeader = profileHeader;
        this.profileType = profileHeader.profileType();
        this.initialize(new NodeFormatter(this));
        const profile = new SamplingHeapProfileModel(convertToSamplingHeapProfile(profileHeader));
        this.adjustedTotal = profile.total;
        this.setProfile(profile);
        this.selectedSizeText = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.Toolbar.ToolbarText();
        this.timestamps = [];
        this.sizes = [];
        this.max = [];
        this.ordinals = [];
        this.totalTime = 0;
        this.lastOrdinal = 0;
        this.timelineOverview = new _HeapTimelineOverview_js__WEBPACK_IMPORTED_MODULE_9__.HeapTimelineOverview();
        if (_core_root_root_js__WEBPACK_IMPORTED_MODULE_3__.Runtime.experiments.isEnabled('sampling-heap-profiler-timeline')) {
            this.timelineOverview.addEventListener(_HeapTimelineOverview_js__WEBPACK_IMPORTED_MODULE_9__.Events.IdsRangeChanged, this.onIdsRangeChanged.bind(this));
            this.timelineOverview.show(this.element, this.element.firstChild);
            this.timelineOverview.start();
            this.profileType.addEventListener(SamplingHeapProfileType.Events.StatsUpdate, this.onStatsUpdate, this);
            void this.profileType.once(_ProfileHeader_js__WEBPACK_IMPORTED_MODULE_11__.ProfileEvents.ProfileComplete).then(() => {
                this.profileType.removeEventListener(SamplingHeapProfileType.Events.StatsUpdate, this.onStatsUpdate, this);
                this.timelineOverview.stop();
                this.timelineOverview.updateGrid();
            });
        }
    }
    async toolbarItems() {
        return [...await super.toolbarItems(), this.selectedSizeText];
    }
    onIdsRangeChanged(event) {
        const { minId, maxId } = event.data;
        this.selectedSizeText.setText(i18nString(UIStrings.selectedSizeS, { PH1: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.NumberUtilities.bytesToString(event.data.size) }));
        this.setSelectionRange(minId, maxId);
    }
    setSelectionRange(minId, maxId) {
        const profileData = convertToSamplingHeapProfile(this.profileHeader);
        const profile = new SamplingHeapProfileModel(profileData, minId, maxId);
        this.adjustedTotal = profile.total;
        this.setProfile(profile);
    }
    onStatsUpdate(event) {
        const profile = event.data;
        if (!this.totalTime) {
            this.timestamps = [];
            this.sizes = [];
            this.max = [];
            this.ordinals = [];
            this.totalTime = 30000;
            this.lastOrdinal = 0;
        }
        this.sizes.fill(0);
        this.sizes.push(0);
        this.timestamps.push(Date.now());
        this.ordinals.push(this.lastOrdinal + 1);
        for (const sample of profile?.samples ?? []) {
            this.lastOrdinal = Math.max(this.lastOrdinal, sample.ordinal);
            const bucket = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.ArrayUtilities.upperBound(this.ordinals, sample.ordinal, _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.ArrayUtilities.DEFAULT_COMPARATOR) -
                1;
            this.sizes[bucket] += sample.size;
        }
        this.max.push(this.sizes[this.sizes.length - 1]);
        const lastTimestamp = this.timestamps[this.timestamps.length - 1];
        if (lastTimestamp - this.timestamps[0] > this.totalTime) {
            this.totalTime *= 2;
        }
        const samples = {
            sizes: this.sizes,
            max: this.max,
            ids: this.ordinals,
            timestamps: this.timestamps,
            totalTime: this.totalTime,
        };
        this.timelineOverview.setSamples(samples);
    }
    columnHeader(columnId) {
        switch (columnId) {
            case 'self':
                return i18nString(UIStrings.selfSizeBytes);
            case 'total':
                return i18nString(UIStrings.totalSizeBytes);
        }
        return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.UIString.LocalizedEmptyString;
    }
    createFlameChartDataProvider() {
        return new HeapFlameChartDataProvider(this.profile(), this.profileHeader.heapProfilerModel());
    }
}
class SamplingHeapProfileTypeBase extends _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.eventMixin(_ProfileHeader_js__WEBPACK_IMPORTED_MODULE_11__.ProfileType) {
    constructor(typeId, description) {
        super(typeId, description);
        Object.defineProperty(this, "recording", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "clearedDuringRecording", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.recording = false;
        this.clearedDuringRecording = false;
    }
    profileBeingRecorded() {
        return super.profileBeingRecorded();
    }
    typeName() {
        return 'Heap';
    }
    fileExtension() {
        return '.heapprofile';
    }
    get buttonTooltip() {
        return this.recording ? i18nString(UIStrings.stopHeapProfiling) : i18nString(UIStrings.startHeapProfiling);
    }
    buttonClicked() {
        if (this.recording) {
            void this.stopRecordingProfile();
        }
        else {
            this.startRecordingProfile();
        }
        return this.recording;
    }
    startRecordingProfile() {
        const heapProfilerModel = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.HeapProfilerModel.HeapProfilerModel);
        if (this.profileBeingRecorded() || !heapProfilerModel) {
            return;
        }
        const profileHeader = new SamplingHeapProfileHeader(heapProfilerModel, this);
        this.setProfileBeingRecorded(profileHeader);
        this.addProfile(profileHeader);
        profileHeader.updateStatus(i18nString(UIStrings.recording));
        const warnings = [i18nString(UIStrings.heapProfilerIsRecording)];
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.InspectorView.InspectorView.instance().setPanelWarnings('heap-profiler', warnings);
        this.recording = true;
        this.startSampling();
    }
    async stopRecordingProfile() {
        this.recording = false;
        const recordedProfile = this.profileBeingRecorded();
        if (!recordedProfile || !recordedProfile.heapProfilerModel()) {
            return;
        }
        recordedProfile.updateStatus(i18nString(UIStrings.stopping));
        const profile = await this.stopSampling();
        if (recordedProfile) {
            console.assert(profile !== undefined);
            // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            recordedProfile.setProtocolProfile(profile);
            recordedProfile.updateStatus('');
            this.setProfileBeingRecorded(null);
        }
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.InspectorView.InspectorView.instance().setPanelWarnings('heap-profiler', []);
        // If the data was cleared during the middle of the recording we no
        // longer treat the profile as being completed. This means we avoid
        // a change of view to the profile list.
        const wasClearedDuringRecording = this.clearedDuringRecording;
        this.clearedDuringRecording = false;
        if (wasClearedDuringRecording) {
            return;
        }
        this.dispatchEventToListeners(_ProfileHeader_js__WEBPACK_IMPORTED_MODULE_11__.ProfileEvents.ProfileComplete, recordedProfile);
    }
    createProfileLoadedFromFile(title) {
        return new SamplingHeapProfileHeader(null, this, title);
    }
    profileBeingRecordedRemoved() {
        this.clearedDuringRecording = true;
        void this.stopRecordingProfile();
    }
    startSampling() {
        throw 'Not implemented';
    }
    stopSampling() {
        throw 'Not implemented';
    }
}
let samplingHeapProfileTypeInstance;
class SamplingHeapProfileType extends SamplingHeapProfileTypeBase {
    constructor() {
        super(SamplingHeapProfileType.TypeId, i18nString(UIStrings.allocationSampling));
        Object.defineProperty(this, "updateTimer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "updateIntervalMs", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        if (!samplingHeapProfileTypeInstance) {
            samplingHeapProfileTypeInstance = this;
        }
        this.updateTimer = 0;
        this.updateIntervalMs = 200;
    }
    static get instance() {
        return samplingHeapProfileTypeInstance;
    }
    get treeItemTitle() {
        return i18nString(UIStrings.samplingProfiles);
    }
    get description() {
        // TODO(l10n): Do not concatenate localized strings.
        const formattedDescription = [
            i18nString(UIStrings.recordMemoryAllocations),
            i18nString(UIStrings.thisProfileTypeHasMinimal),
            i18nString(UIStrings.itProvidesGoodApproximation),
        ];
        return formattedDescription.join('\n');
    }
    hasTemporaryView() {
        return _core_root_root_js__WEBPACK_IMPORTED_MODULE_3__.Runtime.experiments.isEnabled('sampling-heap-profiler-timeline');
    }
    startSampling() {
        const heapProfilerModel = this.obtainRecordingProfile();
        if (!heapProfilerModel) {
            return;
        }
        void heapProfilerModel.startSampling();
        if (_core_root_root_js__WEBPACK_IMPORTED_MODULE_3__.Runtime.experiments.isEnabled('sampling-heap-profiler-timeline')) {
            this.updateTimer = window.setTimeout(() => {
                void this.updateStats();
            }, this.updateIntervalMs);
        }
    }
    obtainRecordingProfile() {
        const recordingProfile = this.profileBeingRecorded();
        if (recordingProfile) {
            const heapProfilerModel = recordingProfile.heapProfilerModel();
            return heapProfilerModel;
        }
        return null;
    }
    async stopSampling() {
        window.clearTimeout(this.updateTimer);
        this.updateTimer = 0;
        this.dispatchEventToListeners(SamplingHeapProfileType.Events.RecordingStopped);
        const heapProfilerModel = this.obtainRecordingProfile();
        if (!heapProfilerModel) {
            throw new Error('No heap profiler model');
        }
        const samplingProfile = await heapProfilerModel.stopSampling();
        if (!samplingProfile) {
            throw new Error('No sampling profile found');
        }
        return samplingProfile;
    }
    async updateStats() {
        const heapProfilerModel = this.obtainRecordingProfile();
        if (!heapProfilerModel) {
            return;
        }
        const profile = await heapProfilerModel.getSamplingProfile();
        if (!this.updateTimer) {
            return;
        }
        this.dispatchEventToListeners(SamplingHeapProfileType.Events.StatsUpdate, profile);
        this.updateTimer = window.setTimeout(() => {
            void this.updateStats();
        }, this.updateIntervalMs);
    }
}
// eslint-disable-next-line @typescript-eslint/naming-convention
Object.defineProperty(SamplingHeapProfileType, "TypeId", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'SamplingHeap'
});
(function (SamplingHeapProfileType) {
    let Events;
    (function (Events) {
        Events["RecordingStopped"] = "RecordingStopped";
        Events["StatsUpdate"] = "StatsUpdate";
    })(Events = SamplingHeapProfileType.Events || (SamplingHeapProfileType.Events = {}));
})(SamplingHeapProfileType || (SamplingHeapProfileType = {}));
class SamplingHeapProfileHeader extends _ProfileView_js__WEBPACK_IMPORTED_MODULE_12__.WritableProfileHeader {
    constructor(heapProfilerModel, type, title) {
        super(heapProfilerModel && heapProfilerModel.debuggerModel(), type, title || i18nString(UIStrings.profileD, { PH1: type.nextProfileUid() }));
        Object.defineProperty(this, "heapProfilerModelInternal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "protocolProfileInternal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.heapProfilerModelInternal = heapProfilerModel;
        this.protocolProfileInternal = {
            head: {
                callFrame: {
                    functionName: '',
                    scriptId: '',
                    url: '',
                    lineNumber: 0,
                    columnNumber: 0,
                },
                children: [],
                selfSize: 0,
                id: 0,
            },
            samples: [],
            startTime: 0,
            endTime: 0,
            nodes: [],
        };
    }
    createView() {
        return new HeapProfileView(this);
    }
    protocolProfile() {
        return this.protocolProfileInternal;
    }
    heapProfilerModel() {
        return this.heapProfilerModelInternal;
    }
    profileType() {
        return super.profileType();
    }
}
class SamplingHeapProfileNode extends _models_cpu_profile_cpu_profile_js__WEBPACK_IMPORTED_MODULE_5__.ProfileTreeModel.ProfileNode {
    constructor(node) {
        const callFrame = node.callFrame || {
            // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
            // @ts-expect-error
            functionName: node['functionName'],
            // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
            // @ts-expect-error
            scriptId: node['scriptId'],
            // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
            // @ts-expect-error
            url: node['url'],
            // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
            // @ts-expect-error
            lineNumber: node['lineNumber'] - 1,
            // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
            // @ts-expect-error
            columnNumber: node['columnNumber'] - 1,
        };
        super(callFrame);
        Object.defineProperty(this, "self", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.self = node.selfSize;
    }
}
class SamplingHeapProfileModel extends _models_cpu_profile_cpu_profile_js__WEBPACK_IMPORTED_MODULE_5__.ProfileTreeModel.ProfileTreeModel {
    constructor(profile, minOrdinal, maxOrdinal) {
        super();
        // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Object.defineProperty(this, "modules", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.modules = profile.modules || [];
        let nodeIdToSizeMap = null;
        if (minOrdinal || maxOrdinal) {
            nodeIdToSizeMap = new Map();
            minOrdinal = minOrdinal || 0;
            maxOrdinal = maxOrdinal || Infinity;
            for (const sample of profile.samples) {
                if (sample.ordinal < minOrdinal || sample.ordinal > maxOrdinal) {
                    continue;
                }
                const size = nodeIdToSizeMap.get(sample.nodeId) || 0;
                nodeIdToSizeMap.set(sample.nodeId, size + sample.size);
            }
        }
        this.initialize(translateProfileTree(profile.head));
        function translateProfileTree(root) {
            const resultRoot = new SamplingHeapProfileNode(root);
            const sourceNodeStack = [root];
            const targetNodeStack = [resultRoot];
            while (sourceNodeStack.length) {
                const sourceNode = sourceNodeStack.pop();
                const targetNode = targetNodeStack.pop();
                targetNode.children = sourceNode.children.map(child => {
                    const targetChild = new SamplingHeapProfileNode(child);
                    if (nodeIdToSizeMap) {
                        targetChild.self = nodeIdToSizeMap.get(child.id) || 0;
                    }
                    return targetChild;
                });
                sourceNodeStack.push(...sourceNode.children);
                targetNodeStack.push(...targetNode.children);
            }
            pruneEmptyBranches(resultRoot);
            return resultRoot;
        }
        function pruneEmptyBranches(node) {
            node.children = node.children.filter(pruneEmptyBranches);
            return Boolean(node.children.length || node.self);
        }
    }
}
class NodeFormatter {
    constructor(profileView) {
        Object.defineProperty(this, "profileView", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.profileView = profileView;
    }
    formatValue(value) {
        return _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.NumberUtilities.withThousandsSeparator(value);
    }
    formatValueAccessibleText(value) {
        return i18nString(UIStrings.sBytes, { PH1: value });
    }
    formatPercent(value, _node) {
        return i18nString(UIStrings.formatPercent, { PH1: value.toFixed(2) });
    }
    linkifyNode(node) {
        const heapProfilerModel = this.profileView.profileHeader.heapProfilerModel();
        const target = heapProfilerModel ? heapProfilerModel.target() : null;
        const options = {
            className: 'profile-node-file',
            inlineFrameIndex: 0,
        };
        return this.profileView.linkifier().maybeLinkifyConsoleCallFrame(target, node.profileNode.callFrame, options);
    }
}
class HeapFlameChartDataProvider extends _ProfileFlameChartDataProvider_js__WEBPACK_IMPORTED_MODULE_10__.ProfileFlameChartDataProvider {
    constructor(profile, heapProfilerModel) {
        super();
        Object.defineProperty(this, "profile", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "heapProfilerModel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.profile = profile;
        this.heapProfilerModel = heapProfilerModel;
    }
    minimumBoundary() {
        return 0;
    }
    totalTime() {
        return this.profile.root.total;
    }
    entryHasDeoptReason(_entryIndex) {
        return false;
    }
    formatValue(value, _precision) {
        return i18nString(UIStrings.skb, { PH1: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.NumberUtilities.withThousandsSeparator(value / 1e3) });
    }
    calculateTimelineData() {
        function nodesCount(node) {
            return node.children.reduce((count, node) => count + nodesCount(node), 1);
        }
        const count = nodesCount(this.profile.root);
        const entryNodes = new Array(count);
        const entryLevels = new Uint16Array(count);
        const entryTotalTimes = new Float32Array(count);
        const entryStartTimes = new Float64Array(count);
        let depth = 0;
        let maxDepth = 0;
        let position = 0;
        let index = 0;
        function addNode(node) {
            const start = position;
            entryNodes[index] = node;
            entryLevels[index] = depth;
            entryTotalTimes[index] = node.total;
            entryStartTimes[index] = position;
            ++index;
            ++depth;
            node.children.forEach(addNode);
            --depth;
            maxDepth = Math.max(maxDepth, depth);
            position = start + node.total;
        }
        addNode(this.profile.root);
        this.maxStackDepthInternal = maxDepth + 1;
        this.entryNodes = entryNodes;
        this.timelineDataInternal =
            _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_6__.FlameChart.FlameChartTimelineData.create({ entryLevels, entryTotalTimes, entryStartTimes, groups: null });
        return this.timelineDataInternal;
    }
    prepareHighlightedEntryInfo(entryIndex) {
        const node = this.entryNodes[entryIndex];
        if (!node) {
            return null;
        }
        const entryInfo = [];
        function pushEntryInfoRow(title, value) {
            entryInfo.push({ title: title, value: value });
        }
        pushEntryInfoRow(i18nString(UIStrings.name), _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.UIUtils.beautifyFunctionName(node.functionName));
        pushEntryInfoRow(i18nString(UIStrings.selfSize), _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.NumberUtilities.bytesToString(node.self));
        pushEntryInfoRow(i18nString(UIStrings.totalSize), _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.NumberUtilities.bytesToString(node.total));
        const linkifier = new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_7__.Linkifier.Linkifier();
        const link = linkifier.maybeLinkifyConsoleCallFrame(this.heapProfilerModel ? this.heapProfilerModel.target() : null, node.callFrame);
        if (link) {
            pushEntryInfoRow(i18nString(UIStrings.url), link.textContent);
        }
        linkifier.dispose();
        return _ProfileView_js__WEBPACK_IMPORTED_MODULE_12__.ProfileView.buildPopoverTable(entryInfo);
    }
}


/***/ })

}]);