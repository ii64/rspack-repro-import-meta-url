"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_profiler_HeapSnapshotDataGrids_js-panels_profiler_HeapSnapshotGridNodes_js"], {
"./panels/profiler/HeapSnapshotDataGrids.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AllocationDataGrid: function() { return AllocationDataGrid; },
  HeapSnapshotConstructorsDataGrid: function() { return HeapSnapshotConstructorsDataGrid; },
  HeapSnapshotContainmentDataGrid: function() { return HeapSnapshotContainmentDataGrid; },
  HeapSnapshotDiffDataGrid: function() { return HeapSnapshotDiffDataGrid; },
  HeapSnapshotRetainmentDataGrid: function() { return HeapSnapshotRetainmentDataGrid; },
  HeapSnapshotRetainmentDataGridEvents: function() { return HeapSnapshotRetainmentDataGridEvents; },
  HeapSnapshotSortableDataGrid: function() { return HeapSnapshotSortableDataGrid; },
  HeapSnapshotSortableDataGridEvents: function() { return HeapSnapshotSortableDataGridEvents; },
  HeapSnapshotViewportDataGrid: function() { return HeapSnapshotViewportDataGrid; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/heap_snapshot_model/heap_snapshot_model.js */ "./models/heap_snapshot_model/heap_snapshot_model.js");
/* harmony import */var _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/components/data_grid/data_grid.js */ "./ui/legacy/components/data_grid/data_grid.js");
/* harmony import */var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/components/utils/utils.js */ "./ui/legacy/components/utils/utils.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _HeapSnapshotGridNodes_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./HeapSnapshotGridNodes.js */ "./panels/profiler/HeapSnapshotGridNodes.js");
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
     *@description Text in Heap Snapshot Data Grids of a profiler tool
     */ distanceFromWindowObject: 'Distance from window object',
    /**
     *@description Text in Heap Snapshot Data Grids of a profiler tool
     */ sizeOfTheObjectItselfInBytes: 'Size of the object itself in bytes',
    /**
     *@description Text in Heap Snapshot Data Grids of a profiler tool
     */ sizeOfTheObjectPlusTheGraphIt: 'Size of the object plus the graph it retains in bytes',
    /**
     *@description Text in Heap Snapshot Data Grids of a profiler tool
     */ object: 'Object',
    /**
     *@description Text in Heap Snapshot Data Grids of a profiler tool
     */ distance: 'Distance',
    /**
     *@description Text in Heap Snapshot Data Grids of a profiler tool. Shallow size is the size of just this node, not including children/retained size.
     */ shallowSize: 'Shallow Size',
    /**
     *@description Text in Heap Snapshot Data Grids of a profiler tool
     */ retainedSize: 'Retained Size',
    /**
     * @description Title for a section in the Heap Snapshot view. This title is for a table which
     * shows retaining relationships between JavaScript objects. One object retains another if it holds
     * a reference to it, keeping it alive.
     */ heapSnapshotRetainment: 'Heap Snapshot Retainment',
    /**
     *@description Text in Heap Snapshot Data Grids of a profiler tool
     */ constructorString: 'Constructor',
    /**
     *@description Data grid name for Heap Snapshot Constructors data grids
     */ heapSnapshotConstructors: 'Heap Snapshot Constructors',
    /**
     *@description Column header in a table displaying the diff between two Heap Snapshots. This
     * column is number of new objects in snapshot #2 compared to snapshot #1.
     */ New: '# New',
    /**
     *@description Column header in a table displaying the diff between two Heap Snapshots. This
     * column is number of deleted objects in snapshot #2 compared to snapshot #1.
     */ Deleted: '# Deleted',
    /**
     * @description Column header in a table displaying the diff between two Heap Snapshots. This
     * column is the difference (delta) between the # New and # Deleted objects in the snapshot.
     */ Delta: '# Delta',
    /**
     *@description Text in Heap Snapshot Data Grids of a profiler tool
     */ allocSize: 'Alloc. Size',
    /**
     *@description Text in Heap Snapshot Data Grids of a profiler tool
     */ freedSize: 'Freed Size',
    /**
     * @description Title of a column in a table in the Heap Snapshot tool. 'Delta' here means
     * difference, so the whole string means 'difference in size'.
     */ sizeDelta: 'Size Delta',
    /**
     *@description Data grid name for Heap Snapshot Diff data grids
     */ heapSnapshotDiff: 'Heap Snapshot Diff',
    /**
     *@description Text in Heap Snapshot Data Grids of a profiler tool
     */ liveCount: 'Live Count',
    /**
     *@description Text in Heap Snapshot Data Grids of a profiler tool
     */ count: 'Count',
    /**
     *@description Text in Heap Snapshot Data Grids of a profiler tool
     */ liveSize: 'Live Size',
    /**
     *@description Text for the size of something
     */ size: 'Size',
    /**
     *@description Text for a programming function
     */ function: 'Function',
    /**
     *@description Text in Heap Snapshot View of a profiler tool
     */ allocation: 'Allocation'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/profiler/HeapSnapshotDataGrids.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
var adjacencyMap = new WeakMap();
var HeapSnapshotSortableDataGridBase = /*#__PURE__*/ function(_DataGrid_DataGrid_DataGridImpl) {
    "use strict";
    _inherits(HeapSnapshotSortableDataGridBase, _DataGrid_DataGrid_DataGridImpl);
    var _super = _create_super(HeapSnapshotSortableDataGridBase);
    function HeapSnapshotSortableDataGridBase() {
        _class_call_check(this, HeapSnapshotSortableDataGridBase);
        return _super.apply(this, arguments);
    }
    return HeapSnapshotSortableDataGridBase;
}(_ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_3__.DataGrid.DataGridImpl);
var HeapSnapshotSortableDataGrid = /*#__PURE__*/ function(_Common_ObjectWrapper_eventMixin) {
    "use strict";
    _inherits(HeapSnapshotSortableDataGrid, _Common_ObjectWrapper_eventMixin);
    var _super = _create_super(HeapSnapshotSortableDataGrid);
    function HeapSnapshotSortableDataGrid(heapProfilerModel, dataDisplayDelegate, dataGridParameters) {
        _class_call_check(this, HeapSnapshotSortableDataGrid);
        var _this;
        // TODO(allada) This entire class needs to be converted to use the templates in DataGridNode.
        _this = _super.call(this, dataGridParameters);
        _define_property(_assert_this_initialized(_this), "snapshot", void 0);
        _define_property(_assert_this_initialized(_this), "selectedNode", void 0);
        _define_property(_assert_this_initialized(_this), "heapProfilerModelInternal", void 0);
        _define_property(_assert_this_initialized(_this), "dataDisplayDelegateInternal", void 0);
        _define_property(_assert_this_initialized(_this), "recursiveSortingDepth", void 0);
        _define_property(_assert_this_initialized(_this), "populatedAndSorted", void 0);
        _define_property(_assert_this_initialized(_this), "nameFilter", void 0);
        _define_property(_assert_this_initialized(_this), "nodeFilterInternal", void 0);
        _define_property(_assert_this_initialized(_this), "lastSortColumnId", void 0);
        _define_property(_assert_this_initialized(_this), "lastSortAscending", void 0);
        _this.snapshot = null;
        _this.selectedNode = null;
        _this.heapProfilerModelInternal = heapProfilerModel;
        _this.dataDisplayDelegateInternal = dataDisplayDelegate;
        var tooltips = [
            [
                'distance',
                i18nString(UIStrings.distanceFromWindowObject)
            ],
            [
                'shallowSize',
                i18nString(UIStrings.sizeOfTheObjectItselfInBytes)
            ],
            [
                'retainedSize',
                i18nString(UIStrings.sizeOfTheObjectPlusTheGraphIt)
            ]
        ];
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = tooltips[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var info = _step.value;
                var headerCell = _this.headerTableHeader(info[0]);
                if (headerCell) {
                    headerCell.setAttribute('title', info[1]);
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
        _this.recursiveSortingDepth = 0;
        _this.populatedAndSorted = false;
        _this.nameFilter = null;
        _this.nodeFilterInternal = new _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_2__.HeapSnapshotModel.NodeFilter();
        _this.addEventListener(HeapSnapshotSortableDataGridEvents.SortingComplete, _this.sortingComplete, _assert_this_initialized(_this));
        _this.addEventListener("SortingChanged" /* DataGrid.DataGrid.Events.SortingChanged */ , _this.sortingChanged, _assert_this_initialized(_this));
        _this.setRowContextMenuCallback(_this.populateContextMenu.bind(_assert_this_initialized(_this)));
        return _this;
    }
    _create_class(HeapSnapshotSortableDataGrid, [
        {
            key: "setDataSource",
            value: function setDataSource(_snapshot, _nodeIndex) {
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        return [
                            2
                        ];
                    });
                })();
            }
        },
        {
            key: "isFilteredOut",
            value: function isFilteredOut(node) {
                var nameFilterValue = this.nameFilter ? this.nameFilter.value().toLowerCase() : '';
                if (nameFilterValue && (_instanceof(node, _HeapSnapshotGridNodes_js__WEBPACK_IMPORTED_MODULE_6__.HeapSnapshotDiffNode) || _instanceof(node, _HeapSnapshotGridNodes_js__WEBPACK_IMPORTED_MODULE_6__.HeapSnapshotConstructorNode)) && node.filteredOut(nameFilterValue)) {
                    return true;
                }
                return false;
            }
        },
        {
            key: "heapProfilerModel",
            value: function heapProfilerModel() {
                return this.heapProfilerModelInternal;
            }
        },
        {
            key: "dataDisplayDelegate",
            value: function dataDisplayDelegate() {
                return this.dataDisplayDelegateInternal;
            }
        },
        {
            key: "nodeFilter",
            value: function nodeFilter() {
                return this.nodeFilterInternal;
            }
        },
        {
            key: "setNameFilter",
            value: function setNameFilter(nameFilter) {
                this.nameFilter = nameFilter;
            }
        },
        {
            key: "defaultPopulateCount",
            value: function defaultPopulateCount() {
                return 100;
            }
        },
        {
            key: "disposeAllNodes",
            value: function disposeAllNodes() {
                var children = this.topLevelNodes();
                for(var i = 0, l = children.length; i < l; ++i){
                    children[i].dispose();
                }
            }
        },
        {
            key: "wasShown",
            value: function wasShown() {
                if (this.nameFilter) {
                    this.nameFilter.addEventListener("TextChanged" /* UI.Toolbar.ToolbarInput.Event.TextChanged */ , this.onNameFilterChanged, this);
                    this.updateVisibleNodes(true);
                }
                if (this.populatedAndSorted) {
                    this.dispatchEventToListeners(HeapSnapshotSortableDataGridEvents.ContentShown, this);
                }
            }
        },
        {
            key: "sortingComplete",
            value: function sortingComplete() {
                this.removeEventListener(HeapSnapshotSortableDataGridEvents.SortingComplete, this.sortingComplete, this);
                this.populatedAndSorted = true;
                this.dispatchEventToListeners(HeapSnapshotSortableDataGridEvents.ContentShown, this);
            }
        },
        {
            key: "willHide",
            value: function willHide() {
                if (this.nameFilter) {
                    this.nameFilter.removeEventListener("TextChanged" /* UI.Toolbar.ToolbarInput.Event.TextChanged */ , this.onNameFilterChanged, this);
                }
            }
        },
        {
            key: "populateContextMenu",
            value: function populateContextMenu(contextMenu, gridNode) {
                var node = gridNode;
                node.populateContextMenu(contextMenu, this.dataDisplayDelegateInternal, this.heapProfilerModel());
                if (_instanceof(node, _HeapSnapshotGridNodes_js__WEBPACK_IMPORTED_MODULE_6__.HeapSnapshotGenericObjectNode) && node.linkElement) {
                    contextMenu.appendApplicableItems(node.linkElement);
                }
            }
        },
        {
            key: "resetSortingCache",
            value: function resetSortingCache() {
                delete this.lastSortColumnId;
                delete this.lastSortAscending;
            }
        },
        {
            key: "topLevelNodes",
            value: function topLevelNodes() {
                return this.rootNode().children;
            }
        },
        {
            key: "revealObjectByHeapSnapshotId",
            value: function revealObjectByHeapSnapshotId(_heapSnapshotObjectId) {
                return Promise.resolve(null);
            }
        },
        {
            key: "resetNameFilter",
            value: function resetNameFilter() {
                if (this.nameFilter) {
                    this.nameFilter.setValue('');
                }
            }
        },
        {
            key: "onNameFilterChanged",
            value: function onNameFilterChanged() {
                this.updateVisibleNodes(true);
                this.deselectFilteredNodes();
            }
        },
        {
            key: "deselectFilteredNodes",
            value: function deselectFilteredNodes() {
                var currentNode = this.selectedNode;
                while(currentNode){
                    if (this.selectedNode && this.isFilteredOut(currentNode)) {
                        this.selectedNode.deselect();
                        this.selectedNode = null;
                        return;
                    }
                    currentNode = currentNode.parent;
                }
            }
        },
        {
            key: "sortFields",
            value: function sortFields(_sortColumnId, _ascending) {
                throw new Error('Not implemented');
            }
        },
        {
            key: "sortingChanged",
            value: function sortingChanged() {
                var sortAscending = this.isSortOrderAscending();
                var sortColumnId = this.sortColumnId();
                if (this.lastSortColumnId === sortColumnId && this.lastSortAscending === sortAscending) {
                    return;
                }
                this.lastSortColumnId = sortColumnId;
                this.lastSortAscending = sortAscending;
                var sortFields = this.sortFields(sortColumnId || '', sortAscending);
                function sortByTwoFields(nodeA, nodeB) {
                    // @ts-ignore
                    var field1 = nodeA[sortFields.fieldName1];
                    // @ts-ignore
                    var field2 = nodeB[sortFields.fieldName1];
                    var result = field1 < field2 ? -1 : field1 > field2 ? 1 : 0;
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
                    result = field1 < field2 ? -1 : field1 > field2 ? 1 : 0;
                    if (!sortFields.ascending2) {
                        result = -result;
                    }
                    return result;
                }
                this.performSorting(sortByTwoFields);
            }
        },
        {
            key: "performSorting",
            value: function performSorting(sortFunction) {
                this.recursiveSortingEnter();
                var children = this.allChildren(this.rootNode());
                this.rootNode().removeChildren();
                children.sort(sortFunction);
                for(var i = 0, l = children.length; i < l; ++i){
                    var child = children[i];
                    this.appendChildAfterSorting(child);
                    if (child.expanded) {
                        void child.sort();
                    }
                }
                this.recursiveSortingLeave();
            }
        },
        {
            key: "appendChildAfterSorting",
            value: function appendChildAfterSorting(child) {
                var revealed = child.revealed;
                this.rootNode().appendChild(child);
                child.revealed = revealed;
            }
        },
        {
            key: "recursiveSortingEnter",
            value: function recursiveSortingEnter() {
                ++this.recursiveSortingDepth;
            }
        },
        {
            key: "recursiveSortingLeave",
            value: function recursiveSortingLeave() {
                if (!this.recursiveSortingDepth) {
                    return;
                }
                if (--this.recursiveSortingDepth) {
                    return;
                }
                this.updateVisibleNodes(true);
                this.dispatchEventToListeners(HeapSnapshotSortableDataGridEvents.SortingComplete);
            }
        },
        {
            key: "updateVisibleNodes",
            value: function updateVisibleNodes(_force) {}
        },
        {
            key: "allChildren",
            value: function allChildren(parent) {
                return parent.children;
            }
        },
        {
            key: "insertChild",
            value: function insertChild(parent, node, index) {
                parent.insertChild(node, index);
            }
        },
        {
            key: "removeChildByIndex",
            value: function removeChildByIndex(parent, index) {
                parent.removeChild(parent.children[index]);
            }
        },
        {
            key: "removeAllChildren",
            value: function removeAllChildren(parent) {
                parent.removeChildren();
            }
        },
        {
            key: "dataSourceChanged",
            value: function dataSourceChanged() {
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        throw new Error('Not implemented');
                    });
                })();
            }
        }
    ]);
    return HeapSnapshotSortableDataGrid;
}(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.eventMixin(HeapSnapshotSortableDataGridBase));
var HeapSnapshotSortableDataGridEvents;
(function(HeapSnapshotSortableDataGridEvents) {
    HeapSnapshotSortableDataGridEvents["ContentShown"] = "ContentShown";
    HeapSnapshotSortableDataGridEvents["SortingComplete"] = "SortingComplete";
    HeapSnapshotSortableDataGridEvents["ExpandRetainersComplete"] = "ExpandRetainersComplete";
})(HeapSnapshotSortableDataGridEvents || (HeapSnapshotSortableDataGridEvents = {}));
var HeapSnapshotViewportDataGrid = /*#__PURE__*/ function(HeapSnapshotSortableDataGrid) {
    "use strict";
    _inherits(HeapSnapshotViewportDataGrid, HeapSnapshotSortableDataGrid);
    var _super = _create_super(HeapSnapshotViewportDataGrid);
    function HeapSnapshotViewportDataGrid(heapProfilerModel, dataDisplayDelegate, dataGridParameters) {
        _class_call_check(this, HeapSnapshotViewportDataGrid);
        var _this;
        _this = _super.call(this, heapProfilerModel, dataDisplayDelegate, dataGridParameters);
        _define_property(_assert_this_initialized(_this), "topPaddingHeight", void 0);
        _define_property(_assert_this_initialized(_this), "bottomPaddingHeight", void 0);
        _define_property(_assert_this_initialized(_this), "selectedNode", void 0);
        _define_property(_assert_this_initialized(_this), "scrollToResolveCallback", void 0);
        _this.scrollContainer.addEventListener('scroll', _this.onScroll.bind(_assert_this_initialized(_this)), true);
        _this.topPaddingHeight = 0;
        _this.bottomPaddingHeight = 0;
        _this.selectedNode = null;
        return _this;
    }
    _create_class(HeapSnapshotViewportDataGrid, [
        {
            key: "topLevelNodes",
            value: function topLevelNodes() {
                return this.allChildren(this.rootNode());
            }
        },
        {
            key: "appendChildAfterSorting",
            value: function appendChildAfterSorting(_child) {
            // Do nothing here, it will be added in updateVisibleNodes.
            }
        },
        {
            key: "updateVisibleNodes",
            value: function updateVisibleNodes(force) {
                // Guard zone is used to ensure there are always some extra items
                // above and below the viewport to support keyboard navigation.
                var guardZoneHeight = 40;
                var scrollHeight = this.scrollContainer.scrollHeight;
                var scrollTop = this.scrollContainer.scrollTop;
                var scrollBottom = scrollHeight - scrollTop - this.scrollContainer.offsetHeight;
                scrollTop = Math.max(0, scrollTop - guardZoneHeight);
                scrollBottom = Math.max(0, scrollBottom - guardZoneHeight);
                var viewPortHeight = scrollHeight - scrollTop - scrollBottom;
                // Do nothing if populated nodes still fit the viewport.
                if (!force && scrollTop >= this.topPaddingHeight && scrollBottom >= this.bottomPaddingHeight) {
                    return;
                }
                var hysteresisHeight = 500;
                scrollTop -= hysteresisHeight;
                viewPortHeight += 2 * hysteresisHeight;
                var selectedNode = this.selectedNode;
                this.rootNode().removeChildren();
                this.topPaddingHeight = 0;
                this.bottomPaddingHeight = 0;
                this.addVisibleNodes(this.rootNode(), scrollTop, scrollTop + viewPortHeight);
                this.setVerticalPadding(this.topPaddingHeight, this.bottomPaddingHeight);
                if (selectedNode) {
                    // Keep selection even if the node is not in the current viewport.
                    if (selectedNode.parent) {
                        selectedNode.select(true);
                    } else {
                        this.selectedNode = selectedNode;
                    }
                }
            }
        },
        {
            key: "addVisibleNodes",
            value: function addVisibleNodes(parentNode, topBound, bottomBound) {
                if (!parentNode.expanded) {
                    return 0;
                }
                var children = this.allChildren(parentNode);
                var topPadding = 0;
                // Iterate over invisible nodes beyond the upper bound of viewport.
                // Do not insert them into the grid, but count their total height.
                var i = 0;
                for(; i < children.length; ++i){
                    var child = children[i];
                    if (this.isFilteredOut(child)) {
                        continue;
                    }
                    var newTop = topPadding + this.nodeHeight(child);
                    if (newTop > topBound) {
                        break;
                    }
                    topPadding = newTop;
                }
                // Put visible nodes into the data grid.
                var position = topPadding;
                for(; i < children.length && position < bottomBound; ++i){
                    var child1 = children[i];
                    if (this.isFilteredOut(child1)) {
                        continue;
                    }
                    var hasChildren = child1.hasChildren();
                    child1.removeChildren();
                    child1.setHasChildren(hasChildren);
                    parentNode.appendChild(child1);
                    position += child1.nodeSelfHeight();
                    position += this.addVisibleNodes(child1, topBound - position, bottomBound - position);
                }
                // Count the invisible nodes beyond the bottom bound of the viewport.
                var bottomPadding = 0;
                for(; i < children.length; ++i){
                    var child2 = children[i];
                    if (this.isFilteredOut(child2)) {
                        continue;
                    }
                    bottomPadding += this.nodeHeight(child2);
                }
                this.topPaddingHeight += topPadding;
                this.bottomPaddingHeight += bottomPadding;
                return position + bottomPadding;
            }
        },
        {
            key: "nodeHeight",
            value: function nodeHeight(node) {
                var result = node.nodeSelfHeight();
                if (!node.expanded) {
                    return result;
                }
                var children = this.allChildren(node);
                for(var i = 0; i < children.length; i++){
                    result += this.nodeHeight(children[i]);
                }
                return result;
            }
        },
        {
            key: "revealTreeNode",
            value: function revealTreeNode(pathToReveal) {
                var _this = this;
                var height = this.calculateOffset(pathToReveal);
                var node = pathToReveal[pathToReveal.length - 1];
                var scrollTop = this.scrollContainer.scrollTop;
                var scrollBottom = scrollTop + this.scrollContainer.offsetHeight;
                if (height >= scrollTop && height < scrollBottom) {
                    return Promise.resolve(node);
                }
                var scrollGap = 40;
                this.scrollContainer.scrollTop = Math.max(0, height - scrollGap);
                return new Promise(function(resolve) {
                    console.assert(!_this.scrollToResolveCallback);
                    _this.scrollToResolveCallback = resolve.bind(null, node);
                    // Still resolve the promise if it does not scroll for some reason.
                    _this.scrollContainer.window().requestAnimationFrame(function() {
                        if (!_this.scrollToResolveCallback) {
                            return;
                        }
                        _this.scrollToResolveCallback();
                        _this.scrollToResolveCallback = null;
                    });
                });
            }
        },
        {
            key: "calculateOffset",
            value: function calculateOffset(pathToReveal) {
                var parentNode = this.rootNode();
                var height = 0;
                if (pathToReveal.length === 0) {
                    return 0;
                }
                for(var i = 0; i < pathToReveal.length; ++i){
                    var node = pathToReveal[i];
                    var children = this.allChildren(parentNode);
                    for(var j = 0; j < children.length; ++j){
                        var child = children[j];
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
        },
        {
            key: "allChildren",
            value: function allChildren(parent) {
                var children = adjacencyMap.get(parent) || [];
                if (!adjacencyMap.has(parent)) {
                    adjacencyMap.set(parent, children);
                }
                return children;
            }
        },
        {
            key: "appendNode",
            value: function appendNode(parent, node) {
                this.allChildren(parent).push(node);
            }
        },
        {
            key: "insertChild",
            value: function insertChild(parent, node, index) {
                this.allChildren(parent).splice(index, 0, node);
            }
        },
        {
            key: "removeChildByIndex",
            value: function removeChildByIndex(parent, index) {
                this.allChildren(parent).splice(index, 1);
            }
        },
        {
            key: "removeAllChildren",
            value: function removeAllChildren(parent) {
                adjacencyMap.delete(parent);
            }
        },
        {
            key: "removeTopLevelNodes",
            value: function removeTopLevelNodes() {
                this.disposeAllNodes();
                this.rootNode().removeChildren();
                this.removeAllChildren(this.rootNode());
            }
        },
        {
            key: "isScrolledIntoView",
            value: function isScrolledIntoView(element) {
                var viewportTop = this.scrollContainer.scrollTop;
                var viewportBottom = viewportTop + this.scrollContainer.clientHeight;
                var elemTop = element.offsetTop;
                var elemBottom = elemTop + element.offsetHeight;
                return elemBottom <= viewportBottom && elemTop >= viewportTop;
            }
        },
        {
            key: "onResize",
            value: function onResize() {
                _get(_get_prototype_of(HeapSnapshotViewportDataGrid.prototype), "onResize", this).call(this);
                this.updateVisibleNodes(false);
            }
        },
        {
            key: "onScroll",
            value: function onScroll(_event) {
                this.updateVisibleNodes(false);
                if (this.scrollToResolveCallback) {
                    this.scrollToResolveCallback();
                    this.scrollToResolveCallback = null;
                }
            }
        }
    ]);
    return HeapSnapshotViewportDataGrid;
}(HeapSnapshotSortableDataGrid);
var HeapSnapshotContainmentDataGrid = /*#__PURE__*/ function(HeapSnapshotSortableDataGrid) {
    "use strict";
    _inherits(HeapSnapshotContainmentDataGrid, HeapSnapshotSortableDataGrid);
    var _super = _create_super(HeapSnapshotContainmentDataGrid);
    function HeapSnapshotContainmentDataGrid(heapProfilerModel, dataDisplayDelegate, displayName, columns) {
        _class_call_check(this, HeapSnapshotContainmentDataGrid);
        columns = columns || [
            {
                id: 'object',
                title: i18nString(UIStrings.object),
                disclosure: true,
                sortable: true
            },
            {
                id: 'distance',
                title: i18nString(UIStrings.distance),
                width: '70px',
                sortable: true,
                fixedWidth: true
            },
            {
                id: 'shallowSize',
                title: i18nString(UIStrings.shallowSize),
                width: '110px',
                sortable: true,
                fixedWidth: true
            },
            {
                id: 'retainedSize',
                title: i18nString(UIStrings.retainedSize),
                width: '110px',
                sortable: true,
                fixedWidth: true,
                sort: _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_3__.DataGrid.Order.Descending
            }
        ];
        var dataGridParameters = {
            displayName: displayName,
            columns: columns
        };
        return _super.call(this, heapProfilerModel, dataDisplayDelegate, dataGridParameters);
    }
    _create_class(HeapSnapshotContainmentDataGrid, [
        {
            key: "setDataSource",
            value: function setDataSource(snapshot, nodeIndex, nodeId) {
                var _this = this;
                return _async_to_generator(function() {
                    var node;
                    return _ts_generator(this, function(_state) {
                        _this.snapshot = snapshot;
                        node = new _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_2__.HeapSnapshotModel.Node(nodeId !== null && nodeId !== void 0 ? nodeId : -1, 'root', 0, nodeIndex || snapshot.rootNodeIndex, 0, 0, '');
                        _this.setRootNode(_this.createRootNode(snapshot, node));
                        void _this.rootNode().sort();
                        return [
                            2
                        ];
                    });
                })();
            }
        },
        {
            key: "createRootNode",
            value: function createRootNode(snapshot, node) {
                var fakeEdge = new _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_2__.HeapSnapshotModel.Edge('', node, '', -1);
                return new _HeapSnapshotGridNodes_js__WEBPACK_IMPORTED_MODULE_6__.HeapSnapshotObjectNode(this, snapshot, fakeEdge, null);
            }
        },
        {
            key: "sortingChanged",
            value: function sortingChanged() {
                var rootNode = this.rootNode();
                if (rootNode.hasChildren()) {
                    void rootNode.sort();
                }
            }
        }
    ]);
    return HeapSnapshotContainmentDataGrid;
}(HeapSnapshotSortableDataGrid);
var HeapSnapshotRetainmentDataGrid = /*#__PURE__*/ function(HeapSnapshotContainmentDataGrid) {
    "use strict";
    _inherits(HeapSnapshotRetainmentDataGrid, HeapSnapshotContainmentDataGrid);
    var _super = _create_super(HeapSnapshotRetainmentDataGrid);
    function HeapSnapshotRetainmentDataGrid(heapProfilerModel, dataDisplayDelegate) {
        _class_call_check(this, HeapSnapshotRetainmentDataGrid);
        var _this;
        var columns = [
            {
                id: 'object',
                title: i18nString(UIStrings.object),
                disclosure: true,
                sortable: true
            },
            {
                id: 'distance',
                title: i18nString(UIStrings.distance),
                width: '70px',
                sortable: true,
                fixedWidth: true,
                sort: _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_3__.DataGrid.Order.Ascending
            },
            {
                id: 'shallowSize',
                title: i18nString(UIStrings.shallowSize),
                width: '110px',
                sortable: true,
                fixedWidth: true
            },
            {
                id: 'retainedSize',
                title: i18nString(UIStrings.retainedSize),
                width: '110px',
                sortable: true,
                fixedWidth: true
            }
        ];
        _this = _super.call(this, heapProfilerModel, dataDisplayDelegate, i18nString(UIStrings.heapSnapshotRetainment), columns);
        _define_property(_assert_this_initialized(_this), "resetRetainersButton", void 0);
        return _this;
    }
    _create_class(HeapSnapshotRetainmentDataGrid, [
        {
            key: "createRootNode",
            value: function createRootNode(snapshot, node) {
                var fakeEdge = new _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_2__.HeapSnapshotModel.Edge('', node, '', -1);
                return new _HeapSnapshotGridNodes_js__WEBPACK_IMPORTED_MODULE_6__.HeapSnapshotRetainingObjectNode(this, snapshot, fakeEdge, null);
            }
        },
        {
            key: "sortFields",
            value: function sortFields(sortColumn, sortAscending) {
                switch(sortColumn){
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
                        throw new Error("Unknown column ".concat(sortColumn));
                }
            }
        },
        {
            key: "reset",
            value: function reset() {
                this.rootNode().removeChildren();
                this.resetSortingCache();
            }
        },
        {
            key: "updateResetButtonVisibility",
            value: function updateResetButtonVisibility() {
                var _this = this;
                var _this_snapshot;
                void ((_this_snapshot = this.snapshot) === null || _this_snapshot === void 0 ? void 0 : _this_snapshot.areNodesIgnoredInRetainersView().then(function(value) {
                    var _this_resetRetainersButton;
                    (_this_resetRetainersButton = _this.resetRetainersButton) === null || _this_resetRetainersButton === void 0 ? void 0 : _this_resetRetainersButton.setVisible(value);
                }));
            }
        },
        {
            key: "setDataSource",
            value: function setDataSource(snapshot, nodeIndex, nodeId) {
                var _this = this;
                var _this1 = this, _superprop_get_setDataSource = function() {
                    return _get(_get_prototype_of(HeapSnapshotRetainmentDataGrid.prototype), "setDataSource", _this);
                };
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _superprop_get_setDataSource().call(_this1, snapshot, nodeIndex, nodeId)
                                ];
                            case 1:
                                _state.sent();
                                _this1.rootNode().expand();
                                _this1.updateResetButtonVisibility();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "dataSourceChanged",
            value: function dataSourceChanged() {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this.reset();
                                return [
                                    4,
                                    _this.rootNode().sort()
                                ];
                            case 1:
                                _state.sent();
                                _this.rootNode().expand();
                                _this.updateResetButtonVisibility();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return HeapSnapshotRetainmentDataGrid;
}(HeapSnapshotContainmentDataGrid);
// TODO(crbug.com/1228674): Remove this enum, it is only used in web tests.
var HeapSnapshotRetainmentDataGridEvents;
(function(HeapSnapshotRetainmentDataGridEvents) {
    HeapSnapshotRetainmentDataGridEvents["ExpandRetainersComplete"] = "ExpandRetainersComplete";
})(HeapSnapshotRetainmentDataGridEvents || (HeapSnapshotRetainmentDataGridEvents = {}));
var HeapSnapshotConstructorsDataGrid = /*#__PURE__*/ function(HeapSnapshotViewportDataGrid) {
    "use strict";
    _inherits(HeapSnapshotConstructorsDataGrid, HeapSnapshotViewportDataGrid);
    var _super = _create_super(HeapSnapshotConstructorsDataGrid);
    function HeapSnapshotConstructorsDataGrid(heapProfilerModel, dataDisplayDelegate) {
        _class_call_check(this, HeapSnapshotConstructorsDataGrid);
        var _this;
        var columns = [
            {
                id: 'object',
                title: i18nString(UIStrings.constructorString),
                disclosure: true,
                sortable: true
            },
            {
                id: 'distance',
                title: i18nString(UIStrings.distance),
                width: '70px',
                sortable: true,
                fixedWidth: true
            },
            {
                id: 'shallowSize',
                title: i18nString(UIStrings.shallowSize),
                width: '110px',
                sortable: true,
                fixedWidth: true
            },
            {
                id: 'retainedSize',
                title: i18nString(UIStrings.retainedSize),
                width: '110px',
                sort: _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_3__.DataGrid.Order.Descending,
                sortable: true,
                fixedWidth: true
            }
        ];
        _this = _super.call(this, heapProfilerModel, dataDisplayDelegate, {
            displayName: i18nString(UIStrings.heapSnapshotConstructors).toString(),
            columns: columns
        });
        _define_property(_assert_this_initialized(_this), "profileIndex", void 0);
        _define_property(_assert_this_initialized(_this), "objectIdToSelect", void 0);
        _define_property(_assert_this_initialized(_this), "nextRequestedFilter", void 0);
        _define_property(_assert_this_initialized(_this), "lastFilter", void 0);
        _define_property(_assert_this_initialized(_this), "filterInProgress", void 0);
        // clang-format on
        _this.profileIndex = -1;
        _this.objectIdToSelect = null;
        _this.nextRequestedFilter = null;
        return _this;
    }
    _create_class(HeapSnapshotConstructorsDataGrid, [
        {
            key: "sortFields",
            value: function sortFields(sortColumn, sortAscending) {
                switch(sortColumn){
                    case 'object':
                        return new _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_2__.HeapSnapshotModel.ComparatorConfig('name', sortAscending, 'retainedSize', false);
                    case 'distance':
                        return new _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_2__.HeapSnapshotModel.ComparatorConfig('distance', sortAscending, 'retainedSize', false);
                    case 'shallowSize':
                        return new _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_2__.HeapSnapshotModel.ComparatorConfig('shallowSize', sortAscending, 'name', true);
                    case 'retainedSize':
                        return new _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_2__.HeapSnapshotModel.ComparatorConfig('retainedSize', sortAscending, 'name', true);
                    default:
                        throw new Error("Unknown column ".concat(sortColumn));
                }
            }
        },
        {
            key: "revealObjectByHeapSnapshotId",
            value: function revealObjectByHeapSnapshotId(id) {
                var _this = this;
                return _async_to_generator(function() {
                    var className, parent, nodes;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!_this.snapshot) {
                                    _this.objectIdToSelect = id;
                                    return [
                                        2,
                                        null
                                    ];
                                }
                                return [
                                    4,
                                    _this.snapshot.nodeClassName(parseInt(id, 10))
                                ];
                            case 1:
                                className = _state.sent();
                                if (!className) {
                                    return [
                                        2,
                                        null
                                    ];
                                }
                                parent = _this.topLevelNodes().find(function(classNode) {
                                    return classNode.name === className;
                                });
                                if (!parent) {
                                    return [
                                        2,
                                        null
                                    ];
                                }
                                return [
                                    4,
                                    parent.populateNodeBySnapshotObjectId(parseInt(id, 10))
                                ];
                            case 2:
                                nodes = _state.sent();
                                return [
                                    2,
                                    nodes.length ? _this.revealTreeNode(nodes) : null
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "clear",
            value: function clear() {
                this.nextRequestedFilter = null;
                this.lastFilter = null;
                this.removeTopLevelNodes();
            }
        },
        {
            key: "setDataSource",
            value: function setDataSource(snapshot, _nodeIndex) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        _this.snapshot = snapshot;
                        if (_this.profileIndex === -1) {
                            void _this.populateChildren();
                        }
                        if (_this.objectIdToSelect) {
                            void _this.revealObjectByHeapSnapshotId(_this.objectIdToSelect);
                            _this.objectIdToSelect = null;
                        }
                        return [
                            2
                        ];
                    });
                })();
            }
        },
        {
            key: "setSelectionRange",
            value: function setSelectionRange(minNodeId, maxNodeId) {
                this.nodeFilterInternal = new _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_2__.HeapSnapshotModel.NodeFilter(minNodeId, maxNodeId);
                void this.populateChildren(this.nodeFilterInternal);
            }
        },
        {
            key: "setAllocationNodeId",
            value: function setAllocationNodeId(allocationNodeId) {
                this.nodeFilterInternal = new _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_2__.HeapSnapshotModel.NodeFilter();
                this.nodeFilterInternal.allocationNodeId = allocationNodeId;
                void this.populateChildren(this.nodeFilterInternal);
            }
        },
        {
            key: "aggregatesReceived",
            value: function aggregatesReceived(nodeFilter, aggregates) {
                this.filterInProgress = null;
                if (this.nextRequestedFilter && this.snapshot) {
                    void this.snapshot.aggregatesWithFilter(this.nextRequestedFilter).then(this.aggregatesReceived.bind(this, this.nextRequestedFilter));
                    this.filterInProgress = this.nextRequestedFilter;
                    this.nextRequestedFilter = null;
                }
                this.removeTopLevelNodes();
                this.resetSortingCache();
                for(var constructor in aggregates){
                    this.appendNode(this.rootNode(), new _HeapSnapshotGridNodes_js__WEBPACK_IMPORTED_MODULE_6__.HeapSnapshotConstructorNode(this, constructor, aggregates[constructor], nodeFilter));
                }
                this.sortingChanged();
                this.lastFilter = nodeFilter;
            }
        },
        {
            key: "populateChildren",
            value: function populateChildren(maybeNodeFilter) {
                var _this = this;
                return _async_to_generator(function() {
                    var nodeFilter, aggregates;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                nodeFilter = maybeNodeFilter || new _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_2__.HeapSnapshotModel.NodeFilter();
                                if (_this.filterInProgress) {
                                    _this.nextRequestedFilter = _this.filterInProgress.equals(nodeFilter) ? null : nodeFilter;
                                    return [
                                        2
                                    ];
                                }
                                if (_this.lastFilter && _this.lastFilter.equals(nodeFilter)) {
                                    return [
                                        2
                                    ];
                                }
                                _this.filterInProgress = nodeFilter;
                                if (!_this.snapshot) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    _this.snapshot.aggregatesWithFilter(nodeFilter)
                                ];
                            case 1:
                                aggregates = _state.sent();
                                _this.aggregatesReceived(nodeFilter, aggregates);
                                _state.label = 2;
                            case 2:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "filterSelectIndexChanged",
            value: function filterSelectIndexChanged(profiles, profileIndex, filterName) {
                this.profileIndex = profileIndex;
                this.nodeFilterInternal = undefined;
                if (profileIndex !== -1) {
                    var minNodeId = profileIndex > 0 ? profiles[profileIndex - 1].maxJSObjectId : 0;
                    var maxNodeId = profiles[profileIndex].maxJSObjectId;
                    this.nodeFilterInternal = new _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_2__.HeapSnapshotModel.NodeFilter(minNodeId, maxNodeId);
                } else if (filterName !== undefined) {
                    this.nodeFilterInternal = new _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_2__.HeapSnapshotModel.NodeFilter();
                    this.nodeFilterInternal.filterName = filterName;
                }
                void this.populateChildren(this.nodeFilterInternal);
            }
        }
    ]);
    return HeapSnapshotConstructorsDataGrid;
}(HeapSnapshotViewportDataGrid);
var HeapSnapshotDiffDataGrid = /*#__PURE__*/ function(HeapSnapshotViewportDataGrid) {
    "use strict";
    _inherits(HeapSnapshotDiffDataGrid, HeapSnapshotViewportDataGrid);
    var _super = _create_super(HeapSnapshotDiffDataGrid);
    function HeapSnapshotDiffDataGrid(heapProfilerModel, dataDisplayDelegate) {
        _class_call_check(this, HeapSnapshotDiffDataGrid);
        var _this;
        var columns = [
            {
                id: 'object',
                title: i18nString(UIStrings.constructorString),
                disclosure: true,
                sortable: true
            },
            {
                id: 'addedCount',
                title: i18nString(UIStrings.New),
                width: '75px',
                sortable: true,
                fixedWidth: true
            },
            {
                id: 'removedCount',
                title: i18nString(UIStrings.Deleted),
                width: '75px',
                sortable: true,
                fixedWidth: true
            },
            {
                id: 'countDelta',
                title: i18nString(UIStrings.Delta),
                width: '65px',
                sortable: true,
                fixedWidth: true
            },
            {
                id: 'addedSize',
                title: i18nString(UIStrings.allocSize),
                width: '75px',
                sortable: true,
                fixedWidth: true,
                sort: _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_3__.DataGrid.Order.Descending
            },
            {
                id: 'removedSize',
                title: i18nString(UIStrings.freedSize),
                width: '75px',
                sortable: true,
                fixedWidth: true
            },
            {
                id: 'sizeDelta',
                title: i18nString(UIStrings.sizeDelta),
                width: '75px',
                sortable: true,
                fixedWidth: true
            }
        ];
        _this = _super.call(this, heapProfilerModel, dataDisplayDelegate, {
            displayName: i18nString(UIStrings.heapSnapshotDiff).toString(),
            columns: columns
        });
        _define_property(_assert_this_initialized(_this), "baseSnapshot", void 0);
        return _this;
    }
    _create_class(HeapSnapshotDiffDataGrid, [
        {
            key: "defaultPopulateCount",
            value: function defaultPopulateCount() {
                return 50;
            }
        },
        {
            key: "sortFields",
            value: function sortFields(sortColumn, sortAscending) {
                switch(sortColumn){
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
                        throw new Error("Unknown column ".concat(sortColumn));
                }
            }
        },
        {
            key: "setDataSource",
            value: function setDataSource(snapshot, _nodeIndex) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        _this.snapshot = snapshot;
                        return [
                            2
                        ];
                    });
                })();
            }
        },
        {
            key: "setBaseDataSource",
            value: function setBaseDataSource(baseSnapshot) {
                this.baseSnapshot = baseSnapshot;
                this.removeTopLevelNodes();
                this.resetSortingCache();
                if (this.baseSnapshot === this.snapshot) {
                    this.dispatchEventToListeners(HeapSnapshotSortableDataGridEvents.SortingComplete);
                    return;
                }
                void this.populateChildren();
            }
        },
        {
            key: "populateChildren",
            value: function populateChildren() {
                var _this = this;
                return _async_to_generator(function() {
                    var aggregatesForDiff, diffByClassName, className, diff;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (_this.snapshot === null || _this.baseSnapshot === undefined || _this.baseSnapshot.uid === undefined) {
                                    throw new Error('Data sources have not been set correctly');
                                }
                                return [
                                    4,
                                    _this.baseSnapshot.aggregatesForDiff()
                                ];
                            case 1:
                                aggregatesForDiff = _state.sent();
                                return [
                                    4,
                                    _this.snapshot.calculateSnapshotDiff(_this.baseSnapshot.uid, aggregatesForDiff)
                                ];
                            case 2:
                                diffByClassName = _state.sent();
                                for(var className in diffByClassName){
                                    diff = diffByClassName[className];
                                    _this.appendNode(_this.rootNode(), new _HeapSnapshotGridNodes_js__WEBPACK_IMPORTED_MODULE_6__.HeapSnapshotDiffNode(_this, className, diff));
                                }
                                _this.sortingChanged();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return HeapSnapshotDiffDataGrid;
}(HeapSnapshotViewportDataGrid);
var AllocationDataGrid = /*#__PURE__*/ function(HeapSnapshotViewportDataGrid) {
    "use strict";
    _inherits(AllocationDataGrid, HeapSnapshotViewportDataGrid);
    var _super = _create_super(AllocationDataGrid);
    function AllocationDataGrid(heapProfilerModel, dataDisplayDelegate) {
        _class_call_check(this, AllocationDataGrid);
        var _this;
        var columns = [
            {
                id: 'liveCount',
                title: i18nString(UIStrings.liveCount),
                width: '75px',
                sortable: true,
                fixedWidth: true
            },
            {
                id: 'count',
                title: i18nString(UIStrings.count),
                width: '65px',
                sortable: true,
                fixedWidth: true
            },
            {
                id: 'liveSize',
                title: i18nString(UIStrings.liveSize),
                width: '75px',
                sortable: true,
                fixedWidth: true
            },
            {
                id: 'size',
                title: i18nString(UIStrings.size),
                width: '75px',
                sortable: true,
                fixedWidth: true,
                sort: _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_3__.DataGrid.Order.Descending
            },
            {
                id: 'name',
                title: i18nString(UIStrings.function),
                disclosure: true,
                sortable: true
            }
        ];
        _this = _super.call(this, heapProfilerModel, dataDisplayDelegate, {
            displayName: i18nString(UIStrings.allocation).toString(),
            columns: columns
        });
        _define_property(_assert_this_initialized(_this), "linkifierInternal", void 0);
        _define_property(_assert_this_initialized(_this), "topNodes", void 0);
        // clang-format on
        _this.linkifierInternal = new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__.Linkifier.Linkifier();
        return _this;
    }
    _create_class(AllocationDataGrid, [
        {
            key: "linkifier",
            get: function get() {
                return this.linkifierInternal;
            }
        },
        {
            key: "dispose",
            value: function dispose() {
                this.linkifierInternal.reset();
            }
        },
        {
            key: "setDataSource",
            value: function setDataSource(snapshot, _nodeIndex) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this.snapshot = snapshot;
                                return [
                                    4,
                                    _this.snapshot.allocationTracesTops()
                                ];
                            case 1:
                                _this.topNodes = _state.sent();
                                _this.populateChildren();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "populateChildren",
            value: function populateChildren() {
                this.removeTopLevelNodes();
                var root = this.rootNode();
                var tops = this.topNodes || [];
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = tops[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var top = _step.value;
                        this.appendNode(root, new _HeapSnapshotGridNodes_js__WEBPACK_IMPORTED_MODULE_6__.AllocationGridNode(this, top));
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
                this.updateVisibleNodes(true);
            }
        },
        {
            key: "sortingChanged",
            value: function sortingChanged() {
                if (this.topNodes !== undefined) {
                    this.topNodes.sort(this.createComparator());
                    this.rootNode().removeChildren();
                    this.populateChildren();
                }
            }
        },
        {
            key: "createComparator",
            value: function createComparator() {
                var fieldName = this.sortColumnId();
                var compareResult = this.sortOrder() === _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_3__.DataGrid.Order.Ascending ? +1 : -1;
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
    ]);
    return AllocationDataGrid;
} //# sourceMappingURL=HeapSnapshotDataGrids.js.map
(HeapSnapshotViewportDataGrid);


}),
"./panels/profiler/HeapSnapshotGridNodes.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AllocationGridNode: function() { return AllocationGridNode; },
  HeapSnapshotConstructorNode: function() { return HeapSnapshotConstructorNode; },
  HeapSnapshotDiffNode: function() { return HeapSnapshotDiffNode; },
  HeapSnapshotDiffNodesProvider: function() { return HeapSnapshotDiffNodesProvider; },
  HeapSnapshotGenericObjectNode: function() { return HeapSnapshotGenericObjectNode; },
  HeapSnapshotGridNode: function() { return HeapSnapshotGridNode; },
  HeapSnapshotInstanceNode: function() { return HeapSnapshotInstanceNode; },
  HeapSnapshotObjectNode: function() { return HeapSnapshotObjectNode; },
  HeapSnapshotRetainingObjectNode: function() { return HeapSnapshotRetainingObjectNode; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/heap_snapshot_model/heap_snapshot_model.js */ "./models/heap_snapshot_model/heap_snapshot_model.js");
/* harmony import */var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */var _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/legacy/components/data_grid/data_grid.js */ "./ui/legacy/components/data_grid/data_grid.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _HeapSnapshotDataGrids_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./HeapSnapshotDataGrids.js */ "./panels/profiler/HeapSnapshotDataGrids.js");
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
 */ function _array_like_to_array(arr, len) {
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
function _check_private_redeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
        throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
}
function _class_apply_descriptor_get(receiver, descriptor) {
    if (descriptor.get) {
        return descriptor.get.call(receiver);
    }
    return descriptor.value;
}
function _class_apply_descriptor_set(receiver, descriptor, value) {
    if (descriptor.set) {
        descriptor.set.call(receiver, value);
    } else {
        if (!descriptor.writable) {
            throw new TypeError("attempted to set read only private field");
        }
        descriptor.value = value;
    }
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _class_extract_field_descriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to " + action + " private field on non-instance");
    }
    return privateMap.get(receiver);
}
function _class_private_field_get(receiver, privateMap) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "get");
    return _class_apply_descriptor_get(receiver, descriptor);
}
function _class_private_field_init(obj, privateMap, value) {
    _check_private_redeclaration(obj, privateMap);
    privateMap.set(obj, value);
}
function _class_private_field_set(receiver, privateMap, value) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "set");
    _class_apply_descriptor_set(receiver, descriptor, value);
    return value;
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
function _tagged_template_literal(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
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
function _templateObject() {
    var data = _tagged_template_literal([
        '<td class="numeric-column" jslog=',
        " />"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        "<span>",
        "</span>"
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        '<span class="percent-column">',
        "</span>"
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = _tagged_template_literal([
        '\n  <td class="object-column disclosure" jslog=',
        '>\n  <div class="source-code event-properties" style="overflow: visible;" $="container">\n  <span class="value object-value-',
        '">',
        '</span>\n  <span class="object-value-id">@',
        "</span>\n  </div>\n  </td>"
    ]);
    _templateObject3 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject4() {
    var data = _tagged_template_literal([
        '<span class="heap-object-source-link" />'
    ]);
    _templateObject4 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject5() {
    var data = _tagged_template_literal([
        '<span class="property-name ',
        '">',
        '</span>\n  <span class="grayed">',
        "</span>"
    ]);
    _templateObject5 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject6() {
    var data = _tagged_template_literal([
        '<span class="objects-count">\xd7',
        "</span>"
    ]);
    _templateObject6 = function _templateObject() {
        return data;
    };
    return data;
}










var UIStrings = {
    /**
     *@description Generic text with two placeholders separated by a comma
     *@example {1 613 680} PH1
     *@example {44 %} PH2
     */ genericStringsTwoPlaceholders: '{PH1}, {PH2}',
    /**
     *@description Text in Heap Snapshot Grid Nodes of a profiler tool
     */ internalArray: '(internal array)[]',
    /**
     *@description Text in Heap Snapshot Grid Nodes of a profiler tool
     */ userObjectReachableFromWindow: 'User object reachable from window',
    /**
     *@description Text in Heap Snapshot Grid Nodes of a profiler tool
     */ detachedFromDomTree: 'Detached from DOM tree',
    /**
     *@description Text in Heap Snapshot Grid Nodes of a profiler tool
     */ previewIsNotAvailable: 'Preview is not available',
    /**
     *@description A context menu item in the Heap Profiler Panel of a profiler tool
     */ revealInSummaryView: 'Reveal in Summary view',
    /**
     *@description Text for the summary view
     */ summary: 'Summary',
    /**
     *@description A context menu item in the Heap Profiler Panel of a profiler tool
     *@example {SomeClassConstructor} PH1
     *@example {12345} PH2
     */ revealObjectSWithIdSInSummary: 'Reveal object \'\'{PH1}\'\' with id @{PH2} in Summary view',
    /**
     *@description Text to store an HTML element or JavaScript variable or expression result as a global variable
     */ storeAsGlobalVariable: 'Store as global variable',
    /**
     *@description Text to ignore an object shown in the Retainers pane
     */ ignoreThisRetainer: 'Ignore this retainer',
    /**
     *@description Text to undo the "Ignore this retainer" action
     */ stopIgnoringThisRetainer: 'Stop ignoring this retainer',
    /**
     *@description Text indicating that a node has been ignored with the "Ignore this retainer" action
     */ ignored: 'ignored',
    /**
     *@description Text in Heap Snapshot Grid Nodes of a profiler tool that indicates an element contained in another
     * element.
     */ inElement: 'in',
    /**
     *@description A short summary of the text at https://developer.chrome.com/docs/devtools/memory-problems/heap-snapshots#compiled-code
     */ compiledCodeSummary: 'Internal data which V8 uses to run functions defined by JavaScript or WebAssembly.',
    /**
     *@description A short summary of the text at https://developer.chrome.com/docs/devtools/memory-problems/heap-snapshots#concatenated-string
     */ concatenatedStringSummary: 'A string which represents the contents of two other strings joined together.',
    /**
     *@description A short summary of the text at https://developer.chrome.com/docs/devtools/memory-problems/heap-snapshots#system-context
     */ contextSummary: 'An internal object containing variables from a JavaScript scope which may be needed by a function created within that scope.',
    /**
     *@description A short description of the data type internal type DescriptorArray, which is described more fully at https://v8.dev/blog/fast-properties
     */ descriptorArraySummary: 'A list of the property names used by a JavaScript Object.',
    /**
     *@description A short summary of the text at https://developer.chrome.com/docs/devtools/memory-problems/heap-snapshots#array
     */ internalArraySummary: 'An internal array-like data structure (not a JavaScript Array).',
    /**
     *@description A short summary of the text at https://developer.chrome.com/docs/devtools/memory-problems/heap-snapshots#internal-node
     */ internalNodeSummary: 'An object allocated by a component other than V8, such as C++ objects defined by Blink.',
    /**
     *@description A short description of the data type "system / Map" described at https://developer.chrome.com/docs/devtools/memory-problems/heap-snapshots#object-shape
     */ mapSummary: 'An internal object representing the shape of a JavaScript Object (not a JavaScript Map).',
    /**
     *@description A short summary of the "(object elements)[]" described at https://developer.chrome.com/docs/devtools/memory-problems/heap-snapshots#array
     */ objectElementsSummary: 'An internal object which stores the indexed properties in a JavaScript Object, such as the contents of an Array.',
    /**
     *@description A short summary of the "(object properties)[]" described at https://developer.chrome.com/docs/devtools/memory-problems/heap-snapshots#array
     */ objectPropertiesSummary: 'An internal object which stores the named properties in a JavaScript Object.',
    /**
     *@description A short summary of the text at https://developer.chrome.com/docs/devtools/memory-problems/heap-snapshots#sliced-string
     */ slicedStringSummary: 'A string which represents some of the characters from another string.'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/profiler/HeapSnapshotGridNodes.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
var HeapSnapshotGridNodeBase = /*#__PURE__*/ function(_DataGrid_DataGrid_DataGridNode) {
    "use strict";
    _inherits(HeapSnapshotGridNodeBase, _DataGrid_DataGrid_DataGridNode);
    var _super = _create_super(HeapSnapshotGridNodeBase);
    function HeapSnapshotGridNodeBase() {
        _class_call_check(this, HeapSnapshotGridNodeBase);
        return _super.apply(this, arguments);
    }
    return HeapSnapshotGridNodeBase;
}(_ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_6__.DataGrid.DataGridNode);
var HeapSnapshotGridNode = /*#__PURE__*/ function(_Common_ObjectWrapper_eventMixin) {
    "use strict";
    _inherits(HeapSnapshotGridNode, _Common_ObjectWrapper_eventMixin);
    var _super = _create_super(HeapSnapshotGridNode);
    function HeapSnapshotGridNode(tree, hasChildren) {
        _class_call_check(this, HeapSnapshotGridNode);
        var _this;
        _this = _super.call(this, null, hasChildren);
        _define_property(_assert_this_initialized(_this), "dataGridInternal", void 0);
        _define_property(_assert_this_initialized(_this), "instanceCount", void 0);
        _define_property(_assert_this_initialized(_this), "savedChildren", void 0);
        _define_property(_assert_this_initialized(_this), "retrievedChildrenRanges", void 0);
        _define_property(_assert_this_initialized(_this), "providerObject", void 0);
        _define_property(_assert_this_initialized(_this), "reachableFromWindow", void 0);
        _define_property(_assert_this_initialized(_this), "populated", void 0);
        _this.dataGridInternal = tree;
        _this.instanceCount = 0;
        _this.savedChildren = new Map();
        /**
         * List of position ranges for all visible nodes: [startPos1, endPos1),...,[startPosN, endPosN)
         * Position is an item position in the provider.
         */ _this.retrievedChildrenRanges = [];
        _this.providerObject = null;
        _this.reachableFromWindow = false;
        return _this;
    }
    _create_class(HeapSnapshotGridNode, [
        {
            key: "name",
            get: function get() {
                return undefined;
            }
        },
        {
            key: "heapSnapshotDataGrid",
            value: function heapSnapshotDataGrid() {
                return this.dataGridInternal;
            }
        },
        {
            key: "createProvider",
            value: function createProvider() {
                throw new Error('Not implemented.');
            }
        },
        {
            key: "comparator",
            value: function comparator() {
                throw new Error('Not implemented.');
            }
        },
        {
            key: "getHash",
            value: function getHash() {
                throw new Error('Not implemented.');
            }
        },
        {
            key: "createChildNode",
            value: function createChildNode(_item) {
                throw new Error('Not implemented.');
            }
        },
        {
            key: "retainersDataSource",
            value: function retainersDataSource() {
                return null;
            }
        },
        {
            key: "provider",
            value: function provider() {
                if (!this.providerObject) {
                    this.providerObject = this.createProvider();
                }
                return this.providerObject;
            }
        },
        {
            key: "createCell",
            value: function createCell(columnId) {
                return _get(_get_prototype_of(HeapSnapshotGridNode.prototype), "createCell", this).call(this, columnId);
            }
        },
        {
            key: "collapse",
            value: function collapse() {
                _get(_get_prototype_of(HeapSnapshotGridNode.prototype), "collapse", this).call(this);
                this.dataGridInternal.updateVisibleNodes(true);
            }
        },
        {
            key: "expand",
            value: function expand() {
                _get(_get_prototype_of(HeapSnapshotGridNode.prototype), "expand", this).call(this);
                this.dataGridInternal.updateVisibleNodes(true);
            }
        },
        {
            key: "dispose",
            value: function dispose() {
                if (this.providerObject) {
                    this.providerObject.dispose();
                }
                for(var node = this.children[0]; node; node = node.traverseNextNode(true, this, true)){
                    node.dispose();
                }
            }
        },
        {
            key: "queryObjectContent",
            value: function queryObjectContent(_heapProfilerModel, _objectGroupName) {
                throw new Error('Not implemented.');
            }
        },
        {
            key: "tryQueryObjectContent",
            value: function tryQueryObjectContent(_heapProfilerModel, _objectGroupName) {
                throw new Error('Not implemented.');
            }
        },
        {
            key: "populateContextMenu",
            value: function populateContextMenu(_contextMenu, _dataDisplayDelegate, _heapProfilerModel) {}
        },
        {
            key: "toPercentString",
            value: function toPercentString(num) {
                return num.toFixed(0) + '\xa0%'; // \xa0 is a non-breaking space.
            }
        },
        {
            key: "toUIDistance",
            value: function toUIDistance(distance) {
                var baseSystemDistance = _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_4__.HeapSnapshotModel.baseSystemDistance;
                return distance >= 0 && distance < baseSystemDistance ? distance.toString() : '\u2212';
            }
        },
        {
            key: "allChildren",
            value: function allChildren() {
                return this.dataGridInternal.allChildren(this);
            }
        },
        {
            key: "removeChildByIndex",
            value: function removeChildByIndex(index) {
                this.dataGridInternal.removeChildByIndex(this, index);
            }
        },
        {
            key: "childForPosition",
            value: function childForPosition(nodePosition) {
                var indexOfFirstChildInRange = 0;
                for(var i = 0; i < this.retrievedChildrenRanges.length; i++){
                    var range = this.retrievedChildrenRanges[i];
                    if (range.from <= nodePosition && nodePosition < range.to) {
                        var childIndex = indexOfFirstChildInRange + nodePosition - range.from;
                        return this.allChildren()[childIndex];
                    }
                    indexOfFirstChildInRange += range.to - range.from + 1;
                }
                return null;
            }
        },
        {
            key: "createValueCell",
            value: function createValueCell(columnId) {
                var jslog = _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.tableCell('numeric-column').track({
                    click: true
                });
                var cell = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Fragment.html(_templateObject(), jslog);
                var dataGrid = this.dataGrid;
                if (dataGrid.snapshot && dataGrid.snapshot.totalSize !== 0) {
                    var div = document.createElement('div');
                    var valueSpan = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Fragment.html(_templateObject1(), this.data[columnId]);
                    div.appendChild(valueSpan);
                    var percentColumn = columnId + '-percent';
                    if (percentColumn in this.data) {
                        var percentSpan = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Fragment.html(_templateObject2(), this.data[percentColumn]);
                        div.appendChild(percentSpan);
                        div.classList.add('profile-multiple-values');
                        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.ARIAUtils.markAsHidden(valueSpan);
                        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.ARIAUtils.markAsHidden(percentSpan);
                        this.setCellAccessibleName(i18nString(UIStrings.genericStringsTwoPlaceholders, {
                            PH1: this.data[columnId],
                            PH2: this.data[percentColumn]
                        }), cell, columnId);
                    }
                    cell.appendChild(div);
                }
                return cell;
            }
        },
        {
            key: "populate",
            value: function populate() {
                var _this = this;
                if (this.populated) {
                    return;
                }
                this.populated = true;
                void this.provider().sortAndRewind(this.comparator()).then(function() {
                    return _this.populateChildren();
                });
            }
        },
        {
            key: "expandWithoutPopulate",
            value: function expandWithoutPopulate() {
                // Make sure default populate won't take action.
                this.populated = true;
                this.expand();
                return this.provider().sortAndRewind(this.comparator());
            }
        },
        {
            key: "childHashForEntity",
            value: function childHashForEntity(entity) {
                if ('edgeIndex' in entity) {
                    return entity.edgeIndex;
                }
                return entity.id;
            }
        },
        {
            key: "populateChildren",
            value: function populateChildren(fromPosition, toPosition) {
                var _this = this;
                return new Promise(function(resolve) {
                    var serializeNextChunk = function serializeNextChunk(toPosition) {
                        var _this = this;
                        if (firstNotSerializedPosition >= toPosition) {
                            return;
                        }
                        var end = Math.min(firstNotSerializedPosition + this.dataGridInternal.defaultPopulateCount(), toPosition);
                        void this.provider().serializeItemsRange(firstNotSerializedPosition, end).then(function(itemsRange) {
                            return childrenRetrieved.call(_this, itemsRange, toPosition);
                        });
                        firstNotSerializedPosition = end;
                    };
                    var insertRetrievedChild = function insertRetrievedChild(item, insertionIndex) {
                        if (this.savedChildren) {
                            var hash = this.childHashForEntity(item);
                            var child = this.savedChildren.get(hash);
                            if (child) {
                                this.dataGridInternal.insertChild(this, child, insertionIndex);
                                return;
                            }
                        }
                        this.dataGridInternal.insertChild(this, this.createChildNode(item), insertionIndex);
                    };
                    var insertShowMoreButton = function insertShowMoreButton(from, to, insertionIndex) {
                        var button = new _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_6__.ShowMoreDataGridNode.ShowMoreDataGridNode(this.populateChildren.bind(this), from, to, this.dataGridInternal.defaultPopulateCount());
                        this.dataGridInternal.insertChild(this, button, insertionIndex);
                    };
                    var childrenRetrieved = function childrenRetrieved(itemsRange, toPosition) {
                        var itemIndex = 0;
                        var itemPosition = itemsRange.startPosition;
                        var items = itemsRange.items;
                        var insertionIndex = 0;
                        if (!this.retrievedChildrenRanges.length) {
                            if (itemsRange.startPosition > 0) {
                                this.retrievedChildrenRanges.push({
                                    from: 0,
                                    to: 0
                                });
                                insertShowMoreButton.call(this, 0, itemsRange.startPosition, insertionIndex++);
                            }
                            this.retrievedChildrenRanges.push({
                                from: itemsRange.startPosition,
                                to: itemsRange.endPosition
                            });
                            for(var i = 0, l = items.length; i < l; ++i){
                                insertRetrievedChild.call(this, items[i], insertionIndex++);
                            }
                            if (itemsRange.endPosition < itemsRange.totalLength) {
                                insertShowMoreButton.call(this, itemsRange.endPosition, itemsRange.totalLength, insertionIndex++);
                            }
                        } else {
                            var rangeIndex = 0;
                            var found = false;
                            var range = {
                                from: 0,
                                to: 0
                            };
                            while(rangeIndex < this.retrievedChildrenRanges.length){
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
                                var button = this.allChildren()[insertionIndex - 1];
                                button.setEndPosition(itemsRange.startPosition);
                                insertShowMoreButton.call(this, itemsRange.startPosition, found ? range.from : itemsRange.totalLength, insertionIndex);
                                range = {
                                    from: itemsRange.startPosition,
                                    to: itemsRange.startPosition
                                };
                                if (!found) {
                                    rangeIndex = this.retrievedChildrenRanges.length;
                                }
                                this.retrievedChildrenRanges.splice(rangeIndex, 0, range);
                            } else {
                                insertionIndex += itemPosition - range.from;
                            }
                            // At this point insertionIndex is always an index before button or between nodes.
                            // Also it is always true here that range.from <= itemPosition <= range.to
                            // Stretch the range right bound to include all new items.
                            while(range.to < itemsRange.endPosition){
                                // Skip already added nodes.
                                var skipCount = range.to - itemPosition;
                                insertionIndex += skipCount;
                                itemIndex += skipCount;
                                itemPosition = range.to;
                                // We're at the position before button: ...<?node>x<button>
                                var nextRange = this.retrievedChildrenRanges[rangeIndex + 1];
                                var newEndOfRange = nextRange ? nextRange.from : itemsRange.totalLength;
                                if (newEndOfRange > itemsRange.endPosition) {
                                    newEndOfRange = itemsRange.endPosition;
                                }
                                while(itemPosition < newEndOfRange){
                                    insertRetrievedChild.call(this, items[itemIndex++], insertionIndex++);
                                    ++itemPosition;
                                }
                                // Merge with the next range.
                                if (nextRange && newEndOfRange === nextRange.from) {
                                    range.to = nextRange.to;
                                    // Remove "show next" button if there is one.
                                    this.removeChildByIndex(insertionIndex);
                                    this.retrievedChildrenRanges.splice(rangeIndex + 1, 1);
                                } else {
                                    range.to = newEndOfRange;
                                    // Remove or update next button.
                                    if (newEndOfRange === itemsRange.totalLength) {
                                        this.removeChildByIndex(insertionIndex);
                                    } else {
                                        this.allChildren()[insertionIndex].setStartPosition(itemsRange.endPosition);
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
                    };
                    fromPosition = fromPosition || 0;
                    toPosition = toPosition || fromPosition + _this.dataGridInternal.defaultPopulateCount();
                    var firstNotSerializedPosition = fromPosition;
                    serializeNextChunk.call(_this, toPosition);
                });
            }
        },
        {
            key: "saveChildren",
            value: function saveChildren() {
                this.savedChildren.clear();
                var children = this.allChildren();
                for(var i = 0, l = children.length; i < l; ++i){
                    var child = children[i];
                    if (!child.expanded) {
                        continue;
                    }
                    this.savedChildren.set(child.getHash(), child);
                }
            }
        },
        {
            key: "sort",
            value: function sort() {
                var _this = this;
                return _async_to_generator(function() {
                    var instanceCount, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, child;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this.dataGridInternal.recursiveSortingEnter();
                                return [
                                    4,
                                    _this.provider().sortAndRewind(_this.comparator())
                                ];
                            case 1:
                                _state.sent();
                                _this.saveChildren();
                                _this.dataGridInternal.removeAllChildren(_this);
                                _this.retrievedChildrenRanges = [];
                                instanceCount = _this.instanceCount;
                                _this.instanceCount = 0;
                                return [
                                    4,
                                    _this.populateChildren(0, instanceCount)
                                ];
                            case 2:
                                _state.sent();
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                try {
                                    for(_iterator = _this.allChildren()[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                        child = _step.value;
                                        if (child.expanded) {
                                            void child.sort();
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
                                _this.dataGridInternal.recursiveSortingLeave();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return HeapSnapshotGridNode;
}(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.eventMixin(HeapSnapshotGridNodeBase));
(function(HeapSnapshotGridNode) {
    var Events;
    (function(Events) {
        Events["PopulateComplete"] = "PopulateComplete";
    })(Events = HeapSnapshotGridNode.Events || (HeapSnapshotGridNode.Events = {}));
})(HeapSnapshotGridNode || (HeapSnapshotGridNode = {}));
var HeapSnapshotGenericObjectNode = /*#__PURE__*/ function(HeapSnapshotGridNode) {
    "use strict";
    _inherits(HeapSnapshotGenericObjectNode, HeapSnapshotGridNode);
    var _super = _create_super(HeapSnapshotGenericObjectNode);
    function HeapSnapshotGenericObjectNode(dataGrid, node) {
        _class_call_check(this, HeapSnapshotGenericObjectNode);
        var _this;
        _this = _super.call(this, dataGrid, false);
        _define_property(_assert_this_initialized(_this), "referenceName", void 0);
        _define_property(_assert_this_initialized(_this), "nameInternal", void 0);
        _define_property(_assert_this_initialized(_this), "type", void 0);
        _define_property(_assert_this_initialized(_this), "distance", void 0);
        _define_property(_assert_this_initialized(_this), "shallowSize", void 0);
        _define_property(_assert_this_initialized(_this), "retainedSize", void 0);
        _define_property(_assert_this_initialized(_this), "snapshotNodeId", void 0);
        _define_property(_assert_this_initialized(_this), "snapshotNodeIndex", void 0);
        _define_property(_assert_this_initialized(_this), "detachedDOMTreeNode", void 0);
        _define_property(_assert_this_initialized(_this), "linkElement", void 0);
        // node is null for DataGrid root nodes.
        if (!node) {
            return _possible_constructor_return(_this);
        }
        _this.referenceName = null;
        _this.nameInternal = node.name;
        _this.type = node.type;
        _this.distance = node.distance;
        _this.shallowSize = node.selfSize;
        _this.retainedSize = node.retainedSize;
        _this.snapshotNodeId = node.id;
        _this.snapshotNodeIndex = node.nodeIndex;
        if (_this.type === 'string') {
            _this.reachableFromWindow = true;
        } else if (_this.type === 'object' && _this.nameInternal.startsWith('Window')) {
            _this.nameInternal = _this.shortenWindowURL(_this.nameInternal, false);
            _this.reachableFromWindow = true;
        } else if (node.canBeQueried) {
            _this.reachableFromWindow = true;
        }
        if (node.detachedDOMTreeNode) {
            _this.detachedDOMTreeNode = true;
        }
        var snapshot = dataGrid.snapshot;
        var shallowSizePercent = _this.shallowSize / snapshot.totalSize * 100.0;
        var retainedSizePercent = _this.retainedSize / snapshot.totalSize * 100.0;
        _this.data = {
            'distance': _this.toUIDistance(_this.distance),
            'shallowSize': _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.NumberUtilities.withThousandsSeparator(_this.shallowSize),
            'retainedSize': _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.NumberUtilities.withThousandsSeparator(_this.retainedSize),
            'shallowSize-percent': _this.toPercentString(shallowSizePercent),
            'retainedSize-percent': _this.toPercentString(retainedSizePercent)
        };
        return _this;
    }
    _create_class(HeapSnapshotGenericObjectNode, [
        {
            key: "name",
            get: function get() {
                return this.nameInternal;
            }
        },
        {
            key: "retainersDataSource",
            value: function retainersDataSource() {
                return this.snapshotNodeIndex === undefined ? null : {
                    snapshot: this.dataGridInternal.snapshot,
                    snapshotNodeIndex: this.snapshotNodeIndex,
                    snapshotNodeId: this.snapshotNodeId
                };
            }
        },
        {
            key: "createCell",
            value: function createCell(columnId) {
                var cell = columnId !== 'object' ? this.createValueCell(columnId) : this.createObjectCell();
                return cell;
            }
        },
        {
            key: "createObjectCell",
            value: function createObjectCell() {
                var value = this.nameInternal;
                var valueStyle = 'object';
                switch(this.type){
                    case 'concatenated string':
                    case 'string':
                        value = '"'.concat(value, '"');
                        valueStyle = 'string';
                        break;
                    case 'regexp':
                        value = "/".concat(value, "/");
                        valueStyle = 'string';
                        break;
                    case 'closure':
                        value = "".concat(value, "()");
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
                        value = value ? "".concat(value, "[]") : i18nString(UIStrings.internalArray);
                        break;
                }
                return this.createObjectCellWithValue(valueStyle, value || '');
            }
        },
        {
            key: "createObjectCellWithValue",
            value: function createObjectCellWithValue(valueStyle, value) {
                var jslog = _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.tableCell('object-column').track({
                    click: true
                });
                var fragment = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Fragment.Fragment.build(_templateObject3(), jslog, valueStyle, value, this.snapshotNodeId);
                var div = fragment.$('container');
                this.prefixObjectCell(div);
                if (this.reachableFromWindow) {
                    var frameIcon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.create('frame', 'heap-object-tag');
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Tooltip.Tooltip.install(frameIcon, i18nString(UIStrings.userObjectReachableFromWindow));
                    div.appendChild(frameIcon);
                }
                if (this.detachedDOMTreeNode) {
                    var frameIcon1 = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.create('scissors', 'heap-object-tag');
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Tooltip.Tooltip.install(frameIcon1, i18nString(UIStrings.detachedFromDomTree));
                    div.appendChild(frameIcon1);
                }
                void this.appendSourceLocation(div);
                var cell = fragment.element();
                if (this.depth) {
                    cell.style.setProperty('padding-left', this.depth * this.dataGrid.indentWidth + 'px');
                }
                return cell;
            }
        },
        {
            key: "prefixObjectCell",
            value: function prefixObjectCell(_div) {}
        },
        {
            key: "appendSourceLocation",
            value: function appendSourceLocation(div) {
                var _this = this;
                return _async_to_generator(function() {
                    var linkContainer, link;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                linkContainer = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Fragment.html(_templateObject4());
                                div.appendChild(linkContainer);
                                return [
                                    4,
                                    _this.dataGridInternal.dataDisplayDelegate().linkifyObject(_this.snapshotNodeIndex)
                                ];
                            case 1:
                                link = _state.sent();
                                if (link) {
                                    link.setAttribute('tabindex', '0');
                                    linkContainer.appendChild(link);
                                    _this.linkElement = link;
                                } else {
                                    linkContainer.remove();
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
            key: "queryObjectContent",
            value: function queryObjectContent(heapProfilerModel, objectGroupName) {
                var _this = this;
                return _async_to_generator(function() {
                    var remoteObject;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this.tryQueryObjectContent(heapProfilerModel, objectGroupName)
                                ];
                            case 1:
                                remoteObject = _state.sent();
                                return [
                                    2,
                                    remoteObject || _this.tryGetTooltipDescription() || heapProfilerModel.runtimeModel().createRemoteObjectFromPrimitiveValue(i18nString(UIStrings.previewIsNotAvailable))
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "tryQueryObjectContent",
            value: function tryQueryObjectContent(heapProfilerModel, objectGroupName) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (_this.type === 'string') {
                                    return [
                                        2,
                                        heapProfilerModel.runtimeModel().createRemoteObjectFromPrimitiveValue(_this.nameInternal)
                                    ];
                                }
                                return [
                                    4,
                                    heapProfilerModel.objectForSnapshotObjectId(String(_this.snapshotNodeId), objectGroupName)
                                ];
                            case 1:
                                return [
                                    2,
                                    _state.sent()
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "tryGetTooltipDescription",
            value: function tryGetTooltipDescription() {
                var baseLink = 'https://developer.chrome.com/docs/devtools/memory-problems/heap-snapshots#';
                switch(this.type){
                    case 'code':
                        return {
                            description: i18nString(UIStrings.compiledCodeSummary),
                            link: baseLink + 'compiled-code'
                        };
                    case 'concatenated string':
                        return {
                            description: i18nString(UIStrings.concatenatedStringSummary),
                            link: baseLink + 'concatenated-string'
                        };
                    case 'sliced string':
                        return {
                            description: i18nString(UIStrings.slicedStringSummary),
                            link: baseLink + 'sliced-string'
                        };
                }
                switch(this.type + ':' + this.nameInternal){
                    case 'array:':
                        return {
                            description: i18nString(UIStrings.internalArraySummary),
                            link: baseLink + 'array'
                        };
                    case 'array:(object elements)':
                        return {
                            description: i18nString(UIStrings.objectElementsSummary),
                            link: baseLink + 'array'
                        };
                    case 'array:(object properties)':
                    case 'hidden:system / PropertyArray':
                        return {
                            description: i18nString(UIStrings.objectPropertiesSummary),
                            link: baseLink + 'array'
                        };
                    case 'object:system / Context':
                        return {
                            description: i18nString(UIStrings.contextSummary),
                            link: baseLink + 'system-context'
                        };
                    case 'object shape:system / DescriptorArray':
                        return {
                            description: i18nString(UIStrings.descriptorArraySummary),
                            link: baseLink + 'object-shape'
                        };
                    case 'object shape:system / Map':
                        return {
                            description: i18nString(UIStrings.mapSummary),
                            link: baseLink + 'object-shape'
                        };
                    case 'native:InternalNode':
                        return {
                            description: i18nString(UIStrings.internalNodeSummary),
                            link: baseLink + 'internal-node'
                        };
                }
                return undefined;
            }
        },
        {
            key: "updateHasChildren",
            value: function updateHasChildren() {
                var _this = this;
                return _async_to_generator(function() {
                    var isEmpty;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this.provider().isEmpty()
                                ];
                            case 1:
                                isEmpty = _state.sent();
                                _this.setHasChildren(!isEmpty);
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "shortenWindowURL",
            value: function shortenWindowURL(fullName, hasObjectId) {
                var startPos = fullName.indexOf('/');
                var endPos = hasObjectId ? fullName.indexOf('@') : fullName.length;
                if (startPos === -1 || endPos === -1) {
                    return fullName;
                }
                var fullURL = fullName.substring(startPos + 1, endPos).trimLeft();
                var url = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.StringUtilities.trimURL(fullURL);
                if (url.length > 40) {
                    url = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.StringUtilities.trimMiddle(url, 40);
                }
                return fullName.substr(0, startPos + 2) + url + fullName.substr(endPos);
            }
        },
        {
            key: "populateContextMenu",
            value: function populateContextMenu(contextMenu, dataDisplayDelegate, heapProfilerModel) {
                var _this = this;
                if (this.shallowSize !== 0) {
                    contextMenu.revealSection().appendItem(i18nString(UIStrings.revealInSummaryView), function() {
                        dataDisplayDelegate.showObject(String(_this.snapshotNodeId), i18nString(UIStrings.summary));
                    }, {
                        jslogContext: 'reveal-in-summary'
                    });
                }
                if (this.referenceName) {
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        var _loop = function() {
                            var match = _step.value;
                            var _match_groups = match.groups, objectName = _match_groups.objectName, snapshotNodeId = _match_groups.snapshotNodeId;
                            contextMenu.revealSection().appendItem(i18nString(UIStrings.revealObjectSWithIdSInSummary, {
                                PH1: objectName,
                                PH2: snapshotNodeId
                            }), function() {
                                dataDisplayDelegate.showObject(snapshotNodeId, i18nString(UIStrings.summary));
                            }, {
                                jslogContext: 'reveal-in-summary'
                            });
                        };
                        for(var _iterator = this.referenceName.matchAll(RegExp("\\((?<objectName>[^@)]*) @(?<snapshotNodeId>\\d+)\\)", "g"))[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
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
                if (heapProfilerModel) {
                    var _this1 = this;
                    contextMenu.revealSection().appendItem(i18nString(UIStrings.storeAsGlobalVariable), /*#__PURE__*/ _async_to_generator(function() {
                        var remoteObject, consoleModel;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _this1.tryQueryObjectContent(heapProfilerModel, '')
                                    ];
                                case 1:
                                    remoteObject = _state.sent();
                                    if (!!remoteObject) return [
                                        3,
                                        2
                                    ];
                                    _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Console.Console.instance().error(i18nString(UIStrings.previewIsNotAvailable));
                                    return [
                                        3,
                                        4
                                    ];
                                case 2:
                                    consoleModel = heapProfilerModel.target().model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ConsoleModel.ConsoleModel);
                                    return [
                                        4,
                                        consoleModel === null || consoleModel === void 0 ? void 0 : consoleModel.saveToTempVariable(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.RuntimeModel.ExecutionContext), remoteObject)
                                    ];
                                case 3:
                                    _state.sent();
                                    _state.label = 4;
                                case 4:
                                    return [
                                        2
                                    ];
                            }
                        });
                    }), {
                        jslogContext: 'store-as-global-variable'
                    });
                }
            }
        }
    ]);
    return HeapSnapshotGenericObjectNode;
}(HeapSnapshotGridNode);
var HeapSnapshotObjectNode = /*#__PURE__*/ function(HeapSnapshotGenericObjectNode) {
    "use strict";
    _inherits(HeapSnapshotObjectNode, HeapSnapshotGenericObjectNode);
    var _super = _create_super(HeapSnapshotObjectNode);
    function HeapSnapshotObjectNode(dataGrid, snapshot, edge, parentObjectNode) {
        _class_call_check(this, HeapSnapshotObjectNode);
        var _this;
        _this = _super.call(this, dataGrid, edge.node);
        _define_property(_assert_this_initialized(_this), "referenceName", void 0);
        _define_property(_assert_this_initialized(_this), "referenceType", void 0);
        _define_property(_assert_this_initialized(_this), "edgeIndex", void 0);
        _define_property(_assert_this_initialized(_this), "snapshot", void 0);
        _define_property(_assert_this_initialized(_this), "parentObjectNode", void 0);
        _define_property(_assert_this_initialized(_this), "cycledWithAncestorGridNode", void 0);
        _this.referenceName = edge.name;
        _this.referenceType = edge.type;
        _this.edgeIndex = edge.edgeIndex;
        _this.snapshot = snapshot;
        _this.parentObjectNode = parentObjectNode;
        _this.cycledWithAncestorGridNode = _this.findAncestorWithSameSnapshotNodeId();
        if (!_this.cycledWithAncestorGridNode) {
            void _this.updateHasChildren();
        }
        var data = _this.data;
        data['count'] = '';
        data['addedCount'] = '';
        data['removedCount'] = '';
        data['countDelta'] = '';
        data['addedSize'] = '';
        data['removedSize'] = '';
        data['sizeDelta'] = '';
        return _this;
    }
    _create_class(HeapSnapshotObjectNode, [
        {
            key: "retainersDataSource",
            value: function retainersDataSource() {
                return this.snapshotNodeIndex === undefined ? null : {
                    snapshot: this.snapshot,
                    snapshotNodeIndex: this.snapshotNodeIndex,
                    snapshotNodeId: this.snapshotNodeId
                };
            }
        },
        {
            key: "createProvider",
            value: function createProvider() {
                if (this.snapshotNodeIndex === undefined) {
                    throw new Error('Cannot create a provider on a root node');
                }
                return this.snapshot.createEdgesProvider(this.snapshotNodeIndex);
            }
        },
        {
            key: "findAncestorWithSameSnapshotNodeId",
            value: function findAncestorWithSameSnapshotNodeId() {
                var ancestor = this.parentObjectNode;
                while(ancestor){
                    if (ancestor.snapshotNodeId === this.snapshotNodeId) {
                        return ancestor;
                    }
                    ancestor = ancestor.parentObjectNode;
                }
                return null;
            }
        },
        {
            key: "createChildNode",
            value: function createChildNode(item) {
                return new HeapSnapshotObjectNode(this.dataGridInternal, this.snapshot, item, this);
            }
        },
        {
            key: "getHash",
            value: function getHash() {
                return this.edgeIndex;
            }
        },
        {
            key: "comparator",
            value: function comparator() {
                var sortAscending = this.dataGridInternal.isSortOrderAscending();
                var sortColumnId = this.dataGridInternal.sortColumnId();
                switch(sortColumnId){
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
        },
        {
            key: "prefixObjectCell",
            value: function prefixObjectCell(div) {
                var name = this.referenceName || '(empty)';
                var nameClass = 'name';
                switch(this.referenceType){
                    case 'context':
                        nameClass = 'object-value-number';
                        break;
                    case 'internal':
                    case 'hidden':
                    case 'weak':
                        nameClass = 'object-value-null';
                        break;
                    case 'element':
                        name = "[".concat(name, "]");
                        break;
                }
                if (this.cycledWithAncestorGridNode) {
                    div.classList.add('cycled-ancestor-node');
                }
                div.prepend(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Fragment.html(_templateObject5(), nameClass, name, this.edgeNodeSeparator()));
            }
        },
        {
            key: "edgeNodeSeparator",
            value: function edgeNodeSeparator() {
                return '::';
            }
        }
    ]);
    return HeapSnapshotObjectNode;
}(HeapSnapshotGenericObjectNode);
var _ignored = /*#__PURE__*/ new WeakMap();
var HeapSnapshotRetainingObjectNode = /*#__PURE__*/ function(HeapSnapshotObjectNode) {
    "use strict";
    _inherits(HeapSnapshotRetainingObjectNode, HeapSnapshotObjectNode);
    var _super = _create_super(HeapSnapshotRetainingObjectNode);
    function HeapSnapshotRetainingObjectNode(dataGrid, snapshot, edge, parentRetainingObjectNode) {
        _class_call_check(this, HeapSnapshotRetainingObjectNode);
        var _this;
        _this = _super.call(this, dataGrid, snapshot, edge, parentRetainingObjectNode);
        _class_private_field_init(_assert_this_initialized(_this), _ignored, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(_assert_this_initialized(_this), _ignored, edge.node.ignored);
        if (_class_private_field_get(_assert_this_initialized(_this), _ignored)) {
            _this.data['distance'] = i18nString(UIStrings.ignored);
        }
        return _this;
    }
    _create_class(HeapSnapshotRetainingObjectNode, [
        {
            key: "createProvider",
            value: function createProvider() {
                if (this.snapshotNodeIndex === undefined) {
                    throw new Error('Cannot create providers on root nodes');
                }
                return this.snapshot.createRetainingEdgesProvider(this.snapshotNodeIndex);
            }
        },
        {
            key: "createChildNode",
            value: function createChildNode(item) {
                return new HeapSnapshotRetainingObjectNode(this.dataGridInternal, this.snapshot, item, this);
            }
        },
        {
            key: "edgeNodeSeparator",
            value: function edgeNodeSeparator() {
                // TODO(l10n): improve description or clarify intention.
                return i18nString(UIStrings.inElement);
            }
        },
        {
            key: "expand",
            value: function expand() {
                this.expandRetainersChain(20);
            }
        },
        {
            key: "populateContextMenu",
            value: function populateContextMenu(contextMenu, dataDisplayDelegate, heapProfilerModel) {
                _get(_get_prototype_of(HeapSnapshotRetainingObjectNode.prototype), "populateContextMenu", this).call(this, contextMenu, dataDisplayDelegate, heapProfilerModel);
                var snapshotNodeIndex = this.snapshotNodeIndex;
                if (snapshotNodeIndex === undefined) {
                    return;
                }
                if (_class_private_field_get(this, _ignored)) {
                    var _this = this;
                    contextMenu.revealSection().appendItem(i18nString(UIStrings.stopIgnoringThisRetainer), /*#__PURE__*/ _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _this.snapshot.unignoreNodeInRetainersView(snapshotNodeIndex)
                                    ];
                                case 1:
                                    _state.sent();
                                    return [
                                        4,
                                        _this.dataGridInternal.dataSourceChanged()
                                    ];
                                case 2:
                                    _state.sent();
                                    return [
                                        2
                                    ];
                            }
                        });
                    }), {
                        jslogContext: 'stop-ignoring-this-retainer'
                    });
                } else {
                    var _this1 = this;
                    contextMenu.revealSection().appendItem(i18nString(UIStrings.ignoreThisRetainer), /*#__PURE__*/ _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _this1.snapshot.ignoreNodeInRetainersView(snapshotNodeIndex)
                                    ];
                                case 1:
                                    _state.sent();
                                    return [
                                        4,
                                        _this1.dataGridInternal.dataSourceChanged()
                                    ];
                                case 2:
                                    _state.sent();
                                    return [
                                        2
                                    ];
                            }
                        });
                    }), {
                        jslogContext: 'ignore-this-retainer'
                    });
                }
            }
        },
        {
            key: "isReachable",
            value: function isReachable() {
                var _this_distance;
                return ((_this_distance = this.distance) !== null && _this_distance !== void 0 ? _this_distance : 0) < _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_4__.HeapSnapshotModel.baseUnreachableDistance;
            }
        },
        {
            key: "prefixObjectCell",
            value: function prefixObjectCell(div) {
                _get(_get_prototype_of(HeapSnapshotRetainingObjectNode.prototype), "prefixObjectCell", this).call(this, div);
                if (!this.isReachable()) {
                    div.classList.add('unreachable-ancestor-node');
                }
            }
        },
        {
            key: "expandRetainersChain",
            value: function expandRetainersChain(maxExpandLevels) {
                var _this = this;
                if (!this.populated) {
                    void this.once(HeapSnapshotGridNode.Events.PopulateComplete).then(function() {
                        return _this.expandRetainersChain(maxExpandLevels);
                    });
                    this.populate();
                    return;
                }
                _get(_get_prototype_of(HeapSnapshotRetainingObjectNode.prototype), "expand", this).call(this);
                if (--maxExpandLevels > 0 && this.children.length > 0) {
                    var retainer = this.children[0];
                    if ((retainer.distance || 0) > 1 && retainer.isReachable()) {
                        retainer.expandRetainersChain(maxExpandLevels);
                        return;
                    }
                }
                this.dataGridInternal.dispatchEventToListeners(_HeapSnapshotDataGrids_js__WEBPACK_IMPORTED_MODULE_9__.HeapSnapshotSortableDataGridEvents.ExpandRetainersComplete);
            }
        },
        {
            key: "comparator",
            value: function comparator() {
                var result = _get(_get_prototype_of(HeapSnapshotRetainingObjectNode.prototype), "comparator", this).call(this);
                if (result.fieldName1 === 'distance') {
                    result.fieldName1 = '!edgeDistance';
                }
                if (result.fieldName2 === 'distance') {
                    result.fieldName2 = '!edgeDistance';
                }
                return result;
            }
        }
    ]);
    return HeapSnapshotRetainingObjectNode;
}(HeapSnapshotObjectNode);
var HeapSnapshotInstanceNode = /*#__PURE__*/ function(HeapSnapshotGenericObjectNode) {
    "use strict";
    _inherits(HeapSnapshotInstanceNode, HeapSnapshotGenericObjectNode);
    var _super = _create_super(HeapSnapshotInstanceNode);
    function HeapSnapshotInstanceNode(dataGrid, snapshot, node, isDeletedNode) {
        _class_call_check(this, HeapSnapshotInstanceNode);
        var _this;
        _this = _super.call(this, dataGrid, node);
        _define_property(_assert_this_initialized(_this), "baseSnapshotOrSnapshot", void 0);
        _define_property(_assert_this_initialized(_this), "isDeletedNode", void 0);
        _this.baseSnapshotOrSnapshot = snapshot;
        _this.isDeletedNode = isDeletedNode;
        void _this.updateHasChildren();
        var data = _this.data;
        data['count'] = '';
        data['countDelta'] = '';
        data['sizeDelta'] = '';
        if (_this.isDeletedNode) {
            data['addedCount'] = '';
            data['addedSize'] = '';
            data['removedCount'] = '\u2022';
            data['removedSize'] = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.NumberUtilities.withThousandsSeparator(_this.shallowSize || 0);
        } else {
            data['addedCount'] = '\u2022';
            data['addedSize'] = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.NumberUtilities.withThousandsSeparator(_this.shallowSize || 0);
            data['removedCount'] = '';
            data['removedSize'] = '';
        }
        return _this;
    }
    _create_class(HeapSnapshotInstanceNode, [
        {
            key: "retainersDataSource",
            value: function retainersDataSource() {
                return this.snapshotNodeIndex === undefined ? null : {
                    snapshot: this.baseSnapshotOrSnapshot,
                    snapshotNodeIndex: this.snapshotNodeIndex,
                    snapshotNodeId: this.snapshotNodeId
                };
            }
        },
        {
            key: "createProvider",
            value: function createProvider() {
                if (this.snapshotNodeIndex === undefined) {
                    throw new Error('Cannot create providers on root nodes');
                }
                return this.baseSnapshotOrSnapshot.createEdgesProvider(this.snapshotNodeIndex);
            }
        },
        {
            key: "createChildNode",
            value: function createChildNode(item) {
                return new HeapSnapshotObjectNode(this.dataGridInternal, this.baseSnapshotOrSnapshot, item, null);
            }
        },
        {
            key: "getHash",
            value: function getHash() {
                if (this.snapshotNodeId === undefined) {
                    throw new Error('Cannot hash root nodes');
                }
                return this.snapshotNodeId;
            }
        },
        {
            key: "comparator",
            value: function comparator() {
                var sortAscending = this.dataGridInternal.isSortOrderAscending();
                var sortColumnId = this.dataGridInternal.sortColumnId();
                switch(sortColumnId){
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
    ]);
    return HeapSnapshotInstanceNode;
}(HeapSnapshotGenericObjectNode);
var HeapSnapshotConstructorNode = /*#__PURE__*/ function(HeapSnapshotGridNode) {
    "use strict";
    _inherits(HeapSnapshotConstructorNode, HeapSnapshotGridNode);
    var _super = _create_super(HeapSnapshotConstructorNode);
    function HeapSnapshotConstructorNode(dataGrid, className, aggregate, nodeFilter) {
        _class_call_check(this, HeapSnapshotConstructorNode);
        var _this;
        _this = _super.call(this, dataGrid, aggregate.count > 0);
        _define_property(_assert_this_initialized(_this), "nameInternal", void 0);
        _define_property(_assert_this_initialized(_this), "nodeFilter", void 0);
        _define_property(_assert_this_initialized(_this), "distance", void 0);
        _define_property(_assert_this_initialized(_this), "count", void 0);
        _define_property(_assert_this_initialized(_this), "shallowSize", void 0);
        _define_property(_assert_this_initialized(_this), "retainedSize", void 0);
        _this.nameInternal = className;
        _this.nodeFilter = nodeFilter;
        _this.distance = aggregate.distance;
        _this.count = aggregate.count;
        _this.shallowSize = aggregate.self;
        _this.retainedSize = aggregate.maxRet;
        var snapshot = dataGrid.snapshot;
        var retainedSizePercent = _this.retainedSize / snapshot.totalSize * 100.0;
        var shallowSizePercent = _this.shallowSize / snapshot.totalSize * 100.0;
        _this.data = {
            'object': className,
            'count': _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.NumberUtilities.withThousandsSeparator(_this.count),
            'distance': _this.toUIDistance(_this.distance),
            'shallowSize': _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.NumberUtilities.withThousandsSeparator(_this.shallowSize),
            'retainedSize': _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.NumberUtilities.withThousandsSeparator(_this.retainedSize),
            'shallowSize-percent': _this.toPercentString(shallowSizePercent),
            'retainedSize-percent': _this.toPercentString(retainedSizePercent)
        };
        return _this;
    }
    _create_class(HeapSnapshotConstructorNode, [
        {
            key: "name",
            get: function get() {
                return this.nameInternal;
            }
        },
        {
            key: "createProvider",
            value: function createProvider() {
                return this.dataGridInternal.snapshot.createNodesProviderForClass(this.nameInternal, this.nodeFilter);
            }
        },
        {
            key: "populateNodeBySnapshotObjectId",
            value: function populateNodeBySnapshotObjectId(snapshotObjectId) {
                var _this = this;
                return _async_to_generator(function() {
                    var nodePosition, node;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this.dataGridInternal.resetNameFilter();
                                return [
                                    4,
                                    _this.expandWithoutPopulate()
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    4,
                                    _this.provider().nodePosition(snapshotObjectId)
                                ];
                            case 2:
                                nodePosition = _state.sent();
                                if (nodePosition === -1) {
                                    _this.collapse();
                                    return [
                                        2,
                                        []
                                    ];
                                }
                                return [
                                    4,
                                    _this.populateChildren(nodePosition, null)
                                ];
                            case 3:
                                _state.sent();
                                node = _this.childForPosition(nodePosition);
                                return [
                                    2,
                                    node ? [
                                        _this,
                                        node
                                    ] : []
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "filteredOut",
            value: function filteredOut(filterValue) {
                return this.nameInternal.toLowerCase().indexOf(filterValue) === -1;
            }
        },
        {
            key: "createCell",
            value: function createCell(columnId) {
                var cell = columnId === 'object' ? _get(_get_prototype_of(HeapSnapshotConstructorNode.prototype), "createCell", this).call(this, columnId) : this.createValueCell(columnId);
                if (columnId === 'object' && this.count > 1) {
                    cell.appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Fragment.html(_templateObject6(), this.count));
                }
                return cell;
            }
        },
        {
            key: "createChildNode",
            value: function createChildNode(item) {
                return new HeapSnapshotInstanceNode(this.dataGridInternal, this.dataGridInternal.snapshot, item, false);
            }
        },
        {
            key: "comparator",
            value: function comparator() {
                var sortAscending = this.dataGridInternal.isSortOrderAscending();
                var sortColumnId = this.dataGridInternal.sortColumnId();
                switch(sortColumnId){
                    case 'object':
                        return new _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_4__.HeapSnapshotModel.ComparatorConfig('name', sortAscending, 'id', true);
                    case 'distance':
                        return new _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_4__.HeapSnapshotModel.ComparatorConfig('distance', sortAscending, 'retainedSize', false);
                    case 'shallowSize':
                        return new _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_4__.HeapSnapshotModel.ComparatorConfig('selfSize', sortAscending, 'id', true);
                    case 'retainedSize':
                        return new _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_4__.HeapSnapshotModel.ComparatorConfig('retainedSize', sortAscending, 'id', true);
                    default:
                        throw new Error("Invalid sort column id ".concat(sortColumnId));
                }
            }
        }
    ]);
    return HeapSnapshotConstructorNode;
}(HeapSnapshotGridNode);
var HeapSnapshotDiffNodesProvider = /*#__PURE__*/ function() {
    "use strict";
    function HeapSnapshotDiffNodesProvider(addedNodesProvider, deletedNodesProvider, addedCount, removedCount) {
        _class_call_check(this, HeapSnapshotDiffNodesProvider);
        _define_property(this, "addedNodesProvider", void 0);
        _define_property(this, "deletedNodesProvider", void 0);
        _define_property(this, "addedCount", void 0);
        _define_property(this, "removedCount", void 0);
        this.addedNodesProvider = addedNodesProvider;
        this.deletedNodesProvider = deletedNodesProvider;
        this.addedCount = addedCount;
        this.removedCount = removedCount;
    }
    _create_class(HeapSnapshotDiffNodesProvider, [
        {
            key: "dispose",
            value: function dispose() {
                this.addedNodesProvider.dispose();
                this.deletedNodesProvider.dispose();
            }
        },
        {
            key: "nodePosition",
            value: function nodePosition(_snapshotObjectId) {
                throw new Error('Unreachable');
            }
        },
        {
            key: "isEmpty",
            value: function isEmpty() {
                return Promise.resolve(false);
            }
        },
        {
            key: "serializeItemsRange",
            value: function serializeItemsRange(beginPosition, endPosition) {
                var _this = this;
                return _async_to_generator(function() {
                    var _addedItems_items, itemsRange, addedItems, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item, _iteratorNormalCompletion1, _didIteratorError1, _iteratorError1, _iterator1, _step1, item1;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!(beginPosition < _this.addedCount)) return [
                                    3,
                                    3
                                ];
                                return [
                                    4,
                                    _this.addedNodesProvider.serializeItemsRange(beginPosition, endPosition)
                                ];
                            case 1:
                                itemsRange = _state.sent();
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                try {
                                    for(_iterator = itemsRange.items[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                        item = _step.value;
                                        item.isAddedNotRemoved = true;
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
                                if (itemsRange.endPosition >= endPosition) {
                                    itemsRange.totalLength = _this.addedCount + _this.removedCount;
                                    return [
                                        2,
                                        itemsRange
                                    ];
                                }
                                addedItems = itemsRange;
                                return [
                                    4,
                                    _this.deletedNodesProvider.serializeItemsRange(0, endPosition - itemsRange.endPosition)
                                ];
                            case 2:
                                itemsRange = _state.sent();
                                return [
                                    3,
                                    5
                                ];
                            case 3:
                                addedItems = new _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_4__.HeapSnapshotModel.ItemsRange(0, 0, 0, []);
                                return [
                                    4,
                                    _this.deletedNodesProvider.serializeItemsRange(beginPosition - _this.addedCount, endPosition - _this.addedCount)
                                ];
                            case 4:
                                itemsRange = _state.sent();
                                _state.label = 5;
                            case 5:
                                if (!addedItems.items.length) {
                                    addedItems.startPosition = _this.addedCount + itemsRange.startPosition;
                                }
                                _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                                try {
                                    for(_iterator1 = itemsRange.items[Symbol.iterator](); !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                                        item1 = _step1.value;
                                        item1.isAddedNotRemoved = false;
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
                                (_addedItems_items = addedItems.items).push.apply(_addedItems_items, _to_consumable_array(itemsRange.items));
                                addedItems.endPosition = _this.addedCount + itemsRange.endPosition;
                                addedItems.totalLength = _this.addedCount + _this.removedCount;
                                return [
                                    2,
                                    addedItems
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "sortAndRewind",
            value: function sortAndRewind(comparator) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this.addedNodesProvider.sortAndRewind(comparator)
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    4,
                                    _this.deletedNodesProvider.sortAndRewind(comparator)
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
        }
    ]);
    return HeapSnapshotDiffNodesProvider;
}();
var HeapSnapshotDiffNode = /*#__PURE__*/ function(HeapSnapshotGridNode) {
    "use strict";
    _inherits(HeapSnapshotDiffNode, HeapSnapshotGridNode);
    var _super = _create_super(HeapSnapshotDiffNode);
    function HeapSnapshotDiffNode(dataGrid, className, diffForClass) {
        _class_call_check(this, HeapSnapshotDiffNode);
        var _this;
        _this = _super.call(this, dataGrid, true);
        _define_property(_assert_this_initialized(_this), "nameInternal", void 0);
        _define_property(_assert_this_initialized(_this), "addedCount", void 0);
        _define_property(_assert_this_initialized(_this), "removedCount", void 0);
        _define_property(_assert_this_initialized(_this), "countDelta", void 0);
        _define_property(_assert_this_initialized(_this), "addedSize", void 0);
        _define_property(_assert_this_initialized(_this), "removedSize", void 0);
        _define_property(_assert_this_initialized(_this), "sizeDelta", void 0);
        _define_property(_assert_this_initialized(_this), "deletedIndexes", void 0);
        _this.nameInternal = className;
        _this.addedCount = diffForClass.addedCount;
        _this.removedCount = diffForClass.removedCount;
        _this.countDelta = diffForClass.countDelta;
        _this.addedSize = diffForClass.addedSize;
        _this.removedSize = diffForClass.removedSize;
        _this.sizeDelta = diffForClass.sizeDelta;
        _this.deletedIndexes = diffForClass.deletedIndexes;
        _this.data = {
            'object': className,
            'addedCount': _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.NumberUtilities.withThousandsSeparator(_this.addedCount),
            'removedCount': _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.NumberUtilities.withThousandsSeparator(_this.removedCount),
            'countDelta': _this.signForDelta(_this.countDelta) + _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.NumberUtilities.withThousandsSeparator(Math.abs(_this.countDelta)),
            'addedSize': _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.NumberUtilities.withThousandsSeparator(_this.addedSize),
            'removedSize': _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.NumberUtilities.withThousandsSeparator(_this.removedSize),
            'sizeDelta': _this.signForDelta(_this.sizeDelta) + _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.NumberUtilities.withThousandsSeparator(Math.abs(_this.sizeDelta))
        };
        return _this;
    }
    _create_class(HeapSnapshotDiffNode, [
        {
            key: "name",
            get: function get() {
                return this.nameInternal;
            }
        },
        {
            key: "createProvider",
            value: function createProvider() {
                var tree = this.dataGridInternal;
                if (tree.snapshot === null || tree.baseSnapshot === undefined || tree.baseSnapshot.uid === undefined) {
                    throw new Error('Data sources have not been set correctly');
                }
                var addedNodesProvider = tree.snapshot.createAddedNodesProvider(tree.baseSnapshot.uid, this.nameInternal);
                var deletedNodesProvider = tree.baseSnapshot.createDeletedNodesProvider(this.deletedIndexes);
                if (!addedNodesProvider || !deletedNodesProvider) {
                    throw new Error('Failed to create node providers');
                }
                return new HeapSnapshotDiffNodesProvider(addedNodesProvider, deletedNodesProvider, this.addedCount, this.removedCount);
            }
        },
        {
            key: "createCell",
            value: function createCell(columnId) {
                var cell = _get(_get_prototype_of(HeapSnapshotDiffNode.prototype), "createCell", this).call(this, columnId);
                if (columnId !== 'object') {
                    cell.classList.add('numeric-column');
                }
                return cell;
            }
        },
        {
            key: "createChildNode",
            value: function createChildNode(item) {
                var dataGrid = this.dataGridInternal;
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
        },
        {
            key: "comparator",
            value: function comparator() {
                var sortAscending = this.dataGridInternal.isSortOrderAscending();
                var sortColumnId = this.dataGridInternal.sortColumnId();
                switch(sortColumnId){
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
                        throw new Error("Invalid sort column ".concat(sortColumnId));
                }
            }
        },
        {
            key: "filteredOut",
            value: function filteredOut(filterValue) {
                return this.nameInternal.toLowerCase().indexOf(filterValue) === -1;
            }
        },
        {
            key: "signForDelta",
            value: function signForDelta(delta) {
                if (delta === 0) {
                    return '';
                }
                if (delta > 0) {
                    return '+';
                }
                return '\u2212'; // Math minus sign, same width as plus.
            }
        }
    ]);
    return HeapSnapshotDiffNode;
}(HeapSnapshotGridNode);
var AllocationGridNode = /*#__PURE__*/ function(HeapSnapshotGridNode) {
    "use strict";
    _inherits(AllocationGridNode, HeapSnapshotGridNode);
    var _super = _create_super(AllocationGridNode);
    function AllocationGridNode(dataGrid, data) {
        _class_call_check(this, AllocationGridNode);
        var _this;
        _this = _super.call(this, dataGrid, data.hasChildren);
        _define_property(_assert_this_initialized(_this), "populated", void 0);
        _define_property(_assert_this_initialized(_this), "allocationNode", void 0);
        _this.populated = false;
        _this.allocationNode = data;
        _this.data = {
            'liveCount': _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.NumberUtilities.withThousandsSeparator(data.liveCount),
            'count': _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.NumberUtilities.withThousandsSeparator(data.count),
            'liveSize': _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.NumberUtilities.withThousandsSeparator(data.liveSize),
            'size': _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.NumberUtilities.withThousandsSeparator(data.size),
            'name': data.name
        };
        return _this;
    }
    _create_class(AllocationGridNode, [
        {
            key: "populate",
            value: function populate() {
                if (this.populated) {
                    return;
                }
                void this.doPopulate();
            }
        },
        {
            key: "doPopulate",
            value: function doPopulate() {
                var _this = this;
                return _async_to_generator(function() {
                    var callers, callersChain, parentNode, dataGrid, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, caller, child, callersBranch, _iteratorNormalCompletion1, _didIteratorError1, _iteratorError1, _iterator1, _step1, caller1;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this.populated = true;
                                return [
                                    4,
                                    _this.dataGridInternal.snapshot.allocationNodeCallers(_this.allocationNode.id)
                                ];
                            case 1:
                                callers = _state.sent();
                                callersChain = callers.nodesWithSingleCaller;
                                parentNode = _this;
                                dataGrid = _this.dataGridInternal;
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                try {
                                    for(_iterator = callersChain[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                        caller = _step.value;
                                        child = new AllocationGridNode(dataGrid, caller);
                                        dataGrid.appendNode(parentNode, child);
                                        parentNode = child;
                                        parentNode.populated = true;
                                        if (_this.expanded) {
                                            parentNode.expand();
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
                                callersBranch = callers.branchingCallers;
                                callersBranch.sort(_this.dataGridInternal.createComparator());
                                _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                                try {
                                    for(_iterator1 = callersBranch[Symbol.iterator](); !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                                        caller1 = _step1.value;
                                        dataGrid.appendNode(parentNode, new AllocationGridNode(dataGrid, caller1));
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
                                dataGrid.updateVisibleNodes(true);
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "expand",
            value: function expand() {
                _get(_get_prototype_of(AllocationGridNode.prototype), "expand", this).call(this);
                if (this.children.length === 1) {
                    this.children[0].expand();
                }
            }
        },
        {
            key: "createCell",
            value: function createCell(columnId) {
                if (columnId !== 'name') {
                    return this.createValueCell(columnId);
                }
                var cell = _get(_get_prototype_of(AllocationGridNode.prototype), "createCell", this).call(this, columnId);
                var allocationNode = this.allocationNode;
                var heapProfilerModel = this.dataGridInternal.heapProfilerModel();
                if (allocationNode.scriptId) {
                    var linkifier = this.dataGridInternal.linkifier;
                    var urlElement = linkifier.linkifyScriptLocation(heapProfilerModel ? heapProfilerModel.target() : null, String(allocationNode.scriptId), allocationNode.scriptName, allocationNode.line - 1, {
                        columnNumber: allocationNode.column - 1,
                        inlineFrameIndex: 0,
                        className: 'profile-node-file'
                    });
                    urlElement.style.maxWidth = '75%';
                    cell.insertBefore(urlElement, cell.firstChild);
                }
                return cell;
            }
        },
        {
            key: "allocationNodeId",
            value: function allocationNodeId() {
                return this.allocationNode.id;
            }
        }
    ]);
    return AllocationGridNode;
} //# sourceMappingURL=HeapSnapshotGridNodes.js.map
(HeapSnapshotGridNode);


}),

}]);