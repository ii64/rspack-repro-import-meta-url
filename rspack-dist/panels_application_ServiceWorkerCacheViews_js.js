"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_application_ServiceWorkerCacheViews_js"], {
"./panels/application/ServiceWorkerCacheViews.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  DataGridNode: function() { return DataGridNode; },
  RequestView: function() { return RequestView; },
  ServiceWorkerCacheView: function() { return ServiceWorkerCacheView; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/text_utils/text_utils.js */ "./models/text_utils/text_utils.js");
/* harmony import */var _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/components/legacy_wrapper/legacy_wrapper.js */ "./ui/components/legacy_wrapper/legacy_wrapper.js");
/* harmony import */var _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/legacy/components/data_grid/data_grid.js */ "./ui/legacy/components/data_grid/data_grid.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _network_components_components_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../network/components/components.js */ "./panels/network/components/components.js");
/* harmony import */var _network_network_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../network/network.js */ "./panels/network/network.js");
/* harmony import */var _components_components_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/components.js */ "./panels/application/components/components.js");
/* harmony import */var _serviceWorkerCacheViews_css_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./serviceWorkerCacheViews.css.js */ "./panels/application/serviceWorkerCacheViews.css.js");
// Copyright 2014 The Chromium Authors. All rights reserved.
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
     *@description Text in Application Panel Sidebar of the Application panel
     */ cache: 'Cache',
    /**
     *@description Text to refresh the page
     */ refresh: 'Refresh',
    /**
     *@description Tooltip text that appears when hovering over the largeicon delete button in the Service Worker Cache Views of the Application panel
     */ deleteSelected: 'Delete Selected',
    /**
     *@description Text in Service Worker Cache Views of the Application panel
     */ filterByPath: 'Filter by path',
    /**
     *@description Text in Service Worker Cache Views of the Application panel
     */ selectACacheEntryAboveToPreview: 'Select a cache entry above to preview',
    /**
     *@description Text for the name of something
     */ name: 'Name',
    /**
     *@description Text in Service Worker Cache Views of the Application panel
     */ timeCached: 'Time Cached',
    /**
     * @description Tooltip text that appears when hovering over the vary header column in the Service Worker Cache Views of the Application panel
     */ varyHeaderWarning: '⚠️ Set ignoreVary to true when matching this entry',
    /**
     *@description Text used to show that data was retrieved from ServiceWorker Cache
     */ serviceWorkerCache: '`Service Worker` Cache',
    /**
     *@description Span text content in Service Worker Cache Views of the Application panel
     *@example {2} PH1
     */ matchingEntriesS: 'Matching entries: {PH1}',
    /**
     *@description Span text content in Indexed DBViews of the Application panel
     *@example {2} PH1
     */ totalEntriesS: 'Total entries: {PH1}',
    /**
     *@description Text for network request headers
     */ headers: 'Headers',
    /**
     *@description Text for previewing items
     */ preview: 'Preview'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/application/ServiceWorkerCacheViews.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
var ServiceWorkerCacheView = /*#__PURE__*/ function(_UI_View_SimpleView) {
    "use strict";
    _inherits(ServiceWorkerCacheView, _UI_View_SimpleView);
    var _super = _create_super(ServiceWorkerCacheView);
    function ServiceWorkerCacheView(model, cache) {
        _class_call_check(this, ServiceWorkerCacheView);
        var _this;
        var _this_model_target_model;
        _this = _super.call(this, i18nString(UIStrings.cache));
        _define_property(_assert_this_initialized(_this), "model", void 0);
        _define_property(_assert_this_initialized(_this), "entriesForTest", void 0);
        _define_property(_assert_this_initialized(_this), "splitWidget", void 0);
        _define_property(_assert_this_initialized(_this), "previewPanel", void 0);
        _define_property(_assert_this_initialized(_this), "preview", void 0);
        _define_property(_assert_this_initialized(_this), "cache", void 0);
        _define_property(_assert_this_initialized(_this), "dataGrid", void 0);
        _define_property(_assert_this_initialized(_this), "refreshThrottler", void 0);
        _define_property(_assert_this_initialized(_this), "refreshButton", void 0);
        _define_property(_assert_this_initialized(_this), "deleteSelectedButton", void 0);
        _define_property(_assert_this_initialized(_this), "entryPathFilter", void 0);
        _define_property(_assert_this_initialized(_this), "returnCount", void 0);
        _define_property(_assert_this_initialized(_this), "summaryBarElement", void 0);
        _define_property(_assert_this_initialized(_this), "loadingPromise", void 0);
        _define_property(_assert_this_initialized(_this), "metadataView", new _components_components_js__WEBPACK_IMPORTED_MODULE_11__.StorageMetadataView.StorageMetadataView());
        _this.model = model;
        _this.entriesForTest = null;
        _this.element.classList.add('service-worker-cache-data-view');
        _this.element.classList.add('storage-view');
        _this.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.pane('cache-storage-data')));
        var editorToolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Toolbar.Toolbar('data-view-toolbar', _this.element);
        editorToolbar.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.toolbar()));
        _this.element.appendChild(_this.metadataView);
        _this.splitWidget = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.SplitWidget.SplitWidget(false, false);
        _this.splitWidget.show(_this.element);
        _this.previewPanel = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Widget.VBox();
        var resizer = _this.previewPanel.element.createChild('div', 'cache-preview-panel-resizer');
        _this.splitWidget.setMainWidget(_this.previewPanel);
        _this.splitWidget.installResizer(resizer);
        _this.preview = null;
        _this.cache = cache;
        var bucketInfo = (_this_model_target_model = _this.model.target().model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.StorageBucketsModel.StorageBucketsModel)) === null || _this_model_target_model === void 0 ? void 0 : _this_model_target_model.getBucketByName(cache.storageBucket.storageKey, cache.storageBucket.name);
        if (bucketInfo) {
            _this.metadataView.setStorageBucket(bucketInfo);
        } else if (cache.storageKey) {
            _this.metadataView.setStorageKey(cache.storageKey);
        }
        _this.dataGrid = null;
        _this.refreshThrottler = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Throttler.Throttler(300);
        _this.refreshButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Toolbar.ToolbarButton(i18nString(UIStrings.refresh), 'refresh', undefined, 'cache-storage.refresh');
        _this.refreshButton.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */ , _this.refreshButtonClicked, _assert_this_initialized(_this));
        editorToolbar.appendToolbarItem(_this.refreshButton);
        _this.deleteSelectedButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Toolbar.ToolbarButton(i18nString(UIStrings.deleteSelected), 'cross', undefined, 'cache-storage.delete-selected');
        _this.deleteSelectedButton.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */ , function(_event) {
            void _this.deleteButtonClicked(null);
        });
        editorToolbar.appendToolbarItem(_this.deleteSelectedButton);
        var entryPathFilterBox = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Toolbar.ToolbarFilter(i18nString(UIStrings.filterByPath), 1);
        editorToolbar.appendToolbarItem(entryPathFilterBox);
        var entryPathFilterThrottler = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Throttler.Throttler(300);
        _this.entryPathFilter = '';
        entryPathFilterBox.addEventListener("TextChanged" /* UI.Toolbar.ToolbarInput.Event.TextChanged */ , function() {
            void entryPathFilterThrottler.schedule(function() {
                _this.entryPathFilter = entryPathFilterBox.value();
                return _this.updateData(true);
            });
        });
        _this.returnCount = null;
        _this.summaryBarElement = null;
        _this.loadingPromise = null;
        _this.update(cache);
        return _this;
    }
    _create_class(ServiceWorkerCacheView, [
        {
            key: "resetDataGrid",
            value: function resetDataGrid() {
                if (this.dataGrid) {
                    this.dataGrid.asWidget().detach();
                }
                this.dataGrid = this.createDataGrid();
                var dataGridWidget = this.dataGrid.asWidget();
                this.splitWidget.setSidebarWidget(dataGridWidget);
                dataGridWidget.setMinimumSize(0, 250);
            }
        },
        {
            key: "wasShown",
            value: function wasShown() {
                this.model.addEventListener("CacheStorageContentUpdated" /* SDK.ServiceWorkerCacheModel.Events.CacheStorageContentUpdated */ , this.cacheContentUpdated, this);
                this.registerCSSFiles([
                    _serviceWorkerCacheViews_css_js__WEBPACK_IMPORTED_MODULE_12__["default"]
                ]);
                void this.updateData(true);
            }
        },
        {
            key: "willHide",
            value: function willHide() {
                this.model.removeEventListener("CacheStorageContentUpdated" /* SDK.ServiceWorkerCacheModel.Events.CacheStorageContentUpdated */ , this.cacheContentUpdated, this);
            }
        },
        {
            key: "showPreview",
            value: function showPreview(preview) {
                if (preview && this.preview === preview) {
                    return;
                }
                if (this.preview) {
                    this.preview.detach();
                }
                if (!preview) {
                    preview = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.EmptyWidget.EmptyWidget(i18nString(UIStrings.selectACacheEntryAboveToPreview));
                }
                this.preview = preview;
                this.preview.show(this.previewPanel.element);
            }
        },
        {
            key: "createDataGrid",
            value: function createDataGrid() {
                var _this = this;
                var columns = [
                    {
                        id: 'number',
                        title: '#',
                        sortable: false,
                        width: '3px'
                    },
                    {
                        id: 'name',
                        title: i18nString(UIStrings.name),
                        weight: 4,
                        sortable: true
                    },
                    {
                        id: 'response-type',
                        title: _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.lockedString('Response-Type'),
                        weight: 1,
                        align: "right" /* DataGrid.DataGrid.Align.Right */ ,
                        sortable: true
                    },
                    {
                        id: 'content-type',
                        title: _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.lockedString('Content-Type'),
                        weight: 1,
                        sortable: true
                    },
                    {
                        id: 'content-length',
                        title: _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.lockedString('Content-Length'),
                        weight: 1,
                        align: "right" /* DataGrid.DataGrid.Align.Right */ ,
                        sortable: true
                    },
                    {
                        id: 'response-time',
                        title: i18nString(UIStrings.timeCached),
                        width: '12em',
                        weight: 1,
                        align: "right" /* DataGrid.DataGrid.Align.Right */ ,
                        sortable: true
                    },
                    {
                        id: 'vary-header',
                        title: _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.lockedString('Vary Header'),
                        weight: 1,
                        sortable: true
                    }
                ];
                var dataGrid = new _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_6__.DataGrid.DataGridImpl({
                    displayName: i18nString(UIStrings.serviceWorkerCache),
                    columns: columns,
                    deleteCallback: this.deleteButtonClicked.bind(this),
                    refreshCallback: this.updateData.bind(this, true),
                    editCallback: undefined
                });
                dataGrid.addEventListener("SortingChanged" /* DataGrid.DataGrid.Events.SortingChanged */ , this.sortingChanged, this);
                dataGrid.addEventListener("SelectedNode" /* DataGrid.DataGrid.Events.SelectedNode */ , function(event) {
                    void _this.previewCachedResponse(event.data.data);
                }, this);
                dataGrid.setStriped(true);
                return dataGrid;
            }
        },
        {
            key: "sortingChanged",
            value: function sortingChanged() {
                if (!this.dataGrid) {
                    return;
                }
                var dataGrid = this.dataGrid;
                var accending = dataGrid.isSortOrderAscending();
                var columnId = dataGrid.sortColumnId();
                var comparator;
                if (columnId === 'name') {
                    comparator = function(a, b) {
                        return a.name.localeCompare(b.name);
                    };
                } else if (columnId === 'content-type') {
                    comparator = function(a, b) {
                        return a.data.mimeType.localeCompare(b.data.mimeType);
                    };
                } else if (columnId === 'content-length') {
                    comparator = function(a, b) {
                        return a.data.resourceSize - b.data.resourceSize;
                    };
                } else if (columnId === 'response-time') {
                    comparator = function(a, b) {
                        return a.data.endTime - b.data.endTime;
                    };
                } else if (columnId === 'response-type') {
                    comparator = function(a, b) {
                        return a.responseType.localeCompare(b.responseType);
                    };
                } else if (columnId === 'vary-header') {
                    comparator = function(a, b) {
                        return a.varyHeader.localeCompare(b.varyHeader);
                    };
                }
                var children = dataGrid.rootNode().children.slice();
                dataGrid.rootNode().removeChildren();
                children.sort(function(a, b) {
                    var result = comparator(a, b);
                    return accending ? result : -result;
                });
                children.forEach(function(child) {
                    return dataGrid.rootNode().appendChild(child);
                });
            }
        },
        {
            key: "deleteButtonClicked",
            value: function deleteButtonClicked(node) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!node) {
                                    node = _this.dataGrid && _this.dataGrid.selectedNode;
                                    if (!node) {
                                        return [
                                            2
                                        ];
                                    }
                                }
                                return [
                                    4,
                                    _this.model.deleteCacheEntry(_this.cache, node.data.url())
                                ];
                            case 1:
                                _state.sent();
                                node.remove();
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
            value: function update(cache) {
                this.cache = cache;
                this.resetDataGrid();
                void this.updateData(true);
            }
        },
        {
            key: "updateSummaryBar",
            value: function updateSummaryBar() {
                if (!this.summaryBarElement) {
                    this.summaryBarElement = this.element.createChild('div', 'cache-storage-summary-bar');
                }
                this.summaryBarElement.removeChildren();
                var span = this.summaryBarElement.createChild('span');
                if (this.entryPathFilter) {
                    span.textContent = i18nString(UIStrings.matchingEntriesS, {
                        PH1: String(this.returnCount)
                    });
                } else {
                    span.textContent = i18nString(UIStrings.totalEntriesS, {
                        PH1: String(this.returnCount)
                    });
                }
            }
        },
        {
            key: "updateDataCallback",
            value: function updateDataCallback(skipCount, entries, returnCount) {
                if (!this.dataGrid) {
                    return;
                }
                var selected = this.dataGrid.selectedNode && this.dataGrid.selectedNode.data.url();
                this.refreshButton.setEnabled(true);
                this.entriesForTest = entries;
                this.returnCount = returnCount;
                this.updateSummaryBar();
                var oldEntries = new Map();
                var rootNode = this.dataGrid.rootNode();
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = rootNode.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var node = _step.value;
                        oldEntries.set(node.data.url, node);
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
                rootNode.removeChildren();
                var selectedNode = null;
                for(var i = 0; i < entries.length; ++i){
                    var entry = entries[i];
                    var node1 = oldEntries.get(entry.requestURL);
                    if (!node1 || node1.data.responseTime !== entry.responseTime) {
                        node1 = new DataGridNode(i, this.createRequest(entry), entry.responseType);
                        node1.selectable = true;
                    } else {
                        node1.data.number = i;
                    }
                    rootNode.appendChild(node1);
                    if (entry.requestURL === selected) {
                        selectedNode = node1;
                    }
                }
                if (!selectedNode) {
                    this.showPreview(null);
                } else {
                    selectedNode.revealAndSelect();
                }
                this.updatedForTest();
            }
        },
        {
            key: "updateData",
            value: function updateData(force) {
                var _this = this;
                return _async_to_generator(function() {
                    var _ref, entries, returnCount;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!force && _this.loadingPromise) {
                                    return [
                                        2,
                                        _this.loadingPromise
                                    ];
                                }
                                _this.refreshButton.setEnabled(false);
                                if (_this.loadingPromise) {
                                    return [
                                        2,
                                        _this.loadingPromise
                                    ];
                                }
                                _this.loadingPromise = new Promise(function(resolve) {
                                    _this.model.loadAllCacheData(_this.cache, _this.entryPathFilter, function(entries, returnCount) {
                                        resolve({
                                            entries: entries,
                                            returnCount: returnCount
                                        });
                                    });
                                });
                                return [
                                    4,
                                    _this.loadingPromise
                                ];
                            case 1:
                                _ref = _state.sent(), entries = _ref.entries, returnCount = _ref.returnCount;
                                _this.updateDataCallback(0, entries, returnCount);
                                _this.loadingPromise = null;
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "refreshButtonClicked",
            value: function refreshButtonClicked() {
                void this.updateData(true);
            }
        },
        {
            key: "cacheContentUpdated",
            value: function cacheContentUpdated(event) {
                var _this = this;
                var _event_data = event.data, cacheName = _event_data.cacheName, storageBucket = _event_data.storageBucket;
                if (!this.cache.inBucket(storageBucket) || this.cache.cacheName !== cacheName) {
                    return;
                }
                void this.refreshThrottler.schedule(function() {
                    return Promise.resolve(_this.updateData(true));
                }, "AsSoonAsPossible" /* Common.Throttler.Scheduling.AsSoonAsPossible */ );
            }
        },
        {
            key: "previewCachedResponse",
            value: function previewCachedResponse(request) {
                var _this = this;
                return _async_to_generator(function() {
                    var preview;
                    return _ts_generator(this, function(_state) {
                        preview = networkRequestToPreview.get(request);
                        if (!preview) {
                            preview = new RequestView(request);
                            networkRequestToPreview.set(request, preview);
                        }
                        // It is possible that table selection changes before the preview opens.
                        if (_this.dataGrid && _this.dataGrid.selectedNode && request === _this.dataGrid.selectedNode.data) {
                            _this.showPreview(preview);
                        }
                        return [
                            2
                        ];
                    });
                })();
            }
        },
        {
            key: "createRequest",
            value: function createRequest(entry) {
                var request = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkRequest.NetworkRequest.createWithoutBackendRequest('cache-storage-' + entry.requestURL, entry.requestURL, _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.DevToolsPath.EmptyUrlString, null);
                request.requestMethod = entry.requestMethod;
                request.setRequestHeaders(entry.requestHeaders);
                request.statusCode = entry.responseStatus;
                request.statusText = entry.responseStatusText;
                request.protocol = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL(entry.requestURL).scheme;
                request.responseHeaders = entry.responseHeaders;
                request.setRequestHeadersText('');
                request.endTime = entry.responseTime;
                var header = entry.responseHeaders.find(function(header) {
                    return header.name.toLowerCase() === 'content-type';
                });
                var mimeType = "text/plain" /* Platform.MimeType.MimeType.PLAIN */ ;
                if (header) {
                    var result = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.MimeType.parseContentType(header.value);
                    if (result.mimeType) {
                        mimeType = result.mimeType;
                    }
                }
                request.mimeType = mimeType;
                header = entry.responseHeaders.find(function(header) {
                    return header.name.toLowerCase() === 'content-length';
                });
                request.resourceSize = header && Number(header.value) || 0;
                var resourceType = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.ResourceType.fromMimeType(mimeType);
                if (!resourceType) {
                    resourceType = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.ResourceType.fromURL(entry.requestURL) || _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Other;
                }
                request.setResourceType(resourceType);
                request.setContentDataProvider(this.requestContent.bind(this, request));
                return request;
            }
        },
        {
            key: "requestContent",
            value: function requestContent(request) {
                var _this = this;
                return _async_to_generator(function() {
                    var response, _request_charset;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this.cache.requestCachedResponse(request.url(), request.requestHeaders())
                                ];
                            case 1:
                                response = _state.sent();
                                if (!response) {
                                    return [
                                        2,
                                        {
                                            error: 'No cached response found'
                                        }
                                    ];
                                }
                                return [
                                    2,
                                    new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_4__.ContentData.ContentData(response.body, /* isBase64=*/ true, request.mimeType, (_request_charset = request.charset()) !== null && _request_charset !== void 0 ? _request_charset : undefined)
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "updatedForTest",
            value: function updatedForTest() {}
        }
    ]);
    return ServiceWorkerCacheView;
}(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.View.SimpleView);
var networkRequestToPreview = new WeakMap();
var DataGridNode = /*#__PURE__*/ function(_DataGrid_DataGrid_DataGridNode) {
    "use strict";
    _inherits(DataGridNode, _DataGrid_DataGrid_DataGridNode);
    var _super = _create_super(DataGridNode);
    function DataGridNode(number, request, responseType) {
        _class_call_check(this, DataGridNode);
        var _this;
        var _request_responseHeaders_find;
        _this = _super.call(this, request);
        _define_property(_assert_this_initialized(_this), "number", void 0);
        _define_property(_assert_this_initialized(_this), "name", void 0);
        _define_property(_assert_this_initialized(_this), "request", void 0);
        _define_property(_assert_this_initialized(_this), "responseType", void 0);
        _define_property(_assert_this_initialized(_this), "varyHeader", void 0);
        _this.number = number;
        var parsed = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL(request.url());
        if (parsed.isValid) {
            _this.name = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.StringUtilities.trimURL(request.url(), parsed.domain());
        } else {
            _this.name = request.url();
        }
        _this.request = request;
        _this.responseType = responseType;
        _this.varyHeader = ((_request_responseHeaders_find = request.responseHeaders.find(function(header) {
            return header.name.toLowerCase() === 'vary';
        })) === null || _request_responseHeaders_find === void 0 ? void 0 : _request_responseHeaders_find.value) || '';
        return _this;
    }
    _create_class(DataGridNode, [
        {
            key: "createCell",
            value: function createCell(columnId) {
                var cell = this.createTD(columnId);
                var value;
                var tooltip = this.request.url();
                if (columnId === 'number') {
                    value = String(this.number);
                } else if (columnId === 'name') {
                    value = this.name;
                } else if (columnId === 'response-type') {
                    if (this.responseType === 'opaqueResponse') {
                        value = 'opaque';
                    } else if (this.responseType === 'opaqueRedirect') {
                        value = 'opaqueredirect';
                    } else {
                        value = this.responseType;
                    }
                } else if (columnId === 'content-type') {
                    value = this.request.mimeType;
                } else if (columnId === 'content-length') {
                    value = (this.request.resourceSize | 0).toLocaleString('en-US');
                } else if (columnId === 'response-time') {
                    value = new Date(this.request.endTime * 1000).toLocaleString();
                } else if (columnId === 'vary-header') {
                    value = this.varyHeader;
                    if (this.varyHeader) {
                        tooltip = i18nString(UIStrings.varyHeaderWarning);
                    }
                }
                var parentElement = cell.parentElement;
                var gridNode;
                if (parentElement && this.dataGrid) {
                    gridNode = this.dataGrid.elementToDataGridNode.get(parentElement);
                }
                _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_6__.DataGrid.DataGridImpl.setElementText(cell, value || '', /* longText= */ true, gridNode);
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Tooltip.Tooltip.install(cell, tooltip);
                return cell;
            }
        }
    ]);
    return DataGridNode;
}(_ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_6__.DataGrid.DataGridNode);
var RequestView = /*#__PURE__*/ function(_UI_Widget_VBox) {
    "use strict";
    _inherits(RequestView, _UI_Widget_VBox);
    var _super = _create_super(RequestView);
    function RequestView(request) {
        _class_call_check(this, RequestView);
        var _this;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "tabbedPane", void 0);
        _define_property(_assert_this_initialized(_this), "resourceViewTabSetting", void 0);
        _this.tabbedPane = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.TabbedPane.TabbedPane();
        _this.tabbedPane.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.section('network-item-preview')));
        _this.tabbedPane.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.TabbedPane.Events.TabSelected, _this.tabSelected, _assert_this_initialized(_this));
        _this.resourceViewTabSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('cache-storage-view-tab', 'preview');
        _this.tabbedPane.appendTab('headers', i18nString(UIStrings.headers), _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_5__.LegacyWrapper.legacyWrapper(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Widget.VBox, new _network_components_components_js__WEBPACK_IMPORTED_MODULE_9__.RequestHeadersView.RequestHeadersView(request)));
        _this.tabbedPane.appendTab('preview', i18nString(UIStrings.preview), new _network_network_js__WEBPACK_IMPORTED_MODULE_10__.RequestPreviewView.RequestPreviewView(request));
        _this.tabbedPane.show(_this.element);
        return _this;
    }
    _create_class(RequestView, [
        {
            key: "wasShown",
            value: function wasShown() {
                _get(_get_prototype_of(RequestView.prototype), "wasShown", this).call(this);
                this.selectTab();
            }
        },
        {
            key: "selectTab",
            value: function selectTab(tabId) {
                if (!tabId) {
                    tabId = this.resourceViewTabSetting.get();
                }
                if (tabId && !this.tabbedPane.selectTab(tabId)) {
                    this.tabbedPane.selectTab('headers');
                }
            }
        },
        {
            key: "tabSelected",
            value: function tabSelected(event) {
                if (!event.data.isUserGesture) {
                    return;
                }
                this.resourceViewTabSetting.set(event.data.tabId);
            }
        }
    ]);
    return RequestView;
} //# sourceMappingURL=ServiceWorkerCacheViews.js.map
(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Widget.VBox);


}),
"./panels/application/serviceWorkerCacheViews.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2014 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.service-worker-cache-data-view .data-view-toolbar {\n  position: relative;\n  background-color: var(--sys-color-cdt-base-container);\n  border-bottom: 1px solid var(--sys-color-divider);\n  padding-right: 10px;\n}\n\n.service-worker-cache-data-view .data-grid {\n  flex: auto;\n}\n\n.service-worker-cache-data-view .data-grid .data-container tr:nth-last-child(1) td {\n  border: 0;\n}\n\n.service-worker-cache-data-view .data-grid .data-container tr:nth-last-child(2) td {\n  border-bottom: 1px solid var(--sys-color-divider);\n}\n\n.service-worker-cache-data-view .data-grid .data-container tr.selected {\n  background-color: var(--sys-color-neutral-container);\n  color: inherit;\n}\n\n.service-worker-cache-data-view .data-grid:focus .data-container tr.selected {\n  background-color: var(--sys-color-tonal-container);\n  color: var(--sys-color-on-tonal-container);\n}\n\n.service-worker-cache-data-view .section,\n.service-worker-cache-data-view .section > .header,\n.service-worker-cache-data-view .section > .header .title {\n  margin: 0;\n  min-height: inherit;\n  line-height: inherit;\n}\n\n.service-worker-cache-data-view .data-grid .data-container td .section .header .title {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.cache-preview-panel-resizer {\n  background-color: var(--sys-color-surface1);\n  height: 4px;\n  border-bottom: 1px solid var(--sys-color-divider);\n}\n\n.cache-storage-summary-bar {\n  flex: 0 0 27px;\n  line-height: 27px;\n  padding-left: 5px;\n  background-color: var(--sys-color-cdt-base-container);\n  border-top: 1px solid var(--sys-color-divider);\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n/*# sourceURL=serviceWorkerCacheViews.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),
"./panels/network/network.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  BinaryResourceView: function() { return /* reexport module object */ _BinaryResourceView_js__WEBPACK_IMPORTED_MODULE_0__; },
  BlockedURLsPane: function() { return /* reexport module object */ _BlockedURLsPane_js__WEBPACK_IMPORTED_MODULE_1__; },
  EventSourceMessagesView: function() { return /* reexport module object */ _EventSourceMessagesView_js__WEBPACK_IMPORTED_MODULE_2__; },
  NetworkConfigView: function() { return /* reexport module object */ _NetworkConfigView_js__WEBPACK_IMPORTED_MODULE_3__; },
  NetworkDataGridNode: function() { return /* reexport module object */ _NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_4__; },
  NetworkFrameGrouper: function() { return /* reexport module object */ _NetworkFrameGrouper_js__WEBPACK_IMPORTED_MODULE_9__; },
  NetworkItemView: function() { return /* reexport module object */ _NetworkItemView_js__WEBPACK_IMPORTED_MODULE_5__; },
  NetworkLogView: function() { return /* reexport module object */ _NetworkLogView_js__WEBPACK_IMPORTED_MODULE_7__; },
  NetworkLogViewColumns: function() { return /* reexport module object */ _NetworkLogViewColumns_js__WEBPACK_IMPORTED_MODULE_8__; },
  NetworkManageCustomHeadersView: function() { return /* reexport module object */ _NetworkManageCustomHeadersView_js__WEBPACK_IMPORTED_MODULE_10__; },
  NetworkOverview: function() { return /* reexport module object */ _NetworkOverview_js__WEBPACK_IMPORTED_MODULE_21__; },
  NetworkPanel: function() { return /* reexport module object */ _NetworkPanel_js__WEBPACK_IMPORTED_MODULE_22__; },
  NetworkSearchScope: function() { return /* reexport module object */ _NetworkSearchScope_js__WEBPACK_IMPORTED_MODULE_11__; },
  NetworkTimeCalculator: function() { return /* reexport module object */ _NetworkTimeCalculator_js__WEBPACK_IMPORTED_MODULE_6__; },
  NetworkWaterfallColumn: function() { return /* reexport module object */ _NetworkWaterfallColumn_js__WEBPACK_IMPORTED_MODULE_12__; },
  RequestCookiesView: function() { return /* reexport module object */ _RequestCookiesView_js__WEBPACK_IMPORTED_MODULE_13__; },
  RequestHTMLView: function() { return /* reexport module object */ _RequestHTMLView_js__WEBPACK_IMPORTED_MODULE_14__; },
  RequestInitiatorView: function() { return /* reexport module object */ _RequestInitiatorView_js__WEBPACK_IMPORTED_MODULE_15__; },
  RequestPayloadView: function() { return /* reexport module object */ _RequestPayloadView_js__WEBPACK_IMPORTED_MODULE_23__; },
  RequestPreviewView: function() { return /* reexport module object */ _RequestPreviewView_js__WEBPACK_IMPORTED_MODULE_17__; },
  RequestResponseView: function() { return /* reexport module object */ _RequestResponseView_js__WEBPACK_IMPORTED_MODULE_16__; },
  RequestTimingView: function() { return /* reexport module object */ _RequestTimingView_js__WEBPACK_IMPORTED_MODULE_18__; },
  ResourceWebSocketFrameView: function() { return /* reexport module object */ _ResourceWebSocketFrameView_js__WEBPACK_IMPORTED_MODULE_19__; },
  SignedExchangeInfoView: function() { return /* reexport module object */ _SignedExchangeInfoView_js__WEBPACK_IMPORTED_MODULE_20__; }
});
/* harmony import */var _BinaryResourceView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BinaryResourceView.js */ "./panels/network/BinaryResourceView.js");
/* harmony import */var _BlockedURLsPane_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BlockedURLsPane.js */ "./panels/network/BlockedURLsPane.js");
/* harmony import */var _EventSourceMessagesView_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EventSourceMessagesView.js */ "./panels/network/EventSourceMessagesView.js");
/* harmony import */var _NetworkConfigView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NetworkConfigView.js */ "./panels/network/NetworkConfigView.js");
/* harmony import */var _NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NetworkDataGridNode.js */ "./panels/network/NetworkDataGridNode.js");
/* harmony import */var _NetworkItemView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NetworkItemView.js */ "./panels/network/NetworkItemView.js");
/* harmony import */var _NetworkTimeCalculator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NetworkTimeCalculator.js */ "./panels/network/NetworkTimeCalculator.js");
/* harmony import */var _NetworkLogView_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./NetworkLogView.js */ "./panels/network/NetworkLogView.js");
/* harmony import */var _NetworkLogViewColumns_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./NetworkLogViewColumns.js */ "./panels/network/NetworkLogViewColumns.js");
/* harmony import */var _NetworkFrameGrouper_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./NetworkFrameGrouper.js */ "./panels/network/NetworkFrameGrouper.js");
/* harmony import */var _NetworkManageCustomHeadersView_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./NetworkManageCustomHeadersView.js */ "./panels/network/NetworkManageCustomHeadersView.js");
/* harmony import */var _NetworkSearchScope_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./NetworkSearchScope.js */ "./panels/network/NetworkSearchScope.js");
/* harmony import */var _NetworkWaterfallColumn_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./NetworkWaterfallColumn.js */ "./panels/network/NetworkWaterfallColumn.js");
/* harmony import */var _RequestCookiesView_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./RequestCookiesView.js */ "./panels/network/RequestCookiesView.js");
/* harmony import */var _RequestHTMLView_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./RequestHTMLView.js */ "./panels/network/RequestHTMLView.js");
/* harmony import */var _RequestInitiatorView_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./RequestInitiatorView.js */ "./panels/network/RequestInitiatorView.js");
/* harmony import */var _RequestResponseView_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./RequestResponseView.js */ "./panels/network/RequestResponseView.js");
/* harmony import */var _RequestPreviewView_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./RequestPreviewView.js */ "./panels/network/RequestPreviewView.js");
/* harmony import */var _RequestTimingView_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./RequestTimingView.js */ "./panels/network/RequestTimingView.js");
/* harmony import */var _ResourceWebSocketFrameView_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ResourceWebSocketFrameView.js */ "./panels/network/ResourceWebSocketFrameView.js");
/* harmony import */var _SignedExchangeInfoView_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./SignedExchangeInfoView.js */ "./panels/network/SignedExchangeInfoView.js");
/* harmony import */var _NetworkOverview_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./NetworkOverview.js */ "./panels/network/NetworkOverview.js");
/* harmony import */var _NetworkPanel_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./NetworkPanel.js */ "./panels/network/NetworkPanel.js");
/* harmony import */var _RequestPayloadView_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./RequestPayloadView.js */ "./panels/network/RequestPayloadView.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.















































 //# sourceMappingURL=network.js.map


}),

}]);