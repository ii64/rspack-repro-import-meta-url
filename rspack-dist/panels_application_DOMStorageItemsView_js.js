"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_application_DOMStorageItemsView_js"], {
"./panels/application/DOMStorageItemsView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  DOMStorageItemsView: function() { return DOMStorageItemsView; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/text_utils/text_utils.js */ "./models/text_utils/text_utils.js");
/* harmony import */var _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/components/data_grid/data_grid.js */ "./ui/legacy/components/data_grid/data_grid.js");
/* harmony import */var _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/components/source_frame/source_frame.js */ "./ui/legacy/components/source_frame/source_frame.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _StorageItemsView_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./StorageItemsView.js */ "./panels/application/StorageItemsView.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/*
 * Copyright (C) 2008 Nokia Inc.  All rights reserved.
 * Copyright (C) 2013 Samsung Electronics. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED ``AS IS'' AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
 * PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL APPLE INC. OR
 * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
 * PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 * PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
 * OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
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
     *@description Text in DOMStorage Items View of the Application panel
     */ domStorage: 'DOM Storage',
    /**
     *@description Text in DOMStorage Items View of the Application panel
     */ key: 'Key',
    /**
     *@description Text for the value of something
     */ value: 'Value',
    /**
     *@description Name for the "DOM Storage Items" table that shows the content of the DOM Storage.
     */ domStorageItems: 'DOM Storage Items',
    /**
     *@description Text for announcing that the "DOM Storage Items" table was cleared, that is, all
     * entries were deleted.
     */ domStorageItemsCleared: 'DOM Storage Items cleared',
    /**
     *@description Text in DOMStorage Items View of the Application panel
     */ selectAValueToPreview: 'Select a value to preview',
    /**
     *@description Text for announcing a DOM Storage key/value item has been deleted
     */ domStorageItemDeleted: 'The storage item was deleted.',
    /**
     *@description Text for announcing number of entries after filtering
     *@example {5} PH1
     */ domStorageNumberEntries: 'Number of entries shown in table: {PH1}'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/application/DOMStorageItemsView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
var DOMStorageItemsView = /*#__PURE__*/ function(StorageItemsView) {
    "use strict";
    _inherits(DOMStorageItemsView, StorageItemsView);
    var _super = _create_super(DOMStorageItemsView);
    function DOMStorageItemsView(domStorage) {
        _class_call_check(this, DOMStorageItemsView);
        var _this;
        _this = _super.call(this, i18nString(UIStrings.domStorage), 'domStoragePanel');
        _define_property(_assert_this_initialized(_this), "domStorage", void 0);
        _define_property(_assert_this_initialized(_this), "dataGrid", void 0);
        _define_property(_assert_this_initialized(_this), "splitWidget", void 0);
        _define_property(_assert_this_initialized(_this), "previewPanel", void 0);
        _define_property(_assert_this_initialized(_this), "preview", void 0);
        _define_property(_assert_this_initialized(_this), "previewValue", void 0);
        _define_property(_assert_this_initialized(_this), "eventListeners", void 0);
        _this.domStorage = domStorage;
        if (domStorage.storageKey) {
            _this.setStorageKey(domStorage.storageKey);
        }
        _this.element.classList.add('storage-view', 'table');
        var columns = [
            {
                id: 'key',
                title: i18nString(UIStrings.key),
                sortable: true,
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
            displayName: i18nString(UIStrings.domStorageItems),
            columns: columns,
            editCallback: _this.editingCallback.bind(_assert_this_initialized(_this)),
            deleteCallback: _this.deleteCallback.bind(_assert_this_initialized(_this)),
            refreshCallback: _this.refreshItems.bind(_assert_this_initialized(_this))
        });
        _this.dataGrid.addEventListener("SelectedNode" /* DataGrid.DataGrid.Events.SelectedNode */ , function(event) {
            void _this.previewEntry(event.data);
        });
        _this.dataGrid.addEventListener("DeselectedNode" /* DataGrid.DataGrid.Events.DeselectedNode */ , function() {
            void _this.previewEntry(null);
        });
        _this.dataGrid.addEventListener("SortingChanged" /* DataGrid.DataGrid.Events.SortingChanged */ , _this.refreshItems, _assert_this_initialized(_this));
        _this.dataGrid.setStriped(true);
        _this.dataGrid.setName('dom-storage-items-view');
        _this.splitWidget = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.SplitWidget.SplitWidget(/* isVertical: */ false, /* secondIsSidebar: */ true, 'dom-storage-split-view-state');
        _this.splitWidget.show(_this.element);
        _this.previewPanel = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Widget.VBox();
        _this.previewPanel.setMinimumSize(0, 50);
        _this.previewPanel.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.pane('preview').track({
            resize: true
        })));
        var resizer = _this.previewPanel.element.createChild('div', 'preview-panel-resizer');
        var dataGridWidget = _this.dataGrid.asWidget();
        dataGridWidget.setMinimumSize(0, 50);
        _this.splitWidget.setMainWidget(dataGridWidget);
        _this.splitWidget.setSidebarWidget(_this.previewPanel);
        _this.splitWidget.installResizer(resizer);
        _this.preview = null;
        _this.previewValue = null;
        _this.showPreview(null, null);
        _this.eventListeners = [];
        _this.setStorage(domStorage);
        return _this;
    }
    _create_class(DOMStorageItemsView, [
        {
            key: "setStorage",
            value: function setStorage(domStorage) {
                _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.EventTarget.removeEventListeners(this.eventListeners);
                this.domStorage = domStorage;
                var storageKind = domStorage.isLocalStorage ? 'local-storage-data' : 'session-storage-data';
                this.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.pane().context(storageKind)));
                if (domStorage.storageKey) {
                    this.setStorageKey(domStorage.storageKey);
                }
                this.eventListeners = [
                    this.domStorage.addEventListener("DOMStorageItemsCleared" /* DOMStorage.Events.DOMStorageItemsCleared */ , this.domStorageItemsCleared, this),
                    this.domStorage.addEventListener("DOMStorageItemRemoved" /* DOMStorage.Events.DOMStorageItemRemoved */ , this.domStorageItemRemoved, this),
                    this.domStorage.addEventListener("DOMStorageItemAdded" /* DOMStorage.Events.DOMStorageItemAdded */ , this.domStorageItemAdded, this),
                    this.domStorage.addEventListener("DOMStorageItemUpdated" /* DOMStorage.Events.DOMStorageItemUpdated */ , this.domStorageItemUpdated, this)
                ];
                this.refreshItems();
            }
        },
        {
            key: "domStorageItemsCleared",
            value: function domStorageItemsCleared() {
                if (!this.isShowing() || !this.dataGrid) {
                    return;
                }
                this.dataGrid.rootNode().removeChildren();
                this.dataGrid.addCreationNode(false);
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.alert(i18nString(UIStrings.domStorageItemsCleared));
                this.setCanDeleteSelected(false);
            }
        },
        {
            key: "domStorageItemRemoved",
            value: function domStorageItemRemoved(event) {
                if (!this.isShowing() || !this.dataGrid) {
                    return;
                }
                var storageData = event.data;
                var rootNode = this.dataGrid.rootNode();
                var children = rootNode.children;
                for(var i = 0; i < children.length; ++i){
                    var childNode = children[i];
                    if (childNode.data.key === storageData.key) {
                        rootNode.removeChild(childNode);
                        this.setCanDeleteSelected(children.length > 1);
                        return;
                    }
                }
            }
        },
        {
            key: "domStorageItemAdded",
            value: function domStorageItemAdded(event) {
                if (!this.isShowing() || !this.dataGrid) {
                    return;
                }
                var storageData = event.data;
                var rootNode = this.dataGrid.rootNode();
                var children = rootNode.children;
                for(var i = 0; i < children.length; ++i){
                    if (children[i].data.key === storageData.key) {
                        return;
                    }
                }
                var childNode = new _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_3__.DataGrid.DataGridNode({
                    key: storageData.key,
                    value: storageData.value
                }, false);
                rootNode.insertChild(childNode, children.length - 1);
            }
        },
        {
            key: "domStorageItemUpdated",
            value: function domStorageItemUpdated(event) {
                if (!this.isShowing() || !this.dataGrid) {
                    return;
                }
                var storageData = event.data;
                var childNode = this.dataGrid.rootNode().children.find(function(child) {
                    return child.data.key === storageData.key;
                });
                if (!childNode) {
                    return;
                }
                if (childNode.data.value !== storageData.value) {
                    childNode.data.value = storageData.value;
                    childNode.refresh();
                }
                if (!childNode.selected) {
                    return;
                }
                if (this.previewValue !== storageData.value) {
                    void this.previewEntry(childNode);
                }
                this.setCanDeleteSelected(true);
            }
        },
        {
            key: "showDOMStorageItems",
            value: function showDOMStorageItems(items) {
                var rootNode = this.dataGrid.rootNode();
                var selectedKey = null;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = rootNode.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var node = _step.value;
                        if (!node.selected) {
                            continue;
                        }
                        selectedKey = node.data.key;
                        break;
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
                var filteredItems = function(item) {
                    return "".concat(item[0], " ").concat(item[1]);
                };
                var sortDirection = this.dataGrid.isSortOrderAscending() ? 1 : -1;
                var filteredList = this.filter(items, filteredItems).sort(function(item1, item2) {
                    return sortDirection * (item1[0] > item2[0] ? 1 : -1);
                });
                var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                try {
                    for(var _iterator1 = filteredList[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                        var item = _step1.value;
                        var key = item[0];
                        var value = item[1];
                        var node1 = new _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_3__.DataGrid.DataGridNode({
                            key: key,
                            value: value
                        }, false);
                        node1.selectable = true;
                        rootNode.appendChild(node1);
                        if (!selectedNode || key === selectedKey) {
                            selectedNode = node1;
                        }
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
                if (selectedNode) {
                    selectedNode.selected = true;
                }
                this.dataGrid.addCreationNode(false);
                this.setCanDeleteSelected(Boolean(selectedNode));
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.alert(i18nString(UIStrings.domStorageNumberEntries, {
                    PH1: filteredList.length
                }));
            }
        },
        {
            key: "deleteSelectedItem",
            value: function deleteSelectedItem() {
                if (!this.dataGrid || !this.dataGrid.selectedNode) {
                    return;
                }
                this.deleteCallback(this.dataGrid.selectedNode);
            }
        },
        {
            key: "refreshItems",
            value: function refreshItems() {
                var _this = this;
                void this.domStorage.getItems().then(function(items) {
                    return items && _this.showDOMStorageItems(items);
                });
            }
        },
        {
            key: "deleteAllItems",
            value: function deleteAllItems() {
                this.domStorage.clear();
                // explicitly clear the view because the event won't be fired when it has no items
                this.domStorageItemsCleared();
            }
        },
        {
            key: "editingCallback",
            value: function editingCallback(editingNode, columnIdentifier, oldText, newText) {
                var domStorage = this.domStorage;
                if (columnIdentifier === 'key') {
                    if (typeof oldText === 'string') {
                        domStorage.removeItem(oldText);
                    }
                    domStorage.setItem(newText, editingNode.data.value || '');
                    this.removeDupes(editingNode);
                } else {
                    domStorage.setItem(editingNode.data.key || '', newText);
                }
            }
        },
        {
            key: "removeDupes",
            value: function removeDupes(masterNode) {
                var rootNode = this.dataGrid.rootNode();
                var children = rootNode.children;
                for(var i = children.length - 1; i >= 0; --i){
                    var childNode = children[i];
                    if (childNode.data.key === masterNode.data.key && masterNode !== childNode) {
                        rootNode.removeChild(childNode);
                    }
                }
            }
        },
        {
            key: "deleteCallback",
            value: function deleteCallback(node) {
                if (!node || node.isCreationNode) {
                    return;
                }
                if (this.domStorage) {
                    this.domStorage.removeItem(node.data.key);
                }
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.alert(i18nString(UIStrings.domStorageItemDeleted));
            }
        },
        {
            key: "showPreview",
            value: function showPreview(preview, value) {
                if (this.preview && this.previewValue === value) {
                    return;
                }
                if (this.preview) {
                    this.preview.detach();
                }
                if (!preview) {
                    preview = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.EmptyWidget.EmptyWidget(i18nString(UIStrings.selectAValueToPreview));
                }
                this.previewValue = value;
                this.preview = preview;
                preview.show(this.previewPanel.contentElement);
            }
        },
        {
            key: "previewEntry",
            value: function previewEntry(entry) {
                var _this = this;
                return _async_to_generator(function() {
                    var value, protocol, url, provider, preview;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                value = entry && entry.data && entry.data.value;
                                if (!(entry && entry.data && entry.data.value)) return [
                                    3,
                                    2
                                ];
                                protocol = _this.domStorage.isLocalStorage ? 'localstorage' : 'sessionstorage';
                                url = "".concat(protocol, "://").concat(entry.key);
                                provider = _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_2__.StaticContentProvider.StaticContentProvider.fromString(url, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.XHR, value);
                                return [
                                    4,
                                    _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_4__.PreviewFactory.PreviewFactory.createPreview(provider, 'text/plain')
                                ];
                            case 1:
                                preview = _state.sent();
                                // Selection could've changed while the preview was loaded
                                if (entry.selected) {
                                    _this.showPreview(preview, value);
                                }
                                return [
                                    3,
                                    3
                                ];
                            case 2:
                                _this.showPreview(null, value);
                                _state.label = 3;
                            case 3:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return DOMStorageItemsView;
} //# sourceMappingURL=DOMStorageItemsView.js.map
(_StorageItemsView_js__WEBPACK_IMPORTED_MODULE_7__.StorageItemsView);


}),

}]);