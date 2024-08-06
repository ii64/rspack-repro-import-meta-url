"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_profiler_HeapProfileView_js"], {
"./panels/profiler/HeapProfileView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  HeapFlameChartDataProvider: function() { return HeapFlameChartDataProvider; },
  HeapProfileView: function() { return HeapProfileView; },
  NodeFormatter: function() { return NodeFormatter; },
  SamplingHeapProfileHeader: function() { return SamplingHeapProfileHeader; },
  SamplingHeapProfileModel: function() { return SamplingHeapProfileModel; },
  SamplingHeapProfileNode: function() { return SamplingHeapProfileNode; },
  SamplingHeapProfileType: function() { return SamplingHeapProfileType; },
  SamplingHeapProfileTypeBase: function() { return SamplingHeapProfileTypeBase; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _core_root_root_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/root/root.js */ "./core/root/root.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _models_cpu_profile_cpu_profile_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/cpu_profile/cpu_profile.js */ "./models/cpu_profile/cpu_profile.js");
/* harmony import */var _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/legacy/components/perf_ui/perf_ui.js */ "./ui/legacy/components/perf_ui/perf_ui.js");
/* harmony import */var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/legacy/components/utils/utils.js */ "./ui/legacy/components/utils/utils.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _HeapTimelineOverview_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./HeapTimelineOverview.js */ "./panels/profiler/HeapTimelineOverview.js");
/* harmony import */var _ProfileFlameChartDataProvider_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ProfileFlameChartDataProvider.js */ "./panels/profiler/ProfileFlameChartDataProvider.js");
/* harmony import */var _ProfileHeader_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ProfileHeader.js */ "./panels/profiler/ProfileHeader.js");
/* harmony import */var _ProfileView_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ProfileView.js */ "./panels/profiler/ProfileView.js");
// Copyright 2016 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _assert_this_initialized(self) {
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
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
     *@description The reported total size used in the selected time frame of the allocation sampling profile
     *@example {3 MB} PH1
     */ selectedSizeS: 'Selected size: {PH1}',
    /**
     *@description Name of column header that reports the size (in terms of bytes) used for a particular part of the heap, excluding the size of the children nodes of this part of the heap
     */ selfSizeBytes: 'Self Size (bytes)',
    /**
     *@description Name of column header that reports the total size (in terms of bytes) used for a particular part of the heap
     */ totalSizeBytes: 'Total Size (bytes)',
    /**
     *@description Button text to stop profiling the heap
     */ stopHeapProfiling: 'Stop heap profiling',
    /**
     *@description Button text to start profiling the heap
     */ startHeapProfiling: 'Start heap profiling',
    /**
     *@description Progress update that the profiler is recording the contents of the heap
     */ recording: 'Recording…',
    /**
     *@description Icon title in Heap Profile View of a profiler tool
     */ heapProfilerIsRecording: 'Heap profiler is recording',
    /**
     *@description Progress update that the profiler is in the process of stopping its recording of the heap
     */ stopping: 'Stopping…',
    /**
     *@description Sampling category to only profile allocations happening on the heap
     */ allocationSampling: 'Allocation sampling',
    /**
     *@description The title for the collection of profiles that are gathered from various snapshots of the heap, using a sampling (e.g. every 1/100) technique.
     */ samplingProfiles: 'Sampling profiles',
    /**
     *@description Description (part 1) in Heap Profile View of a profiler tool
     */ recordMemoryAllocations: 'Record memory allocations using sampling method.',
    /**
     *@description Description (part 2) in Heap Profile View of a profiler tool
     */ thisProfileTypeHasMinimal: 'This profile type has minimal performance overhead and can be used for long running operations.',
    /**
     *@description Description (part 3) in Heap Profile View of a profiler tool
     */ itProvidesGoodApproximation: 'It provides good approximation of allocations broken down by `JavaScript` execution stack.',
    /**
     *@description Name of a profile
     *@example {2} PH1
     */ profileD: 'Profile {PH1}',
    /**
     *@description Accessible text for the value in bytes in memory allocation or coverage view.
     *@example {12345} PH1
     */ sBytes: '{PH1} bytes',
    /**
     *@description Text in CPUProfile View of a profiler tool
     *@example {21.33} PH1
     */ formatPercent: '{PH1} %',
    /**
     *@description The formatted size in kilobytes, abbreviated to kB
     *@example {1,021} PH1
     */ skb: '{PH1} kB',
    /**
     *@description Text for the name of something
     */ name: 'Name',
    /**
     *@description Tooltip of a cell that reports the size used for a particular part of the heap, excluding the size of the children nodes of this part of the heap
     */ selfSize: 'Self size',
    /**
     *@description Tooltip of a cell that reports the total size used for a particular part of the heap
     */ totalSize: 'Total size',
    /**
     *@description Text for web URLs
     */ url: 'URL'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/profiler/HeapProfileView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
function convertToSamplingHeapProfile(profileHeader) {
    return profileHeader.profile || profileHeader.protocolProfile();
}
var HeapProfileView = /*#__PURE__*/ function(ProfileView) {
    "use strict";
    _inherits(HeapProfileView, ProfileView);
    var _super = _create_super(HeapProfileView);
    function HeapProfileView(profileHeader) {
        _class_call_check(this, HeapProfileView);
        var _this;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "profileHeader", void 0);
        _define_property(_assert_this_initialized(_this), "profileType", void 0);
        _define_property(_assert_this_initialized(_this), "adjustedTotal", void 0);
        _define_property(_assert_this_initialized(_this), "selectedSizeText", void 0);
        _define_property(_assert_this_initialized(_this), "timestamps", void 0);
        _define_property(_assert_this_initialized(_this), "sizes", void 0);
        _define_property(_assert_this_initialized(_this), "max", void 0);
        _define_property(_assert_this_initialized(_this), "ordinals", void 0);
        _define_property(_assert_this_initialized(_this), "totalTime", void 0);
        _define_property(_assert_this_initialized(_this), "lastOrdinal", void 0);
        _define_property(_assert_this_initialized(_this), "timelineOverview", void 0);
        _this.profileHeader = profileHeader;
        _this.profileType = profileHeader.profileType();
        _this.initialize(new NodeFormatter(_assert_this_initialized(_this)));
        var profile = new SamplingHeapProfileModel(convertToSamplingHeapProfile(profileHeader));
        _this.adjustedTotal = profile.total;
        _this.setProfile(profile);
        _this.selectedSizeText = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.Toolbar.ToolbarText();
        _this.timestamps = [];
        _this.sizes = [];
        _this.max = [];
        _this.ordinals = [];
        _this.totalTime = 0;
        _this.lastOrdinal = 0;
        _this.timelineOverview = new _HeapTimelineOverview_js__WEBPACK_IMPORTED_MODULE_9__.HeapTimelineOverview();
        if (_core_root_root_js__WEBPACK_IMPORTED_MODULE_3__.Runtime.experiments.isEnabled('sampling-heap-profiler-timeline')) {
            _this.timelineOverview.addEventListener("IdsRangeChanged" /* Events.IdsRangeChanged */ , _this.onIdsRangeChanged.bind(_assert_this_initialized(_this)));
            _this.timelineOverview.show(_this.element, _this.element.firstChild);
            _this.timelineOverview.start();
            _this.profileType.addEventListener("StatsUpdate" /* SamplingHeapProfileType.Events.StatsUpdate */ , _this.onStatsUpdate, _assert_this_initialized(_this));
            void _this.profileType.once("profile-complete" /* ProfileEvents.ProfileComplete */ ).then(function() {
                _this.profileType.removeEventListener("StatsUpdate" /* SamplingHeapProfileType.Events.StatsUpdate */ , _this.onStatsUpdate, _assert_this_initialized(_this));
                _this.timelineOverview.stop();
                _this.timelineOverview.updateGrid();
            });
        }
        return _this;
    }
    _create_class(HeapProfileView, [
        {
            key: "toolbarItems",
            value: function toolbarItems() {
                var _this = this;
                var _this1 = this, _superprop_get_toolbarItems = function() {
                    return _get(_get_prototype_of(HeapProfileView.prototype), "toolbarItems", _this);
                };
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _superprop_get_toolbarItems().call(_this1)
                                ];
                            case 1:
                                return [
                                    2,
                                    _to_consumable_array.apply(void 0, [
                                        _state.sent()
                                    ]).concat([
                                        _this1.selectedSizeText
                                    ])
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
                    PH1: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.NumberUtilities.bytesToString(event.data.size)
                }));
                this.setSelectionRange(minId, maxId);
            }
        },
        {
            key: "setSelectionRange",
            value: function setSelectionRange(minId, maxId) {
                var profileData = convertToSamplingHeapProfile(this.profileHeader);
                var profile = new SamplingHeapProfileModel(profileData, minId, maxId);
                this.adjustedTotal = profile.total;
                this.setProfile(profile);
            }
        },
        {
            key: "onStatsUpdate",
            value: function onStatsUpdate(event) {
                var profile = event.data;
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
                var _profile_samples;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = ((_profile_samples = profile === null || profile === void 0 ? void 0 : profile.samples) !== null && _profile_samples !== void 0 ? _profile_samples : [])[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var sample = _step.value;
                        this.lastOrdinal = Math.max(this.lastOrdinal, sample.ordinal);
                        var bucket = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.ArrayUtilities.upperBound(this.ordinals, sample.ordinal, _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.ArrayUtilities.DEFAULT_COMPARATOR) - 1;
                        this.sizes[bucket] += sample.size;
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
                this.max.push(this.sizes[this.sizes.length - 1]);
                var lastTimestamp = this.timestamps[this.timestamps.length - 1];
                if (lastTimestamp - this.timestamps[0] > this.totalTime) {
                    this.totalTime *= 2;
                }
                var samples = {
                    sizes: this.sizes,
                    max: this.max,
                    ids: this.ordinals,
                    timestamps: this.timestamps,
                    totalTime: this.totalTime
                };
                this.timelineOverview.setSamples(samples);
            }
        },
        {
            key: "columnHeader",
            value: function columnHeader(columnId) {
                switch(columnId){
                    case 'self':
                        return i18nString(UIStrings.selfSizeBytes);
                    case 'total':
                        return i18nString(UIStrings.totalSizeBytes);
                }
                return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.UIString.LocalizedEmptyString;
            }
        },
        {
            key: "createFlameChartDataProvider",
            value: function createFlameChartDataProvider() {
                return new HeapFlameChartDataProvider(this.profile(), this.profileHeader.heapProfilerModel());
            }
        }
    ]);
    return HeapProfileView;
}(_ProfileView_js__WEBPACK_IMPORTED_MODULE_12__.ProfileView);
var SamplingHeapProfileTypeBase = /*#__PURE__*/ function(_Common_ObjectWrapper_eventMixin) {
    "use strict";
    _inherits(SamplingHeapProfileTypeBase, _Common_ObjectWrapper_eventMixin);
    var _super = _create_super(SamplingHeapProfileTypeBase);
    function SamplingHeapProfileTypeBase(typeId, description) {
        _class_call_check(this, SamplingHeapProfileTypeBase);
        var _this;
        _this = _super.call(this, typeId, description);
        _define_property(_assert_this_initialized(_this), "recording", void 0);
        _define_property(_assert_this_initialized(_this), "clearedDuringRecording", void 0);
        _this.recording = false;
        _this.clearedDuringRecording = false;
        return _this;
    }
    _create_class(SamplingHeapProfileTypeBase, [
        {
            key: "profileBeingRecorded",
            value: function profileBeingRecorded() {
                return _get(_get_prototype_of(SamplingHeapProfileTypeBase.prototype), "profileBeingRecorded", this).call(this);
            }
        },
        {
            key: "typeName",
            value: function typeName() {
                return 'Heap';
            }
        },
        {
            key: "fileExtension",
            value: function fileExtension() {
                return '.heapprofile';
            }
        },
        {
            key: "buttonTooltip",
            get: function get() {
                return this.recording ? i18nString(UIStrings.stopHeapProfiling) : i18nString(UIStrings.startHeapProfiling);
            }
        },
        {
            key: "buttonClicked",
            value: function buttonClicked() {
                if (this.recording) {
                    void this.stopRecordingProfile();
                } else {
                    this.startRecordingProfile();
                }
                return this.recording;
            }
        },
        {
            key: "startRecordingProfile",
            value: function startRecordingProfile() {
                var heapProfilerModel = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.HeapProfilerModel.HeapProfilerModel);
                if (this.profileBeingRecorded() || !heapProfilerModel) {
                    return;
                }
                var profileHeader = new SamplingHeapProfileHeader(heapProfilerModel, this);
                this.setProfileBeingRecorded(profileHeader);
                this.addProfile(profileHeader);
                profileHeader.updateStatus(i18nString(UIStrings.recording));
                var warnings = [
                    i18nString(UIStrings.heapProfilerIsRecording)
                ];
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.InspectorView.InspectorView.instance().setPanelWarnings('heap-profiler', warnings);
                this.recording = true;
                this.startSampling();
            }
        },
        {
            key: "stopRecordingProfile",
            value: function stopRecordingProfile() {
                var _this = this;
                return _async_to_generator(function() {
                    var recordedProfile, profile, wasClearedDuringRecording;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this.recording = false;
                                recordedProfile = _this.profileBeingRecorded();
                                if (!recordedProfile || !recordedProfile.heapProfilerModel()) {
                                    return [
                                        2
                                    ];
                                }
                                recordedProfile.updateStatus(i18nString(UIStrings.stopping));
                                return [
                                    4,
                                    _this.stopSampling()
                                ];
                            case 1:
                                profile = _state.sent();
                                if (recordedProfile) {
                                    console.assert(profile !== undefined);
                                    // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
                                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                    recordedProfile.setProtocolProfile(profile);
                                    recordedProfile.updateStatus('');
                                    _this.setProfileBeingRecorded(null);
                                }
                                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.InspectorView.InspectorView.instance().setPanelWarnings('heap-profiler', []);
                                // If the data was cleared during the middle of the recording we no
                                // longer treat the profile as being completed. This means we avoid
                                // a change of view to the profile list.
                                wasClearedDuringRecording = _this.clearedDuringRecording;
                                _this.clearedDuringRecording = false;
                                if (wasClearedDuringRecording) {
                                    return [
                                        2
                                    ];
                                }
                                _this.dispatchEventToListeners("profile-complete" /* ProfileEvents.ProfileComplete */ , recordedProfile);
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "createProfileLoadedFromFile",
            value: function createProfileLoadedFromFile(title) {
                return new SamplingHeapProfileHeader(null, this, title);
            }
        },
        {
            key: "profileBeingRecordedRemoved",
            value: function profileBeingRecordedRemoved() {
                this.clearedDuringRecording = true;
                void this.stopRecordingProfile();
            }
        },
        {
            key: "startSampling",
            value: function startSampling() {
                throw 'Not implemented';
            }
        },
        {
            key: "stopSampling",
            value: function stopSampling() {
                throw 'Not implemented';
            }
        }
    ]);
    return SamplingHeapProfileTypeBase;
}(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.eventMixin(_ProfileHeader_js__WEBPACK_IMPORTED_MODULE_11__.ProfileType));
var samplingHeapProfileTypeInstance;
var SamplingHeapProfileType = /*#__PURE__*/ function(SamplingHeapProfileTypeBase) {
    "use strict";
    _inherits(SamplingHeapProfileType, SamplingHeapProfileTypeBase);
    var _super = _create_super(SamplingHeapProfileType);
    function SamplingHeapProfileType() {
        _class_call_check(this, SamplingHeapProfileType);
        var _this;
        _this = _super.call(this, SamplingHeapProfileType.TypeId, i18nString(UIStrings.allocationSampling));
        _define_property(_assert_this_initialized(_this), "updateTimer", void 0);
        _define_property(_assert_this_initialized(_this), "updateIntervalMs", void 0);
        if (!samplingHeapProfileTypeInstance) {
            samplingHeapProfileTypeInstance = _assert_this_initialized(_this);
        }
        _this.updateTimer = 0;
        _this.updateIntervalMs = 200;
        return _this;
    }
    _create_class(SamplingHeapProfileType, [
        {
            key: "treeItemTitle",
            get: function get() {
                return i18nString(UIStrings.samplingProfiles);
            }
        },
        {
            key: "description",
            get: function get() {
                // TODO(l10n): Do not concatenate localized strings.
                var formattedDescription = [
                    i18nString(UIStrings.recordMemoryAllocations),
                    i18nString(UIStrings.thisProfileTypeHasMinimal),
                    i18nString(UIStrings.itProvidesGoodApproximation)
                ];
                return formattedDescription.join('\n');
            }
        },
        {
            key: "hasTemporaryView",
            value: function hasTemporaryView() {
                return _core_root_root_js__WEBPACK_IMPORTED_MODULE_3__.Runtime.experiments.isEnabled('sampling-heap-profiler-timeline');
            }
        },
        {
            key: "startSampling",
            value: function startSampling() {
                var _this = this;
                var heapProfilerModel = this.obtainRecordingProfile();
                if (!heapProfilerModel) {
                    return;
                }
                void heapProfilerModel.startSampling();
                if (_core_root_root_js__WEBPACK_IMPORTED_MODULE_3__.Runtime.experiments.isEnabled('sampling-heap-profiler-timeline')) {
                    this.updateTimer = window.setTimeout(function() {
                        void _this.updateStats();
                    }, this.updateIntervalMs);
                }
            }
        },
        {
            key: "obtainRecordingProfile",
            value: function obtainRecordingProfile() {
                var recordingProfile = this.profileBeingRecorded();
                if (recordingProfile) {
                    var heapProfilerModel = recordingProfile.heapProfilerModel();
                    return heapProfilerModel;
                }
                return null;
            }
        },
        {
            key: "stopSampling",
            value: function stopSampling() {
                var _this = this;
                return _async_to_generator(function() {
                    var heapProfilerModel, samplingProfile;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                window.clearTimeout(_this.updateTimer);
                                _this.updateTimer = 0;
                                _this.dispatchEventToListeners("RecordingStopped" /* SamplingHeapProfileType.Events.RecordingStopped */ );
                                heapProfilerModel = _this.obtainRecordingProfile();
                                if (!heapProfilerModel) {
                                    throw new Error('No heap profiler model');
                                }
                                return [
                                    4,
                                    heapProfilerModel.stopSampling()
                                ];
                            case 1:
                                samplingProfile = _state.sent();
                                if (!samplingProfile) {
                                    throw new Error('No sampling profile found');
                                }
                                return [
                                    2,
                                    samplingProfile
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "updateStats",
            value: function updateStats() {
                var _this = this;
                return _async_to_generator(function() {
                    var heapProfilerModel, profile;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                heapProfilerModel = _this.obtainRecordingProfile();
                                if (!heapProfilerModel) {
                                    return [
                                        2
                                    ];
                                }
                                return [
                                    4,
                                    heapProfilerModel.getSamplingProfile()
                                ];
                            case 1:
                                profile = _state.sent();
                                if (!_this.updateTimer) {
                                    return [
                                        2
                                    ];
                                }
                                _this.dispatchEventToListeners("StatsUpdate" /* SamplingHeapProfileType.Events.StatsUpdate */ , profile);
                                _this.updateTimer = window.setTimeout(function() {
                                    void _this.updateStats();
                                }, _this.updateIntervalMs);
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        }
    ], [
        {
            key: "instance",
            get: function get() {
                return samplingHeapProfileTypeInstance;
            }
        }
    ]);
    return SamplingHeapProfileType;
}(SamplingHeapProfileTypeBase);
// eslint-disable-next-line @typescript-eslint/naming-convention
_define_property(SamplingHeapProfileType, "TypeId", 'SamplingHeap');
var SamplingHeapProfileHeader = /*#__PURE__*/ function(WritableProfileHeader) {
    "use strict";
    _inherits(SamplingHeapProfileHeader, WritableProfileHeader);
    var _super = _create_super(SamplingHeapProfileHeader);
    function SamplingHeapProfileHeader(heapProfilerModel, type, title) {
        _class_call_check(this, SamplingHeapProfileHeader);
        var _this;
        _this = _super.call(this, heapProfilerModel && heapProfilerModel.debuggerModel(), type, title || i18nString(UIStrings.profileD, {
            PH1: type.nextProfileUid()
        }));
        _define_property(_assert_this_initialized(_this), "heapProfilerModelInternal", void 0);
        _define_property(_assert_this_initialized(_this), "protocolProfileInternal", void 0);
        _this.heapProfilerModelInternal = heapProfilerModel;
        _this.protocolProfileInternal = {
            head: {
                callFrame: {
                    functionName: '',
                    scriptId: '',
                    url: '',
                    lineNumber: 0,
                    columnNumber: 0
                },
                children: [],
                selfSize: 0,
                id: 0
            },
            samples: [],
            startTime: 0,
            endTime: 0,
            nodes: []
        };
        return _this;
    }
    _create_class(SamplingHeapProfileHeader, [
        {
            key: "createView",
            value: function createView() {
                return new HeapProfileView(this);
            }
        },
        {
            key: "protocolProfile",
            value: function protocolProfile() {
                return this.protocolProfileInternal;
            }
        },
        {
            key: "heapProfilerModel",
            value: function heapProfilerModel() {
                return this.heapProfilerModelInternal;
            }
        },
        {
            key: "profileType",
            value: function profileType() {
                return _get(_get_prototype_of(SamplingHeapProfileHeader.prototype), "profileType", this).call(this);
            }
        }
    ]);
    return SamplingHeapProfileHeader;
}(_ProfileView_js__WEBPACK_IMPORTED_MODULE_12__.WritableProfileHeader);
var SamplingHeapProfileNode = /*#__PURE__*/ function(_CPUProfile_ProfileTreeModel_ProfileNode) {
    "use strict";
    _inherits(SamplingHeapProfileNode, _CPUProfile_ProfileTreeModel_ProfileNode);
    var _super = _create_super(SamplingHeapProfileNode);
    function SamplingHeapProfileNode(node) {
        _class_call_check(this, SamplingHeapProfileNode);
        var _this;
        var callFrame = node.callFrame || {
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
            columnNumber: node['columnNumber'] - 1
        };
        _this = _super.call(this, callFrame);
        _define_property(_assert_this_initialized(_this), "self", void 0);
        _this.self = node.selfSize;
        return _this;
    }
    return SamplingHeapProfileNode;
}(_models_cpu_profile_cpu_profile_js__WEBPACK_IMPORTED_MODULE_5__.ProfileTreeModel.ProfileNode);
var SamplingHeapProfileModel = /*#__PURE__*/ function(_CPUProfile_ProfileTreeModel_ProfileTreeModel) {
    "use strict";
    _inherits(SamplingHeapProfileModel, _CPUProfile_ProfileTreeModel_ProfileTreeModel);
    var _super = _create_super(SamplingHeapProfileModel);
    function SamplingHeapProfileModel(profile, minOrdinal, maxOrdinal) {
        _class_call_check(this, SamplingHeapProfileModel);
        var _this;
        var translateProfileTree = function translateProfileTree(root) {
            var resultRoot = new SamplingHeapProfileNode(root);
            var sourceNodeStack = [
                root
            ];
            var targetNodeStack = [
                resultRoot
            ];
            while(sourceNodeStack.length){
                var _sourceNodeStack, _targetNodeStack;
                var sourceNode = sourceNodeStack.pop();
                var targetNode = targetNodeStack.pop();
                targetNode.children = sourceNode.children.map(function(child) {
                    var targetChild = new SamplingHeapProfileNode(child);
                    if (nodeIdToSizeMap) {
                        targetChild.self = nodeIdToSizeMap.get(child.id) || 0;
                    }
                    return targetChild;
                });
                (_sourceNodeStack = sourceNodeStack).push.apply(_sourceNodeStack, _to_consumable_array(sourceNode.children));
                (_targetNodeStack = targetNodeStack).push.apply(_targetNodeStack, _to_consumable_array(targetNode.children));
            }
            pruneEmptyBranches(resultRoot);
            return resultRoot;
        };
        _this = _super.call(this);
        // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        _define_property(_assert_this_initialized(_this), "modules", void 0);
        // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        _this.modules = profile.modules || [];
        var nodeIdToSizeMap = null;
        if (minOrdinal || maxOrdinal) {
            nodeIdToSizeMap = new Map();
            minOrdinal = minOrdinal || 0;
            maxOrdinal = maxOrdinal || Infinity;
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = profile.samples[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var sample = _step.value;
                    if (sample.ordinal < minOrdinal || sample.ordinal > maxOrdinal) {
                        continue;
                    }
                    var size = nodeIdToSizeMap.get(sample.nodeId) || 0;
                    nodeIdToSizeMap.set(sample.nodeId, size + sample.size);
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
        _this.initialize(translateProfileTree(profile.head));
        function pruneEmptyBranches(node) {
            node.children = node.children.filter(pruneEmptyBranches);
            return Boolean(node.children.length || node.self);
        }
        return _this;
    }
    return SamplingHeapProfileModel;
}(_models_cpu_profile_cpu_profile_js__WEBPACK_IMPORTED_MODULE_5__.ProfileTreeModel.ProfileTreeModel);
var NodeFormatter = /*#__PURE__*/ function() {
    "use strict";
    function NodeFormatter(profileView) {
        _class_call_check(this, NodeFormatter);
        _define_property(this, "profileView", void 0);
        this.profileView = profileView;
    }
    _create_class(NodeFormatter, [
        {
            key: "formatValue",
            value: function formatValue(value) {
                return _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.NumberUtilities.withThousandsSeparator(value);
            }
        },
        {
            key: "formatValueAccessibleText",
            value: function formatValueAccessibleText(value) {
                return i18nString(UIStrings.sBytes, {
                    PH1: value
                });
            }
        },
        {
            key: "formatPercent",
            value: function formatPercent(value, _node) {
                return i18nString(UIStrings.formatPercent, {
                    PH1: value.toFixed(2)
                });
            }
        },
        {
            key: "linkifyNode",
            value: function linkifyNode(node) {
                var heapProfilerModel = this.profileView.profileHeader.heapProfilerModel();
                var target = heapProfilerModel ? heapProfilerModel.target() : null;
                var options = {
                    className: 'profile-node-file',
                    inlineFrameIndex: 0
                };
                return this.profileView.linkifier().maybeLinkifyConsoleCallFrame(target, node.profileNode.callFrame, options);
            }
        }
    ]);
    return NodeFormatter;
}();
var HeapFlameChartDataProvider = /*#__PURE__*/ function(ProfileFlameChartDataProvider) {
    "use strict";
    _inherits(HeapFlameChartDataProvider, ProfileFlameChartDataProvider);
    var _super = _create_super(HeapFlameChartDataProvider);
    function HeapFlameChartDataProvider(profile, heapProfilerModel) {
        _class_call_check(this, HeapFlameChartDataProvider);
        var _this;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "profile", void 0);
        _define_property(_assert_this_initialized(_this), "heapProfilerModel", void 0);
        _this.profile = profile;
        _this.heapProfilerModel = heapProfilerModel;
        return _this;
    }
    _create_class(HeapFlameChartDataProvider, [
        {
            key: "minimumBoundary",
            value: function minimumBoundary() {
                return 0;
            }
        },
        {
            key: "totalTime",
            value: function totalTime() {
                return this.profile.root.total;
            }
        },
        {
            key: "entryHasDeoptReason",
            value: function entryHasDeoptReason(_entryIndex) {
                return false;
            }
        },
        {
            key: "formatValue",
            value: function formatValue(value, _precision) {
                return i18nString(UIStrings.skb, {
                    PH1: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.NumberUtilities.withThousandsSeparator(value / 1e3)
                });
            }
        },
        {
            key: "calculateTimelineData",
            value: function calculateTimelineData() {
                function nodesCount(node) {
                    return node.children.reduce(function(count, node) {
                        return count + nodesCount(node);
                    }, 1);
                }
                var count = nodesCount(this.profile.root);
                var entryNodes = new Array(count);
                var entryLevels = new Uint16Array(count);
                var entryTotalTimes = new Float32Array(count);
                var entryStartTimes = new Float64Array(count);
                var depth = 0;
                var maxDepth = 0;
                var position = 0;
                var index = 0;
                function addNode(node) {
                    var start = position;
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
                this.timelineDataInternal = _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_6__.FlameChart.FlameChartTimelineData.create({
                    entryLevels: entryLevels,
                    entryTotalTimes: entryTotalTimes,
                    entryStartTimes: entryStartTimes,
                    groups: null
                });
                return this.timelineDataInternal;
            }
        },
        {
            key: "prepareHighlightedEntryInfo",
            value: function prepareHighlightedEntryInfo(entryIndex) {
                var node = this.entryNodes[entryIndex];
                if (!node) {
                    return null;
                }
                var entryInfo = [];
                function pushEntryInfoRow(title, value) {
                    entryInfo.push({
                        title: title,
                        value: value
                    });
                }
                pushEntryInfoRow(i18nString(UIStrings.name), _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.UIUtils.beautifyFunctionName(node.functionName));
                pushEntryInfoRow(i18nString(UIStrings.selfSize), _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.NumberUtilities.bytesToString(node.self));
                pushEntryInfoRow(i18nString(UIStrings.totalSize), _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.NumberUtilities.bytesToString(node.total));
                var linkifier = new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_7__.Linkifier.Linkifier();
                var link = linkifier.maybeLinkifyConsoleCallFrame(this.heapProfilerModel ? this.heapProfilerModel.target() : null, node.callFrame);
                if (link) {
                    pushEntryInfoRow(i18nString(UIStrings.url), link.textContent);
                }
                linkifier.dispose();
                return _ProfileView_js__WEBPACK_IMPORTED_MODULE_12__.ProfileView.buildPopoverTable(entryInfo);
            }
        }
    ]);
    return HeapFlameChartDataProvider;
} //# sourceMappingURL=HeapProfileView.js.map
(_ProfileFlameChartDataProvider_js__WEBPACK_IMPORTED_MODULE_10__.ProfileFlameChartDataProvider);


}),

}]);