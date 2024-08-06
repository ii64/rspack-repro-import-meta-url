"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_application_SharedStorageItemsView_js"], {
"./panels/application/SharedStorageItemsView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  SharedStorageItemsView: function() { return SharedStorageItemsView; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/components/legacy_wrapper/legacy_wrapper.js */ "./ui/components/legacy_wrapper/legacy_wrapper.js");
/* harmony import */var _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/components/data_grid/data_grid.js */ "./ui/legacy/components/data_grid/data_grid.js");
/* harmony import */var _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/components/source_frame/source_frame.js */ "./ui/legacy/components/source_frame/source_frame.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _components_components_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/components.js */ "./panels/application/components/components.js");
/* harmony import */var _StorageItemsView_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./StorageItemsView.js */ "./panels/application/StorageItemsView.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
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
function _class_private_method_get(receiver, privateSet, fn) {
    if (!privateSet.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return fn;
}
function _class_private_method_init(obj, privateSet) {
    _check_private_redeclaration(obj, privateSet);
    privateSet.add(obj);
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
     *@description Text in SharedStorage Items View of the Application panel
     */ sharedStorage: 'Shared storage',
    /**
     *@description Text representing the name of a value stored in the "Shared Storage Items" table
     */ key: 'Key',
    /**
     *@description Text for the value of something
     */ value: 'Value',
    /**
     *@description Name for the "Shared Storage Items" table that shows the content of the Shared Storage.
     */ sharedStorageItems: 'Shared Storage Items',
    /**
     *@description Text for announcing that the "Shared Storage Items" table was cleared, that is, all
     * entries were deleted.
     */ sharedStorageItemsCleared: 'Shared Storage items cleared',
    /**
     *@description Text for announcing that the filtered "Shared Storage Items" table was cleared, that is,
     * all filtered entries were deleted.
     */ sharedStorageFilteredItemsCleared: 'Shared Storage filtered items cleared',
    /**
     *@description Text in SharedStorage Items View of the Application panel
     */ selectAValueToPreview: 'Select a value to preview',
    /**
     *@description Text for announcing a Shared Storage key/value item has been deleted
     */ sharedStorageItemDeleted: 'The storage item was deleted.',
    /**
     *@description Text for announcing a Shared Storage key/value item has been edited
     */ sharedStorageItemEdited: 'The storage item was edited.',
    /**
     *@description Text for announcing a Shared Storage key/value item edit request has been canceled
     */ sharedStorageItemEditCanceled: 'The storage item edit was canceled.',
    /**
     *@description Text for announcing number of entries after filtering
     *@example {5} PH1
     */ sharedStorageNumberEntries: 'Number of entries shown in table: {PH1}'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/application/SharedStorageItemsView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
var _sharedStorage = /*#__PURE__*/ new WeakMap(), _metadataView = /*#__PURE__*/ new WeakMap(), _noDisplayView = /*#__PURE__*/ new WeakMap(), _eventListeners = /*#__PURE__*/ new WeakMap(), _sharedStorageChanged = /*#__PURE__*/ new WeakSet(), _editingCallback = /*#__PURE__*/ new WeakSet(), _showSharedStorageItems = /*#__PURE__*/ new WeakSet(), _deleteCallback = /*#__PURE__*/ new WeakSet(), _previewEntry = /*#__PURE__*/ new WeakSet();
var SharedStorageItemsView = /*#__PURE__*/ function(StorageItemsView) {
    "use strict";
    _inherits(SharedStorageItemsView, StorageItemsView);
    var _super = _create_super(SharedStorageItemsView);
    function SharedStorageItemsView(sharedStorage) {
        _class_call_check(this, SharedStorageItemsView);
        var _this;
        _this = _super.call(this, i18nString(UIStrings.sharedStorage), 'sharedStoragePanel');
        _class_private_method_init(_assert_this_initialized(_this), _sharedStorageChanged);
        _class_private_method_init(_assert_this_initialized(_this), _editingCallback);
        _class_private_method_init(_assert_this_initialized(_this), _showSharedStorageItems);
        _class_private_method_init(_assert_this_initialized(_this), _deleteCallback);
        _class_private_method_init(_assert_this_initialized(_this), _previewEntry);
        _class_private_field_init(_assert_this_initialized(_this), _sharedStorage, {
            writable: true,
            value: void 0
        });
        _define_property(_assert_this_initialized(_this), "outerSplitWidget", void 0);
        _define_property(_assert_this_initialized(_this), "innerSplitWidget", void 0);
        _class_private_field_init(_assert_this_initialized(_this), _metadataView, {
            writable: true,
            value: void 0
        });
        _define_property(_assert_this_initialized(_this), "dataGrid", void 0);
        _class_private_field_init(_assert_this_initialized(_this), _noDisplayView, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _eventListeners, {
            writable: true,
            value: void 0
        });
        _define_property(_assert_this_initialized(_this), "sharedStorageItemsDispatcher", void 0);
        _class_private_field_set(_assert_this_initialized(_this), _sharedStorage, sharedStorage);
        _this.element.classList.add('storage-view', 'table');
        var columns = [
            {
                id: 'key',
                title: i18nString(UIStrings.key),
                sortable: false,
                editable: true,
                longText: true,
                weight: 50
            },
            {
                id: 'value',
                title: i18nString(UIStrings.value),
                sortable: false,
                editable: true,
                longText: true,
                weight: 50
            }
        ];
        _this.dataGrid = new _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_3__.DataGrid.DataGridImpl({
            displayName: i18nString(UIStrings.sharedStorageItems),
            columns: columns,
            editCallback: _class_private_method_get(_this, _editingCallback, editingCallback).bind(_assert_this_initialized(_this)),
            deleteCallback: _class_private_method_get(_this, _deleteCallback, deleteCallback).bind(_assert_this_initialized(_this)),
            refreshCallback: _this.refreshItems.bind(_assert_this_initialized(_this))
        });
        _this.dataGrid.addEventListener("SelectedNode" /* DataGrid.DataGrid.Events.SelectedNode */ , function(event) {
            void _class_private_method_get(_this, _previewEntry, previewEntry).call(_assert_this_initialized(_this), event.data);
        });
        _this.dataGrid.addEventListener("DeselectedNode" /* DataGrid.DataGrid.Events.DeselectedNode */ , function() {
            void _class_private_method_get(_this, _previewEntry, previewEntry).call(_assert_this_initialized(_this), null);
        });
        _this.dataGrid.setStriped(true);
        _this.dataGrid.setName('shared-storage-items-view');
        var dataGridWidget = _this.dataGrid.asWidget();
        dataGridWidget.setMinimumSize(0, 100);
        _class_private_field_set(_assert_this_initialized(_this), _metadataView, _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_2__.LegacyWrapper.legacyWrapper(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Widget.VBox, new _components_components_js__WEBPACK_IMPORTED_MODULE_7__.SharedStorageMetadataView.SharedStorageMetadataView(sharedStorage, sharedStorage.securityOrigin)));
        _class_private_field_get(_this, _metadataView).setMinimumSize(0, 275);
        var innerResizer = _class_private_field_get(_this, _metadataView).element.createChild('div', 'metadata-view-resizer');
        _this.innerSplitWidget = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.SplitWidget.SplitWidget(/* isVertical: */ false, /* secondIsSidebar: */ false, 'shared-storage-inner-split-view-state');
        _this.innerSplitWidget.setSidebarWidget(_class_private_field_get(_assert_this_initialized(_this), _metadataView));
        _this.innerSplitWidget.setMainWidget(dataGridWidget);
        _this.innerSplitWidget.installResizer(innerResizer);
        _class_private_field_set(_assert_this_initialized(_this), _noDisplayView, new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Widget.VBox());
        _class_private_field_get(_this, _noDisplayView).setMinimumSize(0, 25);
        _class_private_field_get(_this, _noDisplayView).element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.pane('preview').track({
            resize: true
        })));
        var outerResizer = _class_private_field_get(_this, _noDisplayView).element.createChild('div', 'preview-panel-resizer');
        _this.outerSplitWidget = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.SplitWidget.SplitWidget(/* isVertical: */ false, /* secondIsSidebar: */ true, 'shared-storage-outer-split-view-state');
        _this.outerSplitWidget.show(_this.element);
        _this.outerSplitWidget.setMainWidget(_this.innerSplitWidget);
        _this.outerSplitWidget.setSidebarWidget(_class_private_field_get(_assert_this_initialized(_this), _noDisplayView));
        _this.outerSplitWidget.installResizer(outerResizer);
        _class_private_field_get(_this, _noDisplayView).contentElement.classList.add('placeholder');
        var noDisplayDiv = _class_private_field_get(_this, _noDisplayView).contentElement.createChild('div');
        noDisplayDiv.textContent = i18nString(UIStrings.selectAValueToPreview);
        _class_private_field_set(_assert_this_initialized(_this), _eventListeners, []);
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.EventTarget.removeEventListeners(_class_private_field_get(_assert_this_initialized(_this), _eventListeners));
        _class_private_field_set(_assert_this_initialized(_this), _sharedStorage, sharedStorage);
        _class_private_field_set(_assert_this_initialized(_this), _eventListeners, [
            _class_private_field_get(_this, _sharedStorage).addEventListener("SharedStorageChanged" /* SharedStorageForOrigin.Events.SharedStorageChanged */ , _class_private_method_get(_assert_this_initialized(_this), _sharedStorageChanged, sharedStorageChanged), _assert_this_initialized(_this))
        ]);
        _this.sharedStorageItemsDispatcher = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper();
        return _this;
    }
    _create_class(SharedStorageItemsView, [
        {
            key: "updateEntriesOnly",
            value: function updateEntriesOnly() {
                var _this = this;
                return _async_to_generator(function() {
                    var entries;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!_this.isShowing()) {
                                    return [
                                        2
                                    ];
                                }
                                return [
                                    4,
                                    _class_private_field_get(_this, _sharedStorage).getEntries()
                                ];
                            case 1:
                                entries = _state.sent();
                                if (entries) {
                                    _class_private_method_get(_this, _showSharedStorageItems, showSharedStorageItems).call(_this, entries);
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
            key: "refreshItems",
            value: function refreshItems() {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!_this.isShowing()) {
                                    return [
                                        2
                                    ];
                                }
                                return [
                                    4,
                                    _class_private_field_get(_this, _metadataView).getComponent().render()
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    4,
                                    _this.updateEntriesOnly()
                                ];
                            case 2:
                                _state.sent();
                                _this.sharedStorageItemsDispatcher.dispatchEventToListeners("ItemsRefreshed" /* SharedStorageItemsDispatcher.Events.ItemsRefreshed */ );
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "deleteSelectedItem",
            value: function deleteSelectedItem() {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!_this.dataGrid.selectedNode) {
                                    return [
                                        2
                                    ];
                                }
                                return [
                                    4,
                                    _class_private_method_get(_this, _deleteCallback, deleteCallback).call(_this, _this.dataGrid.selectedNode)
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
            key: "deleteAllItems",
            value: function deleteAllItems() {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!!_this.hasFilter()) return [
                                    3,
                                    3
                                ];
                                return [
                                    4,
                                    _class_private_field_get(_this, _sharedStorage).clear()
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    4,
                                    _this.refreshItems()
                                ];
                            case 2:
                                _state.sent();
                                _this.sharedStorageItemsDispatcher.dispatchEventToListeners("ItemsCleared" /* SharedStorageItemsDispatcher.Events.ItemsCleared */ );
                                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.alert(i18nString(UIStrings.sharedStorageItemsCleared));
                                return [
                                    2
                                ];
                            case 3:
                                return [
                                    4,
                                    Promise.all(_this.dataGrid.rootNode().children.filter(function(node) {
                                        return node.data.key;
                                    }).map(function(node) {
                                        return _class_private_field_get(_this, _sharedStorage).deleteEntry(node.data.key);
                                    }))
                                ];
                            case 4:
                                _state.sent();
                                return [
                                    4,
                                    _this.refreshItems()
                                ];
                            case 5:
                                _state.sent();
                                _this.sharedStorageItemsDispatcher.dispatchEventToListeners("FilteredItemsCleared" /* SharedStorageItemsDispatcher.Events.FilteredItemsCleared */ );
                                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.alert(i18nString(UIStrings.sharedStorageFilteredItemsCleared));
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "getEntriesForTesting",
            value: function getEntriesForTesting() {
                return this.dataGrid.rootNode().children.filter(function(node) {
                    return node.data.key;
                }).map(function(node) {
                    return node.data;
                });
            }
        }
    ], [
        {
            key: "createView",
            value: // Use `createView()` instead of the constructor to create a view, so that entries can be awaited asynchronously.
            function createView(sharedStorage) {
                return _async_to_generator(function() {
                    var view;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                view = new SharedStorageItemsView(sharedStorage);
                                return [
                                    4,
                                    view.updateEntriesOnly()
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2,
                                    view
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return SharedStorageItemsView;
} //# sourceMappingURL=SharedStorageItemsView.js.map
(_StorageItemsView_js__WEBPACK_IMPORTED_MODULE_8__.StorageItemsView);
function sharedStorageChanged() {
    return _sharedStorageChanged1.apply(this, arguments);
}
function _sharedStorageChanged1() {
    _sharedStorageChanged1 = _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        this.refreshItems()
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    });
    return _sharedStorageChanged1.apply(this, arguments);
}
function editingCallback(editingNode, columnIdentifier, oldText, newText) {
    return _editingCallback1.apply(this, arguments);
}
function _editingCallback1() {
    _editingCallback1 = _async_to_generator(function(editingNode, columnIdentifier, oldText, newText) {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (!(columnIdentifier === 'key' && newText === '')) return [
                        3,
                        2
                    ];
                    // The Shared Storage backend does not currently allow '' as a key, so we only set a new entry with a new key if its new key is nonempty.
                    return [
                        4,
                        this.refreshItems()
                    ];
                case 1:
                    _state.sent();
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.alert(i18nString(UIStrings.sharedStorageItemEditCanceled));
                    return [
                        2
                    ];
                case 2:
                    if (!(columnIdentifier === 'key')) return [
                        3,
                        5
                    ];
                    return [
                        4,
                        _class_private_field_get(this, _sharedStorage).deleteEntry(oldText)
                    ];
                case 3:
                    _state.sent();
                    return [
                        4,
                        _class_private_field_get(this, _sharedStorage).setEntry(newText, editingNode.data.value || '', false)
                    ];
                case 4:
                    _state.sent();
                    return [
                        3,
                        7
                    ];
                case 5:
                    // The Shared Storage backend does not currently allow '' as a key, so we use ' ' as the default key instead.
                    return [
                        4,
                        _class_private_field_get(this, _sharedStorage).setEntry(editingNode.data.key || ' ', newText, false)
                    ];
                case 6:
                    _state.sent();
                    _state.label = 7;
                case 7:
                    return [
                        4,
                        this.refreshItems()
                    ];
                case 8:
                    _state.sent();
                    this.sharedStorageItemsDispatcher.dispatchEventToListeners("ItemEdited" /* SharedStorageItemsDispatcher.Events.ItemEdited */ , {
                        columnIdentifier: columnIdentifier,
                        oldText: oldText,
                        newText: newText
                    });
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.alert(i18nString(UIStrings.sharedStorageItemEdited));
                    return [
                        2
                    ];
            }
        });
    });
    return _editingCallback1.apply(this, arguments);
}
function showSharedStorageItems(items) {
    var rootNode = this.dataGrid.rootNode();
    var _rootNode_children_filter_map = _sliced_to_array(rootNode.children.filter(function(node) {
        return node.selected;
    }).map(function(node) {
        return node.data.key;
    }), 1), selectedKey = _rootNode_children_filter_map[0];
    rootNode.removeChildren();
    var selectedNode = null;
    var filteredItems = function(item) {
        return "".concat(item.key, " ").concat(item.value);
    };
    var filteredList = this.filter(items, filteredItems);
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = filteredList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var item = _step.value;
            var node = new _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_3__.DataGrid.DataGridNode({
                key: item.key,
                value: item.value
            }, false);
            node.selectable = true;
            rootNode.appendChild(node);
            if (!selectedNode || item.key === selectedKey) {
                selectedNode = node;
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
    if (selectedNode) {
        selectedNode.selected = true;
    }
    this.dataGrid.addCreationNode(false);
    this.setCanDeleteSelected(Boolean(selectedNode));
    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.alert(i18nString(UIStrings.sharedStorageNumberEntries, {
        PH1: filteredList.length
    }));
}
function deleteCallback(node) {
    return _deleteCallback1.apply(this, arguments);
}
function _deleteCallback1() {
    _deleteCallback1 = _async_to_generator(function(node) {
        var key;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (!node || node.isCreationNode || !_class_private_field_get(this, _sharedStorage)) {
                        return [
                            2
                        ];
                    }
                    key = node.data.key;
                    return [
                        4,
                        _class_private_field_get(this, _sharedStorage).deleteEntry(key)
                    ];
                case 1:
                    _state.sent();
                    return [
                        4,
                        this.refreshItems()
                    ];
                case 2:
                    _state.sent();
                    this.sharedStorageItemsDispatcher.dispatchEventToListeners("ItemDeleted" /* SharedStorageItemsDispatcher.Events.ItemDeleted */ , {
                        key: key
                    });
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.alert(i18nString(UIStrings.sharedStorageItemDeleted));
                    return [
                        2
                    ];
            }
        });
    });
    return _deleteCallback1.apply(this, arguments);
}
function previewEntry(entry) {
    return _previewEntry1.apply(this, arguments);
}
function _previewEntry1() {
    _previewEntry1 = _async_to_generator(function(entry) {
        var _entry_data, _entry_data1, key, value, wrappedEntry, preview;
        return _ts_generator(this, function(_state) {
            key = entry === null || entry === void 0 ? void 0 : (_entry_data = entry.data) === null || _entry_data === void 0 ? void 0 : _entry_data.key;
            value = entry === null || entry === void 0 ? void 0 : (_entry_data1 = entry.data) === null || _entry_data1 === void 0 ? void 0 : _entry_data1.value;
            wrappedEntry = key && {
                key: key,
                value: value || ''
            };
            if (wrappedEntry) {
                preview = _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_4__.JSONView.JSONView.createViewSync(wrappedEntry);
                // Selection could've changed while the preview was loaded
                if (entry.selected) {
                    this.outerSplitWidget.setSidebarWidget(preview);
                    preview.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.pane('preview').track({
                        resize: true
                    })));
                }
            } else {
                this.outerSplitWidget.setSidebarWidget(_class_private_field_get(this, _noDisplayView));
            }
            return [
                2
            ];
        });
    });
    return _previewEntry1.apply(this, arguments);
}


}),

}]);