"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_profiler_HeapSnapshotView_js-panels_profiler_ProfileTypeRegistry_js"], {
"./panels/profiler/HeapSnapshotView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AllocationPerspective: function() { return AllocationPerspective; },
  ComparisonPerspective: function() { return ComparisonPerspective; },
  ContainmentPerspective: function() { return ContainmentPerspective; },
  HeapAllocationStackView: function() { return HeapAllocationStackView; },
  HeapProfileHeader: function() { return HeapProfileHeader; },
  HeapSnapshotProfileType: function() { return HeapSnapshotProfileType; },
  HeapSnapshotStatisticsView: function() { return HeapSnapshotStatisticsView; },
  HeapSnapshotView: function() { return HeapSnapshotView; },
  Perspective: function() { return Perspective; },
  StatisticsPerspective: function() { return StatisticsPerspective; },
  SummaryPerspective: function() { return SummaryPerspective; },
  TrackingHeapSnapshotProfileType: function() { return TrackingHeapSnapshotProfileType; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _core_root_root_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/root/root.js */ "./core/root/root.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */var _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/heap_snapshot_model/heap_snapshot_model.js */ "./models/heap_snapshot_model/heap_snapshot_model.js");
/* harmony import */var _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/legacy/components/data_grid/data_grid.js */ "./ui/legacy/components/data_grid/data_grid.js");
/* harmony import */var _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ui/legacy/components/object_ui/object_ui.js */ "./ui/legacy/components/object_ui/object_ui.js");
/* harmony import */var _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ui/legacy/components/perf_ui/perf_ui.js */ "./ui/legacy/components/perf_ui/perf_ui.js");
/* harmony import */var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../ui/legacy/components/utils/utils.js */ "./ui/legacy/components/utils/utils.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _HeapSnapshotDataGrids_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./HeapSnapshotDataGrids.js */ "./panels/profiler/HeapSnapshotDataGrids.js");
/* harmony import */var _HeapSnapshotGridNodes_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./HeapSnapshotGridNodes.js */ "./panels/profiler/HeapSnapshotGridNodes.js");
/* harmony import */var _HeapSnapshotProxy_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./HeapSnapshotProxy.js */ "./panels/profiler/HeapSnapshotProxy.js");
/* harmony import */var _HeapTimelineOverview_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./HeapTimelineOverview.js */ "./panels/profiler/HeapTimelineOverview.js");
/* harmony import */var _ModuleUIStrings_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ModuleUIStrings.js */ "./panels/profiler/ModuleUIStrings.js");
/* harmony import */var _ProfileHeader_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ProfileHeader.js */ "./panels/profiler/ProfileHeader.js");
/* harmony import */var _ProfileSidebarTreeElement_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ProfileSidebarTreeElement.js */ "./panels/profiler/ProfileSidebarTreeElement.js");
/* harmony import */var _ProfileTypeRegistry_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ProfileTypeRegistry.js */ "./panels/profiler/ProfileTypeRegistry.js");
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
 */ function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function get(target, property, receiver) {
            var base = _super_prop_base(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver || target);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}






















var UIStrings = {
    /**
     *@description Text to find an item
     */ find: 'Find',
    /**
     *@description Text in Heap Snapshot View of a profiler tool
     */ containment: 'Containment',
    /**
     *@description Retaining paths title text content in Heap Snapshot View of a profiler tool
     */ retainers: 'Retainers',
    /**
     *@description Text in Heap Snapshot View of a profiler tool
     */ allocationStack: 'Allocation stack',
    /**
     *@description Screen reader label for a select box that chooses the perspective in the Memory panel when vieweing a Heap Snapshot
     */ perspective: 'Perspective',
    /**
     *@description Screen reader label for a select box that chooses the snapshot to use as a base in the Memory panel when vieweing a Heap Snapshot
     */ baseSnapshot: 'Base snapshot',
    /**
     *@description Text to filter result items
     */ filter: 'Filter',
    /**
     *@description Placeholder text in the filter bar to filter by JavaScript class names for a heap
     */ filterByClass: 'Filter by class',
    /**
     *@description Text in Heap Snapshot View of a profiler tool
     */ code: 'Code',
    /**
     *@description Text in Heap Snapshot View of a profiler tool
     */ strings: 'Strings',
    /**
     *@description Label on a pie chart in the statistics view for the Heap Snapshot tool
     */ jsArrays: 'JS arrays',
    /**
     *@description Label on a pie chart in the statistics view for the Heap Snapshot tool
     */ typedArrays: 'Typed arrays',
    /**
     *@description Label on a pie chart in the statistics view for the Heap Snapshot tool
     */ systemObjects: 'System objects',
    /**
     *@description The reported total size used in the selected time frame of the allocation sampling profile
     *@example {3 MB} PH1
     */ selectedSizeS: 'Selected size: {PH1}',
    /**
     *@description Text in Heap Snapshot View of a profiler tool
     */ allObjects: 'All objects',
    /**
     *@description Title in Heap Snapshot View of a profiler tool
     *@example {Profile 2} PH1
     */ objectsAllocatedBeforeS: 'Objects allocated before {PH1}',
    /**
     *@description Title in Heap Snapshot View of a profiler tool
     *@example {Profile 1} PH1
     *@example {Profile 2} PH2
     */ objectsAllocatedBetweenSAndS: 'Objects allocated between {PH1} and {PH2}',
    /**
     *@description An option which will filter the heap snapshot to show only
     * strings which exactly match at least one other string
     */ duplicatedStrings: 'Duplicated strings',
    /**
     *@description An option which will filter the heap snapshot to show only
     * detached DOM nodes and other objects kept alive by detached DOM nodes
     */ objectsRetainedByDetachedDomNodes: 'Objects retained by detached DOM nodes',
    /**
     *@description An option which will filter the heap snapshot to show only
     * objects kept alive by the DevTools console
     */ objectsRetainedByConsole: 'Objects retained by the DevTools console',
    /**
     *@description Text for the summary view
     */ summary: 'Summary',
    /**
     *@description Text in Heap Snapshot View of a profiler tool
     */ comparison: 'Comparison',
    /**
     *@description Text in Heap Snapshot View of a profiler tool
     */ allocation: 'Allocation',
    /**
     *@description Title text content in Heap Snapshot View of a profiler tool
     */ liveObjects: 'Live objects',
    /**
     *@description Text in Heap Snapshot View of a profiler tool
     */ statistics: 'Statistics',
    /**
     *@description Text in Heap Snapshot View of a profiler tool
     */ heapSnapshot: 'Heap snapshot',
    /**
     *@description Text in Heap Snapshot View of a profiler tool
     */ takeHeapSnapshot: 'Take heap snapshot',
    /**
     *@description Text in Heap Snapshot View of a profiler tool
     */ heapSnapshots: 'Heap snapshots',
    /**
     *@description Text in Heap Snapshot View of a profiler tool
     */ heapSnapshotProfilesShowMemory: 'Heap snapshot profiles show memory distribution among your page\'s JavaScript objects and related DOM nodes.',
    /**
     *@description Label for a checkbox in the heap snapshot view of the profiler tool. The "heap snapshot" contains the
     * current state of JavaScript memory. With this checkbox enabled, the snapshot also includes internal data that is
     * specific to Chrome (hence implementation-specific).
     */ exposeInternals: 'Expose internals (includes additional implementation-specific details)',
    /**
     *@description Progress update that the profiler is capturing a snapshot of the heap
     */ snapshotting: 'Snapshotting…',
    /**
     *@description Profile title in Heap Snapshot View of a profiler tool
     *@example {1} PH1
     */ snapshotD: 'Snapshot {PH1}',
    /**
     *@description Text for a percentage value
     *@example {13.0} PH1
     */ percentagePlaceholder: '{PH1}%',
    /**
     *@description Text in Heap Snapshot View of a profiler tool
     */ allocationInstrumentationOn: 'Allocation instrumentation on timeline',
    /**
     *@description Text in Heap Snapshot View of a profiler tool
     */ stopRecordingHeapProfile: 'Stop recording heap profile',
    /**
     *@description Text in Heap Snapshot View of a profiler tool
     */ startRecordingHeapProfile: 'Start recording heap profile',
    /**
     *@description Text in Heap Snapshot View of a profiler tool.
     * A stack trace is a list of functions that were called.
     * This option turns on recording of a stack trace at each allocation.
     * The recording itself is a somewhat expensive operation, so turning this option on, the website's performance may be affected negatively (e.g. everything becomes slower).
     */ recordAllocationStacksExtra: 'Record stack traces of allocations (extra performance overhead)',
    /**
     *@description Text in CPUProfile View of a profiler tool
     */ recording: 'Recording…',
    /**
     *@description Text in Heap Snapshot View of a profiler tool
     */ allocationTimelines: 'Allocation timelines',
    /**
     *@description Description for the 'Allocation timeline' tool in the Memory panel.
     */ AllocationTimelinesShowInstrumented: 'Allocation timelines show instrumented JavaScript memory allocations over time. Once profile is recorded you can select a time interval to see objects that were allocated within it and still alive by the end of recording. Use this profile type to isolate memory leaks.',
    /**
     *@description Text when something is loading
     */ loading: 'Loading…',
    /**
     *@description Text in Heap Snapshot View of a profiler tool
     *@example {30} PH1
     */ savingD: 'Saving… {PH1}%',
    /**
     *@description Text in Heap Snapshot View of a profiler tool
     */ heapMemoryUsage: 'Heap memory usage',
    /**
     *@description Text of a DOM element in Heap Snapshot View of a profiler tool
     */ stackWasNotRecordedForThisObject: 'Stack was not recorded for this object because it had been allocated before this profile recording started.',
    /**
     *@description Text in Heap Snapshot View of a profiler tool.
     * This text is on a button to undo all previous "Ignore this retainer" actions.
     */ restoreIgnoredRetainers: 'Restore ignored retainers'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/profiler/HeapSnapshotView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
// The way this is handled is to workaround the strings inside the heap_snapshot_worker
// If strings are removed from inside the worker strings can be declared in this module
// as any other.
// eslint-disable-next-line @typescript-eslint/naming-convention
var moduleUIstr_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/profiler/ModuleUIStrings.ts', _ModuleUIStrings_js__WEBPACK_IMPORTED_MODULE_18__.UIStrings);
var moduleI18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, moduleUIstr_);
var _UI_View_SimpleView;
var HeapSnapshotView = /*#__PURE__*/ function(_superClass) {
    "use strict";
    _inherits(HeapSnapshotView, _superClass);
    var _super = _create_super(HeapSnapshotView);
    function HeapSnapshotView(dataDisplayDelegate, profile) {
        _class_call_check(this, HeapSnapshotView);
        var _this;
        _this = _super.call(this, i18nString(UIStrings.heapSnapshot));
        _define_property(_assert_this_initialized(_this), "searchResults", void 0);
        _define_property(_assert_this_initialized(_this), "profile", void 0);
        _define_property(_assert_this_initialized(_this), "linkifier", void 0);
        _define_property(_assert_this_initialized(_this), "parentDataDisplayDelegate", void 0);
        _define_property(_assert_this_initialized(_this), "searchableViewInternal", void 0);
        _define_property(_assert_this_initialized(_this), "splitWidget", void 0);
        _define_property(_assert_this_initialized(_this), "containmentDataGrid", void 0);
        _define_property(_assert_this_initialized(_this), "containmentWidget", void 0);
        _define_property(_assert_this_initialized(_this), "statisticsView", void 0);
        _define_property(_assert_this_initialized(_this), "constructorsDataGrid", void 0);
        _define_property(_assert_this_initialized(_this), "constructorsWidget", void 0);
        _define_property(_assert_this_initialized(_this), "diffDataGrid", void 0);
        _define_property(_assert_this_initialized(_this), "diffWidget", void 0);
        _define_property(_assert_this_initialized(_this), "allocationDataGrid", void 0);
        _define_property(_assert_this_initialized(_this), "allocationWidget", void 0);
        _define_property(_assert_this_initialized(_this), "allocationStackView", void 0);
        _define_property(_assert_this_initialized(_this), "tabbedPane", void 0);
        _define_property(_assert_this_initialized(_this), "retainmentDataGrid", void 0);
        _define_property(_assert_this_initialized(_this), "retainmentWidget", void 0);
        _define_property(_assert_this_initialized(_this), "objectDetailsView", void 0);
        _define_property(_assert_this_initialized(_this), "perspectives", void 0);
        _define_property(_assert_this_initialized(_this), "comparisonPerspective", void 0);
        _define_property(_assert_this_initialized(_this), "perspectiveSelect", void 0);
        _define_property(_assert_this_initialized(_this), "baseSelect", void 0);
        _define_property(_assert_this_initialized(_this), "filterSelect", void 0);
        _define_property(_assert_this_initialized(_this), "classNameFilter", void 0);
        _define_property(_assert_this_initialized(_this), "selectedSizeText", void 0);
        _define_property(_assert_this_initialized(_this), "resetRetainersButton", void 0);
        _define_property(_assert_this_initialized(_this), "popoverHelper", void 0);
        _define_property(_assert_this_initialized(_this), "currentPerspectiveIndex", void 0);
        _define_property(_assert_this_initialized(_this), "currentPerspective", void 0);
        _define_property(_assert_this_initialized(_this), "dataGrid", void 0);
        _define_property(_assert_this_initialized(_this), "searchThrottler", void 0);
        _define_property(_assert_this_initialized(_this), "baseProfile", void 0);
        _define_property(_assert_this_initialized(_this), "trackingOverviewGrid", void 0);
        _define_property(_assert_this_initialized(_this), "currentSearchResultIndex", -1);
        _define_property(_assert_this_initialized(_this), "currentQuery", void 0);
        _this.searchResults = [];
        _this.element.classList.add('heap-snapshot-view');
        _this.profile = profile;
        _this.linkifier = new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_11__.Linkifier.Linkifier();
        var profileType = profile.profileType();
        profileType.addEventListener("SnapshotReceived" /* HeapSnapshotProfileTypeEvents.SnapshotReceived */ , _this.onReceiveSnapshot, _assert_this_initialized(_this));
        profileType.addEventListener("remove-profile-header" /* ProfileTypeEvents.RemoveProfileHeader */ , _this.onProfileHeaderRemoved, _assert_this_initialized(_this));
        var isHeapTimeline = profileType.id === TrackingHeapSnapshotProfileType.TypeId;
        if (isHeapTimeline) {
            _this.createOverview();
        }
        var hasAllocationStacks = _ProfileTypeRegistry_js__WEBPACK_IMPORTED_MODULE_21__.instance.trackingHeapSnapshotProfileType.recordAllocationStacksSetting().get();
        _this.parentDataDisplayDelegate = dataDisplayDelegate;
        _this.searchableViewInternal = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.SearchableView.SearchableView(_assert_this_initialized(_this), null);
        _this.searchableViewInternal.setPlaceholder(i18nString(UIStrings.find), i18nString(UIStrings.find));
        _this.searchableViewInternal.show(_this.element);
        _this.splitWidget = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.SplitWidget.SplitWidget(false, true, 'heap-snapshot-split-view-state', 200, 200);
        _this.splitWidget.show(_this.searchableViewInternal.element);
        var heapProfilerModel = profile.heapProfilerModel();
        _this.containmentDataGrid = new _HeapSnapshotDataGrids_js__WEBPACK_IMPORTED_MODULE_14__.HeapSnapshotContainmentDataGrid(heapProfilerModel, _assert_this_initialized(_this), /* displayName */ i18nString(UIStrings.containment));
        _this.containmentDataGrid.addEventListener("SelectedNode" /* DataGrid.DataGrid.Events.SelectedNode */ , _this.selectionChanged, _assert_this_initialized(_this));
        _this.containmentWidget = _this.containmentDataGrid.asWidget();
        _this.containmentWidget.setMinimumSize(50, 25);
        _this.statisticsView = new HeapSnapshotStatisticsView();
        _this.constructorsDataGrid = new _HeapSnapshotDataGrids_js__WEBPACK_IMPORTED_MODULE_14__.HeapSnapshotConstructorsDataGrid(heapProfilerModel, _assert_this_initialized(_this));
        _this.constructorsDataGrid.addEventListener("SelectedNode" /* DataGrid.DataGrid.Events.SelectedNode */ , _this.selectionChanged, _assert_this_initialized(_this));
        _this.constructorsWidget = _this.constructorsDataGrid.asWidget();
        _this.constructorsWidget.setMinimumSize(50, 25);
        _this.constructorsWidget.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_13__.pane('heap-snapshot.constructors-view').track({
            resize: true
        })));
        _this.diffDataGrid = new _HeapSnapshotDataGrids_js__WEBPACK_IMPORTED_MODULE_14__.HeapSnapshotDiffDataGrid(heapProfilerModel, _assert_this_initialized(_this));
        _this.diffDataGrid.addEventListener("SelectedNode" /* DataGrid.DataGrid.Events.SelectedNode */ , _this.selectionChanged, _assert_this_initialized(_this));
        _this.diffWidget = _this.diffDataGrid.asWidget();
        _this.diffWidget.setMinimumSize(50, 25);
        _this.allocationDataGrid = null;
        if (isHeapTimeline && hasAllocationStacks) {
            _this.allocationDataGrid = new _HeapSnapshotDataGrids_js__WEBPACK_IMPORTED_MODULE_14__.AllocationDataGrid(heapProfilerModel, _assert_this_initialized(_this));
            _this.allocationDataGrid.addEventListener("SelectedNode" /* DataGrid.DataGrid.Events.SelectedNode */ , _this.onSelectAllocationNode, _assert_this_initialized(_this));
            _this.allocationWidget = _this.allocationDataGrid.asWidget();
            _this.allocationWidget.setMinimumSize(50, 25);
            _this.allocationStackView = new HeapAllocationStackView(heapProfilerModel);
            _this.allocationStackView.setMinimumSize(50, 25);
            _this.tabbedPane = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.TabbedPane.TabbedPane();
        }
        _this.retainmentDataGrid = new _HeapSnapshotDataGrids_js__WEBPACK_IMPORTED_MODULE_14__.HeapSnapshotRetainmentDataGrid(heapProfilerModel, _assert_this_initialized(_this));
        _this.retainmentWidget = _this.retainmentDataGrid.asWidget();
        _this.retainmentWidget.setMinimumSize(50, 21);
        _this.retainmentWidget.element.classList.add('retaining-paths-view');
        _this.retainmentWidget.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_13__.pane('heap-snapshot.retaining-paths-view').track({
            resize: true
        })));
        var splitWidgetResizer;
        if (_this.allocationStackView) {
            _this.tabbedPane = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.TabbedPane.TabbedPane();
            _this.tabbedPane.appendTab('retainers', i18nString(UIStrings.retainers), _this.retainmentWidget);
            _this.tabbedPane.appendTab('allocation-stack', i18nString(UIStrings.allocationStack), _this.allocationStackView);
            splitWidgetResizer = _this.tabbedPane.headerElement();
            _this.objectDetailsView = _this.tabbedPane;
        } else {
            var retainmentViewHeader = document.createElement('div');
            retainmentViewHeader.classList.add('heap-snapshot-view-resizer');
            var retainingPathsTitleDiv = retainmentViewHeader.createChild('div', 'title');
            retainmentViewHeader.createChild('div', 'verticalResizerIcon');
            var retainingPathsTitle = retainingPathsTitleDiv.createChild('span');
            retainingPathsTitle.textContent = i18nString(UIStrings.retainers);
            splitWidgetResizer = retainmentViewHeader;
            _this.objectDetailsView = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.Widget.VBox();
            _this.objectDetailsView.element.appendChild(retainmentViewHeader);
            _this.retainmentWidget.show(_this.objectDetailsView.element);
        }
        _this.splitWidget.hideDefaultResizer();
        _this.splitWidget.installResizer(splitWidgetResizer);
        _this.retainmentDataGrid.addEventListener("SelectedNode" /* DataGrid.DataGrid.Events.SelectedNode */ , _this.inspectedObjectChanged, _assert_this_initialized(_this));
        _this.retainmentDataGrid.reset();
        _this.perspectives = [];
        _this.comparisonPerspective = new ComparisonPerspective();
        _this.perspectives.push(new SummaryPerspective());
        if (profile.profileType() !== _ProfileTypeRegistry_js__WEBPACK_IMPORTED_MODULE_21__.instance.trackingHeapSnapshotProfileType) {
            _this.perspectives.push(_this.comparisonPerspective);
        }
        _this.perspectives.push(new ContainmentPerspective());
        if (_this.allocationWidget) {
            _this.perspectives.push(new AllocationPerspective());
        }
        _this.perspectives.push(new StatisticsPerspective());
        _this.perspectiveSelect = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.Toolbar.ToolbarComboBox(_this.onSelectedPerspectiveChanged.bind(_assert_this_initialized(_this)), i18nString(UIStrings.perspective), undefined, 'profiler.heap-snapshot-perspective');
        _this.updatePerspectiveOptions();
        _this.baseSelect = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.Toolbar.ToolbarComboBox(_this.changeBase.bind(_assert_this_initialized(_this)), i18nString(UIStrings.baseSnapshot), undefined, 'profiler.heap-snapshot-base');
        _this.baseSelect.setVisible(false);
        _this.updateBaseOptions();
        _this.filterSelect = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.Toolbar.ToolbarComboBox(_this.changeFilter.bind(_assert_this_initialized(_this)), i18nString(UIStrings.filter), undefined, 'profiler.heap-snapshot-filter');
        _this.filterSelect.setVisible(false);
        _this.updateFilterOptions();
        _this.classNameFilter = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.Toolbar.ToolbarFilter(i18nString(UIStrings.filterByClass));
        _this.classNameFilter.setVisible(false);
        _this.constructorsDataGrid.setNameFilter(_this.classNameFilter);
        _this.diffDataGrid.setNameFilter(_this.classNameFilter);
        _this.selectedSizeText = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.Toolbar.ToolbarText();
        var restoreIgnoredRetainers = i18nString(UIStrings.restoreIgnoredRetainers);
        _this.resetRetainersButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.Toolbar.ToolbarButton(restoreIgnoredRetainers, 'clear-list', restoreIgnoredRetainers);
        _this.resetRetainersButton.setVisible(false);
        var _this1 = _assert_this_initialized(_this);
        _this.resetRetainersButton.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */ , /*#__PURE__*/ _async_to_generator(function() {
            var _this_retainmentDataGrid_snapshot;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        // The reset retainers button acts upon whichever snapshot is currently shown in the Retainers pane.
                        return [
                            4,
                            (_this_retainmentDataGrid_snapshot = _this1.retainmentDataGrid.snapshot) === null || _this_retainmentDataGrid_snapshot === void 0 ? void 0 : _this_retainmentDataGrid_snapshot.unignoreAllNodesInRetainersView()
                        ];
                    case 1:
                        _state.sent();
                        return [
                            4,
                            _this1.retainmentDataGrid.dataSourceChanged()
                        ];
                    case 2:
                        _state.sent();
                        return [
                            2
                        ];
                }
            });
        }));
        _this.retainmentDataGrid.resetRetainersButton = _this.resetRetainersButton;
        _this.popoverHelper = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.PopoverHelper.PopoverHelper(_this.element, _this.getPopoverRequest.bind(_assert_this_initialized(_this)), 'profiler.heap-snapshot-object');
        _this.popoverHelper.setDisableOnClick(true);
        _this.popoverHelper.setHasPadding(true);
        _this.element.addEventListener('scroll', _this.popoverHelper.hidePopover.bind(_this.popoverHelper), true);
        _this.currentPerspectiveIndex = 0;
        _this.currentPerspective = _this.perspectives[0];
        _this.currentPerspective.activate(_assert_this_initialized(_this));
        _this.dataGrid = _this.currentPerspective.masterGrid(_assert_this_initialized(_this));
        void _this.populate();
        _this.searchThrottler = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Throttler.Throttler(0);
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = _this.profiles()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var existingProfile = _step.value;
                existingProfile.addEventListener("ProfileTitleChanged" /* ProfileHeaderEvents.ProfileTitleChanged */ , _this.updateControls, _assert_this_initialized(_this));
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
        return _this;
    }
    _create_class(HeapSnapshotView, [
        {
            key: "createOverview",
            value: function createOverview() {
                var profileType = this.profile.profileType();
                this.trackingOverviewGrid = new _HeapTimelineOverview_js__WEBPACK_IMPORTED_MODULE_17__.HeapTimelineOverview();
                this.trackingOverviewGrid.addEventListener("IdsRangeChanged" /* Events.IdsRangeChanged */ , this.onIdsRangeChanged.bind(this));
                if (!this.profile.fromFile() && profileType.profileBeingRecorded() === this.profile) {
                    profileType.addEventListener("HeapStatsUpdate" /* TrackingHeapSnapshotProfileTypeEvents.HeapStatsUpdate */ , this.onHeapStatsUpdate, this);
                    profileType.addEventListener("TrackingStopped" /* TrackingHeapSnapshotProfileTypeEvents.TrackingStopped */ , this.onStopTracking, this);
                    this.trackingOverviewGrid.start();
                }
            }
        },
        {
            key: "onStopTracking",
            value: function onStopTracking() {
                var profileType = this.profile.profileType();
                profileType.removeEventListener("HeapStatsUpdate" /* TrackingHeapSnapshotProfileTypeEvents.HeapStatsUpdate */ , this.onHeapStatsUpdate, this);
                profileType.removeEventListener("TrackingStopped" /* TrackingHeapSnapshotProfileTypeEvents.TrackingStopped */ , this.onStopTracking, this);
                if (this.trackingOverviewGrid) {
                    this.trackingOverviewGrid.stop();
                }
            }
        },
        {
            key: "onHeapStatsUpdate",
            value: function onHeapStatsUpdate(param) {
                var samples = param.data;
                if (this.trackingOverviewGrid) {
                    this.trackingOverviewGrid.setSamples(samples);
                }
            }
        },
        {
            key: "searchableView",
            value: function searchableView() {
                return this.searchableViewInternal;
            }
        },
        {
            key: "showProfile",
            value: function showProfile(profile) {
                return this.parentDataDisplayDelegate.showProfile(profile);
            }
        },
        {
            key: "showObject",
            value: function showObject(snapshotObjectId, perspectiveName) {
                if (Number(snapshotObjectId) <= this.profile.maxJSObjectId) {
                    void this.selectLiveObject(perspectiveName, snapshotObjectId);
                } else {
                    this.parentDataDisplayDelegate.showObject(snapshotObjectId, perspectiveName);
                }
            }
        },
        {
            key: "linkifyObject",
            value: function linkifyObject(nodeIndex) {
                var _this = this;
                return _async_to_generator(function() {
                    var heapProfilerModel, location, debuggerModel, rawLocation, script, sourceURL;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                heapProfilerModel = _this.profile.heapProfilerModel();
                                // heapProfilerModel is null if snapshot was loaded from file
                                if (!heapProfilerModel) {
                                    return [
                                        2,
                                        null
                                    ];
                                }
                                return [
                                    4,
                                    _this.profile.getLocation(nodeIndex)
                                ];
                            case 1:
                                location = _state.sent();
                                if (!location) {
                                    return [
                                        2,
                                        null
                                    ];
                                }
                                debuggerModel = heapProfilerModel.runtimeModel().debuggerModel();
                                rawLocation = debuggerModel.createRawLocationByScriptId(String(location.scriptId), location.lineNumber, location.columnNumber);
                                if (!rawLocation) {
                                    return [
                                        2,
                                        null
                                    ];
                                }
                                script = rawLocation.script();
                                sourceURL = script && script.sourceURL;
                                return [
                                    2,
                                    sourceURL && _this.linkifier ? _this.linkifier.linkifyRawLocation(rawLocation, sourceURL) : null
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "populate",
            value: function populate() {
                var _this = this;
                return _async_to_generator(function() {
                    var heapSnapshotProxy, samples, profileSamples, list, profileIndex;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this.profile.loadPromise
                                ];
                            case 1:
                                heapSnapshotProxy = _state.sent();
                                void _this.retrieveStatistics(heapSnapshotProxy);
                                if (_this.dataGrid) {
                                    void _this.dataGrid.setDataSource(heapSnapshotProxy, 0);
                                }
                                if (!(_this.profile.profileType().id === TrackingHeapSnapshotProfileType.TypeId && _this.profile.fromFile())) return [
                                    3,
                                    3
                                ];
                                return [
                                    4,
                                    heapSnapshotProxy.getSamples()
                                ];
                            case 2:
                                samples = _state.sent();
                                if (samples) {
                                    console.assert(Boolean(samples.timestamps.length));
                                    profileSamples = new _HeapTimelineOverview_js__WEBPACK_IMPORTED_MODULE_17__.Samples();
                                    profileSamples.sizes = samples.sizes;
                                    profileSamples.ids = samples.lastAssignedIds;
                                    profileSamples.timestamps = samples.timestamps;
                                    profileSamples.max = samples.sizes;
                                    profileSamples.totalTime = Math.max(samples.timestamps[samples.timestamps.length - 1] || 0, 10000);
                                    if (_this.trackingOverviewGrid) {
                                        _this.trackingOverviewGrid.setSamples(profileSamples);
                                    }
                                }
                                _state.label = 3;
                            case 3:
                                list = _this.profiles();
                                profileIndex = list.indexOf(_this.profile);
                                _this.baseSelect.setSelectedIndex(Math.max(0, profileIndex - 1));
                                if (_this.trackingOverviewGrid) {
                                    _this.trackingOverviewGrid.updateGrid();
                                }
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "retrieveStatistics",
            value: function retrieveStatistics(heapSnapshotProxy) {
                var _this = this;
                return _async_to_generator(function() {
                    var statistics, records;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    heapSnapshotProxy.getStatistics()
                                ];
                            case 1:
                                statistics = _state.sent();
                                records = [
                                    {
                                        value: statistics.code,
                                        color: '#f77',
                                        title: i18nString(UIStrings.code)
                                    },
                                    {
                                        value: statistics.strings,
                                        color: '#5e5',
                                        title: i18nString(UIStrings.strings)
                                    },
                                    {
                                        value: statistics.jsArrays,
                                        color: '#7af',
                                        title: i18nString(UIStrings.jsArrays)
                                    },
                                    {
                                        value: statistics.native,
                                        color: '#fc5',
                                        title: i18nString(UIStrings.typedArrays)
                                    },
                                    {
                                        value: statistics.system,
                                        color: '#98f',
                                        title: i18nString(UIStrings.systemObjects)
                                    }
                                ];
                                _this.statisticsView.setTotalAndRecords(statistics.total, records);
                                return [
                                    2,
                                    statistics
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "onIdsRangeChanged",
            value: function onIdsRangeChanged(event) {
                var _event_data = event.data, minId = _event_data.minId, maxId = _event_data.maxId;
                this.selectedSizeText.setText(i18nString(UIStrings.selectedSizeS, {
                    PH1: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.NumberUtilities.bytesToString(event.data.size)
                }));
                if (this.constructorsDataGrid.snapshot) {
                    this.constructorsDataGrid.setSelectionRange(minId, maxId);
                }
            }
        },
        {
            key: "toolbarItems",
            value: function toolbarItems() {
                var _this = this;
                return _async_to_generator(function() {
                    var result;
                    return _ts_generator(this, function(_state) {
                        result = [
                            _this.perspectiveSelect,
                            _this.classNameFilter
                        ];
                        if (_this.profile.profileType() !== _ProfileTypeRegistry_js__WEBPACK_IMPORTED_MODULE_21__.instance.trackingHeapSnapshotProfileType) {
                            result.push(_this.baseSelect, _this.filterSelect);
                        }
                        result.push(_this.selectedSizeText);
                        result.push(_this.resetRetainersButton);
                        return [
                            2,
                            result
                        ];
                    });
                })();
            }
        },
        {
            key: "willHide",
            value: function willHide() {
                this.currentSearchResultIndex = -1;
                this.popoverHelper.hidePopover();
            }
        },
        {
            key: "supportsCaseSensitiveSearch",
            value: function supportsCaseSensitiveSearch() {
                return true;
            }
        },
        {
            key: "supportsRegexSearch",
            value: function supportsRegexSearch() {
                return false;
            }
        },
        {
            key: "onSearchCanceled",
            value: function onSearchCanceled() {
                this.currentSearchResultIndex = -1;
                this.searchResults = [];
            }
        },
        {
            key: "selectRevealedNode",
            value: function selectRevealedNode(node) {
                if (node) {
                    node.select();
                }
            }
        },
        {
            key: "performSearch",
            value: function performSearch(searchConfig, shouldJump, jumpBackwards) {
                var nextQuery = new _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_7__.HeapSnapshotModel.SearchConfig(searchConfig.query.trim(), searchConfig.caseSensitive, searchConfig.isRegex, shouldJump, jumpBackwards || false);
                void this.searchThrottler.schedule(this.performSearchInternal.bind(this, nextQuery));
            }
        },
        {
            key: "performSearchInternal",
            value: function performSearchInternal(nextQuery) {
                var _this = this;
                return _async_to_generator(function() {
                    var query, snapshotNodeId, node, filter, _tmp;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                // Call onSearchCanceled since it will reset everything we need before doing a new search.
                                _this.onSearchCanceled();
                                if (!_this.currentPerspective.supportsSearch()) {
                                    return [
                                        2
                                    ];
                                }
                                _this.currentQuery = nextQuery;
                                query = nextQuery.query.trim();
                                if (!query) {
                                    return [
                                        2
                                    ];
                                }
                                if (!(query.charAt(0) === '@')) return [
                                    3,
                                    2
                                ];
                                snapshotNodeId = parseInt(query.substring(1), 10);
                                if (isNaN(snapshotNodeId)) {
                                    return [
                                        2
                                    ];
                                }
                                if (!_this.dataGrid) {
                                    return [
                                        2
                                    ];
                                }
                                return [
                                    4,
                                    _this.dataGrid.revealObjectByHeapSnapshotId(String(snapshotNodeId))
                                ];
                            case 1:
                                node = _state.sent();
                                _this.selectRevealedNode(node);
                                return [
                                    2
                                ];
                            case 2:
                                if (!_this.profile.snapshotProxy || !_this.dataGrid) {
                                    return [
                                        2
                                    ];
                                }
                                filter = _this.dataGrid.nodeFilter();
                                if (!filter) return [
                                    3,
                                    4
                                ];
                                return [
                                    4,
                                    _this.profile.snapshotProxy.search(_this.currentQuery, filter)
                                ];
                            case 3:
                                _tmp = _state.sent();
                                return [
                                    3,
                                    5
                                ];
                            case 4:
                                _tmp = [];
                                _state.label = 5;
                            case 5:
                                _this.searchResults = _tmp;
                                _this.searchableViewInternal.updateSearchMatchesCount(_this.searchResults.length);
                                if (_this.searchResults.length) {
                                    _this.currentSearchResultIndex = nextQuery.jumpBackward ? _this.searchResults.length - 1 : 0;
                                }
                                return [
                                    4,
                                    _this.jumpToSearchResult(_this.currentSearchResultIndex)
                                ];
                            case 6:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "jumpToNextSearchResult",
            value: function jumpToNextSearchResult() {
                if (!this.searchResults.length) {
                    return;
                }
                this.currentSearchResultIndex = (this.currentSearchResultIndex + 1) % this.searchResults.length;
                void this.searchThrottler.schedule(this.jumpToSearchResult.bind(this, this.currentSearchResultIndex));
            }
        },
        {
            key: "jumpToPreviousSearchResult",
            value: function jumpToPreviousSearchResult() {
                if (!this.searchResults.length) {
                    return;
                }
                this.currentSearchResultIndex = (this.currentSearchResultIndex + this.searchResults.length - 1) % this.searchResults.length;
                void this.searchThrottler.schedule(this.jumpToSearchResult.bind(this, this.currentSearchResultIndex));
            }
        },
        {
            key: "jumpToSearchResult",
            value: function jumpToSearchResult(searchResultIndex) {
                var _this = this;
                return _async_to_generator(function() {
                    var node;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this.searchableViewInternal.updateCurrentMatchIndex(searchResultIndex);
                                if (searchResultIndex === -1) {
                                    return [
                                        2
                                    ];
                                }
                                if (!_this.dataGrid) {
                                    return [
                                        2
                                    ];
                                }
                                return [
                                    4,
                                    _this.dataGrid.revealObjectByHeapSnapshotId(String(_this.searchResults[searchResultIndex]))
                                ];
                            case 1:
                                node = _state.sent();
                                _this.selectRevealedNode(node);
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "refreshVisibleData",
            value: function refreshVisibleData() {
                if (!this.dataGrid) {
                    return;
                }
                var child = this.dataGrid.rootNode().children[0];
                while(child){
                    child.refresh();
                    child = child.traverseNextNode(false, null, true);
                }
            }
        },
        {
            key: "changeBase",
            value: function changeBase() {
                if (this.baseProfile === this.profiles()[this.baseSelect.selectedIndex()]) {
                    return;
                }
                this.baseProfile = this.profiles()[this.baseSelect.selectedIndex()];
                var dataGrid = this.dataGrid;
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
        },
        {
            key: "changeFilter",
            value: function changeFilter() {
                var selectedIndex = this.filterSelect.selectedIndex();
                var filterName = undefined;
                var indexOfFirstAlwaysAvailableFilter = this.filterSelect.size() - HeapSnapshotView.ALWAYS_AVAILABLE_FILTERS.length;
                if (selectedIndex >= indexOfFirstAlwaysAvailableFilter) {
                    filterName = HeapSnapshotView.ALWAYS_AVAILABLE_FILTERS[selectedIndex - indexOfFirstAlwaysAvailableFilter].filterName;
                    selectedIndex = 0;
                }
                var profileIndex = selectedIndex - 1;
                if (!this.dataGrid) {
                    return;
                }
                this.dataGrid.filterSelectIndexChanged(this.profiles(), profileIndex, filterName);
                if (!this.currentQuery || !this.searchResults) {
                    return;
                }
                // The current search needs to be performed again. First negate out previous match
                // count by calling the search finished callback with a negative number of matches.
                // Then perform the search again with the same query and callback.
                this.performSearch(this.currentQuery, false);
            }
        },
        {
            key: "profiles",
            value: function profiles() {
                return this.profile.profileType().getProfiles();
            }
        },
        {
            key: "selectionChanged",
            value: function selectionChanged(event) {
                var selectedNode = event.data;
                this.setSelectedNodeForDetailsView(selectedNode);
                this.inspectedObjectChanged(event);
            }
        },
        {
            key: "onSelectAllocationNode",
            value: function onSelectAllocationNode(event) {
                var selectedNode = event.data;
                this.constructorsDataGrid.setAllocationNodeId(selectedNode.allocationNodeId());
                this.setSelectedNodeForDetailsView(null);
            }
        },
        {
            key: "inspectedObjectChanged",
            value: function inspectedObjectChanged(event) {
                var selectedNode = event.data;
                var heapProfilerModel = this.profile.heapProfilerModel();
                if (heapProfilerModel && _instanceof(selectedNode, _HeapSnapshotGridNodes_js__WEBPACK_IMPORTED_MODULE_15__.HeapSnapshotGenericObjectNode)) {
                    void heapProfilerModel.addInspectedHeapObject(String(selectedNode.snapshotNodeId));
                }
            }
        },
        {
            key: "setSelectedNodeForDetailsView",
            value: function setSelectedNodeForDetailsView(nodeItem) {
                var dataSource = nodeItem && nodeItem.retainersDataSource();
                if (dataSource) {
                    void this.retainmentDataGrid.setDataSource(dataSource.snapshot, dataSource.snapshotNodeIndex, dataSource.snapshotNodeId);
                    if (this.allocationStackView) {
                        void this.allocationStackView.setAllocatedObject(dataSource.snapshot, dataSource.snapshotNodeIndex);
                    }
                } else {
                    if (this.allocationStackView) {
                        this.allocationStackView.clear();
                    }
                    this.retainmentDataGrid.reset();
                }
            }
        },
        {
            key: "changePerspectiveAndWait",
            value: function changePerspectiveAndWait(perspectiveTitle) {
                var _this = this;
                return _async_to_generator(function() {
                    var perspectiveIndex, dataGrid, promise, option;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                perspectiveIndex = _this.perspectives.findIndex(function(perspective) {
                                    return perspective.title() === perspectiveTitle;
                                });
                                if (perspectiveIndex === -1 || _this.currentPerspectiveIndex === perspectiveIndex) {
                                    return [
                                        2
                                    ];
                                }
                                dataGrid = _this.perspectives[perspectiveIndex].masterGrid(_this);
                                if (!dataGrid) {
                                    return [
                                        2
                                    ];
                                }
                                promise = dataGrid.once(_HeapSnapshotDataGrids_js__WEBPACK_IMPORTED_MODULE_14__.HeapSnapshotSortableDataGridEvents.ContentShown);
                                option = _this.perspectiveSelect.options().find(function(option) {
                                    return option.value === String(perspectiveIndex);
                                });
                                _this.perspectiveSelect.select(option);
                                _this.changePerspective(perspectiveIndex);
                                return [
                                    4,
                                    promise
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "updateDataSourceAndView",
            value: function updateDataSourceAndView() {
                var _this = this;
                return _async_to_generator(function() {
                    var dataGrid, snapshotProxy, baseSnapshotProxy;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                dataGrid = _this.dataGrid;
                                if (!dataGrid || dataGrid.snapshot) {
                                    return [
                                        2
                                    ];
                                }
                                return [
                                    4,
                                    _this.profile.loadPromise
                                ];
                            case 1:
                                snapshotProxy = _state.sent();
                                if (_this.dataGrid !== dataGrid) {
                                    return [
                                        2
                                    ];
                                }
                                if (dataGrid.snapshot !== snapshotProxy) {
                                    void dataGrid.setDataSource(snapshotProxy, 0);
                                }
                                if (dataGrid !== _this.diffDataGrid) {
                                    return [
                                        2
                                    ];
                                }
                                if (!_this.baseProfile) {
                                    _this.baseProfile = _this.profiles()[_this.baseSelect.selectedIndex()];
                                }
                                return [
                                    4,
                                    _this.baseProfile.loadPromise
                                ];
                            case 2:
                                baseSnapshotProxy = _state.sent();
                                if (_this.diffDataGrid.baseSnapshot !== baseSnapshotProxy) {
                                    _this.diffDataGrid.setBaseDataSource(baseSnapshotProxy);
                                }
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "onSelectedPerspectiveChanged",
            value: function onSelectedPerspectiveChanged(event) {
                this.changePerspective(Number(event.target.selectedOptions[0].value));
            }
        },
        {
            key: "changePerspective",
            value: function changePerspective(selectedIndex) {
                if (selectedIndex === this.currentPerspectiveIndex) {
                    return;
                }
                this.currentPerspectiveIndex = selectedIndex;
                this.currentPerspective.deactivate(this);
                var perspective = this.perspectives[selectedIndex];
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
        },
        {
            key: "selectLiveObject",
            value: function selectLiveObject(perspectiveName, snapshotObjectId) {
                var _this = this;
                return _async_to_generator(function() {
                    var node;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this.changePerspectiveAndWait(perspectiveName)
                                ];
                            case 1:
                                _state.sent();
                                if (!_this.dataGrid) {
                                    return [
                                        2
                                    ];
                                }
                                return [
                                    4,
                                    _this.dataGrid.revealObjectByHeapSnapshotId(snapshotObjectId)
                                ];
                            case 2:
                                node = _state.sent();
                                if (node) {
                                    node.select();
                                } else {
                                    _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Console.Console.instance().error('Cannot find corresponding heap snapshot node');
                                }
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "getPopoverRequest",
            value: function getPopoverRequest(event) {
                var span = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.UIUtils.enclosingNodeOrSelfWithNodeName(event.target, 'span');
                var row = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.UIUtils.enclosingNodeOrSelfWithNodeName(event.target, 'tr');
                if (!row) {
                    return null;
                }
                if (!this.dataGrid) {
                    return null;
                }
                var node = this.dataGrid.dataGridNodeFromNode(row) || this.containmentDataGrid.dataGridNodeFromNode(row) || this.constructorsDataGrid.dataGridNodeFromNode(row) || this.diffDataGrid.dataGridNodeFromNode(row) || this.allocationDataGrid && this.allocationDataGrid.dataGridNodeFromNode(row) || this.retainmentDataGrid.dataGridNodeFromNode(row);
                var heapProfilerModel = this.profile.heapProfilerModel();
                if (!node || !span || !heapProfilerModel) {
                    return null;
                }
                var objectPopoverHelper;
                return {
                    // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
                    // @ts-expect-error
                    box: span.boxInWindow(),
                    show: function() {
                        var _ref = _async_to_generator(function(popover) {
                            var remoteObject;
                            return _ts_generator(this, function(_state) {
                                switch(_state.label){
                                    case 0:
                                        if (!heapProfilerModel) {
                                            return [
                                                2,
                                                false
                                            ];
                                        }
                                        return [
                                            4,
                                            node.queryObjectContent(heapProfilerModel, 'popover')
                                        ];
                                    case 1:
                                        remoteObject = _state.sent();
                                        if (!_instanceof(remoteObject, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.RemoteObject.RemoteObject)) return [
                                            3,
                                            3
                                        ];
                                        return [
                                            4,
                                            _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_9__.ObjectPopoverHelper.ObjectPopoverHelper.buildObjectPopover(remoteObject, popover)
                                        ];
                                    case 2:
                                        objectPopoverHelper = _state.sent();
                                        return [
                                            3,
                                            4
                                        ];
                                    case 3:
                                        objectPopoverHelper = _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_9__.ObjectPopoverHelper.ObjectPopoverHelper.buildDescriptionPopover(remoteObject.description, remoteObject.link, popover);
                                        _state.label = 4;
                                    case 4:
                                        if (!objectPopoverHelper) {
                                            heapProfilerModel.runtimeModel().releaseObjectGroup('popover');
                                            return [
                                                2,
                                                false
                                            ];
                                        }
                                        return [
                                            2,
                                            true
                                        ];
                                }
                            });
                        });
                        return function(popover) {
                            return _ref.apply(this, arguments);
                        };
                    }(),
                    hide: function() {
                        heapProfilerModel.runtimeModel().releaseObjectGroup('popover');
                        if (objectPopoverHelper) {
                            objectPopoverHelper.dispose();
                        }
                    }
                };
            }
        },
        {
            key: "updatePerspectiveOptions",
            value: function updatePerspectiveOptions() {
                var _this = this;
                var multipleSnapshots = this.profiles().length > 1;
                this.perspectiveSelect.removeOptions();
                this.perspectives.forEach(function(perspective, index) {
                    if (multipleSnapshots || perspective !== _this.comparisonPerspective) {
                        var option = _this.perspectiveSelect.createOption(perspective.title(), String(index));
                        if (perspective === _this.currentPerspective) {
                            _this.perspectiveSelect.select(option);
                        }
                    }
                });
            }
        },
        {
            key: "updateBaseOptions",
            value: function updateBaseOptions() {
                var list = this.profiles();
                var selectedIndex = this.baseSelect.selectedIndex();
                this.baseSelect.removeOptions();
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = list[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var item = _step.value;
                        this.baseSelect.createOption(item.title);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                if (selectedIndex > -1) {
                    this.baseSelect.setSelectedIndex(selectedIndex);
                }
            }
        },
        {
            key: "updateFilterOptions",
            value: function updateFilterOptions() {
                var list = this.profiles();
                var selectedIndex = this.filterSelect.selectedIndex();
                var originalSize = this.filterSelect.size();
                this.filterSelect.removeOptions();
                this.filterSelect.createOption(i18nString(UIStrings.allObjects));
                for(var i = 0; i < list.length; ++i){
                    var title = void 0;
                    if (!i) {
                        title = i18nString(UIStrings.objectsAllocatedBeforeS, {
                            PH1: list[i].title
                        });
                    } else {
                        title = i18nString(UIStrings.objectsAllocatedBetweenSAndS, {
                            PH1: list[i - 1].title,
                            PH2: list[i].title
                        });
                    }
                    this.filterSelect.createOption(title);
                }
                // Create a dividing line using em dashes.
                var dividerIndex = this.filterSelect.size();
                var divider = this.filterSelect.createOption('\u2014'.repeat(18));
                divider.disabled = true;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = HeapSnapshotView.ALWAYS_AVAILABLE_FILTERS[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var filter = _step.value;
                        this.filterSelect.createOption(filter.uiName);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                var newSize = this.filterSelect.size();
                if (selectedIndex > -1) {
                    var distanceFromEnd = originalSize - selectedIndex;
                    if (distanceFromEnd <= HeapSnapshotView.ALWAYS_AVAILABLE_FILTERS.length) {
                        // If one of the always-available filters was selected, then select the
                        // same filter again even though its index may have changed.
                        this.filterSelect.setSelectedIndex(newSize - distanceFromEnd);
                    } else if (selectedIndex >= dividerIndex) {
                        // If the select list is now shorter than it was, such that we can't
                        // keep the index unchanged, set it to -1, which causes it to be blank.
                        this.filterSelect.setSelectedIndex(-1);
                    } else {
                        this.filterSelect.setSelectedIndex(selectedIndex);
                    }
                }
            }
        },
        {
            key: "updateControls",
            value: function updateControls() {
                this.updatePerspectiveOptions();
                this.updateBaseOptions();
                this.updateFilterOptions();
            }
        },
        {
            key: "onReceiveSnapshot",
            value: function onReceiveSnapshot(event) {
                this.updateControls();
                var profile = event.data;
                profile.addEventListener("ProfileTitleChanged" /* ProfileHeaderEvents.ProfileTitleChanged */ , this.updateControls, this);
            }
        },
        {
            key: "onProfileHeaderRemoved",
            value: function onProfileHeaderRemoved(event) {
                var profile = event.data;
                profile.removeEventListener("ProfileTitleChanged" /* ProfileHeaderEvents.ProfileTitleChanged */ , this.updateControls, this);
                if (this.profile === profile) {
                    this.detach();
                    this.profile.profileType().removeEventListener("SnapshotReceived" /* HeapSnapshotProfileTypeEvents.SnapshotReceived */ , this.onReceiveSnapshot, this);
                    this.profile.profileType().removeEventListener("remove-profile-header" /* ProfileTypeEvents.RemoveProfileHeader */ , this.onProfileHeaderRemoved, this);
                    this.dispose();
                } else {
                    this.updateControls();
                }
            }
        },
        {
            key: "dispose",
            value: function dispose() {
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
                    this.trackingOverviewGrid.removeEventListener("IdsRangeChanged" /* Events.IdsRangeChanged */ , this.onIdsRangeChanged.bind(this));
                }
            }
        }
    ]);
    return HeapSnapshotView;
}(_UI_View_SimpleView = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.View.SimpleView);
_define_property(HeapSnapshotView, "ALWAYS_AVAILABLE_FILTERS", [
    {
        uiName: i18nString(UIStrings.duplicatedStrings),
        filterName: 'duplicatedStrings'
    },
    {
        uiName: i18nString(UIStrings.objectsRetainedByDetachedDomNodes),
        filterName: 'objectsRetainedByDetachedDomNodes'
    },
    {
        uiName: i18nString(UIStrings.objectsRetainedByConsole),
        filterName: 'objectsRetainedByConsole'
    }
]);
var Perspective = /*#__PURE__*/ function() {
    "use strict";
    function Perspective(title) {
        _class_call_check(this, Perspective);
        _define_property(this, "titleInternal", void 0);
        this.titleInternal = title;
    }
    _create_class(Perspective, [
        {
            key: "activate",
            value: function activate(_heapSnapshotView) {}
        },
        {
            key: "deactivate",
            value: function deactivate(heapSnapshotView) {
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
        },
        {
            key: "masterGrid",
            value: function masterGrid(_heapSnapshotView) {
                return null;
            }
        },
        {
            key: "title",
            value: function title() {
                return this.titleInternal;
            }
        },
        {
            key: "supportsSearch",
            value: function supportsSearch() {
                return false;
            }
        }
    ]);
    return Perspective;
}();
var SummaryPerspective = /*#__PURE__*/ function(Perspective) {
    "use strict";
    _inherits(SummaryPerspective, Perspective);
    var _super = _create_super(SummaryPerspective);
    function SummaryPerspective() {
        _class_call_check(this, SummaryPerspective);
        return _super.call(this, i18nString(UIStrings.summary));
    }
    _create_class(SummaryPerspective, [
        {
            key: "activate",
            value: function activate(heapSnapshotView) {
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
        },
        {
            key: "masterGrid",
            value: function masterGrid(heapSnapshotView) {
                return heapSnapshotView.constructorsDataGrid;
            }
        },
        {
            key: "supportsSearch",
            value: function supportsSearch() {
                return true;
            }
        }
    ]);
    return SummaryPerspective;
}(Perspective);
var ComparisonPerspective = /*#__PURE__*/ function(Perspective) {
    "use strict";
    _inherits(ComparisonPerspective, Perspective);
    var _super = _create_super(ComparisonPerspective);
    function ComparisonPerspective() {
        _class_call_check(this, ComparisonPerspective);
        return _super.call(this, i18nString(UIStrings.comparison));
    }
    _create_class(ComparisonPerspective, [
        {
            key: "activate",
            value: function activate(heapSnapshotView) {
                heapSnapshotView.splitWidget.setMainWidget(heapSnapshotView.diffWidget);
                heapSnapshotView.splitWidget.setSidebarWidget(heapSnapshotView.objectDetailsView);
                heapSnapshotView.splitWidget.show(heapSnapshotView.searchableViewInternal.element);
                heapSnapshotView.baseSelect.setVisible(true);
                heapSnapshotView.classNameFilter.setVisible(true);
            }
        },
        {
            key: "masterGrid",
            value: function masterGrid(heapSnapshotView) {
                return heapSnapshotView.diffDataGrid;
            }
        },
        {
            key: "supportsSearch",
            value: function supportsSearch() {
                return true;
            }
        }
    ]);
    return ComparisonPerspective;
}(Perspective);
var ContainmentPerspective = /*#__PURE__*/ function(Perspective) {
    "use strict";
    _inherits(ContainmentPerspective, Perspective);
    var _super = _create_super(ContainmentPerspective);
    function ContainmentPerspective() {
        _class_call_check(this, ContainmentPerspective);
        return _super.call(this, i18nString(UIStrings.containment));
    }
    _create_class(ContainmentPerspective, [
        {
            key: "activate",
            value: function activate(heapSnapshotView) {
                heapSnapshotView.splitWidget.setMainWidget(heapSnapshotView.containmentWidget);
                heapSnapshotView.splitWidget.setSidebarWidget(heapSnapshotView.objectDetailsView);
                heapSnapshotView.splitWidget.show(heapSnapshotView.searchableViewInternal.element);
            }
        },
        {
            key: "masterGrid",
            value: function masterGrid(heapSnapshotView) {
                return heapSnapshotView.containmentDataGrid;
            }
        }
    ]);
    return ContainmentPerspective;
}(Perspective);
var AllocationPerspective = /*#__PURE__*/ function(Perspective) {
    "use strict";
    _inherits(AllocationPerspective, Perspective);
    var _super = _create_super(AllocationPerspective);
    function AllocationPerspective() {
        _class_call_check(this, AllocationPerspective);
        var _this;
        _this = _super.call(this, i18nString(UIStrings.allocation));
        _define_property(_assert_this_initialized(_this), "allocationSplitWidget", void 0);
        _this.allocationSplitWidget = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.SplitWidget.SplitWidget(false, true, 'heap-snapshot-allocation-split-view-state', 200, 200);
        _this.allocationSplitWidget.setSidebarWidget(new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.Widget.VBox());
        return _this;
    }
    _create_class(AllocationPerspective, [
        {
            key: "activate",
            value: function activate(heapSnapshotView) {
                if (heapSnapshotView.allocationWidget) {
                    this.allocationSplitWidget.setMainWidget(heapSnapshotView.allocationWidget);
                }
                heapSnapshotView.splitWidget.setMainWidget(heapSnapshotView.constructorsWidget);
                heapSnapshotView.splitWidget.setSidebarWidget(heapSnapshotView.objectDetailsView);
                var allocatedObjectsView = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.Widget.VBox();
                var resizer = document.createElement('div');
                resizer.classList.add('heap-snapshot-view-resizer');
                var title = resizer.createChild('div', 'title').createChild('span');
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
                    var selectedNode = heapSnapshotView.allocationDataGrid.selectedNode;
                    if (selectedNode) {
                        heapSnapshotView.constructorsDataGrid.setAllocationNodeId(selectedNode.allocationNodeId());
                    }
                }
            }
        },
        {
            key: "deactivate",
            value: function deactivate(heapSnapshotView) {
                this.allocationSplitWidget.detach();
                _get(_get_prototype_of(AllocationPerspective.prototype), "deactivate", this).call(this, heapSnapshotView);
            }
        },
        {
            key: "masterGrid",
            value: function masterGrid(heapSnapshotView) {
                return heapSnapshotView.allocationDataGrid;
            }
        }
    ]);
    return AllocationPerspective;
}(Perspective);
var StatisticsPerspective = /*#__PURE__*/ function(Perspective) {
    "use strict";
    _inherits(StatisticsPerspective, Perspective);
    var _super = _create_super(StatisticsPerspective);
    function StatisticsPerspective() {
        _class_call_check(this, StatisticsPerspective);
        return _super.call(this, i18nString(UIStrings.statistics));
    }
    _create_class(StatisticsPerspective, [
        {
            key: "activate",
            value: function activate(heapSnapshotView) {
                heapSnapshotView.statisticsView.show(heapSnapshotView.searchableViewInternal.element);
            }
        },
        {
            key: "masterGrid",
            value: function masterGrid(_heapSnapshotView) {
                return null;
            }
        }
    ]);
    return StatisticsPerspective;
}(Perspective);
var _Common_ObjectWrapper_eventMixin;
var HeapSnapshotProfileType = /*#__PURE__*/ function(_superClass) {
    "use strict";
    _inherits(HeapSnapshotProfileType, _superClass);
    var _super = _create_super(HeapSnapshotProfileType);
    function HeapSnapshotProfileType(id, title) {
        _class_call_check(this, HeapSnapshotProfileType);
        var _this;
        _this = _super.call(this, id || HeapSnapshotProfileType.TypeId, title || i18nString(UIStrings.heapSnapshot));
        _define_property(_assert_this_initialized(_this), "exposeInternals", void 0);
        _define_property(_assert_this_initialized(_this), "customContentInternal", void 0);
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().observeModels(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.HeapProfilerModel.HeapProfilerModel, _assert_this_initialized(_this));
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.HeapProfilerModel.HeapProfilerModel, "ResetProfiles" /* SDK.HeapProfilerModel.Events.ResetProfiles */ , _this.resetProfiles, _assert_this_initialized(_this));
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.HeapProfilerModel.HeapProfilerModel, "AddHeapSnapshotChunk" /* SDK.HeapProfilerModel.Events.AddHeapSnapshotChunk */ , _this.addHeapSnapshotChunk, _assert_this_initialized(_this));
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.HeapProfilerModel.HeapProfilerModel, "ReportHeapSnapshotProgress" /* SDK.HeapProfilerModel.Events.ReportHeapSnapshotProgress */ , _this.reportHeapSnapshotProgress, _assert_this_initialized(_this));
        _this.exposeInternals = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('expose-internals', false);
        _this.customContentInternal = null;
        return _this;
    }
    _create_class(HeapSnapshotProfileType, [
        {
            key: "modelAdded",
            value: function modelAdded(heapProfilerModel) {
                void heapProfilerModel.enable();
            }
        },
        {
            key: "modelRemoved",
            value: function modelRemoved(_heapProfilerModel) {}
        },
        {
            key: "getProfiles",
            value: function getProfiles() {
                return _get(_get_prototype_of(HeapSnapshotProfileType.prototype), "getProfiles", this).call(this);
            }
        },
        {
            key: "fileExtension",
            value: function fileExtension() {
                return '.heapsnapshot';
            }
        },
        {
            key: "buttonTooltip",
            get: function get() {
                return i18nString(UIStrings.takeHeapSnapshot);
            }
        },
        {
            key: "isInstantProfile",
            value: function isInstantProfile() {
                return true;
            }
        },
        {
            key: "buttonClicked",
            value: function buttonClicked() {
                void this.takeHeapSnapshot();
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.ProfilesHeapProfileTaken);
                return false;
            }
        },
        {
            key: "treeItemTitle",
            get: function get() {
                return i18nString(UIStrings.heapSnapshots);
            }
        },
        {
            key: "description",
            get: function get() {
                return i18nString(UIStrings.heapSnapshotProfilesShowMemory);
            }
        },
        {
            key: "customContent",
            value: function customContent() {
                var showOptionToExposeInternalsInHeapSnapshot = _core_root_root_js__WEBPACK_IMPORTED_MODULE_4__.Runtime.experiments.isEnabled('show-option-tp-expose-internals-in-heap-snapshot');
                var omitParagraphElement = true;
                var exposeInternalsInHeapSnapshotCheckbox = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.SettingsUI.createSettingCheckbox(i18nString(UIStrings.exposeInternals), this.exposeInternals, omitParagraphElement);
                this.customContentInternal = exposeInternalsInHeapSnapshotCheckbox;
                return showOptionToExposeInternalsInHeapSnapshot ? exposeInternalsInHeapSnapshotCheckbox : null;
            }
        },
        {
            key: "setCustomContentEnabled",
            value: function setCustomContentEnabled(enable) {
                if (this.customContentInternal) {
                    this.customContentInternal.checkboxElement.disabled = !enable;
                }
            }
        },
        {
            key: "createProfileLoadedFromFile",
            value: function createProfileLoadedFromFile(title) {
                return new HeapProfileHeader(null, this, title);
            }
        },
        {
            key: "takeHeapSnapshot",
            value: function takeHeapSnapshot() {
                var _this = this;
                return _async_to_generator(function() {
                    var heapProfilerModel, profile;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (_this.profileBeingRecorded()) {
                                    return [
                                        2
                                    ];
                                }
                                heapProfilerModel = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.HeapProfilerModel.HeapProfilerModel);
                                if (!heapProfilerModel) {
                                    return [
                                        2
                                    ];
                                }
                                profile = new HeapProfileHeader(heapProfilerModel, _this);
                                _this.setProfileBeingRecorded(profile);
                                _this.addProfile(profile);
                                profile.updateStatus(i18nString(UIStrings.snapshotting));
                                return [
                                    4,
                                    heapProfilerModel.takeHeapSnapshot({
                                        reportProgress: true,
                                        captureNumericValue: true,
                                        exposeInternals: _this.exposeInternals.get()
                                    })
                                ];
                            case 1:
                                _state.sent();
                                profile = _this.profileBeingRecorded();
                                if (!profile) {
                                    return [
                                        2
                                    ];
                                }
                                profile.title = i18nString(UIStrings.snapshotD, {
                                    PH1: profile.uid
                                });
                                profile.finishLoad();
                                _this.setProfileBeingRecorded(null);
                                _this.dispatchEventToListeners("profile-complete" /* ProfileTypeEvents.ProfileComplete */ , profile);
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "addHeapSnapshotChunk",
            value: function addHeapSnapshotChunk(event) {
                var profile = this.profileBeingRecorded();
                if (!profile) {
                    return;
                }
                profile.transferChunk(event.data);
            }
        },
        {
            key: "reportHeapSnapshotProgress",
            value: function reportHeapSnapshotProgress(event) {
                var profile = this.profileBeingRecorded();
                if (!profile) {
                    return;
                }
                var _event_data = event.data, done = _event_data.done, total = _event_data.total, finished = _event_data.finished;
                profile.updateStatus(i18nString(UIStrings.percentagePlaceholder, {
                    PH1: (done / total * 100).toFixed(0)
                }), true);
                if (finished) {
                    profile.prepareToLoad();
                }
            }
        },
        {
            key: "resetProfiles",
            value: function resetProfiles(event) {
                var heapProfilerModel = event.data;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.getProfiles()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var profile = _step.value;
                        if (profile.heapProfilerModel() === heapProfilerModel) {
                            this.removeProfile(profile);
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
        },
        {
            key: "snapshotReceived",
            value: function snapshotReceived(profile) {
                if (this.profileBeingRecorded() === profile) {
                    this.setProfileBeingRecorded(null);
                }
                this.dispatchEventToListeners("SnapshotReceived" /* HeapSnapshotProfileTypeEvents.SnapshotReceived */ , profile);
            }
        }
    ]);
    return HeapSnapshotProfileType;
}(_Common_ObjectWrapper_eventMixin = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.eventMixin(_ProfileHeader_js__WEBPACK_IMPORTED_MODULE_19__.ProfileType));
// eslint-disable-next-line @typescript-eslint/naming-convention
_define_property(HeapSnapshotProfileType, "TypeId", 'HEAP');
// TODO(crbug.com/1228674): Remove event string once its no longer used in web tests.
// eslint-disable-next-line @typescript-eslint/naming-convention
_define_property(HeapSnapshotProfileType, "SnapshotReceived", 'SnapshotReceived');
var _Common_ObjectWrapper_eventMixin1;
var TrackingHeapSnapshotProfileType = /*#__PURE__*/ function(_superClass) {
    "use strict";
    _inherits(TrackingHeapSnapshotProfileType, _superClass);
    var _super = _create_super(TrackingHeapSnapshotProfileType);
    function TrackingHeapSnapshotProfileType() {
        _class_call_check(this, TrackingHeapSnapshotProfileType);
        var _this;
        _this = _super.call(this, TrackingHeapSnapshotProfileType.TypeId, i18nString(UIStrings.allocationInstrumentationOn));
        _define_property(_assert_this_initialized(_this), "recordAllocationStacksSettingInternal", void 0);
        _define_property(_assert_this_initialized(_this), "customContentInternal", void 0);
        _define_property(_assert_this_initialized(_this), "recording", void 0);
        _define_property(_assert_this_initialized(_this), "profileSamples", void 0);
        _this.recordAllocationStacksSettingInternal = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('record-allocation-stacks', false);
        _this.customContentInternal = null;
        _this.recording = false;
        return _this;
    }
    _create_class(TrackingHeapSnapshotProfileType, [
        {
            key: "modelAdded",
            value: function modelAdded(heapProfilerModel) {
                _get(_get_prototype_of(TrackingHeapSnapshotProfileType.prototype), "modelAdded", this).call(this, heapProfilerModel);
                heapProfilerModel.addEventListener("HeapStatsUpdate" /* SDK.HeapProfilerModel.Events.HeapStatsUpdate */ , this.heapStatsUpdate, this);
                heapProfilerModel.addEventListener("LastSeenObjectId" /* SDK.HeapProfilerModel.Events.LastSeenObjectId */ , this.lastSeenObjectId, this);
            }
        },
        {
            key: "modelRemoved",
            value: function modelRemoved(heapProfilerModel) {
                _get(_get_prototype_of(TrackingHeapSnapshotProfileType.prototype), "modelRemoved", this).call(this, heapProfilerModel);
                heapProfilerModel.removeEventListener("HeapStatsUpdate" /* SDK.HeapProfilerModel.Events.HeapStatsUpdate */ , this.heapStatsUpdate, this);
                heapProfilerModel.removeEventListener("LastSeenObjectId" /* SDK.HeapProfilerModel.Events.LastSeenObjectId */ , this.lastSeenObjectId, this);
            }
        },
        {
            key: "heapStatsUpdate",
            value: function heapStatsUpdate(event) {
                if (!this.profileSamples) {
                    return;
                }
                var samples = event.data;
                var index;
                for(var i = 0; i < samples.length; i += 3){
                    index = samples[i];
                    var size = samples[i + 2];
                    this.profileSamples.sizes[index] = size;
                    if (!this.profileSamples.max[index]) {
                        this.profileSamples.max[index] = size;
                    }
                }
            }
        },
        {
            key: "lastSeenObjectId",
            value: function lastSeenObjectId(event) {
                var profileSamples = this.profileSamples;
                if (!profileSamples) {
                    return;
                }
                var _event_data = event.data, lastSeenObjectId = _event_data.lastSeenObjectId, timestamp = _event_data.timestamp;
                var currentIndex = Math.max(profileSamples.ids.length, profileSamples.max.length - 1);
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
                    this.dispatchEventToListeners("HeapStatsUpdate" /* TrackingHeapSnapshotProfileTypeEvents.HeapStatsUpdate */ , this.profileSamples);
                }
                var profile = this.profileBeingRecorded();
                if (profile) {
                    profile.updateStatus(null, true);
                }
            }
        },
        {
            key: "hasTemporaryView",
            value: function hasTemporaryView() {
                return true;
            }
        },
        {
            key: "buttonTooltip",
            get: function get() {
                return this.recording ? i18nString(UIStrings.stopRecordingHeapProfile) : i18nString(UIStrings.startRecordingHeapProfile);
            }
        },
        {
            key: "isInstantProfile",
            value: function isInstantProfile() {
                return false;
            }
        },
        {
            key: "buttonClicked",
            value: function buttonClicked() {
                return this.toggleRecording();
            }
        },
        {
            key: "startRecordingProfile",
            value: function startRecordingProfile() {
                if (this.profileBeingRecorded()) {
                    return;
                }
                var heapProfilerModel = this.addNewProfile();
                if (!heapProfilerModel) {
                    return;
                }
                void heapProfilerModel.startTrackingHeapObjects(this.recordAllocationStacksSettingInternal.get());
            }
        },
        {
            key: "customContent",
            value: function customContent() {
                var checkboxSetting = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.SettingsUI.createSettingCheckbox(i18nString(UIStrings.recordAllocationStacksExtra), this.recordAllocationStacksSettingInternal, true);
                this.customContentInternal = checkboxSetting;
                return checkboxSetting;
            }
        },
        {
            key: "setCustomContentEnabled",
            value: function setCustomContentEnabled(enable) {
                if (this.customContentInternal) {
                    this.customContentInternal.checkboxElement.disabled = !enable;
                }
            }
        },
        {
            key: "recordAllocationStacksSetting",
            value: function recordAllocationStacksSetting() {
                return this.recordAllocationStacksSettingInternal;
            }
        },
        {
            key: "addNewProfile",
            value: function addNewProfile() {
                var heapProfilerModel = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.HeapProfilerModel.HeapProfilerModel);
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
                this.dispatchEventToListeners("TrackingStarted" /* TrackingHeapSnapshotProfileTypeEvents.TrackingStarted */ );
                return heapProfilerModel;
            }
        },
        {
            key: "stopRecordingProfile",
            value: function stopRecordingProfile() {
                var _this = this;
                return _async_to_generator(function() {
                    var profile, stopPromise;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                profile = _this.profileBeingRecorded();
                                profile.updateStatus(i18nString(UIStrings.snapshotting));
                                stopPromise = profile.heapProfilerModel().stopTrackingHeapObjects(true);
                                _this.recording = false;
                                _this.dispatchEventToListeners("TrackingStopped" /* TrackingHeapSnapshotProfileTypeEvents.TrackingStopped */ );
                                return [
                                    4,
                                    stopPromise
                                ];
                            case 1:
                                _state.sent();
                                profile = _this.profileBeingRecorded();
                                if (!profile) {
                                    return [
                                        2
                                    ];
                                }
                                profile.finishLoad();
                                _this.profileSamples = null;
                                _this.setProfileBeingRecorded(null);
                                _this.dispatchEventToListeners("profile-complete" /* ProfileTypeEvents.ProfileComplete */ , profile);
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "toggleRecording",
            value: function toggleRecording() {
                if (this.recording) {
                    void this.stopRecordingProfile();
                } else {
                    this.startRecordingProfile();
                }
                return this.recording;
            }
        },
        {
            key: "fileExtension",
            value: function fileExtension() {
                return '.heaptimeline';
            }
        },
        {
            key: "treeItemTitle",
            get: function get() {
                return i18nString(UIStrings.allocationTimelines);
            }
        },
        {
            key: "description",
            get: function get() {
                return i18nString(UIStrings.AllocationTimelinesShowInstrumented);
            }
        },
        {
            key: "resetProfiles",
            value: function resetProfiles(event) {
                var wasRecording = this.recording;
                // Clear current profile to avoid stopping backend.
                this.setProfileBeingRecorded(null);
                _get(_get_prototype_of(TrackingHeapSnapshotProfileType.prototype), "resetProfiles", this).call(this, event);
                this.profileSamples = null;
                if (wasRecording) {
                    this.addNewProfile();
                }
            }
        },
        {
            key: "profileBeingRecordedRemoved",
            value: function profileBeingRecordedRemoved() {
                void this.stopRecordingProfile();
                this.profileSamples = null;
            }
        }
    ]);
    return TrackingHeapSnapshotProfileType;
}(_Common_ObjectWrapper_eventMixin1 = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.eventMixin(HeapSnapshotProfileType));
// eslint-disable-next-line @typescript-eslint/naming-convention
_define_property(TrackingHeapSnapshotProfileType, "TypeId", 'HEAP-RECORD');
// TODO(crbug.com/1228674): Remove event strings once they are no longer used in web tests.
// eslint-disable-next-line @typescript-eslint/naming-convention
_define_property(TrackingHeapSnapshotProfileType, "HeapStatsUpdate", 'HeapStatsUpdate');
// eslint-disable-next-line @typescript-eslint/naming-convention
_define_property(TrackingHeapSnapshotProfileType, "TrackingStarted", 'TrackingStarted');
// eslint-disable-next-line @typescript-eslint/naming-convention
_define_property(TrackingHeapSnapshotProfileType, "TrackingStopped", 'TrackingStopped');
var HeapProfileHeader = /*#__PURE__*/ function(ProfileHeader) {
    "use strict";
    _inherits(HeapProfileHeader, ProfileHeader);
    var _super = _create_super(HeapProfileHeader);
    function HeapProfileHeader(heapProfilerModel, type, title) {
        _class_call_check(this, HeapProfileHeader);
        var _this;
        _this = _super.call(this, type, title || i18nString(UIStrings.snapshotD, {
            PH1: type.nextProfileUid()
        }));
        _define_property(_assert_this_initialized(_this), "heapProfilerModelInternal", void 0);
        _define_property(_assert_this_initialized(_this), "maxJSObjectId", void 0);
        _define_property(_assert_this_initialized(_this), "workerProxy", void 0);
        _define_property(_assert_this_initialized(_this), "receiver", void 0);
        _define_property(_assert_this_initialized(_this), "snapshotProxy", void 0);
        _define_property(_assert_this_initialized(_this), "loadPromise", void 0);
        _define_property(_assert_this_initialized(_this), "fulfillLoad", void 0);
        _define_property(_assert_this_initialized(_this), "totalNumberOfChunks", void 0);
        _define_property(_assert_this_initialized(_this), "bufferedWriter", void 0);
        _define_property(_assert_this_initialized(_this), "onTempFileReady", void 0);
        _define_property(_assert_this_initialized(_this), "failedToCreateTempFile", void 0);
        _define_property(_assert_this_initialized(_this), "wasDisposed", void 0);
        _define_property(_assert_this_initialized(_this), "fileName", void 0);
        _this.heapProfilerModelInternal = heapProfilerModel;
        _this.maxJSObjectId = -1;
        _this.workerProxy = null;
        _this.receiver = null;
        _this.snapshotProxy = null;
        _this.loadPromise = new Promise(function(resolve) {
            _this.fulfillLoad = resolve;
        });
        _this.totalNumberOfChunks = 0;
        _this.bufferedWriter = null;
        _this.onTempFileReady = null;
        return _this;
    }
    _create_class(HeapProfileHeader, [
        {
            key: "heapProfilerModel",
            value: function heapProfilerModel() {
                return this.heapProfilerModelInternal;
            }
        },
        {
            key: "getLocation",
            value: function getLocation(nodeIndex) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        if (!_this.snapshotProxy) {
                            return [
                                2,
                                null
                            ];
                        }
                        return [
                            2,
                            _this.snapshotProxy.getLocation(nodeIndex)
                        ];
                    });
                })();
            }
        },
        {
            key: "createSidebarTreeElement",
            value: function createSidebarTreeElement(dataDisplayDelegate) {
                return new _ProfileSidebarTreeElement_js__WEBPACK_IMPORTED_MODULE_20__.ProfileSidebarTreeElement(dataDisplayDelegate, this, 'heap-snapshot-sidebar-tree-item');
            }
        },
        {
            key: "createView",
            value: function createView(dataDisplayDelegate) {
                return new HeapSnapshotView(dataDisplayDelegate, this);
            }
        },
        {
            key: "prepareToLoad",
            value: function prepareToLoad() {
                console.assert(!this.receiver, 'Already loading');
                this.setupWorker();
                this.updateStatus(i18nString(UIStrings.loading), true);
            }
        },
        {
            key: "finishLoad",
            value: function finishLoad() {
                if (!this.wasDisposed && this.receiver) {
                    void this.receiver.close();
                }
                if (!this.bufferedWriter) {
                    return;
                }
                this.didWriteToTempFile(this.bufferedWriter);
            }
        },
        {
            key: "didWriteToTempFile",
            value: function didWriteToTempFile(tempFile) {
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
        },
        {
            key: "setupWorker",
            value: function setupWorker() {
                var _this = this;
                console.assert(!this.workerProxy, 'HeapSnapshotWorkerProxy already exists');
                this.workerProxy = new _HeapSnapshotProxy_js__WEBPACK_IMPORTED_MODULE_16__.HeapSnapshotWorkerProxy(this.handleWorkerEvent.bind(this));
                this.workerProxy.addEventListener("Wait" /* HeapSnapshotWorkerProxy.Events.Wait */ , function(event) {
                    _this.updateStatus(null, event.data);
                }, this);
                this.receiver = this.workerProxy.createLoader(this.uid, this.snapshotReceived.bind(this));
            }
        },
        {
            // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            key: "handleWorkerEvent",
            value: function handleWorkerEvent(eventName, data) {
                if (_models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_7__.HeapSnapshotModel.HeapSnapshotProgressEvent.BrokenSnapshot === eventName) {
                    var error = data;
                    _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Console.Console.instance().error(error);
                    return;
                }
                if (_models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_7__.HeapSnapshotModel.HeapSnapshotProgressEvent.Update !== eventName) {
                    return;
                }
                var serializedMessage = data;
                var messageObject = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.deserializeUIString(serializedMessage);
                // We know all strings from the worker are declared inside a single file so we can
                // use a custom function.
                this.updateStatus(moduleI18nString(messageObject.string, messageObject.values));
            }
        },
        {
            key: "dispose",
            value: function dispose() {
                if (this.workerProxy) {
                    this.workerProxy.dispose();
                }
                this.removeTempFile();
                this.wasDisposed = true;
            }
        },
        {
            key: "didCompleteSnapshotTransfer",
            value: function didCompleteSnapshotTransfer() {
                if (!this.snapshotProxy) {
                    return;
                }
                this.updateStatus(_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.NumberUtilities.bytesToString(this.snapshotProxy.totalSize), false);
            }
        },
        {
            key: "transferChunk",
            value: function transferChunk(chunk) {
                if (!this.bufferedWriter) {
                    this.bufferedWriter = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__.TempFile.TempFile();
                }
                this.bufferedWriter.write([
                    chunk
                ]);
                ++this.totalNumberOfChunks;
                if (this.receiver) {
                    void this.receiver.write(chunk);
                }
            }
        },
        {
            key: "snapshotReceived",
            value: function snapshotReceived(snapshotProxy) {
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
        },
        {
            key: "notifySnapshotReceived",
            value: function notifySnapshotReceived() {
                if (this.snapshotProxy && this.fulfillLoad) {
                    this.fulfillLoad(this.snapshotProxy);
                }
                this.profileType().snapshotReceived(this);
            }
        },
        {
            key: "canSaveToFile",
            value: function canSaveToFile() {
                return !this.fromFile();
            }
        },
        {
            key: "saveToFile",
            value: function saveToFile() {
                var _this = this;
                return _async_to_generator(function() {
                    var fileOutputStream, onOpen;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this.loadPromise
                                ];
                            case 1:
                                _state.sent();
                                fileOutputStream = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__.FileUtils.FileOutputStream();
                                _this.fileName = _this.fileName || 'Heap-' + _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.DateUtilities.toISO8601Compact(new Date()) + _this.profileType().fileExtension();
                                onOpen = function() {
                                    var _ref = _async_to_generator(function(accepted) {
                                        var error;
                                        return _ts_generator(this, function(_state) {
                                            switch(_state.label){
                                                case 0:
                                                    if (!accepted) {
                                                        return [
                                                            2
                                                        ];
                                                    }
                                                    if (_this.failedToCreateTempFile) {
                                                        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Console.Console.instance().error('Failed to open temp file with heap snapshot');
                                                        void fileOutputStream.close();
                                                        return [
                                                            2
                                                        ];
                                                    }
                                                    if (!_this.tempFile) return [
                                                        3,
                                                        2
                                                    ];
                                                    return [
                                                        4,
                                                        _this.tempFile.copyToOutputStream(fileOutputStream, _this.onChunkTransferred.bind(_this))
                                                    ];
                                                case 1:
                                                    error = _state.sent();
                                                    if (error) {
                                                        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Console.Console.instance().error('Failed to read heap snapshot from temp file: ' + error.message);
                                                    }
                                                    _this.didCompleteSnapshotTransfer();
                                                    return [
                                                        2
                                                    ];
                                                case 2:
                                                    _this.onTempFileReady = function() {
                                                        void onOpen(accepted);
                                                    };
                                                    _this.updateSaveProgress(0, 1);
                                                    return [
                                                        2
                                                    ];
                                            }
                                        });
                                    });
                                    return function onOpen(accepted) {
                                        return _ref.apply(this, arguments);
                                    };
                                }();
                                return [
                                    4,
                                    fileOutputStream.open(_this.fileName).then(onOpen.bind(_this))
                                ];
                            case 2:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "onChunkTransferred",
            value: function onChunkTransferred(reader) {
                this.updateSaveProgress(reader.loadedSize(), reader.fileSize());
            }
        },
        {
            key: "updateSaveProgress",
            value: function updateSaveProgress(value, total) {
                var percentValue = ((total && value / total) * 100).toFixed(0);
                this.updateStatus(i18nString(UIStrings.savingD, {
                    PH1: percentValue
                }));
            }
        },
        {
            key: "loadFromFile",
            value: function loadFromFile(file) {
                var _this = this;
                return _async_to_generator(function() {
                    var reader, success, error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this.updateStatus(i18nString(UIStrings.loading), true);
                                _this.setupWorker();
                                reader = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__.FileUtils.ChunkedFileReader(file, 10000000);
                                return [
                                    4,
                                    reader.read(_this.receiver)
                                ];
                            case 1:
                                success = _state.sent();
                                if (!success) {
                                    error = reader.error();
                                    if (error) {
                                        _this.updateStatus(error.message);
                                    }
                                }
                                return [
                                    2,
                                    success ? null : reader.error()
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "profileType",
            value: function profileType() {
                return _get(_get_prototype_of(HeapProfileHeader.prototype), "profileType", this).call(this);
            }
        }
    ]);
    return HeapProfileHeader;
}(_ProfileHeader_js__WEBPACK_IMPORTED_MODULE_19__.ProfileHeader);
var HeapSnapshotStatisticsView = /*#__PURE__*/ function(_UI_Widget_VBox) {
    "use strict";
    _inherits(HeapSnapshotStatisticsView, _UI_Widget_VBox);
    var _super = _create_super(HeapSnapshotStatisticsView);
    function HeapSnapshotStatisticsView() {
        _class_call_check(this, HeapSnapshotStatisticsView);
        var _this;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "pieChart", void 0);
        _this.element.classList.add('heap-snapshot-statistics-view');
        _this.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_13__.pane('profiler.heap-snapshot-statistics-view').track({
            resize: true
        })));
        _this.pieChart = new _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_10__.PieChart.PieChart();
        _this.setTotalAndRecords(0, []);
        _this.pieChart.classList.add('heap-snapshot-stats-pie-chart');
        _this.element.appendChild(_this.pieChart);
        return _this;
    }
    _create_class(HeapSnapshotStatisticsView, [
        {
            key: "setTotalAndRecords",
            value: function setTotalAndRecords(total, records) {
                this.pieChart.data = {
                    chartName: i18nString(UIStrings.heapMemoryUsage),
                    size: 150,
                    formatter: HeapSnapshotStatisticsView.valueFormatter,
                    showLegend: true,
                    total: total,
                    slices: records
                };
            }
        }
    ], [
        {
            key: "valueFormatter",
            value: function valueFormatter(value) {
                var formatter = new Intl.NumberFormat(_core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.DevToolsLocale.DevToolsLocale.instance().locale, {
                    style: 'unit',
                    unit: 'kilobyte'
                });
                return formatter.format(Math.round(value / 1000));
            }
        }
    ]);
    return HeapSnapshotStatisticsView;
}(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.Widget.VBox);
var HeapAllocationStackView = /*#__PURE__*/ function(_UI_Widget_Widget) {
    "use strict";
    _inherits(HeapAllocationStackView, _UI_Widget_Widget);
    var _super = _create_super(HeapAllocationStackView);
    function HeapAllocationStackView(heapProfilerModel) {
        _class_call_check(this, HeapAllocationStackView);
        var _this;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "heapProfilerModel", void 0);
        _define_property(_assert_this_initialized(_this), "linkifier", void 0);
        _define_property(_assert_this_initialized(_this), "frameElements", void 0);
        _this.heapProfilerModel = heapProfilerModel;
        _this.linkifier = new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_11__.Linkifier.Linkifier();
        _this.frameElements = [];
        return _this;
    }
    _create_class(HeapAllocationStackView, [
        {
            key: "onContextMenu",
            value: function onContextMenu(link, event) {
                var contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.ContextMenu.ContextMenu(event);
                contextMenu.appendApplicableItems(link);
                void contextMenu.show();
                event.consume(true);
            }
        },
        {
            key: "onStackViewKeydown",
            value: function onStackViewKeydown(event) {
                var target = event.target;
                if (!target) {
                    return;
                }
                if (event.key === 'Enter') {
                    var link = stackFrameToURLElement.get(target);
                    if (!link) {
                        return;
                    }
                    var linkInfo = _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_11__.Linkifier.Linkifier.linkInfo(link);
                    if (!linkInfo) {
                        return;
                    }
                    if (_ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_11__.Linkifier.Linkifier.invokeFirstAction(linkInfo)) {
                        event.consume(true);
                    }
                    return;
                }
                var navDown;
                var keyboardEvent = event;
                if (keyboardEvent.key === 'ArrowUp') {
                    navDown = false;
                } else if (keyboardEvent.key === 'ArrowDown') {
                    navDown = true;
                } else {
                    return;
                }
                var index = this.frameElements.indexOf(target);
                if (index === -1) {
                    return;
                }
                var nextIndex = navDown ? index + 1 : index - 1;
                if (nextIndex < 0 || nextIndex >= this.frameElements.length) {
                    return;
                }
                var nextFrame = this.frameElements[nextIndex];
                nextFrame.tabIndex = 0;
                target.tabIndex = -1;
                nextFrame.focus();
                event.consume(true);
            }
        },
        {
            key: "setAllocatedObject",
            value: function setAllocatedObject(snapshot, snapshotNodeIndex) {
                var _this = this;
                return _async_to_generator(function() {
                    var frames, stackDiv, stackDiv1, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, frame, frameDiv, name, target, options, urlElement;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this.clear();
                                return [
                                    4,
                                    snapshot.allocationStack(snapshotNodeIndex)
                                ];
                            case 1:
                                frames = _state.sent();
                                if (!frames) {
                                    stackDiv = _this.element.createChild('div', 'no-heap-allocation-stack');
                                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.UIUtils.createTextChild(stackDiv, i18nString(UIStrings.stackWasNotRecordedForThisObject));
                                    return [
                                        2
                                    ];
                                }
                                stackDiv1 = _this.element.createChild('div', 'heap-allocation-stack');
                                stackDiv1.addEventListener('keydown', _this.onStackViewKeydown.bind(_this), false);
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                try {
                                    for(_iterator = frames[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                        frame = _step.value;
                                        frameDiv = stackDiv1.createChild('div', 'stack-frame');
                                        _this.frameElements.push(frameDiv);
                                        frameDiv.tabIndex = -1;
                                        name = frameDiv.createChild('div');
                                        name.textContent = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.UIUtils.beautifyFunctionName(frame.functionName);
                                        if (!frame.scriptId) {
                                            continue;
                                        }
                                        target = _this.heapProfilerModel ? _this.heapProfilerModel.target() : null;
                                        options = {
                                            columnNumber: frame.column - 1,
                                            inlineFrameIndex: 0
                                        };
                                        urlElement = _this.linkifier.linkifyScriptLocation(target, String(frame.scriptId), frame.scriptName, frame.line - 1, options);
                                        frameDiv.appendChild(urlElement);
                                        stackFrameToURLElement.set(frameDiv, urlElement);
                                        frameDiv.addEventListener('contextmenu', _this.onContextMenu.bind(_this, urlElement));
                                    }
                                } catch (err) {
                                    _didIteratorError = true;
                                    _iteratorError = err;
                                } finally{
                                    try {
                                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                                            _iterator.return();
                                        }
                                    } finally{
                                        if (_didIteratorError) {
                                            throw _iteratorError;
                                        }
                                    }
                                }
                                _this.frameElements[0].tabIndex = 0;
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "clear",
            value: function clear() {
                this.element.removeChildren();
                this.frameElements = [];
                this.linkifier.reset();
            }
        }
    ]);
    return HeapAllocationStackView;
}(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.Widget.Widget);
var stackFrameToURLElement = new WeakMap(); //# sourceMappingURL=HeapSnapshotView.js.map


}),
"./panels/profiler/ModuleUIStrings.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  UIStrings: function() { return UIStrings; }
});
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var UIStrings = {
    /**
     *@description Text to indicate the status of a heap snapshot in the Performance Pane
     */ buildingEdgeIndexes: 'Building edge indexes…',
    /**
     *@description Text to indicate the status of a heap snapshot in the Performance Pane
     */ buildingRetainers: 'Building retainers…',
    /**
     *@description Text to indicate the status of a heap snapshot in the Performance Pane
     */ propagatingDomState: 'Propagating DOM state…',
    /**
     * @description Text to indicate the status of a heap snapshot in the Performance Pane. Flag here
     * refers to the programming concept for a piece of binary data (yes/no).
     */ calculatingNodeFlags: 'Calculating node flags…',
    /**
     *@description Text to indicate the status of a heap snapshot in the Performance Pane
     */ calculatingDistances: 'Calculating distances…',
    /**
     *@description Text to indicate the status of a heap snapshot in the Performance Pane
     */ buildingPostorderIndex: 'Building postorder index…',
    /**
     *@description Text to indicate the status of a heap snapshot in the Performance Pane
     */ buildingDominatorTree: 'Building dominator tree…',
    /**
     *@description Text to indicate the status of a heap snapshot in the Performance Pane
     */ calculatingShallowSizes: 'Calculating shallow sizes…',
    /**
     *@description Text to indicate the status of a heap snapshot in the Performance Pane
     */ calculatingRetainedSizes: 'Calculating retained sizes…',
    /**
     *@description Text to indicate the status of a heap snapshot in the Performance Pane
     */ buildingDominatedNodes: 'Building dominated nodes…',
    /**
     *@description Text to indicate the status of a heap snapshot in the Performance Pane
     */ calculatingStatistics: 'Calculating statistics…',
    /**
     *@description Text to indicate the status of a heap snapshot in the Performance Pane
     */ calculatingSamples: 'Calculating samples…',
    /**
     *@description Text to indicate the status of a heap snapshot in the Performance Pane
     */ buildingLocations: 'Building locations…',
    /**
     *@description Text to indicate the status of a heap snapshot in the Performance Pane
     */ finishedProcessing: 'Finished processing.',
    /**
     *@description Text to indicate the status of a heap snapshot in the Performance Pane
     */ buildingAllocationStatistics: 'Building allocation statistics…',
    /**
     *@description Text to indicate the status of a heap snapshot in the Performance Pane
     */ done: 'Done',
    /**
     *@description Text in Heap Snapshot Loader of the Memory panel when taking a heap snapshot
     */ processingSnapshot: 'Processing snapshot…',
    /**
     *@description Text to indicate the status of a heap snapshot in the Performance Pane
     */ parsingStrings: 'Parsing strings…',
    /**
     *@description Text in Heap Snapshot Loader of the Memory panel when taking a heap snapshot
     */ loadingSnapshotInfo: 'Loading snapshot info…',
    /**
     *@description Text in Heap Snapshot Loader of the Memory panel when taking a heap snapshot
     *@example {38} PH1
     */ loadingNodesD: 'Loading nodes… {PH1}%',
    /**
     *@description Text in Heap Snapshot Loader of the Memory panel when taking a heap snapshot
     *@example {30} PH1
     */ loadingEdgesD: 'Loading edges… {PH1}%',
    /**
     *@description Text in Heap Snapshot Loader of the Memory panel when taking a heap snapshot
     *@example {30} PH1
     */ loadingAllocationTracesD: 'Loading allocation traces… {PH1}%',
    /**
     *@description Text in Heap Snapshot Loader of the Memory panel when taking a heap snapshot
     */ loadingSamples: 'Loading samples…',
    /**
     *@description Text in Heap Snapshot Loader of the Memory panel when taking a heap snapshot
     */ loadingLocations: 'Loading locations…',
    /**
     *@description Text in Heap Snapshot Loader of the Memory panel when taking a heap snapshot
     */ loadingStrings: 'Loading strings…'
}; //# sourceMappingURL=ModuleUIStrings.js.map


}),
"./panels/profiler/ProfileTypeRegistry.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ProfileTypeRegistry: function() { return ProfileTypeRegistry; },
  instance: function() { return instance; }
});
/* harmony import */var _HeapProfileView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HeapProfileView.js */ "./panels/profiler/HeapProfileView.js");
/* harmony import */var _HeapSnapshotView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeapSnapshotView.js */ "./panels/profiler/HeapSnapshotView.js");
// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}


var ProfileTypeRegistry = function ProfileTypeRegistry() {
    "use strict";
    _class_call_check(this, ProfileTypeRegistry);
    _define_property(this, "heapSnapshotProfileType", void 0);
    _define_property(this, "samplingHeapProfileType", void 0);
    _define_property(this, "trackingHeapSnapshotProfileType", void 0);
    this.heapSnapshotProfileType = new _HeapSnapshotView_js__WEBPACK_IMPORTED_MODULE_1__.HeapSnapshotProfileType();
    this.samplingHeapProfileType = new _HeapProfileView_js__WEBPACK_IMPORTED_MODULE_0__.SamplingHeapProfileType();
    this.trackingHeapSnapshotProfileType = new _HeapSnapshotView_js__WEBPACK_IMPORTED_MODULE_1__.TrackingHeapSnapshotProfileType();
};
var instance = new ProfileTypeRegistry(); //# sourceMappingURL=ProfileTypeRegistry.js.map


}),

}]);