"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_developer_resources_DeveloperResourcesListView_js"], {
"./panels/developer_resources/DeveloperResourcesListView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  DeveloperResourcesListView: function() { return DeveloperResourcesListView; }
});
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/text_utils/text_utils.js */ "./models/text_utils/text_utils.js");
/* harmony import */var _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/components/data_grid/data_grid.js */ "./ui/legacy/components/data_grid/data_grid.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _developerResourcesListView_css_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./developerResourcesListView.css.js */ "./panels/developer_resources/developerResourcesListView.css.js");
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
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








var UIStrings = {
    /**
     *@description Text for the status of something
     */ status: 'Status',
    /**
     *@description Text for web URLs
     */ url: 'URL',
    /**
     *@description Text for the initiator of something
     */ initiator: 'Initiator',
    /**
     *@description Text in Coverage List View of the Coverage tab
     */ totalBytes: 'Total Bytes',
    /**
     *@description Text for errors
     */ error: 'Error',
    /**
     *@description Title for the Developer resources tab
     */ developerResources: 'Developer resources',
    /**
     *@description Text for a context menu entry
     */ copyUrl: 'Copy URL',
    /**
     * @description Text for a context menu entry. Command to copy a URL to the clipboard. The initiator
     * of a request is the entity that caused this request to be sent.
     */ copyInitiatorUrl: 'Copy initiator URL',
    /**
     *@description Text for the status column of a list view
     */ pending: 'pending',
    /**
     *@description Text for the status column of a list view
     */ success: 'success',
    /**
     *@description Text for the status column of a list view
     */ failure: 'failure',
    /**
     *@description Accessible text for the value in bytes in memory allocation.
     */ sBytes: '{n, plural, =1 {# byte} other {# bytes}}'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/developer_resources/DeveloperResourcesListView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
var DeveloperResourcesListView = /*#__PURE__*/ function(_UI_Widget_VBox) {
    "use strict";
    _inherits(DeveloperResourcesListView, _UI_Widget_VBox);
    var _super = _create_super(DeveloperResourcesListView);
    function DeveloperResourcesListView(isVisibleFilter) {
        _class_call_check(this, DeveloperResourcesListView);
        var _this;
        _this = _super.call(this, true);
        _define_property(_assert_this_initialized(_this), "nodeForItem", void 0);
        _define_property(_assert_this_initialized(_this), "isVisibleFilter", void 0);
        _define_property(_assert_this_initialized(_this), "highlightRegExp", void 0);
        _define_property(_assert_this_initialized(_this), "dataGrid", void 0);
        _this.nodeForItem = new Map();
        _this.isVisibleFilter = isVisibleFilter;
        _this.highlightRegExp = null;
        var columns = [
            {
                id: 'status',
                title: i18nString(UIStrings.status),
                width: '60px',
                fixedWidth: true,
                sortable: true
            },
            {
                id: 'url',
                title: i18nString(UIStrings.url),
                width: '250px',
                fixedWidth: false,
                sortable: true
            },
            {
                id: 'initiator',
                title: i18nString(UIStrings.initiator),
                width: '80px',
                fixedWidth: false,
                sortable: true
            },
            {
                id: 'size',
                title: i18nString(UIStrings.totalBytes),
                width: '80px',
                fixedWidth: true,
                sortable: true,
                align: "right" /* DataGrid.DataGrid.Align.Right */ 
            },
            {
                id: 'error-message',
                title: i18nString(UIStrings.error),
                width: '200px',
                fixedWidth: false,
                sortable: true
            }
        ];
        _this.dataGrid = new _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_5__.SortableDataGrid.SortableDataGrid({
            displayName: i18nString(UIStrings.developerResources),
            columns: columns,
            editCallback: undefined,
            refreshCallback: undefined,
            deleteCallback: undefined
        });
        _this.dataGrid.setResizeMethod("last" /* DataGrid.DataGrid.ResizeMethod.Last */ );
        _this.dataGrid.setStriped(true);
        _this.dataGrid.element.classList.add('flex-auto');
        _this.dataGrid.addEventListener("SortingChanged" /* DataGrid.DataGrid.Events.SortingChanged */ , _this.sortingChanged, _assert_this_initialized(_this));
        _this.dataGrid.setRowContextMenuCallback(_this.populateContextMenu.bind(_assert_this_initialized(_this)));
        var dataGridWidget = _this.dataGrid.asWidget();
        dataGridWidget.show(_this.contentElement);
        _this.setDefaultFocusedChild(dataGridWidget);
        return _this;
    }
    _create_class(DeveloperResourcesListView, [
        {
            key: "select",
            value: function select(item) {
                var node = this.nodeForItem.get(item);
                if (node) {
                    node.select();
                }
            }
        },
        {
            key: "selectedItem",
            value: function selectedItem() {
                if (!this.dataGrid.selectedNode) {
                    return null;
                }
                return this.dataGrid.selectedNode.item;
            }
        },
        {
            key: "populateContextMenu",
            value: function populateContextMenu(contextMenu, gridNode) {
                var item = gridNode.item;
                contextMenu.clipboardSection().appendItem(i18nString(UIStrings.copyUrl), function() {
                    _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.InspectorFrontendHost.InspectorFrontendHostInstance.copyText(item.url);
                }, {
                    jslogContext: 'copy-url'
                });
                if (item.initiator.initiatorUrl) {
                    contextMenu.clipboardSection().appendItem(i18nString(UIStrings.copyInitiatorUrl), function() {
                        _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.InspectorFrontendHost.InspectorFrontendHostInstance.copyText(item.initiator.initiatorUrl);
                    }, {
                        jslogContext: 'copy-initiator-url'
                    });
                }
            }
        },
        {
            key: "update",
            value: function update(items) {
                var hadUpdates = false;
                var rootNode = this.dataGrid.rootNode();
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var item = _step.value;
                        var node = this.nodeForItem.get(item);
                        if (node) {
                            if (this.isVisibleFilter(node.item)) {
                                hadUpdates = node.refreshIfNeeded() || hadUpdates;
                            }
                            continue;
                        }
                        node = new GridNode(item);
                        this.nodeForItem.set(item, node);
                        if (this.isVisibleFilter(node.item)) {
                            rootNode.appendChild(node);
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
            key: "reset",
            value: function reset() {
                this.nodeForItem.clear();
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
                    for(var _iterator = this.nodeForItem.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var node = _step.value;
                        var shouldBeVisible = this.isVisibleFilter(node.item);
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
                            this.dataGrid.rootNode().appendChild(node);
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
            key: "sortingChanged",
            value: function sortingChanged() {
                var columnId = this.dataGrid.sortColumnId();
                if (!columnId) {
                    return;
                }
                var sortFunction = GridNode.sortFunctionForColumn(columnId);
                if (sortFunction) {
                    this.dataGrid.sortNodes(sortFunction, !this.dataGrid.isSortOrderAscending());
                }
            }
        },
        {
            key: "wasShown",
            value: function wasShown() {
                _get(_get_prototype_of(DeveloperResourcesListView.prototype), "wasShown", this).call(this);
                this.registerCSSFiles([
                    _developerResourcesListView_css_js__WEBPACK_IMPORTED_MODULE_7__["default"]
                ]);
            }
        }
    ]);
    return DeveloperResourcesListView;
}(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Widget.VBox);
var GridNode = /*#__PURE__*/ function(_DataGrid_SortableDataGrid_SortableDataGridNode) {
    "use strict";
    _inherits(GridNode, _DataGrid_SortableDataGrid_SortableDataGridNode);
    var _super = _create_super(GridNode);
    function GridNode(item) {
        _class_call_check(this, GridNode);
        var _this;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "item", void 0);
        _define_property(_assert_this_initialized(_this), "highlightRegExp", void 0);
        _this.item = item;
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
            value: function refreshIfNeeded() {
                this.refresh();
                return true;
            }
        },
        {
            key: "createCell",
            value: function createCell(columnId) {
                var _this = this;
                var cell = this.createTD(columnId);
                switch(columnId){
                    case 'url':
                        {
                            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Tooltip.Tooltip.install(cell, this.item.url);
                            var outer = cell.createChild('div', 'url-outer');
                            var prefix = outer.createChild('div', 'url-prefix');
                            var suffix = outer.createChild('div', 'url-suffix');
                            var splitURL = /^(.*)(\/[^/]*)$/.exec(this.item.url);
                            prefix.textContent = splitURL ? splitURL[1] : this.item.url;
                            suffix.textContent = splitURL ? splitURL[2] : '';
                            if (this.highlightRegExp) {
                                this.highlight(outer, this.item.url);
                            }
                            this.setCellAccessibleName(this.item.url, cell, columnId);
                            break;
                        }
                    case 'initiator':
                        {
                            var url = this.item.initiator.initiatorUrl || '';
                            cell.textContent = url;
                            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Tooltip.Tooltip.install(cell, url);
                            this.setCellAccessibleName(url, cell, columnId);
                            cell.onmouseenter = function() {
                                var frameId = _this.item.initiator.frameId;
                                var frame = frameId ? _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.FrameManager.FrameManager.instance().getFrame(frameId) : null;
                                if (frame) {
                                    void frame.highlight();
                                }
                            };
                            cell.onmouseleave = function() {
                                return _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.OverlayModel.OverlayModel.hideDOMNodeHighlight();
                            };
                            break;
                        }
                    case 'status':
                        {
                            if (this.item.success === null) {
                                cell.textContent = i18nString(UIStrings.pending);
                            } else {
                                cell.textContent = this.item.success ? i18nString(UIStrings.success) : i18nString(UIStrings.failure);
                            }
                            break;
                        }
                    case 'size':
                        {
                            var size = this.item.size;
                            if (size !== null) {
                                var sizeSpan = cell.createChild('span');
                                sizeSpan.textContent = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.NumberUtilities.withThousandsSeparator(size);
                                var sizeAccessibleName = i18nString(UIStrings.sBytes, {
                                    n: size
                                });
                                this.setCellAccessibleName(sizeAccessibleName, cell, columnId);
                            }
                            break;
                        }
                    case 'error-message':
                        {
                            cell.classList.add('error-message');
                            if (this.item.errorMessage) {
                                cell.textContent = this.item.errorMessage;
                                if (this.highlightRegExp) {
                                    this.highlight(cell, this.item.errorMessage);
                                }
                            }
                            break;
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
                var range = new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_4__.TextRange.SourceRange(matches.index, matches[0].length);
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.highlightRangesWithStyleClass(element, [
                    range
                ], 'filter-highlight');
            }
        }
    ], [
        {
            key: "sortFunctionForColumn",
            value: function sortFunctionForColumn(columnId) {
                var nullToNegative = function(x) {
                    return x === null ? -1 : Number(x);
                };
                switch(columnId){
                    case 'url':
                        return function(a, b) {
                            return a.item.url.localeCompare(b.item.url);
                        };
                    case 'status':
                        return function(a, b) {
                            return nullToNegative(a.item.success) - nullToNegative(b.item.success);
                        };
                    case 'size':
                        return function(a, b) {
                            return nullToNegative(a.item.size) - nullToNegative(b.item.size);
                        };
                    case 'initiator':
                        return function(a, b) {
                            return (a.item.initiator.initiatorUrl || '').localeCompare(b.item.initiator.initiatorUrl || '');
                        };
                    case 'error-message':
                        return function(a, b) {
                            return (a.item.errorMessage || '').localeCompare(b.item.errorMessage || '');
                        };
                    default:
                        console.assert(false, 'Unknown sort field: ' + columnId);
                        return null;
                }
            }
        }
    ]);
    return GridNode;
} //# sourceMappingURL=DeveloperResourcesListView.js.map
(_ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_5__.SortableDataGrid.SortableDataGridNode);


}),
"./panels/developer_resources/developerResourcesListView.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright (c) 2020 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.data-grid {\n  border: none;\n}\n\n.data-grid td .url-outer {\n  width: 100%;\n  display: inline-flex;\n  justify-content: flex-start;\n}\n\n.data-grid td .url-outer .filter-highlight {\n  font-weight: bold;\n}\n\n.data-grid td .url-prefix {\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n}\n\n.data-grid td .url-suffix {\n  flex: none;\n}\n\n.data-grid td.error-message .filter-highlight {\n  font-weight: bold;\n}\n\n/*# sourceURL=developerResourcesListView.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);