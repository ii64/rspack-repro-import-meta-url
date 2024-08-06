"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_profiler_ProfileView_js"], {
"./panels/profiler/ProfileView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ProfileView: function() { return ProfileView; },
  WritableProfileHeader: function() { return WritableProfileHeader; },
  maxLinkLength: function() { return maxLinkLength; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */var _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/components/data_grid/data_grid.js */ "./ui/legacy/components/data_grid/data_grid.js");
/* harmony import */var _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/legacy/components/perf_ui/perf_ui.js */ "./ui/legacy/components/perf_ui/perf_ui.js");
/* harmony import */var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/legacy/components/utils/utils.js */ "./ui/legacy/components/utils/utils.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _BottomUpProfileDataGrid_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./BottomUpProfileDataGrid.js */ "./panels/profiler/BottomUpProfileDataGrid.js");
/* harmony import */var _ProfileDataGrid_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ProfileDataGrid.js */ "./panels/profiler/ProfileDataGrid.js");
/* harmony import */var _ProfileFlameChartDataProvider_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ProfileFlameChartDataProvider.js */ "./panels/profiler/ProfileFlameChartDataProvider.js");
/* harmony import */var _ProfileHeader_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ProfileHeader.js */ "./panels/profiler/ProfileHeader.js");
/* harmony import */var _ProfileSidebarTreeElement_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ProfileSidebarTreeElement.js */ "./panels/profiler/ProfileSidebarTreeElement.js");
/* harmony import */var _TopDownProfileDataGrid_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./TopDownProfileDataGrid.js */ "./panels/profiler/TopDownProfileDataGrid.js");
// Copyright 2016 The Chromium Authors. All rights reserved.
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
     *@description Text in Profile View of a profiler tool
     */ profile: 'Profile',
    /**
     *@description Placeholder text in the search box of the JavaScript profiler tool. Users can search
     *the results by the cost in milliseconds, the name of the function, or the file name.
     */ findByCostMsNameOrFile: 'Find by cost (>50ms), name or file',
    /**
     *@description Text for a programming function
     */ function: 'Function',
    /**
     *@description Title of the Profiler tool
     */ profiler: 'Profiler',
    /**
     *@description Aria-label for profiles view combobox in memory tool
     */ profileViewMode: 'Profile view mode',
    /**
     *@description Tooltip text that appears when hovering over the largeicon visibility button in the Profile View of a profiler tool
     */ focusSelectedFunction: 'Focus selected function',
    /**
     *@description Tooltip text that appears when hovering over the largeicon delete button in the Profile View of a profiler tool
     */ excludeSelectedFunction: 'Exclude selected function',
    /**
     *@description Tooltip text that appears when hovering over the largeicon refresh button in the Profile View of a profiler tool
     */ restoreAllFunctions: 'Restore all functions',
    /**
     *@description Text in Profile View of a profiler tool
     */ chart: 'Chart',
    /**
     *@description Text in Profile View of a profiler tool
     */ heavyBottomUp: 'Heavy (Bottom Up)',
    /**
     *@description Text for selecting different profile views in the JS profiler tool. This option is a tree view.
     */ treeTopDown: 'Tree (Top Down)',
    /**
     * @description Name of a profile
     * @example {2} PH1
     */ profileD: 'Profile {PH1}',
    /**
     *@description Text in Profile View of a profiler tool
     *@example {4 MB} PH1
     */ loadingD: 'Loading… {PH1}%',
    /**
     *@description Text in Profile View of a profiler tool
     *@example {example.file} PH1
     *@example {cannot open file} PH2
     */ fileSReadErrorS: 'File \'\'{PH1}\'\' read error: {PH2}',
    /**
     *@description Text when something is loading
     */ loading: 'Loading…',
    /**
     *@description Text in Profile View of a profiler tool
     */ failedToReadFile: 'Failed to read file',
    /**
     *@description Text in Profile View of a profiler tool
     */ parsing: 'Parsing…',
    /**
     * @description Status indicator in the JS Profiler to show that a file has been successfully loaded
     * from file, as opposed to a profile that has been captured locally.
     */ loaded: 'Loaded'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/profiler/ProfileView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
var ProfileView = /*#__PURE__*/ function(_UI_View_SimpleView) {
    "use strict";
    _inherits(ProfileView, _UI_View_SimpleView);
    var _super = _create_super(ProfileView);
    function ProfileView() {
        _class_call_check(this, ProfileView);
        var _this;
        _this = _super.call(this, i18nString(UIStrings.profile));
        _define_property(_assert_this_initialized(_this), "profileInternal", void 0);
        _define_property(_assert_this_initialized(_this), "searchableViewInternal", void 0);
        _define_property(_assert_this_initialized(_this), "dataGrid", void 0);
        _define_property(_assert_this_initialized(_this), "viewSelectComboBox", void 0);
        _define_property(_assert_this_initialized(_this), "focusButton", void 0);
        _define_property(_assert_this_initialized(_this), "excludeButton", void 0);
        _define_property(_assert_this_initialized(_this), "resetButton", void 0);
        _define_property(_assert_this_initialized(_this), "linkifierInternal", void 0);
        _define_property(_assert_this_initialized(_this), "nodeFormatter", void 0);
        _define_property(_assert_this_initialized(_this), "viewType", void 0);
        _define_property(_assert_this_initialized(_this), "adjustedTotal", void 0);
        _define_property(_assert_this_initialized(_this), "profileHeader", void 0);
        _define_property(_assert_this_initialized(_this), "bottomUpProfileDataGridTree", void 0);
        _define_property(_assert_this_initialized(_this), "topDownProfileDataGridTree", void 0);
        _define_property(_assert_this_initialized(_this), "currentSearchResultIndex", void 0);
        _define_property(_assert_this_initialized(_this), "dataProvider", void 0);
        _define_property(_assert_this_initialized(_this), "flameChart", void 0);
        _define_property(_assert_this_initialized(_this), "visibleView", void 0);
        _define_property(_assert_this_initialized(_this), "searchableElement", void 0);
        _define_property(_assert_this_initialized(_this), "profileDataGridTree", void 0);
        _this.profileInternal = null;
        _this.searchableViewInternal = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.SearchableView.SearchableView(_assert_this_initialized(_this), null);
        _this.searchableViewInternal.setPlaceholder(i18nString(UIStrings.findByCostMsNameOrFile));
        _this.searchableViewInternal.show(_this.element);
        var columns = [];
        columns.push({
            id: 'self',
            title: _this.columnHeader('self'),
            width: '120px',
            fixedWidth: true,
            sortable: true,
            sort: _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_5__.DataGrid.Order.Descending,
            titleDOMFragment: undefined,
            align: undefined,
            editable: undefined,
            nonSelectable: undefined,
            longText: undefined,
            disclosure: undefined,
            weight: undefined,
            allowInSortByEvenWhenHidden: undefined,
            dataType: undefined,
            defaultWeight: undefined
        });
        columns.push({
            id: 'total',
            title: _this.columnHeader('total'),
            width: '120px',
            fixedWidth: true,
            sortable: true,
            sort: undefined,
            titleDOMFragment: undefined,
            align: undefined,
            editable: undefined,
            nonSelectable: undefined,
            longText: undefined,
            disclosure: undefined,
            weight: undefined,
            allowInSortByEvenWhenHidden: undefined,
            dataType: undefined,
            defaultWeight: undefined
        });
        columns.push({
            id: 'function',
            title: i18nString(UIStrings.function),
            disclosure: true,
            sortable: true,
            sort: undefined,
            titleDOMFragment: undefined,
            align: undefined,
            editable: undefined,
            nonSelectable: undefined,
            longText: undefined,
            weight: undefined,
            allowInSortByEvenWhenHidden: undefined,
            dataType: undefined,
            defaultWeight: undefined,
            width: undefined,
            fixedWidth: undefined
        });
        _this.dataGrid = new _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_5__.DataGrid.DataGridImpl({
            displayName: i18nString(UIStrings.profiler),
            columns: columns,
            editCallback: undefined,
            deleteCallback: undefined,
            refreshCallback: undefined
        });
        _this.dataGrid.addEventListener("SortingChanged" /* DataGrid.DataGrid.Events.SortingChanged */ , _this.sortProfile, _assert_this_initialized(_this));
        _this.dataGrid.addEventListener("SelectedNode" /* DataGrid.DataGrid.Events.SelectedNode */ , _this.nodeSelected.bind(_assert_this_initialized(_this), true));
        _this.dataGrid.addEventListener("DeselectedNode" /* DataGrid.DataGrid.Events.DeselectedNode */ , _this.nodeSelected.bind(_assert_this_initialized(_this), false));
        _this.dataGrid.setRowContextMenuCallback(_this.populateContextMenu.bind(_assert_this_initialized(_this)));
        _this.viewSelectComboBox = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.Toolbar.ToolbarComboBox(_this.changeView.bind(_assert_this_initialized(_this)), i18nString(UIStrings.profileViewMode), undefined, 'profile-view.selected-view');
        _this.focusButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.Toolbar.ToolbarButton(i18nString(UIStrings.focusSelectedFunction), 'eye', undefined, 'profile-view.focus-selected-function');
        _this.focusButton.setEnabled(false);
        _this.focusButton.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */ , _this.focusClicked, _assert_this_initialized(_this));
        _this.excludeButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.Toolbar.ToolbarButton(i18nString(UIStrings.excludeSelectedFunction), 'cross', undefined, 'profile-view.exclude-selected-function');
        _this.excludeButton.setEnabled(false);
        _this.excludeButton.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */ , _this.excludeClicked, _assert_this_initialized(_this));
        _this.resetButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.Toolbar.ToolbarButton(i18nString(UIStrings.restoreAllFunctions), 'refresh', undefined, 'profile-view.restore-all-functions');
        _this.resetButton.setEnabled(false);
        _this.resetButton.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */ , _this.resetClicked, _assert_this_initialized(_this));
        _this.linkifierInternal = new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_7__.Linkifier.Linkifier(maxLinkLength);
        return _this;
    }
    _create_class(ProfileView, [
        {
            key: "setProfile",
            value: function setProfile(profile) {
                this.profileInternal = profile;
                this.bottomUpProfileDataGridTree = null;
                this.topDownProfileDataGridTree = null;
                this.changeView();
                this.refresh();
            }
        },
        {
            key: "profile",
            value: function profile() {
                return this.profileInternal;
            }
        },
        {
            key: "initialize",
            value: function initialize(nodeFormatter) {
                var _this = this;
                this.nodeFormatter = nodeFormatter;
                this.viewType = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('profile-view', "Heavy" /* ViewTypes.Heavy */ );
                var viewTypes = [
                    "Flame" /* ViewTypes.Flame */ ,
                    "Heavy" /* ViewTypes.Heavy */ ,
                    "Tree" /* ViewTypes.Tree */ 
                ];
                var optionNames = new Map([
                    [
                        "Flame" /* ViewTypes.Flame */ ,
                        i18nString(UIStrings.chart)
                    ],
                    [
                        "Heavy" /* ViewTypes.Heavy */ ,
                        i18nString(UIStrings.heavyBottomUp)
                    ],
                    [
                        "Tree" /* ViewTypes.Tree */ ,
                        i18nString(UIStrings.treeTopDown)
                    ]
                ]);
                var options = new Map(viewTypes.map(function(type) {
                    return [
                        type,
                        _this.viewSelectComboBox.createOption(optionNames.get(type), type)
                    ];
                }));
                var optionName = this.viewType.get() || viewTypes[0];
                var option = options.get(optionName) || options.get(viewTypes[0]);
                this.viewSelectComboBox.select(option);
                this.changeView();
                if (this.flameChart) {
                    this.flameChart.update();
                }
            }
        },
        {
            key: "focus",
            value: function focus() {
                if (this.flameChart) {
                    this.flameChart.focus();
                } else {
                    _get(_get_prototype_of(ProfileView.prototype), "focus", this).call(this);
                }
            }
        },
        {
            key: "columnHeader",
            value: function columnHeader(_columnId) {
                throw 'Not implemented';
            }
        },
        {
            key: "selectRange",
            value: function selectRange(timeLeft, timeRight) {
                if (!this.flameChart) {
                    return;
                }
                this.flameChart.selectRange(timeLeft, timeRight);
            }
        },
        {
            key: "toolbarItems",
            value: function toolbarItems() {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        return [
                            2,
                            [
                                _this.viewSelectComboBox,
                                _this.focusButton,
                                _this.excludeButton,
                                _this.resetButton
                            ]
                        ];
                    });
                })();
            }
        },
        {
            key: "getBottomUpProfileDataGridTree",
            value: function getBottomUpProfileDataGridTree() {
                if (!this.bottomUpProfileDataGridTree) {
                    this.bottomUpProfileDataGridTree = new _BottomUpProfileDataGrid_js__WEBPACK_IMPORTED_MODULE_9__.BottomUpProfileDataGridTree(this.nodeFormatter, this.searchableViewInternal, this.profileInternal.root, this.adjustedTotal);
                }
                return this.bottomUpProfileDataGridTree;
            }
        },
        {
            key: "getTopDownProfileDataGridTree",
            value: function getTopDownProfileDataGridTree() {
                if (!this.topDownProfileDataGridTree) {
                    this.topDownProfileDataGridTree = new _TopDownProfileDataGrid_js__WEBPACK_IMPORTED_MODULE_14__.TopDownProfileDataGridTree(this.nodeFormatter, this.searchableViewInternal, this.profileInternal.root, this.adjustedTotal);
                }
                return this.topDownProfileDataGridTree;
            }
        },
        {
            key: "populateContextMenu",
            value: function populateContextMenu(contextMenu, gridNode) {
                var node = gridNode;
                if (node.linkElement) {
                    contextMenu.appendApplicableItems(node.linkElement);
                }
            }
        },
        {
            key: "willHide",
            value: function willHide() {
                this.currentSearchResultIndex = -1;
            }
        },
        {
            key: "refresh",
            value: function refresh() {
                if (!this.profileDataGridTree) {
                    return;
                }
                var selectedProfileNode = this.dataGrid.selectedNode ? this.dataGrid.selectedNode.profileNode : null;
                this.dataGrid.rootNode().removeChildren();
                var children = this.profileDataGridTree.children;
                var count = children.length;
                for(var index = 0; index < count; ++index){
                    this.dataGrid.rootNode().appendChild(children[index]);
                }
                if (selectedProfileNode) {
                    // TODO(crbug.com/1011811): Cleanup the added `selected` property to this SDK class.
                    // @ts-ignore
                    selectedProfileNode.selected = true;
                }
            }
        },
        {
            key: "refreshVisibleData",
            value: function refreshVisibleData() {
                var child = this.dataGrid.rootNode().children[0];
                while(child){
                    child.refresh();
                    child = child.traverseNextNode(false, null, true);
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
                if (this.searchableElement) {
                    this.searchableElement.onSearchCanceled();
                }
            }
        },
        {
            key: "performSearch",
            value: function performSearch(searchConfig, shouldJump, jumpBackwards) {
                if (this.searchableElement) {
                    this.searchableElement.performSearch(searchConfig, shouldJump, jumpBackwards);
                }
            }
        },
        {
            key: "jumpToNextSearchResult",
            value: function jumpToNextSearchResult() {
                if (this.searchableElement) {
                    this.searchableElement.jumpToNextSearchResult();
                }
            }
        },
        {
            key: "jumpToPreviousSearchResult",
            value: function jumpToPreviousSearchResult() {
                if (this.searchableElement) {
                    this.searchableElement.jumpToPreviousSearchResult();
                }
            }
        },
        {
            key: "linkifier",
            value: function linkifier() {
                return this.linkifierInternal;
            }
        },
        {
            key: "createFlameChartDataProvider",
            value: function createFlameChartDataProvider() {
                throw 'Not implemented';
            }
        },
        {
            key: "ensureFlameChartCreated",
            value: function ensureFlameChartCreated() {
                var _this = this;
                if (this.flameChart) {
                    return;
                }
                this.dataProvider = this.createFlameChartDataProvider();
                this.flameChart = new _ProfileFlameChartDataProvider_js__WEBPACK_IMPORTED_MODULE_11__.ProfileFlameChart(this.searchableViewInternal, this.dataProvider);
                this.flameChart.addEventListener("EntryInvoked" /* PerfUI.FlameChart.Events.EntryInvoked */ , function(event) {
                    void _this.onEntryInvoked(event);
                });
            }
        },
        {
            key: "onEntryInvoked",
            value: function onEntryInvoked(event) {
                var _this = this;
                return _async_to_generator(function() {
                    var entryIndex, node, debuggerModel, script, location, uiLocation;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!_this.dataProvider) {
                                    return [
                                        2
                                    ];
                                }
                                entryIndex = event.data;
                                node = _this.dataProvider.entryNodes[entryIndex];
                                debuggerModel = _this.profileHeader.debuggerModel;
                                if (!node || !node.scriptId || !debuggerModel) {
                                    return [
                                        2
                                    ];
                                }
                                script = debuggerModel.scriptForId(node.scriptId);
                                if (!script) {
                                    return [
                                        2
                                    ];
                                }
                                location = debuggerModel.createRawLocation(script, node.lineNumber, node.columnNumber);
                                return [
                                    4,
                                    _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_4__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance().rawLocationToUILocation(location)
                                ];
                            case 1:
                                uiLocation = _state.sent();
                                void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(uiLocation);
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "changeView",
            value: function changeView() {
                if (!this.profileInternal) {
                    return;
                }
                this.searchableViewInternal.closeSearch();
                if (this.visibleView) {
                    this.visibleView.detach();
                }
                this.viewType.set(this.viewSelectComboBox.selectedOption().value);
                switch(this.viewType.get()){
                    case "Flame" /* ViewTypes.Flame */ :
                        this.ensureFlameChartCreated();
                        this.visibleView = this.flameChart;
                        this.searchableElement = this.flameChart;
                        break;
                    case "Tree" /* ViewTypes.Tree */ :
                        this.profileDataGridTree = this.getTopDownProfileDataGridTree();
                        this.sortProfile();
                        this.visibleView = this.dataGrid.asWidget();
                        this.searchableElement = this.profileDataGridTree;
                        break;
                    case "Heavy" /* ViewTypes.Heavy */ :
                        this.profileDataGridTree = this.getBottomUpProfileDataGridTree();
                        this.sortProfile();
                        this.visibleView = this.dataGrid.asWidget();
                        this.searchableElement = this.profileDataGridTree;
                        break;
                }
                var isFlame = this.viewType.get() === "Flame" /* ViewTypes.Flame */ ;
                this.focusButton.setVisible(!isFlame);
                this.excludeButton.setVisible(!isFlame);
                this.resetButton.setVisible(!isFlame);
                if (this.visibleView) {
                    this.visibleView.show(this.searchableViewInternal.element);
                }
            }
        },
        {
            key: "nodeSelected",
            value: function nodeSelected(selected) {
                this.focusButton.setEnabled(selected);
                this.excludeButton.setEnabled(selected);
            }
        },
        {
            key: "focusClicked",
            value: function focusClicked() {
                if (!this.dataGrid.selectedNode) {
                    return;
                }
                this.resetButton.setEnabled(true);
                this.resetButton.element.focus();
                if (this.profileDataGridTree) {
                    this.profileDataGridTree.focus(this.dataGrid.selectedNode);
                }
                this.refresh();
                this.refreshVisibleData();
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.CpuProfileNodeFocused);
            }
        },
        {
            key: "excludeClicked",
            value: function excludeClicked() {
                var selectedNode = this.dataGrid.selectedNode;
                if (!selectedNode) {
                    return;
                }
                this.resetButton.setEnabled(true);
                this.resetButton.element.focus();
                selectedNode.deselect();
                if (this.profileDataGridTree) {
                    this.profileDataGridTree.exclude(selectedNode);
                }
                this.refresh();
                this.refreshVisibleData();
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.CpuProfileNodeExcluded);
            }
        },
        {
            key: "resetClicked",
            value: function resetClicked() {
                this.viewSelectComboBox.selectElement().focus();
                this.resetButton.setEnabled(false);
                if (this.profileDataGridTree) {
                    this.profileDataGridTree.restore();
                }
                this.linkifierInternal.reset();
                this.refresh();
                this.refreshVisibleData();
            }
        },
        {
            key: "sortProfile",
            value: function sortProfile() {
                if (!this.profileDataGridTree) {
                    return;
                }
                var sortAscending = this.dataGrid.isSortOrderAscending();
                var sortColumnId = this.dataGrid.sortColumnId();
                var sortProperty = sortColumnId === 'function' ? 'functionName' : sortColumnId || '';
                this.profileDataGridTree.sort(_ProfileDataGrid_js__WEBPACK_IMPORTED_MODULE_10__.ProfileDataGridTree.propertyComparator(sortProperty, sortAscending), false);
                this.refresh();
            }
        }
    ], [
        {
            key: "buildPopoverTable",
            value: function buildPopoverTable(entryInfo) {
                var table = document.createElement('table');
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = entryInfo[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var entry = _step.value;
                        var row = table.createChild('tr');
                        row.createChild('td').textContent = entry.title;
                        row.createChild('td').textContent = entry.value;
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
                return table;
            }
        }
    ]);
    return ProfileView;
}(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.View.SimpleView);
var maxLinkLength = 30;
var _profileReceivedPromise = /*#__PURE__*/ new WeakMap(), _profileReceivedFulfill = /*#__PURE__*/ new WeakMap();
var WritableProfileHeader = /*#__PURE__*/ function(ProfileHeader) {
    "use strict";
    _inherits(WritableProfileHeader, ProfileHeader);
    var _super = _create_super(WritableProfileHeader);
    function WritableProfileHeader(debuggerModel, type, title) {
        _class_call_check(this, WritableProfileHeader);
        var _this;
        _this = _super.call(this, type, title || i18nString(UIStrings.profileD, {
            PH1: type.nextProfileUid()
        }));
        _define_property(_assert_this_initialized(_this), "debuggerModel", void 0);
        _define_property(_assert_this_initialized(_this), "fileName", void 0);
        _define_property(_assert_this_initialized(_this), "jsonifiedProfile", void 0);
        _define_property(_assert_this_initialized(_this), "profile", void 0);
        _define_property(_assert_this_initialized(_this), "protocolProfileInternal", void 0);
        _class_private_field_init(_assert_this_initialized(_this), _profileReceivedPromise, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _profileReceivedFulfill, {
            writable: true,
            value: function() {}
        });
        _this.debuggerModel = debuggerModel;
        _class_private_field_set(_assert_this_initialized(_this), _profileReceivedPromise, new Promise(function(resolve) {
            _class_private_field_set(_assert_this_initialized(_this), _profileReceivedFulfill, resolve);
        }));
        return _this;
    }
    _create_class(WritableProfileHeader, [
        {
            key: "onChunkTransferred",
            value: function onChunkTransferred(_reader) {
                if (this.jsonifiedProfile) {
                    // TODO(l10n): Is the '%' at the end of this string correct? 4MB% looks wrong
                    this.updateStatus(i18nString(UIStrings.loadingD, {
                        PH1: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.NumberUtilities.bytesToString(this.jsonifiedProfile.length)
                    }));
                }
            }
        },
        {
            key: "onError",
            value: function onError(reader) {
                var error = reader.error();
                if (error) {
                    this.updateStatus(i18nString(UIStrings.fileSReadErrorS, {
                        PH1: reader.fileName(),
                        PH2: error.message
                    }));
                }
            }
        },
        {
            key: "write",
            value: function write(text) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        _this.jsonifiedProfile += text;
                        return [
                            2
                        ];
                    });
                })();
            }
        },
        {
            key: "close",
            value: function close() {
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
            key: "dispose",
            value: function dispose() {
                this.removeTempFile();
            }
        },
        {
            key: "createSidebarTreeElement",
            value: function createSidebarTreeElement(panel) {
                return new _ProfileSidebarTreeElement_js__WEBPACK_IMPORTED_MODULE_13__.ProfileSidebarTreeElement(panel, this, 'profile-sidebar-tree-item');
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
                    var fileOutputStream, now, fileExtension, accepted, data;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _class_private_field_get(_this, _profileReceivedPromise)
                                ];
                            case 1:
                                _state.sent();
                                fileOutputStream = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_4__.FileUtils.FileOutputStream();
                                if (!_this.fileName) {
                                    now = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.DateUtilities.toISO8601Compact(new Date());
                                    fileExtension = _this.profileType().fileExtension();
                                    _this.fileName = "".concat(_this.profileType().typeName(), "-").concat(now).concat(fileExtension);
                                }
                                return [
                                    4,
                                    fileOutputStream.open(_this.fileName)
                                ];
                            case 2:
                                accepted = _state.sent();
                                if (!accepted || !_this.tempFile) {
                                    return [
                                        2
                                    ];
                                }
                                return [
                                    4,
                                    _this.tempFile.read()
                                ];
                            case 3:
                                data = _state.sent();
                                if (!data) return [
                                    3,
                                    5
                                ];
                                return [
                                    4,
                                    fileOutputStream.write(data)
                                ];
                            case 4:
                                _state.sent();
                                _state.label = 5;
                            case 5:
                                void fileOutputStream.close();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "loadFromFile",
            value: function loadFromFile(file) {
                var _this = this;
                return _async_to_generator(function() {
                    var fileReader, success, error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this.updateStatus(i18nString(UIStrings.loading), true);
                                fileReader = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_4__.FileUtils.ChunkedFileReader(file, 10000000, _this.onChunkTransferred.bind(_this));
                                _this.jsonifiedProfile = '';
                                return [
                                    4,
                                    fileReader.read(_this)
                                ];
                            case 1:
                                success = _state.sent();
                                if (!success) {
                                    _this.onError(fileReader);
                                    return [
                                        2,
                                        new Error(i18nString(UIStrings.failedToReadFile))
                                    ];
                                }
                                _this.updateStatus(i18nString(UIStrings.parsing), true);
                                error = null;
                                try {
                                    _this.profile = JSON.parse(_this.jsonifiedProfile);
                                    _this.setProfile(_this.profile);
                                    _this.updateStatus(i18nString(UIStrings.loaded), false);
                                } catch (e) {
                                    error = e;
                                    _this.profileType().removeProfile(_this);
                                }
                                _this.jsonifiedProfile = null;
                                if (_this.profileType().profileBeingRecorded() === _this) {
                                    _this.profileType().setProfileBeingRecorded(null);
                                }
                                return [
                                    2,
                                    error
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "setProtocolProfile",
            value: function setProtocolProfile(profile) {
                this.setProfile(profile);
                this.protocolProfileInternal = profile;
                this.tempFile = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_4__.TempFile.TempFile();
                this.tempFile.write([
                    JSON.stringify(profile)
                ]);
                _class_private_field_get(this, _profileReceivedFulfill).call(this);
            }
        }
    ]);
    return WritableProfileHeader;
} //# sourceMappingURL=ProfileView.js.map
(_ProfileHeader_js__WEBPACK_IMPORTED_MODULE_12__.ProfileHeader);


}),
"./panels/profiler/TopDownProfileDataGrid.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  TopDownProfileDataGridNode: function() { return TopDownProfileDataGridNode; },
  TopDownProfileDataGridTree: function() { return TopDownProfileDataGridTree; }
});
/* harmony import */var _ProfileDataGrid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProfileDataGrid.js */ "./panels/profiler/ProfileDataGrid.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
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

var TopDownProfileDataGridNode = /*#__PURE__*/ function(ProfileDataGridNode1) {
    "use strict";
    _inherits(TopDownProfileDataGridNode, ProfileDataGridNode1);
    var _super = _create_super(TopDownProfileDataGridNode);
    function TopDownProfileDataGridNode(profileNode, owningTree) {
        _class_call_check(this, TopDownProfileDataGridNode);
        var _this;
        var hasChildren = Boolean(profileNode.children && profileNode.children.length);
        _this = _super.call(this, profileNode, owningTree, hasChildren);
        _define_property(_assert_this_initialized(_this), "remainingChildren", void 0);
        _this.remainingChildren = profileNode.children;
        return _this;
    }
    _create_class(TopDownProfileDataGridNode, [
        {
            key: "populateChildren",
            value: function populateChildren() {
                TopDownProfileDataGridNode.sharedPopulate(this);
            }
        }
    ], [
        {
            key: "sharedPopulate",
            value: function sharedPopulate(container) {
                var children = container.remainingChildren;
                var childrenLength = children.length;
                for(var i = 0; i < childrenLength; ++i){
                    container.appendChild(new TopDownProfileDataGridNode(children[i], container.tree));
                }
                container.remainingChildren = [];
            }
        },
        {
            key: "excludeRecursively",
            value: function excludeRecursively(container, aCallUID) {
                if (container.remainingChildren.length > 0) {
                    container.populate();
                }
                container.save();
                var children = container.children;
                var index = container.children.length;
                while(index--){
                    TopDownProfileDataGridNode.excludeRecursively(children[index], aCallUID);
                }
                var child = container.childrenByCallUID.get(aCallUID);
                if (child) {
                    _ProfileDataGrid_js__WEBPACK_IMPORTED_MODULE_0__.ProfileDataGridNode.merge(container, child, true);
                }
            }
        }
    ]);
    return TopDownProfileDataGridNode;
}(_ProfileDataGrid_js__WEBPACK_IMPORTED_MODULE_0__.ProfileDataGridNode);
var TopDownProfileDataGridTree = /*#__PURE__*/ function(ProfileDataGridTree) {
    "use strict";
    _inherits(TopDownProfileDataGridTree, ProfileDataGridTree);
    var _super = _create_super(TopDownProfileDataGridTree);
    function TopDownProfileDataGridTree(formatter, searchableView, rootProfileNode, total) {
        _class_call_check(this, TopDownProfileDataGridTree);
        var _this;
        _this = _super.call(this, formatter, searchableView, total);
        _define_property(_assert_this_initialized(_this), "remainingChildren", void 0);
        _this.remainingChildren = rootProfileNode.children;
        _ProfileDataGrid_js__WEBPACK_IMPORTED_MODULE_0__.ProfileDataGridNode.populate(_assert_this_initialized(_this));
        return _this;
    }
    _create_class(TopDownProfileDataGridTree, [
        {
            key: "focus",
            value: function focus(profileDataGridNode) {
                if (!profileDataGridNode) {
                    return;
                }
                this.save();
                profileDataGridNode.savePosition();
                this.children = [
                    profileDataGridNode
                ];
                this.total = profileDataGridNode.total;
            }
        },
        {
            key: "exclude",
            value: function exclude(profileDataGridNode) {
                if (!profileDataGridNode) {
                    return;
                }
                this.save();
                TopDownProfileDataGridNode.excludeRecursively(this, profileDataGridNode.callUID);
                if (this.lastComparator) {
                    this.sort(this.lastComparator, true);
                }
            }
        },
        {
            key: "restore",
            value: function restore() {
                if (!this.savedChildren) {
                    return;
                }
                this.children[0].restorePosition();
                _get(_get_prototype_of(TopDownProfileDataGridTree.prototype), "restore", this).call(this);
            }
        },
        {
            key: "populateChildren",
            value: function populateChildren() {
                TopDownProfileDataGridNode.sharedPopulate(this);
            }
        }
    ]);
    return TopDownProfileDataGridTree;
} //# sourceMappingURL=TopDownProfileDataGrid.js.map
(_ProfileDataGrid_js__WEBPACK_IMPORTED_MODULE_0__.ProfileDataGridTree);


}),

}]);