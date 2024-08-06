"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_media_EventDisplayTable_js"], {
"./panels/media/EventDisplayTable.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  EventNode: function() { return EventNode; },
  PlayerEventsView: function() { return PlayerEventsView; }
});
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/legacy/components/data_grid/data_grid.js */ "./ui/legacy/components/data_grid/data_grid.js");
/* harmony import */var _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/components/source_frame/source_frame.js */ "./ui/legacy/components/source_frame/source_frame.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _eventDisplayTable_css_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./eventDisplayTable.css.js */ "./panels/media/eventDisplayTable.css.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
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
     *@description Text for timestamps of items
     */ timestamp: 'Timestamp',
    /**
     *@description The column header for event names.
     */ eventName: 'Event name',
    /**
     *@description Text for the value of something
     */ value: 'Value',
    /**
     *@description The accessible name of a table that displays information about events that occurred
     * while a video/media player was present on the page.
     */ eventDisplay: 'Event display'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/media/EventDisplayTable.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
var EventNode = /*#__PURE__*/ function(_DataGrid_DataGrid_DataGridNode) {
    "use strict";
    _inherits(EventNode, _DataGrid_DataGrid_DataGridNode);
    var _super = _create_super(EventNode);
    function EventNode(event) {
        _class_call_check(this, EventNode);
        var _this;
        _this = _super.call(this, event, false);
        _define_property(_assert_this_initialized(_this), "expandableElement", void 0);
        _this.expandableElement = null;
        return _this;
    }
    _create_class(EventNode, [
        {
            key: "createCell",
            value: function createCell(columnId) {
                var cell = this.createTD(columnId);
                var cellData = this.data[columnId];
                if (columnId === "value" /* MediaEventColumnKeys.Value */ ) {
                    var enclosed = cell.createChild('div', 'event-display-table-contents-json-wrapper');
                    this.expandableElement = new _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_2__.JSONView.JSONView(new _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_2__.JSONView.ParsedJSON(cellData, '', ''), true);
                    this.expandableElement.markAsRoot();
                    this.expandableElement.show(enclosed);
                } else {
                    cell.classList.add('event-display-table-basic-text-table-entry');
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.UIUtils.createTextChild(cell, cellData);
                }
                return cell;
            }
        }
    ]);
    return EventNode;
}(_ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_1__.DataGrid.DataGridNode);
var PlayerEventsView = /*#__PURE__*/ function(_UI_Widget_VBox) {
    "use strict";
    _inherits(PlayerEventsView, _UI_Widget_VBox);
    var _super = _create_super(PlayerEventsView);
    function PlayerEventsView() {
        _class_call_check(this, PlayerEventsView);
        var _this;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "dataGrid", void 0);
        _define_property(_assert_this_initialized(_this), "firstEventTime", void 0);
        _this.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.pane('events')));
        // Set up element styles.
        _this.contentElement.classList.add('event-display-table-contents-table-container');
        _this.dataGrid = _this.createDataGrid([
            {
                id: "display-timestamp" /* MediaEventColumnKeys.Timestamp */ ,
                title: i18nString(UIStrings.timestamp),
                weight: 1,
                sortable: false
            },
            {
                id: "event" /* MediaEventColumnKeys.Event */ ,
                title: i18nString(UIStrings.eventName),
                weight: 2,
                sortable: false
            },
            {
                id: "value" /* MediaEventColumnKeys.Value */ ,
                title: i18nString(UIStrings.value),
                weight: 7,
                sortable: false
            }
        ]);
        _this.firstEventTime = 0;
        _this.dataGrid.setStriped(true);
        _this.dataGrid.asWidget().show(_this.contentElement);
        return _this;
    }
    _create_class(PlayerEventsView, [
        {
            key: "createDataGrid",
            value: function createDataGrid(headers) {
                var gridColumnDescs = [];
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = headers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var headerDesc = _step.value;
                        gridColumnDescs.push(PlayerEventsView.convertToGridDescriptor(headerDesc));
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
                // TODO(tmathmeyer) SortableDataGrid doesn't play nice with nested JSON
                // renderers, since they can change size, and this breaks the visible
                // element computation in ViewportDataGrid.
                var datagrid = new _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_1__.DataGrid.DataGridImpl({
                    displayName: i18nString(UIStrings.eventDisplay),
                    columns: gridColumnDescs,
                    deleteCallback: undefined,
                    editCallback: undefined,
                    refreshCallback: undefined
                });
                datagrid.asWidget().contentElement.classList.add('no-border-top-datagrid');
                return datagrid;
            }
        },
        {
            key: "onEvent",
            value: function onEvent(event) {
                if (this.firstEventTime === 0 && typeof event.timestamp === 'number') {
                    this.firstEventTime = event.timestamp;
                }
                event = this.subtractFirstEventTime(event);
                var stringified = event.value;
                try {
                    var json = JSON.parse(stringified);
                    event.event = json.event;
                    delete json['event'];
                    event.value = json;
                    var node = new EventNode(event);
                    var scroll = this.dataGrid.scrollContainer;
                    var isAtBottom = scroll.scrollTop === scroll.scrollHeight - scroll.offsetHeight;
                    this.dataGrid.rootNode().appendChild(node);
                    if (isAtBottom) {
                        scroll.scrollTop = scroll.scrollHeight;
                    }
                } catch (e) {
                // If this is a legacy message event, ignore it for now until they
                // are handled.
                }
            }
        },
        {
            key: "subtractFirstEventTime",
            value: function subtractFirstEventTime(event) {
                if (typeof event.timestamp === 'number') {
                    event.displayTimestamp = (event.timestamp - this.firstEventTime).toFixed(3);
                }
                return event;
            }
        },
        {
            key: "wasShown",
            value: function wasShown() {
                _get(_get_prototype_of(PlayerEventsView.prototype), "wasShown", this).call(this);
                this.registerCSSFiles([
                    _eventDisplayTable_css_js__WEBPACK_IMPORTED_MODULE_5__["default"]
                ]);
            }
        }
    ], [
        {
            key: "convertToGridDescriptor",
            value: function convertToGridDescriptor(columnConfig) {
                return {
                    id: columnConfig.id,
                    title: columnConfig.title,
                    sortable: columnConfig.sortable,
                    weight: columnConfig.weight || 0,
                    sort: _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_1__.DataGrid.Order.Ascending
                };
            }
        }
    ]);
    return PlayerEventsView;
} //# sourceMappingURL=EventDisplayTable.js.map
(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Widget.VBox);


}),
"./panels/media/eventDisplayTable.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2019 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.no-border-top-datagrid > .data-grid {\n  /* make sure there is no top border, it ruins the menu view */\n  border-top: 0;\n}\n\n.event-display-table-contents-table-container > .widget > .data-grid {\n  height: 100%;\n}\n\n.data-grid .event-display-table-basic-text-table-entry {\n  line-height: 26px;\n}\n\n.event-display-table-contents-json-wrapper > .json-view {\n  overflow: visible;\n}\n\n/*# sourceURL=eventDisplayTable.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);