"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_coverage_CoverageListView_js"], {
"./panels/coverage/CoverageListView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CoverageListView: function() { return CoverageListView; },
  GridNode: function() { return GridNode; },
  coverageTypeToString: function() { return coverageTypeToString; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/text_utils/text_utils.js */ "./models/text_utils/text_utils.js");
/* harmony import */var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */var _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/components/data_grid/data_grid.js */ "./ui/legacy/components/data_grid/data_grid.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _coverageListView_css_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./coverageListView.css.js */ "./panels/coverage/coverageListView.css.js");
/* harmony import */var _CoverageModel_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CoverageModel.js */ "./panels/coverage/CoverageModel.js");
// Copyright (c) 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
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
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
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
     *@description Text that appears on a button for the css resource type filter.
     */ css: 'CSS',
    /**
     *@description Text in Coverage List View of the Coverage tab
     */ jsPerFunction: 'JS (per function)',
    /**
     *@description Text in Coverage List View of the Coverage tab
     */ jsPerBlock: 'JS (per block)',
    /**
     *@description Text for web URLs
     */ url: 'URL',
    /**
     *@description Text that refers to some types
     */ type: 'Type',
    /**
     *@description Text in Coverage List View of the Coverage tab
     */ totalBytes: 'Total Bytes',
    /**
     *@description Text in Coverage List View of the Coverage tab
     */ unusedBytes: 'Unused Bytes',
    /**
     *@description Text in the Coverage List View of the Coverage Tab
     */ usageVisualization: 'Usage Visualization',
    /**
     *@description Data grid name for Coverage data grids
     */ codeCoverage: 'Code Coverage',
    /**
     *@description Cell title in Coverage List View of the Coverage tab. The coverage tool tells
     *developers which functions (logical groups of lines of code) were actually run/executed. If a
     *function does get run, then it is marked in the UI to indicate that it was covered.
     */ jsCoverageWithPerFunction: 'JS coverage with per function granularity: Once a function was executed, the whole function is marked as covered.',
    /**
     *@description Cell title in Coverage List View of the Coverage tab. The coverage tool tells
     *developers which blocks (logical groups of lines of code, smaller than a function) were actually
     *run/executed. If a block does get run, then it is marked in the UI to indicate that it was
     *covered.
     */ jsCoverageWithPerBlock: 'JS coverage with per block granularity: Once a block of JavaScript was executed, that block is marked as covered.',
    /**
     *@description Accessible text for the value in bytes in memory allocation or coverage view.
     */ sBytes: '{n, plural, =1 {# byte} other {# bytes}}',
    /**
     *@description Accessible text for the unused bytes column in the coverage tool that describes the total unused bytes and percentage of the file unused.
     *@example {88%} percentage
     */ sBytesS: '{n, plural, =1 {# byte, {percentage}} other {# bytes, {percentage}}}',
    /**
     *@description Tooltip text for the bar in the coverage list view of the coverage tool that illustrates the relation between used and unused bytes.
     *@example {1000} PH1
     *@example {12.34} PH2
     */ sBytesSBelongToFunctionsThatHave: '{PH1} bytes ({PH2}) belong to functions that have not (yet) been executed.',
    /**
     *@description Tooltip text for the bar in the coverage list view of the coverage tool that illustrates the relation between used and unused bytes.
     *@example {1000} PH1
     *@example {12.34} PH2
     */ sBytesSBelongToBlocksOf: '{PH1} bytes ({PH2}) belong to blocks of JavaScript that have not (yet) been executed.',
    /**
     *@description Message in Coverage View of the Coverage tab
     *@example {1000} PH1
     *@example {12.34} PH2
     */ sBytesSBelongToFunctionsThatHaveExecuted: '{PH1} bytes ({PH2}) belong to functions that have executed at least once.',
    /**
     *@description Message in Coverage View of the Coverage tab
     *@example {1000} PH1
     *@example {12.34} PH2
     */ sBytesSBelongToBlocksOfJavascript: '{PH1} bytes ({PH2}) belong to blocks of JavaScript that have executed at least once.',
    /**
     *@description Accessible text for the visualization column of coverage tool. Contains percentage of unused bytes to used bytes.
     *@example {12.3} PH1
     *@example {12.3} PH2
     */ sOfFileUnusedSOfFileUsed: '{PH1} % of file unused, {PH2} % of file used'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/coverage/CoverageListView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
function coverageTypeToString(type) {
    var types = [];
    if (type & 1 /* CoverageType.CSS */ ) {
        types.push(i18nString(UIStrings.css));
    }
    if (type & 4 /* CoverageType.JavaScriptPerFunction */ ) {
        types.push(i18nString(UIStrings.jsPerFunction));
    } else if (type & 2 /* CoverageType.JavaScript */ ) {
        types.push(i18nString(UIStrings.jsPerBlock));
    }
    return types.join('+');
}
var CoverageListView = /*#__PURE__*/ function(_UI_Widget_VBox) {
    "use strict";
    _inherits(CoverageListView, _UI_Widget_VBox);
    var _super = _create_super(CoverageListView);
    function CoverageListView(isVisibleFilter) {
        _class_call_check(this, CoverageListView);
        var _this;
        _this = _super.call(this, true);
        _define_property(_assert_this_initialized(_this), "nodeForCoverageInfo", void 0);
        _define_property(_assert_this_initialized(_this), "isVisibleFilter", void 0);
        _define_property(_assert_this_initialized(_this), "highlightRegExp", void 0);
        _define_property(_assert_this_initialized(_this), "dataGrid", void 0);
        _this.nodeForCoverageInfo = new Map();
        _this.isVisibleFilter = isVisibleFilter;
        _this.highlightRegExp = null;
        var columns = [
            {
                id: 'url',
                title: i18nString(UIStrings.url),
                width: '250px',
                weight: 3,
                fixedWidth: false,
                sortable: true,
                disclosure: true
            },
            {
                id: 'type',
                title: i18nString(UIStrings.type),
                width: '45px',
                weight: 1,
                fixedWidth: true,
                sortable: true
            },
            {
                id: 'size',
                title: i18nString(UIStrings.totalBytes),
                width: '60px',
                fixedWidth: true,
                sortable: true,
                align: "right" /* DataGrid.DataGrid.Align.Right */ ,
                weight: 1
            },
            {
                id: 'unused-size',
                title: i18nString(UIStrings.unusedBytes),
                width: '100px',
                fixedWidth: true,
                sortable: true,
                align: "right" /* DataGrid.DataGrid.Align.Right */ ,
                sort: _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_4__.DataGrid.Order.Descending,
                weight: 1
            },
            {
                id: 'bars',
                title: i18nString(UIStrings.usageVisualization),
                width: '250px',
                fixedWidth: false,
                sortable: true,
                weight: 1
            }
        ];
        _this.dataGrid = new _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_4__.SortableDataGrid.SortableDataGrid({
            displayName: i18nString(UIStrings.codeCoverage),
            columns: columns,
            editCallback: undefined,
            refreshCallback: undefined,
            deleteCallback: undefined
        });
        _this.dataGrid.setResizeMethod("last" /* DataGrid.DataGrid.ResizeMethod.Last */ );
        _this.dataGrid.setStriped(true);
        _this.dataGrid.element.classList.add('flex-auto');
        _this.dataGrid.addEventListener("OpenedNode" /* DataGrid.DataGrid.Events.OpenedNode */ , _this.onOpenedNode, _assert_this_initialized(_this));
        _this.dataGrid.addEventListener("SortingChanged" /* DataGrid.DataGrid.Events.SortingChanged */ , _this.sortingChanged, _assert_this_initialized(_this));
        var dataGridWidget = _this.dataGrid.asWidget();
        dataGridWidget.show(_this.contentElement);
        _this.setDefaultFocusedChild(dataGridWidget);
        return _this;
    }
    _create_class(CoverageListView, [
        {
            key: "update",
            value: function update(coverageInfo) {
                var hadUpdates = false;
                var maxSize = coverageInfo.reduce(function(acc, entry) {
                    return Math.max(acc, entry.size());
                }, 0);
                var rootNode = this.dataGrid.rootNode();
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = coverageInfo[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var entry = _step.value;
                        var node = this.nodeForCoverageInfo.get(entry);
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
                if (hadUpdates) {
                    this.sortingChanged();
                }
            }
        },
        {
            key: "updateSourceNodes",
            value: function updateSourceNodes(sourcesURLCoverageInfo, maxSize, node) {
                var shouldCreateSourceNodes = false;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = sourcesURLCoverageInfo.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var coverageInfo = _step.value;
                        var sourceNode = this.nodeForCoverageInfo.get(coverageInfo);
                        if (sourceNode) {
                            sourceNode.refreshIfNeeded(maxSize);
                        } else {
                            shouldCreateSourceNodes = true;
                            break;
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
                if (shouldCreateSourceNodes) {
                    void this.createSourceNodes(sourcesURLCoverageInfo, maxSize, node);
                }
            }
        },
        {
            key: "createSourceNodes",
            value: function createSourceNodes(sourcesURLCoverageInfo, maxSize, node) {
                var _this = this;
                return _async_to_generator(function() {
                    var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, coverageInfo, sourceNode;
                    return _ts_generator(this, function(_state) {
                        _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                        try {
                            for(_iterator = sourcesURLCoverageInfo.values()[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                coverageInfo = _step.value;
                                sourceNode = new GridNode(coverageInfo, maxSize);
                                node.appendChild(sourceNode);
                                _this.nodeForCoverageInfo.set(coverageInfo, sourceNode);
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
                        return [
                            2
                        ];
                    });
                })();
            }
        },
        {
            key: "reset",
            value: function reset() {
                this.nodeForCoverageInfo.clear();
                this.dataGrid.rootNode().removeChildren();
            }
        },
        {
            key: "updateFilterAndHighlight",
            value: function updateFilterAndHighlight(highlightRegExp) {
                this.highlightRegExp = highlightRegExp;
                var hadTreeUpdates = false;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.nodeForCoverageInfo.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var node = _step.value;
                        var shouldBeVisible = this.isVisibleFilter(node.coverageInfo);
                        var isVisible = Boolean(node.parent);
                        if (shouldBeVisible) {
                            node.setHighlight(this.highlightRegExp);
                        }
                        if (shouldBeVisible === isVisible) {
                            continue;
                        }
                        hadTreeUpdates = true;
                        if (!shouldBeVisible) {
                            node.remove();
                        } else {
                            this.appendNodeByType(node);
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
                if (hadTreeUpdates) {
                    this.sortingChanged();
                }
            }
        },
        {
            key: "appendNodeByType",
            value: function appendNodeByType(node) {
                if (_instanceof(node.coverageInfo, _CoverageModel_js__WEBPACK_IMPORTED_MODULE_7__.SourceURLCoverageInfo)) {
                    var parentNode = this.nodeForCoverageInfo.get(node.coverageInfo.generatedURLCoverageInfo);
                    parentNode === null || parentNode === void 0 ? void 0 : parentNode.appendChild(node);
                } else {
                    this.dataGrid.rootNode().appendChild(node);
                }
            }
        },
        {
            key: "selectByUrl",
            value: function selectByUrl(url) {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.nodeForCoverageInfo.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var _step_value = _sliced_to_array(_step.value, 2), info = _step_value[0], node = _step_value[1];
                        if (info.url() === url) {
                            node.revealAndSelect();
                            break;
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
            key: "onOpenedNode",
            value: function onOpenedNode() {
                void this.revealSourceForSelectedNode();
            }
        },
        {
            key: "revealSourceForSelectedNode",
            value: function revealSourceForSelectedNode() {
                var _this = this;
                return _async_to_generator(function() {
                    var node, coverageInfo, sourceCode;
                    return _ts_generator(this, function(_state) {
                        node = _this.dataGrid.selectedNode;
                        if (!node) {
                            return [
                                2
                            ];
                        }
                        coverageInfo = node.coverageInfo;
                        sourceCode = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_3__.Workspace.WorkspaceImpl.instance().uiSourceCodeForURL(coverageInfo.url());
                        if (!sourceCode) {
                            return [
                                2
                            ];
                        }
                        if (_this.dataGrid.selectedNode !== node) {
                            return [
                                2
                            ];
                        }
                        void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(sourceCode);
                        return [
                            2
                        ];
                    });
                })();
            }
        },
        {
            key: "sortingChanged",
            value: function sortingChanged() {
                var columnId = this.dataGrid.sortColumnId();
                if (!columnId) {
                    return;
                }
                var sortFunction = GridNode.sortFunctionForColumn(columnId);
                if (!sortFunction) {
                    return;
                }
                this.dataGrid.sortNodes(sortFunction, !this.dataGrid.isSortOrderAscending());
            }
        },
        {
            key: "wasShown",
            value: function wasShown() {
                _get(_get_prototype_of(CoverageListView.prototype), "wasShown", this).call(this);
                this.registerCSSFiles([
                    _coverageListView_css_js__WEBPACK_IMPORTED_MODULE_6__["default"]
                ]);
            }
        }
    ]);
    return CoverageListView;
}(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Widget.VBox);
var percentageFormatter = null;
function getPercentageFormatter() {
    if (!percentageFormatter) {
        percentageFormatter = new Intl.NumberFormat(_core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.DevToolsLocale.DevToolsLocale.instance().locale, {
            style: 'percent',
            maximumFractionDigits: 1
        });
    }
    return percentageFormatter;
}
var bytesFormatter = null;
function getBytesFormatter() {
    if (!bytesFormatter) {
        bytesFormatter = new Intl.NumberFormat(_core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.DevToolsLocale.DevToolsLocale.instance().locale);
    }
    return bytesFormatter;
}
var GridNode = /*#__PURE__*/ function(_DataGrid_SortableDataGrid_SortableDataGridNode) {
    "use strict";
    _inherits(GridNode, _DataGrid_SortableDataGrid_SortableDataGridNode);
    var _super = _create_super(GridNode);
    function GridNode(coverageInfo, maxSize) {
        _class_call_check(this, GridNode);
        var _this;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "coverageInfo", void 0);
        _define_property(_assert_this_initialized(_this), "lastUsedSize", void 0);
        _define_property(_assert_this_initialized(_this), "url", void 0);
        _define_property(_assert_this_initialized(_this), "maxSize", void 0);
        _define_property(_assert_this_initialized(_this), "highlightRegExp", void 0);
        _this.coverageInfo = coverageInfo;
        _this.url = coverageInfo.url();
        _this.maxSize = maxSize;
        _this.highlightRegExp = null;
        return _this;
    }
    _create_class(GridNode, [
        {
            key: "setHighlight",
            value: function setHighlight(highlightRegExp) {
                if (this.highlightRegExp === highlightRegExp) {
                    return;
                }
                this.highlightRegExp = highlightRegExp;
                this.refresh();
            }
        },
        {
            key: "refreshIfNeeded",
            value: function refreshIfNeeded(maxSize) {
                if (this.lastUsedSize === this.coverageInfo.usedSize() && maxSize === this.maxSize) {
                    return false;
                }
                this.lastUsedSize = this.coverageInfo.usedSize();
                this.maxSize = maxSize;
                this.refresh();
                return true;
            }
        },
        {
            key: "createCell",
            value: function createCell(columnId) {
                var cell = this.createTD(columnId);
                switch(columnId){
                    case 'url':
                        {
                            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Tooltip.Tooltip.install(cell, this.url);
                            var outer = cell.createChild('div', 'url-outer');
                            var prefix = outer.createChild('div', 'url-prefix');
                            var suffix = outer.createChild('div', 'url-suffix');
                            var splitURL = /^(.*)(\/[^/]*)$/.exec(this.url);
                            prefix.textContent = splitURL ? splitURL[1] : this.url;
                            suffix.textContent = splitURL ? splitURL[2] : '';
                            if (this.highlightRegExp) {
                                this.highlight(outer, this.url);
                            }
                            this.setCellAccessibleName(this.url, cell, columnId);
                            break;
                        }
                    case 'type':
                        {
                            cell.textContent = coverageTypeToString(this.coverageInfo.type());
                            if (this.coverageInfo.type() & 4 /* CoverageType.JavaScriptPerFunction */ ) {
                                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Tooltip.Tooltip.install(cell, i18nString(UIStrings.jsCoverageWithPerFunction));
                            } else if (this.coverageInfo.type() & 2 /* CoverageType.JavaScript */ ) {
                                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Tooltip.Tooltip.install(cell, i18nString(UIStrings.jsCoverageWithPerBlock));
                            }
                            break;
                        }
                    case 'size':
                        {
                            var size = this.coverageInfo.size() || 0;
                            var sizeSpan = cell.createChild('span');
                            var sizeFormatted = getBytesFormatter().format(size);
                            sizeSpan.textContent = sizeFormatted;
                            var sizeAccessibleName = i18nString(UIStrings.sBytes, {
                                n: size
                            });
                            this.setCellAccessibleName(sizeAccessibleName, cell, columnId);
                            break;
                        }
                    case 'unused-size':
                        {
                            var unusedSize = this.coverageInfo.unusedSize() || 0;
                            var unusedSizeSpan = cell.createChild('span');
                            var unusedPercentsSpan = cell.createChild('span', 'percent-value');
                            var unusedSizeFormatted = getBytesFormatter().format(unusedSize);
                            unusedSizeSpan.textContent = unusedSizeFormatted;
                            var unusedPercentFormatted = getPercentageFormatter().format(this.coverageInfo.unusedPercentage());
                            unusedPercentsSpan.textContent = unusedPercentFormatted;
                            var unusedAccessibleName = i18nString(UIStrings.sBytesS, {
                                n: unusedSize,
                                percentage: unusedPercentFormatted
                            });
                            this.setCellAccessibleName(unusedAccessibleName, cell, columnId);
                            break;
                        }
                    case 'bars':
                        {
                            var barContainer = cell.createChild('div', 'bar-container');
                            var unusedPercent = getPercentageFormatter().format(this.coverageInfo.unusedPercentage());
                            var usedPercent = getPercentageFormatter().format(this.coverageInfo.usedPercentage());
                            if (this.coverageInfo.unusedSize() > 0) {
                                var unusedSizeBar = barContainer.createChild('div', 'bar bar-unused-size');
                                unusedSizeBar.style.width = (this.coverageInfo.unusedSize() / this.maxSize * 100 || 0) + '%';
                                if (this.coverageInfo.type() & 4 /* CoverageType.JavaScriptPerFunction */ ) {
                                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Tooltip.Tooltip.install(unusedSizeBar, i18nString(UIStrings.sBytesSBelongToFunctionsThatHave, {
                                        PH1: this.coverageInfo.unusedSize(),
                                        PH2: unusedPercent
                                    }));
                                } else if (this.coverageInfo.type() & 2 /* CoverageType.JavaScript */ ) {
                                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Tooltip.Tooltip.install(unusedSizeBar, i18nString(UIStrings.sBytesSBelongToBlocksOf, {
                                        PH1: this.coverageInfo.unusedSize(),
                                        PH2: unusedPercent
                                    }));
                                }
                            }
                            if (this.coverageInfo.usedSize() > 0) {
                                var usedSizeBar = barContainer.createChild('div', 'bar bar-used-size');
                                usedSizeBar.style.width = (this.coverageInfo.usedSize() / this.maxSize * 100 || 0) + '%';
                                if (this.coverageInfo.type() & 4 /* CoverageType.JavaScriptPerFunction */ ) {
                                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Tooltip.Tooltip.install(usedSizeBar, i18nString(UIStrings.sBytesSBelongToFunctionsThatHaveExecuted, {
                                        PH1: this.coverageInfo.usedSize(),
                                        PH2: usedPercent
                                    }));
                                } else if (this.coverageInfo.type() & 2 /* CoverageType.JavaScript */ ) {
                                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Tooltip.Tooltip.install(usedSizeBar, i18nString(UIStrings.sBytesSBelongToBlocksOfJavascript, {
                                        PH1: this.coverageInfo.usedSize(),
                                        PH2: usedPercent
                                    }));
                                }
                            }
                            this.setCellAccessibleName(i18nString(UIStrings.sOfFileUnusedSOfFileUsed, {
                                PH1: unusedPercent,
                                PH2: usedPercent
                            }), cell, columnId);
                        }
                }
                return cell;
            }
        },
        {
            key: "highlight",
            value: function highlight(element, textContent) {
                if (!this.highlightRegExp) {
                    return;
                }
                var matches = this.highlightRegExp.exec(textContent);
                if (!matches || !matches.length) {
                    return;
                }
                var range = new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_2__.TextRange.SourceRange(matches.index, matches[0].length);
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.highlightRangesWithStyleClass(element, [
                    range
                ], 'filter-highlight');
            }
        }
    ], [
        {
            key: "sortFunctionForColumn",
            value: function sortFunctionForColumn(columnId) {
                var compareURL = function(a, b) {
                    return a.url.localeCompare(b.url);
                };
                switch(columnId){
                    case 'url':
                        return compareURL;
                    case 'type':
                        return function(a, b) {
                            var typeA = coverageTypeToString(a.coverageInfo.type());
                            var typeB = coverageTypeToString(b.coverageInfo.type());
                            return typeA.localeCompare(typeB) || compareURL(a, b);
                        };
                    case 'size':
                        return function(a, b) {
                            return a.coverageInfo.size() - b.coverageInfo.size() || compareURL(a, b);
                        };
                    case 'bars':
                    case 'unused-size':
                        return function(a, b) {
                            return a.coverageInfo.unusedSize() - b.coverageInfo.unusedSize() || compareURL(a, b);
                        };
                    default:
                        console.assert(false, 'Unknown sort field: ' + columnId);
                        return null;
                }
            }
        }
    ]);
    return GridNode;
} //# sourceMappingURL=CoverageListView.js.map
(_ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_4__.SortableDataGrid.SortableDataGridNode);


}),
"./panels/coverage/coverageListView.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2021 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.data-grid {\n  border: none;\n}\n\n.data-grid td .url-outer {\n  width: 100%;\n  display: inline-flex;\n  justify-content: flex-start;\n}\n\n.data-grid td .url-outer .filter-highlight {\n  font-weight: bold;\n}\n\n.data-grid td .url-prefix {\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n}\n\n.data-grid td .url-suffix {\n  flex: none;\n}\n\n.data-grid td .bar {\n  display: inline-block;\n  height: 8px;\n  border: 1px solid transparent;\n}\n\n.data-grid td .bar-unused-size {\n  background-color: var(--app-color-coverage-unused);\n}\n\n.data-grid td .bar-used-size {\n  background-color: var(--app-color-coverage-used);\n}\n\n.data-grid td .percent-value {\n  width: 7ex;\n  display: inline-block;\n  color: var(--sys-color-on-surface-subtle);\n}\n\n@media (forced-colors: active) {\n  .data-grid td .bar-container {\n    forced-color-adjust: none;\n  }\n\n  .data-grid td .bar-unused-size {\n    background-color: ButtonText;\n  }\n\n  .data-grid td .bar-used-size {\n    background-color: ButtonFace;\n  }\n\n  .data-grid td .bar {\n    border-color: ButtonText;\n  }\n\n  .data-grid .selected td .bar {\n    border-top-color: HighlightText;\n    border-bottom-color: HighlightText;\n  }\n\n  .data-grid .selected td .bar:last-child {\n    border-right-color: HighlightText;\n  }\n\n  .data-grid .selected td .bar:first-child {\n    border-left-color: HighlightText;\n  }\n\n  .data-grid:focus tr.selected span.percent-value {\n    color: HighlightText;\n  }\n}\n\n/*# sourceURL=coverageListView.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);