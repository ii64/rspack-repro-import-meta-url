"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_network_EventSourceMessagesView_js"], {
"./panels/network/EventSourceMessagesView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Comparators: function() { return Comparators; },
  EventSourceMessageNode: function() { return EventSourceMessageNode; },
  EventSourceMessagesView: function() { return EventSourceMessagesView; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/components/data_grid/data_grid.js */ "./ui/legacy/components/data_grid/data_grid.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _eventSourceMessagesView_css_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./eventSourceMessagesView.css.js */ "./panels/network/eventSourceMessagesView.css.js");
// Copyright 2014 The Chromium Authors. All rights reserved.
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








var UIStrings = {
    /**
     *@description Text in Event Source Messages View of the Network panel
     */ id: 'Id',
    /**
     *@description Text that refers to some types
     */ type: 'Type',
    /**
     *@description Text in Event Source Messages View of the Network panel
     */ data: 'Data',
    /**
     *@description Text that refers to the time
     */ time: 'Time',
    /**
     *@description Data grid name for Event Source data grids
     */ eventSource: 'Event Source',
    /**
     *@description A context menu item in the Resource Web Socket Frame View of the Network panel
     */ copyMessage: 'Copy message',
    /**
     *@description Text to clear everything
     */ clearAll: 'Clear all',
    /**
     *@description Example for placeholder text
     */ filterByRegex: 'Filter using regex (example: https?)'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/network/EventSourceMessagesView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
var EventSourceMessagesView = /*#__PURE__*/ function(_UI_Widget_VBox) {
    "use strict";
    _inherits(EventSourceMessagesView, _UI_Widget_VBox);
    var _super = _create_super(EventSourceMessagesView);
    function EventSourceMessagesView(request) {
        _class_call_check(this, EventSourceMessagesView);
        var _this;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "request", void 0);
        _define_property(_assert_this_initialized(_this), "dataGrid", void 0);
        _define_property(_assert_this_initialized(_this), "mainToolbar", void 0);
        _define_property(_assert_this_initialized(_this), "clearAllButton", void 0);
        _define_property(_assert_this_initialized(_this), "filterTextInput", void 0);
        _define_property(_assert_this_initialized(_this), "filterRegex", void 0);
        _define_property(_assert_this_initialized(_this), "messageFilterSetting", _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('network-event-source-message-filter', ''));
        _this.element.classList.add('event-source-messages-view');
        _this.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.pane('event-stream').track({
            resize: true
        })));
        _this.request = request;
        _this.mainToolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Toolbar.Toolbar('');
        _this.clearAllButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Toolbar.ToolbarButton(i18nString(UIStrings.clearAll), 'clear');
        _this.clearAllButton.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */ , _this.clearMessages, _assert_this_initialized(_this));
        _this.mainToolbar.appendToolbarItem(_this.clearAllButton);
        var placeholder = i18nString(UIStrings.filterByRegex);
        _this.filterTextInput = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Toolbar.ToolbarFilter(placeholder, 0.4);
        _this.filterTextInput.addEventListener("TextChanged" /* UI.Toolbar.ToolbarInput.Event.TextChanged */ , _this.updateFilterSetting, _assert_this_initialized(_this));
        var filter = _this.messageFilterSetting.get();
        _this.filterRegex = null;
        _this.setFilter(filter);
        if (filter) {
            _this.filterTextInput.setValue(filter);
        }
        _this.mainToolbar.appendToolbarItem(_this.filterTextInput);
        _this.element.appendChild(_this.mainToolbar.element);
        var columns = [
            {
                id: 'id',
                title: i18nString(UIStrings.id),
                sortable: true,
                weight: 8
            },
            {
                id: 'type',
                title: i18nString(UIStrings.type),
                sortable: true,
                weight: 8
            },
            {
                id: 'data',
                title: i18nString(UIStrings.data),
                sortable: false,
                weight: 88
            },
            {
                id: 'time',
                title: i18nString(UIStrings.time),
                sortable: true,
                weight: 8
            }
        ];
        _this.dataGrid = new _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_4__.SortableDataGrid.SortableDataGrid({
            displayName: i18nString(UIStrings.eventSource),
            columns: columns,
            editCallback: undefined,
            deleteCallback: undefined,
            refreshCallback: undefined
        });
        _this.dataGrid.setStriped(true);
        _this.dataGrid.setStickToBottom(true);
        _this.dataGrid.setRowContextMenuCallback(_this.onRowContextMenu.bind(_assert_this_initialized(_this)));
        _this.dataGrid.markColumnAsSortedBy('time', _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_4__.DataGrid.Order.Ascending);
        _this.sortItems();
        _this.dataGrid.addEventListener("SortingChanged" /* DataGrid.DataGrid.Events.SortingChanged */ , _this.sortItems, _assert_this_initialized(_this));
        _this.dataGrid.setName('event-source-messages-view');
        _this.dataGrid.asWidget().show(_this.element);
        return _this;
    }
    _create_class(EventSourceMessagesView, [
        {
            key: "wasShown",
            value: function wasShown() {
                this.refresh();
                this.registerCSSFiles([
                    _eventSourceMessagesView_css_js__WEBPACK_IMPORTED_MODULE_7__["default"]
                ]);
                this.request.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkRequest.Events.EventSourceMessageAdded, this.messageAdded, this);
            }
        },
        {
            key: "willHide",
            value: function willHide() {
                this.request.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkRequest.Events.EventSourceMessageAdded, this.messageAdded, this);
            }
        },
        {
            key: "messageAdded",
            value: function messageAdded(event) {
                var message = event.data;
                if (!this.messageFilter(message)) {
                    return;
                }
                this.dataGrid.insertChild(new EventSourceMessageNode(message));
            }
        },
        {
            key: "messageFilter",
            value: function messageFilter(message) {
                return !this.filterRegex || this.filterRegex.test(message.eventName) || this.filterRegex.test(message.eventId) || this.filterRegex.test(message.data);
            }
        },
        {
            key: "clearMessages",
            value: function clearMessages() {
                clearMessageOffsets.set(this.request, this.request.eventSourceMessages().length);
                this.refresh();
            }
        },
        {
            key: "updateFilterSetting",
            value: function updateFilterSetting() {
                var text = this.filterTextInput.value();
                this.messageFilterSetting.set(text);
                this.setFilter(text);
                this.refresh();
            }
        },
        {
            key: "setFilter",
            value: function setFilter(text) {
                this.filterRegex = null;
                if (text) {
                    try {
                        this.filterRegex = new RegExp(text, 'i');
                    } catch (e) {
                        // this regex will never match any input
                        this.filterRegex = new RegExp('(?!)', 'i');
                    }
                }
            }
        },
        {
            key: "sortItems",
            value: function sortItems() {
                var sortColumnId = this.dataGrid.sortColumnId();
                if (!sortColumnId) {
                    return;
                }
                var comparator = Comparators[sortColumnId];
                if (!comparator) {
                    return;
                }
                this.dataGrid.sortNodes(comparator, !this.dataGrid.isSortOrderAscending());
            }
        },
        {
            key: "onRowContextMenu",
            value: function onRowContextMenu(contextMenu, node) {
                contextMenu.clipboardSection().appendItem(i18nString(UIStrings.copyMessage), _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.copyText.bind(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, node.data.data), {
                    jslogContext: 'copy'
                });
            }
        },
        {
            key: "refresh",
            value: function refresh() {
                var _this = this;
                this.dataGrid.rootNode().removeChildren();
                var messages = this.request.eventSourceMessages();
                var offset = clearMessageOffsets.get(this.request) || 0;
                messages = messages.slice(offset);
                messages = messages.filter(this.messageFilter.bind(this));
                messages.forEach(function(message) {
                    return _this.dataGrid.insertChild(new EventSourceMessageNode(message));
                });
            }
        }
    ]);
    return EventSourceMessagesView;
}(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Widget.VBox);
var EventSourceMessageNode = /*#__PURE__*/ function(_DataGrid_SortableDataGrid_SortableDataGridNode) {
    "use strict";
    _inherits(EventSourceMessageNode, _DataGrid_SortableDataGrid_SortableDataGridNode);
    var _super = _create_super(EventSourceMessageNode);
    function EventSourceMessageNode(message) {
        _class_call_check(this, EventSourceMessageNode);
        var _this;
        var time = new Date(message.time * 1000);
        var timeText = ('0' + time.getHours()).substr(-2) + ':' + ('0' + time.getMinutes()).substr(-2) + ':' + ('0' + time.getSeconds()).substr(-2) + '.' + ('00' + time.getMilliseconds()).substr(-3);
        var timeNode = document.createElement('div');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.createTextChild(timeNode, timeText);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Tooltip.Tooltip.install(timeNode, time.toLocaleString());
        _this = _super.call(this, {
            id: message.eventId,
            type: message.eventName,
            data: message.data,
            time: timeNode
        });
        _define_property(_assert_this_initialized(_this), "message", void 0);
        _this.message = message;
        return _this;
    }
    return EventSourceMessageNode;
}(_ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_4__.SortableDataGrid.SortableDataGridNode);
function eventSourceMessageNodeComparator(fieldGetter, a, b) {
    var aValue = fieldGetter(a.message);
    var bValue = fieldGetter(b.message);
    return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
}
var Comparators = {
    'id': eventSourceMessageNodeComparator.bind(null, function(message) {
        return message.eventId;
    }),
    'type': eventSourceMessageNodeComparator.bind(null, function(message) {
        return message.eventName;
    }),
    'time': eventSourceMessageNodeComparator.bind(null, function(message) {
        return message.time;
    })
};
var clearMessageOffsets = new WeakMap(); //# sourceMappingURL=EventSourceMessagesView.js.map


}),
"./panels/network/eventSourceMessagesView.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright (c) 2014 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.event-source-messages-view .data-grid {\n  flex: auto;\n  border: none;\n}\n\n/*# sourceURL=eventSourceMessagesView.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);