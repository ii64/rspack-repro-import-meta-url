"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_profiler_LiveHeapProfileView_js"], {
"./panels/profiler/LiveHeapProfileView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ActionDelegate: function() { return ActionDelegate; },
  GridNode: function() { return GridNode; },
  LiveHeapProfileView: function() { return LiveHeapProfileView; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */var _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/components/data_grid/data_grid.js */ "./ui/legacy/components/data_grid/data_grid.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _liveHeapProfile_css_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./liveHeapProfile.css.js */ "./panels/profiler/liveHeapProfile.css.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
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
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
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
     *@description Text for a heap profile type
     */ jsHeap: 'JS Heap',
    /**
     *@description Text in Live Heap Profile View of a profiler tool
     */ allocatedJsHeapSizeCurrentlyIn: 'Allocated JS heap size currently in use',
    /**
     *@description Text in Live Heap Profile View of a profiler tool
     */ vms: 'VMs',
    /**
     *@description Text in Live Heap Profile View of a profiler tool
     */ numberOfVmsSharingTheSameScript: 'Number of VMs sharing the same script source',
    /**
     *@description Text in Live Heap Profile View of a profiler tool
     */ scriptUrl: 'Script URL',
    /**
     *@description Text in Live Heap Profile View of a profiler tool
     */ urlOfTheScriptSource: 'URL of the script source',
    /**
     *@description Data grid name for Heap Profile data grids
     */ heapProfile: 'Heap Profile',
    /**
     *@description Text in Live Heap Profile View of a profiler tool
     *@example {1} PH1
     */ anonymousScriptS: '(Anonymous Script {PH1})',
    /**
     *@description A unit
     */ kb: 'kB'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/profiler/LiveHeapProfileView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
var liveHeapProfileViewInstance;
var LiveHeapProfileView = /*#__PURE__*/ function(_UI_Widget_VBox) {
    "use strict";
    _inherits(LiveHeapProfileView, _UI_Widget_VBox);
    var _super = _create_super(LiveHeapProfileView);
    function LiveHeapProfileView() {
        _class_call_check(this, LiveHeapProfileView);
        var _this;
        _this = _super.call(this, true);
        _define_property(_assert_this_initialized(_this), "gridNodeByUrl", void 0);
        _define_property(_assert_this_initialized(_this), "setting", void 0);
        _define_property(_assert_this_initialized(_this), "toggleRecordAction", void 0);
        _define_property(_assert_this_initialized(_this), "toggleRecordButton", void 0);
        _define_property(_assert_this_initialized(_this), "startWithReloadButton", void 0);
        _define_property(_assert_this_initialized(_this), "dataGrid", void 0);
        _define_property(_assert_this_initialized(_this), "currentPollId", void 0);
        _this.gridNodeByUrl = new Map();
        _this.setting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('memory-live-heap-profile');
        var toolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.Toolbar('live-heap-profile-toolbar', _this.contentElement);
        _this.toggleRecordAction = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ActionRegistry.ActionRegistry.instance().getAction('live-heap-profile.toggle-recording');
        _this.toggleRecordButton = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.Toolbar.createActionButton(_this.toggleRecordAction);
        _this.toggleRecordButton.setToggled(_this.setting.get());
        toolbar.appendToolbarItem(_this.toggleRecordButton);
        var mainTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().primaryPageTarget();
        if (mainTarget && mainTarget.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.ResourceTreeModel)) {
            var startWithReloadAction = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ActionRegistry.ActionRegistry.instance().getAction('live-heap-profile.start-with-reload');
            _this.startWithReloadButton = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.Toolbar.createActionButton(startWithReloadAction);
            toolbar.appendToolbarItem(_this.startWithReloadButton);
        }
        _this.dataGrid = _this.createDataGrid();
        _this.dataGrid.asWidget().show(_this.contentElement);
        _this.currentPollId = 0;
        return _this;
    }
    _create_class(LiveHeapProfileView, [
        {
            key: "createDataGrid",
            value: function createDataGrid() {
                var defaultColumnConfig = {
                    id: '',
                    title: _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.UIString.LocalizedEmptyString,
                    width: undefined,
                    fixedWidth: true,
                    sortable: true,
                    align: "right" /* DataGrid.DataGrid.Align.Right */ ,
                    sort: _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_5__.DataGrid.Order.Descending,
                    titleDOMFragment: undefined,
                    editable: undefined,
                    nonSelectable: undefined,
                    longText: undefined,
                    disclosure: undefined,
                    weight: undefined,
                    allowInSortByEvenWhenHidden: undefined,
                    dataType: undefined,
                    defaultWeight: undefined
                };
                var columns = [
                    _object_spread_props(_object_spread({}, defaultColumnConfig), {
                        id: 'size',
                        title: i18nString(UIStrings.jsHeap),
                        width: '72px',
                        fixedWidth: true,
                        sortable: true,
                        align: "right" /* DataGrid.DataGrid.Align.Right */ ,
                        sort: _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_5__.DataGrid.Order.Descending,
                        tooltip: i18nString(UIStrings.allocatedJsHeapSizeCurrentlyIn)
                    }),
                    _object_spread_props(_object_spread({}, defaultColumnConfig), {
                        id: 'isolates',
                        title: i18nString(UIStrings.vms),
                        width: '40px',
                        fixedWidth: true,
                        align: "right" /* DataGrid.DataGrid.Align.Right */ ,
                        tooltip: i18nString(UIStrings.numberOfVmsSharingTheSameScript)
                    }),
                    _object_spread_props(_object_spread({}, defaultColumnConfig), {
                        id: 'url',
                        title: i18nString(UIStrings.scriptUrl),
                        fixedWidth: false,
                        sortable: true,
                        tooltip: i18nString(UIStrings.urlOfTheScriptSource)
                    })
                ];
                var dataGrid = new _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_5__.SortableDataGrid.SortableDataGrid({
                    displayName: i18nString(UIStrings.heapProfile),
                    columns: columns,
                    editCallback: undefined,
                    deleteCallback: undefined,
                    refreshCallback: undefined
                });
                dataGrid.setResizeMethod("last" /* DataGrid.DataGrid.ResizeMethod.Last */ );
                dataGrid.element.classList.add('flex-auto');
                dataGrid.element.addEventListener('keydown', this.onKeyDown.bind(this), false);
                dataGrid.addEventListener("OpenedNode" /* DataGrid.DataGrid.Events.OpenedNode */ , this.revealSourceForSelectedNode, this);
                dataGrid.addEventListener("SortingChanged" /* DataGrid.DataGrid.Events.SortingChanged */ , this.sortingChanged, this);
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = columns[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var info = _step.value;
                        var headerCell = dataGrid.headerTableHeader(info.id);
                        if (headerCell) {
                            headerCell.setAttribute('title', info.tooltip);
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
                return dataGrid;
            }
        },
        {
            key: "wasShown",
            value: function wasShown() {
                _get(_get_prototype_of(LiveHeapProfileView.prototype), "wasShown", this).call(this);
                void this.poll();
                this.registerCSSFiles([
                    _liveHeapProfile_css_js__WEBPACK_IMPORTED_MODULE_7__["default"]
                ]);
                this.setting.addChangeListener(this.settingChanged, this);
            }
        },
        {
            key: "willHide",
            value: function willHide() {
                ++this.currentPollId;
                this.setting.removeChangeListener(this.settingChanged, this);
            }
        },
        {
            key: "settingChanged",
            value: function settingChanged(value) {
                this.toggleRecordButton.setToggled(value.data);
            }
        },
        {
            key: "poll",
            value: function poll() {
                var _this = this;
                return _async_to_generator(function() {
                    var pollId, isolates, profiles;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                pollId = _this.currentPollId;
                                _state.label = 1;
                            case 1:
                                isolates = Array.from(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.IsolateManager.IsolateManager.instance().isolates());
                                return [
                                    4,
                                    Promise.all(isolates.map(function(isolate) {
                                        var heapProfilerModel = isolate.heapProfilerModel();
                                        if (!heapProfilerModel) {
                                            return null;
                                        }
                                        return heapProfilerModel.getSamplingProfile();
                                    }))
                                ];
                            case 2:
                                profiles = _state.sent();
                                if (_this.currentPollId !== pollId) {
                                    return [
                                        2
                                    ];
                                }
                                _this.update(isolates, profiles);
                                return [
                                    4,
                                    new Promise(function(r) {
                                        return window.setTimeout(r, 3000);
                                    })
                                ];
                            case 3:
                                _state.sent();
                                _state.label = 4;
                            case 4:
                                if (_this.currentPollId === pollId) return [
                                    3,
                                    1
                                ];
                                _state.label = 5;
                            case 5:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "update",
            value: function update(isolates, profiles) {
                var dataByUrl = new Map();
                profiles.forEach(function(profile, index) {
                    if (profile) {
                        processNodeTree(isolates[index], '', profile.head);
                    }
                });
                var rootNode = this.dataGrid.rootNode();
                var exisitingNodes = new Set();
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = dataByUrl[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var pair = _step.value;
                        var url = pair[0];
                        var size = pair[1].size;
                        var isolateCount = pair[1].isolates.size;
                        if (!url) {
                            console.info("Node with empty URL: ".concat(size, " bytes")); // eslint-disable-line no-console
                            continue;
                        }
                        var node = this.gridNodeByUrl.get(url);
                        if (node) {
                            node.updateNode(size, isolateCount);
                        } else {
                            node = new GridNode(url, size, isolateCount);
                            this.gridNodeByUrl.set(url, node);
                            rootNode.appendChild(node);
                        }
                        exisitingNodes.add(node);
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
                var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                try {
                    for(var _iterator1 = rootNode.children.slice()[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                        var node1 = _step1.value;
                        var gridNode = node1;
                        if (!exisitingNodes.has(gridNode)) {
                            gridNode.remove();
                        }
                        this.gridNodeByUrl.delete(gridNode.url);
                    }
                } catch (err) {
                    _didIteratorError1 = true;
                    _iteratorError1 = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                            _iterator1.return();
                        }
                    } finally{
                        if (_didIteratorError1) {
                            throw _iteratorError1;
                        }
                    }
                }
                this.sortingChanged();
                function processNodeTree(isolate, parentUrl, node) {
                    var url = node.callFrame.url || parentUrl || systemNodeName(node) || anonymousScriptName(node);
                    node.children.forEach(processNodeTree.bind(null, isolate, url));
                    if (!node.selfSize) {
                        return;
                    }
                    var data = dataByUrl.get(url);
                    if (!data) {
                        data = {
                            size: 0,
                            isolates: new Set()
                        };
                        dataByUrl.set(url, data);
                    }
                    data.size += node.selfSize;
                    data.isolates.add(isolate);
                }
                function systemNodeName(node) {
                    var name = node.callFrame.functionName;
                    return name.startsWith('(') && name !== '(root)' ? name : '';
                }
                function anonymousScriptName(node) {
                    return Number(node.callFrame.scriptId) ? i18nString(UIStrings.anonymousScriptS, {
                        PH1: node.callFrame.scriptId
                    }) : '';
                }
            }
        },
        {
            key: "onKeyDown",
            value: function onKeyDown(event) {
                if (!(event.key === 'Enter')) {
                    return;
                }
                event.consume(true);
                this.revealSourceForSelectedNode();
            }
        },
        {
            key: "revealSourceForSelectedNode",
            value: function revealSourceForSelectedNode() {
                var node = this.dataGrid.selectedNode;
                if (!node || !node.url) {
                    return;
                }
                var sourceCode = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.Workspace.WorkspaceImpl.instance().uiSourceCodeForURL(node.url);
                if (sourceCode) {
                    void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(sourceCode);
                }
            }
        },
        {
            key: "sortingChanged",
            value: function sortingChanged() {
                var columnId = this.dataGrid.sortColumnId();
                if (!columnId) {
                    return;
                }
                function sortByUrl(a, b) {
                    return b.url.localeCompare(a.url);
                }
                function sortBySize(a, b) {
                    return b.size - a.size;
                }
                var sortFunction = columnId === 'url' ? sortByUrl : sortBySize;
                this.dataGrid.sortNodes(sortFunction, this.dataGrid.isSortOrderAscending());
            }
        },
        {
            key: "toggleRecording",
            value: function toggleRecording() {
                var enable = !this.setting.get();
                if (enable) {
                    this.startRecording(false);
                } else {
                    void this.stopRecording();
                }
            }
        },
        {
            key: "startRecording",
            value: function startRecording(reload) {
                this.setting.set(true);
                if (!reload) {
                    return;
                }
                var mainTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().primaryPageTarget();
                if (!mainTarget) {
                    return;
                }
                var resourceTreeModel = mainTarget.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.ResourceTreeModel);
                if (resourceTreeModel) {
                    resourceTreeModel.reloadPage();
                }
            }
        },
        {
            key: "stopRecording",
            value: function stopRecording() {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        _this.setting.set(false);
                        return [
                            2
                        ];
                    });
                })();
            }
        }
    ], [
        {
            key: "instance",
            value: function instance() {
                if (!liveHeapProfileViewInstance) {
                    liveHeapProfileViewInstance = new LiveHeapProfileView();
                }
                return liveHeapProfileViewInstance;
            }
        }
    ]);
    return LiveHeapProfileView;
}(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Widget.VBox);
var GridNode = /*#__PURE__*/ function(_DataGrid_SortableDataGrid_SortableDataGridNode) {
    "use strict";
    _inherits(GridNode, _DataGrid_SortableDataGrid_SortableDataGridNode);
    var _super = _create_super(GridNode);
    function GridNode(url, size, isolateCount) {
        _class_call_check(this, GridNode);
        var _this;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "url", void 0);
        _define_property(_assert_this_initialized(_this), "size", void 0);
        _define_property(_assert_this_initialized(_this), "isolateCount", void 0);
        _this.url = url;
        _this.size = size;
        _this.isolateCount = isolateCount;
        return _this;
    }
    _create_class(GridNode, [
        {
            key: "updateNode",
            value: function updateNode(size, isolateCount) {
                if (this.size === size && this.isolateCount === isolateCount) {
                    return;
                }
                this.size = size;
                this.isolateCount = isolateCount;
                this.refresh();
            }
        },
        {
            key: "createCell",
            value: function createCell(columnId) {
                var cell = this.createTD(columnId);
                switch(columnId){
                    case 'url':
                        cell.textContent = this.url;
                        break;
                    case 'size':
                        cell.textContent = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.NumberUtilities.withThousandsSeparator(Math.round(this.size / 1e3));
                        cell.createChild('span', 'size-units').textContent = i18nString(UIStrings.kb);
                        break;
                    case 'isolates':
                        cell.textContent = "".concat(this.isolateCount);
                        break;
                }
                return cell;
            }
        }
    ]);
    return GridNode;
}(_ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_5__.SortableDataGrid.SortableDataGridNode);
var ActionDelegate = /*#__PURE__*/ function() {
    "use strict";
    function ActionDelegate() {
        _class_call_check(this, ActionDelegate);
    }
    _create_class(ActionDelegate, [
        {
            key: "handleAction",
            value: function handleAction(_context, actionId) {
                var _this = this;
                void _async_to_generator(function() {
                    var profileViewId, view, widget;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                profileViewId = 'live-heap-profile';
                                return [
                                    4,
                                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ViewManager.ViewManager.instance().showView(profileViewId)
                                ];
                            case 1:
                                _state.sent();
                                view = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ViewManager.ViewManager.instance().view(profileViewId);
                                if (!view) return [
                                    3,
                                    3
                                ];
                                return [
                                    4,
                                    view.widget()
                                ];
                            case 2:
                                widget = _state.sent();
                                _this.innerHandleAction(widget, actionId);
                                _state.label = 3;
                            case 3:
                                return [
                                    2
                                ];
                        }
                    });
                })();
                return true;
            }
        },
        {
            key: "innerHandleAction",
            value: function innerHandleAction(profilerView, actionId) {
                switch(actionId){
                    case 'live-heap-profile.toggle-recording':
                        profilerView.toggleRecording();
                        break;
                    case 'live-heap-profile.start-with-reload':
                        profilerView.startRecording(true);
                        break;
                    default:
                        console.assert(false, "Unknown action: ".concat(actionId));
                }
            }
        }
    ]);
    return ActionDelegate;
} //# sourceMappingURL=LiveHeapProfileView.js.map
();


}),
"./panels/profiler/liveHeapProfile.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2019 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.data-grid {\n  border: none;\n}\n\n.data-grid td .size-units {\n  margin-left: 4px;\n  font-size: 75%;\n}\n\n.data-grid tr:not(.selected) td .size-units {\n  color: var(--sys-color-token-subtle);\n}\n\n.toolbar {\n  border-bottom: 1px solid var(--sys-color-divider);\n}\n\n/*# sourceURL=liveHeapProfile.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);